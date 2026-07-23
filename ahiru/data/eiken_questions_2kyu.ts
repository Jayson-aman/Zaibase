import type { EikenQuestion } from './eiken_questions';

export const eikenQuestions2kyu: EikenQuestion[] = [
  // ── VOCABULARY 1–20 ──────────────────────────────────────────────
  {
    id: 'eiken_2kyu_001',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The committee decided to ( ) the decision until more data was available, hoping for a clearer picture before committing to any course of action.',
    choices: [
      { key: 'A', text: 'suspend' },
      { key: 'B', text: 'delay' },
      { key: 'C', text: 'postpone' },
      { key: 'D', text: 'defer' },
    ],
    correctKey: 'D',
    explanation:
      '"defer a decision" は「より信頼できる情報や権威が整うまで先送りにする」というニュアンスで、データを待つ文脈に最も適切。delay・postpone も「遅らせる」意味だが defer ほど「判断を委ねる」含意がない。suspend は「活動・特権などを一時停止する」場合に使い、通常 decision には使わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_002',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'His remarks were so ( ) that different members of the audience interpreted them in completely opposite ways.',
    choices: [
      { key: 'A', text: 'vague' },
      { key: 'B', text: 'ambivalent' },
      { key: 'C', text: 'obscure' },
      { key: 'D', text: 'ambiguous' },
    ],
    correctKey: 'D',
    explanation:
      'ambiguous は「（発言・意味が）複数の解釈を許す、曖昧な」で、異なる人が反対の解釈をしたという文脈に最適。ambivalent は「心情が両面にある、矛盾した気持ちを持つ」で主に感情に使う。obscure は「（知識・作品が）無名・難解な」、vague は「漠然とした」で曖昧さは表すが「複数の解釈」のニュアンスは薄い。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_003',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new medication proved ( ) in clinical trials, reducing symptoms in over 90 percent of participants.',
    choices: [
      { key: 'A', text: 'capable' },
      { key: 'B', text: 'potent' },
      { key: 'C', text: 'efficient' },
      { key: 'D', text: 'effective' },
    ],
    correctKey: 'D',
    explanation:
      '"effective" は「（薬・方法が）意図した効果を上げる」意。症状軽減という結果を強調する文脈に最適。potent は「（薬・物質が）強力な作用を持つ」で効能の強さに焦点があり、症状軽減率には直接つながりにくい。efficient は「効率的な」でプロセスに着目。capable は人や機械の「能力がある」に使う。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_004',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Rising sea levels ( ) a serious threat to coastal communities around the world, potentially displacing millions of people.',
    choices: [
      { key: 'A', text: 'raise' },
      { key: 'B', text: 'present' },
      { key: 'C', text: 'pose' },
      { key: 'D', text: 'provide' },
    ],
    correctKey: 'C',
    explanation:
      '"pose a threat" は英語の固定コロケーションで「脅威をもたらす」の意。present a threat も文法的には成立するが、pose の方がより慣用的で自然。raise a threat という表現は一般的でなく、provide a threat は意味的に不自然。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_005',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The professor's lecture was highly ( ); she drew connections between ancient philosophy and contemporary neuroscience that no one had considered before.",
    choices: [
      { key: 'A', text: 'innovative' },
      { key: 'B', text: 'provocative' },
      { key: 'C', text: 'stimulating' },
      { key: 'D', text: 'enlightening' },
    ],
    correctKey: 'D',
    explanation:
      '"enlightening" は「新たな知識や視点をもたらす」意で、誰も考えなかった視点を示した講義の説明として最適。stimulating は「知的好奇心を刺激する」、innovative は「革新的な」でどちらも惜しいが、enlightening は「無知から理解へ導く」ニュアンスがある。provocative は「物議を醸す、挑発的な」で否定的含意もある。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_006',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The charity relies ( ) on donations from the public, as it receives no government funding whatsoever.',
    choices: [
      { key: 'A', text: 'entirely' },
      { key: 'B', text: 'largely' },
      { key: 'C', text: 'heavily' },
      { key: 'D', text: 'solely' },
    ],
    correctKey: 'D',
    explanation:
      '"relies solely on" は「ただ一つの源だけに頼る」という排他的な依存を表し、"no government funding whatsoever" という後半と論理的に一致する。entirely や wholly も類似するが、"relies entirely on" は稀な表現。largely・heavily は部分的依存を示し "no government funding" と矛盾する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_007',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The mayor's proposal to build a new stadium was met with ( ) from local residents, who argued that schools and hospitals were more urgently needed.",
    choices: [
      { key: 'A', text: 'criticism' },
      { key: 'B', text: 'opposition' },
      { key: 'C', text: 'resistance' },
      { key: 'D', text: 'objection' },
    ],
    correctKey: 'D',
    explanation:
      '"met with objection" は「異議・反対意見を受ける」という慣用表現。"raise an objection" とも言う。opposition は「反対勢力・組織的抵抗」、resistance は「物理的・継続的な抵抗」、criticism は「批判」でいずれも正しくはあるが、"met with" というコロケーションでは objection が最も自然。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_008',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'After years of ( ) research, the team finally published their findings on the genetic causes of the rare disorder.',
    choices: [
      { key: 'A', text: 'rigorous' },
      { key: 'B', text: 'thorough' },
      { key: 'C', text: 'meticulous' },
      { key: 'D', text: 'relentless' },
    ],
    correctKey: 'D',
    explanation:
      '"relentless research" は「何年もやめることなく続けた研究」という粘り強さを表し、"years of" という時間的長さと最もよく対応する。meticulous は「細部に注意を払った」、rigorous は「厳密な手順に従った」、thorough は「徹底的な」でいずれも研究の質には合うが、長年継続したという粘り強さを最も強く表すのは relentless。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_009',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The documentary ( ) the devastating impact of plastic pollution on marine wildlife, prompting many viewers to change their daily habits.',
    choices: [
      { key: 'A', text: 'depicted' },
      { key: 'B', text: 'portrayed' },
      { key: 'C', text: 'illustrated' },
      { key: 'D', text: 'exposed' },
    ],
    correctKey: 'D',
    explanation:
      '"exposed" は「（隠れていた問題を）明らかにする・暴く」で、視聴者の行動変容を促したという結果と自然につながる。depicted・portrayed は「描写した」、illustrated は「例示・図示した」でいずれも中立的な描写。exposed には「社会的問題を告発する」強い含意がある。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_010',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The two countries signed a trade agreement designed to ( ) tariffs on agricultural products over the next five years.',
    choices: [
      { key: 'A', text: 'abolish' },
      { key: 'B', text: 'reduce' },
      { key: 'C', text: 'phase out' },
      { key: 'D', text: 'eliminate' },
    ],
    correctKey: 'C',
    explanation:
      '"phase out" は「段階的に廃止する」意で、"over the next five years" という時間的段階を示す表現と最も適合する。abolish・eliminate は即時・完全な廃止を示唆し、段階的ニュアンスが薄い。reduce は「削減する」で廃止ではなく量の減少にとどまる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_011',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new traffic regulations were ( ) on all drivers regardless of the type of vehicle they operated.',
    choices: [
      { key: 'A', text: 'compelling' },
      { key: 'B', text: 'obligatory' },
      { key: 'C', text: 'mandatory' },
      { key: 'D', text: 'binding' },
    ],
    correctKey: 'D',
    explanation:
      '"binding on" は「（規則・契約が）〜に対して法的拘束力を持つ」という法律用語的な表現で、"on all drivers" との相性が最も良い。mandatory・obligatory はいずれも「義務的な」を意味するが、"mandatory/obligatory on" という構文は一般的でない。compelling は「説得力のある」という別義が主で、法的義務の文脈には不適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_012',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Scientists warn that the current rate of deforestation is ( ) the natural carbon cycle, making climate targets increasingly difficult to meet.',
    choices: [
      { key: 'A', text: 'disturbing' },
      { key: 'B', text: 'interrupting' },
      { key: 'C', text: 'disrupting' },
      { key: 'D', text: 'interfering' },
    ],
    correctKey: 'C',
    explanation:
      '"disrupting" は「（システム・プロセスを）大規模に乱す、機能不全にする」意で、炭素循環という複雑なシステムへの影響に最適。disturbing は「不安にさせる」という心理的影響が主。interrupting は「短期的・一時的な中断」。interfering は "interfering with" の形を取り他動詞として目的語を直接取れない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_013',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The architect's design was both aesthetically pleasing and highly ( ), making excellent use of space without wasting any materials.",
    choices: [
      { key: 'A', text: 'effective' },
      { key: 'B', text: 'functional' },
      { key: 'C', text: 'efficient' },
      { key: 'D', text: 'practical' },
    ],
    correctKey: 'C',
    explanation:
      '"efficient" は「投入資源（素材・スペース）に対して最大の成果を上げる」意。"without wasting any materials" という表現と正確に対応する。functional は「機能する・実用的」、practical は「現実的・実際的」でいずれも近いが、資源の無駄なし、というニュアンスは efficient が最も強く表す。effective は「効果を上げる」で、資源節約ではなく結果に焦点がある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_014',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The government's economic policy was heavily ( ) toward supporting large corporations, leaving small businesses with little assistance.",
    choices: [
      { key: 'A', text: 'inclined' },
      { key: 'B', text: 'biased' },
      { key: 'C', text: 'oriented' },
      { key: 'D', text: 'skewed' },
    ],
    correctKey: 'D',
    explanation:
      '"skewed toward" は「（分配・政策などが）特定の方向に歪んでいる」意で、不公平な偏りを示す最も強い表現。biased は近い意味だが "biased toward" より "biased against" の方が一般的。oriented は「〜向けの」で中立的な方向性のみ示す。inclined は「傾向がある」で個人の意見や感情に使うことが多い。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_015',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The athlete's recovery was ( ) by a strict rehabilitation program that combined physical therapy with nutritional support.",
    choices: [
      { key: 'A', text: 'facilitated' },
      { key: 'B', text: 'promoted' },
      { key: 'C', text: 'enhanced' },
      { key: 'D', text: 'accelerated' },
    ],
    correctKey: 'D',
    explanation:
      '"accelerated" は「（回復などの）速度を速める」で、リハビリプログラムの直接的な効果として最も明確。facilitated は「容易にする・促進する」、promoted は「推進する」、enhanced は「質を高める」でいずれも成立しうるが、回復という時間的プロセスの速度向上を表す語は accelerated。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_016',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The historian argued that the treaty, far from resolving tensions, actually ( ) them by leaving key territorial disputes unaddressed.',
    choices: [
      { key: 'A', text: 'aggravated' },
      { key: 'B', text: 'intensified' },
      { key: 'C', text: 'escalated' },
      { key: 'D', text: 'compounded' },
    ],
    correctKey: 'D',
    explanation:
      '"compounded" は「（既存の問題に）さらに問題を重ねて悪化させる」意で、「解決したはずが未解決問題を残した」という構造と最も合う。aggravated は「（状況を）悪化させた」、intensified は「強度を増した」、escalated は「（対立が）段階的に拡大した」でいずれも成立するが、問題の積み重なりを示す compound が文意に最も忠実。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_017',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'It is essential that companies ( ) their supply chains to ensure they are not sourcing materials from regions with poor environmental records.',
    choices: [
      { key: 'A', text: 'investigate' },
      { key: 'B', text: 'inspect' },
      { key: 'C', text: 'examine' },
      { key: 'D', text: 'audit' },
    ],
    correctKey: 'D',
    explanation:
      '"audit" は「（組織・プロセスを）公式・体系的に点検・評価する」意で、特にビジネス・コンプライアンス文脈でのサプライチェーン評価に使う専門的な表現。investigate は「問題があるときに調査する」、examine は「詳しく調べる」（医療や学術でも使う）、inspect は「物理的な検査」が主。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_018',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The CEO's resignation came as a complete surprise; until then, her leadership had appeared ( ) and her position secure.",
    choices: [
      { key: 'A', text: 'unwavering' },
      { key: 'B', text: 'steadfast' },
      { key: 'C', text: 'resolute' },
      { key: 'D', text: 'unshakeable' },
    ],
    correctKey: 'D',
    explanation:
      '"unshakeable" は「（地位・信念などが）揺るぎない」で、辞任直前まで地位が安泰に見えた、という文脈に最も合う形容詞。steadfast・resolute・unwavering はいずれも「意志の固い」という個人の態度を表すが、leadership（指導力・リーダーシップ）という抽象概念への修飾には unshakeable が最も自然。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_019',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The report ( ) the need for immediate investment in renewable energy, warning that delays would make the transition far more costly.',
    choices: [
      { key: 'A', text: 'stressed' },
      { key: 'B', text: 'reinforced' },
      { key: 'C', text: 'accentuated' },
      { key: 'D', text: 'underlined' },
    ],
    correctKey: 'D',
    explanation:
      '"underlined the need" は「必要性を強調した」という慣用表現。"raise an objection" とも言う。stressed も同義だが、"underlined" の方が書面・報告書の文脈で格式的。reinforced は「（既にある認識を）補強した」、accentuated は「際立たせた」でニュアンスが異なる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_020',
    level: '2kyu',
    category: 'vocabulary',
    question:
      "The country's economic growth has been ( ) by decades of political instability, keeping it among the least developed nations in the region.",
    choices: [
      { key: 'A', text: 'constrained' },
      { key: 'B', text: 'impeded' },
      { key: 'C', text: 'hampered' },
      { key: 'D', text: 'hindered' },
    ],
    correctKey: 'C',
    explanation:
      '"hampered by" は「（外的障害によって）妨げられる」の意で、長期的な政治的不安定という外的要因による成長阻害に最も適切なコロケーション。impeded・hindered もほぼ同義だが、"hampered by" は経済・努力・計画などとの相性が特に良い慣用表現。constrained は「制約される」で制度・規則的な制限に使いやすい。',
    difficulty: 'advanced',
  },

  // ── GRAMMAR 21–35 ────────────────────────────────────────────────
  {
    id: 'eiken_2kyu_021',
    level: '2kyu',
    category: 'grammar',
    question:
      'Not until the final results were announced ( ) the team realized they had won the championship.',
    choices: [
      { key: 'A', text: 'that' },
      { key: 'B', text: 'had' },
      { key: 'C', text: 'was' },
      { key: 'D', text: 'did' },
    ],
    correctKey: 'D',
    explanation:
      '"Not until ..." で始まる否定の副詞節が文頭に置かれると、主節に倒置が生じる（否定倒置）。"Not until ... did + 主語 + 動詞原形" が正しい構造。主語 the team に対して did を使い、"did the team realize" となる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_022',
    level: '2kyu',
    category: 'grammar',
    question:
      'Had the engineers identified the flaw earlier, the bridge ( ) collapsed.',
    choices: [
      { key: 'A', text: 'will not have' },
      { key: 'B', text: 'would not' },
      { key: 'C', text: 'had not' },
      { key: 'D', text: 'would not have' },
    ],
    correctKey: 'D',
    explanation:
      '"Had + 主語 + 過去分詞..." は if を省略した仮定法過去完了の条件節。過去の事実に反する仮定を表すため、帰結節は "would not have + 過去分詞" となる。"would not" は仮定法過去（現在の仮定）の帰結節形式で不適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_023',
    level: '2kyu',
    category: 'grammar',
    question:
      'The proposal requires that every participant ( ) a signed consent form before the study begins.',
    choices: [
      { key: 'A', text: 'submits' },
      { key: 'B', text: 'submitted' },
      { key: 'C', text: 'submit' },
      { key: 'D', text: 'will submit' },
    ],
    correctKey: 'C',
    explanation:
      '"require that + 主語 + 動詞" の構文では、動詞は仮定法現在（原形）を使う。"every participant submit" と三単現の -s をつけないのが正しい。これは "It is essential/necessary that ..." 構文と同様の用法で、アメリカ英語で特に一般的。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_024',
    level: '2kyu',
    category: 'grammar',
    question:
      'Only after conducting extensive surveys ( ) the researchers able to draw any firm conclusions.',
    choices: [
      { key: 'A', text: 'are' },
      { key: 'B', text: 'did' },
      { key: 'C', text: 'have' },
      { key: 'D', text: 'were' },
    ],
    correctKey: 'D',
    explanation:
      '"Only after ..." が文頭に来ると主節で倒置が起きる。主語が "the researchers"、述語が be動詞 "were able to" なので、倒置後は "were the researchers able to" となる。"did" は一般動詞の倒置に使うが、"be able to" には were を使う。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_025',
    level: '2kyu',
    category: 'grammar',
    question:
      "The museum's new exhibit, ( ) is scheduled to open next month, will feature artifacts from ancient civilizations.",
    choices: [
      { key: 'A', text: 'that' },
      { key: 'B', text: 'what' },
      { key: 'C', text: 'which' },
      { key: 'D', text: 'where' },
    ],
    correctKey: 'C',
    explanation:
      'コンマで囲まれた非制限的（非限定）関係節では which を使う。that は制限的関係節にのみ使われ、コンマとともに非制限的関係節で使うことはできない。what は「〜すること・もの」で名詞節を導く。where は場所を表す関係副詞で不適。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_026',
    level: '2kyu',
    category: 'grammar',
    question:
      'The children were made ( ) their rooms before they were allowed to go outside and play.',
    choices: [
      { key: 'A', text: 'clean' },
      { key: 'B', text: 'cleaning' },
      { key: 'C', text: 'cleaned' },
      { key: 'D', text: 'to clean' },
    ],
    correctKey: 'D',
    explanation:
      '使役動詞 make の受動態 "be made to do" では、不定詞の to が必要となる。能動態 "make + 目的語 + 動詞原形" では to を省略するが、受動態に変換すると to が復活する（"The children were made to clean ..."）。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_027',
    level: '2kyu',
    category: 'grammar',
    question:
      'It was the mayor herself ( ) announced the decision to close the factory, surprising many local residents.',
    choices: [
      { key: 'A', text: 'which' },
      { key: 'B', text: 'who' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'whom' },
    ],
    correctKey: 'C',
    explanation:
      '"It is/was ... that ..." は強調構文（cleft sentence）。強調する要素が人であっても who または that が使える。ただし herself という再帰代名詞が既に強調を担っているこの文では、強調構文の標識として that が最も自然。who も可だが、whom は目的格なので主語位置には使えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_028',
    level: '2kyu',
    category: 'grammar',
    question:
      'Rarely ( ) such a dramatic shift in public opinion occur within such a short period of time.',
    choices: [
      { key: 'A', text: 'had' },
      { key: 'B', text: 'do' },
      { key: 'C', text: 'has' },
      { key: 'D', text: 'does' },
    ],
    correctKey: 'D',
    explanation:
      '"Rarely" が文頭に置かれると主節で倒置が生じる。主語 "such a dramatic shift"（単数）＋一般動詞 occur に対して助動詞 does を使い、"Rarely does such a shift occur" となる。do は複数主語用、has は現在完了の倒置、had は過去完了の倒置で不適。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_029',
    level: '2kyu',
    category: 'grammar',
    question:
      'The policy change, ( ) many experts had predicted, led to a sharp rise in youth unemployment rates.',
    choices: [
      { key: 'A', text: 'what' },
      { key: 'B', text: 'which' },
      { key: 'C', text: 'as' },
      { key: 'D', text: 'that' },
    ],
    correctKey: 'C',
    explanation:
      '"as many experts had predicted" の as は「専門家が予測したとおり」という様態の接続詞。この as は前の文全体または節を先行詞として受ける関係詞的用法でもある。"which many experts had predicted" も文法的だが、which は先行詞として特定の名詞句（the policy change）を指す非制限的関係節になる。ここでは「予測した（こと＝その結果）」という節全体を受けるので as が適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_030',
    level: '2kyu',
    category: 'grammar',
    question:
      'The survey results indicate that the majority of consumers prefer ( ) contacted by email rather than by telephone.',
    choices: [
      { key: 'A', text: 'to be' },
      { key: 'B', text: 'to have been' },
      { key: 'C', text: 'having been' },
      { key: 'D', text: 'being' },
    ],
    correctKey: 'D',
    explanation:
      '"prefer + 動名詞" と "prefer + to不定詞" はどちらも正しいが、"prefer + being done" は「〜されることを好む」という受動態の動名詞。"prefer to be contacted" も文法的だが、prefer に続く動名詞形の受動態 "prefer being contacted" の方が実際には口語・書き言葉ともに一般的。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_031',
    level: '2kyu',
    category: 'grammar',
    question:
      'No sooner ( ) the announcement been made than protesters gathered outside the government building.',
    choices: [
      { key: 'A', text: 'did' },
      { key: 'B', text: 'was' },
      { key: 'C', text: 'has' },
      { key: 'D', text: 'had' },
    ],
    correctKey: 'D',
    explanation:
      '"No sooner ... than ..." は「〜するやいなや」を表す慣用表現で、had を使った倒置構文になる。"No sooner had + 主語 + 過去分詞 + than + 主語 + 過去形動詞" が正しい構造。過去完了の had が倒置されて文頭直後に来る。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_032',
    level: '2kyu',
    category: 'grammar',
    question:
      'The students found the examination far more ( ) than they had anticipated based on the sample questions.',
    choices: [
      { key: 'A', text: 'challenge' },
      { key: 'B', text: 'challenged' },
      { key: 'C', text: 'challenging' },
      { key: 'D', text: 'to challenge' },
    ],
    correctKey: 'C',
    explanation:
      '"find + 目的語 + 形容詞" の構文で、目的語（the examination）を説明する補語には形容詞が来る。"challenging"（困難な・やりがいのある）は形容詞として機能する。"challenged" は受動の意味（困難に直面させられた）で使われる場合があるが、試験自体を形容するには challenging が正しい。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_033',
    level: '2kyu',
    category: 'grammar',
    question:
      'Were the company ( ) declare bankruptcy, thousands of employees would lose their jobs and retirement savings.',
    choices: [
      { key: 'A', text: 'should' },
      { key: 'B', text: 'would' },
      { key: 'C', text: 'to' },
      { key: 'D', text: 'might' },
    ],
    correctKey: 'C',
    explanation:
      '"Were + 主語 + to不定詞 ..." は if を省略した仮定法の倒置形で、「もし〜するとしたら」という意味。"Were the company to declare ..." = "If the company were to declare ..." となる。特に書き言葉・フォーマルな文脈で使われる仮定法の格式表現。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_034',
    level: '2kyu',
    category: 'grammar',
    question:
      'The research paper, along with its supplementary data, ( ) to be reviewed by a panel of international experts.',
    choices: [
      { key: 'A', text: 'are' },
      { key: 'B', text: 'were' },
      { key: 'C', text: 'is' },
      { key: 'D', text: 'have' },
    ],
    correctKey: 'C',
    explanation:
      '"along with ..." は主語に付加された情報であり、主語の数には影響しない。主語は "The research paper"（単数）なので動詞は is が正しい。"along with" は "as well as" "together with" と同様に、後続の句を主語に含めない点に注意。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_035',
    level: '2kyu',
    category: 'grammar',
    question:
      'The government does ( ) take the issue of food security seriously, but its current policies are simply not sufficient to address the scale of the problem.',
    choices: [
      { key: 'A', text: 'so' },
      { key: 'B', text: 'even' },
      { key: 'C', text: 'really' },
      { key: 'D', text: 'indeed' },
    ],
    correctKey: 'D',
    explanation:
      '"does indeed + 動詞原形" は emphatic do（強調の do）を使った表現で、「確かに〜する」という肯定の強調を表す。but で逆説が続く前に主張の誠意を示す際に使う。"does so take" は文法的に不自然。really・even は副詞として機能するが、"does really/even take" という語順は emphatic do の強調構文として成立しない。',
    difficulty: 'advanced',
  },

  // ── READING 36–50 ────────────────────────────────────────────────
  // Passage 1 (Q36–38): Microplastics in drinking water
  {
    id: 'eiken_2kyu_036',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Microplastics — particles smaller than five millimeters — have been detected in virtually every environment on Earth, from the deepest ocean trenches to the peaks of remote mountain ranges. More alarmingly, recent studies have confirmed their presence in municipal tap water, bottled water, and even human blood. Although researchers have not yet established a definitive causal link between microplastic ingestion and specific health conditions in humans, animal studies suggest that chronic exposure may disrupt hormonal function and trigger inflammatory responses. One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing: a single load of laundry can release hundreds of thousands of synthetic fibers into wastewater systems. While many water treatment plants successfully filter out larger particles, a significant proportion of microplastics are too small to be captured by conventional filtration methods. Governments in several countries have begun to mandate that new washing machines be equipped with fine-mesh filters, but critics argue that the regulation falls short of addressing the problem at its source — the overproduction of single-use plastics.

According to the passage, which of the following statements about microplastics is TRUE?`,
    choices: [
      {
        key: 'A',
        text: 'Scientists have proven that microplastics directly cause hormonal diseases in humans.',
      },
      {
        key: 'B',
        text: 'Current water treatment methods are entirely unable to remove microplastics from tap water.',
      },
      {
        key: 'C',
        text: 'Synthetic textiles are one confirmed source of microplastic contamination in water supplies.',
      },
      {
        key: 'D',
        text: 'All countries now require washing machines to include fine-mesh filters by law.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing" と明記されており、合成繊維が汚染源の一つであることは事実として述べられている。Aは "not yet established a definitive causal link" とあり誤り。Bは "many plants successfully filter out larger particles" とあり全く除去できないとは書かれていない。Dは "several countries" であり全国義務化ではない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_037',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Microplastics — particles smaller than five millimeters — have been detected in virtually every environment on Earth, from the deepest ocean trenches to the peaks of remote mountain ranges. More alarmingly, recent studies have confirmed their presence in municipal tap water, bottled water, and even human blood. Although researchers have not yet established a definitive causal link between microplastic ingestion and specific health conditions in humans, animal studies suggest that chronic exposure may disrupt hormonal function and trigger inflammatory responses. One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing: a single load of laundry can release hundreds of thousands of synthetic fibers into wastewater systems. While many water treatment plants successfully filter out larger particles, a significant proportion of microplastics are too small to be captured by conventional filtration methods. Governments in several countries have begun to mandate that new washing machines be equipped with fine-mesh filters, but critics argue that the regulation falls short of addressing the problem at its source — the overproduction of single-use plastics.

In the passage, the phrase "falls short of" most closely means:`,
    choices: [
      { key: 'A', text: 'successfully prevents' },
      { key: 'B', text: 'completely ignores' },
      { key: 'C', text: 'fails to fully achieve' },
      { key: 'D', text: 'exceeds the scope of' },
    ],
    correctKey: 'C',
    explanation:
      '"falls short of" は「〜に達しない、〜を十分に果たしていない」という意味の慣用表現。批評家たちは規制が根本的な解決（過剰なプラスチック生産の抑制）に「及んでいない」と主張しているので、A「完全には達成できていない」が正しい。「完全に無視している」（B）は言い過ぎ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_038',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Microplastics — particles smaller than five millimeters — have been detected in virtually every environment on Earth, from the deepest ocean trenches to the peaks of remote mountain ranges. More alarmingly, recent studies have confirmed their presence in municipal tap water, bottled water, and even human blood. Although researchers have not yet established a definitive causal link between microplastic ingestion and specific health conditions in humans, animal studies suggest that chronic exposure may disrupt hormonal function and trigger inflammatory responses. One major source of microplastic contamination in water supplies is the degradation of synthetic textiles during washing: a single load of laundry can release hundreds of thousands of synthetic fibers into wastewater systems. While many water treatment plants successfully filter out larger particles, a significant proportion of microplastics are too small to be captured by conventional filtration methods. Governments in several countries have begun to mandate that new washing machines be equipped with fine-mesh filters, but critics argue that the regulation falls short of addressing the problem at its source — the overproduction of single-use plastics.

What is the main point the author makes about government responses to microplastic pollution?`,
    choices: [
      {
        key: 'A',
        text: 'Governments have acted decisively by completely banning single-use plastics.',
      },
      {
        key: 'B',
        text: 'Existing regulations address the symptoms rather than the underlying cause of the problem.',
      },
      {
        key: 'C',
        text: 'Water treatment technology will soon be advanced enough to eliminate microplastics entirely.',
      },
      {
        key: 'D',
        text: 'The regulation of washing machines is the most effective strategy for reducing microplastic pollution.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージの最後で批評家が「規制は洗濯機フィルターにとどまり、根本原因（使い捨てプラスチックの過剰生産）に取り組んでいない」と指摘しており、著者はこの批判的見解を肯定的に紹介している。Bが「症状への対処であり根本原因への対処でない」という内容と一致する。',
    difficulty: 'advanced',
  },

  // Passage 2 (Q39–41): Remote work and urban economics
  {
    id: 'eiken_2kyu_039',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The widespread adoption of remote work following the global pandemic has had profound and lasting effects on urban economies. As office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues that many municipalities depend upon to fund public services. At the same time, residential property prices in suburban and rural areas surged as urban residents, no longer tied to daily commutes, sought larger homes and lower costs of living. This demographic shift has placed new pressure on regions that previously lacked the infrastructure — broadband connectivity, healthcare facilities, and schools — to accommodate rapid population growth. Proponents of remote work argue that it democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs without relocating. Critics, however, contend that the benefits are unevenly distributed: those who can work remotely tend to be in higher-income, knowledge-based industries, while lower-wage service workers remain tied to physical locations and receive little benefit from the trend.

What economic consequence of remote work does the passage describe for major city centers?`,
    choices: [
      {
        key: 'A',
        text: 'Rising residential property prices have increased local tax revenues.',
      },
      {
        key: 'B',
        text: 'Higher office vacancy rates have led to reduced property tax income for cities.',
      },
      {
        key: 'C',
        text: 'Suburban infrastructure has improved significantly due to city investment.',
      },
      {
        key: 'D',
        text: 'Lower-wage service workers have relocated to rural areas for better pay.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues" と明記されており、都市部の空室率上昇→商業不動産価値下落→固定資産税収入の減少という因果関係が示されている。Bがこの内容と一致する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_040',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The widespread adoption of remote work following the global pandemic has had profound and lasting effects on urban economies. As office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues that many municipalities depend upon to fund public services. At the same time, residential property prices in suburban and rural areas surged as urban residents, no longer tied to daily commutes, sought larger homes and lower costs of living. This demographic shift has placed new pressure on regions that previously lacked the infrastructure — broadband connectivity, healthcare facilities, and schools — to accommodate rapid population growth. Proponents of remote work argue that it democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs without relocating. Critics, however, contend that the benefits are unevenly distributed: those who can work remotely tend to be in higher-income, knowledge-based industries, while lower-wage service workers remain tied to physical locations and receive little benefit from the trend.

In the passage, the word "democratizes" most nearly means:`,
    choices: [
      { key: 'A', text: 'reduces the overall number of people seeking employment' },
      { key: 'B', text: 'allows citizens to vote on important decisions' },
      { key: 'C', text: 'makes something available to a wider range of people' },
      { key: 'D', text: 'transfers power from governments to private companies' },
    ],
    correctKey: 'C',
    explanation:
      'パッセージでは "democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs" とあり、「機会を民主化する」は「高収入の仕事へのアクセスをより多くの地域の人々に開放する」という意味で使われている。「より広い範囲の人々が利用できるようにする」という言い換えがこの意味に最も近い。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_041',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The widespread adoption of remote work following the global pandemic has had profound and lasting effects on urban economies. As office vacancies climbed in major city centers, commercial real estate values fell sharply, reducing the property tax revenues that many municipalities depend upon to fund public services. At the same time, residential property prices in suburban and rural areas surged as urban residents, no longer tied to daily commutes, sought larger homes and lower costs of living. This demographic shift has placed new pressure on regions that previously lacked the infrastructure — broadband connectivity, healthcare facilities, and schools — to accommodate rapid population growth. Proponents of remote work argue that it democratizes opportunity by enabling workers in less affluent areas to access high-paying jobs without relocating. Critics, however, contend that the benefits are unevenly distributed: those who can work remotely tend to be in higher-income, knowledge-based industries, while lower-wage service workers remain tied to physical locations and receive little benefit from the trend.

Which of the following best describes the author's overall approach to the topic of remote work?`,
    choices: [
      {
        key: 'A',
        text: 'The author strongly advocates for remote work as the best solution to urban economic problems.',
      },
      {
        key: 'B',
        text: 'The author presents both potential benefits and limitations of remote work without taking a clear position.',
      },
      {
        key: 'C',
        text: 'The author argues that remote work has been entirely negative for the economy.',
      },
      {
        key: 'D',
        text: 'The author focuses primarily on the positive effects of remote work on rural communities.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージは "Proponents argue ..." と "Critics, however, contend ..." という両論を公平に提示しており、著者自身は特定の立場を明確にしていない。これは balanced/neutral な論説文の典型的なアプローチで、Bの「明確な立場を取らずに利点と限界の両方を提示している」が最も適切。',
    difficulty: 'advanced',
  },

  // Passage 3 (Q42–44): Antibiotic resistance
  {
    id: 'eiken_2kyu_042',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Antibiotic resistance has emerged as one of the most pressing public health threats of the twenty-first century. When bacteria are repeatedly exposed to antibiotics, those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection. The overuse of antibiotics in both human medicine and livestock farming has dramatically accelerated this process. In some regions, farmers administer antibiotics not only to treat disease but also as a growth promoter, a practice now banned in the European Union but still widespread elsewhere. Scientists warn that if resistance continues to spread at the current rate, routine medical procedures such as surgery and chemotherapy — which rely on effective antibiotics to prevent infection — could become life-threatening. Despite international agreements calling for reduced antibiotic use, implementation remains inconsistent, and the development of new antibiotic drugs has slowed considerably, partly because pharmaceutical companies find the research economically unattractive compared to treatments for chronic diseases.

According to the passage, what drives the spread of antibiotic resistance?`,
    choices: [
      {
        key: 'A',
        text: 'Genetic mutations in humans that are triggered by long-term antibiotic use',
      },
      {
        key: 'B',
        text: 'Natural selection favoring bacteria that can survive antibiotic treatment',
      },
      {
        key: 'C',
        text: 'The complete ban on antibiotic use in livestock farming worldwide',
      },
      {
        key: 'D',
        text: 'A deliberate reduction in antibiotic production by pharmaceutical companies',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection" と明記されており、自然選択によって耐性菌が広がることが説明されている。Aは「人間の遺伝子変異」で誤り（菌の変異）。Cは「一部の地域でのみ禁止」であり全世界的禁止は誤り。Dは「経済的に魅力がない」ためであって意図的削減ではない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_043',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Antibiotic resistance has emerged as one of the most pressing public health threats of the twenty-first century. When bacteria are repeatedly exposed to antibiotics, those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection. The overuse of antibiotics in both human medicine and livestock farming has dramatically accelerated this process. In some regions, farmers administer antibiotics not only to treat disease but also as a growth promoter, a practice now banned in the European Union but still widespread elsewhere. Scientists warn that if resistance continues to spread at the current rate, routine medical procedures such as surgery and chemotherapy — which rely on effective antibiotics to prevent infection — could become life-threatening. Despite international agreements calling for reduced antibiotic use, implementation remains inconsistent, and the development of new antibiotic drugs has slowed considerably, partly because pharmaceutical companies find the research economically unattractive compared to treatments for chronic diseases.

In the passage, what does "implementation remains inconsistent" suggest about international agreements on antibiotic use?`,
    choices: [
      {
        key: 'A',
        text: 'Countries have not agreed on a common definition of antibiotic resistance.',
      },
      {
        key: 'B',
        text: 'Countries have signed agreements but do not uniformly follow through on them.',
      },
      {
        key: 'C',
        text: 'International agreements are regularly updated to match new scientific findings.',
      },
      {
        key: 'D',
        text: 'Most nations have exceeded the targets set by international organizations.',
      },
    ],
    correctKey: 'B',
    explanation:
      '"implementation remains inconsistent" は「実施状況にばらつきがある（=一部の国は守っているが他は守っていない）」という意味。"Despite international agreements calling for reduced antibiotic use" との組み合わせから、合意はあるが国によって実施状況が異なることが読み取れる。Bが最も適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_044',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Antibiotic resistance has emerged as one of the most pressing public health threats of the twenty-first century. When bacteria are repeatedly exposed to antibiotics, those that carry genetic mutations allowing them to survive the drug gradually outcompete non-resistant strains, a process driven by natural selection. The overuse of antibiotics in both human medicine and livestock farming has dramatically accelerated this process. In some regions, farmers administer antibiotics not only to treat disease but also as a growth promoter, a practice now banned in the European Union but still widespread elsewhere. Scientists warn that if resistance continues to spread at the current rate, routine medical procedures such as surgery and chemotherapy — which rely on effective antibiotics to prevent infection — could become life-threatening. Despite international agreements calling for reduced antibiotic use, implementation remains inconsistent, and the development of new antibiotic drugs has slowed considerably, partly because pharmaceutical companies find the research economically unattractive compared to treatments for chronic diseases.

Which of the following conclusions can be most reasonably drawn from the passage?`,
    choices: [
      {
        key: 'A',
        text: 'Pharmaceutical companies are primarily responsible for the global rise in antibiotic resistance.',
      },
      {
        key: 'B',
        text: 'Antibiotic resistance is likely to worsen unless both policy and industry approaches change.',
      },
      {
        key: 'C',
        text: 'Livestock farming contributes more to antibiotic resistance than human medicine does.',
      },
      {
        key: 'D',
        text: "The European Union's ban on antibiotic use in farming has resolved the resistance problem in that region.",
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージ全体を通じて、抗生物質の過剰使用・国際合意の不徹底・新薬開発の停滞という複数の問題が示されており、解決には政策面と産業面の両方での変化が必要だと示唆している。Aは「主な責任が製薬会社にある」という誇張。Cは比較論だがパッセージは明示していない。DはEUの禁止が解決策として機能したとは書かれていない。',
    difficulty: 'advanced',
  },

  // Passage 4 (Q45–47): Sleep science
  {
    id: 'eiken_2kyu_045',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Sleep, once dismissed by many as mere biological downtime, is now understood to be a period of intense neurological activity essential for physical and cognitive health. During deep sleep, the brain's glymphatic system — a network of channels surrounding blood vessels — becomes highly active, flushing out metabolic waste products including beta-amyloid, a protein associated with Alzheimer's disease. Simultaneously, the hippocampus, the brain region central to memory formation, replays and consolidates experiences from the day, transferring information to long-term storage in the cortex. Chronic sleep deprivation, defined as consistently obtaining fewer than six hours per night, has been linked to a significantly elevated risk of cardiovascular disease, type 2 diabetes, and impaired immune function. Despite this evidence, surveys consistently show that a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours. Researchers point to artificial light exposure from screens as a major disruptor of the body's circadian rhythm, suppressing melatonin production and delaying the onset of sleep.

What function of the glymphatic system is described in the passage?`,
    choices: [
      {
        key: 'A',
        text: 'It consolidates daily memories and transfers them to long-term storage.',
      },
      {
        key: 'B',
        text: 'It reduces the risk of cardiovascular disease by regulating blood pressure.',
      },
      {
        key: 'C',
        text: 'It removes harmful waste products from the brain during deep sleep.',
      },
      {
        key: 'D',
        text: 'It regulates melatonin production to control the sleep-wake cycle.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "the brain\'s glymphatic system becomes highly active, flushing out metabolic waste products including beta-amyloid" と明記されており、深い睡眠中に老廃物を排出する機能が説明されている。Aはhippocampusの機能、Dはメラトニンに関する記述で別のシステム。Bはパッセージに記載されていない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_046',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Sleep, once dismissed by many as mere biological downtime, is now understood to be a period of intense neurological activity essential for physical and cognitive health. During deep sleep, the brain's glymphatic system — a network of channels surrounding blood vessels — becomes highly active, flushing out metabolic waste products including beta-amyloid, a protein associated with Alzheimer's disease. Simultaneously, the hippocampus, the brain region central to memory formation, replays and consolidates experiences from the day, transferring information to long-term storage in the cortex. Chronic sleep deprivation, defined as consistently obtaining fewer than six hours per night, has been linked to a significantly elevated risk of cardiovascular disease, type 2 diabetes, and impaired immune function. Despite this evidence, surveys consistently show that a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours. Researchers point to artificial light exposure from screens as a major disruptor of the body's circadian rhythm, suppressing melatonin production and delaying the onset of sleep.

In the passage, "circadian rhythm" refers to:`,
    choices: [
      { key: 'A', text: "the brain's process of consolidating memories overnight" },
      {
        key: 'B',
        text: "the body's natural internal clock regulating sleep and wakefulness",
      },
      { key: 'C', text: 'the pattern of melatonin release caused by screen exposure' },
      { key: 'D', text: 'the cycle of deep sleep and light sleep within a single night' },
    ],
    correctKey: 'B',
    explanation:
      '"circadian rhythm" は「概日リズム（約24時間周期の体内時計）」で、睡眠と覚醒のサイクルを調節する生体メカニズム。パッセージでは人工光がこのリズムを乱すと述べており、Bの「睡眠と覚醒を調節する体内時計」が最も正確。Dは睡眠サイクル内の段階を指し、circadian rhythmとは異なる概念。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_047',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Sleep, once dismissed by many as mere biological downtime, is now understood to be a period of intense neurological activity essential for physical and cognitive health. During deep sleep, the brain's glymphatic system — a network of channels surrounding blood vessels — becomes highly active, flushing out metabolic waste products including beta-amyloid, a protein associated with Alzheimer's disease. Simultaneously, the hippocampus, the brain region central to memory formation, replays and consolidates experiences from the day, transferring information to long-term storage in the cortex. Chronic sleep deprivation, defined as consistently obtaining fewer than six hours per night, has been linked to a significantly elevated risk of cardiovascular disease, type 2 diabetes, and impaired immune function. Despite this evidence, surveys consistently show that a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours. Researchers point to artificial light exposure from screens as a major disruptor of the body's circadian rhythm, suppressing melatonin production and delaying the onset of sleep.

What can be inferred from the passage about sleep habits in industrialized countries?`,
    choices: [
      {
        key: 'A',
        text: 'Most adults are aware of sleep guidelines and choose to ignore them.',
      },
      {
        key: 'B',
        text: 'Screen use is the only factor preventing adults from getting adequate sleep.',
      },
      {
        key: 'C',
        text: 'Many adults sleep less than the amount recommended for good health.',
      },
      {
        key: 'D',
        text: 'Sleep deprivation is more severe in industrialized nations than in developing countries.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "a large proportion of adults in industrialized nations fail to achieve the recommended seven to nine hours" と明記されており、推奨睡眠時間を下回る成人が多いことが述べられている。Cがこれに対応する。Aは「意識的に無視している」とは書かれていない。Bはスクリーン以外の要因が排除されておらず誇張。Dは途上国との比較はパッセージにない。',
    difficulty: 'standard',
  },

  // Passage 5 (Q48–50): Gig economy and labor rights
  {
    id: 'eiken_2kyu_048',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of the gig economy — in which workers are hired on a short-term, task-by-task basis through digital platforms — has fundamentally altered traditional employment relationships. Companies such as food delivery services and ride-hailing platforms typically classify their workers as independent contractors rather than employees, a distinction that has significant legal and financial consequences. Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes. Proponents of the gig model argue that it offers workers flexibility and autonomy that traditional employment cannot match, allowing individuals to set their own hours and work for multiple platforms simultaneously. Opponents counter that this flexibility is largely illusory: platform algorithms closely monitor worker performance and can deactivate accounts — effectively terminating employment — without any of the procedural safeguards that apply in conventional workplaces. Several jurisdictions have moved to reclassify gig workers as employees, but these efforts have faced intense legal challenges from platform companies, which argue that mandatory reclassification would undermine the business model that makes affordable services possible.

According to the passage, why do gig economy companies prefer to classify workers as independent contractors?`,
    choices: [
      {
        key: 'A',
        text: 'Governments require digital platforms to use this classification for legal reasons.',
      },
      {
        key: 'B',
        text: 'The classification relieves companies of obligations such as minimum wage and pension contributions.',
      },
      {
        key: 'C',
        text: 'Independent contractors are required to pay higher taxes, which benefits the companies.',
      },
      {
        key: 'D',
        text: 'It allows workers to receive better pay than they would as full employees.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes" とあり、この分類によって企業が最低賃金保護・有給休暇・年金拠出などの義務を免れることが示されている。Bがこれに対応する。他の選択肢はパッセージに根拠がない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_049',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of the gig economy — in which workers are hired on a short-term, task-by-task basis through digital platforms — has fundamentally altered traditional employment relationships. Companies such as food delivery services and ride-hailing platforms typically classify their workers as independent contractors rather than employees, a distinction that has significant legal and financial consequences. Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes. Proponents of the gig model argue that it offers workers flexibility and autonomy that traditional employment cannot match, allowing individuals to set their own hours and work for multiple platforms simultaneously. Opponents counter that this flexibility is largely illusory: platform algorithms closely monitor worker performance and can deactivate accounts — effectively terminating employment — without any of the procedural safeguards that apply in conventional workplaces. Several jurisdictions have moved to reclassify gig workers as employees, but these efforts have faced intense legal challenges from platform companies, which argue that mandatory reclassification would undermine the business model that makes affordable services possible.

In the passage, the word "illusory" most nearly means:`,
    choices: [
      { key: 'A', text: 'desirable but difficult to achieve' },
      { key: 'B', text: 'not as real or genuine as it appears' },
      { key: 'C', text: 'causing confusion or misunderstanding' },
      { key: 'D', text: 'legally prohibited under current regulations' },
    ],
    correctKey: 'B',
    explanation:
      '"illusory" は「幻想的な・見かけ上のものに過ぎない」という意味。パッセージでは「柔軟性は表面上のものに過ぎず、アルゴリズムによる監視とアカウント停止という現実がある」という文脈で使われており、Bの「見かけほど実質的・真実ではない」が最も正確。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_050',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of the gig economy — in which workers are hired on a short-term, task-by-task basis through digital platforms — has fundamentally altered traditional employment relationships. Companies such as food delivery services and ride-hailing platforms typically classify their workers as independent contractors rather than employees, a distinction that has significant legal and financial consequences. Independent contractors are generally not entitled to minimum wage protections, paid leave, or employer contributions to pension schemes. Proponents of the gig model argue that it offers workers flexibility and autonomy that traditional employment cannot match, allowing individuals to set their own hours and work for multiple platforms simultaneously. Opponents counter that this flexibility is largely illusory: platform algorithms closely monitor worker performance and can deactivate accounts — effectively terminating employment — without any of the procedural safeguards that apply in conventional workplaces. Several jurisdictions have moved to reclassify gig workers as employees, but these efforts have faced intense legal challenges from platform companies, which argue that mandatory reclassification would undermine the business model that makes affordable services possible.

What argument do platform companies make against mandatory reclassification of gig workers as employees?`,
    choices: [
      {
        key: 'A',
        text: 'They claim that most gig workers prefer to remain independent contractors.',
      },
      {
        key: 'B',
        text: 'They insist that current labor laws already provide sufficient protection for gig workers.',
      },
      {
        key: 'C',
        text: 'They suggest that reclassification would eliminate the need for digital platforms entirely.',
      },
      {
        key: 'D',
        text: 'They argue that reclassification would make their services too expensive to be viable.',
      },
    ],
    correctKey: 'D',
    explanation:
      'パッセージに "mandatory reclassification would undermine the business model that makes affordable services possible" とあり、再分類によってサービスの低価格維持が困難になるというのが企業側の主張。Dの「サービスが高コストになりすぎて成立しなくなる」がこれに最も対応する。Aはパッセージで言及されていない。',
    difficulty: 'advanced',
  },
  // ── VOCABULARY 51–70 ─────────────────────────────────────────────
  {
    id: 'eiken_2kyu_051',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The lawyer presented ( ) evidence that left the jury with little doubt about the defendant\'s guilt.',
    choices: [
      { key: 'A', text: 'compelling' },
      { key: 'B', text: 'convenient' },
      { key: 'C', text: 'considerate' },
      { key: 'D', text: 'consistent' },
    ],
    correctKey: 'A',
    explanation:
      '"compelling evidence" は「説得力があり、疑いの余地を残さない証拠」という意味の定番コロケーション。convenient（都合の良い）、considerate（思いやりのある）、consistent（一貫した）はいずれも証拠の説得力を表す語ではなく文脈に合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_052',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new regulations aim to ( ) carbon emissions from factories by 30 percent within the next decade.',
    choices: [
      { key: 'A', text: 'curl' },
      { key: 'B', text: 'curb' },
      { key: 'C', text: 'curve' },
      { key: 'D', text: 'cure' },
    ],
    correctKey: 'B',
    explanation:
      '"curb emissions" は「排出量を抑制する」という意味の固定表現で、環境政策の文脈で頻出する。curl（巻く）、curve（曲げる）、cure（治す）はいずれも綴りは似ているが意味が異なり不適切。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_053',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'It is ( ) that all passengers fasten their seatbelts before the aircraft begins to taxi.',
    choices: [
      { key: 'A', text: 'imperative' },
      { key: 'B', text: 'impressive' },
      { key: 'C', text: 'impartial' },
      { key: 'D', text: 'improbable' },
    ],
    correctKey: 'A',
    explanation:
      '"imperative" は「絶対に必要な、緊急の」という意味で、安全のために欠かせない指示を述べる文脈に最適。impressive（印象的な）、impartial（公平な）、improbable（ありそうもない）はいずれも文脈に合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_054',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Despite the global recession, the country\'s economy proved remarkably ( ), recovering faster than most analysts had predicted.',
    choices: [
      { key: 'A', text: 'resistant' },
      { key: 'B', text: 'reliant' },
      { key: 'C', text: 'reluctant' },
      { key: 'D', text: 'resilient' },
    ],
    correctKey: 'D',
    explanation:
      '"resilient" は「（打撃を受けても）素早く立ち直る、回復力がある」という意味で、不況からの早い回復を表す文脈に最適。resistant（抵抗力がある）は外的圧力を跳ね返す意味合いが強く、reliant（依存した）・reluctant（気が進まない）は文脈に合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_055',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'All employees are expected to ( ) the company\'s code of conduct at all times, both in and outside the office.',
    choices: [
      { key: 'A', text: 'adhere to' },
      { key: 'B', text: 'adapt to' },
      { key: 'C', text: 'attend to' },
      { key: 'D', text: 'attribute to' },
    ],
    correctKey: 'A',
    explanation:
      '"adhere to a code of conduct" は「行動規範を遵守する」という意味の固定表現。adapt to（〜に適応する）、attend to（〜に対応する）、attribute to（〜に起因すると考える）はいずれも規則の遵守を表す組み合わせとして不適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_056',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new open-plan office was designed to ( ) collaboration among employees from different departments.',
    choices: [
      { key: 'A', text: 'forge' },
      { key: 'B', text: 'foster' },
      { key: 'C', text: 'forbid' },
      { key: 'D', text: 'forecast' },
    ],
    correctKey: 'B',
    explanation:
      '"foster collaboration" は「協力関係を育む、促進する」という意味の定番コロケーション。forge（鍛造する、偽造する）、forbid（禁じる）、forecast（予測する）はいずれもcollaborationとの組み合わせとして不自然。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_057',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The city introduced several measures to ( ) traffic congestion during rush hour, including expanded bus lanes.',
    choices: [
      { key: 'A', text: 'mitigate' },
      { key: 'B', text: 'migrate' },
      { key: 'C', text: 'moderate' },
      { key: 'D', text: 'mediate' },
    ],
    correctKey: 'A',
    explanation:
      '"mitigate congestion" は「渋滞を緩和する」という意味で、都市政策の文脈で頻出する表現。migrate（移住する）は無関係、moderate（穏やかにする）は感情や発言に使うことが多く、mediate（仲裁する）は対立の調停に使う語で不適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_058',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'A cure for the disease has remained ( ) despite decades of intensive research by scientists worldwide.',
    choices: [
      { key: 'A', text: 'elusive' },
      { key: 'B', text: 'exclusive' },
      { key: 'C', text: 'excessive' },
      { key: 'D', text: 'exempt' },
    ],
    correctKey: 'A',
    explanation:
      '"remain elusive" は「（目標や答えが）なかなか手に入らない、捉えどころがない」という意味で、長年研究しても見つからない治療法を表す文脈に最適。exclusive（排他的な）、excessive（過剰な）、exempt（免除された）はいずれも不適切。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_059',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The new employee proved to be remarkably ( ), handling everything from customer service to accounting with equal ease.',
    choices: [
      { key: 'A', text: 'versatile' },
      { key: 'B', text: 'valuable' },
      { key: 'C', text: 'vulnerable' },
      { key: 'D', text: 'voluntary' },
    ],
    correctKey: 'A',
    explanation:
      '"versatile" は「多才な、様々な分野に対応できる」という意味で、複数の異なる業務をこなす能力を表す文脈に最適。valuable（貴重な）は能力の多様性を表さず、vulnerable（弱い）、voluntary（自発的な）はいずれも文脈に合わない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_060',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The accountant was known for her ( ) attention to detail, rarely making even the smallest error in her reports.',
    choices: [
      { key: 'A', text: 'meticulous' },
      { key: 'B', text: 'moderate' },
      { key: 'C', text: 'modest' },
      { key: 'D', text: 'momentary' },
    ],
    correctKey: 'A',
    explanation:
      '"meticulous attention to detail" は「細部への徹底したこだわり」を表す定番コロケーション。滅多に間違えないという記述と一致する。moderate（適度な）、modest（控えめな）、momentary（一瞬の）はいずれも文脈に合わない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_061',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Although the witness\'s account sounded ( ), detectives later discovered several inconsistencies that raised doubts.',
    choices: [
      { key: 'A', text: 'plausible' },
      { key: 'B', text: 'playful' },
      { key: 'C', text: 'pleasant' },
      { key: 'D', text: 'plentiful' },
    ],
    correctKey: 'A',
    explanation:
      '"plausible" は「もっともらしい、信じられそうな」という意味で、一見信用できそうに聞こえたが後に矛盾が見つかったという文脈に最適。playful（遊び心のある）、pleasant（心地よい）、plentiful（豊富な）はいずれも証言の信憑性とは無関係。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_062',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The manager gave ( ) feedback on the proposal, pointing out both its strengths and its serious weaknesses without hesitation.',
    choices: [
      { key: 'A', text: 'candid' },
      { key: 'B', text: 'cautious' },
      { key: 'C', text: 'casual' },
      { key: 'D', text: 'callous' },
    ],
    correctKey: 'A',
    explanation:
      '"candid feedback" は「率直で正直な意見」という意味で、長所も短所も遠慮なく述べたという文脈に最適。cautious（慎重な）、casual（気軽な）、callous（無情な）はいずれも率直さのニュアンスとは異なる。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_063',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Given the current trends, a further rise in interest rates seems almost ( ), according to most economists.',
    choices: [
      { key: 'A', text: 'inevitable' },
      { key: 'B', text: 'invaluable' },
      { key: 'C', text: 'incidental' },
      { key: 'D', text: 'infinite' },
    ],
    correctKey: 'A',
    explanation:
      '"inevitable" は「避けられない、必然の」という意味で、経済動向から見て金利上昇がほぼ確実だという文脈に最適。invaluable（非常に貴重な）、incidental（付随的な）、infinite（無限の）はいずれも文脈に合わない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_064',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Rainfall in the region has become increasingly ( ), making it difficult for farmers to plan their planting schedules.',
    choices: [
      { key: 'A', text: 'sporadic' },
      { key: 'B', text: 'spontaneous' },
      { key: 'C', text: 'specific' },
      { key: 'D', text: 'spacious' },
    ],
    correctKey: 'A',
    explanation:
      '"sporadic" は「不定期な、散発的な」という意味で、予測しにくい降雨パターンを表す文脈に最適。spontaneous（自発的な）、specific（特定の）、spacious（広々とした）はいずれも降雨の予測不可能性を表す語ではない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_065',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The connection between the two events turned out to be rather ( ), based more on coincidence than on any real cause.',
    choices: [
      { key: 'A', text: 'tedious' },
      { key: 'B', text: 'tenuous' },
      { key: 'C', text: 'tentative' },
      { key: 'D', text: 'tangible' },
    ],
    correctKey: 'B',
    explanation:
      '"tenuous" は「（つながりや根拠が）薄弱な、こじつけの」という意味で、偶然によるものに過ぎないという文脈に最適。tedious（退屈な）、tentative（暫定的な）、tangible（有形の、明白な）はいずれも文脈に合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_066',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'The company reported ( ) growth last quarter, far exceeding anything seen in its thirty-year history.',
    choices: [
      { key: 'A', text: 'unprecedented' },
      { key: 'B', text: 'undisclosed' },
      { key: 'C', text: 'undesirable' },
      { key: 'D', text: 'unfounded' },
    ],
    correctKey: 'A',
    explanation:
      '"unprecedented growth" は「前例のない成長」という意味で、過去30年間で最大の成長を表す文脈に最適。undisclosed（未公開の）、undesirable（望ましくない）、unfounded（根拠のない）はいずれも文脈に合わない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_067',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Engineers are exploring whether solar power is a ( ) alternative to fossil fuels for this remote region.',
    choices: [
      { key: 'A', text: 'viable' },
      { key: 'B', text: 'valid' },
      { key: 'C', text: 'vigorous' },
      { key: 'D', text: 'vacant' },
    ],
    correctKey: 'A',
    explanation:
      '"viable alternative" は「実行可能な代替案」という意味の定番コロケーション。validは「（論理・書類などが）正当な」、vigorousは「活発な」、vacantは「空いている」でいずれも文脈に合わない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_068',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Years of careful negotiation finally ( ) in a landmark peace agreement between the two nations.',
    choices: [
      { key: 'A', text: 'culminated' },
      { key: 'B', text: 'cultivated' },
      { key: 'C', text: 'circulated' },
      { key: 'D', text: 'calculated' },
    ],
    correctKey: 'A',
    explanation:
      '"culminate in" は「最終的に〜という結果に至る」という意味で、長い交渉の末に達成された成果を表す文脈に最適。cultivate（育成する）、circulate（循環させる）、calculate（計算する）はいずれも文脈に合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_069',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Trained art experts can often ( ) subtle differences between an original painting and a skillful forgery.',
    choices: [
      { key: 'A', text: 'discern' },
      { key: 'B', text: 'disclose' },
      { key: 'C', text: 'discard' },
      { key: 'D', text: 'discourage' },
    ],
    correctKey: 'A',
    explanation:
      '"discern subtle differences" は「微妙な違いを見分ける」という意味で、専門家の鋭い観察力を表す文脈に最適。disclose（暴露する）、discard（捨てる）、discourage（落胆させる）はいずれも文脈に合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_070',
    level: '2kyu',
    category: 'vocabulary',
    question:
      'Even under intense questioning, the spokesperson was able to ( ) the company\'s position clearly and confidently.',
    choices: [
      { key: 'A', text: 'articulate' },
      { key: 'B', text: 'arbitrate' },
      { key: 'C', text: 'accumulate' },
      { key: 'D', text: 'appreciate' },
    ],
    correctKey: 'A',
    explanation:
      '"articulate a position" は「立場を明確に表現する」という意味で、厳しい質問の中でも明確に説明できたという文脈に最適。arbitrate（仲裁する）、accumulate（蓄積する）、appreciate（感謝する、理解する）はいずれも文脈に合わない。',
    difficulty: 'standard',
  },

  // ── GRAMMAR 71–85 ────────────────────────────────────────────────
  {
    id: 'eiken_2kyu_071',
    level: '2kyu',
    category: 'grammar',
    question:
      'So exhausted ( ) the climbers that they decided to set up camp two hours earlier than planned.',
    choices: [
      { key: 'A', text: 'were' },
      { key: 'B', text: 'did' },
      { key: 'C', text: 'had' },
      { key: 'D', text: 'have' },
    ],
    correctKey: 'A',
    explanation:
      '"So + 形容詞 + be動詞 + 主語 ... that ..." は倒置構文で、「非常に〜だったので…」という結果を強調する。主語 the climbers（複数）に対応するbe動詞 were が正しい。did・had・haveは形容詞 exhausted を補語として続ける倒置には使わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_072',
    level: '2kyu',
    category: 'grammar',
    question:
      'The committee insists that the budget report ( ) revised before it is presented to shareholders.',
    choices: [
      { key: 'A', text: 'is' },
      { key: 'B', text: 'be' },
      { key: 'C', text: 'was' },
      { key: 'D', text: 'will be' },
    ],
    correctKey: 'B',
    explanation:
      '"insist that + 主語 + 動詞原形" は仮定法現在の構文。受動態の原形は "be + 過去分詞" となるため be revised が正しい。is・was・will be はいずれも直説法の時制で、insistが要求する仮定法現在には合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_073',
    level: '2kyu',
    category: 'grammar',
    question:
      'Little ( ) that her presentation would later be cited in dozens of academic papers.',
    choices: [
      { key: 'A', text: 'she did know' },
      { key: 'B', text: 'she knew' },
      { key: 'C', text: 'did she know' },
      { key: 'D', text: 'knew she' },
    ],
    correctKey: 'C',
    explanation:
      '"Little" が否定的な意味を持つ副詞として文頭に置かれると倒置が起こる。"Little did + 主語 + 動詞原形" で「〜とは全く知らなかった」という意味になる。she did know・she knew・knew she はいずれも正しい倒置の語順ではない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_074',
    level: '2kyu',
    category: 'grammar',
    question:
      'The novel, ( ) plot twists kept readers guessing until the final page, became an instant bestseller.',
    choices: [
      { key: 'A', text: 'who' },
      { key: 'B', text: 'which' },
      { key: 'C', text: 'whose' },
      { key: 'D', text: 'that' },
    ],
    correctKey: 'C',
    explanation:
      '先行詞 the novel（物）に対して所有格の関係代名詞 whose を使い、"whose plot twists"（その小説の意外な展開）とする。who は人に使う所有格ではなく主格・目的格、which・that は名詞を直接所有する形にならない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_075',
    level: '2kyu',
    category: 'grammar',
    question:
      'By the time the final guests arrive tonight, the caterers ( ) preparing the banquet hall for over six hours.',
    choices: [
      { key: 'A', text: 'will have been' },
      { key: 'B', text: 'have been' },
      { key: 'C', text: 'had been' },
      { key: 'D', text: 'were' },
    ],
    correctKey: 'A',
    explanation:
      '"By the time + 現在形" の節に対して、未来のある時点までの継続を表すには未来完了進行形 "will have been + 〜ing" を使う。「今夜ゲストが到着する頃には、6時間以上準備を続けていることになる」という未来の継続を示す。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_076',
    level: '2kyu',
    category: 'grammar',
    question:
      'The board members were divided over the merger; some favored it enthusiastically, ( ) others remained firmly opposed.',
    choices: [
      { key: 'A', text: 'so' },
      { key: 'B', text: 'while' },
      { key: 'C', text: 'because' },
      { key: 'D', text: 'unless' },
    ],
    correctKey: 'B',
    explanation:
      '"while" は「一方で」という対比を表す接続詞で、賛成派と反対派に分かれた状況を対照的に示す文脈に最適。so（だから）は因果関係、because（なぜなら）は理由、unless（〜しない限り）は条件を表し、いずれも対比のニュアンスを表せない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_077',
    level: '2kyu',
    category: 'grammar',
    question:
      'The professor would rather the students ( ) their essays a week before the deadline to allow time for revisions.',
    choices: [
      { key: 'A', text: 'submit' },
      { key: 'B', text: 'submitted' },
      { key: 'C', text: 'will submit' },
      { key: 'D', text: 'to submit' },
    ],
    correctKey: 'B',
    explanation:
      '"would rather + 主語 + 過去形" は「（他の誰かに）〜してほしいのだが」という仮定法過去の構文で、現在または未来の願望を表す。submitは原形（主語+would ratherの構文ではない場合）、will submit・to submitはこの構文に合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_078',
    level: '2kyu',
    category: 'grammar',
    question:
      'Such was the intensity of the storm ( ) several coastal towns had to be evacuated overnight.',
    choices: [
      { key: 'A', text: 'so' },
      { key: 'B', text: 'as' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'which' },
    ],
    correctKey: 'C',
    explanation:
      '"Such + be動詞 + 主語 + that ..." は倒置構文で「〜は非常に…だったので」という結果を強調する。この構文では that が必須であり、so・as・which はこの特定の倒置パターンでは使えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_079',
    level: '2kyu',
    category: 'grammar',
    question:
      'The contract stipulates that payment ( ) in full within thirty days of the invoice date.',
    choices: [
      { key: 'A', text: 'is made' },
      { key: 'B', text: 'be made' },
      { key: 'C', text: 'will be made' },
      { key: 'D', text: 'was made' },
    ],
    correctKey: 'B',
    explanation:
      '"stipulate that + 主語 + 動詞原形" は法律・契約文書でよく使われる仮定法現在の構文。受動態の原形は "be + 過去分詞" となるため be made が正しい。is made・will be made・was madeはいずれも直説法で、stipulateが要求する仮定法現在の形にならない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_080',
    level: '2kyu',
    category: 'grammar',
    question:
      'Not only ( ) the deadline, but she also exceeded every expectation the client had set for the project.',
    choices: [
      { key: 'A', text: 'she met' },
      { key: 'B', text: 'did she meet' },
      { key: 'C', text: 'she did meet' },
      { key: 'D', text: 'meet she did' },
    ],
    correctKey: 'B',
    explanation:
      '"Not only" が文頭に置かれると倒置が生じる。"Not only did + 主語 + 動詞原形 ..., but also ..." が正しい構造で、"did she meet" となる。she met・she did meet・meet she did はいずれも正しい倒置の語順ではない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_081',
    level: '2kyu',
    category: 'grammar',
    question:
      'The researchers acknowledged the limitations of their study, ( ) casting doubt on the broader conclusions they had drawn.',
    choices: [
      { key: 'A', text: 'thereby' },
      { key: 'B', text: 'therefore' },
      { key: 'C', text: 'nonetheless' },
      { key: 'D', text: 'otherwise' },
    ],
    correctKey: 'A',
    explanation:
      '"thereby" は「それによって、その結果として」という意味で、分詞構文 casting doubt を導く副詞として機能する。therefore（それゆえ）は独立した文の接続に使うことが多く、この分詞構文の直前には不自然。nonetheless（それにもかかわらず）、otherwise（さもなければ）は文意に合わない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_082',
    level: '2kyu',
    category: 'grammar',
    question:
      'The new policy, ( ) beneficial in theory, has proven extremely difficult to implement in practice.',
    choices: [
      { key: 'A', text: 'despite' },
      { key: 'B', text: 'while' },
      { key: 'C', text: 'because of' },
      { key: 'D', text: 'due to' },
    ],
    correctKey: 'B',
    explanation:
      '"while + 形容詞" は分詞構文的に「〜ではあるが」という譲歩を表す省略構文（while it is beneficial の it is が省略された形）。despite・because of・due to は前置詞句であり、直後に形容詞を単独で続けることはできない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_083',
    level: '2kyu',
    category: 'grammar',
    question:
      'It is high time the government ( ) concrete measures to address the housing crisis.',
    choices: [
      { key: 'A', text: 'takes' },
      { key: 'B', text: 'will take' },
      { key: 'C', text: 'took' },
      { key: 'D', text: 'has taken' },
    ],
    correctKey: 'C',
    explanation:
      '"It is high time + 主語 + 過去形" は「もうとっくに〜すべき時だ」という仮定法過去を使う慣用構文で、現在の状況に対する強い不満や催促を表す。takes・will take・has taken はこの構文の後には使えない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_084',
    level: '2kyu',
    category: 'grammar',
    question:
      'The applicant was rejected, ( ) her impressive qualifications and years of relevant experience.',
    choices: [
      { key: 'A', text: 'despite' },
      { key: 'B', text: 'although' },
      { key: 'C', text: 'even though' },
      { key: 'D', text: 'while' },
    ],
    correctKey: 'A',
    explanation:
      '"despite" は前置詞で、後に名詞句（her impressive qualifications）を直接続けることができる。although・even though・while は接続詞であり、後には主語と動詞を含む節が必要なため、名詞句だけを続けることはできない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_085',
    level: '2kyu',
    category: 'grammar',
    question:
      'The evacuation plan, ( ) drafted years ago, was finally put to the test during last month\'s earthquake.',
    choices: [
      { key: 'A', text: 'first' },
      { key: 'B', text: 'firstly' },
      { key: 'C', text: 'at first' },
      { key: 'D', text: 'firstborn' },
    ],
    correctKey: 'A',
    explanation:
      '"first drafted" は「最初に起草された」という意味で、過去分詞 drafted を修飾する副詞として first を使う。firstly は文全体を修飾する列挙の副詞（Firstly, ... Secondly, ...）で単独の分詞修飾には不自然。at first（最初のうちは）は対比を含意し文意に合わない。firstborn（第一子の）は形容詞・名詞で無関係。',
    difficulty: 'advanced',
  },

  // ── READING 86–100 ───────────────────────────────────────────────
  // Passage 6 (Q86–88): Urban heat islands
  {
    id: 'eiken_2kyu_086',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Cities around the world are experiencing what scientists call the "urban heat island" effect, a phenomenon in which built-up areas become significantly warmer than their rural surroundings. This temperature difference arises primarily because concrete, asphalt, and other construction materials absorb and retain heat far more effectively than natural vegetation. During the day, these surfaces soak up solar radiation; at night, they slowly release it, preventing the air from cooling as it would in a forest or field. The consequences extend beyond simple discomfort: elevated urban temperatures increase electricity demand for air conditioning, worsen air quality by accelerating the formation of ground-level ozone, and disproportionately endanger elderly residents and those without access to cooling systems during heat waves. Urban planners have proposed several countermeasures, including the installation of reflective "cool roofs," the expansion of tree canopy coverage, and the use of lighter-colored pavement that reflects rather than absorbs sunlight. While these interventions have shown promise in pilot projects, implementing them citywide requires substantial investment that many municipal governments have been slow to allocate.

According to the passage, what is the primary cause of the urban heat island effect?`,
    choices: [
      {
        key: 'A',
        text: 'Increased air conditioning use during summer months',
      },
      {
        key: 'B',
        text: 'The tendency of construction materials to absorb and retain heat',
      },
      {
        key: 'C',
        text: 'A general rise in global temperatures caused by climate change',
      },
      {
        key: 'D',
        text: 'The removal of reflective cool roofs from most buildings',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "This temperature difference arises primarily because concrete, asphalt, and other construction materials absorb and retain heat far more effectively than natural vegetation" と明記されている。Bがこれと一致する。Aは結果であって原因ではない。Cは一般論で本文の主旨と異なる。Dは対策として提案されているものであり、原因ではない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_087',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Cities around the world are experiencing what scientists call the "urban heat island" effect, a phenomenon in which built-up areas become significantly warmer than their rural surroundings. This temperature difference arises primarily because concrete, asphalt, and other construction materials absorb and retain heat far more effectively than natural vegetation. During the day, these surfaces soak up solar radiation; at night, they slowly release it, preventing the air from cooling as it would in a forest or field. The consequences extend beyond simple discomfort: elevated urban temperatures increase electricity demand for air conditioning, worsen air quality by accelerating the formation of ground-level ozone, and disproportionately endanger elderly residents and those without access to cooling systems during heat waves. Urban planners have proposed several countermeasures, including the installation of reflective "cool roofs," the expansion of tree canopy coverage, and the use of lighter-colored pavement that reflects rather than absorbs sunlight. While these interventions have shown promise in pilot projects, implementing them citywide requires substantial investment that many municipal governments have been slow to allocate.

In the passage, the phrase "disproportionately endanger" most nearly means:`,
    choices: [
      { key: 'A', text: 'put at unusually high risk compared to others' },
      { key: 'B', text: 'completely eliminate the risk for' },
      { key: 'C', text: 'slightly reduce the danger faced by' },
      { key: 'D', text: 'have no measurable effect on' },
    ],
    correctKey: 'A',
    explanation:
      '"disproportionately" は「不釣り合いに、他と比べて過度に」という意味で、高齢者や冷房を使えない人々が他の人々よりも大きな危険にさらされることを表す。Aの「他と比べて異常に高いリスクにさらす」が最も正確。B・C・Dは意味が逆または過度に単純化されている。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_088',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Cities around the world are experiencing what scientists call the "urban heat island" effect, a phenomenon in which built-up areas become significantly warmer than their rural surroundings. This temperature difference arises primarily because concrete, asphalt, and other construction materials absorb and retain heat far more effectively than natural vegetation. During the day, these surfaces soak up solar radiation; at night, they slowly release it, preventing the air from cooling as it would in a forest or field. The consequences extend beyond simple discomfort: elevated urban temperatures increase electricity demand for air conditioning, worsen air quality by accelerating the formation of ground-level ozone, and disproportionately endanger elderly residents and those without access to cooling systems during heat waves. Urban planners have proposed several countermeasures, including the installation of reflective "cool roofs," the expansion of tree canopy coverage, and the use of lighter-colored pavement that reflects rather than absorbs sunlight. While these interventions have shown promise in pilot projects, implementing them citywide requires substantial investment that many municipal governments have been slow to allocate.

What obstacle to addressing the urban heat island effect does the passage identify?`,
    choices: [
      {
        key: 'A',
        text: 'Scientists have not yet identified any effective countermeasures.',
      },
      {
        key: 'B',
        text: 'Reflective roofs and lighter pavement have failed in every pilot project tested.',
      },
      {
        key: 'C',
        text: 'Citywide implementation demands funding that many local governments have been reluctant to provide.',
      },
      {
        key: 'D',
        text: 'Residents have widely opposed the installation of cool roofs in their neighborhoods.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージ末尾に "implementing them citywide requires substantial investment that many municipal governments have been slow to allocate" とあり、資金投入の遅れが課題として挙げられている。Cがこれに一致する。Aは対策が提案されている点と矛盾。Bは「pilot projects have shown promise」と矛盾。Dはパッセージに記載がない。',
    difficulty: 'advanced',
  },

  // Passage 7 (Q89–91): The economics of streaming services
  {
    id: 'eiken_2kyu_089',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of subscription-based streaming services has fundamentally reshaped how consumers access music, television, and film. Initially, these platforms attracted subscribers by offering vast libraries of content for a single, relatively low monthly fee, a proposition that seemed far more economical than purchasing individual albums, DVDs, or cable packages. However, as competition intensified, media companies increasingly withdrew their content from shared platforms to launch proprietary services of their own, fragmenting the market and forcing consumers to subscribe to multiple services to access the content they wanted. This fragmentation has gradually eroded the original cost advantage of streaming, with some households now spending more on a combination of subscriptions than they once paid for traditional cable television. Industry analysts note a related trend known as "subscription fatigue," in which consumers, overwhelmed by the number of services demanding monthly payments, begin canceling subscriptions or reverting to less convenient means of accessing content, including piracy. Streaming companies have responded by introducing tiered pricing models, bundling deals, and advertising-supported plans in an effort to retain price-sensitive customers.

According to the passage, what has caused the fragmentation of the streaming market?`,
    choices: [
      {
        key: 'A',
        text: 'Media companies removing their content to create their own separate platforms',
      },
      {
        key: 'B',
        text: 'Government regulations requiring companies to limit the size of their content libraries',
      },
      {
        key: 'C',
        text: 'A sharp decline in the overall demand for streaming services',
      },
      {
        key: 'D',
        text: 'Consumers demanding that companies offer more advertising-supported plans',
      },
    ],
    correctKey: 'A',
    explanation:
      'パッセージに "media companies increasingly withdrew their content from shared platforms to launch proprietary services of their own, fragmenting the market" とあり、コンテンツの引き上げと独自サービスの立ち上げが市場の分断を招いたと述べられている。Aがこれに一致する。B・C・Dはパッセージに記載がない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_090',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of subscription-based streaming services has fundamentally reshaped how consumers access music, television, and film. Initially, these platforms attracted subscribers by offering vast libraries of content for a single, relatively low monthly fee, a proposition that seemed far more economical than purchasing individual albums, DVDs, or cable packages. However, as competition intensified, media companies increasingly withdrew their content from shared platforms to launch proprietary services of their own, fragmenting the market and forcing consumers to subscribe to multiple services to access the content they wanted. This fragmentation has gradually eroded the original cost advantage of streaming, with some households now spending more on a combination of subscriptions than they once paid for traditional cable television. Industry analysts note a related trend known as "subscription fatigue," in which consumers, overwhelmed by the number of services demanding monthly payments, begin canceling subscriptions or reverting to less convenient means of accessing content, including piracy. Streaming companies have responded by introducing tiered pricing models, bundling deals, and advertising-supported plans in an effort to retain price-sensitive customers.

In the passage, "subscription fatigue" refers to:`,
    choices: [
      {
        key: 'A',
        text: 'a technical problem that prevents subscriptions from renewing automatically',
      },
      {
        key: 'B',
        text: 'the exhaustion consumers feel from being asked to pay for too many separate services',
      },
      {
        key: 'C',
        text: 'a marketing strategy used by companies to attract new subscribers',
      },
      {
        key: 'D',
        text: 'the declining quality of content offered on streaming platforms',
      },
    ],
    correctKey: 'B',
    explanation:
      '"subscription fatigue" は「consumers, overwhelmed by the number of services demanding monthly payments」と説明されており、多数のサブスクリプション料金に消費者が疲弊する状態を指す。Bがこれに一致する。A・C・Dはパッセージの定義と異なる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_091',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

The rise of subscription-based streaming services has fundamentally reshaped how consumers access music, television, and film. Initially, these platforms attracted subscribers by offering vast libraries of content for a single, relatively low monthly fee, a proposition that seemed far more economical than purchasing individual albums, DVDs, or cable packages. However, as competition intensified, media companies increasingly withdrew their content from shared platforms to launch proprietary services of their own, fragmenting the market and forcing consumers to subscribe to multiple services to access the content they wanted. This fragmentation has gradually eroded the original cost advantage of streaming, with some households now spending more on a combination of subscriptions than they once paid for traditional cable television. Industry analysts note a related trend known as "subscription fatigue," in which consumers, overwhelmed by the number of services demanding monthly payments, begin canceling subscriptions or reverting to less convenient means of accessing content, including piracy. Streaming companies have responded by introducing tiered pricing models, bundling deals, and advertising-supported plans in an effort to retain price-sensitive customers.

How have streaming companies responded to the problem described in the passage?`,
    choices: [
      {
        key: 'A',
        text: 'By merging all of their services back into a single unified platform',
      },
      {
        key: 'B',
        text: 'By raising prices uniformly across all subscription tiers',
      },
      {
        key: 'C',
        text: 'By offering tiered pricing, bundles, and ad-supported options to keep budget-conscious customers',
      },
      {
        key: 'D',
        text: 'By removing all advertising from their platforms permanently',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージ末尾に "Streaming companies have responded by introducing tiered pricing models, bundling deals, and advertising-supported plans in an effort to retain price-sensitive customers" とあり、Cがこれに正確に一致する。A・B・Dはパッセージの内容と矛盾する。',
    difficulty: 'standard',
  },

  // Passage 8 (Q92–94): Bilingualism and the brain
  {
    id: 'eiken_2kyu_092',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

For decades, researchers debated whether growing up speaking two languages conferred any cognitive advantage, or whether, as some early studies suggested, it merely caused confusion and delayed language development in children. More recent research employing sophisticated brain-imaging techniques has largely overturned this earlier skepticism. Bilingual individuals, it turns out, must constantly manage two active language systems, suppressing one while using the other — a mental exercise that appears to strengthen the brain's executive control network, the system responsible for tasks such as switching attention, ignoring distractions, and holding multiple pieces of information in mind simultaneously. Some studies have even suggested that lifelong bilingualism may delay the onset of dementia symptoms by several years, though researchers caution that this finding remains under active investigation and may be influenced by other lifestyle factors, such as education level and social engagement. Critics of the "bilingual advantage" hypothesis argue that many of the original studies suffered from small sample sizes and failed to control adequately for socioeconomic differences between bilingual and monolingual participants, and that more rigorous replication is still needed before firm conclusions can be drawn.

According to the passage, what mental process is strengthened by managing two active language systems?`,
    choices: [
      {
        key: 'A',
        text: 'The brain\'s executive control network, involved in attention and multitasking',
      },
      {
        key: 'B',
        text: 'The region of the brain responsible for long-term memory storage',
      },
      {
        key: 'C',
        text: 'The part of the brain that processes visual information',
      },
      {
        key: 'D',
        text: 'The system that regulates emotional responses to stress',
      },
    ],
    correctKey: 'A',
    explanation:
      'パッセージに "a mental exercise that appears to strengthen the brain\'s executive control network, the system responsible for tasks such as switching attention, ignoring distractions, and holding multiple pieces of information in mind simultaneously" とある。Aがこれに一致する。B・C・Dはパッセージに記載されていない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_093',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

For decades, researchers debated whether growing up speaking two languages conferred any cognitive advantage, or whether, as some early studies suggested, it merely caused confusion and delayed language development in children. More recent research employing sophisticated brain-imaging techniques has largely overturned this earlier skepticism. Bilingual individuals, it turns out, must constantly manage two active language systems, suppressing one while using the other — a mental exercise that appears to strengthen the brain's executive control network, the system responsible for tasks such as switching attention, ignoring distractions, and holding multiple pieces of information in mind simultaneously. Some studies have even suggested that lifelong bilingualism may delay the onset of dementia symptoms by several years, though researchers caution that this finding remains under active investigation and may be influenced by other lifestyle factors, such as education level and social engagement. Critics of the "bilingual advantage" hypothesis argue that many of the original studies suffered from small sample sizes and failed to control adequately for socioeconomic differences between bilingual and monolingual participants, and that more rigorous replication is still needed before firm conclusions can be drawn.

What criticism do skeptics raise about early studies on the "bilingual advantage"?`,
    choices: [
      {
        key: 'A',
        text: 'The studies were conducted entirely by researchers with no training in neuroscience.',
      },
      {
        key: 'B',
        text: 'The studies often had small samples and did not properly account for socioeconomic differences.',
      },
      {
        key: 'C',
        text: 'The studies focused exclusively on elderly participants, ignoring children entirely.',
      },
      {
        key: 'D',
        text: 'The studies were funded by companies that sell language-learning software.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "many of the original studies suffered from small sample sizes and failed to control adequately for socioeconomic differences between bilingual and monolingual participants" とある。Bがこれに一致する。A・C・Dはパッセージに記載されていない。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_094',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

For decades, researchers debated whether growing up speaking two languages conferred any cognitive advantage, or whether, as some early studies suggested, it merely caused confusion and delayed language development in children. More recent research employing sophisticated brain-imaging techniques has largely overturned this earlier skepticism. Bilingual individuals, it turns out, must constantly manage two active language systems, suppressing one while using the other — a mental exercise that appears to strengthen the brain's executive control network, the system responsible for tasks such as switching attention, ignoring distractions, and holding multiple pieces of information in mind simultaneously. Some studies have even suggested that lifelong bilingualism may delay the onset of dementia symptoms by several years, though researchers caution that this finding remains under active investigation and may be influenced by other lifestyle factors, such as education level and social engagement. Critics of the "bilingual advantage" hypothesis argue that many of the original studies suffered from small sample sizes and failed to control adequately for socioeconomic differences between bilingual and monolingual participants, and that more rigorous replication is still needed before firm conclusions can be drawn.

Which of the following best summarizes the author's overall stance toward the "bilingual advantage" hypothesis?`,
    choices: [
      {
        key: 'A',
        text: 'The author is fully convinced that bilingualism provides guaranteed cognitive benefits to everyone.',
      },
      {
        key: 'B',
        text: 'The author dismisses the idea entirely as a myth with no scientific basis.',
      },
      {
        key: 'C',
        text: 'The author presents supporting evidence while also acknowledging valid scientific criticisms.',
      },
      {
        key: 'D',
        text: 'The author argues that only children, not adults, can benefit from bilingualism.',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージは初期研究への懐疑論を紹介した上で、より新しい研究による支持的な証拠を示し、さらに批判者の指摘も公平に取り上げている。Cが「支持する証拠と妥当な批判の両方を提示している」という著者の姿勢を最も正確に表す。A・B・Dはいずれも一方的すぎる。',
    difficulty: 'advanced',
  },

  // Passage 9 (Q95–97): The economics of vertical farming
  {
    id: 'eiken_2kyu_095',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Vertical farming — the practice of growing crops in stacked layers within climate-controlled indoor facilities — has been heralded by proponents as a solution to many of agriculture's most pressing challenges. By growing food indoors under artificial lighting and precisely regulated conditions, vertical farms can operate year-round regardless of external weather, use up to ninety percent less water than conventional farming through recirculating irrigation systems, and be located close to urban centers, dramatically reducing the distance food must travel before reaching consumers. Despite these advantages, the industry has struggled to achieve profitability at scale. The enormous energy costs associated with artificial lighting and climate control, combined with high labor and real estate expenses in urban areas, have pushed the production costs of vertically farmed produce well above those of traditionally grown crops. Several high-profile vertical farming startups that raised substantial venture capital have since filed for bankruptcy or significantly scaled back operations. Industry observers now suggest that vertical farming may prove economically viable only for high-value, fast-growing crops such as leafy greens and herbs, rather than as a wholesale replacement for traditional agriculture.

According to the passage, what is one advantage of vertical farming over conventional agriculture?`,
    choices: [
      {
        key: 'A',
        text: 'It requires significantly less water due to recirculating irrigation systems.',
      },
      {
        key: 'B',
        text: 'It has proven far more profitable than traditional farming methods.',
      },
      {
        key: 'C',
        text: 'It eliminates the need for any artificial lighting or climate control.',
      },
      {
        key: 'D',
        text: 'It has completely replaced traditional agriculture in most major cities.',
      },
    ],
    correctKey: 'A',
    explanation:
      'パッセージに "use up to ninety percent less water than conventional farming through recirculating irrigation systems" とある。Aがこれに一致する。Bは本文の「struggled to achieve profitability」と矛盾。Cは人工照明・気候制御が垂直農業の前提であり誤り。Dは誇張で本文に根拠がない。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_2kyu_096',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Vertical farming — the practice of growing crops in stacked layers within climate-controlled indoor facilities — has been heralded by proponents as a solution to many of agriculture's most pressing challenges. By growing food indoors under artificial lighting and precisely regulated conditions, vertical farms can operate year-round regardless of external weather, use up to ninety percent less water than conventional farming through recirculating irrigation systems, and be located close to urban centers, dramatically reducing the distance food must travel before reaching consumers. Despite these advantages, the industry has struggled to achieve profitability at scale. The enormous energy costs associated with artificial lighting and climate control, combined with high labor and real estate expenses in urban areas, have pushed the production costs of vertically farmed produce well above those of traditionally grown crops. Several high-profile vertical farming startups that raised substantial venture capital have since filed for bankruptcy or significantly scaled back operations. Industry observers now suggest that vertical farming may prove economically viable only for high-value, fast-growing crops such as leafy greens and herbs, rather than as a wholesale replacement for traditional agriculture.

Why have several vertical farming startups gone bankrupt, according to the passage?`,
    choices: [
      {
        key: 'A',
        text: 'They were unable to secure any venture capital investment.',
      },
      {
        key: 'B',
        text: 'High energy, labor, and real estate costs made production too expensive.',
      },
      {
        key: 'C',
        text: 'Consumers refused to purchase vegetables grown indoors.',
      },
      {
        key: 'D',
        text: 'Government regulations banned indoor farming in most regions.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "The enormous energy costs associated with artificial lighting and climate control, combined with high labor and real estate expenses in urban areas, have pushed the production costs of vertically farmed produce well above those of traditionally grown crops" とある。Bがこれに一致する。A・C・Dはパッセージに記載がない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_097',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Vertical farming — the practice of growing crops in stacked layers within climate-controlled indoor facilities — has been heralded by proponents as a solution to many of agriculture's most pressing challenges. By growing food indoors under artificial lighting and precisely regulated conditions, vertical farms can operate year-round regardless of external weather, use up to ninety percent less water than conventional farming through recirculating irrigation systems, and be located close to urban centers, dramatically reducing the distance food must travel before reaching consumers. Despite these advantages, the industry has struggled to achieve profitability at scale. The enormous energy costs associated with artificial lighting and climate control, combined with high labor and real estate expenses in urban areas, have pushed the production costs of vertically farmed produce well above those of traditionally grown crops. Several high-profile vertical farming startups that raised substantial venture capital have since filed for bankruptcy or significantly scaled back operations. Industry observers now suggest that vertical farming may prove economically viable only for high-value, fast-growing crops such as leafy greens and herbs, rather than as a wholesale replacement for traditional agriculture.

What conclusion do industry observers draw about the future of vertical farming?`,
    choices: [
      {
        key: 'A',
        text: 'It will likely replace all traditional farming within the next decade.',
      },
      {
        key: 'B',
        text: 'It may only be economically practical for certain high-value, quick-growing crops.',
      },
      {
        key: 'C',
        text: 'It will be banned in most countries due to its high energy consumption.',
      },
      {
        key: 'D',
        text: 'It has already proven more profitable than any other form of agriculture.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージ末尾に "vertical farming may prove economically viable only for high-value, fast-growing crops such as leafy greens and herbs, rather than as a wholesale replacement for traditional agriculture" とある。Bがこれに一致する。A・C・Dはパッセージの内容と矛盾または根拠がない。',
    difficulty: 'advanced',
  },

  // Passage 10 (Q98–100): The psychology of procrastination
  {
    id: 'eiken_2kyu_098',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Procrastination is often dismissed as a simple failure of time management or willpower, but psychological research suggests a more complex picture. Rather than being a purely rational miscalculation, chronic procrastination is increasingly understood as an emotion-regulation problem: people delay tasks not because they misjudge how long the task will take, but because the task itself triggers negative feelings — anxiety, boredom, self-doubt, or frustration — that they seek to avoid in the short term, even at the cost of greater stress later. This explains why procrastinators often report feeling temporary relief immediately after choosing to delay a task, followed by guilt and heightened anxiety as the deadline approaches. Effective interventions, researchers argue, should therefore focus less on time-management techniques such as scheduling and more on strategies that address the underlying emotional avoidance, such as breaking large tasks into smaller, less intimidating steps or practicing self-compassion rather than self-criticism when setbacks occur. Notably, studies have found that procrastinators who are harshest on themselves after delaying a task are, somewhat counterintuitively, more likely to procrastinate again in the future, suggesting that guilt and shame may perpetuate the very cycle they are meant to break.

According to the passage, what is the primary cause of chronic procrastination?`,
    choices: [
      {
        key: 'A',
        text: 'A rational miscalculation of how much time a task will require',
      },
      {
        key: 'B',
        text: 'An inability to create effective daily schedules',
      },
      {
        key: 'C',
        text: 'A desire to avoid the negative emotions that a task provokes',
      },
      {
        key: 'D',
        text: 'A lack of interest in achieving long-term goals',
      },
    ],
    correctKey: 'C',
    explanation:
      'パッセージに "people delay tasks not because they misjudge how long the task will take, but because the task itself triggers negative feelings ... that they seek to avoid in the short term" とある。Cがこれに一致する。Aは本文で明確に否定されている。B・Dはパッセージの主張と異なる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_2kyu_099',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Procrastination is often dismissed as a simple failure of time management or willpower, but psychological research suggests a more complex picture. Rather than being a purely rational miscalculation, chronic procrastination is increasingly understood as an emotion-regulation problem: people delay tasks not because they misjudge how long the task will take, but because the task itself triggers negative feelings — anxiety, boredom, self-doubt, or frustration — that they seek to avoid in the short term, even at the cost of greater stress later. This explains why procrastinators often report feeling temporary relief immediately after choosing to delay a task, followed by guilt and heightened anxiety as the deadline approaches. Effective interventions, researchers argue, should therefore focus less on time-management techniques such as scheduling and more on strategies that address the underlying emotional avoidance, such as breaking large tasks into smaller, less intimidating steps or practicing self-compassion rather than self-criticism when setbacks occur. Notably, studies have found that procrastinators who are harshest on themselves after delaying a task are, somewhat counterintuitively, more likely to procrastinate again in the future, suggesting that guilt and shame may perpetuate the very cycle they are meant to break.

What did researchers find about procrastinators who are especially self-critical after delaying a task?`,
    choices: [
      {
        key: 'A',
        text: 'They tend to complete future tasks more quickly out of guilt.',
      },
      {
        key: 'B',
        text: 'They are somewhat more likely to procrastinate again later.',
      },
      {
        key: 'C',
        text: 'They rarely experience any anxiety about approaching deadlines.',
      },
      {
        key: 'D',
        text: 'They benefit the most from strict scheduling techniques.',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "procrastinators who are harshest on themselves after delaying a task are, somewhat counterintuitively, more likely to procrastinate again in the future" とある。Bがこれに一致する。A・C・Dはパッセージの内容と矛盾する。',
    difficulty: 'advanced',
  },
  {
    id: 'eiken_2kyu_100',
    level: '2kyu',
    category: 'reading',
    question: `Read the following passage and answer the question below.

Procrastination is often dismissed as a simple failure of time management or willpower, but psychological research suggests a more complex picture. Rather than being a purely rational miscalculation, chronic procrastination is increasingly understood as an emotion-regulation problem: people delay tasks not because they misjudge how long the task will take, but because the task itself triggers negative feelings — anxiety, boredom, self-doubt, or frustration — that they seek to avoid in the short term, even at the cost of greater stress later. This explains why procrastinators often report feeling temporary relief immediately after choosing to delay a task, followed by guilt and heightened anxiety as the deadline approaches. Effective interventions, researchers argue, should therefore focus less on time-management techniques such as scheduling and more on strategies that address the underlying emotional avoidance, such as breaking large tasks into smaller, less intimidating steps or practicing self-compassion rather than self-criticism when setbacks occur. Notably, studies have found that procrastinators who are harshest on themselves after delaying a task are, somewhat counterintuitively, more likely to procrastinate again in the future, suggesting that guilt and shame may perpetuate the very cycle they are meant to break.

What intervention strategy does the passage suggest is more effective than traditional time-management techniques?`,
    choices: [
      {
        key: 'A',
        text: 'Strictly enforcing daily schedules without exceptions',
      },
      {
        key: 'B',
        text: 'Addressing emotional avoidance through smaller steps and self-compassion',
      },
      {
        key: 'C',
        text: 'Increasing self-criticism to build stronger discipline',
      },
      {
        key: 'D',
        text: 'Avoiding all deadlines to reduce feelings of pressure',
      },
    ],
    correctKey: 'B',
    explanation:
      'パッセージに "Effective interventions ... should therefore focus less on time-management techniques such as scheduling and more on strategies that address the underlying emotional avoidance, such as breaking large tasks into smaller, less intimidating steps or practicing self-compassion" とある。Bがこれに一致する。A・C・Dはパッセージの主張と矛盾する。',
    difficulty: 'advanced',
  },
];
