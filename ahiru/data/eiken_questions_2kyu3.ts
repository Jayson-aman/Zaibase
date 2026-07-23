import type { EikenQuestion } from './eiken_questions';

export const eikenQuestions2kyu3: EikenQuestion[] = [
  // ===== VOCABULARY (001-020) =====

  // 001 — near-synonyms: eminent / imminent / prominent / distinguished
  {
    id: 'eiken_2kyu3_001',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Experts warned that a major earthquake was ( ) and urged residents near the fault line to evacuate immediately.',
    choices: [
      { key: 'A', text: 'eminent' },
      { key: 'B', text: 'distinguished' },
      { key: 'C', text: 'prominent' },
      { key: 'D', text: 'imminent' },
    ],
    correctKey: 'D' as const,
    explanation: '"imminent"は「差し迫った」の意味で、地震がすぐに起こりそうな状況を表します。"eminent"は「著名な」、"prominent"は「目立つ・著名な」、"distinguished"は「著名な・卓越した」で、いずれも人物の評価に使われる形容詞です。',
    difficulty: 'standard' as const,
  },

  // 002 — elicit / illicit / explicit / implicit
  {
    id: 'eiken_2kyu3_002',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The teacher used thought-provoking questions to ( ) genuine curiosity from her students rather than simply providing answers.',
    choices: [
      { key: 'A', text: 'illicit' },
      { key: 'B', text: 'explicit' },
      { key: 'C', text: 'implicit' },
      { key: 'D', text: 'elicit' },
    ],
    correctKey: 'D' as const,
    explanation: '"elicit"は「（反応・情報などを）引き出す」という動詞です。"illicit"は「違法の」（形容詞）、"explicit"は「明示的な」（形容詞）、"implicit"は「暗黙の」（形容詞）で、動詞として使えません。',
    difficulty: 'advanced' as const,
  },

  // 003 — ensure / assure / insure / reassure
  {
    id: 'eiken_2kyu3_003',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The supervisor visited the nervous intern before the presentation to ( ) her that the team was fully behind her.',
    choices: [
      { key: 'A', text: 'ensure' },
      { key: 'B', text: 'insure' },
      { key: 'C', text: 'assure' },
      { key: 'D', text: 'reassure' },
    ],
    correctKey: 'D' as const,
    explanation: '"reassure"は「（不安を感じている人を）安心させる・励ます」の意味。"assure"は「（人に）断言する」、"ensure"は「確実にする」（人を目的語に取らない）、"insure"は「保険をかける」です。緊張している人を励ます文脈では"reassure"が最適です。',
    difficulty: 'advanced' as const,
  },

  // 004 — principal / principle
  {
    id: 'eiken_2kyu3_004',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Honesty is the ( ) on which the entire organization was founded, and it guides every business decision we make.',
    choices: [
      { key: 'A', text: 'principle' },
      { key: 'B', text: 'principal' },
      { key: 'C', text: 'primal' },
      { key: 'D', text: 'preview' },
    ],
    correctKey: 'A' as const,
    explanation: '"principle"は「原則・信条」という名詞です。"principal"は「主要な」（形容詞）または「校長・主体」（名詞）で、ここでは不適切。"on which the organization was founded"という関係詞節が続くことからも、組織の基盤となる「原則」を意味する"principle"が正解です。',
    difficulty: 'standard' as const,
  },

  // 005 — complement / compliment
  {
    id: 'eiken_2kyu3_005',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The crisp white wine perfectly ( ) the delicate flavor of the grilled fish, making the meal a memorable experience.',
    choices: [
      { key: 'A', text: 'compliments' },
      { key: 'B', text: 'competes' },
      { key: 'C', text: 'compromises' },
      { key: 'D', text: 'complements' },
    ],
    correctKey: 'D' as const,
    explanation: '"complement"は「（互いに）引き立て合う・補完する」という動詞です。"compliment"は「褒める」で、食べ物同士には使いません。"compromise"は「妥協する・損なう」、"compete"は「競争する」でいずれも文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // 006 — affect / effect / impact / influence (as verbs)
  {
    id: 'eiken_2kyu3_006',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Scientists have found that prolonged exposure to noise pollution can negatively ( ) cognitive performance and concentration.',
    choices: [
      { key: 'A', text: 'effect' },
      { key: 'B', text: 'impact' },
      { key: 'C', text: 'influence' },
      { key: 'D', text: 'affect' },
    ],
    correctKey: 'D' as const,
    explanation: '"affect"は「影響を与える」という動詞で、ここでは認知能力に悪影響を与えるという文脈に最も自然に合います。"effect"は通常名詞（効果）ですが動詞として使う場合は「引き起こす」。"impact"と"influence"も動詞として使えますが、"negatively affect"は英語で最も一般的な表現です。',
    difficulty: 'standard' as const,
  },

  // 007 — vocabulary: academic register
  {
    id: 'eiken_2kyu3_007',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The committee decided to ( ) the proposed budget cuts after members raised concerns about their impact on social services.',
    choices: [
      { key: 'A', text: 'scrutinize' },
      { key: 'B', text: 'accelerate' },
      { key: 'C', text: 'abandon' },
      { key: 'D', text: 'postpone' },
    ],
    correctKey: 'D' as const,
    explanation: '"postpone"は「延期する」の意味で、懸念が提起された後に予算削減案を先送りにするという文脈に合います。"scrutinize"は「精査する」、"accelerate"は「加速する」で文脈に合わず、"abandon"（放棄する）は過激すぎます。',
    difficulty: 'standard' as const,
  },

  // 008 — vocabulary
  {
    id: 'eiken_2kyu3_008',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The diplomat worked tirelessly to ( ) tensions between the two neighboring countries that had been in conflict for decades.',
    choices: [
      { key: 'A', text: 'alleviate' },
      { key: 'B', text: 'escalate' },
      { key: 'C', text: 'fabricate' },
      { key: 'D', text: 'provoke' },
    ],
    correctKey: 'A' as const,
    explanation: '"alleviate"は「（緊張・苦しみなどを）和らげる・緩和する」の意味です。外交官が緊張を和らげるために尽力するという文脈に最も合います。"escalate"は「激化させる」、"fabricate"は「でっち上げる」、"provoke"は「挑発する」でいずれも逆の意味です。',
    difficulty: 'advanced' as const,
  },

  // 009 — vocabulary
  {
    id: 'eiken_2kyu3_009',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The documentary filmmaker sought to ( ) the voices of communities that had long been overlooked by mainstream media.',
    choices: [
      { key: 'A', text: 'amplify' },
      { key: 'B', text: 'suppress' },
      { key: 'C', text: 'distort' },
      { key: 'D', text: 'contradict' },
    ],
    correctKey: 'A' as const,
    explanation: '"amplify"は「増幅させる・広める」の意味で、主流メディアに無視されてきたコミュニティの声を広めるという文脈に合います。"suppress"は「抑圧する」、"distort"は「歪める」、"contradict"は「矛盾する」で文意に反します。',
    difficulty: 'advanced' as const,
  },

  // 010 — vocabulary
  {
    id: 'eiken_2kyu3_010',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'After years of ( ) research, the medical team finally identified the genetic mutation responsible for the rare disease.',
    choices: [
      { key: 'A', text: 'reckless' },
      { key: 'B', text: 'redundant' },
      { key: 'C', text: 'reluctant' },
      { key: 'D', text: 'rigorous' },
    ],
    correctKey: 'D' as const,
    explanation: '"rigorous"は「厳密な・徹底的な」の意味で、長年にわたる科学的研究を形容する際に適切な学術的語彙です。"reckless"は「無謀な」、"redundant"は「余分な・不要な」、"reluctant"は「気が進まない」で文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // 011 — vocabulary: eminent vs. distinguished
  {
    id: 'eiken_2kyu3_011',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The university invited an ( ) scholar whose research on ancient civilizations had earned international recognition.',
    choices: [
      { key: 'A', text: 'imminent' },
      { key: 'B', text: 'implicit' },
      { key: 'C', text: 'eminent' },
      { key: 'D', text: 'eligible' },
    ],
    correctKey: 'C' as const,
    explanation: '"eminent"は「（学者・専門家として）著名な・卓越した」という意味の形容詞で、国際的に認められた学者を形容するのに適切です。"imminent"は「差し迫った」、"implicit"は「暗黙の」、"eligible"は「資格がある」で文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // 012 — vocabulary
  {
    id: 'eiken_2kyu3_012',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The sudden closure of the factory left hundreds of workers in a ( ) situation, unsure of how to pay their bills.',
    choices: [
      { key: 'A', text: 'precarious' },
      { key: 'B', text: 'prosperous' },
      { key: 'C', text: 'redundant' },
      { key: 'D', text: 'prominent' },
    ],
    correctKey: 'A' as const,
    explanation: '"precarious"は「不安定な・危うい」の意味で、工場閉鎖後に生活費の支払いさえ不安になった労働者の状況を正確に表しています。"prosperous"は「繁栄した」で逆の意味。"redundant"は英国英語で「解雇された」の意味もありますが、"situation"を修飾する場合は不自然です。',
    difficulty: 'advanced' as const,
  },

  // 013 — vocabulary
  {
    id: 'eiken_2kyu3_013',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The charity organization relies heavily on ( ) donations from the public to fund its programs for homeless youth.',
    choices: [
      { key: 'A', text: 'voluntary' },
      { key: 'B', text: 'compulsory' },
      { key: 'C', text: 'statutory' },
      { key: 'D', text: 'mandatory' },
    ],
    correctKey: 'A' as const,
    explanation: '"voluntary"は「自発的な・無償の」の意味で、慈善団体への自由意志による寄付を表すのに適切です。"compulsory"・"mandatory"・"statutory"はいずれも「義務的な・強制的な」の意味で、自由意志による寄付とは矛盾します。',
    difficulty: 'standard' as const,
  },

  // 014 — vocabulary
  {
    id: 'eiken_2kyu3_014',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The author\'s new novel was widely praised for its ( ) portrayal of immigrant life, drawing on her own family history.',
    choices: [
      { key: 'A', text: 'authentic' },
      { key: 'B', text: 'artificial' },
      { key: 'C', text: 'ambiguous' },
      { key: 'D', text: 'anonymous' },
    ],
    correctKey: 'A' as const,
    explanation: '"authentic"は「真正な・本物の」の意味で、自身の家族の歴史に基づいた移民生活の描写を形容するのに適しています。"artificial"は「人工的な・作り物の」で逆の意味。"ambiguous"は「曖昧な」、"anonymous"は「匿名の」で文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // 015 — vocabulary
  {
    id: 'eiken_2kyu3_015',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The CEO\'s decision to cut bonuses while increasing her own salary drew sharp ( ) from employees and shareholders alike.',
    choices: [
      { key: 'A', text: 'admiration' },
      { key: 'B', text: 'gratitude' },
      { key: 'C', text: 'endorsement' },
      { key: 'D', text: 'criticism' },
    ],
    correctKey: 'D' as const,
    explanation: '"criticism"は「批判」の意味で、自分の給与を上げながら部下のボーナスを削減するというCEOの決定に対する否定的な反応として適切です。"admiration"・"gratitude"・"endorsement"はいずれも肯定的な意味で文脈に反します。',
    difficulty: 'basic' as const,
  },

  // 016 — vocabulary
  {
    id: 'eiken_2kyu3_016',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Governments around the world are under pressure to ( ) their commitment to the Paris Agreement on climate change.',
    choices: [
      { key: 'A', text: 'reaffirm' },
      { key: 'B', text: 'withdraw' },
      { key: 'C', text: 'overlook' },
      { key: 'D', text: 'undermine' },
    ],
    correctKey: 'A' as const,
    explanation: '"reaffirm"は「再確認する・改めて誓約する」の意味で、各国政府がパリ協定への取り組みを改めて確認するという文脈に最も合います。"withdraw"は「撤退する」、"overlook"は「見落とす」、"undermine"は「損なう」で文意に反します。',
    difficulty: 'advanced' as const,
  },

  // 017 — vocabulary
  {
    id: 'eiken_2kyu3_017',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The local council voted to ( ) the historic building from demolition by listing it as a protected heritage site.',
    choices: [
      { key: 'A', text: 'safeguard' },
      { key: 'B', text: 'exclude' },
      { key: 'C', text: 'exempt' },
      { key: 'D', text: 'surrender' },
    ],
    correctKey: 'A' as const,
    explanation: '"safeguard"は「守る・保護する」の意味で、歴史的建造物を取り壊しから保護するという文脈に最も適しています。"exclude"は「除外する」、"exempt"は「免除する」（from との相性は良いが意味が異なる）、"surrender"は「降伏する・引き渡す」です。',
    difficulty: 'standard' as const,
  },

  // 018 — vocabulary
  {
    id: 'eiken_2kyu3_018',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The research team\'s findings were so ( ) that they were able to secure additional funding for a second phase of the study.',
    choices: [
      { key: 'A', text: 'inconclusive' },
      { key: 'B', text: 'compelling' },
      { key: 'C', text: 'irrelevant' },
      { key: 'D', text: 'superficial' },
    ],
    correctKey: 'B' as const,
    explanation: '"compelling"は「説得力のある・注目に値する」の意味で、追加資金を獲得できるほど優れた研究結果を形容するのに適しています。"inconclusive"は「結論が出ない」、"irrelevant"は「無関係な」、"superficial"は「表面的な」でいずれも不適切です。',
    difficulty: 'standard' as const,
  },

  // 019 — vocabulary
  {
    id: 'eiken_2kyu3_019',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The government\'s new housing policy was designed to ( ) affordable homes for low-income families in urban areas.',
    choices: [
      { key: 'A', text: 'demolish' },
      { key: 'B', text: 'restrict' },
      { key: 'C', text: 'provision' },
      { key: 'D', text: 'facilitate' },
    ],
    correctKey: 'D' as const,
    explanation: '"facilitate"は「促進する・可能にする」の意味で、低所得世帯向けの手頃な住宅供給を促進する政策という文脈に適しています。"demolish"は「取り壊す」、"restrict"は「制限する」で逆の意味。"provision"は名詞・動詞両形ありますが、ここでは"facilitate"が最も自然です。',
    difficulty: 'advanced' as const,
  },

  // 020 — vocabulary
  {
    id: 'eiken_2kyu3_020',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The patient\'s symptoms were ( ) with those of a rare tropical disease, leading doctors to order further tests.',
    choices: [
      { key: 'A', text: 'consistent' },
      { key: 'B', text: 'contradictory' },
      { key: 'C', text: 'irrelevant' },
      { key: 'D', text: 'beneficial' },
    ],
    correctKey: 'A' as const,
    explanation: '"consistent with"は「〜と一致する・〜に合致する」という医学・科学分野でよく使われる表現です。患者の症状が熱帯病の症状と一致しているという文脈に最も適しています。"contradictory"は「矛盾する」、"irrelevant"は「無関係な」で文意に反します。',
    difficulty: 'advanced' as const,
  },

  // ===== GRAMMAR (021-035) =====

  // 021 — Non-defining relative clause
  {
    id: 'eiken_2kyu3_021',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Dr. Nakamura, ( ) research on Alzheimer\'s disease has been cited over 2,000 times, will deliver the keynote address.',
    choices: [
      { key: 'A', text: 'that' },
      { key: 'B', text: 'whose' },
      { key: 'C', text: 'who' },
      { key: 'D', text: 'which' },
    ],
    correctKey: 'B' as const,
    explanation: 'コンマで区切られた非制限的関係代名詞節で、先行詞はDr. Nakamura（人）。後続する"research"は名詞なので、所有を示す関係代名詞"whose"（〜の）が必要です。"who"の後には動詞が続きます。"that"は非制限的節では使えません。',
    difficulty: 'standard' as const,
  },

  // 022 — Inversion with Hardly
  {
    id: 'eiken_2kyu3_022',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Hardly ( ) her desk when her manager called an urgent meeting that lasted until midnight.',
    choices: [
      { key: 'A', text: 'had she reached' },
      { key: 'B', text: 'she reached' },
      { key: 'C', text: 'she had reached' },
      { key: 'D', text: 'has she reached' },
    ],
    correctKey: 'A' as const,
    explanation: '"Hardly"が文頭に出ると倒置が起こります。"Hardly had + 主語 + 過去分詞 + when ..."で「〜するかしないうちに…した」という意味です。過去完了形を使い、助動詞hadが主語の前に出ます。"she had reached"では倒置がなく非文法的です。',
    difficulty: 'advanced' as const,
  },

  // 023 — Mixed conditional
  {
    id: 'eiken_2kyu3_023',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'If she had taken the doctor\'s advice seriously back then, she ( ) in better health today.',
    choices: [
      { key: 'A', text: 'would be' },
      { key: 'B', text: 'would have been' },
      { key: 'C', text: 'will be' },
      { key: 'D', text: 'had been' },
    ],
    correctKey: 'A' as const,
    explanation: 'これは混合仮定法（mixed conditional）です。If節は過去の事実に反する仮定（仮定法過去完了：had taken）、主節は現在への影響（仮定法過去：would be）を表します。"would have been"は純粋な仮定法過去完了で、現在の状態には使えません。',
    difficulty: 'advanced' as const,
  },

  // 024 — Formal passive: It is believed that
  {
    id: 'eiken_2kyu3_024',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: '( ) that the ancient ruins discovered in the valley date back to the third century BCE.',
    choices: [
      { key: 'A', text: 'They believe' },
      { key: 'B', text: 'It is believed' },
      { key: 'C', text: 'Believed it is' },
      { key: 'D', text: 'People believes' },
    ],
    correctKey: 'B' as const,
    explanation: '"It is believed that ..."は「〜と信じられている」というフォーマルな受動態表現で、学術的・報道的な文章でよく使われます。"They believe"も正しい英語ですが、Cは語順が誤り、Dは"people"が複数形なのに"believes"と三単現を使っており非文法的です。',
    difficulty: 'standard' as const,
  },

  // 025 — Scarcely ... when
  {
    id: 'eiken_2kyu3_025',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Scarcely ( ) the announcement when reporters flooded the press room with questions.',
    choices: [
      { key: 'A', text: 'had the minister finished' },
      { key: 'B', text: 'the minister had finished' },
      { key: 'C', text: 'did the minister finish' },
      { key: 'D', text: 'the minister finished' },
    ],
    correctKey: 'A' as const,
    explanation: '"Scarcely"が文頭に来る場合も"Hardly"と同様に倒置が起こります。"Scarcely had + 主語 + 過去分詞 + when ..."という形で「〜するかしないうちに…した」を表します。過去完了形と倒置（had + 主語）の両方が必要です。',
    difficulty: 'advanced' as const,
  },

  // 026 — Perfect aspect: future perfect
  {
    id: 'eiken_2kyu3_026',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'By the time the new bridge opens next spring, engineers ( ) on the project for over six years.',
    choices: [
      { key: 'A', text: 'will work' },
      { key: 'B', text: 'are working' },
      { key: 'C', text: 'have worked' },
      { key: 'D', text: 'will have been working' },
    ],
    correctKey: 'D' as const,
    explanation: '"By the time + 現在形"の節に対して主節では未来完了進行形（will have been doing）を使います。「来春開通するまでには、6年以上取り組み続けていることになる」という継続を強調する表現です。未来完了"will have worked"も可能ですが、継続性を示す進行形が最も自然です。',
    difficulty: 'advanced' as const,
  },

  // 027 — It is reported that (formal passive)
  {
    id: 'eiken_2kyu3_027',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'It ( ) that the two companies have been in secret merger talks for several months.',
    choices: [
      { key: 'A', text: 'is reported' },
      { key: 'B', text: 'reports' },
      { key: 'C', text: 'has reported' },
      { key: 'D', text: 'was reporting' },
    ],
    correctKey: 'A' as const,
    explanation: '"It is reported that ..."は「〜と報告されている・〜と伝えられている」という報道でよく使われるフォーマルな受動態表現です。"It"は形式主語で、that節が真の主語です。"reports"では主語が"it"なので意味が通じません。',
    difficulty: 'standard' as const,
  },

  // 028 — Non-defining vs. defining relative clause
  {
    id: 'eiken_2kyu3_028',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The policy ( ) was introduced last year has already reduced traffic congestion by 20 percent.',
    choices: [
      { key: 'A', text: ', which' },
      { key: 'B', text: ', that' },
      { key: 'C', text: 'which' },
      { key: 'D', text: 'that' },
    ],
    correctKey: 'D' as const,
    explanation: 'コンマなしの制限的関係代名詞節で、「昨年導入されたその政策」と特定するために"that"を使います。コンマなしの制限的用法では"that"か"which"が使えますが、"that"の方が制限的節では慣用的です。"that"はコンマを伴う非制限的節では使えないため、コンマ付きの選択肢は除外されます。',
    difficulty: 'standard' as const,
  },

  // 029 — Subjunctive: It is necessary that
  {
    id: 'eiken_2kyu3_029',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The committee strongly recommends that the new safety protocol ( ) before the factory reopens.',
    choices: [
      { key: 'A', text: 'is implemented' },
      { key: 'B', text: 'will be implemented' },
      { key: 'C', text: 'was implemented' },
      { key: 'D', text: 'be implemented' },
    ],
    correctKey: 'D' as const,
    explanation: '"recommend that ..."の後のthat節では仮定法現在（動詞の原形）を使います。受動態の場合は"be + 過去分詞"の形になります。三単現の"s"はつけません。"is implemented"は直説法現在で、"recommend"などの提案動詞の後では使いません。',
    difficulty: 'advanced' as const,
  },

  // 030 — Cleft sentence
  {
    id: 'eiken_2kyu3_030',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'It was the unexpected cold snap in March ( ) destroyed most of the region\'s cherry blossom crop that year.',
    choices: [
      { key: 'A', text: 'which' },
      { key: 'B', text: 'what' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'where' },
    ],
    correctKey: 'C' as const,
    explanation: 'これは強調構文（cleft sentence）です。"It was + 強調したい語句 + that + 残りの文"という形で、"the unexpected cold snap in March"を強調しています。強調構文では先行詞が人でも物でも"that"を使うのが一般的です（"which"も可能ですが"that"の方が慣用的）。',
    difficulty: 'standard' as const,
  },

  // 031 — No sooner ... than
  {
    id: 'eiken_2kyu3_031',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'No sooner ( ) the concert hall than she realized she had left her ticket at home.',
    choices: [
      { key: 'A', text: 'she entered' },
      { key: 'B', text: 'she had entered' },
      { key: 'C', text: 'has she entered' },
      { key: 'D', text: 'had she entered' },
    ],
    correctKey: 'D' as const,
    explanation: '"No sooner"が文頭に来ると倒置が起こります。"No sooner had + 主語 + 過去分詞 + than ..."で「〜するやいなや…した」の意味です。過去完了の助動詞"had"が主語の前に出ます。"she had entered"では倒置がなく非文法的です。',
    difficulty: 'advanced' as const,
  },

  // 032 — Present perfect vs. simple past
  {
    id: 'eiken_2kyu3_032',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The city ( ) three major earthquakes since the new seismic monitoring system was installed.',
    choices: [
      { key: 'A', text: 'has experienced' },
      { key: 'B', text: 'experienced' },
      { key: 'C', text: 'had experienced' },
      { key: 'D', text: 'was experiencing' },
    ],
    correctKey: 'A' as const,
    explanation: '"since + 過去の時点"で始まる節とともに主節では現在完了形を使います。「地震計が設置されて以来、3回の大地震を経験している」という現在までの経験・継続を表します。単純過去"experienced"はsince節と組み合わせられません。',
    difficulty: 'standard' as const,
  },

  // 033 — Conditional type 3
  {
    id: 'eiken_2kyu3_033',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'If the rescue team ( ) two hours earlier, they might have found more survivors.',
    choices: [
      { key: 'A', text: 'arrived' },
      { key: 'B', text: 'would arrive' },
      { key: 'C', text: 'had arrived' },
      { key: 'D', text: 'have arrived' },
    ],
    correctKey: 'C' as const,
    explanation: '仮定法過去完了の条件節です。"If + 主語 + had + 過去分詞"で過去の事実に反する仮定を表します。主節では"might have found"（〜できたかもしれない）が使われています。"would arrive"は仮定法過去で現在・未来の仮定に使います。',
    difficulty: 'standard' as const,
  },

  // 034 — Passive: It is said that
  {
    id: 'eiken_2kyu3_034',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The missing explorer ( ) to have reached the summit before the storm struck, but no records have been found.',
    choices: [
      { key: 'A', text: 'is said' },
      { key: 'B', text: 'says' },
      { key: 'C', text: 'has said' },
      { key: 'D', text: 'is saying' },
    ],
    correctKey: 'A' as const,
    explanation: '"is said to have + 過去分詞"は「〜したと言われている」という過去の出来事についての伝聞表現です。"It is said that ..."と同じ意味を持つフォーマルな表現です。主語が"the missing explorer"（人）の場合も同じ形を使います。',
    difficulty: 'advanced' as const,
  },

  // 035 — Perfect infinitive with modal
  {
    id: 'eiken_2kyu3_035',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'You ( ) the professor before submitting your thesis; now it is too late to make major changes.',
    choices: [
      { key: 'A', text: 'should consult' },
      { key: 'B', text: 'must consult' },
      { key: 'C', text: 'ought to consult' },
      { key: 'D', text: 'should have consulted' },
    ],
    correctKey: 'D' as const,
    explanation: '"should have + 過去分詞"は「〜すべきだったのに（しなかった）」という過去の後悔・非難を表します。「提出する前に教授に相談すべきだったのに、今となっては遅い」という文脈に合います。"should consult"は現在・未来の義務を表します。',
    difficulty: 'standard' as const,
  },

  // ===== READING (036-050) =====
  // --- PASSAGE 1: Science/Technology (AI & Medicine) — Q036-038 ---
  {
    id: 'eiken_2kyu3_036',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Artificial intelligence is transforming the field of medical diagnosis in ways that were unimaginable a decade ago. Machine learning algorithms trained on millions of medical images can now detect early signs of diseases such as diabetic retinopathy and certain cancers with accuracy that rivals—and in some cases exceeds—that of experienced specialists. In one landmark study, an AI system identified breast cancer from mammograms with a 9.4% reduction in false negatives compared to expert radiologists.\n\nDespite these impressive results, the integration of AI into clinical practice remains cautious. Healthcare professionals emphasize that AI tools must be understood as decision-support systems rather than autonomous diagnosticians. Errors made by AI carry different consequences from those made by humans: a physician can explain her reasoning and adapt when questioned, whereas an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem. Regulatory bodies in several countries now require that medical AI systems demonstrate not only accuracy but also interpretability before receiving approval."\n\nAccording to the passage, what is the "black box" problem?',
    choices: [
      { key: 'A', text: 'AI systems store patient data in encrypted formats that doctors cannot access.' },
      { key: 'B', text: 'AI requires too much electricity to be practical in hospitals.' },
      { key: 'C', text: 'Medical AI must be kept in secure, isolated computer servers.' },
      { key: 'D', text: 'The decision-making process of AI is difficult to understand even for its creators.' },
    ],
    correctKey: 'D' as const,
    explanation: 'パッセージでは「an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem」と説明されています。AIの判断プロセスが開発者にさえ不透明であることを指します。Dがこれを正確に言い換えています。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_037',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about AI in medicine and answer the question.\n\n"Artificial intelligence is transforming the field of medical diagnosis in ways that were unimaginable a decade ago. Machine learning algorithms trained on millions of medical images can now detect early signs of diseases such as diabetic retinopathy and certain cancers with accuracy that rivals—and in some cases exceeds—that of experienced specialists. In one landmark study, an AI system identified breast cancer from mammograms with a 9.4% reduction in false negatives compared to expert radiologists.\n\nDespite these impressive results, the integration of AI into clinical practice remains cautious. Healthcare professionals emphasize that AI tools must be understood as decision-support systems rather than autonomous diagnosticians. Errors made by AI carry different consequences from those made by humans: a physician can explain her reasoning and adapt when questioned, whereas an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem. Regulatory bodies in several countries now require that medical AI systems demonstrate not only accuracy but also interpretability before receiving approval."\n\nThe word "rivals" in the first paragraph is closest in meaning to:',
    choices: [
      { key: 'A', text: 'competes with' },
      { key: 'B', text: 'falls short of' },
      { key: 'C', text: 'relies upon' },
      { key: 'D', text: 'replaces entirely' },
    ],
    correctKey: 'A' as const,
    explanation: '"rivals"は「匹敵する・張り合う」の意味です。「経験豊富な専門家の精度に匹敵し、場合によってはそれを上回る」という文脈から、"competes with"（〜と肩を並べる）が最も近い意味です。"falls short of"は「及ばない」で反対の意味になります。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_038',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about AI in medicine and answer the question.\n\n"Artificial intelligence is transforming the field of medical diagnosis in ways that were unimaginable a decade ago. Machine learning algorithms trained on millions of medical images can now detect early signs of diseases such as diabetic retinopathy and certain cancers with accuracy that rivals—and in some cases exceeds—that of experienced specialists. In one landmark study, an AI system identified breast cancer from mammograms with a 9.4% reduction in false negatives compared to expert radiologists.\n\nDespite these impressive results, the integration of AI into clinical practice remains cautious. Healthcare professionals emphasize that AI tools must be understood as decision-support systems rather than autonomous diagnosticians. Errors made by AI carry different consequences from those made by humans: a physician can explain her reasoning and adapt when questioned, whereas an AI\'s logic may be opaque even to its developers—a phenomenon known as the \'black box\' problem. Regulatory bodies in several countries now require that medical AI systems demonstrate not only accuracy but also interpretability before receiving approval."\n\nWhat can be inferred from the passage about the future of AI in healthcare?',
    choices: [
      { key: 'A', text: 'AI will be fully autonomous in making all medical decisions within the next decade.' },
      { key: 'B', text: 'Regulatory approval processes will be simplified to allow faster adoption of AI tools.' },
      { key: 'C', text: 'Human oversight is likely to remain important even as AI becomes more accurate.' },
      { key: 'D', text: 'AI will eventually make medical specialists unnecessary in most diagnostic fields.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージは「AIは自律的な診断者ではなく意思決定支援システムとして理解されるべき」という専門家の見解と、規制当局が精度に加えて解釈可能性を求めている点を強調しています。これらの点から、AIの精度が向上しても人間による監督が重要であり続けるという推論が導かれます。AとDはパッセージの慎重な立場と矛盾します。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 2: Social/Cultural Commentary (Globalization & Urban Life) — Q039-041 ---
  {
    id: 'eiken_2kyu3_039',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"The rapid expansion of global fast-food chains into traditionally food-rich cultures has sparked a heated debate about culinary identity. Proponents of globalization argue that consumers benefit from greater choice and convenience, and that local cuisines are adaptable enough to coexist with international brands. Critics, however, warn that the dominance of standardized menus is slowly eroding regional culinary traditions that took centuries to develop.\n\nThe situation is more complex than it first appears. In many cities across East Asia and South America, international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands. Some food anthropologists suggest that globalization does not simply erase local identity but rather forces cultures to define and reassert what makes them distinctive. Nevertheless, in rural communities with fewer resources, the appeal of cheap, consistent fast food continues to challenge traditional food practices."\n\nAccording to the passage, what unexpected effect has the spread of international fast-food chains had in some cities?',
    choices: [
      { key: 'A', text: 'It has caused younger generations to abandon their traditional diets entirely.' },
      { key: 'B', text: 'It has increased interest in local and authentic street food among young people.' },
      { key: 'C', text: 'It has led governments to ban foreign restaurant chains from operating.' },
      { key: 'D', text: 'It has made traditional cuisine more expensive and less accessible.' },
    ],
    correctKey: 'B' as const,
    explanation: '"international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands"という記述から、国際的チェーンが逆説的に地元の屋台料理への関心を高めたことがわかります。Bがこれを正確に表しています。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_040',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about globalization and food culture and answer the question.\n\n"The rapid expansion of global fast-food chains into traditionally food-rich cultures has sparked a heated debate about culinary identity. Proponents of globalization argue that consumers benefit from greater choice and convenience, and that local cuisines are adaptable enough to coexist with international brands. Critics, however, warn that the dominance of standardized menus is slowly eroding regional culinary traditions that took centuries to develop.\n\nThe situation is more complex than it first appears. In many cities across East Asia and South America, international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands. Some food anthropologists suggest that globalization does not simply erase local identity but rather forces cultures to define and reassert what makes them distinctive. Nevertheless, in rural communities with fewer resources, the appeal of cheap, consistent fast food continues to challenge traditional food practices."\n\nThe word "eroding" in the first paragraph is closest in meaning to:',
    choices: [
      { key: 'A', text: 'supporting' },
      { key: 'B', text: 'expanding' },
      { key: 'C', text: 'gradually destroying' },
      { key: 'D', text: 'quickly replacing' },
    ],
    correctKey: 'C' as const,
    explanation: '"eroding"は"erode"の現在分詞で「徐々に侵食する・少しずつ損なう」の意味です。「標準化されたメニューが数百年かけて発展した地域の食文化を徐々に損なっている」という文脈から、"gradually destroying"（徐々に破壊する）が最も近い意味です。"quickly replacing"は速度が違います。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_041',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about globalization and food culture and answer the question.\n\n"The rapid expansion of global fast-food chains into traditionally food-rich cultures has sparked a heated debate about culinary identity. Proponents of globalization argue that consumers benefit from greater choice and convenience, and that local cuisines are adaptable enough to coexist with international brands. Critics, however, warn that the dominance of standardized menus is slowly eroding regional culinary traditions that took centuries to develop.\n\nThe situation is more complex than it first appears. In many cities across East Asia and South America, international chains have paradoxically stimulated interest in local street food, as younger generations seeking authentic experiences push back against the uniformity of global brands. Some food anthropologists suggest that globalization does not simply erase local identity but rather forces cultures to define and reassert what makes them distinctive. Nevertheless, in rural communities with fewer resources, the appeal of cheap, consistent fast food continues to challenge traditional food practices."\n\nWhich of the following best describes the overall argument of the passage?',
    choices: [
      { key: 'A', text: 'Globalization is entirely harmful to local food cultures and should be stopped.' },
      { key: 'B', text: 'Traditional food cultures are strong enough to resist globalization without any consequences.' },
      { key: 'C', text: 'Rural communities are better at preserving food traditions than urban areas.' },
      { key: 'D', text: 'The impact of globalization on food culture is complex and varies by context.' },
    ],
    correctKey: 'D' as const,
    explanation: 'パッセージは「The situation is more complex than it first appears」と明言し、都市部では地元料理への関心が高まる一方、農村部では課題が続くという複雑な状況を描いています。Dが「文脈によって影響が異なる」という全体的な主張を最も正確に表しています。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 3: Environmental Topic (Ocean Pollution) — Q042-044 ---
  {
    id: 'eiken_2kyu3_042',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Every year, an estimated eight million metric tons of plastic waste enter the world\'s oceans, threatening marine ecosystems that have evolved over millions of years. Unlike organic matter, most plastics do not biodegrade; instead, they break down into microplastics—particles smaller than five millimeters—which are now found in the deepest ocean trenches and the most remote polar ice. Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity.\n\nThe problem is compounded by the fact that much of this pollution originates far from the ocean. Rivers carry plastic waste from inland cities and agricultural areas to coastal waters, making purely coastal cleanup efforts insufficient. Some environmental groups have begun installing interceptor devices in rivers to catch debris before it reaches the sea, a strategy that many scientists consider more effective than post-pollution ocean cleanup operations. International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."\n\nWhy do scientists consider river interception more effective than ocean cleanup?',
    choices: [
      { key: 'A', text: 'Oceans are too deep for cleanup equipment to operate effectively.' },
      { key: 'B', text: 'River interception is cheaper because it requires fewer workers.' },
      { key: 'C', text: 'Stopping plastic before it reaches the ocean prevents further dispersion.' },
      { key: 'D', text: 'Ocean cleanup removes only large pieces of plastic, not microplastics.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージは「interceptor devices in rivers to catch debris before it reaches the sea」が「post-pollution ocean cleanup operations」より効果的だとしています。海に入ってしまった後のクリーンアップより、入る前に止める方が分散を防げるという論理です。Cがこれを最もよく表しています。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_043',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about ocean pollution and answer the question.\n\n"Every year, an estimated eight million metric tons of plastic waste enter the world\'s oceans, threatening marine ecosystems that have evolved over millions of years. Unlike organic matter, most plastics do not biodegrade; instead, they break down into microplastics—particles smaller than five millimeters—which are now found in the deepest ocean trenches and the most remote polar ice. Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity.\n\nThe problem is compounded by the fact that much of this pollution originates far from the ocean. Rivers carry plastic waste from inland cities and agricultural areas to coastal waters, making purely coastal cleanup efforts insufficient. Some environmental groups have begun installing interceptor devices in rivers to catch debris before it reaches the sea, a strategy that many scientists consider more effective than post-pollution ocean cleanup operations. International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."\n\nWhat does the passage imply about the relationship between microplastics and wildlife?',
    choices: [
      { key: 'A', text: 'Marine animals have developed immunity to microplastics over time.' },
      { key: 'B', text: 'Microplastics have already been proven to cause extinction of certain species.' },
      { key: 'C', text: 'The presence of microplastics in animal tissues suggests potential harm to ecosystems.' },
      { key: 'D', text: 'Only deep-sea species are affected by microplastics, not coastal animals.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージは「Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity」と述べています。「深刻な懸念」を「示唆している」という推論が必要です。Bは証明されたとは書かれていません。Cが「潜在的な害を示唆する」という適切な推論です。',
    difficulty: 'advanced' as const,
  },

  {
    id: 'eiken_2kyu3_044',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about ocean pollution and answer the question.\n\n"Every year, an estimated eight million metric tons of plastic waste enter the world\'s oceans, threatening marine ecosystems that have evolved over millions of years. Unlike organic matter, most plastics do not biodegrade; instead, they break down into microplastics—particles smaller than five millimeters—which are now found in the deepest ocean trenches and the most remote polar ice. Scientists have detected microplastics in the tissues of fish, seabirds, and marine mammals, raising serious concerns about the long-term consequences for biodiversity.\n\nThe problem is compounded by the fact that much of this pollution originates far from the ocean. Rivers carry plastic waste from inland cities and agricultural areas to coastal waters, making purely coastal cleanup efforts insufficient. Some environmental groups have begun installing interceptor devices in rivers to catch debris before it reaches the sea, a strategy that many scientists consider more effective than post-pollution ocean cleanup operations. International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."\n\nAccording to the passage, which of the following makes solving ocean plastic pollution especially difficult?',
    choices: [
      { key: 'A', text: 'There is no technology capable of removing microplastics from seawater.' },
      { key: 'B', text: 'Most plastic in the ocean comes from ships rather than rivers.' },
      { key: 'C', text: 'Pollution crosses national borders, making international agreement necessary but difficult.' },
      { key: 'D', text: 'Environmental organizations disagree about which cleanup method is best.' },
    ],
    correctKey: 'C' as const,
    explanation: '"International cooperation, however, remains the greatest challenge: plastics produced in one country routinely end up on the beaches of another."という記述から、プラスチック汚染が国境を越えるため国際協力が最大の課題であることがわかります。Cがこれを正確に表しています。',
    difficulty: 'standard' as const,
  },

  // --- PASSAGE 4: Historical/Biographical Excerpt — Q045-047 ---
  {
    id: 'eiken_2kyu3_045',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Marie Curie remains one of the most remarkable figures in the history of science. Born in Warsaw in 1867, she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University.\'  She later moved to Paris, where she became the first woman to earn a doctoral degree in physics from the Sorbonne.\n\nHer scientific achievements are equally extraordinary. Together with her husband Pierre, she discovered the elements polonium and radium, coining the term \'radioactivity\' to describe the emission of energy from atomic nuclei. In 1903, she became the first woman to receive a Nobel Prize—in Physics—and in 1911, she received a second Nobel Prize in Chemistry, making her the only person in history to win Nobel Prizes in two different sciences. Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender. Curie\'s story is not only a testament to scientific brilliance but also to the personal resilience required to succeed in a world not yet ready to recognize it."\n\nWhy did Marie Curie attend the "Floating University"?',
    choices: [
      { key: 'A', text: 'Because it offered the best science program in Eastern Europe.' },
      { key: 'B', text: 'Because women were prevented from attending official universities in Poland at that time.' },
      { key: 'C', text: 'Because she could not afford tuition at formal academic institutions.' },
      { key: 'D', text: 'Because the Floating University was affiliated with the Sorbonne.' },
    ],
    correctKey: 'B' as const,
    explanation: '"she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University\'"という記述から、女性が高等教育への進学を禁じられていたため、秘密裡に運営される機関に通ったことがわかります。Bが正解です。',
    difficulty: 'basic' as const,
  },

  {
    id: 'eiken_2kyu3_046',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about Marie Curie and answer the question.\n\n"Marie Curie remains one of the most remarkable figures in the history of science. Born in Warsaw in 1867, she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University.\' She later moved to Paris, where she became the first woman to earn a doctoral degree in physics from the Sorbonne.\n\nHer scientific achievements are equally extraordinary. Together with her husband Pierre, she discovered the elements polonium and radium, coining the term \'radioactivity\' to describe the emission of energy from atomic nuclei. In 1903, she became the first woman to receive a Nobel Prize—in Physics—and in 1911, she received a second Nobel Prize in Chemistry, making her the only person in history to win Nobel Prizes in two different sciences. Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender. Curie\'s story is not only a testament to scientific brilliance but also to the personal resilience required to succeed in a world not yet ready to recognize it."\n\nThe word "clandestine" in the first paragraph is closest in meaning to:',
    choices: [
      { key: 'A', text: 'highly expensive' },
      { key: 'B', text: 'internationally recognized' },
      { key: 'C', text: 'conducted in secret' },
      { key: 'D', text: 'open to all students' },
    ],
    correctKey: 'C' as const,
    explanation: '"clandestine"は「秘密の・内密の」という意味の形容詞です。当局に認められていない秘密機関として運営されていた「浮動大学」の文脈から、"conducted in secret"（秘密裏に運営されている）が最も近い意味です。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_047',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about Marie Curie and answer the question.\n\n"Marie Curie remains one of the most remarkable figures in the history of science. Born in Warsaw in 1867, she overcame the systemic barriers that barred women from higher education in Russian-controlled Poland by attending a clandestine institution known as the \'Floating University.\' She later moved to Paris, where she became the first woman to earn a doctoral degree in physics from the Sorbonne.\n\nHer scientific achievements are equally extraordinary. Together with her husband Pierre, she discovered the elements polonium and radium, coining the term \'radioactivity\' to describe the emission of energy from atomic nuclei. In 1903, she became the first woman to receive a Nobel Prize—in Physics—and in 1911, she received a second Nobel Prize in Chemistry, making her the only person in history to win Nobel Prizes in two different sciences. Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender. Curie\'s story is not only a testament to scientific brilliance but also to the personal resilience required to succeed in a world not yet ready to recognize it."\n\nWhat does the passage suggest about the world in which Curie worked?',
    choices: [
      { key: 'A', text: 'Scientific institutions fully supported women researchers once their talent was evident.' },
      { key: 'B', text: 'Curie\'s success was largely due to the encouragement she received from the French government.' },
      { key: 'C', text: 'Even exceptional achievement was not always sufficient to overcome gender-based discrimination.' },
      { key: 'D', text: 'The Nobel Prize committee was the only institution that recognized her contributions fairly.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージは「Despite her global renown, she faced persistent prejudice: the French Academy of Sciences refused to admit her as a member, citing her gender.」と述べています。世界的に有名になっても性差別に直面したという事実から、「卓越した業績でさえ性差別を克服するには不十分な場合があった」という推論が導かれます。Cが正解です。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 5: Space exploration — Q048-050 ---
  {
    id: 'eiken_2kyu3_048',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"The discovery of exoplanets—planets orbiting stars other than our Sun—has revolutionized our understanding of the universe. As of 2025, astronomers have confirmed more than 5,600 exoplanets, and thousands more await verification. Many of these worlds are nothing like Earth: some are gas giants orbiting closer to their stars than Mercury does to our Sun, while others reside in the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface.\n\nThe search for life beyond Earth has become one of the most compelling questions in modern science. Next-generation space telescopes are being designed to analyze the atmospheric composition of exoplanets, searching for biosignatures—chemical markers such as oxygen and methane that could indicate biological activity. Scientists caution, however, that the presence of such gases alone does not confirm life; geological and chemical processes can also produce them. The challenge lies in distinguishing between biological and non-biological sources, a task that may require decades of observation and technology that does not yet exist."\n\nAccording to the passage, what is a "habitable zone"?',
    choices: [
      { key: 'A', text: 'A region of space where the gravity is strong enough to support an atmosphere.' },
      { key: 'B', text: 'The distance from a star at which liquid water could exist on a planet\'s surface.' },
      { key: 'C', text: 'An area in our solar system where no asteroids or comets are present.' },
      { key: 'D', text: 'The part of a galaxy that contains the highest concentration of stars.' },
    ],
    correctKey: 'B' as const,
    explanation: 'パッセージでは「the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface」と定義されています。恒星からの距離が液体の水が存在できる範囲であることがBに正確に示されています。',
    difficulty: 'basic' as const,
  },

  {
    id: 'eiken_2kyu3_049',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about exoplanets and answer the question.\n\n"The discovery of exoplanets—planets orbiting stars other than our Sun—has revolutionized our understanding of the universe. As of 2025, astronomers have confirmed more than 5,600 exoplanets, and thousands more await verification. Many of these worlds are nothing like Earth: some are gas giants orbiting closer to their stars than Mercury does to our Sun, while others reside in the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface.\n\nThe search for life beyond Earth has become one of the most compelling questions in modern science. Next-generation space telescopes are being designed to analyze the atmospheric composition of exoplanets, searching for biosignatures—chemical markers such as oxygen and methane that could indicate biological activity. Scientists caution, however, that the presence of such gases alone does not confirm life; geological and chemical processes can also produce them. The challenge lies in distinguishing between biological and non-biological sources, a task that may require decades of observation and technology that does not yet exist."\n\nWhy do scientists say that finding oxygen and methane on an exoplanet is not enough to confirm life?',
    choices: [
      { key: 'A', text: 'Because oxygen and methane cannot exist in the atmospheres of exoplanets.' },
      { key: 'B', text: 'Because these gases can be produced by non-biological processes as well.' },
      { key: 'C', text: 'Because current telescopes are not powerful enough to detect these gases.' },
      { key: 'D', text: 'Because life requires many more chemicals beyond just oxygen and methane.' },
    ],
    correctKey: 'B' as const,
    explanation: '"geological and chemical processes can also produce them"という記述から、酸素やメタンは生物活動以外の地質学的・化学的プロセスによっても生成されるため、それらの存在だけでは生命の確認にならないとわかります。Bが正解です。',
    difficulty: 'standard' as const,
  },

  {
    id: 'eiken_2kyu3_050',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about exoplanets and answer the question.\n\n"The discovery of exoplanets—planets orbiting stars other than our Sun—has revolutionized our understanding of the universe. As of 2025, astronomers have confirmed more than 5,600 exoplanets, and thousands more await verification. Many of these worlds are nothing like Earth: some are gas giants orbiting closer to their stars than Mercury does to our Sun, while others reside in the \'habitable zone,\' the range of distances from a star where liquid water could potentially exist on a planetary surface.\n\nThe search for life beyond Earth has become one of the most compelling questions in modern science. Next-generation space telescopes are being designed to analyze the atmospheric composition of exoplanets, searching for biosignatures—chemical markers such as oxygen and methane that could indicate biological activity. Scientists caution, however, that the presence of such gases alone does not confirm life; geological and chemical processes can also produce them. The challenge lies in distinguishing between biological and non-biological sources, a task that may require decades of observation and technology that does not yet exist."\n\nWhat does the passage imply about the timeline for discovering life on exoplanets?',
    choices: [
      { key: 'A', text: 'Scientists expect to confirm life on an exoplanet within the next ten years.' },
      { key: 'B', text: 'The discovery of life is impossible because no exoplanets are in the habitable zone.' },
      { key: 'C', text: 'Finding conclusive evidence of life will likely take a very long time with current technology.' },
      { key: 'D', text: 'Next-generation telescopes will definitively answer the question of extraterrestrial life.' },
    ],
    correctKey: 'C' as const,
    explanation: 'パッセージの最後の文「a task that may require decades of observation and technology that does not yet exist」から、数十年の観測と現在はまだ存在しない技術が必要かもしれないと述べられています。これは決定的な証拠の発見が非常に長い時間を要することを示唆しており、Cが正解です。「次世代望遠鏡が決定的に答える」という断言はパッセージのそのような確信を示していない記述と矛盾します。',
    difficulty: 'advanced' as const,
  },
  // ===== VOCABULARY (051-070) =====

  // 051 — pragmatic / dogmatic / skeptical / naive
  {
    id: 'eiken_2kyu3_051',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Rather than insisting on an ideal solution, the manager took a ( ) approach and focused on what could realistically be achieved with the limited budget.',
    choices: [
      { key: 'A', text: 'dogmatic' },
      { key: 'B', text: 'pragmatic' },
      { key: 'C', text: 'naive' },
      { key: 'D', text: 'skeptical' },
    ],
    correctKey: 'B' as const,
    explanation: '"pragmatic"は「実利的な、現実的な」という意味で、理想にこだわらず現実的に達成可能なことに焦点を当てる態度を表します。"dogmatic"は「独断的な」、"naive"は「世間知らずな」、"skeptical"は「懐疑的な」で文脈に合いません。',
    difficulty: 'advanced' as const,
  },

  // 052 — deteriorate / accelerate / stabilize / fluctuate
  {
    id: 'eiken_2kyu3_052',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The patient\'s condition began to ( ) rapidly overnight, prompting doctors to move her to intensive care.',
    choices: [
      { key: 'A', text: 'stabilize' },
      { key: 'B', text: 'fluctuate' },
      { key: 'C', text: 'deteriorate' },
      { key: 'D', text: 'accelerate' },
    ],
    correctKey: 'C' as const,
    explanation: '"deteriorate"は「（健康状態などが）悪化する」という意味です。集中治療室に移されたという結果と一致します。"stabilize"は「安定する」で逆の意味、"fluctuate"は「変動する」、"accelerate"は「加速する」（通常は速度に使う）で文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // 053 — allocate / accumulate / eliminate / delegate
  {
    id: 'eiken_2kyu3_053',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The director decided to ( ) more of her responsibilities to junior staff so she could focus on long-term strategy.',
    choices: [
      { key: 'A', text: 'accumulate' },
      { key: 'B', text: 'eliminate' },
      { key: 'C', text: 'allocate' },
      { key: 'D', text: 'delegate' },
    ],
    correctKey: 'D' as const,
    explanation: '"delegate responsibilities"は「（権限や責任を）部下に委譲する」という意味の定型表現です。"accumulate"は「蓄積する」、"eliminate"は「排除する」、"allocate"は「（資源などを）割り当てる」で、responsibilities を人に委ねる文脈には delegate が最適です。',
    difficulty: 'advanced' as const,
  },

  // 054 — vocabulary: subtle / blatant / vague / explicit
  {
    id: 'eiken_2kyu3_054',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The company\'s advertisement was criticized for making a ( ) attempt to mislead consumers about the product\'s health benefits.',
    choices: [
      { key: 'A', text: 'subtle' },
      { key: 'B', text: 'blatant' },
      { key: 'C', text: 'vague' },
      { key: 'D', text: 'implicit' },
    ],
    correctKey: 'B' as const,
    explanation: '"blatant"は「あからさまな、露骨な」という意味で、批判の対象になるほど明白な誤解を招く試みを表すのに適切です。"subtle"は「巧妙な、微妙な」で逆のニュアンス、"vague"は「曖昧な」、"implicit"は「暗黙の」で文脈に合いません。',
    difficulty: 'advanced' as const,
  },

  // 055 — vocabulary: prudent / reckless / audacious / timid
  {
    id: 'eiken_2kyu3_055',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Given the uncertain economic outlook, financial advisors recommended a ( ) investment strategy that avoided unnecessary risk.',
    choices: [
      { key: 'A', text: 'reckless' },
      { key: 'B', text: 'audacious' },
      { key: 'C', text: 'prudent' },
      { key: 'D', text: 'timid' },
    ],
    correctKey: 'C' as const,
    explanation: '"prudent"は「思慮深い、慎重な」という意味で、不必要なリスクを避けるという文脈に最適です。"reckless"は「無謀な」で逆の意味、"audacious"は「大胆な」、"timid"は「臆病な」で投資戦略を形容する語としては不自然です。',
    difficulty: 'standard' as const,
  },

  // 056 — vocabulary: verify / falsify / justify / clarify
  {
    id: 'eiken_2kyu3_056',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Before publishing the article, the editor asked the reporter to ( ) every fact with at least two independent sources.',
    choices: [
      { key: 'A', text: 'falsify' },
      { key: 'B', text: 'justify' },
      { key: 'C', text: 'clarify' },
      { key: 'D', text: 'verify' },
    ],
    correctKey: 'D' as const,
    explanation: '"verify"は「（事実を）検証する、確認する」という意味で、記事の掲載前に情報源で裏付けを取ることを表します。"falsify"は「偽造する」で逆の意味、"justify"は「正当化する」、"clarify"は「明確にする」で文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // 057 — vocabulary: dwindle / thrive / expand / stagnate
  {
    id: 'eiken_2kyu3_057',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The town\'s population has begun to ( ) as younger residents move away in search of better job opportunities in the city.',
    choices: [
      { key: 'A', text: 'thrive' },
      { key: 'B', text: 'expand' },
      { key: 'C', text: 'dwindle' },
      { key: 'D', text: 'flourish' },
    ],
    correctKey: 'C' as const,
    explanation: '"dwindle"は「（数量が）徐々に減少する」という意味で、若者が流出して人口が減っていく状況を表すのに適切です。"thrive"と"flourish"は「繁栄する」で逆の意味、"expand"は「拡大する」で文脈に合いません。',
    difficulty: 'advanced' as const,
  },

  // 058 — vocabulary: notorious / renowned / obscure / anonymous
  {
    id: 'eiken_2kyu3_058',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The intersection has become ( ) among local drivers for its frequent accidents and confusing signals.',
    choices: [
      { key: 'A', text: 'renowned' },
      { key: 'B', text: 'obscure' },
      { key: 'C', text: 'anonymous' },
      { key: 'D', text: 'notorious' },
    ],
    correctKey: 'D' as const,
    explanation: '"notorious"は「（悪い意味で）悪名高い」という意味で、事故が多いことで知られる交差点を形容するのに最適です。"renowned"は「（良い意味で）著名な」で意味が逆、"obscure"は「無名の」、"anonymous"は「匿名の」で文脈に合いません。',
    difficulty: 'advanced' as const,
  },

  // 059 — vocabulary: comprehensive / partial / superficial / fragmentary
  {
    id: 'eiken_2kyu3_059',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The consultant conducted a ( ) review of the company\'s operations, examining everything from staffing to supply chain logistics.',
    choices: [
      { key: 'A', text: 'partial' },
      { key: 'B', text: 'fragmentary' },
      { key: 'C', text: 'comprehensive' },
      { key: 'D', text: 'superficial' },
    ],
    correctKey: 'C' as const,
    explanation: '"comprehensive"は「包括的な、あらゆる面を網羅した」という意味で、人員配置からサプライチェーンまで幅広く調べたという文脈に最適です。"partial"は「部分的な」、"fragmentary"は「断片的な」、"superficial"は「表面的な」で、いずれも網羅性とは逆の意味を持ちます。',
    difficulty: 'standard' as const,
  },

  // 060 — vocabulary: coincide / conflict / correspond / collide
  {
    id: 'eiken_2kyu3_060',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Unfortunately, the date of the conference happened to ( ) with a national holiday, which reduced attendance significantly.',
    choices: [
      { key: 'A', text: 'correspond' },
      { key: 'B', text: 'conflict' },
      { key: 'C', text: 'collide' },
      { key: 'D', text: 'coincide' },
    ],
    correctKey: 'D' as const,
    explanation: '"coincide with"は「（日時などが）〜と重なる、一致する」という意味です。会議の日程が祝日と重なってしまったという文脈に最適です。"correspond"は「対応する、一致する」（内容の一致に使うことが多い）、"conflict"は「対立する」、"collide"は「衝突する」（物理的な意味が強い）で不適切です。',
    difficulty: 'advanced' as const,
  },

  // 061 — vocabulary: indispensable / redundant / trivial / optional
  {
    id: 'eiken_2kyu3_061',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Access to clean drinking water is ( ) for public health, yet millions of people around the world still lack it.',
    choices: [
      { key: 'A', text: 'redundant' },
      { key: 'B', text: 'optional' },
      { key: 'C', text: 'trivial' },
      { key: 'D', text: 'indispensable' },
    ],
    correctKey: 'D' as const,
    explanation: '"indispensable"は「不可欠な、なくてはならない」という意味で、公衆衛生にとって極めて重要な要素を表すのに最適です。"redundant"は「余分な」、"optional"は「任意の」、"trivial"は「些細な」でいずれも逆の意味合いを持ちます。',
    difficulty: 'standard' as const,
  },

  // 062 — vocabulary: exacerbate / alleviate / eradicate / accommodate
  {
    id: 'eiken_2kyu3_062',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Cutting funding for public transportation would likely ( ) traffic congestion in the city rather than reduce it.',
    choices: [
      { key: 'A', text: 'alleviate' },
      { key: 'B', text: 'eradicate' },
      { key: 'C', text: 'exacerbate' },
      { key: 'D', text: 'accommodate' },
    ],
    correctKey: 'C' as const,
    explanation: '"exacerbate"は「（問題を）悪化させる」という意味で、公共交通への予算削減が渋滞を悪化させるという文脈に合います。"alleviate"は「緩和する」で逆の意味、"eradicate"は「根絶する」、"accommodate"は「収容する、対応する」で文脈に合いません。',
    difficulty: 'advanced' as const,
  },

  // 063 — vocabulary: withstand / succumb / surrender / retreat
  {
    id: 'eiken_2kyu3_063',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The ancient fortress was built to ( ) even the most prolonged sieges, with walls several meters thick.',
    choices: [
      { key: 'A', text: 'succumb to' },
      { key: 'B', text: 'surrender to' },
      { key: 'C', text: 'retreat from' },
      { key: 'D', text: 'withstand' },
    ],
    correctKey: 'D' as const,
    explanation: '"withstand"は「（攻撃・圧力に）耐える」という意味で、厚い壁を持つ要塞が包囲に耐えられるよう設計されたという文脈に最適です。"succumb to"は「屈する」、"surrender to"は「降伏する」、"retreat from"は「撤退する」でいずれも意味が逆です。',
    difficulty: 'advanced' as const,
  },

  // 064 — vocabulary: intricate / simplistic / straightforward / crude
  {
    id: 'eiken_2kyu3_064',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The watchmaker spent months assembling the ( ) mechanism, which contained hundreds of tiny interlocking parts.',
    choices: [
      { key: 'A', text: 'intricate' },
      { key: 'B', text: 'simplistic' },
      { key: 'C', text: 'straightforward' },
      { key: 'D', text: 'crude' },
    ],
    correctKey: 'A' as const,
    explanation: '"intricate"は「複雑に入り組んだ、精巧な」という意味で、何百もの小さな部品が組み合わさった機構を形容するのに最適です。"simplistic"は「単純化しすぎた」、"straightforward"は「単純明快な」、"crude"は「粗雑な」でいずれも文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // 065 — vocabulary: unanimous / divided / ambivalent / indifferent
  {
    id: 'eiken_2kyu3_065',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The jury reached a ( ) verdict after only two hours of deliberation, with all twelve members in complete agreement.',
    choices: [
      { key: 'A', text: 'divided' },
      { key: 'B', text: 'ambivalent' },
      { key: 'C', text: 'unanimous' },
      { key: 'D', text: 'indifferent' },
    ],
    correctKey: 'C' as const,
    explanation: '"unanimous"は「全員一致の」という意味で、12人全員が同じ結論に達したという文脈に最適です。"divided"は「意見が分かれた」で逆の意味、"ambivalent"は「相反する感情を持つ」、"indifferent"は「無関心な」で文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // 066 — vocabulary: dispel / instill / provoke / suppress
  {
    id: 'eiken_2kyu3_066',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'The company held a press conference to ( ) rumors that it was planning to lay off a large portion of its workforce.',
    choices: [
      { key: 'A', text: 'instill' },
      { key: 'B', text: 'provoke' },
      { key: 'C', text: 'dispel' },
      { key: 'D', text: 'suppress' },
    ],
    correctKey: 'C' as const,
    explanation: '"dispel rumors"は「うわさを打ち消す、晴らす」という意味の定型表現です。記者会見を開いて誤解を解消しようとした文脈に最適です。"instill"は「（考えなどを）徐々に植え付ける」、"provoke"は「挑発する」、"suppress"は「抑圧する」でいずれも文脈に合いません。',
    difficulty: 'advanced' as const,
  },

  // 067 — vocabulary: feasible / hypothetical / theoretical / fictional
  {
    id: 'eiken_2kyu3_067',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Engineers concluded that building a tunnel beneath the strait was technically ( ), though it would require enormous funding.',
    choices: [
      { key: 'A', text: 'hypothetical' },
      { key: 'B', text: 'theoretical' },
      { key: 'C', text: 'fictional' },
      { key: 'D', text: 'feasible' },
    ],
    correctKey: 'D' as const,
    explanation: '"feasible"は「実行可能な」という意味で、技術的に実現できると結論づけた文脈に最適です。"hypothetical"は「仮説的な」、"theoretical"は「理論上の」、"fictional"は「架空の」でいずれも「実際に実行できる」という意味を持ちません。',
    difficulty: 'standard' as const,
  },

  // 068 — vocabulary: unwarranted / justified / deliberate / accidental
  {
    id: 'eiken_2kyu3_068',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Critics called the company\'s price increase entirely ( ), noting that production costs had actually fallen over the past year.',
    choices: [
      { key: 'A', text: 'justified' },
      { key: 'B', text: 'deliberate' },
      { key: 'C', text: 'unwarranted' },
      { key: 'D', text: 'accidental' },
    ],
    correctKey: 'C' as const,
    explanation: '"unwarranted"は「正当な理由のない、不当な」という意味で、生産コストが下がったのに値上げしたことへの批判に最適です。"justified"は「正当化された」で逆の意味、"deliberate"は「意図的な」、"accidental"は「偶発的な」で文脈に合いません。',
    difficulty: 'advanced' as const,
  },

  // 069 — vocabulary: unravel / assemble / construct / consolidate
  {
    id: 'eiken_2kyu3_069',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Investigators slowly began to ( ) the complex web of financial transactions used to hide the missing funds.',
    choices: [
      { key: 'A', text: 'assemble' },
      { key: 'B', text: 'construct' },
      { key: 'C', text: 'consolidate' },
      { key: 'D', text: 'unravel' },
    ],
    correctKey: 'D' as const,
    explanation: '"unravel"は「（複雑な事情や謎を）解きほぐす、解明する」という意味で、複雑な金融取引の網を捜査官が解明していく文脈に最適です。"assemble"は「組み立てる」、"construct"は「構築する」、"consolidate"は「統合する」でいずれも「解明する」とは逆の方向性を持ちます。',
    difficulty: 'advanced' as const,
  },

  // 070 — vocabulary: transparent / opaque / ambiguous / covert
  {
    id: 'eiken_2kyu3_070',
    level: '2kyu' as const,
    category: 'vocabulary' as const,
    question: 'Voters demanded a more ( ) process for campaign financing, one in which every donation could be publicly traced.',
    choices: [
      { key: 'A', text: 'opaque' },
      { key: 'B', text: 'covert' },
      { key: 'C', text: 'transparent' },
      { key: 'D', text: 'ambiguous' },
    ],
    correctKey: 'C' as const,
    explanation: '"transparent"は「透明性のある、公開された」という意味で、寄付を公に追跡できる仕組みを求める文脈に最適です。"opaque"は「不透明な」で逆の意味、"covert"は「秘密の」、"ambiguous"は「曖昧な」で文脈に合いません。',
    difficulty: 'standard' as const,
  },

  // ===== GRAMMAR (071-085) =====

  // 071 — Emphatic inversion with Only when
  {
    id: 'eiken_2kyu3_071',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Only when the results were double-checked ( ) the extent of the calculation error.',
    choices: [
      { key: 'A', text: 'the scientists realized' },
      { key: 'B', text: 'did the scientists realize' },
      { key: 'C', text: 'the scientists did realize' },
      { key: 'D', text: 'realized the scientists' },
    ],
    correctKey: 'B' as const,
    explanation: '"Only when ..."が文頭に来ると主節で倒置が起こります。一般動詞realizeの倒置には助動詞didを使い、"did the scientists realize"となります。"the scientists realized"は倒置がなく、"realized the scientists"は語順が誤りです。',
    difficulty: 'advanced' as const,
  },

  // 072 — Subjunctive with "It is vital that"
  {
    id: 'eiken_2kyu3_072',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'It is vital that the emergency exits ( ) clear of obstacles at all times.',
    choices: [
      { key: 'A', text: 'remain' },
      { key: 'B', text: 'remains' },
      { key: 'C', text: 'remained' },
      { key: 'D', text: 'will remain' },
    ],
    correctKey: 'A' as const,
    explanation: '"It is vital that + 主語 + 動詞の原形"は仮定法現在の構文です。vital、essential、necessaryなどの形容詞に続くthat節では動詞は原形を使います。remainsは三単現、remainedは過去形、will remainは未来形でいずれも不適切です。',
    difficulty: 'advanced' as const,
  },

  // 073 — Participle clause (reason)
  {
    id: 'eiken_2kyu3_073',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: '( ) unfamiliar with the local customs, the new employee often felt awkward during business meetings.',
    choices: [
      { key: 'A', text: 'Being' },
      { key: 'B', text: 'To be' },
      { key: 'C', text: 'Been' },
      { key: 'D', text: 'Have been' },
    ],
    correctKey: 'A' as const,
    explanation: '現在分詞Beingで始まる分詞構文は理由を表します。"Being unfamiliar with ..." = "Because he was unfamiliar with ..."という意味になります。To be（不定詞）、Been（過去分詞単独）、Have been（時制が不完全）はこの位置の分詞構文として不適切です。',
    difficulty: 'standard' as const,
  },

  // 074 — Comparative: no sooner
  {
    id: 'eiken_2kyu3_074',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The negotiations were ( ) more difficult than either side had anticipated at the outset.',
    choices: [
      { key: 'A', text: 'much' },
      { key: 'B', text: 'very' },
      { key: 'C', text: 'so' },
      { key: 'D', text: 'too' },
    ],
    correctKey: 'A' as const,
    explanation: '比較級を強調する副詞にはmuch、far、a lotなどを使います。"much more difficult"で「はるかに困難」という意味になります。veryは原級を強調する副詞で比較級には使えません。so・tooも比較級を直接強調する形では使いません。',
    difficulty: 'standard' as const,
  },

  // 075 — Relative clause with preposition
  {
    id: 'eiken_2kyu3_075',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The hypothesis ( ) the entire experiment was based turned out to be fundamentally flawed.',
    choices: [
      { key: 'A', text: 'on which' },
      { key: 'B', text: 'which on' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'where' },
    ],
    correctKey: 'A' as const,
    explanation: '"be based on"という動詞句の前置詞onが関係代名詞の前に置かれる形が"on which"です。"the hypothesis on which the experiment was based"で「その仮説に基づいて実験が行われた」という意味になります。"which on"は語順が誤り、thatは前置詞を直前に置けず、whereは場所を表す関係副詞で不適切です。',
    difficulty: 'advanced' as const,
  },

  // 076 — Causative: get + O + to do
  {
    id: 'eiken_2kyu3_076',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The manager finally managed to get the reluctant client ( ) the revised contract.',
    choices: [
      { key: 'A', text: 'sign' },
      { key: 'B', text: 'signing' },
      { key: 'C', text: 'to sign' },
      { key: 'D', text: 'signed' },
    ],
    correctKey: 'C' as const,
    explanation: '"get + 目的語 + to不定詞"は「（人を説得して）〜させる」という意味の使役的表現です。makeやletと異なり、getは不定詞にtoが必要です。sign（原形）、signing（現在分詞）はこの構文に合わず、signed（過去分詞）は受動の意味になり不適切です。',
    difficulty: 'standard' as const,
  },

  // 077 — Conditional: unless
  {
    id: 'eiken_2kyu3_077',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Unless significant changes ( ) to the current policy, public support will likely continue to decline.',
    choices: [
      { key: 'A', text: 'will be made' },
      { key: 'B', text: 'are made' },
      { key: 'C', text: 'would be made' },
      { key: 'D', text: 'were made' },
    ],
    correctKey: 'B' as const,
    explanation: 'unless節（条件節に相当）では未来のことでも現在形を使います。"Unless significant changes are made"で「大きな変更がなされない限り」という意味です。will be made・would be made・were madeはif/unless節内で使う時制として不適切です。',
    difficulty: 'standard' as const,
  },

  // 078 — Emphatic cleft: what
  {
    id: 'eiken_2kyu3_078',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: '( ) the committee ultimately decided was to postpone the merger until further financial review could be completed.',
    choices: [
      { key: 'A', text: 'That' },
      { key: 'B', text: 'It' },
      { key: 'C', text: 'What' },
      { key: 'D', text: 'Which' },
    ],
    correctKey: 'C' as const,
    explanation: '"What + 主語 + 動詞 + is/was ..."は擬似分裂文（pseudo-cleft）で、「〜したことは…だった」と主題を強調する構文です。Whatは"the thing that"の意味で先行詞を含む関係代名詞として機能します。That・It・Whichはこの構文の主語として使えません。',
    difficulty: 'advanced' as const,
  },

  // 079 — Passive causative
  {
    id: 'eiken_2kyu3_079',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The homeowners had their roof ( ) after the storm caused significant damage last month.',
    choices: [
      { key: 'A', text: 'repair' },
      { key: 'B', text: 'repairing' },
      { key: 'C', text: 'to repair' },
      { key: 'D', text: 'repaired' },
    ],
    correctKey: 'D' as const,
    explanation: '"have + 目的語 + 過去分詞"は使役構文で「（人に頼んで）〜させる、してもらう」という意味です。屋根が修理される（受動）関係なので過去分詞repairedが正解です。repair（原形）、repairing（現在分詞）、to repair（不定詞）は能動の意味になり不適切です。',
    difficulty: 'standard' as const,
  },

  // 080 — Concession: much as
  {
    id: 'eiken_2kyu3_080',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: '( ) she admired her colleague\'s ambition, she found his constant need for recognition exhausting.',
    choices: [
      { key: 'A', text: 'Much as' },
      { key: 'B', text: 'As much' },
      { key: 'C', text: 'So much' },
      { key: 'D', text: 'Too much' },
    ],
    correctKey: 'A' as const,
    explanation: '"Much as + 主語 + 動詞"は「〜ではあるが」という譲歩を表す文語的な構文で、althoughに近い意味です。"Much as she admired ..."で「彼女は同僚の野心を称賛していたが」という意味になります。As much、So much、Too muchはこの譲歩構文としては使えません。',
    difficulty: 'advanced' as const,
  },

  // 081 — Reduced relative clause
  {
    id: 'eiken_2kyu3_081',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The documents ( ) to the committee last week are still under review.',
    choices: [
      { key: 'A', text: 'submitting' },
      { key: 'B', text: 'submit' },
      { key: 'C', text: 'submitted' },
      { key: 'D', text: 'having submitted' },
    ],
    correctKey: 'C' as const,
    explanation: '過去分詞submittedが後ろから名詞documentsを修飾する分詞句（省略された関係節）の用法です。「委員会に提出された書類」という受動の意味になるためsubmittedが正解です。submitting（能動・進行）はdocumentsが提出する側になり不自然、submit（原形）、having submitted（能動の完了）はいずれも不適切です。',
    difficulty: 'standard' as const,
  },

  // 082 — Subjunctive: suggest
  {
    id: 'eiken_2kyu3_082',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'The consultant suggested that the firm ( ) its marketing budget before launching the new campaign.',
    choices: [
      { key: 'A', text: 'reassesses' },
      { key: 'B', text: 'reassessed' },
      { key: 'C', text: 'reassess' },
      { key: 'D', text: 'will reassess' },
    ],
    correctKey: 'C' as const,
    explanation: '"suggest that + 主語 + 動詞の原形"は仮定法現在の構文です。suggest、recommend、proposeなどの提案動詞に続くthat節では動詞は原形を使います。reassesses（三単現）、reassessed（過去形）、will reassess（未来形）はいずれも不適切です。',
    difficulty: 'advanced' as const,
  },

  // 083 — Inversion: In no way
  {
    id: 'eiken_2kyu3_083',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'In no way ( ) responsible for the delay, since the shipment was held up by customs officials beyond anyone\'s control.',
    choices: [
      { key: 'A', text: 'the company was' },
      { key: 'B', text: 'was the company' },
      { key: 'C', text: 'the company did' },
      { key: 'D', text: 'did the company' },
    ],
    correctKey: 'B' as const,
    explanation: '"In no way"のような否定の意味を持つ副詞句が文頭に来ると倒置が起こります。be動詞wasの倒置は"was the company"となります。was the company respondibleという語順が正しく、did the companyはbe動詞の文には使いません。',
    difficulty: 'advanced' as const,
  },

  // 084 — Gerund vs. infinitive: regret
  {
    id: 'eiken_2kyu3_084',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'I regret ( ) you that your application has not been successful this time.',
    choices: [
      { key: 'A', text: 'informing' },
      { key: 'B', text: 'to inform' },
      { key: 'C', text: 'having informed' },
      { key: 'D', text: 'inform' },
    ],
    correctKey: 'B' as const,
    explanation: '"regret to do"は「残念ながら〜する」という意味で、これから伝える悪い知らせを述べる際に使うフォーマルな表現です。"regret doing"は「〜したことを後悔する」という過去の行為への後悔を表すため、これから知らせる場面には合いません。informing・having informed・informはこの文脈に不適切です。',
    difficulty: 'advanced' as const,
  },

  // 085 — Comparative: the least
  {
    id: 'eiken_2kyu3_085',
    level: '2kyu' as const,
    category: 'grammar' as const,
    question: 'Of all the candidates interviewed, she seemed by far ( ) qualified for the position, despite her impressive resume.',
    choices: [
      { key: 'A', text: 'the less' },
      { key: 'B', text: 'less' },
      { key: 'C', text: 'the least' },
      { key: 'D', text: 'least' },
    ],
    correctKey: 'C' as const,
    explanation: '三者以上を比較する最上級には"the + least + 形容詞"を使います。"by far the least qualified"で「（意外にも）群を抜いて最も不適格に見えた」という意味になります。the less・less・leastは比較級または冠詞の欠如により、この最上級の文脈には合いません。',
    difficulty: 'advanced' as const,
  },

  // ===== READING (086-100) =====
  // --- PASSAGE 6: Space debris — Q086-088 ---
  {
    id: 'eiken_2kyu3_086',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Since the launch of Sputnik in 1957, human activity in orbit has left behind an ever-growing cloud of debris—spent rocket stages, defunct satellites, and fragments from past collisions—now numbering in the hundreds of thousands of trackable objects. Even a paint fleck, traveling at orbital velocities of nearly 28,000 kilometers per hour, can puncture a spacecraft\'s hull. The greatest concern among scientists is a scenario known as the Kessler Syndrome, in which a single collision between two large objects generates thousands of smaller fragments, each capable of triggering further collisions in a cascading chain reaction that could eventually render certain orbital altitudes unusable for generations.\n\nSeveral companies and space agencies are now developing debris-removal technologies, including robotic arms, nets, and harpoons designed to capture defunct satellites and guide them toward controlled reentry into Earth\'s atmosphere, where they burn up. However, critics note that removal missions remain extraordinarily expensive relative to the small amount of debris each mission can address, and that international agreements governing responsibility for debris cleanup remain notably underdeveloped."\n\nWhat is the "Kessler Syndrome" as described in the passage?',
    choices: [
      { key: 'A', text: 'A medical condition affecting astronauts during long space missions.' },
      { key: 'B', text: 'A chain reaction of collisions that could make parts of orbit unusable for a long time.' },
      { key: 'C', text: 'A technology used to remove debris from Earth\'s orbit.' },
      { key: 'D', text: 'An international treaty that regulates satellite launches.' },
    ],
    correctKey: 'B' as const,
    explanation: 'パッセージでは「a single collision between two large objects generates thousands of smaller fragments... in a cascading chain reaction that could eventually render certain orbital altitudes unusable for generations」と説明されています。連鎖的な衝突により軌道が長期間使用不能になる可能性を指すBが正解です。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_087',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about space debris and answer the question.\n\n"Since the launch of Sputnik in 1957, human activity in orbit has left behind an ever-growing cloud of debris—spent rocket stages, defunct satellites, and fragments from past collisions—now numbering in the hundreds of thousands of trackable objects. Even a paint fleck, traveling at orbital velocities of nearly 28,000 kilometers per hour, can puncture a spacecraft\'s hull. The greatest concern among scientists is a scenario known as the Kessler Syndrome, in which a single collision between two large objects generates thousands of smaller fragments, each capable of triggering further collisions in a cascading chain reaction that could eventually render certain orbital altitudes unusable for generations.\n\nSeveral companies and space agencies are now developing debris-removal technologies, including robotic arms, nets, and harpoons designed to capture defunct satellites and guide them toward controlled reentry into Earth\'s atmosphere, where they burn up. However, critics note that removal missions remain extraordinarily expensive relative to the small amount of debris each mission can address, and that international agreements governing responsibility for debris cleanup remain notably underdeveloped."\n\nWhy is even a small paint fleck dangerous in orbit, according to the passage?',
    choices: [
      { key: 'A', text: 'It can block sunlight from reaching solar panels on satellites.' },
      { key: 'B', text: 'It travels at extremely high speed and can puncture a spacecraft.' },
      { key: 'C', text: 'It interferes with radio communication between satellites.' },
      { key: 'D', text: 'It gradually corrodes the metal surfaces of spacecraft over time.' },
    ],
    correctKey: 'B' as const,
    explanation: '「Even a paint fleck, traveling at orbital velocities of nearly 28,000 kilometers per hour, can puncture a spacecraft\'s hull」という記述から、極めて高速で移動するため小さな破片でも宇宙船の外殻を貫通しうることがわかります。Bが正解です。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_088',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about space debris and answer the question.\n\n"Since the launch of Sputnik in 1957, human activity in orbit has left behind an ever-growing cloud of debris—spent rocket stages, defunct satellites, and fragments from past collisions—now numbering in the hundreds of thousands of trackable objects. Even a paint fleck, traveling at orbital velocities of nearly 28,000 kilometers per hour, can puncture a spacecraft\'s hull. The greatest concern among scientists is a scenario known as the Kessler Syndrome, in which a single collision between two large objects generates thousands of smaller fragments, each capable of triggering further collisions in a cascading chain reaction that could eventually render certain orbital altitudes unusable for generations.\n\nSeveral companies and space agencies are now developing debris-removal technologies, including robotic arms, nets, and harpoons designed to capture defunct satellites and guide them toward controlled reentry into Earth\'s atmosphere, where they burn up. However, critics note that removal missions remain extraordinarily expensive relative to the small amount of debris each mission can address, and that international agreements governing responsibility for debris cleanup remain notably underdeveloped."\n\nWhat criticism do critics raise about current debris-removal efforts?',
    choices: [
      { key: 'A', text: 'The robotic arms and nets used have proven completely ineffective in tests.' },
      { key: 'B', text: 'Missions are costly relative to the small amount of debris removed, and international rules are underdeveloped.' },
      { key: 'C', text: 'Space agencies have refused to fund any debris-removal research.' },
      { key: 'D', text: 'Removing debris causes more collisions than it prevents.' },
    ],
    correctKey: 'B' as const,
    explanation: '「removal missions remain extraordinarily expensive relative to the small amount of debris each mission can address, and that international agreements governing responsibility for debris cleanup remain notably underdeveloped」という記述からBが正解とわかります。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 7: Language extinction — Q089-091 ---
  {
    id: 'eiken_2kyu3_089',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Linguists estimate that of the roughly seven thousand languages spoken in the world today, nearly half may disappear by the end of this century. Language loss tends to accelerate once a community\'s younger generation stops acquiring the language from their parents, often because a dominant national or regional language offers greater economic and social advantages. Once this intergenerational transmission breaks, a language can vanish within two or three generations, even if it was spoken by millions of people at its peak.\n\nThe loss of a language represents more than the disappearance of a communication tool; each language encodes a unique way of categorizing the natural world, unique oral histories, and forms of knowledge—particularly regarding local ecosystems, medicinal plants, and agricultural techniques—that are often not recorded elsewhere. Linguists and community members have undertaken numerous revitalization projects, including immersion schools and digital archiving, though such efforts frequently struggle against the same economic pressures that caused the decline in the first place."\n\nAccording to the passage, what typically triggers the decline of a language?',
    choices: [
      { key: 'A', text: 'A sudden natural disaster that displaces the speaking community.' },
      { key: 'B', text: 'Younger generations no longer learning the language from their parents.' },
      { key: 'C', text: 'Government laws that explicitly ban the use of minority languages.' },
      { key: 'D', text: 'A decrease in the overall population of the speaking community.' },
    ],
    correctKey: 'B' as const,
    explanation: '「Language loss tends to accelerate once a community\'s younger generation stops acquiring the language from their parents」という記述からBが正解とわかります。他の選択肢はパッセージに記載されていません。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_090',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about language extinction and answer the question.\n\n"Linguists estimate that of the roughly seven thousand languages spoken in the world today, nearly half may disappear by the end of this century. Language loss tends to accelerate once a community\'s younger generation stops acquiring the language from their parents, often because a dominant national or regional language offers greater economic and social advantages. Once this intergenerational transmission breaks, a language can vanish within two or three generations, even if it was spoken by millions of people at its peak.\n\nThe loss of a language represents more than the disappearance of a communication tool; each language encodes a unique way of categorizing the natural world, unique oral histories, and forms of knowledge—particularly regarding local ecosystems, medicinal plants, and agricultural techniques—that are often not recorded elsewhere. Linguists and community members have undertaken numerous revitalization projects, including immersion schools and digital archiving, though such efforts frequently struggle against the same economic pressures that caused the decline in the first place."\n\nWhy does the passage suggest that language loss is significant beyond communication itself?',
    choices: [
      { key: 'A', text: 'Because each language often contains unique knowledge about nature and local traditions.' },
      { key: 'B', text: 'Because languages are the only way to preserve national identity.' },
      { key: 'C', text: 'Because fewer languages make international trade more difficult.' },
      { key: 'D', text: 'Because languages are required for government recognition of ethnic groups.' },
    ],
    correctKey: 'A' as const,
    explanation: '「each language encodes a unique way of categorizing the natural world, unique oral histories, and forms of knowledge...that are often not recorded elsewhere」という記述からAが正解とわかります。',
    difficulty: 'advanced' as const,
  },
  {
    id: 'eiken_2kyu3_091',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about language extinction and answer the question.\n\n"Linguists estimate that of the roughly seven thousand languages spoken in the world today, nearly half may disappear by the end of this century. Language loss tends to accelerate once a community\'s younger generation stops acquiring the language from their parents, often because a dominant national or regional language offers greater economic and social advantages. Once this intergenerational transmission breaks, a language can vanish within two or three generations, even if it was spoken by millions of people at its peak.\n\nThe loss of a language represents more than the disappearance of a communication tool; each language encodes a unique way of categorizing the natural world, unique oral histories, and forms of knowledge—particularly regarding local ecosystems, medicinal plants, and agricultural techniques—that are often not recorded elsewhere. Linguists and community members have undertaken numerous revitalization projects, including immersion schools and digital archiving, though such efforts frequently struggle against the same economic pressures that caused the decline in the first place."\n\nWhat challenge do language revitalization projects face, according to the passage?',
    choices: [
      { key: 'A', text: 'They are banned by international law in most countries.' },
      { key: 'B', text: 'They often face the same economic pressures that caused the original decline.' },
      { key: 'C', text: 'They have proven completely successful in every documented case.' },
      { key: 'D', text: 'They require the invention of an entirely new alphabet for each language.' },
    ],
    correctKey: 'B' as const,
    explanation: '「such efforts frequently struggle against the same economic pressures that caused the decline in the first place」という記述からBが正解とわかります。',
    difficulty: 'standard' as const,
  },

  // --- PASSAGE 8: The history of the printing press — Q092-094 ---
  {
    id: 'eiken_2kyu3_092',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"When Johannes Gutenberg introduced the movable-type printing press to Europe around 1440, he unleashed a transformation whose consequences extended far beyond the mechanical reproduction of text. Before Gutenberg, books were painstakingly copied by hand, a process so slow and costly that only wealthy institutions—churches, monasteries, and royal courts—could afford substantial libraries. Within decades of the press\'s introduction, the cost of producing a book fell dramatically, and literacy rates across Europe began a steady rise that would continue for centuries.\n\nHistorians argue that the printing press did more than simply make existing knowledge more accessible; it fundamentally altered the way ideas spread and were contested. Standardized printed texts allowed scholars in different cities to reference the exact same edition of a work, enabling more rigorous debate. The press also played an instrumental role in the Protestant Reformation, as Martin Luther\'s writings could be reproduced and distributed far faster than religious authorities could suppress them—a dynamic some historians compare to the way social media has accelerated the spread of ideas in the modern era."\n\nAccording to the passage, what was the situation regarding books before Gutenberg\'s invention?',
    choices: [
      { key: 'A', text: 'Books were mass-produced but of very low quality.' },
      { key: 'B', text: 'Books were copied by hand, making them expensive and rare.' },
      { key: 'C', text: 'Books were freely available to anyone who could read.' },
      { key: 'D', text: 'Books were printed using an early, less efficient version of movable type.' },
    ],
    correctKey: 'B' as const,
    explanation: '「books were painstakingly copied by hand, a process so slow and costly that only wealthy institutions...could afford substantial libraries」という記述からBが正解とわかります。',
    difficulty: 'basic' as const,
  },
  {
    id: 'eiken_2kyu3_093',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about the printing press and answer the question.\n\n"When Johannes Gutenberg introduced the movable-type printing press to Europe around 1440, he unleashed a transformation whose consequences extended far beyond the mechanical reproduction of text. Before Gutenberg, books were painstakingly copied by hand, a process so slow and costly that only wealthy institutions—churches, monasteries, and royal courts—could afford substantial libraries. Within decades of the press\'s introduction, the cost of producing a book fell dramatically, and literacy rates across Europe began a steady rise that would continue for centuries.\n\nHistorians argue that the printing press did more than simply make existing knowledge more accessible; it fundamentally altered the way ideas spread and were contested. Standardized printed texts allowed scholars in different cities to reference the exact same edition of a work, enabling more rigorous debate. The press also played an instrumental role in the Protestant Reformation, as Martin Luther\'s writings could be reproduced and distributed far faster than religious authorities could suppress them—a dynamic some historians compare to the way social media has accelerated the spread of ideas in the modern era."\n\nHow did standardized printed texts change scholarly debate, according to the passage?',
    choices: [
      { key: 'A', text: 'They allowed scholars in different cities to refer to the identical edition of a work.' },
      { key: 'B', text: 'They eliminated the need for scholars to communicate with one another at all.' },
      { key: 'C', text: 'They made it illegal for scholars to disagree publicly about a text.' },
      { key: 'D', text: 'They reduced the overall number of books available to scholars.' },
    ],
    correctKey: 'A' as const,
    explanation: '「Standardized printed texts allowed scholars in different cities to reference the exact same edition of a work, enabling more rigorous debate」という記述からAが正解とわかります。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_094',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about the printing press and answer the question.\n\n"When Johannes Gutenberg introduced the movable-type printing press to Europe around 1440, he unleashed a transformation whose consequences extended far beyond the mechanical reproduction of text. Before Gutenberg, books were painstakingly copied by hand, a process so slow and costly that only wealthy institutions—churches, monasteries, and royal courts—could afford substantial libraries. Within decades of the press\'s introduction, the cost of producing a book fell dramatically, and literacy rates across Europe began a steady rise that would continue for centuries.\n\nHistorians argue that the printing press did more than simply make existing knowledge more accessible; it fundamentally altered the way ideas spread and were contested. Standardized printed texts allowed scholars in different cities to reference the exact same edition of a work, enabling more rigorous debate. The press also played an instrumental role in the Protestant Reformation, as Martin Luther\'s writings could be reproduced and distributed far faster than religious authorities could suppress them—a dynamic some historians compare to the way social media has accelerated the spread of ideas in the modern era."\n\nWhat comparison do some historians draw regarding the printing press?',
    choices: [
      { key: 'A', text: 'They compare it to the invention of the telephone in the nineteenth century.' },
      { key: 'B', text: 'They compare its role in spreading ideas quickly to how social media functions today.' },
      { key: 'C', text: 'They compare its cost to that of modern digital publishing.' },
      { key: 'D', text: 'They compare Gutenberg\'s achievements to those of Martin Luther as a religious leader.' },
    ],
    correctKey: 'B' as const,
    explanation: '「a dynamic some historians compare to the way social media has accelerated the spread of ideas in the modern era」という記述からBが正解とわかります。',
    difficulty: 'advanced' as const,
  },

  // --- PASSAGE 9: Circadian rhythms and shift work — Q095-097 ---
  {
    id: 'eiken_2kyu3_095',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Modern economies increasingly depend on workers—hospital staff, factory operators, transportation employees—who labor through the night to keep essential services running around the clock. Yet a growing body of research indicates that chronic night-shift work carries substantial health costs, largely because it forces the body\'s internal circadian clock into persistent conflict with its external environment. The circadian system evolved over millions of years to align hormone release, body temperature, and alertness with the natural cycle of daylight and darkness; night work requires employees to be alert precisely when their bodies are biologically primed for rest.\n\nStudies have linked long-term night-shift work to elevated rates of cardiovascular disease, metabolic disorders, and certain cancers, with the World Health Organization\'s cancer research agency classifying shift work involving circadian disruption as a probable carcinogen. Some employers have begun experimenting with scheduling strategies intended to minimize disruption, such as maintaining consistent shift patterns rather than frequently rotating employees between day and night shifts, since rotation appears to be particularly damaging to the body\'s ability to adapt."\n\nWhy does night-shift work create health risks, according to the passage?',
    choices: [
      { key: 'A', text: 'It requires employees to consume unhealthy food during breaks.' },
      { key: 'B', text: 'It forces the body\'s internal clock into conflict with the external environment.' },
      { key: 'C', text: 'It increases the amount of physical labor employees must perform.' },
      { key: 'D', text: 'It reduces the total number of hours employees are allowed to sleep.' },
    ],
    correctKey: 'B' as const,
    explanation: '「it forces the body\'s internal circadian clock into persistent conflict with its external environment」という記述からBが正解とわかります。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_096',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about circadian rhythms and shift work and answer the question.\n\n"Modern economies increasingly depend on workers—hospital staff, factory operators, transportation employees—who labor through the night to keep essential services running around the clock. Yet a growing body of research indicates that chronic night-shift work carries substantial health costs, largely because it forces the body\'s internal circadian clock into persistent conflict with its external environment. The circadian system evolved over millions of years to align hormone release, body temperature, and alertness with the natural cycle of daylight and darkness; night work requires employees to be alert precisely when their bodies are biologically primed for rest.\n\nStudies have linked long-term night-shift work to elevated rates of cardiovascular disease, metabolic disorders, and certain cancers, with the World Health Organization\'s cancer research agency classifying shift work involving circadian disruption as a probable carcinogen. Some employers have begun experimenting with scheduling strategies intended to minimize disruption, such as maintaining consistent shift patterns rather than frequently rotating employees between day and night shifts, since rotation appears to be particularly damaging to the body\'s ability to adapt."\n\nWhat scheduling strategy is mentioned as a way to reduce the negative effects of shift work?',
    choices: [
      { key: 'A', text: 'Requiring all employees to work exclusively during daytime hours.' },
      { key: 'B', text: 'Maintaining consistent shift patterns instead of frequently rotating shifts.' },
      { key: 'C', text: 'Eliminating night shifts from all essential industries entirely.' },
      { key: 'D', text: 'Increasing the total number of hours worked per shift.' },
    ],
    correctKey: 'B' as const,
    explanation: '「maintaining consistent shift patterns rather than frequently rotating employees between day and night shifts, since rotation appears to be particularly damaging」という記述からBが正解とわかります。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_097',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about circadian rhythms and shift work and answer the question.\n\n"Modern economies increasingly depend on workers—hospital staff, factory operators, transportation employees—who labor through the night to keep essential services running around the clock. Yet a growing body of research indicates that chronic night-shift work carries substantial health costs, largely because it forces the body\'s internal circadian clock into persistent conflict with its external environment. The circadian system evolved over millions of years to align hormone release, body temperature, and alertness with the natural cycle of daylight and darkness; night work requires employees to be alert precisely when their bodies are biologically primed for rest.\n\nStudies have linked long-term night-shift work to elevated rates of cardiovascular disease, metabolic disorders, and certain cancers, with the World Health Organization\'s cancer research agency classifying shift work involving circadian disruption as a probable carcinogen. Some employers have begun experimenting with scheduling strategies intended to minimize disruption, such as maintaining consistent shift patterns rather than frequently rotating employees between day and night shifts, since rotation appears to be particularly damaging to the body\'s ability to adapt."\n\nWhat health risks have been linked to long-term night-shift work, according to the passage?',
    choices: [
      { key: 'A', text: 'Cardiovascular disease, metabolic disorders, and certain cancers.' },
      { key: 'B', text: 'Only minor issues such as occasional headaches and fatigue.' },
      { key: 'C', text: 'Vision problems caused by working in poorly lit environments.' },
      { key: 'D', text: 'Hearing loss caused by loud machinery used during night shifts.' },
    ],
    correctKey: 'A' as const,
    explanation: '「Studies have linked long-term night-shift work to elevated rates of cardiovascular disease, metabolic disorders, and certain cancers」という記述からAが正解とわかります。',
    difficulty: 'basic' as const,
  },

  // --- PASSAGE 10: The rise of citizen science — Q098-100 ---
  {
    id: 'eiken_2kyu3_098',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the following passage and answer the question.\n\n"Citizen science, in which members of the public collaborate with professional researchers by collecting or analyzing data, has grown dramatically alongside the spread of smartphones and internet connectivity. Volunteers now contribute to projects ranging from cataloging bird migrations to classifying distant galaxies in astronomical images that would take professional researchers decades to review manually. Proponents argue that these projects generate valuable scientific data at a fraction of the cost of traditional research while simultaneously fostering public engagement with, and understanding of, the scientific process.\n\nSkeptics, however, raise concerns about data quality, noting that volunteers—however enthusiastic—typically lack the specialized training of professional scientists, which can introduce inconsistencies or errors into datasets. In response, many citizen science platforms have implemented safeguards, such as having multiple volunteers independently classify the same piece of data and using statistical methods to identify and flag ambiguous or contested results before they are incorporated into published research. Studies comparing citizen-generated data with data collected by trained experts have generally found accuracy levels high enough for many, though not all, scientific applications."\n\nWhat is "citizen science" as defined in the passage?',
    choices: [
      { key: 'A', text: 'A government program that funds only professional research institutions.' },
      { key: 'B', text: 'A collaboration in which members of the public help collect or analyze scientific data.' },
      { key: 'C', text: 'A university degree program focused on public policy.' },
      { key: 'D', text: 'A type of software used exclusively by professional astronomers.' },
    ],
    correctKey: 'B' as const,
    explanation: 'パッセージ冒頭で「members of the public collaborate with professional researchers by collecting or analyzing data」と定義されています。Bが正解です。',
    difficulty: 'basic' as const,
  },
  {
    id: 'eiken_2kyu3_099',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about citizen science and answer the question.\n\n"Citizen science, in which members of the public collaborate with professional researchers by collecting or analyzing data, has grown dramatically alongside the spread of smartphones and internet connectivity. Volunteers now contribute to projects ranging from cataloging bird migrations to classifying distant galaxies in astronomical images that would take professional researchers decades to review manually. Proponents argue that these projects generate valuable scientific data at a fraction of the cost of traditional research while simultaneously fostering public engagement with, and understanding of, the scientific process.\n\nSkeptics, however, raise concerns about data quality, noting that volunteers—however enthusiastic—typically lack the specialized training of professional scientists, which can introduce inconsistencies or errors into datasets. In response, many citizen science platforms have implemented safeguards, such as having multiple volunteers independently classify the same piece of data and using statistical methods to identify and flag ambiguous or contested results before they are incorporated into published research. Studies comparing citizen-generated data with data collected by trained experts have generally found accuracy levels high enough for many, though not all, scientific applications."\n\nWhat concern do skeptics of citizen science raise?',
    choices: [
      { key: 'A', text: 'Volunteers often refuse to participate in scientific projects.' },
      { key: 'B', text: 'The lack of specialized training among volunteers can introduce errors into data.' },
      { key: 'C', text: 'Citizen science projects are far more expensive than traditional research.' },
      { key: 'D', text: 'Government agencies have banned the use of citizen-collected data.' },
    ],
    correctKey: 'B' as const,
    explanation: '「volunteers...typically lack the specialized training of professional scientists, which can introduce inconsistencies or errors into datasets」という記述からBが正解とわかります。',
    difficulty: 'standard' as const,
  },
  {
    id: 'eiken_2kyu3_100',
    level: '2kyu' as const,
    category: 'reading' as const,
    question: 'Read the same passage about citizen science and answer the question.\n\n"Citizen science, in which members of the public collaborate with professional researchers by collecting or analyzing data, has grown dramatically alongside the spread of smartphones and internet connectivity. Volunteers now contribute to projects ranging from cataloging bird migrations to classifying distant galaxies in astronomical images that would take professional researchers decades to review manually. Proponents argue that these projects generate valuable scientific data at a fraction of the cost of traditional research while simultaneously fostering public engagement with, and understanding of, the scientific process.\n\nSkeptics, however, raise concerns about data quality, noting that volunteers—however enthusiastic—typically lack the specialized training of professional scientists, which can introduce inconsistencies or errors into datasets. In response, many citizen science platforms have implemented safeguards, such as having multiple volunteers independently classify the same piece of data and using statistical methods to identify and flag ambiguous or contested results before they are incorporated into published research. Studies comparing citizen-generated data with data collected by trained experts have generally found accuracy levels high enough for many, though not all, scientific applications."\n\nHow have citizen science platforms addressed concerns about data quality?',
    choices: [
      { key: 'A', text: 'By banning volunteers who make even a single mistake.' },
      { key: 'B', text: 'By having multiple volunteers independently classify the same data and flagging uncertain results.' },
      { key: 'C', text: 'By requiring all volunteers to obtain a university degree in science.' },
      { key: 'D', text: 'By eliminating human involvement entirely and using only automated systems.' },
    ],
    correctKey: 'B' as const,
    explanation: '「having multiple volunteers independently classify the same piece of data and using statistical methods to identify and flag ambiguous or contested results」という記述からBが正解とわかります。',
    difficulty: 'advanced' as const,
  },
];
