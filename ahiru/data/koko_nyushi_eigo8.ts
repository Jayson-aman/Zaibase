import type { Question } from './questions';

export const kokoNyushiEigo8: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo8_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  He ( ) as a carpenter for ten years when the factory next door closed down.',
    choices: ['① works', '② has worked', '③ had been working', '④ will work'],
    answer: '③ had been working',
    hint: '工場が閉鎖した（過去の一時点）よりもさらに前から続いていた動作を表す時制を選ぶ。',
    explanation: `【出題意図】
過去完了進行形（had been + Ving）の用法を問う問題。過去のある時点までずっと継続していた動作を表す時制の識別が目標。

【解説】
「when the factory... closed down（工場が閉鎖したとき）」は過去の一時点。その時点よりもさらに前から「大工として働き続けていた」という継続動作を表すには過去完了進行形を使う。
・① works → 現在形（文脈に合わない）
・② has worked → 現在完了形（過去の基準点には使えない）
・③ had been working → 過去完了進行形（✓）
・④ will work → 未来形（文脈に合わない）

日本語訳：「隣の工場が閉鎖したとき、彼は10年間大工として働き続けていた。」

【文法ポイント】
過去完了進行形 = had been + 動詞-ing
→ 過去のある時点よりもさらに前から、その時点まで継続していた動作に使う。「for〜」「since〜」などの継続を示す語句とセットで出やすい。

【入試頻出】
・She had been studying abroad for two years when she got the job offer.
・They had been working on the project since spring when it was cancelled.
「when＋過去形」の主節に過去完了（進行）形を使うパターンを押さえよ。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  You ( ) arrive at the interview room by 8:30, because the door will be locked after that.',
    choices: ['① must', '② should', '③ have to', '④ need'],
    answer: '③ have to',
    hint: '「8時30分までに」という外部の規則・締め切りがある場合の義務の表現を選ぶ。',
    explanation: `【出題意図】
助動詞（must / should / have to / need）の意味の違いを問う問題。義務の強さと、話者の主観か外的状況かというニュアンスの識別が目標。

【解説】
「the door will be locked after that（それ以降はドアが施錠される）」という外部の規則・状況が理由になっている文脈。
・① must → 話者の強い主観的義務
・② should → 「〜すべきだ」（推奨・アドバイス）
・③ have to → 外的な状況・規則による必要性（✓）
・④ need → より弱い義務

外部の規則が理由として明示されている場合、入試では have to を選ばせることが多い。

日本語訳：「面接室には8時30分までに到着しなければなりません。それ以降はドアが施錠されるからです。」

【文法ポイント】
must：話者の判断による強い義務
have to：状況・規則・外部要因による義務
should：義務より軽い推奨

【入試頻出】
・Applicants have to submit their resumes by Friday.
・過去形は must に過去形がないため had to を使う：I had to work overtime yesterday.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語形を選べ。  This application form ( ) by the personnel department every spring.',
    choices: ['① reviews', '② is reviewed', '③ was reviewed', '④ has review'],
    answer: '② is reviewed',
    hint: '「毎年〜される」という受動態の現在形を探す。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の現在形の正確な形を問う問題。能動態との区別も含む。

【解説】
主語は「This application form（この申込書）」= 物。書類は「見直す」側ではなく「見直される」側なので受動態が必要。「every spring（毎年春に）」は習慣・繰り返しを示すので現在形。
・① reviews → 能動態・現在3単現（主語が人のとき使う）
・② is reviewed → 受動態・現在形（✓）
・③ was reviewed → 受動態・過去形（「毎年」と合わない）
・④ has review → 形が誤り

日本語訳：「この申込書は毎年春に人事部によって見直される。」

【文法ポイント】
受動態の基本形：現在 is/am/are + 過去分詞、過去 was/were + 過去分詞、未来 will be + 過去分詞、現在完了 has/have been + 過去分詞

【入試頻出】
・New employees are trained by senior staff every April.
・This report was written by the sales team last month.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Being a firefighter is ( ) job in our town, everyone says.',
    choices: ['① dangerous', '② more dangerous', '③ the most dangerous', '④ most dangerous'],
    answer: '③ the most dangerous',
    hint: '「町で一番〜」は最上級。最上級の前には the が必要。',
    explanation: `【出題意図】
比較表現（原級・比較級・最上級）の使い分けと、最上級に定冠詞 the が必要なことを問う問題。

【解説】
「in our town（私たちの町で）」は範囲を示す表現で、その中で「一番」を表すには最上級が必要。
・① dangerous → 原級（比較なし）
・② more dangerous → 比較級（2つを比べる）
・③ the most dangerous → 最上級（✓）
・④ most dangerous → the が抜けている誤り

日本語訳：「消防士であることは、私たちの町で一番危険な仕事だと誰もが言う。」

【文法ポイント】
比較級：形容詞 + -er または more + 形容詞
最上級：the + 形容詞 + -est または the most + 形容詞。最上級には必ず the が必要！
2音節以上の形容詞（dangerous, difficult など）は more / most 型。

【入試頻出】
・Nursing is one of the most demanding jobs.
・This is the most important skill for a teacher.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  She worked part-time at a bakery every weekend ( ) save money for cooking school.',
    choices: ['① for', '② so', '③ to', '④ in order'],
    answer: '③ to',
    hint: '「〜するために」という目的を表す不定詞の副詞的用法。',
    explanation: `【出題意図】
不定詞の副詞的用法「〜するために（目的）」を問う問題。前置詞 for との混同を防ぐ。

【解説】
「毎週末アルバイトをした」目的を表す文。「お金を貯めるために」は不定詞の副詞的用法（目的）で表す。
・① for → 前置詞。for の後ろは名詞のみ
・② so → 単独では目的を表せない
・③ to → to + 動詞原形で「〜するために」（✓）
・④ in order → in order to なら可だが in order 単独では不完全

日本語訳：「彼女は料理学校のためにお金を貯めるために、毎週末パン屋でアルバイトをした。」

【文法ポイント】
不定詞の副詞的用法（目的）：〜するために。名詞的用法（〜すること）・形容詞的用法（〜するための）と区別する。

【入試頻出】
・He studied hard to become an engineer.
・She practiced every day to improve her presentation skills.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  He enjoys ( ) with children at the day-care center during his job experience.',
    choices: ['① play', '② to play', '③ playing', '④ played'],
    answer: '③ playing',
    hint: 'enjoy の後ろには動名詞（〜ing）が来る。',
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞（enjoy）を正しく使えるかを問う問題。不定詞との区別が核心。

【解説】
enjoy は目的語に動名詞（〜ing）だけを取り、不定詞は取らない。
・① play → 原形（不可）
・② to play → 不定詞（enjoy の後ろには来ない）
・③ playing → 動名詞（✓）enjoy + 動名詞
・④ played → 過去形（目的語になれない）

日本語訳：「彼は職業体験の間、保育園で子どもたちと遊ぶのを楽しんでいる。」

【文法ポイント】
動名詞のみを目的語にとる動詞（入試頻出）：enjoy、finish、stop、mind、give up、practice
不定詞のみを目的語にとる動詞：want、hope、decide、wish

【入試頻出】
・She finished writing her report.
・He practiced speaking English before the interview.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  By the time she turns thirty, she ( ) her own restaurant for five years.',
    choices: ['① will open', '② has opened', '③ will have opened', '④ opened'],
    answer: '③ will have opened',
    hint: '「30歳になるまでには」という未来の時点での完了・継続を表す時制を選ぶ。',
    explanation: `【出題意図】
未来完了形（will have + 過去分詞）の用法を問う問題。「未来のある時点での完了・継続」を表す時制の識別。

【解説】
「By the time she turns thirty（30歳になるまでには）」は未来の時点。その時点で「5年間自分のレストランを開いていることになる」という継続の完了を表すには未来完了形を使う。
・① will open → 単純未来（継続の完了を表せない）
・② has opened → 現在完了（未来の時点には使えない）
・③ will have opened → 未来完了（✓）
・④ opened → 過去形（文脈に合わない）

日本語訳：「彼女が30歳になるまでには、自分のレストランを5年間経営していることになる。」

【文法ポイント】
未来完了形 = will have + 過去分詞。目印の語句：by the time〜 / by then / by next〜

【入試頻出】
・By next April, he will have worked here for ten years.
・By the time you graduate, you will have decided your future job.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If you ( ) hard during your work experience, you will learn a lot about the job.',
    choices: ['① work', '② will work', '③ worked', '④ working'],
    answer: '① work',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation: `【出題意図】
条件節（if 節）での時制のルール「未来のことでも現在形を使う」を問う問題。入試最頻出文法の一つ。

【解説】
「If you 〜, you will learn」は条件文（仮定法ではない直説法）。if 節・when 節などの副詞節の中では、未来のことであっても will を使わず現在形を使う。
・① work → 現在形（✓）if 節内では現在形で未来を表す
・② will work → if 節内で will は使えない
・③ worked → 過去形（仮定法になってしまう）
・④ working → 動詞として不完全

日本語訳：「職業体験の間しっかり取り組めば、その仕事について多くのことを学べるだろう。」

【文法ポイント】
時・条件を表す副詞節の中では未来のことでも現在形：if / when / until / as soon as / before / after

【入試頻出】
・If you practice every day, you will improve your skills.
・When you finish the internship, you will understand the job better.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The new intern ( ) by the sales manager last Monday.',
    choices: ['① interviews', '② is interviewed', '③ was interviewed', '④ has interview'],
    answer: '③ was interviewed',
    hint: '「先週の月曜日」という過去の一時点を表す語句に注目し、受動態の過去形を選ぶ。',
    explanation: `【出題意図】
受動態の過去形を問う問題。過去を示す語句（last Monday）との組み合わせを確認する。

【解説】
「The new intern（新しいインターン）」は面接する側ではなく面接される側なので受動態。「last Monday（先週の月曜日）」は過去の一時点を示すので過去形の受動態を選ぶ。
・① interviews → 能動態・現在形（主語が人でも意味が逆）
・② is interviewed → 受動態・現在形（過去を表す語句と合わない）
・③ was interviewed → 受動態・過去形（✓）
・④ has interview → 形が誤り

日本語訳：「新しいインターンは先週の月曜日、営業部長に面接された。」

【文法ポイント】
受動態の過去形：was/were + 過去分詞。過去を示す語句（yesterday, last〜, 〜 ago）とセットで出やすい。

【入試頻出】
・She was hired by the company two years ago.
・The report was submitted before the deadline.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This job requires ( ) patience than my last one did.',
    choices: ['① much', '② more', '③ most', '④ many'],
    answer: '② more',
    hint: 'than があるので比較級を選ぶ。patience は数えられない名詞。',
    explanation: `【出題意図】
数えられない名詞（patience）の比較級の形を問う問題。much / many の使い分けとの混同を防ぐ。

【解説】
than があるので比較級が必要。patience（忍耐力）は数えられない名詞なので、比較級は more を使う。
・① much → 原級の強調（比較級ではない）
・② more → patience の比較級（✓）than とセットで使える
・③ most → 最上級（than とは使わない）
・④ many → 数えられる名詞に使う（patience には不可）

日本語訳：「この仕事は前の仕事よりも多くの忍耐力を必要とする。」

【文法ポイント】
数えられない名詞の比較：more（比較級）／ the most（最上級）
much（原級・多い）→ more（比較級）→ the most（最上級）
many（数えられる名詞・原級）→ more（比較級）→ the most（最上級）

【入試頻出】
・This job needs more experience than that one.
・She has more responsibility than before.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I want ( ) an interpreter after I graduate from college.',
    choices: ['① be', '② being', '③ to be', '④ to being'],
    answer: '③ to be',
    hint: 'want の後ろに来る不定詞の名詞的用法（〜したい）を選ぶ。',
    explanation: `【出題意図】
不定詞の名詞的用法（want to + 動詞原形）の形を正確に使えるかを問う問題。

【解説】
want は「〜したい」という意味で、後ろに不定詞（to + 動詞原形）を取る。
・① be → 原形のみ（want の後ろに直接来ない）
・② being → 動名詞（want は動名詞を目的語に取らない）
・③ to be → 不定詞（✓）want to be〜 = 〜になりたい
・④ to being → 存在しない形

日本語訳：「私は大学を卒業したら通訳者になりたい。」

【文法ポイント】
不定詞のみを目的語に取る動詞（want / hope / wish / decide / plan + to 動詞）
want to be〜：〜になりたい（職業や状態を表す表現に頻出）

【入試頻出】
・She hopes to become a pharmacist.
・He decided to work abroad in the future.
・My brother plans to open his own shop.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  ( ) with your hands is one of the best parts of being a carpenter.',
    choices: ['① Work', '② To work', '③ Working', '④ Worked'],
    answer: '③ Working',
    hint: '文の主語になれる形（動名詞）を選ぶ。',
    explanation: `【出題意図】
動名詞が文の主語になれることを問う問題。動名詞と原形・過去分詞の識別が目標。

【解説】
この文は「Working with your hands（自分の手で作業すること）」が主語で、「is one of the best parts」が述語の文。動名詞は主語になれるが、動詞の原形や過去分詞は主語になれない。
・① Work → 原形（主語にはなれない）
・② To work → 不定詞も主語になれるが、後ろの with your hands との自然な流れは動名詞の方が一般的
・③ Working → 動名詞（✓）文の主語
・④ Worked → 過去形・過去分詞（主語になれない）

日本語訳：「自分の手で作業することは、大工であることの最高の部分の一つだ。」

【文法ポイント】
動名詞は文の主語・目的語・補語になれる：Working hard is important.（主語）

【入試頻出】
・Helping others is a big part of being a nurse.
・Speaking in public was difficult for the new employee.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo8_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。  She has been interested ( ) becoming a vet since she was a little girl.',
    choices: ['① at', '② with', '③ in', '④ about'],
    answer: '③ in',
    hint: 'be interested の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be interested in〜（〜に興味がある）の前置詞の用法を問う問題。

【解説】
be interested in〜 は「〜に興味がある」という意味のイディオム。前置詞 in が固定。
・① at → be good at〜 に使う
・② with → be pleased with〜 などに使う
・③ in → be interested in〜（✓）
・④ about → be worried about〜 などに使う

日本語訳：「彼女は幼い頃から獣医になることに興味を持っている。」

【文法ポイント】
前置詞を固定する重要熟語：be interested in〜（興味がある）、be good at〜（得意）、be afraid of〜（恐れる）、be proud of〜（誇りに思う）

【入試頻出】
・He is interested in working as a designer.
・Many students are interested in this career day event.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Ms. Tanaka is in charge ( ) training new staff members at the hospital.',
    choices: ['① of', '② for', '③ with', '④ to'],
    answer: '① of',
    hint: 'in charge of〜 で「〜を担当している」という熟語。',
    explanation: `【出題意図】
熟語 in charge of〜（〜を担当している、〜の責任者である）の前置詞を問う問題。

【解説】
in charge of〜 は「〜を担当している、〜の責任を持つ」という重要イディオム。前置詞 of が固定。
・① of → in charge of〜（✓）
・② for → in charge for は存在しない
・③ with → in charge with は存在しない
・④ to → in charge to は存在しない

日本語訳：「田中さんは病院で新人スタッフの研修を担当している。」

【文法ポイント】
in charge of〜：〜を担当している、〜の責任者である
関連表現：be responsible for〜（〜に責任がある）も同様の意味で使われる。

【入試頻出】
・He is in charge of the sales department.
・Who is in charge of this project?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  You can always count ( ) your mentor for advice when you have a problem at work.',
    choices: ['① on', '② for', '③ with', '④ of'],
    answer: '① on',
    hint: 'count on〜 は「〜を頼りにする」という意味の熟語。',
    explanation: `【出題意図】
句動詞 count on〜（〜を頼りにする、〜を当てにする）の用法を問う問題。

【解説】
count on〜 は「〜を頼る、〜を当てにする」という意味の重要熟語。
・① on → count on〜（✓）
・② for → count for は「価値がある」という別の意味になり文脈に合わない
・③ with → count with は存在しない
・④ of → count of は存在しない

日本語訳：「仕事で問題があるとき、あなたはいつでもメンターを頼りにすることができる。」

【文法ポイント】
count on〜：〜を頼りにする（= rely on〜、depend on〜）
似た意味の熟語：rely on〜、depend on〜、turn to〜（〜に頼る）

【入試頻出】
・You can rely on your colleagues when you need help.
・She always turns to her supervisor for advice.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  You should ( ) for the summer internship program before the deadline.',
    choices: ['① apply', '② ask', '③ look', '④ decide'],
    answer: '① apply',
    hint: '「（求人・プログラムなど）に応募する」という意味の動詞を選ぶ。',
    explanation: `【出題意図】
熟語 apply for〜（〜に応募する）の用法を問う問題。似た意味の動詞との区別が目標。

【解説】
apply for〜 は「（仕事・プログラムなど）に応募する」という意味の重要表現。
・① apply → apply for〜（✓）応募する
・② ask → ask for〜 は「〜を求める」という別の意味
・③ look → look for〜 は「〜を探す」という別の意味
・④ decide → decide の後ろは通常 to do や on〜

日本語訳：「締め切りまでに夏のインターンシッププログラムに応募したほうがいい。」

【文法ポイント】
apply for〜：〜に応募する（仕事・学校・許可証など）
関連語：applicant（応募者）、application form（応募用紙）、apply to〜（〜に当てはまる、〜校に出願する）

【入試頻出】
・She applied for a job at the city library.
・Many students apply to this university every year.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  His parents are very proud ( ) him for becoming a doctor.',
    choices: ['① of', '② at', '③ with', '④ for'],
    answer: '① of',
    hint: 'be proud of〜 で「〜を誇りに思う」という熟語。',
    explanation: `【出題意図】
熟語 be proud of〜（〜を誇りに思う）の前置詞を問う問題。

【解説】
be proud of〜 は「〜を誇りに思う」という意味のイディオム。前置詞 of が固定。
・① of → be proud of〜（✓）
・② at → be proud at は存在しない
・③ with → be proud with は存在しない
・④ for → be proud for は存在しない

日本語訳：「彼の両親は、彼が医者になったことをとても誇りに思っている。」

【文法ポイント】
be proud of〜：〜を誇りに思う
似た形の熟語：be famous for〜（〜で有名）、be known for〜（〜で知られる）と混同しないように注意。

【入試頻出】
・She is proud of her work as a nurse.
・We are proud of our hometown.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Her new job is quite similar ( ) her old one in many ways.',
    choices: ['① to', '② with', '③ as', '④ from'],
    answer: '① to',
    hint: 'be similar to〜 で「〜に似ている」という熟語。',
    explanation: `【出題意図】
熟語 be similar to〜（〜に似ている）の前置詞を問う問題。be different from〜 との対比も確認する。

【解説】
be similar to〜 は「〜に似ている」という意味のイディオム。前置詞 to が固定。
・① to → be similar to〜（✓）
・② with → be similar with は存在しない
・③ as → be similar as は存在しない
・④ from → be different from〜 に使う前置詞であり、similar には使わない

日本語訳：「彼女の新しい仕事は、多くの点で前の仕事とよく似ている。」

【文法ポイント】
「同じ・異なる・似ている」の前置詞：be similar to〜（似ている）、be different from〜（異なる）、be the same as〜（同じだ）

【入試頻出】
・This job is similar to the one I had before.
・Her opinion is different from mine.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This small town is famous ( ) producing skilled carpenters.',
    choices: ['① for', '② of', '③ with', '④ at'],
    answer: '① for',
    hint: 'be famous for〜 で「〜で有名だ」という熟語。',
    explanation: `【出題意図】
熟語 be famous for〜（〜で有名だ）の前置詞を問う問題。

【解説】
be famous for〜 は「〜で有名だ」という意味のイディオム。前置詞 for が固定。
・① for → be famous for〜（✓）
・② of → be famous of は存在しない
・③ with → be famous with は存在しない
・④ at → be famous at は存在しない

日本語訳：「この小さな町は、腕の良い大工を輩出することで有名だ。」

【文法ポイント】
be famous for〜：〜で有名だ（理由・特徴を表す for）
関連表現：be known for〜（〜で知られている）もほぼ同じ意味で使われる。

【入試頻出】
・This factory is famous for making high-quality furniture.
・Kyoto is known for its traditional crafts.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Don\'t ( ) up on your dream of becoming a pilot, even if it seems difficult now.',
    choices: ['① give', '② take', '③ look', '④ get'],
    answer: '① give',
    hint: 'give up on〜 は「〜を諦める」という熟語。',
    explanation: `【出題意図】
熟語 give up on〜（〜を諦める）の用法を問う問題。似た形の句動詞との区別。

【解説】
give up on〜 は「（夢・人など）を諦める」という意味の重要熟語。
・① give → give up on〜（✓）諦める
・② take → take up〜 は「〜を始める」という別の意味
・③ look → look up〜 は「〜を調べる」という別の意味
・④ get → get up は「起きる」という別の意味

日本語訳：「今は難しく思えても、パイロットになるという夢を諦めないで。」

【文法ポイント】
give up〜／give up on〜：〜を諦める、断念する
give up + 動名詞：give up smoking（喫煙をやめる）
give up on + 人・夢：give up on your dream（夢を諦める）

【入試頻出】
・Never give up on your goals.
・He didn't give up even after he failed the exam once.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo8_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The woman ( ) is giving a speech about her career today is a famous engineer.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation: `【出題意図】
関係代名詞の選択（who / which / whom / whose）を問う問題。先行詞が人か物か、節内の役割の識別が目標。

【解説】
先行詞は「The woman（女性）」= 人。関係代名詞節内で「is giving a speech（スピーチをしている）」の主語の役割を果たしている。
・① who → 先行詞が人・主格（✓）
・② which → 先行詞が物や動物
・③ whom → 先行詞が人・目的格
・④ whose → 先行詞が人または物・所有格

日本語訳：「今日、自分のキャリアについてスピーチをしているその女性は有名なエンジニアです。」

【文法ポイント】
関係代名詞まとめ：人（主格who・目的格whom・所有格whose）、物（主格which・目的格which・所有格whose）。that は who / which の代わりに使えるが whose の代わりにはならない。

【入試頻出】
・The man who runs this shop used to be a chef.
・The student who won the speech contest wants to be a lawyer.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This is the job ( ) I have always wanted to do since I was a child.',
    choices: ['① who', '② which', '③ whom', '④ where'],
    answer: '② which',
    hint: '先行詞は「物・こと（job）」。関係代名詞節内で wanted の目的語になっている。',
    explanation: `【出題意図】
関係代名詞 which（先行詞が物・目的格）の用法を問う問題。that との言い換えも理解する。

【解説】
先行詞は「the job（仕事）」= 物・こと。関係代名詞節内で I have wanted to do ( )（私がずっとしたかった）の目的語になっている。
・① who → 先行詞が人のとき
・② which → 先行詞が物・目的格（✓）
・③ whom → 先行詞が人・目的格
・④ where → 関係副詞（場所を表す先行詞に使う）

which は省略可（that に置き換え可）：This is the job (that) I have always wanted to do.

日本語訳：「これは私が子どものころからずっとやりたかった仕事です。」

【文法ポイント】
目的格の関係代名詞は省略可能。先行詞 + 関係代名詞（目的格）+ 主語 + 動詞〜

【入試頻出】
・That is the career (which) she chose after graduation.
・This is the skill (that) every worker needs today.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I want to work for a company ( ) I can use my English every day.',
    choices: ['① which', '② who', '③ where', '④ when'],
    answer: '③ where',
    hint: '先行詞は「場所（company）」で、関係副詞を使う。',
    explanation: `【出題意図】
関係副詞 where（先行詞が場所）の用法を問う問題。関係代名詞との区別が目標。

【解説】
先行詞は「a company（会社）」= 場所。節内では「I can use my English every day at the company」の前置詞 at の部分が関係副詞 where に変わった構造。
・① which → 物に使う関係代名詞（前置詞が必要）
・② who → 人に使う
・③ where → 場所を先行詞にとる関係副詞（✓）
・④ when → 時を先行詞にとる関係副詞

日本語訳：「私は毎日英語を使える会社で働きたい。」

【文法ポイント】
関係副詞まとめ：where（場所）、when（時）、why（理由）
company / office / factory などの「働く場所」を先行詞にとることが多い。

【入試頻出】
・She wants to work at a hospital where she can help sick children.
・He found a workplace where everyone respects each other.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_24',
    subject: 'eigo',
    question: '次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI have a classmate.\nHer mother runs a flower shop in our neighborhood.',
    answer: 'I have a classmate whose mother runs a flower shop in our neighborhood.',
    hint: '2つの文をつなぐとき、Her（彼女の）を所有格の関係代名詞 whose に変える。',
    explanation: `【出題意図】
所有格の関係代名詞 whose を使って2文を1文に結合する問題。

【解説】
「I have a classmate.」と「Her mother runs a flower shop〜」の Her は a classmate を指している。この「Her（クラスメートの）」という所有の関係を表すのが関係代名詞の所有格 whose。

変換の手順：
1. 先行詞を特定：a classmate（人）
2. Her（所有格）→ whose に置き換える
3. whose を先行詞の直後に置く
→ I have a classmate whose mother runs a flower shop in our neighborhood.

日本語訳：「私には、お母さんが近所で花屋を営んでいるクラスメートがいる。」

【文法ポイント】
whose の使い方：先行詞（人・物）の所有格を表す。whose 節の構造：先行詞 + whose + 名詞 + 動詞〜

【入試頻出】
・He is a doctor whose patients trust him completely.
・She works with a colleague whose father was also an engineer.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_25',
    subject: 'eigo',
    question: '次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：What do you want to be in the future?\n「あなたが将来何になりたいか教えてもらえますか？」',
    answer: 'Can you tell me what you want to be in the future?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、do は消える。',
    explanation: `【出題意図】
間接疑問文（疑問詞 + 主語 + 動詞の語順）への書き換えを問う問題。語順の変化が最大のポイント。

【解説】
直接疑問文「What do you want to be?」を間接疑問文にする手順：
1. 疑問詞 What はそのまま使う
2. 疑問詞の後ろは「主語 + 動詞」の平叙文語順に変える
3. do は消える

× Can you tell me what do you want to be in the future?（誤り）
○ Can you tell me what you want to be in the future?（正解）

日本語訳：「あなたが将来何になりたいか教えてもらえますか？」

【文法ポイント】
間接疑問文の語順：疑問詞 + 主語 + 動詞〜（平叙文語順）

【入試頻出】
・Do you know what job she is interested in?
・I wonder what kind of work suits me best.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) I can become a pilot in Japan?',
    choices: ['① where', '② how', '③ which', '④ why'],
    answer: '② how',
    hint: '「どうすれば〜になれるか」という方法を尋ねる間接疑問文。',
    explanation: `【出題意図】
間接疑問文で適切な疑問詞を文脈から選ぶ問題。疑問詞の意味の使い分けが目標。

【解説】
「Could you tell me ( ) I can become a pilot?」= 「どうすればパイロットになれるか教えてもらえますか？」方法・手段を尋ねるので how を使う。
・① where → 場所を尋ねる
・② how → 方法・手段を尋ねる（✓）
・③ which → 選択を尋ねる
・④ why → 理由を尋ねる

日本語訳：「日本でどうすればパイロットになれるか教えていただけますか？」

【文法ポイント】
間接疑問文の疑問詞の使い分け：when（時）、where（場所）、what（物・事）、why（理由）、how（方法・程度）

【入試頻出】
・Can you tell me how to apply for this job?
・Please tell me how I can improve my English skills.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo8_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ do / you / know / what / job / she / wants / to / do ）\n「彼女がどんな仕事をしたいか知っていますか？」',
    answer: 'Do you know what job she wants to do?',
    hint: '間接疑問文：疑問詞（what job）の後ろは主語＋動詞の語順。全体は疑問文なので Do で始める。',
    explanation: `【出題意図】
間接疑問文の語順整序問題。「疑問詞 + 主語 + 動詞」という間接疑問の語順と、全体が疑問文になることを同時に確認する。

【解説】
ポイントは2つ：
1. 全体が「Do you know〜?」という疑問文
2. know の目的語（間接疑問）は「what job she wants to do」（平叙文語順）

× Do you know what job does she want to do?（誤り）
○ Do you know what job she wants to do?（正解）

日本語訳：「彼女がどんな仕事をしたいか知っていますか？」

【文法ポイント】
間接疑問の語順：疑問詞 + 主語 + 動詞。全体が疑問文の場合：Do/Can + 主語 + 動詞 + 疑問詞 + 主語 + 動詞〜?

【入試頻出】
・Do you know what she wants to be?
・Can you tell me what kind of job suits me?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ have / been / working / here / for / I / since / three years ）\n「私はここで3年間働いている。」',
    answer: 'I have been working here for three years.',
    hint: '「3年間ずっと〜している」は現在完了進行形。for（〜の間）か since（〜以来）かを判断する。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、for / since の使い分けを問う問題。不要語の識別も含む。

【解説】
「3年間」は期間（duration）なので for を使う。since は起点に使う。
不要語：since（× I have been working here since three years → since は不可）

正しい語順：
I have been working here for three years.（現在完了進行形 = have been + Ving）

日本語訳：「私はここで3年間働いている。」

【文法ポイント】
for + 期間（for three years）、since + 起点（since 2020）
現在完了進行形の構造：have/has + been + 動詞-ing（継続的な動作に使う）

【入試頻出】
・She has been teaching at this school for five years.
・They have been working on this project since last month.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / is / old / he / to / work / part-time ）\n「彼はアルバイトをするのに十分な年齢だ。」',
    answer: 'He is old enough to work part-time.',
    hint: '「〜するのに十分〜だ」は 形容詞 + enough + to 動詞 の語順。',
    explanation: `【出題意図】
「形容詞 + enough + to 動詞」の語順を問う整序問題。enough の位置が鍵。

【解説】
「〜するのに十分〜だ」は：主語 + be + 形容詞 + enough + to + 動詞原形
enough は形容詞の後ろに置く（× enough old は誤り）。

正しい語順：
He is old enough to work part-time.

日本語訳：「彼はアルバイトをするのに十分な年齢だ。」

【文法ポイント】
形容詞 + enough + to 動詞：「〜するのに十分〜だ」
too + 形容詞 + to 動詞：「〜すぎて〜できない」（enough と対で覚える）
例：He is too young to work full-time.（若すぎて正社員として働けない）

【入試頻出】
・She is experienced enough to lead the team.
・The intern is skilled enough to handle this task alone.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ gave / a / boss / promotion / him / his ）\n「彼の上司は彼に昇進を与えた。」',
    answer: 'His boss gave him a promotion.',
    hint: 'give + 人 + 物 の語順（第4文型 SVOO）を使う。',
    explanation: `【出題意図】
第4文型（SVOO：主語＋動詞＋間接目的語＋直接目的語）の語順を問う整序問題。give の用法も確認。

【解説】
give + 人 + 物 = 人に物を与える（第4文型）
His boss（S）+ gave（V）+ him（IO: 間接目的語）+ a promotion（DO: 直接目的語）

語順：His boss gave him a promotion.
第3文型への書き換え：His boss gave a promotion to him.（to を使う）

日本語訳：「彼の上司は彼に昇進を与えた。」

【文法ポイント】
第4文型（SVOO）の動詞：give / send / show / teach / tell + 人 + 物（間接目的語が to で書き換え可）
例：She gave me some useful advice. = She gave some useful advice to me.

【入試頻出】
・The manager showed her a new way of doing the job.
・He taught the new staff the basic rules.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ he / job / got / training / finishing / a / after / his ）\n「彼は研修を終えた後、仕事を得た。」',
    answer: 'He got a job after finishing his training.',
    hint: 'after の後には動名詞（〜ing）が来る。after + 動名詞 = 〜した後で。',
    explanation: `【出題意図】
前置詞 after + 動名詞 の用法と、語順整序を問う問題。

【解説】
前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜した後で」= after + 動名詞（〜ing）

正しい語順：
He got a job after finishing his training.

× after to finish（前置詞の後ろに不定詞は来ない）
○ after finishing（✓ 前置詞 + 動名詞）

日本語訳：「彼は研修を終えた後、仕事を得た。」

【文法ポイント】
前置詞 + 動名詞の頻出パターン：before + ing（〜する前に）、after + ing（〜した後で）、without + ing（〜せずに）

【入試頻出】
・She started her own business after working for a company for ten years.
・He felt confident after completing his internship.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ the / man / interviewed / who / I / is / the / manager ）\n「私が面接したその男性はマネージャーです。」',
    answer: 'The man who I interviewed is the manager.',
    hint: '関係代名詞 who を使って先行詞「the man」を修飾する節を作る。',
    explanation: `【出題意図】
関係代名詞 who（目的格）を使った語順整序問題。先行詞と関係代名詞節の位置関係が鍵。

【解説】
文の骨格：The man is the manager.（その男性はマネージャーだ）
修飾部：who I interviewed（私が面接した）

組み合わせ：
The man [who I interviewed] is the manager.

who はここでは目的格（interviewed の目的語）として使われている。
= The man (whom / that) I interviewed is the manager.（省略も可）

日本語訳：「私が面接したその男性はマネージャーです。」

【文法ポイント】
関係代名詞節の位置：先行詞の直後に置く。主節の動詞（is）は関係代名詞節の後に続く。

【入試頻出】
・The woman who(m) I met at the job fair works for a bank.
・The student who I trained last year is now a full-time teacher.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ this / is / for / easy / job / enough / beginners / to / learn ）\n「この仕事は初心者が習得できるほど簡単だ。」',
    answer: 'This job is easy enough for beginners to learn.',
    hint: '「〜が…するのに十分〜だ」は 形容詞 + enough + for + 人 + to 動詞 の形。',
    explanation: `【出題意図】
enough to 構文に「for + 人」が加わった形の語順を問う問題。「〜が…するほど十分〜だ」という表現の完全形を問う。

【解説】
構文：主語 + be + 形容詞 + enough + for + 人 + to + 動詞原形。「for + 人」は不定詞の意味上の主語を示す。

正しい語順：
This job is easy enough for beginners to learn.

日本語訳：「この仕事は初心者が習得できるほど簡単だ。」

【文法ポイント】
「形容詞 + enough + for + 人 + to + 動詞」構文：〜が…するのに十分〜だ
例：The task is simple enough for anyone to complete.

「too + 形容詞 + for + 人 + to + 動詞」との対比：The job is too complicated for a beginner to handle.（複雑すぎて初心者には扱えない）

【入試頻出】
・The manual is clear enough for new workers to follow.
・The exam is difficult enough for even experts to struggle with.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo8_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: We would like to offer you the position. Would you like to start next Monday? B: ( )',
    choices: ['① No, I don\'t.', '② Yes, I would like.', '③ Yes, I\'d be happy to.', '④ I like Mondays.'],
    answer: '③ Yes, I\'d be happy to.',
    hint: 'Would you like to〜? という申し出・誘いに自然に答える表現を選ぶ。',
    explanation: `【出題意図】
Would you like to〜?（申し出・誘い）への適切な応答を問う問題。就職面接・内定通知の場面での実用会話。

【解説】
Would you like to start〜? は「〜を始めませんか？」という丁寧な申し出。
・① No, I don't. → Would you like〜? への否定は No, thank you. が正しい
・② Yes, I would like. → like の後ろに目的語が必要
・③ Yes, I'd be happy to. → 正しい受け答え（✓）「喜んで」
・④ I like Mondays. → 質問とかみ合わない

日本語訳：
A：あなたにその職を提供したいと思います。来週の月曜日から始めていただけますか？
B：はい、喜んで始めさせていただきます。

【文法ポイント】
Would you like to〜?（誘い・提案）への肯定応答：I'd love to. / I'd be happy to. / Sure, I will.

【入試頻出】
・Would you like to join our team? — I'd love to.
・Would you like to visit our office tomorrow? — Yes, I'd be happy to.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: How long does it take to become a doctor in Japan? B: ( )',
    choices: ['① It\'s very expensive.', '② It usually takes about ten years.', '③ You should study science.', '④ Doctors are very busy.'],
    answer: '② It usually takes about ten years.',
    hint: 'How long does it take to〜? は所要時間を尋ねる表現。',
    explanation: `【出題意図】
「It takes + 時間 + to + 動詞」という所要時間を表す構文と、How long does it take to〜? への適切な応答を問う問題。

【解説】
How long does it take to〜? = 「〜するのにどのくらい時間がかかりますか？」
返答は「It takes + 時間」の形が正しい。
・① very expensive → 費用を答えている（×）
・② It usually takes about ten years. → 所要時間を答えている（✓）
・③ You should study science. → アドバイスであり質問に直接答えていない
・④ Doctors are very busy. → 無関係

日本語訳：
A：日本で医者になるにはどのくらいかかりますか？
B：普通は10年くらいかかります。

【文法ポイント】
所要時間の表現：It takes + 時間 + to + 動詞〜 = 〜するのに〜の時間がかかる

【入試頻出】
・How long does it take to become a licensed nurse?
・It takes about three years to qualify as a chef.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: I have a job interview tomorrow, but I\'m really nervous. B: ( ) You\'ve prepared for this for weeks.',
    choices: ['① Don\'t worry.', '② That\'s too bad.', '③ I\'m sorry to hear that.', '④ Never mind.'],
    answer: '① Don\'t worry.',
    hint: '後に続く「You\'ve prepared for this for weeks.（何週間も準備してきたじゃないか）」という励ましの言葉に合う返答を選ぶ。',
    explanation: `【出題意図】
励ましの表現と、会話の流れ・文脈から適切な応答を選ぶ問題。

【解説】
Aが「面接が不安だ」と言っているのに対し、Bは「You've prepared for this for weeks.（何週間も準備してきたじゃないか）」と励ましている。前置きとして最適なのは「Don't worry.（心配しないで）」。
・① Don't worry. → 心配しないで（励まし）（✓）
・② That's too bad. → それは残念だね（共感・慰め）
・③ I'm sorry to hear that. → それは残念です（同情。励ましとして繋がりが弱い）
・④ Never mind. → 気にしないで（軽い謝罪への返答）

日本語訳：
A：明日面接があるんだけど、本当に緊張しているんだ。
B：心配しないで。何週間も準備してきたじゃないか。

【文法ポイント】
励まし・応援の表現：Don't worry. / You can do it! / I'm sure you'll do well. / Good luck!

【入試頻出】
・Don't worry. You'll do great in the interview.
・I'm sure you'll get the job. Good luck!`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: May I ask you a question about the salary for this position? B: ( ) A: Thank you.',
    choices: ['① Sure, go ahead.', '② No, you may not.', '③ I don\'t have a salary.', '④ Yes, you may go.'],
    answer: '① Sure, go ahead.',
    hint: 'May I〜? は許可を求める表現。自然な許可の与え方を選ぶ。',
    explanation: `【出題意図】
May I〜?（許可を求める）への適切な返答を問う問題。実用的な会話表現の習得が目標。

【解説】
May I ask〜? = 「〜を尋ねてもいいですか？」という許可を求める丁寧な表現。直後に「Thank you.」とあるので、許可を与える返答が必要。
・① Sure, go ahead. → もちろん、どうぞ（✓）最も自然で丁寧な許可の表現
・② No, you may not. → 文法的には正しい拒否だがThank youと矛盾する
・③ I don't have a salary. → 質問とかみ合わない
・④ Yes, you may go. → go（行く）は ask（尋ねる）とは関係ない

日本語訳：
A：この職の給与について質問してもいいですか？
B：もちろん、どうぞ。
A：ありがとうございます。

【文法ポイント】
許可を求める表現：May I〜?（丁寧）、Can I〜?（やや砕けた）
許可を与える表現：Sure. / Of course. / Go ahead.

【入試頻出】
・May I ask about the working hours? — Sure, go ahead.
・Can I take notes during the interview? — Of course.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  I have never ( ) such an important decision at work before.',
    choices: ['① make', '② made', '③ making', '④ makes'],
    answer: '② made',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。make の過去分詞を選ぶ。',
    explanation: `【出題意図】
現在完了形（経験用法）の形と、make の活用（make-made-made）を正確に使えるかを問う問題。

【解説】
never は現在完了形の経験用法で「一度も〜したことがない」を表す。現在完了形：have/has + 過去分詞。make の活用：make（原形）→ made（過去形・過去分詞）
・① make → 原形（have の後ろに原形は来ない）
・② made → 過去分詞（✓）have made
・③ making → 現在分詞（have been making なら現在完了進行形だが文脈に合わない）
・④ makes → 3単現（have の後ろに来ない）

日本語訳：「私は職場でこれほど重要な決断をしたことは一度もない。」

【文法ポイント】
現在完了形（経験）の目印の語句：ever、never、before
不規則動詞の過去分詞（頻出）：make-made-made、take-took-taken、write-wrote-written

【入試頻出】
・Have you ever made a mistake like that at work?
・She has never made a presentation in English before.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  Our new employee orientation will be held ( ) Monday morning.',
    choices: ['① in', '② at', '③ on', '④ by'],
    answer: '③ on',
    hint: '曜日・特定の日には前置詞 on を使う。',
    explanation: `【出題意図】
時を表す前置詞（in / at / on）の使い分けを問う問題。入試最頻出文法の一つ。

【解説】
「Monday morning（月曜日の朝）」という特定の曜日には on を使う。
・① in → 月・年・季節・午前/午後の一般表現に使う
・② at → 時刻・特定の時点に使う
・③ on → 曜日・特定の日（✓）on Monday morning
・④ by → 期限（〜までに）

日本語訳：「新入社員オリエンテーションは月曜日の朝に開催される予定だ。」

【文法ポイント】
時を表す前置詞まとめ：at（時刻）、on（曜日・日付）、in（月・年・季節・時間帯）

【入試頻出】
・The training session starts at 9 a.m. on Friday.
・She joined the company in April.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  The manager asked me ( ) a report on the new project by Friday.',
    choices: ['① write', '② to write', '③ writing', '④ wrote'],
    answer: '② to write',
    hint: 'ask + 人 + to do（人に〜するよう頼む）という構文。',
    explanation: `【出題意図】
「ask + 人 + to + 動詞」という第5文型（SVOC）の用法を問う問題。

【解説】
ask + 人 + to do = 「人に〜するよう頼む」という重要構文。
・① write → 原形のみ（不可）
・② to write → ask + 人 + to do（✓）
・③ writing → ask + 人 + doing という形は存在しない
・④ wrote → 過去形（文法的に合わない）

日本語訳：「マネージャーは私に金曜日までに新しいプロジェクトの報告書を書くよう頼んだ。」

【文法ポイント】
「動詞 + 人 + to do」の構文：ask + 人 + to do（頼む）、tell + 人 + to do（言う）、want + 人 + to do（〜してほしい）

【入試頻出】
・She asked her colleague to help with the presentation.
・My boss told me to finish the task by noon.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  I think ( ) necessary to have some work experience before applying for this job.',
    choices: ['① this', '② that', '③ it', '④ what'],
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation: `【出題意図】
形式主語 it（仮の主語）を使った構文を問う問題。I think (that) it is〜 の形が正解。

【解説】
この文は「I think [that] it is necessary to have some work experience〜」という構造。it は to have some work experience（職務経験を持つこと）を指す形式主語（仮主語）。
・① this → I think this necessary to〜 は文法的に成立しない
・② that → I think that necessary to〜 も不自然
・③ it → 形式主語の it（✓）
・④ what → I think what necessary to〜 は成立しない

日本語訳：「私はこの仕事に応募する前に、いくらかの職務経験を持つことが必要だと思う。」

【文法ポイント】
形式主語（仮主語）it の構文：It is + 形容詞 + to + 動詞〜 = 〜することは（形容詞）だ

【入試頻出】
・I think it is important to gain experience before choosing a career.
・He found it difficult to balance work and study.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo8_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今まで外国で働いたことがありません。」',
    answer: 'I have never worked abroad. / I have never worked in a foreign country.',
    hint: '「〜したことがない」は現在完了の経験用法（have never + 過去分詞）。「外国で」は abroad または in a foreign country。',
    explanation: `【出題意図】
現在完了形（経験）の否定文を、規則動詞（worked）を使って正確に組み立てられるかを問う問題。

【解説】
「〜したことがない」= have/has never + 過去分詞（現在完了・経験の否定）
「外国で働く」= work abroad または work in a foreign country

完成した文：
I have never worked abroad. または I have never worked in a foreign country.

注意：abroad は副詞なので前置詞は不要（× work in abroad は誤り）。

【文法ポイント】
abroad：副詞「海外で・外国へ」（前置詞不要）
現在完了形の経験用法の目印：never、ever、before

【入試頻出】
・Have you ever worked part-time before?
・She has never lived in a foreign country.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「彼が書いたそのレポートを見せてもらえませんか？」',
    answer: 'Could you show me the report that he wrote? / Could you show me the report he wrote?',
    hint: '「見せてもらえませんか」は Could you show me〜?、「彼が書いた」は関係代名詞（that / which）で修飾。',
    explanation: `【出題意図】
依頼表現（Could you〜?）と関係代名詞（目的格）を組み合わせた英作文。

【解説】
2つのポイント：
1. 丁寧な依頼：Could you show me〜? = 「〜を見せていただけますか？」（show + 人 + 物）
2. 「彼が書いた（レポート）」= the report that/which he wrote（関係代名詞・目的格、省略可）

組み合わせ：
Could you show me the report (that) he wrote?

別解：Could you let me see the report he wrote?

【文法ポイント】
Could you〜? = Can you〜? の丁寧版
show + 人 + 物：人に物を見せる（第4文型 SVOO）
the report (that) he wrote：関係代名詞（目的格）he wrote the report の構造

【入試頻出】
・Could you show me the presentation you made?
・This is the plan (that) she wrote for the new project.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私が子どもだったころ、この町にはたくさんの工場がありました。」',
    answer: 'When I was a child, there were many factories in this town. / There were a lot of factories in this town when I was a child.',
    hint: '「〜があった」は there was/were〜 の構文。子どものころ = when I was a child。複数なので were。',
    explanation: `【出題意図】
there is/are 構文の過去形と、when 節（〜のとき）を組み合わせた英作文。

【解説】
ポイント：
1. 「子どものころ」= when I was a child
2. 「〜があった」= there were〜（factories は複数なので were）
3. 「この町に」= in this town

組み合わせ：
When I was a child, there were many factories in this town.
または
There were a lot of factories in this town when I was a child.

注意：× There was many factories（factories は複数 → were）

【文法ポイント】
there is/are 構文：「〜がある/いる」。過去：There was + 単数名詞 / There were + 複数名詞

【入試頻出】
・When I was young, there were fewer job opportunities in this area.
・There have been many changes in this industry over the years.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私があなたなら、その仕事の申し出を受け入れるでしょう。」',
    answer: 'If I were you, I would accept that job offer.',
    hint: '仮定法過去（現実とは逆の仮定）：If + 主語 + were, 主語 + would + 動詞原形。I were が正しい。',
    explanation: `【出題意図】
仮定法過去（If I were you, I would〜）の形を問う英作文。入試英作文最頻出構文の一つ。

【解説】
「もし私があなたならば」= 現実と異なる仮定（実際には私はあなたではない）→ 仮定法過去を使う。
仮定法過去の形：If + 主語 + 動詞の過去形（be動詞は were）, 主語 + would + 動詞原形

重要：If I were you〜（× If I was you は入試では不正解とされることが多い）

「受け入れる」= accept

完成した文：
If I were you, I would accept that job offer.

【文法ポイント】
仮定法過去：現在または未来の事実に反する仮定。If + 主語 + 過去形（were）, 主語 + would + 動詞原形

【入試頻出】
・If I were you, I would take the internship.
・If she had more experience, she would get the promotion.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「この仕事は経験だけでなく、忍耐力も必要とします。」',
    answer: 'This job requires not only experience but also patience.',
    hint: '「〜だけでなく…も」は not only A but also B の構文。',
    explanation: `【出題意図】
相関接続詞 not only A but also B（〜だけでなく…も）の構文を使った英作文。

【解説】
「〜だけでなく…も」= not only A but also B
「必要とする」= require

組み合わせ：
This job requires not only experience but also patience.

注意：not only A but also B の A と B は文法的に同じ形（並列）である必要がある（experience と patience はどちらも名詞）。

【文法ポイント】
相関接続詞：not only A but also B（AだけでなくBも）、both A and B（AもBも）

【入試頻出】
・This work requires not only skill but also patience.
・She is not only talented but also hard-working.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo8_47',
    subject: 'eigo',
    passage: `Every year, our school holds a "Work Experience Week" for third-year students. Last month, I visited a small bakery near the station for three days. On the first day, I was surprised at how early the work started. The owner told me that the dough had to rest overnight, so he arrived at four in the morning to begin baking. I learned how to shape bread and clean the shop. It was harder than I had expected, but I felt proud when customers said the bread I had made looked delicious. This experience taught me that every job requires effort that we cannot see from the outside.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っているものを1つ選べ。',
    choices: ['① 筆者は1週間パン屋で働いた。', '② パン屋の店主は毎朝4時に来て仕事を始めていた。', '③ 筆者はパンを作る作業を任されなかった。', '④ 筆者はこの職業体験を楽しく感じなかった。'],
    answer: '② パン屋の店主は毎朝4時に来て仕事を始めていた。',
    hint: '本文中の "he arrived at four in the morning to begin baking" という一文を探す。',
    explanation: `【出題意図】
英文読解で内容一致問題を解く力を問う問題。細部の読み取りと選択肢との照合が目標。

【解説】
各選択肢を本文と照合する：
① 「1週間」→ 本文には "for three days（3日間）" とあるので×
② 「毎朝4時に来て仕事を始めていた」→ 本文に "he arrived at four in the morning to begin baking" とある（✓）
③ 「パンを作る作業を任されなかった」→ 本文には "I learned how to shape bread（パンの成形の仕方を学んだ）" とあるので×
④ 「楽しく感じなかった」→ 本文には "I felt proud（誇らしく感じた）" とあり、否定的な内容ではないので×

【文法ポイント】
内容一致問題のアプローチ：選択肢を先に読んでキーワードを把握し、本文で該当箇所を探して数値・語句を慎重に比較する。

【入試頻出】
内容一致問題では、本文中の数値（期間・時刻など）が選択肢で書き換えられていないか特に注意して確認する。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_48',
    subject: 'eigo',
    passage: `Many junior high school students in Japan feel unsure about what career to choose. To help with this, some schools invite people from different jobs to talk with students. Last week, a nurse, a computer programmer, and a farmer visited our class and shared their stories. They talked about why they chose their jobs and what challenges they faced. After listening to them, many of my classmates said this experience changed the way they thought about their future. Before, some students believed there were only a few "good" jobs, but now they understand that every job has its own value and requires special skills.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文中の下線部 "this experience" が指す内容として最も適切なものを選べ。',
    choices: ['① クラス全員で農業体験をしたこと', '② 看護師・プログラマー・農家の話をクラスで聞いたこと', '③ 生徒たちがそれぞれの将来の夢について発表したこと', '④ 学校が新しい職業体験プログラムを企画したこと'],
    answer: '② 看護師・プログラマー・農家の話をクラスで聞いたこと',
    hint: '"this experience" は直前の文で述べられた出来事を指す。',
    explanation: `【出題意図】
指示語（this experience）が何を指すかを本文から特定する指示語問題。入試長文読解の頻出問題形式。

【解説】
指示語の前後を確認する：
"this experience" の直前には："a nurse, a computer programmer, and a farmer visited our class and shared their stories.（看護師・プログラマー・農家がクラスを訪れ、体験を語った）" とある。

→ ② 「看護師・プログラマー・農家の話をクラスで聞いたこと」が正解。

① 農業体験：本文に記述なし（×）
③ 生徒の発表：本文に記述なし（×）
④ 学校の新プログラム企画：本文にそのような記述はない（×）

【文法ポイント】
指示語問題のアプローチ：指示語（this / these / it）が出たら直前の文を確認し、単数・複数、出来事か物かを見極める。

【入試頻出】
・「this が指すものを選べ」→ 直前の内容（出来事・経験）を探す
・段落中の this は直前の1〜2文の内容をまとめることが多い`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_49',
    subject: 'eigo',
    passage: `Many high school students in Japan have part-time jobs, such as working at a convenience store or a restaurant. Some parents worry that part-time jobs take too much time away from studying. However, many students say that these jobs teach them things that cannot be learned from textbooks. For example, they learn how to talk politely to customers and how to work as a team with co-workers who are older than them. They also learn to manage their own money for the first time. Of course, students need to balance work and study carefully, but a part-time job can be a valuable step toward becoming a responsible adult.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の主題として最も適切なものを選べ。',
    choices: ['① コンビニでのアルバイトの具体的な業務内容', '② アルバイトが勉強に与える悪影響についての警告', '③ アルバイトを通じて生徒が学べることとその価値', '④ 生徒がアルバイトで稼ぐお金の平均額'],
    answer: '③ アルバイトを通じて生徒が学べることとその価値',
    hint: '本文全体の流れ（心配の声→実際に学べること→結論）を把握して、何が最も中心的に述べられているかを考える。',
    explanation: `【出題意図】
長文全体を通読して主題（テーマ）を把握する力を問う問題。細部ではなく文章全体の「言いたいこと」を読み取る。

【解説】
本文の構造：
1. 導入：多くの高校生がアルバイトをしている
2. 懸念：一部の親は勉強時間が減ることを心配している
3. 本論：しかし、教科書では学べないこと（丁寧な接客、年上との協力、お金の管理）を学べる
4. 結論：バランスは大切だが、アルバイトは責任ある大人になるための価値ある一歩

全体を通して「アルバイトを通じて学べることとその価値」が中心テーマ → ③が正解

① 具体的な業務内容：本文の一例にすぎない（×）
② 悪影響の警告：本文は懸念を紹介した上で反論している（×）
④ 平均額：本文に記述なし（×）

【文法ポイント】
主題問題（main idea）のアプローチ：冒頭と末尾を特に注意深く読み、繰り返し登場するキーワード（learn, part-time job）を見つける。

【入試頻出】
・主題問題では「一番多く書かれていること」を選ぶ
・本文の一部しか触れていない選択肢は不正解になることが多い`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo8_50',
    subject: 'eigo',
    passage: `Artificial intelligence is expected to change many jobs in the near future. Some experts say that certain jobs, such as simple data entry, may disappear because computers can do them faster and more accurately than humans. On the other hand, new kinds of jobs are also being created, especially in fields related to technology and creativity. Experts agree that it is impossible to predict exactly which jobs will exist in twenty years. Because of this, they suggest that students should not focus only on learning specific skills for one job. Instead, they should develop the ability to learn new things quickly, since this ability will remain useful no matter how jobs change.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っていないものを1つ選べ。',
    choices: ['① 単純なデータ入力のような仕事は将来なくなる可能性がある。', '② 技術や創造性に関連する新しい仕事も生まれつつある。', '③ 専門家は20年後にどんな仕事が存在するか正確に予測できると述べている。', '④ 専門家は新しいことを素早く学ぶ力を身につけるべきだと提案している。'],
    answer: '③ 専門家は20年後にどんな仕事が存在するか正確に予測できると述べている。',
    hint: '本文では「20年後にどんな仕事が存在するか正確に予測することは不可能だ」と専門家が述べている。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」という誤文識別型の読解問題。細部の読み取りと選択肢の正確な解釈が必要。

【解説】
各選択肢を本文と照合する：
① 「単純なデータ入力のような仕事は将来なくなる可能性がある」→ 本文に "certain jobs, such as simple data entry, may disappear" とある（✓ 一致）
② 「技術や創造性に関連する新しい仕事も生まれつつある」→ 本文に "new kinds of jobs are also being created, especially in fields related to technology and creativity" とある（✓ 一致）
③ 「専門家は20年後にどんな仕事が存在するか正確に予測できると述べている」→ 本文には "it is impossible to predict exactly which jobs will exist in twenty years"（正確に予測することは不可能だ）とあり、真逆の内容（× 不一致）
④ 「新しいことを素早く学ぶ力を身につけるべきだと提案している」→ 本文に "they should develop the ability to learn new things quickly" とある（✓ 一致）

正解：③

【文法ポイント】
「合っていないものを選べ」問題のアプローチ：本文の否定表現（impossible）と選択肢の肯定表現（can predict）が逆転していないか注意する。

【入試頻出】
・本文の "impossible" "cannot" などの否定語と選択肢の言い換えの対応関係を丁寧に確認する
・「専門家によると」という選択肢は、本文の専門家の発言内容と正確に一致するか照合する`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
