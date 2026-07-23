import { EikenQuestion } from './eiken_questions';

// パッセージ本文（各3問で共有）
const P1_COFFEE = `Coffee, one of the world's most widely consumed beverages, has a history that stretches back more than a thousand years. According to a well-known legend, the stimulating effect of coffee was first discovered by an Ethiopian goat herder who noticed his goats becoming unusually energetic after eating the red berries of a certain shrub. Whether or not this story is true, historical records confirm that coffee cultivation and trade began in earnest on the Arabian Peninsula by the fifteenth century. In the city of Mocha, in present-day Yemen, coffee beans were roasted and brewed in much the same way they are today. Coffeehouses, known locally as qahveh khaneh, soon spread across the Middle East and became lively centers of conversation, music, and political debate. When coffee finally reached Europe in the seventeenth century, it was initially met with suspicion by some religious authorities, who dismissed it as the "bitter invention of Satan." Its popularity nevertheless grew rapidly, and European coffeehouses came to be called "penny universities," because for the price of a single cup a customer could join in hours of stimulating intellectual discussion.`;

const P2_VERTICAL = `As the world's population continues to grow and cities expand into farmland, some scientists and entrepreneurs are turning to an unconventional solution: growing crops indoors, in stacked layers, inside buildings located in the heart of urban areas. This method, known as vertical farming, uses artificial lighting and carefully controlled environments to produce vegetables regardless of the season or outside weather. Supporters argue that vertical farms offer several important advantages. Because the crops are grown close to where they will be eaten, transportation distances shrink dramatically, cutting both costs and greenhouse-gas emissions. In addition, vertical farms typically use up to ninety-five percent less water than conventional agriculture, since the water can be recycled within the closed system. However, critics point out that the technology is not without drawbacks. The powerful lamps required to replace sunlight consume enormous amounts of electricity, and unless that power comes from renewable sources, the environmental benefits may be smaller than advertised. Moreover, the high cost of equipment means that, for now, most vertical farms concentrate on leafy greens and herbs rather than staple crops such as wheat or rice.`;

const P3_BEES = `Honeybees play a role in agriculture that is far greater than most people realize. Roughly one-third of the food humans eat depends, directly or indirectly, on pollination by bees and other insects. In recent decades, however, beekeepers around the world have reported alarming losses, with entire colonies sometimes collapsing over a single winter. Scientists have not identified a single cause for these declines. Instead, they believe that several factors act together. The widespread use of certain agricultural chemicals can weaken bees' immune systems and impair their ability to navigate. A parasitic mite that feeds on bees and spreads viruses among them has also spread to almost every part of the world. On top of these threats, the steady loss of wildflower meadows to development deprives bees of the varied diet they need to stay healthy. Some farmers have responded by planting flower strips along the edges of their fields, and researchers are working to breed bees that are more resistant to disease. Even so, experts warn that without a broad reduction in chemical use, these measures alone are unlikely to reverse the trend.`;

const P4_LIBRARY = `The idea that anyone, regardless of wealth or social class, should be able to borrow books for free is a relatively modern one. For most of human history, books were rare and precious objects, copied by hand and owned only by the wealthy, by religious institutions, or by scholars. Even after the invention of printing made books cheaper, libraries generally required a subscription fee, which placed them out of reach for ordinary workers. The modern public library, funded by taxes and open to all, emerged largely in the nineteenth century. Reformers of the period argued that free access to books would improve society by educating the working class and reducing crime. In Britain, a law passed in 1850 allowed towns to use public money to establish libraries, and similar movements spread across the United States and elsewhere. Wealthy industrialists sometimes contributed as well; one famous businessman funded the construction of more than two thousand library buildings. Today, public libraries continue to evolve, offering not only books but also internet access, community programs, and digital services to millions of people who might otherwise be unable to afford them.`;

const P5_SLEEP = `Most people think of sleep simply as a time when the body rests and recovers from the day's activities. In reality, the sleeping brain is remarkably busy, and one of its most important tasks is strengthening memory. During the day, new experiences and information are recorded in the brain in a fragile, temporary form. Research suggests that while we sleep, the brain replays these experiences and gradually transfers the most important ones into long-term storage, a process scientists call consolidation. Different stages of sleep appear to serve different functions. Deep sleep, which occurs mostly in the first half of the night, seems especially important for retaining facts and information, while the dream-filled stage known as REM sleep is thought to help with emotional processing and creative problem-solving. This is one reason experts warn against staying up all night before an examination. A student who sleeps after studying is often able to recall material better than one who sacrifices sleep in order to review for a few extra hours. In short, far from being wasted time, sleep is an active and essential part of learning.`;

const P6_SILKROAD = `The Silk Road was not a single paved highway but a vast network of trade routes that connected China with the Mediterranean world for well over a thousand years. Despite its name, silk was only one of countless goods carried along these routes. Merchants transported spices, precious stones, glassware, paper, and horses, passing their cargo from hand to hand across deserts and mountain ranges. Few traders traveled the entire distance themselves; instead, goods changed owners many times before reaching their final markets. Yet the Silk Road's significance went far beyond commerce. Along with merchandise, travelers carried ideas, religions, technologies, and even diseases. Buddhism, for example, spread from India into China largely through contact along these routes, and inventions such as papermaking gradually moved westward. Cities that lay along the way grew wealthy by providing food, lodging, and protection to passing caravans. The importance of the overland routes eventually declined as sea travel became safer and cheaper, allowing ships to carry far larger quantities of goods at lower cost. Nevertheless, the cultural exchanges made possible by the Silk Road left a lasting mark on civilizations across the continent.`;

const P7_ENERGY = `Wind and solar power have grown remarkably cheap in recent years, and in many regions they are now less expensive to build than power plants that burn coal or gas. Yet a fundamental challenge remains: the sun does not always shine, and the wind does not always blow. Because electricity must be produced at the exact moment it is used, this variability makes it difficult to rely on renewable sources alone. The most promising solution is large-scale energy storage, which allows surplus electricity generated on sunny or windy days to be saved for later. Batteries are the best-known form of storage, and their falling prices have made them increasingly practical. However, batteries are not the only option. Some facilities pump water uphill into a reservoir when power is plentiful and release it through turbines when demand rises. Others are experimenting with storing energy as heat or as compressed air. Engineers caution that no single technology will be sufficient on its own. Instead, a reliable low-carbon grid will likely combine many forms of storage with better connections between regions, so that surplus power in one area can help meet shortages in another.`;

const P8_COLOR = `Colors do more than simply please the eye; they can influence human emotions, behavior, and even physical responses. Researchers who study this field have found, for instance, that warm colors such as red and orange tend to attract attention and can create a sense of urgency, which is why they are often used on warning signs and clearance-sale advertisements. Cool colors like blue and green, by contrast, are frequently associated with calmness and trust, and are popular in the branding of banks and hospitals. Yet the meanings attached to colors are not universal. While white is worn at weddings in many Western countries as a symbol of purity, it is traditionally associated with mourning in parts of Asia. Such differences remind us that our responses to color are shaped as much by culture and learning as by biology. Businesses take these findings seriously. Restaurants may use red and yellow to stimulate appetite, and software companies test different button colors to see which encourages more people to click. Critics warn, however, that the effects of color are often exaggerated in popular writing, and that factors such as personal experience usually matter far more than color alone.`;

const P9_LANGUAGE = `Of the roughly seven thousand languages spoken in the world today, linguists estimate that nearly half may disappear before the end of this century. A language is generally considered endangered when children in a community stop learning it and begin speaking a more dominant language instead. When the last fluent speakers of such a language die, a unique way of understanding the world is often lost with them. Many endangered languages have never been written down, and they may contain detailed knowledge about local plants, animals, and traditions that exists nowhere else. For this reason, some researchers rush to record vocabulary, stories, and grammar before it is too late. Efforts to keep threatened languages alive have met with mixed success. In a few cases, communities have established schools where lessons are taught entirely in the traditional language, and modern technology such as smartphone applications has helped younger people practice. Critics sometimes argue that resources would be better spent elsewhere, but supporters respond that losing a language is like losing an irreplaceable library. They point out that reviving a language can also strengthen a community's sense of identity and pride.`;

const P10_CORAL = `Coral reefs cover less than one percent of the ocean floor, yet they support around a quarter of all marine species, providing food and shelter to an astonishing variety of fish and other creatures. They also protect coastlines from storms and supply income to coastal communities through fishing and tourism. In recent decades, however, reefs have suffered severe damage. When ocean temperatures rise even slightly for an extended period, corals expel the tiny algae that live inside them and give them both color and food, an event known as bleaching. If the water does not cool in time, the weakened corals may die. Faced with these losses, scientists have begun experimenting with ways to help reefs recover. In some projects, divers grow young corals in underwater nurseries and later attach them to damaged reefs. Others are searching for and breeding coral varieties that can tolerate warmer water. While such efforts have produced encouraging local results, researchers are careful to stress their limits. Restoration can repair small areas, but it cannot keep pace with damage on a global scale. Ultimately, they warn, the survival of the world's reefs depends on reducing the greenhouse-gas emissions that cause the oceans to warm.`;

const P11_PRINTING = `Before the middle of the fifteenth century, producing a book in Europe was a slow and costly process. Each copy had to be written out by hand, often by monks who might spend months or even years on a single volume. As a result, books were scarce and expensive, and the ability to read was limited mainly to the clergy and the wealthy. This situation changed dramatically with the development of the printing press by Johannes Gutenberg in Germany around 1450. His key innovation was movable type: individual metal letters that could be arranged to form a page, used to print many copies, and then rearranged for the next page. With this system, a printer could produce in a single day more pages than a scribe could copy in months. The consequences were far-reaching. Books became cheaper and more widely available, literacy spread, and new ideas could circulate across Europe with unprecedented speed. Some historians argue that the printing press helped make possible major movements such as the Reformation, because pamphlets and translations of religious texts could now reach ordinary people directly. In this sense, Gutenberg's invention reshaped not only publishing but the course of history itself.`;

const P12_REMOTE = `When millions of employees were suddenly required to work from home a few years ago, many managers feared that productivity would collapse. To their surprise, a number of studies found the opposite: workers often completed just as much, and sometimes more, than they had in the office. Freed from long daily commutes and frequent interruptions, some employees reported that they could concentrate better and enjoyed a healthier balance between work and personal life. Yet the picture is more complicated than these findings suggest. Remote work appears to suit certain tasks, such as writing reports or analyzing data, far better than others that depend on spontaneous conversation and teamwork. Newer employees, in particular, may struggle without the informal guidance they would normally receive by sitting near experienced colleagues. Some workers also describe feelings of isolation and difficulty separating their jobs from their home lives. For these reasons, many companies have settled on a compromise known as the hybrid model, in which staff spend part of the week in the office and part at home. Supporters believe this arrangement combines the flexibility of remote work with the human connection that face-to-face contact provides.`;

const P13_MICROBIOME = `The human body is home to trillions of microorganisms, most of which live in the digestive system. Collectively known as the gut microbiome, these bacteria were long dismissed as harmless passengers or even as germs to be eliminated. Recent research, however, has revealed that they play a surprisingly active role in keeping us healthy. The microbes help digest food that our own bodies cannot break down, produce certain vitamins, and train the immune system to distinguish between harmful invaders and the body's own tissues. Scientists have even found evidence linking the microbiome to conditions ranging from obesity to mood disorders, although they caution that much of this research is still at an early stage. What is clear is that diet strongly influences which microbes flourish. A diet rich in fiber from vegetables, fruits, and whole grains tends to support a diverse community of beneficial bacteria, while a diet high in processed foods and sugar may reduce that diversity. This growing understanding has led some doctors to view the microbiome as an organ in its own right, and to hope that one day illnesses might be treated by deliberately adjusting the balance of bacteria in the gut.`;

const P14_FOODWASTE = `It is a striking paradox that while hundreds of millions of people around the world do not have enough to eat, roughly a third of all the food produced for human consumption is never eaten. This waste occurs at every stage of the supply chain. On farms, crops may be left unharvested because they are the wrong shape or size for supermarket shelves. During transport and storage, food spoils for lack of proper refrigeration, a particular problem in warmer regions. In wealthy countries, much of the waste happens in homes and restaurants, where edible food is simply thrown away. The consequences extend beyond the obvious loss of nourishment. Producing food that no one eats wastes enormous quantities of water, land, and energy, and when discarded food rots in landfills, it releases gases that contribute to climate change. Fortunately, solutions exist at every level. Farmers can sell imperfect produce at reduced prices, businesses can donate surplus food to charities, and households can plan meals more carefully and learn to store food properly. Some cities have introduced programs to collect food scraps and turn them into compost or energy, demonstrating that even unavoidable waste can be put to good use.`;

const P15_TEA = `The Japanese tea ceremony, known as chanoyu, is far more than a simple matter of drinking tea. It is a refined art form with roots stretching back several centuries, shaped over time by Zen Buddhist ideals of simplicity and mindfulness. In a traditional ceremony, every movement of the host, from the folding of a cloth to the whisking of the powdered green tea, follows a carefully prescribed order that has been practiced for generations. The setting is equally important. Guests often pass through a quiet garden before entering a small, plainly decorated room, a transition meant to help them leave behind the concerns of everyday life. The tea master Sen no Rikyu, who lived in the sixteenth century, is credited with perfecting the aesthetic that still guides the ceremony today, emphasizing rustic simplicity over showy display. One principle frequently associated with chanoyu is expressed in the phrase ichi-go ichi-e, often translated as "one time, one meeting." It reminds both host and guests that each gathering is unique and can never be repeated exactly, and therefore should be treasured. In this way, the ceremony teaches an attitude toward life that extends well beyond the tea room.`;

const P16_SPACE = `Since the first satellite was launched in 1957, human beings have sent thousands of spacecraft into orbit around the Earth. Many of these are no longer in use, and over the decades they have been joined by countless fragments created when old rockets exploded or satellites collided. Today, the region of space closest to our planet is cluttered with millions of pieces of debris, ranging from spent rocket stages to flecks of paint. Although a fleck of paint may sound harmless, objects in orbit travel at such tremendous speeds that even a tiny fragment can damage or destroy a functioning satellite on impact. Experts worry about a dangerous chain reaction: a single collision could produce a cloud of new fragments, each capable of causing further collisions, until certain orbits become too hazardous to use. Because such orbits are vital for communications, weather forecasting, and navigation, the stakes are high. Engineers are therefore exploring ways to clean up space, from nets and harpoons that could capture large pieces to lasers that might nudge debris into the atmosphere, where it would burn up harmlessly. Others argue that the most practical step is prevention: designing satellites that can safely remove themselves from orbit once their missions end.`;

const P17_AQUEDUCT = `The ancient Romans are remembered for many achievements, but few are more impressive than the aqueducts that supplied their cities with water. In an age without electric pumps, Roman engineers devised a way to carry water over long distances using nothing but the force of gravity. By constructing channels that sloped downward at a very gentle and carefully calculated angle, they could move water from distant springs and rivers into the heart of a city. Where valleys interrupted the route, the Romans built towering stone arches to keep the channel at the correct height, and some of these graceful structures still stand today. The water that arrived in the cities was used not only for drinking and cooking but also for public fountains, baths, and even systems that carried away waste. The city of Rome itself was eventually served by many separate aqueducts, together delivering an enormous volume of water each day. Maintaining this network required constant effort, as channels became blocked with mineral deposits and stonework needed repair. When the Roman Empire declined, many aqueducts fell into disuse, and some cities would not enjoy a comparable supply of running water again for well over a thousand years.`;

const P18_GIG = `In recent years, a growing number of people have begun to earn a living not through traditional full-time employment but by taking on a series of short-term tasks arranged through smartphone applications. This way of working, often called the gig economy, includes activities such as driving passengers, delivering meals, and completing freelance projects online. For many workers, its main attraction is flexibility. They can decide for themselves when and how much to work, an arrangement that can suit students, parents, or anyone seeking to supplement another income. The companies that operate these platforms benefit as well, since they can expand or shrink their workforce quickly according to demand. However, this flexibility comes at a cost. Because gig workers are usually classified as independent contractors rather than employees, they typically receive none of the protections that regular jobs provide, such as paid holidays, sick leave, or a guaranteed minimum wage. Earnings can be unpredictable, and workers bear expenses such as fuel and vehicle repairs themselves. As the gig economy expands, governments in several countries are debating how to regulate it, searching for rules that preserve its flexibility while offering workers greater security.`;

const P19_BIRDS = `Every year, billions of birds undertake extraordinary journeys, flying thousands of kilometers between the regions where they breed and the warmer places where they spend the winter. For centuries, these migrations have followed a remarkably reliable timetable, guided by cues such as the changing length of the day. In recent decades, however, scientists have observed that a warming climate is beginning to disrupt these ancient patterns. As springs arrive earlier, the insects and plants that many birds depend on for food are appearing sooner than they once did. The problem is that day length, unlike temperature, has not changed. Birds that use it as their signal to migrate may therefore arrive at their breeding grounds too late, after the peak of available food has already passed. This mismatch in timing can leave parents unable to find enough food for their young, causing some populations to decline. Certain species have shown a degree of flexibility, gradually shifting their schedules or breeding ranges in response to the changing conditions. Yet researchers warn that many birds cannot adapt quickly enough, and that the long-term survival of some species may depend on how rapidly the climate continues to change.`;

const P20_OLYMPICS = `The Olympic Games, watched today by billions of people around the world, trace their origins to ancient Greece nearly three thousand years ago. The earliest recorded games were held in 776 BC at Olympia, a sacred site dedicated to the god Zeus, and they continued to be celebrated there every four years for many centuries. Unlike the modern event, the ancient games were part of a religious festival, and only free-born Greek men were permitted to compete. The contests included running, wrestling, boxing, and chariot racing, and victorious athletes were rewarded not with money but with a simple wreath of olive leaves, along with great honor in their home cities. Remarkably, wars between rival Greek states were sometimes paused so that athletes and spectators could travel safely to the games. The ancient tradition eventually came to an end after the Roman Empire adopted Christianity and banned such pagan festivals. It was not until 1896, more than fifteen hundred years later, that a French educator named Pierre de Coubertin succeeded in reviving the Olympics as an international competition, hoping that friendly athletic rivalry might promote peace and understanding among nations.`;

export const eikenQuestions2kyuReadingX2: EikenQuestion[] = [
  // ── Passage 1: コーヒーの歴史 (001–003) ──────────────────────────
  {
    id: 'eiken_2kyu_rea2_001',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P1_COFFEE}\n\nAccording to the passage, which of the following statements is TRUE about the early history of coffee?`,
    choices: [
      { key: 'A', text: 'Coffee cultivation first developed in Europe during the seventeenth century.' },
      { key: 'B', text: 'Historical records confirm that coffee was traded on the Arabian Peninsula by the fifteenth century.' },
      { key: 'C', text: 'The story of the Ethiopian goat herder has been proven by written historical documents.' },
      { key: 'D', text: 'Coffee was prepared in Mocha in a way completely different from how it is made today.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "historical records confirm that coffee cultivation and trade began in earnest on the Arabian Peninsula by the fifteenth century" とあり、Bが正解。Aはヨーロッパに伝わったのは17世紀だが「栽培が始まった」わけではない。Cはヤギ飼いの話は legend（伝説）で証明されていない。Dは "in much the same way they are today" とあり誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: historical records confirm ... by the fifteenth century\n○正解の根拠: 15世紀にアラビア半島で栽培・交易が始まったと記録が裏づける\n×ひっかけ: 17世紀は「ヨーロッパへ到達」した時期であり栽培開始ではない\n→結論。confirm される事実(記録)と legend(伝説)を区別して読む。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_002',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P1_COFFEE}\n\nWhy were European coffeehouses called "penny universities"?`,
    choices: [
      { key: 'A', text: 'They were official schools that charged one penny as tuition.' },
      { key: 'B', text: 'For the price of a single cup, a customer could take part in intellectual discussion.' },
      { key: 'C', text: 'They were built next to famous European universities.' },
      { key: 'D', text: 'They sold used books for only a penny each.' },
    ],
    correctKey: 'B',
    explanation:
      '本文末尾に "for the price of a single cup a customer could join in hours of stimulating intellectual discussion" とあり、これが penny universities と呼ばれた理由。よってBが正解。A・C・Dはいずれも本文に根拠がなく、コーヒー1杯で知的議論に参加できたという点を誤って言い換えている。\n【図解】読み取りのポイント\n★本文の該当箇所: "penny universities," because for the price of a single cup...\n○正解の根拠: 1杯の値段で長時間の知的議論に加われたから\n×ひっかけ: 実際の学校・大学・古本屋とする選択肢は本文に無い\n→結論。比喩的な呼び名の理由を直後の because 節で確認する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_003',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P1_COFFEE}\n\nWhat was the initial reaction to coffee when it first reached Europe?`,
    choices: [
      { key: 'A', text: 'It was immediately welcomed by all religious authorities.' },
      { key: 'B', text: 'It was regarded with suspicion by some religious authorities.' },
      { key: 'C', text: 'It was banned throughout the entire continent for a hundred years.' },
      { key: 'D', text: 'It was consumed only by university professors.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "it was initially met with suspicion by some religious authorities, who dismissed it as the \'bitter invention of Satan\'" とあり、Bが正解。Aは「すべての宗教当局に歓迎された」で逆。Cの大陸全体での100年禁止やDの大学教授限定は本文に記載がない。\n【図解】読み取りのポイント\n★本文の該当箇所: initially met with suspicion by some religious authorities\n○正解の根拠: 一部の宗教当局が疑いの目で見た(悪魔の発明と呼んだ)\n×ひっかけ: "all"(すべて歓迎)や大陸全体の禁止は言い過ぎ\n→結論。some と all の違い、否定的評価の主体を正確に押さえる。',
    difficulty: 'advanced',
  },

  // ── Passage 2: 垂直農法 (004–006) ────────────────────────────────
  {
    id: 'eiken_2kyu_rea2_004',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P2_VERTICAL}\n\nAccording to the passage, what is one advantage of vertical farming?`,
    choices: [
      { key: 'A', text: 'It can produce staple crops such as wheat and rice more cheaply than herbs.' },
      { key: 'B', text: 'It uses far less water than conventional agriculture because water is recycled.' },
      { key: 'C', text: 'It requires no electricity because it relies entirely on natural sunlight.' },
      { key: 'D', text: 'It can only grow crops during specific seasons of the year.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "vertical farms typically use up to ninety-five percent less water than conventional agriculture, since the water can be recycled within the closed system" とあり、Bが正解。Aは本文と逆で、今は葉物・ハーブが中心。Cは "powerful lamps ... consume enormous amounts of electricity" とあり誤り。Dは "regardless of the season" とあり誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: use up to ninety-five percent less water ... recycled within the closed system\n○正解の根拠: 水を循環利用するため使用量が大幅に少ない\n×ひっかけ: 電気不要(C)・季節限定(D)は本文の記述と正反対\n→結論。利点(水)と欠点(電力)を混同しないよう対比を整理する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_005',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P2_VERTICAL}\n\nWhat concern do critics raise about vertical farming?`,
    choices: [
      { key: 'A', text: 'The lamps that replace sunlight use large amounts of electricity.' },
      { key: 'B', text: 'The crops must be transported over very long distances to reach consumers.' },
      { key: 'C', text: 'The farms waste enormous quantities of water compared with ordinary farms.' },
      { key: 'D', text: 'The vegetables cannot be grown unless the outside weather is warm.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "The powerful lamps required to replace sunlight consume enormous amounts of electricity" とあり、Aが批評家が指摘する懸念。Bは "transportation distances shrink dramatically" とあり逆。Cは水を大幅に節約するので誤り。Dは天候に関係なく栽培できると述べられており誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: powerful lamps ... consume enormous amounts of electricity\n○正解の根拠: 太陽光の代わりのランプが大量の電力を消費する点が懸念\n×ひっかけ: 輸送距離(B)・水(C)はむしろ利点として挙げられている\n→結論。critics(批評家)が述べる drawback を利点と取り違えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_006',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P2_VERTICAL}\n\nWhat is the main idea of the passage?`,
    choices: [
      { key: 'A', text: 'Vertical farming has already completely replaced traditional agriculture worldwide.' },
      { key: 'B', text: 'Vertical farming offers real benefits but also faces significant limitations.' },
      { key: 'C', text: 'Vertical farming is useless because it consumes too much electricity.' },
      { key: 'D', text: 'Vertical farming is mainly used to grow wheat and rice in cities.' },
    ],
    correctKey: 'B',
    explanation:
      '本文は前半で利点(輸送短縮・節水)を、後半で欠点(電力消費・高コスト・作物の限定)を述べており、利点と限界の両面を扱うBが主旨。Aの「完全に置き換えた」やCの「無用」は一方に偏り言い過ぎ。Dは主に葉物・ハーブなので誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: Supporters argue ... However, critics point out ...\n○正解の根拠: 利点と欠点の両面をバランスよく提示している\n×ひっかけ: 完全置換(A)・全否定(C)は極端で本文の中立的論調に反する\n→結論。However 以降の対比構造から「両面提示」を主旨と判断する。',
    difficulty: 'advanced',
  },

  // ── Passage 3: ミツバチの減少 (007–009) ──────────────────────────
  {
    id: 'eiken_2kyu_rea2_007',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P3_BEES}\n\nAccording to the passage, why are honeybees important to agriculture?`,
    choices: [
      { key: 'A', text: 'They produce most of the honey that humans eat every day.' },
      { key: 'B', text: 'About one-third of the food humans eat depends on pollination by insects.' },
      { key: 'C', text: 'They protect crops by eating harmful parasitic mites.' },
      { key: 'D', text: 'They are the only insects capable of navigating over long distances.' },
    ],
    correctKey: 'B',
    explanation:
      '本文冒頭に "Roughly one-third of the food humans eat depends, directly or indirectly, on pollination by bees and other insects" とあり、Bが正解。Aの蜂蜜生産、Cのダニを食べる、Dの長距離航行の唯一性はいずれも本文に述べられていない。\n【図解】読み取りのポイント\n★本文の該当箇所: one-third of the food humans eat depends ... on pollination\n○正解の根拠: 食料の約3分の1が受粉に依存している\n×ひっかけ: 蜂蜜(A)やダニ捕食(C)は本文の論点ではない\n→結論。重要性の根拠は「受粉」であり蜂蜜生産ではない点に注意。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_008',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P3_BEES}\n\nWhat does the passage say about the cause of colony losses?`,
    choices: [
      { key: 'A', text: 'Scientists have identified a single clear cause for the losses.' },
      { key: 'B', text: 'The losses are believed to result from several factors acting together.' },
      { key: 'C', text: 'The losses are caused only by a lack of wildflower meadows.' },
      { key: 'D', text: 'The losses have no connection to agricultural chemicals at all.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "Scientists have not identified a single cause ... they believe that several factors act together" とあり、Bが正解。Aは「単一の原因を特定した」で本文と逆。Cは花畑の減少だけと限定しているが本文は複数要因を挙げる。Dは農薬が要因の一つとされており誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: not identified a single cause ... several factors act together\n○正解の根拠: 複数の要因が複合的に作用しているとされる\n×ひっかけ: 単一原因(A)や単一要因への限定(C)は本文の否定と矛盾\n→結論。not a single ... but several の構造を見落とさない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_009',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P3_BEES}\n\nWhat do experts warn about the measures taken to help bees?`,
    choices: [
      { key: 'A', text: 'The measures have already completely reversed the decline of bees.' },
      { key: 'B', text: 'Without a broad reduction in chemical use, these measures alone are unlikely to reverse the trend.' },
      { key: 'C', text: 'Planting flower strips has made the situation much worse for bees.' },
      { key: 'D', text: 'Breeding disease-resistant bees is impossible with current technology.' },
    ],
    correctKey: 'B',
    explanation:
      '本文末尾に "without a broad reduction in chemical use, these measures alone are unlikely to reverse the trend" とあり、Bが正解。Aは「すでに完全に逆転した」で本文と矛盾。Cは花の帯を植えるのは対策であり悪化させたとは述べていない。Dの「不可能」も本文になく、研究が進行中とある。\n【図解】読み取りのポイント\n★本文の該当箇所: without a broad reduction in chemical use ... unlikely to reverse the trend\n○正解の根拠: 化学物質使用の広範な削減なしでは対策だけでは不十分\n×ひっかけ: すでに完全逆転(A)は expert の警告と正反対\n→結論。専門家の警告(条件付きの限界)を正確に読み取る。',
    difficulty: 'advanced',
  },

  // ── Passage 4: 公共図書館の起源 (010–012) ────────────────────────
  {
    id: 'eiken_2kyu_rea2_010',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P4_LIBRARY}\n\nAccording to the passage, what was true about books for most of human history?`,
    choices: [
      { key: 'A', text: 'They were freely available to workers of every social class.' },
      { key: 'B', text: 'They were rare and precious objects owned mainly by the wealthy or by institutions.' },
      { key: 'C', text: 'They were always distributed by governments using tax money.' },
      { key: 'D', text: 'They were cheap to produce because they were printed by machine.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "books were rare and precious objects, copied by hand and owned only by the wealthy, by religious institutions, or by scholars" とあり、Bが正解。Aは労働者に無料で開かれたのは近代以降で誤り。Cの税金による配布も近代の話。Dの機械印刷で安価は「印刷発明後もなお購読料が必要だった」とある文脈と食い違う。\n【図解】読み取りのポイント\n★本文の該当箇所: books were rare and precious objects ... owned only by the wealthy...\n○正解の根拠: 長い歴史の大半で本は希少・高価で富裕層や施設の所有物\n×ひっかけ: 無料公開(A)や税金配布(C)は19世紀以降の近代的発想\n→結論。「歴史の大半」と「近代」の時制区分を混同しない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_011',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P4_LIBRARY}\n\nWhy did nineteenth-century reformers support free public libraries?`,
    choices: [
      { key: 'A', text: 'They believed free access to books would educate the working class and reduce crime.' },
      { key: 'B', text: 'They wanted to earn profits from subscription fees paid by workers.' },
      { key: 'C', text: 'They hoped to limit reading to religious institutions only.' },
      { key: 'D', text: 'They intended to replace schools entirely with libraries.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "Reformers of the period argued that free access to books would improve society by educating the working class and reducing crime" とあり、Aが正解。Bは無料化の話であり購読料で利益を得る目的ではない。Cは読書を宗教施設に限る意図で逆。Dの学校を完全に置き換える記述はない。\n【図解】読み取りのポイント\n★本文の該当箇所: free access ... educating the working class and reducing crime\n○正解の根拠: 労働者の教育と犯罪減少で社会を改善するため\n×ひっかけ: 利益目的(B)や宗教施設限定(C)は改革者の趣旨と矛盾\n→結論。改革者(reformers)の動機を argued that 以下で特定する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_012',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P4_LIBRARY}\n\nWhat does the passage say about public libraries today?`,
    choices: [
      { key: 'A', text: 'They have stopped lending books and now focus only on the internet.' },
      { key: 'B', text: 'They continue to evolve, offering internet access, programs, and digital services as well as books.' },
      { key: 'C', text: 'They once again require a subscription fee from every visitor.' },
      { key: 'D', text: 'They are funded entirely by a single wealthy industrialist.' },
    ],
    correctKey: 'B',
    explanation:
      '本文末に "public libraries continue to evolve, offering not only books but also internet access, community programs, and digital services" とあり、Bが正解。Aは「本の貸出をやめた」で not only books の記述と矛盾。Cの購読料復活やDの単一富豪による全額出資は本文にない。\n【図解】読み取りのポイント\n★本文の該当箇所: continue to evolve, offering not only books but also internet access...\n○正解の根拠: 本に加えネット・地域プログラム・デジタルサービスを提供\n×ひっかけ: 本の貸出をやめた(A)は not only books と矛盾\n→結論。not only A but also B の追加関係を「置換」と誤読しない。',
    difficulty: 'advanced',
  },

  // ── Passage 5: 睡眠と記憶 (013–015) ──────────────────────────────
  {
    id: 'eiken_2kyu_rea2_013',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P5_SLEEP}\n\nAccording to the passage, what is one important task the brain performs during sleep?`,
    choices: [
      { key: 'A', text: 'It completely erases the memories formed during the day.' },
      { key: 'B', text: 'It strengthens memory by transferring important experiences into long-term storage.' },
      { key: 'C', text: 'It stops all activity so that the body can fully rest.' },
      { key: 'D', text: 'It records new information only during REM sleep.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "the brain replays these experiences and gradually transfers the most important ones into long-term storage, a process scientists call consolidation" とあり、Bが正解。Aは記憶を消すのではなく強化するので逆。Cは "the sleeping brain is remarkably busy" とあり活動を止めない。Dの記録がREM睡眠だけという記述はない。\n【図解】読み取りのポイント\n★本文の該当箇所: transfers the most important ones into long-term storage ... consolidation\n○正解の根拠: 重要な経験を長期記憶へ移し固定化(記憶強化)する\n×ひっかけ: 「消去」(A)や「活動停止」(C)は本文と正反対\n→結論。睡眠中の脳は busy で consolidation を行うと押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_014',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P5_SLEEP}\n\nWhat does the passage say about deep sleep?`,
    choices: [
      { key: 'A', text: 'It occurs mostly in the second half of the night and helps with creativity.' },
      { key: 'B', text: 'It seems especially important for retaining facts and information.' },
      { key: 'C', text: 'It is the stage most closely linked to emotional processing.' },
      { key: 'D', text: 'It has no connection to memory or learning at all.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "Deep sleep, which occurs mostly in the first half of the night, seems especially important for retaining facts and information" とあり、Bが正解。Aは「後半に起き創造性」で誤り(前半に多い)。Cの感情処理やDの「学習と無関係」はREM睡眠や本文全体と食い違う。\n【図解】読み取りのポイント\n★本文の該当箇所: Deep sleep ... especially important for retaining facts\n○正解の根拠: 深い睡眠は事実・情報の保持に特に重要\n×ひっかけ: 感情処理・創造性(A/C)はREM睡眠の役割\n→結論。deep sleep と REM sleep の機能を取り違えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_015',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P5_SLEEP}\n\nWhy does the author warn against staying up all night before an examination?`,
    choices: [
      { key: 'A', text: 'Because a student who sleeps after studying often recalls material better than one who does not.' },
      { key: 'B', text: 'Because studying at night is impossible without special lighting.' },
      { key: 'C', text: 'Because examinations are always held early in the morning.' },
      { key: 'D', text: 'Because sleep prevents students from learning any new facts.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "A student who sleeps after studying is often able to recall material better than one who sacrifices sleep" とあり、Aが正解。B・Cは本文に根拠がない。Dは睡眠が学習を妨げるという逆の主張で誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: A student who sleeps after studying ... recall material better\n○正解の根拠: 勉強後に眠った学生の方が記憶を思い出しやすい\n×ひっかけ: 睡眠が学習を妨げる(D)は本文の主旨と正反対\n→結論。徹夜を戒める理由は「睡眠が記憶固定を助ける」から。',
    difficulty: 'advanced',
  },

  // ── Passage 6: シルクロード (016–018) ────────────────────────────
  {
    id: 'eiken_2kyu_rea2_016',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P6_SILKROAD}\n\nAccording to the passage, which of the following is TRUE about the Silk Road?`,
    choices: [
      { key: 'A', text: 'It was a single paved highway used only for transporting silk.' },
      { key: 'B', text: 'It was a network of routes along which many kinds of goods were carried.' },
      { key: 'C', text: 'Most traders personally traveled its entire length from China to the Mediterranean.' },
      { key: 'D', text: 'It was used exclusively by religious travelers, not merchants.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "a vast network of trade routes" とあり、絹以外にも "spices, precious stones, glassware, paper, and horses" を運んだとあるのでBが正解。Aは「単一の舗装道路で絹専用」で誤り。Cは "Few traders traveled the entire distance themselves" とあり逆。Dは商人が中心で誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: a vast network of trade routes ... silk was only one of countless goods\n○正解の根拠: 多様な商品が運ばれた交易路の「網」だった\n×ひっかけ: 「単一の道」「絹専用」「全行程を1人で移動」は本文と矛盾\n→結論。not a single ... but a network の対比を核に読む。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_017',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P6_SILKROAD}\n\nWhat does the passage say the Silk Road spread besides goods?`,
    choices: [
      { key: 'A', text: 'Only silk and horses, but nothing else of value.' },
      { key: 'B', text: 'Ideas, religions, technologies, and even diseases.' },
      { key: 'C', text: 'Sea-travel routes that replaced overland trade.' },
      { key: 'D', text: 'Nothing beyond material goods, since travelers avoided contact.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "travelers carried ideas, religions, technologies, and even diseases" とあり、Bが正解。仏教の伝播や製紙技術の西進が例として挙げられる。Aは商品のみとする点で誤り。Cは海路は後の話。Dは接触を避けたとは述べておらず誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: travelers carried ideas, religions, technologies, and even diseases\n○正解の根拠: 物だけでなく思想・宗教・技術・病気も伝わった\n×ひっかけ: 「物以外は何も伝えなかった」(D)は本文と正反対\n→結論。商業(commerce)を超えた文化交流の側面に注目する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_018',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P6_SILKROAD}\n\nWhy did the importance of the overland Silk Road eventually decline?`,
    choices: [
      { key: 'A', text: 'Because the goods traded along it were no longer wanted anywhere.' },
      { key: 'B', text: 'Because sea travel became safer and cheaper and could carry more goods.' },
      { key: 'C', text: 'Because the cities along the route refused to protect caravans.' },
      { key: 'D', text: 'Because all the deserts and mountains along the route disappeared.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "declined as sea travel became safer and cheaper, allowing ships to carry far larger quantities of goods at lower cost" とあり、Bが正解。A・C・Dはいずれも本文に根拠がなく、衰退の理由は「海路の発達」である。\n【図解】読み取りのポイント\n★本文の該当箇所: declined as sea travel became safer and cheaper\n○正解の根拠: 海路がより安全・安価で大量輸送できるようになったため\n×ひっかけ: 商品需要の消失(A)や都市の保護拒否(C)は本文にない\n→結論。衰退の原因を示す as 節を根拠に選ぶ。',
    difficulty: 'advanced',
  },

  // ── Passage 7: 再生可能エネルギーと蓄電 (019–021) ────────────────
  {
    id: 'eiken_2kyu_rea2_019',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P7_ENERGY}\n\nAccording to the passage, what is the fundamental challenge of relying on wind and solar power?`,
    choices: [
      { key: 'A', text: 'They are far more expensive to build than coal or gas plants.' },
      { key: 'B', text: 'The sun and wind are not always available, yet electricity must be used as it is produced.' },
      { key: 'C', text: 'They produce far too much electricity for any grid to handle.' },
      { key: 'D', text: 'They cannot be connected to the electricity grid at all.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "the sun does not always shine, and the wind does not always blow ... electricity must be produced at the exact moment it is used" とあり、Bが正解。Aは "less expensive to build" とあり逆。C・Dは本文に根拠がない。\n【図解】読み取りのポイント\n★本文の該当箇所: the sun does not always shine ... must be produced at the exact moment it is used\n○正解の根拠: 供給が不安定な一方、電力は生成と同時に使う必要がある\n×ひっかけ: 建設費が高い(A)は本文の「より安い」と矛盾\n→結論。variability(変動性)が中心的な課題だと押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_020',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P7_ENERGY}\n\nWhich of the following is mentioned as a method of energy storage other than batteries?`,
    choices: [
      { key: 'A', text: 'Burning coal at night to store heat for the day.' },
      { key: 'B', text: 'Pumping water uphill into a reservoir and releasing it through turbines later.' },
      { key: 'C', text: 'Shutting down the entire grid when power is plentiful.' },
      { key: 'D', text: 'Exporting all surplus electricity to other planets.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "Some facilities pump water uphill into a reservoir when power is plentiful and release it through turbines when demand rises" とあり、Bが正解。他に熱や圧縮空気による貯蔵も挙げられる。Aの石炭燃焼、Cの送電網停止、Dは本文にない。\n【図解】読み取りのポイント\n★本文の該当箇所: pump water uphill into a reservoir ... release it through turbines\n○正解の根拠: 揚水式で余剰電力を蓄え需要時に発電する\n×ひっかけ: 石炭燃焼(A)は再生可能エネルギー蓄電の例ではない\n→結論。batteries 以外の option を本文の例示から選ぶ。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_021',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P7_ENERGY}\n\nWhat do engineers say about achieving a reliable low-carbon grid?`,
    choices: [
      { key: 'A', text: 'A single storage technology will be enough to solve the problem.' },
      { key: 'B', text: 'It will likely require combining many forms of storage with better connections between regions.' },
      { key: 'C', text: 'It is impossible without returning to coal and gas power plants.' },
      { key: 'D', text: 'It depends only on making batteries as cheap as possible.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "no single technology will be sufficient on its own. Instead, a reliable low-carbon grid will likely combine many forms of storage with better connections between regions" とあり、Bが正解。Aは "no single technology will be sufficient" と矛盾。C・Dは本文の主張と異なる。\n【図解】読み取りのポイント\n★本文の該当箇所: no single technology ... combine many forms of storage with better connections\n○正解の根拠: 複数の蓄電手段と地域間連携の組み合わせが必要\n×ひっかけ: 単一技術で十分(A)は明確に否定されている\n→結論。no single ... Instead ... の逆接から結論を取る。',
    difficulty: 'advanced',
  },

  // ── Passage 8: 色彩心理 (022–024) ────────────────────────────────
  {
    id: 'eiken_2kyu_rea2_022',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P8_COLOR}\n\nAccording to the passage, why are warm colors such as red often used on warning signs?`,
    choices: [
      { key: 'A', text: 'Because they are associated with calmness and trust.' },
      { key: 'B', text: 'Because they attract attention and can create a sense of urgency.' },
      { key: 'C', text: 'Because they are the cheapest colors to print.' },
      { key: 'D', text: 'Because they reduce people\'s appetite in restaurants.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "warm colors such as red and orange tend to attract attention and can create a sense of urgency, which is why they are often used on warning signs" とあり、Bが正解。Aは寒色の特徴で逆。Cは本文にない。Dは赤や黄は食欲を刺激するとあり逆。\n【図解】読み取りのポイント\n★本文の該当箇所: warm colors ... attract attention and can create a sense of urgency\n○正解の根拠: 注意を引き緊急性を生むため警告標識に使われる\n×ひっかけ: 冷静・信頼(A)は寒色の連想で暖色ではない\n→結論。warm colors と cool colors の対比を混同しない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_023',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P8_COLOR}\n\nWhat point does the passage make about the color white?`,
    choices: [
      { key: 'A', text: 'It has exactly the same meaning in every culture around the world.' },
      { key: 'B', text: 'It symbolizes purity at weddings in the West but is linked to mourning in parts of Asia.' },
      { key: 'C', text: 'It is the color most often used on clearance-sale advertisements.' },
      { key: 'D', text: 'It is avoided by banks and hospitals because it seems untrustworthy.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "while white is worn at weddings in many Western countries as a symbol of purity, it is traditionally associated with mourning in parts of Asia" とあり、Bが正解。この例は色の意味が文化により異なることを示す。Aは「どこでも同じ意味」で本文と逆。C・Dは本文にない。\n【図解】読み取りのポイント\n★本文の該当箇所: white ... symbol of purity ... associated with mourning in parts of Asia\n○正解の根拠: 西洋では純潔、アジアの一部では喪の色と意味が異なる\n×ひっかけ: どの文化でも同じ意味(A)は本文の趣旨と正反対\n→結論。色の意味は「文化により異なる」という主旨を白の例で示す。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_024',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P8_COLOR}\n\nWhat do critics say about the effects of color?`,
    choices: [
      { key: 'A', text: 'The effects of color are often exaggerated, and other factors usually matter more.' },
      { key: 'B', text: 'Color has absolutely no influence on human behavior.' },
      { key: 'C', text: 'Businesses should never pay attention to color at all.' },
      { key: 'D', text: 'Color is the single most powerful influence on every decision people make.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "the effects of color are often exaggerated in popular writing, and that factors such as personal experience usually matter far more than color alone" とあり、Aが正解。Bは「全く影響しない」で言い過ぎ。Cも本文にない。Dは色を最強の影響とする点で批評家の見解と逆。\n【図解】読み取りのポイント\n★本文の該当箇所: effects of color are often exaggerated ... personal experience usually matter far more\n○正解の根拠: 色の効果は誇張されがちで、他の要因の方が重要\n×ひっかけ: 「全く影響なし」(B)や「最強の影響」(D)は極端で本文と不一致\n→結論。批評家の主張は「誇張への注意」であり全否定ではない。',
    difficulty: 'advanced',
  },

  // ── Passage 9: 消滅危機言語 (025–027) ────────────────────────────
  {
    id: 'eiken_2kyu_rea2_025',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P9_LANGUAGE}\n\nAccording to the passage, when is a language generally considered endangered?`,
    choices: [
      { key: 'A', text: 'When it has been written down in many books.' },
      { key: 'B', text: 'When children stop learning it and begin speaking a more dominant language.' },
      { key: 'C', text: 'When it is spoken by more than seven thousand people.' },
      { key: 'D', text: 'When smartphone applications are created to teach it.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "A language is generally considered endangered when children in a community stop learning it and begin speaking a more dominant language" とあり、Bが正解。Aは書き言葉化はむしろ保存の手段。Cは話者数の記述と無関係。Dは復興の取り組みで危機の定義ではない。\n【図解】読み取りのポイント\n★本文の該当箇所: endangered when children ... stop learning it ... dominant language\n○正解の根拠: 子どもが学ばず支配的言語へ移ると危機とされる\n×ひっかけ: 文字化(A)やアプリ(D)は保存・復興の手段で定義ではない\n→結論。危機の判定基準は「世代間継承の断絶」。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_026',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P9_LANGUAGE}\n\nWhy do some researchers rush to record endangered languages?`,
    choices: [
      { key: 'A', text: 'Because such languages are spoken by the majority of the world\'s people.' },
      { key: 'B', text: 'Because many contain unique knowledge about local plants, animals, and traditions.' },
      { key: 'C', text: 'Because recording them earns researchers a great deal of money.' },
      { key: 'D', text: 'Because the languages are already written down in great detail.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "they may contain detailed knowledge about local plants, animals, and traditions that exists nowhere else. For this reason, some researchers rush to record..." とあり、Bが正解。Aは多数派ではなく少数言語。Cの金銭は本文にない。Dは「多くが書き留められていない」とあり逆。\n【図解】読み取りのポイント\n★本文の該当箇所: knowledge about local plants, animals, and traditions ... For this reason...\n○正解の根拠: そこにしかない独自の知識が失われる前に記録するため\n×ひっかけ: 「既に詳細に文字化」(D)は never been written down と矛盾\n→結論。For this reason の直前が「急いで記録する」理由。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_027',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P9_LANGUAGE}\n\nHow do supporters respond to critics who say resources should be spent elsewhere?`,
    choices: [
      { key: 'A', text: 'They agree that saving languages is a waste of money.' },
      { key: 'B', text: 'They argue that losing a language is like losing an irreplaceable library.' },
      { key: 'C', text: 'They claim that no language has ever been successfully revived.' },
      { key: 'D', text: 'They say that reviving a language weakens community identity.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "supporters respond that losing a language is like losing an irreplaceable library" とあり、Bが正解。Aは支持者ではなく批判者寄りで逆。Cは学校設立など成功例がある。Dは "reviving a language can also strengthen a community\'s sense of identity" とあり逆。\n【図解】読み取りのポイント\n★本文の該当箇所: losing a language is like losing an irreplaceable library\n○正解の根拠: 言語の喪失は代えのきかない図書館を失うのと同じ\n×ひっかけ: アイデンティティを弱める(D)は本文の strengthen と正反対\n→結論。supporters respond that 以下が反論の核心。',
    difficulty: 'advanced',
  },

  // ── Passage 10: サンゴ礁の再生 (028–030) ─────────────────────────
  {
    id: 'eiken_2kyu_rea2_028',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P10_CORAL}\n\nAccording to the passage, why are coral reefs important despite covering so little of the ocean floor?`,
    choices: [
      { key: 'A', text: 'They support around a quarter of all marine species and protect coastlines.' },
      { key: 'B', text: 'They are the main source of drinking water for coastal cities.' },
      { key: 'C', text: 'They cover more than half of the entire ocean floor.' },
      { key: 'D', text: 'They cause storms that keep fishing communities away.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "they support around a quarter of all marine species ... They also protect coastlines from storms and supply income to coastal communities" とあり、Aが正解。Bの飲料水源は本文にない。Cは「1%未満」とあり逆。Dは嵐から海岸を守るので逆。\n【図解】読み取りのポイント\n★本文の該当箇所: support around a quarter of all marine species ... protect coastlines\n○正解の根拠: 海洋生物の約4分の1を支え、海岸を嵐から守る\n×ひっかけ: 海底の半分以上を覆う(C)は「1%未満」と矛盾\n→結論。面積は小さいが生態系・防災上の重要性が大きい。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_029',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P10_CORAL}\n\nWhat happens during coral bleaching, according to the passage?`,
    choices: [
      { key: 'A', text: 'Corals grow much faster and produce brighter colors.' },
      { key: 'B', text: 'Corals expel the tiny algae that give them color and food, and may die if the water stays warm.' },
      { key: 'C', text: 'Corals absorb more algae and become stronger.' },
      { key: 'D', text: 'Corals move to deeper, cooler parts of the ocean by themselves.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "corals expel the tiny algae that live inside them and give them both color and food, an event known as bleaching. If the water does not cool in time, the weakened corals may die" とあり、Bが正解。A・Cは藻を追い出す記述と逆。Dのサンゴが自ら移動する記述はない。\n【図解】読み取りのポイント\n★本文の該当箇所: corals expel the tiny algae ... bleaching ... may die\n○正解の根拠: 色と栄養源の藻を放出し、水温が下がらないと死ぬことがある\n×ひっかけ: 藻を吸収して強くなる(C)は expel と正反対\n→結論。bleaching=「藻の放出」による白化・衰弱と理解する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_030',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P10_CORAL}\n\nWhat do researchers stress about reef restoration efforts?`,
    choices: [
      { key: 'A', text: 'Restoration can already solve the problem on a global scale.' },
      { key: 'B', text: 'Restoration can repair small areas but cannot keep pace with damage worldwide.' },
      { key: 'C', text: 'Restoration efforts have made the reefs much worse.' },
      { key: 'D', text: 'Restoration removes the need to reduce greenhouse-gas emissions.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "Restoration can repair small areas, but it cannot keep pace with damage on a global scale" とあり、Bが正解。Aは全球規模で解決できるとする点で誤り。Cは悪化させたとの記述はない。Dは最終的に温室効果ガス削減が不可欠とあり逆。\n【図解】読み取りのポイント\n★本文の該当箇所: can repair small areas, but ... cannot keep pace with damage on a global scale\n○正解の根拠: 局所的修復は可能だが地球規模の損傷には追いつけない\n×ひっかけ: 排出削減が不要になる(D)は本文末尾の主張と矛盾\n→結論。but 以下が研究者の強調する「限界」。',
    difficulty: 'advanced',
  },

  // ── Passage 11: 印刷機 (031–033) ─────────────────────────────────
  {
    id: 'eiken_2kyu_rea2_031',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P11_PRINTING}\n\nAccording to the passage, what was true about books before the mid-fifteenth century in Europe?`,
    choices: [
      { key: 'A', text: 'They were cheap and available to almost everyone.' },
      { key: 'B', text: 'Each copy had to be written out by hand, making books scarce and expensive.' },
      { key: 'C', text: 'They were printed rapidly using movable metal type.' },
      { key: 'D', text: 'Most ordinary workers could read and owned many books.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "Each copy had to be written out by hand ... books were scarce and expensive" とあり、Bが正解。Aは安価で誰でも入手可能とする点で逆。Cの可動金属活字は15世紀半ば以降の発明。Dは識字が聖職者や富裕層に限られたとあり逆。\n【図解】読み取りのポイント\n★本文の該当箇所: Each copy had to be written out by hand ... scarce and expensive\n○正解の根拠: 手書き写本のため本は希少で高価だった\n×ひっかけ: 可動活字で高速印刷(C)は印刷機発明後の話\n→結論。印刷機以前(before)と以後(after)を時系列で分けて読む。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_032',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P11_PRINTING}\n\nWhat was Gutenberg's key innovation, according to the passage?`,
    choices: [
      { key: 'A', text: 'Movable type: individual metal letters that could be arranged, reused, and rearranged.' },
      { key: 'B', text: 'A machine that could write books by hand faster than monks.' },
      { key: 'C', text: 'A new kind of paper that never needed ink.' },
      { key: 'D', text: 'A method of teaching every citizen to read within a single day.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "His key innovation was movable type: individual metal letters that could be arranged to form a page, used to print many copies, and then rearranged for the next page" とあり、Aが正解。Bは手書き機械ではない。C・Dは本文にない。\n【図解】読み取りのポイント\n★本文の該当箇所: His key innovation was movable type: individual metal letters...\n○正解の根拠: 並べ替え・再利用できる金属活字(可動活字)が核心\n×ひっかけ: 「手書きを速める機械」(B)は活字印刷の説明ではない\n→結論。key innovation の直後のコロン以下で内容を確認する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_033',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P11_PRINTING}\n\nWhy do some historians argue the printing press helped make movements like the Reformation possible?`,
    choices: [
      { key: 'A', text: 'Because it prevented ordinary people from reading religious texts.' },
      { key: 'B', text: 'Because pamphlets and translations of religious texts could now reach ordinary people directly.' },
      { key: 'C', text: 'Because it made books much rarer and more expensive than before.' },
      { key: 'D', text: 'Because it slowed the spread of new ideas across Europe.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "pamphlets and translations of religious texts could now reach ordinary people directly" とあり、Bが正解。Aは読むのを妨げるで逆。Cは本が安く広まったので逆。Dは新思想の伝播を早めたので逆。\n【図解】読み取りのポイント\n★本文の該当箇所: pamphlets and translations ... could now reach ordinary people directly\n○正解の根拠: 宗教文書の小冊子や翻訳が庶民に直接届くようになった\n×ひっかけ: 読書を妨げた・本が希少化した(A/C)は本文と正反対\n→結論。宗教改革を可能にした要因=「情報の直接的拡散」。',
    difficulty: 'advanced',
  },

  // ── Passage 12: リモートワーク (034–036) ────────────────────────
  {
    id: 'eiken_2kyu_rea2_034',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P12_REMOTE}\n\nAccording to the passage, what did many studies find about working from home?`,
    choices: [
      { key: 'A', text: 'Productivity collapsed exactly as managers had feared.' },
      { key: 'B', text: 'Workers often completed just as much as, or more than, they had in the office.' },
      { key: 'C', text: 'Employees produced almost nothing when they were not watched.' },
      { key: 'D', text: 'Every worker preferred the office to working at home.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "a number of studies found the opposite: workers often completed just as much, and sometimes more, than they had in the office" とあり、Bが正解。Aは managers が恐れた事態で "the opposite" が実際。C・Dは本文に根拠がない。\n【図解】読み取りのポイント\n★本文の該当箇所: found the opposite: workers often completed just as much, and sometimes more\n○正解の根拠: 生産性は落ちるどころか同等以上だった\n×ひっかけ: 「生産性が崩壊」(A)は managers の懸念で実際の結果ではない\n→結論。feared と the opposite の対比で「予想外の結果」を掴む。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_035',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P12_REMOTE}\n\nAccording to the passage, who may particularly struggle with remote work?`,
    choices: [
      { key: 'A', text: 'Experienced managers who dislike using computers.' },
      { key: 'B', text: 'Newer employees, who may lack the informal guidance of nearby colleagues.' },
      { key: 'C', text: 'Workers whose tasks involve writing reports and analyzing data.' },
      { key: 'D', text: 'People who have very short commutes to the office.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "Newer employees, in particular, may struggle without the informal guidance they would normally receive by sitting near experienced colleagues" とあり、Bが正解。Cはリモートに向く業務なので逆。A・Dは本文にない。\n【図解】読み取りのポイント\n★本文の該当箇所: Newer employees, in particular, may struggle without the informal guidance\n○正解の根拠: 新人は近くの先輩からの非公式な指導を得にくく苦労しやすい\n×ひっかけ: 報告書作成・データ分析(C)はむしろリモート向きの業務\n→結論。in particular が指す対象(新人)を正確に押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_036',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P12_REMOTE}\n\nWhat is the "hybrid model" described in the passage?`,
    choices: [
      { key: 'A', text: 'A system in which all employees work only from home permanently.' },
      { key: 'B', text: 'An arrangement in which staff spend part of the week in the office and part at home.' },
      { key: 'C', text: 'A method of forcing everyone back into the office full-time.' },
      { key: 'D', text: 'A plan to close all offices and rely entirely on remote work.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "the hybrid model, in which staff spend part of the week in the office and part at home" とあり、Bが正解。A・Dは完全在宅、Cは完全出社で、いずれも「一部ずつ」という折衷案とは異なる。\n【図解】読み取りのポイント\n★本文の該当箇所: hybrid model, in which staff spend part of the week in the office and part at home\n○正解の根拠: 週の一部を出社、一部を在宅にする折衷の働き方\n×ひっかけ: 完全在宅(A/D)や完全出社(C)は hybrid の定義に反する\n→結論。compromise(妥協案)としての hybrid の意味を取る。',
    difficulty: 'advanced',
  },

  // ── Passage 13: 腸内細菌叢 (037–039) ─────────────────────────────
  {
    id: 'eiken_2kyu_rea2_037',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P13_MICROBIOME}\n\nAccording to the passage, how were gut microbes long regarded?`,
    choices: [
      { key: 'A', text: 'As an essential organ that everyone protected carefully.' },
      { key: 'B', text: 'As harmless passengers or germs to be eliminated.' },
      { key: 'C', text: 'As the main producers of all human vitamins.' },
      { key: 'D', text: 'As creatures that lived only outside the human body.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "these bacteria were long dismissed as harmless passengers or even as germs to be eliminated" とあり、Bが正解。Aは近年の見方(器官とみなす)で「長らく」の見方ではない。Cは一部のビタミンを作るが「全て」ではない。Dは消化器に住むとあり逆。\n【図解】読み取りのポイント\n★本文の該当箇所: long dismissed as harmless passengers ... germs to be eliminated\n○正解の根拠: かつては無害な同乗者、あるいは排除すべき菌と見なされた\n×ひっかけ: 「器官とみなす」(A)は recent research 以降の新しい見方\n→結論。long(従来)と recent(近年)の見方の転換を区別する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_038',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P13_MICROBIOME}\n\nWhich of the following roles of gut microbes is mentioned in the passage?`,
    choices: [
      { key: 'A', text: 'They train the immune system to tell harmful invaders from the body\'s own tissues.' },
      { key: 'B', text: 'They cause all cases of obesity and mood disorders directly.' },
      { key: 'C', text: 'They replace the need for humans to eat any food.' },
      { key: 'D', text: 'They destroy the vitamins the body needs.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "train the immune system to distinguish between harmful invaders and the body\'s own tissues" とあり、Aが正解。Bは肥満や気分障害との「関連の証拠」で直接原因とは断定していない(early stage)。Cは食事不要とは述べない。Dはビタミンを作るので逆。\n【図解】読み取りのポイント\n★本文の該当箇所: train the immune system to distinguish between harmful invaders and ... own tissues\n○正解の根拠: 免疫系に敵と自己組織を区別させる働きがある\n×ひっかけ: 肥満・気分障害を「直接引き起こす」(B)は本文の慎重な表現と不一致\n→結論。evidence linking(関連)と cause(原因)の強さの違いに注意。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_039',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P13_MICROBIOME}\n\nWhat does the passage say about the effect of diet on the microbiome?`,
    choices: [
      { key: 'A', text: 'Diet has no effect on which microbes live in the gut.' },
      { key: 'B', text: 'A diet rich in fiber tends to support a diverse community of beneficial bacteria.' },
      { key: 'C', text: 'A diet high in sugar increases the diversity of good bacteria.' },
      { key: 'D', text: 'Only medicine, not food, can change the balance of gut bacteria.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "A diet rich in fiber from vegetables, fruits, and whole grains tends to support a diverse community of beneficial bacteria" とあり、Bが正解。Aは食事の影響を否定し逆。Cは糖分の多い食事は多様性を減らすとあり逆。Dは食事が強く影響するとあり誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: A diet rich in fiber ... support a diverse community of beneficial bacteria\n○正解の根拠: 食物繊維の多い食事は有益な菌の多様性を支える\n×ひっかけ: 糖分の多い食事が多様性を増やす(C)は reduce と正反対\n→結論。fiber(繊維)と processed/sugar(加工・糖分)の効果を対比する。',
    difficulty: 'advanced',
  },

  // ── Passage 14: 食品ロス (040–042) ──────────────────────────────
  {
    id: 'eiken_2kyu_rea2_040',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P14_FOODWASTE}\n\nWhat paradox does the passage describe at the beginning?`,
    choices: [
      { key: 'A', text: 'Food is cheap everywhere, yet no one wants to buy it.' },
      { key: 'B', text: 'Many people lack enough to eat, yet about a third of all food produced is never eaten.' },
      { key: 'C', text: 'Farmers grow too little food, yet supermarkets are always full.' },
      { key: 'D', text: 'People eat too much, yet they never gain any weight.' },
    ],
    correctKey: 'B',
    explanation:
      '本文冒頭に "while hundreds of millions of people ... do not have enough to eat, roughly a third of all the food produced for human consumption is never eaten" とあり、Bが正解。A・C・Dはいずれも本文の矛盾の内容と一致しない。\n【図解】読み取りのポイント\n★本文の該当箇所: hundreds of millions ... do not have enough to eat ... a third ... never eaten\n○正解の根拠: 飢える人が多い一方で生産食料の約3分の1が食べられない矛盾\n×ひっかけ: 「食べ過ぎても太らない」(D)などは本文と無関係\n→結論。冒頭の paradox(逆説)の二要素を正確に対応させる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_041',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P14_FOODWASTE}\n\nAccording to the passage, where does much of the food waste happen in wealthy countries?`,
    choices: [
      { key: 'A', text: 'Mainly on farms, because crops are never planted.' },
      { key: 'B', text: 'In homes and restaurants, where edible food is simply thrown away.' },
      { key: 'C', text: 'Only during transport, because of a lack of roads.' },
      { key: 'D', text: 'Nowhere, because wealthy countries waste no food at all.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "In wealthy countries, much of the waste happens in homes and restaurants, where edible food is simply thrown away" とあり、Bが正解。Aの農場やCの輸送段階も廃棄は生じるが、富裕国で「多く」起こる場所は家庭・レストラン。Dは廃棄ゼロで明確に誤り。\n【図解】読み取りのポイント\n★本文の該当箇所: In wealthy countries, much of the waste happens in homes and restaurants\n○正解の根拠: 富裕国では食べられる食品が家庭やレストランで捨てられる\n×ひっかけ: 農場のみ・輸送のみ(A/C)は富裕国に限った記述ではない\n→結論。段階ごとの廃棄と「富裕国で多い場所」を区別する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_042',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P14_FOODWASTE}\n\nWhy is food waste harmful beyond the loss of nourishment, according to the passage?`,
    choices: [
      { key: 'A', text: 'Because it wastes water, land, and energy, and rotting food releases gases that worsen climate change.' },
      { key: 'B', text: 'Because it makes food more nutritious than before.' },
      { key: 'C', text: 'Because it forces farmers to plant far more crops than needed.' },
      { key: 'D', text: 'Because it has no effect on the environment whatsoever.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "Producing food that no one eats wastes enormous quantities of water, land, and energy, and when discarded food rots in landfills, it releases gases that contribute to climate change" とあり、Aが正解。B・C・Dはいずれも本文の内容と一致しない。\n【図解】読み取りのポイント\n★本文の該当箇所: wastes ... water, land, and energy ... releases gases that contribute to climate change\n○正解の根拠: 水・土地・エネルギーの浪費と温暖化ガスの発生\n×ひっかけ: 「環境に全く影響しない」(D)は本文と正反対\n→結論。栄養の損失以外の「資源浪費+温暖化」の二点を押さえる。',
    difficulty: 'advanced',
  },

  // ── Passage 15: 茶の湯 (043–045) ─────────────────────────────────
  {
    id: 'eiken_2kyu_rea2_043',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P15_TEA}\n\nAccording to the passage, what is the Japanese tea ceremony?`,
    choices: [
      { key: 'A', text: 'A simple, quick way of drinking tea with no fixed rules.' },
      { key: 'B', text: 'A refined art form shaped by Zen Buddhist ideals of simplicity and mindfulness.' },
      { key: 'C', text: 'A modern practice invented within the last few decades.' },
      { key: 'D', text: 'A noisy public festival held in large city halls.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "It is a refined art form ... shaped over time by Zen Buddhist ideals of simplicity and mindfulness" とあり、Bが正解。Aは "far more than a simple matter of drinking tea" とあり逆。Cは数世紀前に遡るので誤り。Dは静かな空間で行われるので逆。\n【図解】読み取りのポイント\n★本文の該当箇所: a refined art form ... shaped ... by Zen Buddhist ideals of simplicity and mindfulness\n○正解の根拠: 禅の簡素・心の落ち着きの理念に形づくられた洗練された芸術\n×ひっかけ: 「単なるお茶を飲む行為」(A)は far more than と矛盾\n→結論。far more than A の A(単なる飲茶)は否定される内容。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_044',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P15_TEA}\n\nWhy do guests often pass through a quiet garden before entering the tea room?`,
    choices: [
      { key: 'A', text: 'To buy tickets for the ceremony from the host.' },
      { key: 'B', text: 'To help them leave behind the concerns of everyday life.' },
      { key: 'C', text: 'Because there is no other entrance to the building.' },
      { key: 'D', text: 'To practice whisking the powdered green tea outdoors.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "Guests often pass through a quiet garden ... a transition meant to help them leave behind the concerns of everyday life" とあり、Bが正解。A・C・Dはいずれも本文に根拠がない。\n【図解】読み取りのポイント\n★本文の該当箇所: a transition meant to help them leave behind the concerns of everyday life\n○正解の根拠: 日常の雑念を手放すための移行として庭を通る\n×ひっかけ: チケット購入(A)や他に入口がない(C)は本文にない\n→結論。meant to 以下が「目的」を示すことに注目する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_045',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P15_TEA}\n\nWhat does the phrase "ichi-go ichi-e" remind participants of, according to the passage?`,
    choices: [
      { key: 'A', text: 'That each gathering is unique and can never be repeated exactly, so it should be treasured.' },
      { key: 'B', text: 'That the same guests must meet again every single day.' },
      { key: 'C', text: 'That the tea must always be served exactly one time per year.' },
      { key: 'D', text: 'That the host should show off expensive and showy decorations.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "It reminds both host and guests that each gathering is unique and can never be repeated exactly, and therefore should be treasured" とあり、Aが正解。B・Cは意味の取り違え。Dは「rustic simplicity over showy display」とあり派手さは重視されず逆。\n【図解】読み取りのポイント\n★本文の該当箇所: each gathering is unique and can never be repeated exactly ... should be treasured\n○正解の根拠: 一度きりの出会いだからこそ大切にすべきという教え\n×ひっかけ: 派手な装飾を誇示(D)は rustic simplicity と正反対\n→結論。「一期一会」=二度と繰り返せない出会いを尊ぶ心。',
    difficulty: 'advanced',
  },

  // ── Passage 16: 宇宙ごみ (046–048) ──────────────────────────────
  {
    id: 'eiken_2kyu_rea2_046',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P16_SPACE}\n\nAccording to the passage, why can even a tiny fragment of debris be dangerous?`,
    choices: [
      { key: 'A', text: 'Because objects in orbit travel at such tremendous speeds that even a small piece can damage a satellite.' },
      { key: 'B', text: 'Because fragments of paint are naturally poisonous.' },
      { key: 'C', text: 'Because debris grows larger the longer it stays in orbit.' },
      { key: 'D', text: 'Because tiny fragments block sunlight from reaching the Earth.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "objects in orbit travel at such tremendous speeds that even a tiny fragment can damage or destroy a functioning satellite on impact" とあり、Aが正解。B・C・Dはいずれも本文に根拠がなく、危険性の理由は「軌道上の高速度」。\n【図解】読み取りのポイント\n★本文の該当箇所: travel at such tremendous speeds that even a tiny fragment can damage ... a satellite\n○正解の根拠: 軌道上の猛スピードのため小片でも衛星を破壊しうる\n×ひっかけ: 塗料が有毒(B)や光を遮る(D)は本文にない\n→結論。危険の本質は「速度による衝突エネルギー」。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_047',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P16_SPACE}\n\nWhat dangerous chain reaction do experts worry about?`,
    choices: [
      { key: 'A', text: 'A collision could create new fragments that cause further collisions, making some orbits too hazardous to use.' },
      { key: 'B', text: 'Satellites could join together to form a single giant spacecraft.' },
      { key: 'C', text: 'Debris could suddenly fall to Earth and cover entire cities.' },
      { key: 'D', text: 'Rockets could stop working because there is no more fuel in space.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "a single collision could produce a cloud of new fragments, each capable of causing further collisions, until certain orbits become too hazardous to use" とあり、Aが正解。B・C・Dはいずれも本文の連鎖反応の説明と一致しない。\n【図解】読み取りのポイント\n★本文の該当箇所: a single collision could produce ... new fragments ... further collisions\n○正解の根拠: 衝突が新たな破片を生み連鎖し、軌道が使えなくなる恐れ\n×ひっかけ: 衛星が合体(B)や都市を覆う落下(C)は本文にない\n→結論。chain reaction=衝突→破片→さらに衝突の連鎖と理解する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_048',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P16_SPACE}\n\nWhat do some experts argue is the most practical step regarding space debris?`,
    choices: [
      { key: 'A', text: 'Prevention, by designing satellites that can safely remove themselves from orbit once their missions end.' },
      { key: 'B', text: 'Launching as many new satellites as possible as quickly as possible.' },
      { key: 'C', text: 'Ignoring the problem because debris causes no real harm.' },
      { key: 'D', text: 'Moving all human activity permanently off the planet.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "the most practical step is prevention: designing satellites that can safely remove themselves from orbit once their missions end" とあり、Aが正解。B・C・Dは本文に根拠がなく、Cは危険性を認める本文と矛盾する。\n【図解】読み取りのポイント\n★本文の該当箇所: the most practical step is prevention ... remove themselves from orbit once their missions end\n○正解の根拠: 任務終了後に自ら軌道を離れる衛星設計という「予防」\n×ひっかけ: 「無害だから無視」(C)は本文の危険性の記述と矛盾\n→結論。清掃(cleanup)と並ぶもう一つの案が prevention(予防)。',
    difficulty: 'advanced',
  },

  // ── Passage 17: ローマの水道 (049–051) ──────────────────────────
  {
    id: 'eiken_2kyu_rea2_049',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P17_AQUEDUCT}\n\nAccording to the passage, how did Roman engineers move water over long distances without pumps?`,
    choices: [
      { key: 'A', text: 'By using powerful electric machines hidden underground.' },
      { key: 'B', text: 'By building channels that sloped gently downward, using the force of gravity.' },
      { key: 'C', text: 'By carrying water in buckets along the roads.' },
      { key: 'D', text: 'By waiting for rain to fill the city fountains directly.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "carry water over long distances using nothing but the force of gravity. By constructing channels that sloped downward at a very gentle and carefully calculated angle" とあり、Bが正解。Aは電気ポンプのない時代なので誤り。C・Dは本文にない。\n【図解】読み取りのポイント\n★本文の該当箇所: using nothing but the force of gravity ... channels that sloped downward\n○正解の根拠: 緩やかに下る水路を作り重力だけで水を運んだ\n×ひっかけ: 電気機械(A)は「ポンプのない時代」の記述と矛盾\n→結論。動力源は「重力」と正確に押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_050',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P17_AQUEDUCT}\n\nWhy did the Romans build towering stone arches?`,
    choices: [
      { key: 'A', text: 'To keep the water channel at the correct height where valleys interrupted the route.' },
      { key: 'B', text: 'To store rainwater during dry seasons.' },
      { key: 'C', text: 'To provide seating for spectators at public events.' },
      { key: 'D', text: 'To block enemy armies from entering the city.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "Where valleys interrupted the route, the Romans built towering stone arches to keep the channel at the correct height" とあり、Aが正解。B・C・Dはいずれも本文に根拠がなく、アーチの目的は水路の高さ維持である。\n【図解】読み取りのポイント\n★本文の該当箇所: built towering stone arches to keep the channel at the correct height\n○正解の根拠: 谷を越える所で水路を正しい高さに保つためアーチを築いた\n×ひっかけ: 雨水貯蔵(B)や観客席(C)は本文にない\n→結論。to keep 以下の不定詞が示す「目的」に注目する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_051',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P17_AQUEDUCT}\n\nWhat happened to the aqueducts when the Roman Empire declined?`,
    choices: [
      { key: 'A', text: 'They were immediately rebuilt larger and stronger than before.' },
      { key: 'B', text: 'Many fell into disuse, and some cities lacked a comparable water supply for over a thousand years.' },
      { key: 'C', text: 'They were converted into roads for horse-drawn carriages.' },
      { key: 'D', text: 'They continued to deliver water without any need for maintenance.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "many aqueducts fell into disuse, and some cities would not enjoy a comparable supply of running water again for well over a thousand years" とあり、Bが正解。A・C・Dはいずれも本文の記述と一致しない。\n【図解】読み取りのポイント\n★本文の該当箇所: many aqueducts fell into disuse ... not enjoy a comparable supply ... for well over a thousand years\n○正解の根拠: 多くが使われなくなり、同等の水供給の回復に千年以上かかった\n×ひっかけ: すぐに再建(A)や維持不要で稼働継続(D)は本文と矛盾\n→結論。帝国衰退後の「荒廃と長い断絶」を読み取る。',
    difficulty: 'advanced',
  },

  // ── Passage 18: ギグエコノミー (052–054) ────────────────────────
  {
    id: 'eiken_2kyu_rea2_052',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P18_GIG}\n\nAccording to the passage, what is the main attraction of the gig economy for many workers?`,
    choices: [
      { key: 'A', text: 'Guaranteed paid holidays and sick leave.' },
      { key: 'B', text: 'Flexibility, since they can decide when and how much to work.' },
      { key: 'C', text: 'A fixed monthly salary that never changes.' },
      { key: 'D', text: 'Free vehicles and fuel provided by the companies.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "its main attraction is flexibility. They can decide for themselves when and how much to work" とあり、Bが正解。Aの有給休暇・病気休暇は "receive none of the protections" とあり得られない。Cの固定給、Dの車・燃料提供も本文と矛盾。\n【図解】読み取りのポイント\n★本文の該当箇所: its main attraction is flexibility ... decide ... when and how much to work\n○正解の根拠: いつどれだけ働くか自分で決められる柔軟性が最大の魅力\n×ひっかけ: 有給休暇や固定給(A/C)はギグ労働者が得られない保護\n→結論。魅力(柔軟性)と欠けている保護を取り違えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_053',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P18_GIG}\n\nWhy do gig workers usually lack protections such as paid holidays?`,
    choices: [
      { key: 'A', text: 'Because they are usually classified as independent contractors rather than employees.' },
      { key: 'B', text: 'Because they earn far too much money to need any protection.' },
      { key: 'C', text: 'Because the companies pay all their expenses for them.' },
      { key: 'D', text: 'Because governments have already given them full employee rights.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "Because gig workers are usually classified as independent contractors rather than employees, they typically receive none of the protections that regular jobs provide" とあり、Aが正解。Bは収入が予測不能とあり逆。Cは経費を自分で負担するので逆。Dは規制が議論中で「既に付与」ではない。\n【図解】読み取りのポイント\n★本文の該当箇所: classified as independent contractors rather than employees ... receive none of the protections\n○正解の根拠: 従業員でなく独立業務請負人に分類されるため保護がない\n×ひっかけ: 会社が経費を負担(C)は「自分で負担」と正反対\n→結論。分類(contractor vs employee)が保護の有無を決める。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_054',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P18_GIG}\n\nWhat are governments in several countries doing about the gig economy?`,
    choices: [
      { key: 'A', text: 'Debating how to regulate it, seeking rules that keep flexibility while giving workers greater security.' },
      { key: 'B', text: 'Banning the gig economy completely in all industries.' },
      { key: 'C', text: 'Encouraging companies to remove all remaining worker protections.' },
      { key: 'D', text: 'Ignoring it entirely because it is shrinking every year.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "governments ... are debating how to regulate it, searching for rules that preserve its flexibility while offering workers greater security" とあり、Aが正解。Bの全面禁止、Cの保護撤廃奨励、Dの「縮小しているので無視」はいずれも本文と矛盾(gig経済は拡大中)。\n【図解】読み取りのポイント\n★本文の該当箇所: debating how to regulate it ... preserve its flexibility while offering ... greater security\n○正解の根拠: 柔軟性を保ちつつ労働者の安定も与える規制を模索中\n×ひっかけ: 全面禁止(B)や無視(D)は本文の「規制を議論」と矛盾\n→結論。政府の姿勢は「禁止」でも「放置」でもなく「バランス模索」。',
    difficulty: 'advanced',
  },

  // ── Passage 19: 渡り鳥と気候変動 (055–057) ──────────────────────
  {
    id: 'eiken_2kyu_rea2_055',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P19_BIRDS}\n\nAccording to the passage, what cue have migrating birds traditionally used to time their journeys?`,
    choices: [
      { key: 'A', text: 'The changing length of the day.' },
      { key: 'B', text: 'The rising temperature of the ocean.' },
      { key: 'C', text: 'The appearance of particular insects.' },
      { key: 'D', text: 'The direction of the wind each morning.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "guided by cues such as the changing length of the day" とあり、Aが正解。BやDは本文の signal ではない。Cの昆虫は餌の話であり、渡りの合図として使うのは日長。\n【図解】読み取りのポイント\n★本文の該当箇所: guided by cues such as the changing length of the day\n○正解の根拠: 渡りの時期は日の長さの変化を手がかりにしてきた\n×ひっかけ: 昆虫の出現(C)は餌の指標で、渡りの合図(day length)ではない\n→結論。合図(day length)と餌のタイミングを区別して読む。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_056',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P19_BIRDS}\n\nWhat problem does the "mismatch in timing" cause?`,
    choices: [
      { key: 'A', text: 'Birds arrive too early and freeze before spring begins.' },
      { key: 'B', text: 'Birds may arrive after the peak of available food has passed, leaving parents unable to feed their young.' },
      { key: 'C', text: 'Birds forget how to fly long distances at all.' },
      { key: 'D', text: 'Birds begin eating plants instead of insects.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "Birds ... may therefore arrive at their breeding grounds too late, after the peak of available food has already passed. This mismatch ... can leave parents unable to find enough food for their young" とあり、Bが正解。Aは「遅れて到着」なので逆。C・Dは本文にない。\n【図解】読み取りのポイント\n★本文の該当箇所: arrive ... too late, after the peak of available food has already passed\n○正解の根拠: 餌の最盛期を過ぎて到着し、雛に十分な餌を与えられない\n×ひっかけ: 「早く着いて凍える」(A)は too late と正反対\n→結論。日長は不変ゆえ「遅れて到着」する点がミスマッチの核心。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_057',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P19_BIRDS}\n\nWhat do researchers warn about the ability of birds to adapt?`,
    choices: [
      { key: 'A', text: 'All bird species can easily adjust to any speed of climate change.' },
      { key: 'B', text: 'Many birds cannot adapt quickly enough, so some species\' survival may depend on how fast the climate changes.' },
      { key: 'C', text: 'Birds have completely stopped migrating because of the warming climate.' },
      { key: 'D', text: 'Climate change has had no measurable effect on birds at all.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に "many birds cannot adapt quickly enough, and that the long-term survival of some species may depend on how rapidly the climate continues to change" とあり、Bが正解。Aは "certain species" のみ柔軟で「すべて容易」ではない。Cの渡りの完全停止、Dの「影響なし」は本文と矛盾。\n【図解】読み取りのポイント\n★本文の該当箇所: many birds cannot adapt quickly enough ... depend on how rapidly the climate ... change\n○正解の根拠: 多くは十分速く適応できず、生存は気候変化の速さ次第\n×ひっかけ: 「すべての種が容易に適応」(A)は certain species の記述と矛盾\n→結論。一部(certain)と多く(many)の差、適応の限界を読み取る。',
    difficulty: 'advanced',
  },

  // ── Passage 20: オリンピックの起源 (058–060) ────────────────────
  {
    id: 'eiken_2kyu_rea2_058',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P20_OLYMPICS}\n\nAccording to the passage, what was true about the ancient Olympic Games?`,
    choices: [
      { key: 'A', text: 'They were part of a religious festival, and only free-born Greek men could compete.' },
      { key: 'B', text: 'They were open to competitors from every nation in the world.' },
      { key: 'C', text: 'Winners were rewarded with large sums of money.' },
      { key: 'D', text: 'They were first held in France in the year 1896.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "the ancient games were part of a religious festival, and only free-born Greek men were permitted to compete" とあり、Aが正解。Bは自由生まれのギリシャ人男性に限られ誤り。Cは賞はオリーブの冠で金銭ではない。Dは1896年は近代復興でフランス人が復活させた話。\n【図解】読み取りのポイント\n★本文の該当箇所: part of a religious festival ... only free-born Greek men were permitted to compete\n○正解の根拠: 宗教祭の一部で、参加は自由生まれのギリシャ人男性に限られた\n×ひっかけ: 賞金(C)はオリーブの冠(a wreath of olive leaves)と矛盾\n→結論。古代の games の特徴を近代の記述と混同しない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_059',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P20_OLYMPICS}\n\nWhat does the passage say happened during the ancient games with regard to wars?`,
    choices: [
      { key: 'A', text: 'Wars between rival Greek states were sometimes paused so people could travel safely to the games.' },
      { key: 'B', text: 'The games were always cancelled whenever a war broke out.' },
      { key: 'C', text: 'The games themselves started new wars between cities.' },
      { key: 'D', text: 'Athletes were required to fight in wars instead of competing.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "wars between rival Greek states were sometimes paused so that athletes and spectators could travel safely to the games" とあり、Aが正解。B・C・Dはいずれも本文の内容(戦争を一時中断した)と一致しない。\n【図解】読み取りのポイント\n★本文の該当箇所: wars ... were sometimes paused so that athletes and spectators could travel safely\n○正解の根拠: 選手や観客が安全に移動できるよう戦争が一時中断された\n×ひっかけ: 「試合が新たな戦争を起こした」(C)は本文と正反対\n→結論。休戦(pause)の目的=安全な移動の確保を押さえる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_rea2_060',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.\n\n${P20_OLYMPICS}\n\nWhy did Pierre de Coubertin work to revive the Olympic Games?`,
    choices: [
      { key: 'A', text: 'He hoped that friendly athletic rivalry might promote peace and understanding among nations.' },
      { key: 'B', text: 'He wanted to restart the ancient religious festival dedicated to Zeus.' },
      { key: 'C', text: 'He aimed to reward winning athletes with wreaths of olive leaves once again.' },
      { key: 'D', text: 'He intended to limit the games to free-born Greek men only.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に "hoping that friendly athletic rivalry might promote peace and understanding among nations" とあり、Aが正解。B・C・Dは古代の games の特徴であり、クーベルタンが近代に復興させた目的ではない。\n【図解】読み取りのポイント\n★本文の該当箇所: hoping that friendly athletic rivalry might promote peace and understanding among nations\n○正解の根拠: 友好的な競い合いで国家間の平和と理解を促すため\n×ひっかけ: ゼウスの祭礼再開(B)などは古代の特徴で復興の動機ではない\n→結論。hoping that 以下が復興の「目的」を示す。',
    difficulty: 'advanced',
  },
];
