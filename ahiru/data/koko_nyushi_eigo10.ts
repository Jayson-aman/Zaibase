import type { Question } from './questions';

export const kokoNyushiEigo10: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nThe volunteers ( ) food to homeless people for over ten years.\n① serve  ② served  ③ have served  ④ have been serving',
    answer: '④ have been serving',
    hint: '「10年以上ずっと〜している」という継続を表す時制を選ぶ。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の用法を問う問題。継続動作か単なる完了かの区別が目標。

【解説】
"for over ten years" は継続を示す語句。ボランティアが「今も続けて」食事を提供している動作の継続を強調するには現在完了進行形が適切。
・① serve → 現在形（習慣ではあるが継続の強調がない）
・② served → 過去形（今も続くニュアンスが出ない）
・③ have served → 現在完了形（完了・経験、継続の強調が弱い）
・④ have been serving → 現在完了進行形（✓）

日本語訳：「そのボランティアたちは10年以上にわたってホームレスの人々に食事を提供し続けている。」

【文法ポイント】
have/has been + Ving ＝過去から現在まで続く動作の継続を強調する。for〜（〜の間）、since〜（〜以来）とセットで頻出。

【入試頻出】
・She has been helping at the shelter since she was a student.
・They have been collecting donations for the past month.
・He has been working as a volunteer for five years.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nWe ( ) help our neighbors when they are in trouble.\n① must not  ② should  ③ can\'t  ④ won\'t',
    answer: '② should',
    hint: '「困っているときは助けるべきだ」という一般的な義務・道徳的な推奨を表す助動詞を選ぶ。',
    explanation: `【出題意図】
助動詞shouldの「〜すべきだ」という道徳的義務・推奨の用法を問う問題。

【解説】
文脈は近所の人が困っているときの一般的なアドバイス・社会的責任について。should＝「〜すべきだ」が最も自然。
・① must not → 「〜してはいけない」で逆の意味
・② should → 道徳的な推奨（✓）
・③ can't → 「〜できない」で文脈に合わない
・④ won't → 「〜しないだろう」意志未来で不適切

日本語訳：「私たちは近所の人が困っているときは助けるべきだ。」

【文法ポイント】
should＝道徳的義務・アドバイス。must＝強い義務・規則。ought toはshouldとほぼ同義でやや書き言葉的。

【入試頻出】
・You should recycle more to protect the environment.
・We ought to support people in need.
・Students should take part in community activities.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nThis community center ( ) by local volunteers five years ago.\n① built  ② was built  ③ has built  ④ is building',
    answer: '② was built',
    hint: '「地域センターが建てられた」という過去の受動態を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の過去形を正確に使えるかを問う問題。

【解説】
主語This community centerは「建てる」側ではなく「建てられる」側。「five years ago」は明確な過去を示すので過去形の受動態was builtが適切。
・① built → 能動態過去形（主語と動詞の関係が逆）
・② was built → 受動態・過去形（✓）
・③ has built → 現在完了・能動態（agoと合わない）
・④ is building → 現在進行形・能動態（意味が通らない）

日本語訳：「この地域センターは5年前に地元のボランティアによって建てられた。」

【文法ポイント】
受動態過去形＝was/were＋過去分詞。by〜で動作主を示す。

【入試頻出】
・The park was cleaned by students last weekend.
・This bridge was built by volunteers in 2019.
・The old library was repaired by the town.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nMore people are joining volunteer activities ( ) five years ago.\n① as  ② than  ③ that  ④ so',
    answer: '② than',
    hint: '比較級 more people の後に続く語を考える。',
    explanation: `【出題意図】
比較級moreとセットで使うthanの用法を問う問題。

【解説】
More people（比較級）がある文ではthanで比較対象を示す。「5年前と比べて」という意味。
・① as → 原級比較（as many as など）に使う
・② than → 比較級とセットで使う（✓）
・③ that → 関係代名詞・接続詞（比較には不要）
・④ so → 接続詞（意味が通らない）

日本語訳：「5年前よりも多くの人がボランティア活動に参加している。」

【文法ポイント】
比較級＋than〜＝〜より…。more＋名詞＋thanで数量の比較も可能。

【入試頻出】
・More students are interested in social issues than before.
・Fewer people throw away plastic bottles than ten years ago.
・This town has more volunteers than that one.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThey held a charity event ( ) money for children in need.\n① raise  ② raising  ③ to raise  ④ raised',
    answer: '③ to raise',
    hint: '「お金を集めるために」という目的を表す不定詞を選ぶ。',
    explanation: `【出題意図】
不定詞の副詞的用法（目的）を問う問題。

【解説】
「チャリティーイベントを開いた」目的が「お金を集めるため」。不定詞to＋動詞原形で目的を表す。
・① raise → 原形単独（目的を表せない）
・② raising → 動名詞（目的の副詞用法にはならない）
・③ to raise → 不定詞・副詞的用法（✓）
・④ raised → 過去分詞（意味が通らない）

日本語訳：「彼らは支援を必要とする子どもたちのためにお金を集めるためにチャリティーイベントを開いた。」

【文法ポイント】
不定詞の副詞的用法（目的）＝「〜するために」。in order to〜も同義でより明確。

【入試頻出】
・We collected clothes to help refugees.
・She volunteers every weekend to support elderly people.
・The city built a shelter to protect people from disasters.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nWe should avoid ( ) too much food, because many people around the world don\'t have enough to eat.\n① waste  ② to waste  ③ wasting  ④ wasted',
    answer: '③ wasting',
    hint: 'avoidの後ろに来る動詞の形（動名詞）を選ぶ。',
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞avoidの用法を問う問題。

【解説】
avoid＋動名詞＝「〜するのを避ける」。avoidは不定詞を目的語に取らない。
・① waste → 原形（avoidの後には使えない）
・② to waste → 不定詞（avoidは不定詞をとらない）
・③ wasting → 動名詞（✓）
・④ wasted → 過去形（目的語になれない）

日本語訳：「世界中の多くの人が十分な食べ物を持っていないのだから、私たちは食べ物を無駄にしすぎるのを避けるべきだ。」

【文法ポイント】
動名詞のみを目的語にとる動詞：avoid, enjoy, finish, stop, mind, give up, practice。

【入試頻出】
・We should avoid throwing away useful things.
・He finished helping the elderly woman with her bags.
・They practice sorting garbage every day at school.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nBy the end of this year, this NPO ( ) more than one thousand families.\n① will help  ② has helped  ③ will have helped  ④ helped',
    answer: '③ will have helped',
    hint: '「今年の終わりまでには」という未来の時点での完了を表す時制を選ぶ。',
    explanation: `【出題意図】
未来完了形（will have＋過去分詞）の用法を問う問題。

【解説】
「By the end of this year（今年の終わりまでに）」は未来の一時点。それまでに「1000家族以上を助けたことになる」という完了を表すには未来完了形が必要。
・① will help → 単純未来（完了の意味がない）
・② has helped → 現在完了（未来の基準点には使えない）
・③ will have helped → 未来完了（✓）
・④ helped → 過去形（文脈に合わない）

日本語訳：「今年の終わりまでには、このNPOは1000家族以上を助けたことになるだろう。」

【文法ポイント】
未来完了形＝will have＋過去分詞。by〜、by the time〜などとセットで使われる。

【入試頻出】
・By next spring, the group will have built ten houses for poor families.
・By the time she graduates, she will have volunteered for three years.
・By 2030, this project will have reached one million people.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nIf we ( ) more about local problems, we can find better ways to solve them.\n① will learn  ② learn  ③ learned  ④ have learned',
    answer: '② learn',
    hint: '条件を表すif節の中では、未来のことでも現在形を使う。',
    explanation: `【出題意図】
条件節（if節）における時制のルールを問う問題。if節内では未来のことも現在形で表す。

【解説】
主節「we can find」は現在の可能性を表す。if節は未来・一般的な条件を示すが、if節内では現在形を使うのが原則。
・① will learn → if節でwillは使えない
・② learn → 現在形（✓）
・③ learned → 過去形（仮定法になり文意がずれる）
・④ have learned → 現在完了（この文脈では不要）

日本語訳：「私たちが地域の問題についてもっと学べば、それを解決するより良い方法を見つけることができる。」

【文法ポイント】
時・条件を表す副詞節（if, when, as soon asなど）の中では未来のことも現在形。

【入試頻出】
・If people work together, they can change their community.
・If we don't act now, the problem will get worse.
・When enough volunteers join, the project will succeed.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nThere ( ) be an empty lot here, but now it is a community garden.\n① used to  ② is used to  ③ was used to  ④ has used to',
    answer: '① used to',
    hint: '「以前は〜だった（今は違う）」という過去の状態を表す表現を選ぶ。',
    explanation: `【出題意図】
used to＋動詞原形（過去の習慣・状態と現在との対比）の用法を問う問題。

【解説】
「以前は空き地があったが、今は違う」という過去の状態と現在の対比。used to＋動詞原形が適切。
・② is used to → 「〜に慣れている」の意味になり不適切
・③ was used to → 誤った形（used toは形が変化しない）
・④ has used to → 存在しない形
・① used to → 過去の状態・習慣（✓）

日本語訳：「以前ここには空き地があったが、今はコミュニティガーデンになっている。」

【文法ポイント】
used to＋動詞原形＝以前は〜だった（今は違う）。be used to＋動名詞＝〜に慣れている、と混同しないよう注意。

【入試頻出】
・There used to be a small shop on this street.
・People used to throw away plastic without thinking.
・This area used to have many empty houses.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe number of volunteers this year is ( ) large as last year\'s.\n① so  ② very  ③ as  ④ much',
    answer: '③ as',
    hint: '「〜と同じくらい…」という原級比較 as＋形容詞＋as の形を考える。',
    explanation: `【出題意図】
原級を使った同等比較（as〜as）の構文を問う問題。

【解説】
「今年のボランティアの数は昨年と同じくらい多い」という2つを同等に比べる表現はas＋形容詞＋as〜。
・① so → 通常so〜thatの形で使う
・② very → 単独の強調（as構文にならない）
・③ as → 同等比較（✓）
・④ much → 比較級の強調（largerの前になら使えるが原級には不可）

日本語訳：「今年のボランティアの数は昨年と同じくらい多い。」

【文法ポイント】
as＋形容詞/副詞＋as〜＝〜と同じくらい…。否定文not as/so〜as＝〜ほど…でない。

【入試頻出】
・This problem is as serious as that one.
・She works as hard as any other volunteer.
・The town is not as clean as it used to be.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nHe was ( ) enough to give up his weekend to help clean the river.\n① kind  ② kindly  ③ kindness  ④ more kind',
    answer: '① kind',
    hint: 'enoughの前には形容詞の原級が来る。',
    explanation: `【出題意図】
形容詞＋enough＋to構文における品詞の正確な使い方を問う問題。

【解説】
enoughの前には形容詞の原級を置く（副詞や名詞は不可）。「親切にも週末を返上した」という文脈。
・② kindly → 副詞（この位置には使えない）
・③ kindness → 名詞（enoughの位置に合わない）
・④ more kind → 比較級（enough構文には原級を使う）
・① kind → 形容詞の原級（✓）

日本語訳：「彼は親切にも、川の掃除を手伝うために週末を返上した。」

【文法ポイント】
形容詞＋enough＋to〜＝「〜するほど十分…だ」。enoughは必ず形容詞・副詞の後ろに置く。

【入試頻出】
・She was brave enough to speak up about the problem.
・The volunteers were strong enough to carry heavy boxes.
・He was generous enough to donate all his savings.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe teacher had the students ( ) donations for the flood victims.\n① collect  ② to collect  ③ collecting  ④ collected',
    answer: '① collect',
    hint: 'have＋人＋動詞原形で「人に〜させる」という使役表現。',
    explanation: `【出題意図】
使役動詞have（have＋人＋動詞原形）の用法を問う問題。

【解説】
have＋人＋動詞原形＝「人に〜させる、〜してもらう」。教師が生徒に募金を集めさせた、という使役の意味。
・② to collect → haveの使役構文では原形を使うため不可
・③ collecting → 進行のニュアンスを強調する場合に使われることもあるが基本形ではない
・④ collected → 「集められた募金を持たせる」の意味になり不自然
・① collect → 使役動詞haveの正しい形（✓）

日本語訳：「先生は生徒たちに洪水の被災者のための募金を集めさせた。」

【文法ポイント】
使役動詞have/make/let＋人＋動詞原形。have＝依頼・指示、make＝強制、let＝許可のニュアンス。

【入試頻出】
・She had her son deliver the food to the shelter.
・The manager made the staff volunteer for the event.
・Our teacher let us choose which charity to support.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nMany students decided to take ( ) in the beach cleanup last Sunday.\n① part  ② care  ③ place  ④ turns',
    answer: '① part',
    hint: 'take part in〜で「〜に参加する」という熟語。',
    explanation: `【出題意図】
熟語take part in〜（〜に参加する）の正確な使用を問う問題。

【解説】
take part in〜＝「〜に参加する」。joinとほぼ同義でよく使われる。
・② care → take care of〜「〜の世話をする」
・③ place → take place「行われる、起こる」（inを伴わない）
・④ turns → take turns「交代でする」
・① part → 正解（✓）

日本語訳：「多くの生徒たちがこの前の日曜日のビーチの清掃活動に参加することにした。」

【文法ポイント】
take part in〜＝join〜とほぼ同義。inを忘れないこと。

【入試頻出】
・She took part in a volunteer program abroad.
・Everyone in our class took part in the food drive.
・He was too busy to take part in the meeting.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nWe need to be more ( ) of the problems that homeless people face every day.\n① aware  ② afraid  ③ ashamed  ④ ready',
    answer: '① aware',
    hint: 'be aware of〜で「〜に気づいている、〜を意識している」という熟語。',
    explanation: `【出題意図】
熟語be aware of〜（〜を意識している）を問う問題。

【解説】
be aware of〜＝「〜を意識している、〜に気づいている」。社会問題への理解を促す文脈で頻出。
・② afraid → be afraid of〜「〜を恐れる」
・③ ashamed → be ashamed of〜「〜を恥じる」
・④ ready → be ready for〜「〜の準備ができている」（forを使う）
・① aware → 正解（✓）

日本語訳：「私たちはホームレスの人々が毎日直面する問題についてもっと意識する必要がある。」

【文法ポイント】
be aware of〜＝〜に気づいている、意識している。似た形のbe afraid of / be proud ofと区別すること。

【入試頻出】
・Few people are aware of this local issue.
・She became aware of the difficulties older people face.
・We should be aware of how our actions affect others.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThis charity provides food and clothes for families ( ) need.\n① in  ② on  ③ at  ④ for',
    answer: '① in',
    hint: 'in need で「困っている、困窮している」という定型表現。',
    explanation: `【出題意図】
熟語in need（困窮している）の前置詞用法を問う問題。

【解説】
in need＝「困っている、必要としている」。families in need＝「困窮している家族」。
・② on ③ at ④ for → いずれも存在しない組み合わせ
・① in → 正解（✓）

日本語訳：「この慈善団体は困窮している家族に食料と衣類を提供している。」

【文法ポイント】
in need（of〜）＝（〜を）必要としている、困っている。people in needで「困っている人々」という頻出表現。

【入試頻出】
・The volunteers helped people in need after the earthquake.
・This program supports children in need of education.
・Many families were in need of basic supplies.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nThe shelter ( ) blankets during the cold winter, so volunteers collected more.\n① ran out of  ② ran into  ③ ran away  ④ ran over',
    answer: '① ran out of',
    hint: 'run out of〜で「〜を使い果たす」という熟語。',
    explanation: `【出題意図】
句動詞run out of〜（〜を使い果たす、〜がなくなる）を問う問題。

【解説】
run out of〜＝「〜を使い果たす、〜が尽きる」。避難所の毛布が足りなくなったという文脈。
・② ran into → 「〜に偶然出会う、〜に衝突する」
・③ ran away → 「逃げる」
・④ ran over → 「（車で）ひく」
・① ran out of → 正解（✓）

日本語訳：「その避難所は寒い冬の間に毛布を使い果たしたので、ボランティアがもっと集めた。」

【文法ポイント】
run out of〜＝資源・物が尽きる。似た表現にbe out of〜（〜が切れている、状態を表す）がある。

【入試頻出】
・They ran out of water after the disaster.
・The town is running out of space for new housing.
・We are out of food for the shelter tonight.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nEven a small act of kindness can make a ( ) in someone\'s life.\n① difference  ② decision  ③ direction  ④ distance',
    answer: '① difference',
    hint: 'make a difference で「変化をもたらす、役に立つ」という熟語。',
    explanation: `【出題意図】
熟語make a difference（良い変化をもたらす）を問う問題。

【解説】
make a difference＝「変化をもたらす、大きな影響を与える」。ボランティア活動の意義を語る際の頻出表現。
・② decision → make a decision「決断する」
・③ direction ④ distance → 熟語として成立しない
・① difference → 正解（✓）

日本語訳：「ほんの小さな親切な行いでも、誰かの人生に変化をもたらすことができる。」

【文法ポイント】
make a difference（to/in〜）＝〜に良い影響を与える。makeを使った頻出熟語：make an effort（努力する）、make a decision（決断する）。

【入試頻出】
・Volunteers can make a real difference in their community.
・Every small donation makes a difference.
・We believe that one person can make a difference.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nAll of us are ( ) for keeping our town clean and safe.\n① responsible  ② possible  ③ available  ④ suitable',
    answer: '① responsible',
    hint: 'be responsible for〜で「〜に対して責任がある」という熟語。',
    explanation: `【出題意図】
熟語be responsible for〜（〜に責任がある）を問う問題。

【解説】
be responsible for〜＝「〜に対して責任がある」。社会的責任を語る文脈で頻出。
・② possible → 「可能な」（be possible forでは意味が異なる）
・③ available → 「利用可能な」
・④ suitable → 「適した」
・① responsible → 正解（✓）

日本語訳：「私たち全員が、自分たちの町を清潔で安全に保つ責任がある。」

【文法ポイント】
be responsible for〜＝〜の責任を負う。forの後ろには名詞または動名詞が続く。

【入試頻出】
・Each citizen is responsible for reducing waste.
・The company is responsible for cleaning up the river it polluted.
・Who is responsible for organizing this event?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nThis small town ( ) volunteers to keep the library open.\n① depends on  ② depends for  ③ relies at  ④ counts about',
    answer: '① depends on',
    hint: 'depend on〜で「〜に頼る、〜次第である」という熟語。',
    explanation: `【出題意図】
熟語depend on〜（〜に頼る）の前置詞の正確な使用を問う問題。

【解説】
depend on〜＝「〜に頼る、〜に依存する」。rely on〜もほぼ同義で使われる。
・② depends for → 存在しない形
・③ relies at → atではなくonが正しい
・④ counts about → count onが正しい形
・① depends on → 正解（✓）

日本語訳：「この小さな町は図書館を開け続けるためにボランティアに頼っている。」

【文法ポイント】
depend on〜＝rely on〜＝count on〜（すべて「〜に頼る」）。前置詞はいずれもon。

【入試頻出】
・Many small communities depend on volunteers.
・You can always depend on your neighbors in this town.
・The project relies on donations from local people.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nIt is time for us to take ( ) to solve the problem of poverty in our city.\n① action  ② act  ③ activity  ④ actor',
    answer: '① action',
    hint: 'take action で「行動を起こす」という熟語。',
    explanation: `【出題意図】
熟語take action（行動を起こす）の正しい語形を問う問題。

【解説】
take action＝「行動を起こす」。actは動詞、activityは「活動」、actorは「俳優」で、いずれも熟語として不適切。
・① action → 名詞として正しい形（✓）

日本語訳：「私たちの街の貧困問題を解決するために、私たちが行動を起こす時だ。」

【文法ポイント】
take action＝行動を起こす。似た形にtake steps（措置を講じる）、take measures（対策を取る）がある。

【入試頻出】
・The government must take action to help homeless people.
・We decided to take action instead of just talking.
・It's time to take steps to reduce poverty.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe man ( ) started this volunteer group is my uncle.\n① who  ② which  ③ whom  ④ whose',
    answer: '① who',
    hint: '先行詞は「人」で、関係詞節内で主語の役割をしている。',
    explanation: `【出題意図】
関係代名詞who（先行詞が人・主格）の用法を問う問題。

【解説】
先行詞The man（人）。関係詞節内でstarted（始めた）の主語になっている。
・② which → 先行詞が物・動物
・③ whom → 先行詞が人・目的格
・④ whose → 先行詞が人または物・所有格
・① who → 正解（✓）

日本語訳：「このボランティアグループを始めた男性は私のおじです。」

【文法ポイント】
関係代名詞の主格：人ならwho、物ならwhich、どちらもthatで代用可。

【入試頻出】
・The woman who runs this shelter is very kind.
・I know a boy who helps at the food bank every week.
・The group who organized the event worked very hard.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe old clothes ( ) we collected were sent to families in need.\n① who  ② which  ③ whose  ④ where',
    answer: '② which',
    hint: '先行詞は「物」で、関係詞節内で目的格として使われている。',
    explanation: `【出題意図】
関係代名詞which（先行詞が物・目的格）の用法を問う問題。

【解説】
先行詞the old clothes（物）。関係詞節内でwe collected（私たちが集めた）の目的語になっている。
・① who → 先行詞が人
・③ whose → 所有格
・④ where → 関係副詞（場所）
・② which → 正解（✓）。thatに置き換え可能、目的格なので省略も可。

日本語訳：「私たちが集めた古着は、困っている家族に送られた。」

【文法ポイント】
目的格の関係代名詞（which/that）は省略可能。The clothes (which/that) we collected〜。

【入試頻出】
・The food (that) we donated helped many families.
・This is the bag which she gave to the shelter.
・The books (which) students brought were given to the library.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nWe supported a family ( ) house was destroyed by the flood.\n① who  ② which  ③ whose  ④ whom',
    answer: '③ whose',
    hint: '「その家族の家が」という所有の関係を表す関係代名詞を選ぶ。',
    explanation: `【出題意図】
所有格の関係代名詞whoseの用法を問う問題。

【解説】
a family（先行詞）とhouse（名詞）の間に所有の関係がある（＝their house）。この関係を表すのが関係代名詞whose。
・① who → 主格
・② which → 目的格・主格（所有は表せない）
・④ whom → 目的格
・③ whose → 正解（✓）

日本語訳：「私たちは、洪水で家が壊れてしまった家族を支援した。」

【文法ポイント】
whose＋名詞＋動詞〜の形で「〜の（名詞）が…」を表す。先行詞は人でも物でも使える。

【入試頻出】
・She helped an old man whose wife had passed away.
・This is the family whose garden became a community space.
・We visited a town whose houses were damaged by the storm.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_24',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThis is the shelter ( ) many homeless people can stay for free.\n① which  ② who  ③ where  ④ when',
    answer: '③ where',
    hint: '先行詞は「場所」。関係副詞を選ぶ。',
    explanation: `【出題意図】
関係副詞where（先行詞が場所）の用法を問う問題。

【解説】
先行詞the shelter（場所）。節内はmany homeless people can stay (in the shelter) for freeという構造で、in the shelterがwhereに置き換わっている。
・① which → 前置詞が必要（the shelter in which〜）
・② who → 人に使う
・④ when → 時に使う
・③ where → 正解（✓）

日本語訳：「ここは多くのホームレスの人々が無料で滞在できる避難所です。」

【文法ポイント】
関係副詞where＝前置詞＋which。先行詞が場所（place, shelter, townなど）のときに使う。

【入試頻出】
・This is the town where the festival takes place every year.
・I know a place where volunteers can get training.
・That is the center where people donate old clothes.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_25',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nDo you know ( ) caused so many people to lose their homes?\n① what  ② which  ③ how  ④ whose',
    answer: '① what',
    hint: '「何が原因だったのか」を尋ねる間接疑問文。疑問詞が主語の役割も果たす。',
    explanation: `【出題意図】
間接疑問文で、疑問詞が節内の主語を兼ねる特殊なパターンを問う問題。

【解説】
この文では疑問詞whatがcausedの主語を兼ねている（疑問詞＝主語の場合、語順はそのまま）。
・② which → 「どちら」選択を尋ねる
・③ how → 「どのように」方法を尋ねる
・④ whose → 「誰の」所有を尋ねる
・① what → 正解（✓）Do you know what caused〜？＝何が〜を引き起こしたか知っていますか。

日本語訳：「何がそんなに多くの人々に家を失わせる原因になったか知っていますか？」

【文法ポイント】
間接疑問文で疑問詞が主語の場合は、疑問詞＋動詞〜とそのままの語順になる（主語と動詞の入れ替えが不要）。

【入試頻出】
・I don't know what happened to the old building.
・Please tell me who started this project.
・Do you know what made her decide to volunteer?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nCould you tell me ( ) the next volunteer meeting will be held?\n① what  ② when  ③ whom  ④ which',
    answer: '② when',
    hint: '「次のボランティア会議がいつ開かれるか」を尋ねる間接疑問文。',
    explanation: `【出題意図】
間接疑問文における適切な疑問詞の選択を問う問題。

【解説】
「次の会議がいつ開かれるか」という時を尋ねる文脈。whenが適切。
・① what → 「何」
・③ whom → 「誰を」（目的格）
・④ which → 「どちら」
・② when → 正解（✓）

節内はthe next volunteer meeting will be held（平叙文語順）であることにも注意。

日本語訳：「次のボランティア会議がいつ開かれるか教えていただけますか？」

【文法ポイント】
間接疑問文＝疑問詞＋主語＋動詞（平叙文語順）。Could you tell me〜？は丁寧な依頼表現。

【入試頻出】
・Do you know when the food drive starts?
・I want to know when the shelter opens.
・Can you tell me when volunteers are needed most?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ has / for / she / been / working / three years / this NPO / at ）\n「彼女はこのNPOで3年間働き続けている。」',
    answer: 'She has been working at this NPO for three years.',
    hint: '現在完了進行形（have/has been＋Ving）の語順。forは期間を表す。',
    explanation: `【出題意図】
現在完了進行形の語順整序問題。for＋期間の位置も確認する。

【解説】
現在完了進行形＝has been＋Ving。主語She＋has been working＋場所（at this NPO）＋期間（for three years）という順で並べる。

正しい語順：She has been working at this NPO for three years.

日本語訳：「彼女はこのNPOで3年間働き続けている。」

【文法ポイント】
has/have been＋Ving＝現在まで続く動作の継続。for＋期間、since＋起点とセットで使う。

【入試頻出】
・He has been volunteering at the shelter for two months.
・They have been raising money for the project since spring.
・We have been planning this event for weeks.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ so / were / that / the donations / large / they / helped / many families ）\n「その寄付はとても多かったので、多くの家族を助けることができた。」',
    answer: 'The donations were so large that they helped many families.',
    hint: 'so＋形容詞＋that〜「とても〜なので…」の構文。',
    explanation: `【出題意図】
so〜that…構文（結果を表す）の語順を問う整序問題。

【解説】
so＋形容詞（large）＋that＋主語＋動詞〜＝「とても〜なので…」。

正しい語順：The donations were so large that they helped many families.

日本語訳：「その寄付はとても多かったので、多くの家族を助けることができた。」

【文法ポイント】
so＋形容詞/副詞＋that＋主語＋動詞＝結果を表す構文。such＋a/an＋形容詞＋名詞＋that〜と混同しないこと。

【入試頻出】
・The storm was so strong that many houses were damaged.
・She worked so hard that everyone respected her.
・The need was so great that the town asked for more volunteers.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ who / lives / next door / the woman / often / needs / our help ）\n「隣に住むその女性は、しばしば私たちの助けを必要としている。」',
    answer: 'The woman who lives next door often needs our help.',
    hint: '関係代名詞whoの節（who lives next door）が先行詞the womanを修飾する。',
    explanation: `【出題意図】
関係代名詞whoを使った主格の関係詞節の語順整序問題。

【解説】
文の骨格：The woman needs our help.（その女性は私たちの助けを必要としている）
修飾部：who lives next door（隣に住んでいる）
関係詞節は先行詞the womanの直後に置く：The woman [who lives next door] often needs our help.

日本語訳：「隣に住むその女性は、しばしば私たちの助けを必要としている。」

【文法ポイント】
関係代名詞節は先行詞のすぐ後ろに置き、主節の動詞はその後に続く。oftenのような頻度の副詞は一般動詞の前に置く。

【入試頻出】
・The boy who helps at the shelter is my classmate.
・The family who moved here needs support from neighbors.
・People who volunteer regularly often feel happier.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ was / by / this festival / local volunteers / organized / last month ）\n「このお祭りは先月、地元のボランティアによって開催された。」',
    answer: 'This festival was organized by local volunteers last month.',
    hint: '受動態（be動詞＋過去分詞＋by〜）の語順。',
    explanation: `【出題意図】
受動態の基本語順（主語＋be＋過去分詞＋by＋動作主）を問う整序問題。

【解説】
This festival（主語・物）は「開催する」側ではなく「開催される」側なので受動態を使う。was organized by local volunteersという語順。

正しい語順：This festival was organized by local volunteers last month.

日本語訳：「このお祭りは先月、地元のボランティアによって開催された。」

【文法ポイント】
受動態＝be動詞＋過去分詞。動作主を示すときはby〜を最後に置く。last monthのような時を表す語句は文末が基本。

【入試頻出】
・This shelter was built by volunteers ten years ago.
・The event was planned by students last year.
・Many old clothes were collected by the community last week.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / to / was / the box / light / for / carry / children / it ）\n「その箱は子どもたちが運べるくらい軽かった。」',
    answer: 'The box was light enough for children to carry it.',
    hint: '形容詞＋enough＋for＋人＋to＋動詞 の語順。',
    explanation: `【出題意図】
enough to構文に「for＋人」が加わった形の語順整序問題。

【解説】
主語＋be＋形容詞＋enough＋for＋人＋to＋動詞（原形）＋目的語 という語順。「for＋人」は不定詞の意味上の主語を示す。

正しい語順：The box was light enough for children to carry it.

日本語訳：「その箱は子どもたちが運べるくらい軽かった。」

【文法ポイント】
形容詞＋enough＋for＋人＋to＋動詞＝「（人）が〜するのに十分…だ」。too〜for人to…（〜すぎて人が…できない）と対で覚える。

【入試頻出】
・The bag was heavy enough for two people to carry together.
・This task is easy enough for beginners to try.
・The room was large enough for everyone to sit down.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ know / why / you / do / many / homeless / people / are / there / is ）\n「なぜホームレスの人が多いのか知っていますか？」',
    answer: 'Do you know why there are many homeless people?',
    hint: '間接疑問文。there are〜「〜がいる」という構文と組み合わせる。不要な語が1つ混じっている。',
    explanation: `【出題意図】
間接疑問文とthere is/are構文を組み合わせた整序問題。不要語の識別も含む。

【解説】
全体は疑問文Do you know〜?。間接疑問部分はwhy there are many homeless people（なぜホームレスの人々が多いのか）という平叙文語順。

不要語：is（there areがすでにあるのでisは不要）

正しい語順：Do you know why there are many homeless people?

日本語訳：「なぜホームレスの人が多いのか知っていますか？」

【文法ポイント】
間接疑問文＝疑問詞＋主語＋動詞。there is/areを間接疑問に組み込む場合もthere are（many homeless people）のまま平叙文語順にする。

【入試頻出】
・Do you know why there are so many empty houses here?
・I wonder why there is no shelter in this area.
・Can you tell me why there are fewer volunteers this year?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ who / the number / this year / of volunteers / joined / than / last year\'s / is / larger ）\n「今年参加したボランティアの数は、去年の数より多い。」',
    answer: 'The number of volunteers who joined this year is larger than last year\'s.',
    hint: '関係代名詞who節（who joined this year）が主語the number of volunteersを修飾し、比較級is largerが続く。',
    explanation: `【出題意図】
関係代名詞と比較級を組み合わせた複雑な語順整序問題。

【解説】
文の骨格：The number of volunteers is larger than last year's.（ボランティアの数は去年より多い）
修飾部：who joined this year（今年参加した）は先行詞volunteersを修飾。

組み合わせ：The number of volunteers [who joined this year] is larger than last year's.
last year'sはlast year's number（去年の数）の省略形。

日本語訳：「今年参加したボランティアの数は、去年の数より多い。」

【文法ポイント】
the number of〜（〜の数）は単数扱い（is/wasを使う）。a number of〜（たくさんの〜）は複数扱いと区別すること。

【入試頻出】
・The number of people who support this project is increasing.
・The amount of food that was donated was larger than expected.
・The number of students who volunteer is growing every year.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・短い長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: We\'re looking for volunteers to help clean the river this Saturday. Would you like to join us?\nB: ( )\n\n① Sure, I\'d love to.\n② No, I don\'t.\n③ I have already cleaned it.\n④ Yes, I did.',
    answer: '① Sure, I\'d love to.',
    hint: 'Would you like to〜?（勧誘・誘い）への自然な受け方を選ぶ。',
    explanation: `【出題意図】
Would you like to〜?（勧誘・誘い）への適切な応答を問う会話表現問題。

【解説】
Would you like to join us?は「一緒にやりませんか」という丁寧な誘い。
・② No, I don't. → 文法的に不自然（誘いの断りにはNo, thank you.などを使う）
・③ 時制が合わない（まだ行われていない活動）
・④ 質問と噛み合わない
・① Sure, I'd love to. → 最も自然な受け答え（✓）

日本語訳：
A：今週の土曜日に川の清掃を手伝ってくれるボランティアを探しています。一緒にやりませんか？
B：はい、ぜひやりたいです。

【文法ポイント】
Would you like to〜?への返答：受ける＝Sure, I'd love to./I'd be happy to. 断る＝I'm sorry, I can't this time.

【入試頻出】
・Would you like to join our clean-up event? — I'd love to.
・Would you like to help at the food bank? — Sure, why not?
・Would you like to volunteer with us? — I'd be happy to.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: Excuse me, could you tell me how to get to the animal shelter?\nB: ( ) Then turn left, and you\'ll see it on your right.\n\n① Go straight for two blocks.\n② I have never been there.\n③ It\'s a very kind shelter.\n④ You should ask someone else.',
    answer: '① Go straight for two blocks.',
    hint: '道案内の文脈。後に続く「それから左に曲がって」に自然につながる文を選ぶ。',
    explanation: `【出題意図】
道案内表現の文脈把握を問う問題。文と文のつながりを考える力が試される。

【解説】
後半に"Then turn left（それから左に曲がって）"とあるので、その前には最初の道案内（直進の指示）が来るのが自然。
・② 行ったことがないという返答は道案内と矛盾
・③ 施設の評判の話で文脈に合わない
・④ 「他の人に聞いて」では道案内にならない
・① Go straight for two blocks. → 正解（✓）

日本語訳：
A：すみません、動物保護施設への行き方を教えていただけますか？
B：2区画まっすぐ進んでください。それから左に曲がると、右手に見えます。

【文法ポイント】
道案内表現：Go straight（まっすぐ進む）、turn left/right（左/右に曲がる）、on your right/left（右手/左手に）。

【入試頻出】
・Go straight and turn right at the second corner.
・Could you tell me the way to the community center?
・It's just around the corner.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: I want to donate some books, but I don\'t have a car to carry them.\nB: ( ) I can drive you to the collection center.\n\n① Don\'t worry about that.\n② That\'s too bad for you.\n③ I\'m afraid I can\'t help.\n④ You should buy a car.',
    answer: '① Don\'t worry about that.',
    hint: '後に続く「車で送ってあげるよ」という申し出につながる返答を選ぶ。',
    explanation: `【出題意図】
問題の解決策を提示する前置きとして自然な表現を選ぶ問題。

【解説】
Bは後半で「車で送ってあげる」と解決策を提示している。その前置きとして「心配しないで」が自然につながる。
・② 同情するだけで解決につながらない
・③ 「手伝えない」は後半の申し出と矛盾する
・④ 話の流れに合わない
・① Don't worry about that. → 正解（✓）

日本語訳：
A：本を寄付したいのですが、運ぶ車がありません。
B：それは心配しないで。回収センターまで車で送ってあげるよ。

【文法ポイント】
問題解決の申し出の前置き表現：Don't worry./No problem./Leave it to me.

【入試頻出】
・Don't worry about the cost. We'll cover it.
・No problem, I can help you carry those boxes.
・Leave it to me. I'll take care of it.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: You look tired. Can I carry that box of donations for you?\nB: ( )\n\n① That\'s very kind of you. Thank you.\n② No, I never carry boxes.\n③ I don\'t like donations.\n④ Yes, you must carry it.',
    answer: '① That\'s very kind of you. Thank you.',
    hint: 'Can I〜?（申し出）への自然な受け方を選ぶ。',
    explanation: `【出題意図】
Can I〜?（申し出）への適切な返答を問う会話表現問題。

【解説】
Can I carry that box for you?は「持ってあげましょうか」という申し出。感謝を込めて受け入れる返答が自然。
・② 文脈と無関係な返答
・③ 質問の内容とずれている
・④ 命令のような不自然な表現
・① That's very kind of you. Thank you. → 正解（✓）

日本語訳：
A：疲れているようですね。その寄付の箱を運びましょうか？
B：ご親切にありがとうございます。

【文法ポイント】
申し出への応答：That's very kind of you./Thank you, I'd appreciate that. 断る場合：That's okay, I can manage, thank you.

【入試頻出】
・Can I help you with that? — That's very kind of you.
・Shall I carry your bag? — Thank you, I'd appreciate it.
・Can I get you something? — No, thank you, I'm fine.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nOur town has ( ) many changes since the volunteer group started working here.\n① see  ② saw  ③ seen  ④ seeing',
    answer: '③ seen',
    hint: '現在完了形（have/has＋過去分詞）。seeの過去分詞を選ぶ。',
    explanation: `【出題意図】
現在完了形の形とsee-saw-seenの活用を問う問題。

【解説】
has＋過去分詞＝現在完了形。seeの活用：see-saw-seen。sinceは現在完了とセットで使われる典型的な語。
・① see → 原形
・② saw → 過去形
・④ seeing → 現在分詞（hasの後には使えない）
・③ seen → 正解（✓）

日本語訳：「そのボランティアグループがここで活動を始めてから、私たちの町は多くの変化を経験してきた。」

【文法ポイント】
現在完了形（経験・継続）＝have/has＋過去分詞。sinceは「〜以来」という起点を表す。

【入試頻出】
・This community has seen great improvement in recent years.
・We have learned a lot since we joined this project.
・The town has changed a lot since the shelter opened.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nThe volunteer meeting will be held ( ) the community center this Saturday.\n① in  ② at  ③ on  ④ to',
    answer: '② at',
    hint: '特定の建物・地点を表す前置詞を選ぶ。',
    explanation: `【出題意図】
場所を表す前置詞（in/at/on）の使い分けを問う問題。

【解説】
the community center（特定の建物・地点）にはatを使う。inは広い空間の内部、onは面に接する場所に使う。
・① in → 広い空間の内側
・③ on → 面・特定の日
・④ to → 方向を表す
・② at → 正解（✓）

日本語訳：「ボランティア会議は今週の土曜日にコミュニティセンターで開かれる。」

【文法ポイント】
場所の前置詞：at＝特定の地点（at the station, at the center）、in＝広い空間の中（in the city, in the room）、on＝面に接する場所（on the street）。

【入試頻出】
・The event will take place at the town hall.
・Many people gathered in the park for the festival.
・The poster is on the wall of the community center.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nEvery year, our school ( ) old textbooks to students who cannot afford new ones.\n① borrows  ② donates  ③ sells  ④ rents',
    answer: '② donates',
    hint: '「〜を寄付する」という意味の動詞を選ぶ。',
    explanation: `【出題意図】
社会貢献に関連する動詞donate（寄付する）の意味を問う語彙問題。

【解説】
文脈は「新しい教科書を買えない生徒に古い教科書を渡す」こと。これはdonate（寄付する）が最も適切。
・① borrows → 「借りる」
・③ sells → 「売る」（affordと矛盾）
・④ rents → 「賃貸する」
・② donates → 正解（✓）

日本語訳：「毎年、私たちの学校は新しい教科書を買う余裕のない生徒たちに古い教科書を寄付している。」

【文法ポイント】
donate〜to…＝…に〜を寄付する。名詞形はdonation（寄付）。

【入試頻出】
・People donated clothes and blankets to the shelter.
・The company donated money to support local schools.
・We collected donations for families affected by the disaster.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。\n\nMany elderly people live alone in this area. ( ), a group of students visits them once a week to talk and help with small tasks.\n① As a result  ② However  ③ For example  ④ Instead',
    answer: '① As a result',
    hint: '前文の内容（高齢者が一人暮らしをしている）を受けて、その結果として行われている取り組みを表すつなぎ言葉を選ぶ。',
    explanation: `【出題意図】
文と文をつなぐ副詞（as a result / however / for example / instead）の使い分けを問う問題。

【解説】
前文「多くの高齢者がこの地域で一人暮らしをしている」という状況を受けて、後文は「学生たちが週に一度訪問する」という対応策・結果を述べている。
・② However → 逆接（前後で対立する内容が必要）
・③ For example → 具体例を示す語（前文に対する例ではない）
・④ Instead → 「代わりに」（合わない）
・① As a result → 結果・つながりを示す（✓）

日本語訳：「この地域では多くの高齢者が一人暮らしをしている。その結果として、学生のグループが週に一度、彼らと話したり簡単な作業を手伝ったりするために訪問している。」

【文法ポイント】
文をつなぐ副詞（接続副詞）：as a result（その結果）、however（しかし）、for example（例えば）、in addition（さらに）、therefore（それゆえ）。文脈から論理関係を判断する。

【入試頻出】
・The town has few young workers. As a result, volunteers play an important role.
・Some people cannot cook for themselves. As a result, local groups deliver meals to them.
・This area lacks public transportation. As a result, elderly residents often feel isolated.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今までにボランティア活動に参加したことが一度もありません。」',
    answer: 'I have never taken part in volunteer activities. / I have never participated in any volunteer activities.',
    hint: '「〜したことが一度もない」は現在完了の経験用法（have never＋過去分詞）。「参加する」はtake part in / participate in。',
    explanation: `【出題意図】
現在完了形（経験）の否定と、「参加する」の言い換え表現（take part in / participate in）を問う英作文。

【解説】
「今までに〜したことがない」＝have never＋過去分詞。「ボランティア活動に参加する」＝take part in volunteer activities / participate in volunteer activities。

組み合わせ：I have never taken part in volunteer activities.
別解：I have never participated in any volunteer activities.

日本語訳確認：「私は今までにボランティア活動に参加したことが一度もありません。」

【文法ポイント】
have never＋過去分詞＝一度も〜したことがない。take part in＝participate in（どちらも「参加する」）。

【入試頻出】
・She has never joined a community event before.
・I have never donated blood in my life.
・Have you ever helped at a shelter?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私が去年会ったその女性は、今この施設で働いています。」',
    answer: 'The woman I met last year is working at this facility now. / The woman who(m) I met last year is working at this facility now.',
    hint: '「私が去年会った」は関係代名詞（目的格）で修飾。目的格の関係代名詞は省略可能。',
    explanation: `【出題意図】
関係代名詞（目的格）を使った修飾表現と現在進行形を組み合わせる英作文。

【解説】
「その女性」the womanを「私が去年会った（that/whom I met last year）」という節が修飾。目的格の関係代名詞は省略可能。
「今〜している」は現在進行形is workingで表す。

組み合わせ：The woman (whom/that) I met last year is working at this facility now.

日本語訳確認：「私が去年会ったその女性は、今この施設で働いています。」

【文法ポイント】
目的格の関係代名詞は省略できる。現在進行形（is/am/are＋Ving）は「今まさに〜している」動作を表す。

【入試頻出】
・The man I talked to yesterday works at the shelter.
・The girl who helped me is volunteering at the hospital now.
・The book she recommended is very popular.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「その老人ホームは多くのボランティアによって支えられています。」',
    answer: 'That nursing home is supported by many volunteers.',
    hint: '「支えられている」は受動態（is supported by〜）。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞＋by〜）を使った英作文。

【解説】
「老人ホームが支えられている」は受動態で表す。「支える」＝support。「〜によって」＝by〜。

完成した文：That nursing home is supported by many volunteers.

日本語訳確認：「その老人ホームは多くのボランティアによって支えられています。」

【文法ポイント】
受動態＝be動詞＋過去分詞。動作主を示すときはby〜を使う。現在の継続的な状態を表すのでbe動詞は現在形。

【入試頻出】
・This shelter is run by a small group of volunteers.
・The festival is supported by local businesses.
・This project is funded by donations from citizens.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「このプログラムはお年寄りだけでなく、子どもたちも支援しています。」',
    answer: 'This program supports not only elderly people but also children.',
    hint: '「〜だけでなく…も」はnot only A but also Bの構文。',
    explanation: `【出題意図】
相関接続詞not only A but also B（〜だけでなく…も）を使った英作文。

【解説】
「お年寄りだけでなく子どもたちも」＝not only elderly people but also children。AとBは文法的に同じ形（名詞句）で並べる。

完成した文：This program supports not only elderly people but also children.

日本語訳確認：「このプログラムはお年寄りだけでなく、子どもたちも支援しています。」

【文法ポイント】
not only A but also B＝AだけでなくBも。動詞の後にA, Bがくる場合は両方とも目的語として同じ形にする。

【入試頻出】
・This shelter helps not only homeless people but also stray animals.
・The event is popular with not only adults but also children.
・She volunteers not only on weekends but also after school.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私たち全員がゴミを減らせば、この街はもっときれいになるでしょう。」',
    answer: 'If all of us reduce our garbage, this city will become cleaner. / If we all reduce the amount of garbage, this city will be cleaner.',
    hint: '条件を表すif節では、未来のことでも現在形を使う。「もっときれいになる」は比較級。',
    explanation: `【出題意図】
条件節（if節）の時制ルールと比較級を組み合わせた英作文。

【解説】
if節の中では未来のことも現在形で表す（willを使わない）。「ゴミを減らす」＝reduce garbage/waste。「もっときれいになる」＝become cleaner（比較級）。

完成した文：If all of us reduce our garbage, this city will become cleaner.

日本語訳確認：「もし私たち全員がゴミを減らせば、この街はもっときれいになるでしょう。」

【文法ポイント】
if節内は現在形で未来を表す。主節はwill＋動詞原形。比較級はclean→cleaner。

【入試頻出】
・If everyone recycles more, we will have less waste.
・If people help each other, the community will become stronger.
・If we plant more trees, the air will become cleaner.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_47',
    subject: 'eigo',
    passage: `In many cities, a large amount of food is thrown away every day, even though many people do not have enough to eat. Food banks are organizations that collect extra food from stores, restaurants, and farms and give it to families in need. Volunteers spend hours sorting and packing food so that it can be delivered quickly. Some schools have also started their own small food banks for students whose families are struggling. By reducing food waste and sharing what we have, communities can support each other and make sure that fewer people go hungry.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の内容と合っているものを1つ選べ。\n① 食品は店やレストランからのみ集められる。\n② フードバンクはボランティアが食品を分類し梱包することで支えられている。\n③ 学校は生徒の家庭にフードバンクの利用を禁止している。\n④ 食品ロスと貧困の問題には関係がない。',
    answer: '② フードバンクはボランティアが食品を分類し梱包することで支えられている。',
    hint: '本文中の "Volunteers spend hours sorting and packing food" という一文に注目する。',
    explanation: `【出題意図】
長文読解の内容一致問題。本文の細部情報と選択肢を正確に照合する力を問う。

【解説】
① 「店やレストランからのみ」→本文には"from stores, restaurants, and farms"とあり、farms（農場）も含まれるため「のみ」は誤り（×）
② 「ボランティアが食品を分類し梱包する」→本文"Volunteers spend hours sorting and packing food"と一致（✓）
③ 「フードバンクの利用を禁止」→本文には逆に"some schools have also started their own small food banks"とあり、禁止ではなく実施している（×）
④ 「関係がない」→本文全体が食品ロスと貧困（飢え）の関係を述べているため矛盾（×）

【文法ポイント】
内容一致問題では「のみ」「すべて」「禁止」など断定的な語に注意し、本文の情報と細かく照合する。

【入試頻出】
・本文にない情報を含む選択肢は誤り。
・「〜だけ」「必ず」という限定的な表現は本文と食い違うことが多い。
・具体的な動詞（sorting, packing など）が使われている箇所は設問の根拠になりやすい。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_48',
    subject: 'eigo',
    passage: `After the earthquake, many houses in the small town were badly damaged. Volunteers from all over the country came to help clear debris, repair roofs, and rebuild homes. Local residents were grateful for this support, but they also wanted to take an active role themselves. They organized their own teams to plan the rebuilding process and to decide which buildings should be fixed first. This combination of outside help and local leadership allowed the town to recover faster than expected. Experts say that this is a good model for other communities facing similar disasters.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文中の下線部 "this" が指す内容として最も適切なものを選べ。\n① 地震で家が壊れたこと\n② 外部からの支援と地元住民のリーダーシップの組み合わせ\n③ 専門家が町を訪れたこと\n④ ボランティアが屋根を修理したこと',
    answer: '② 外部からの支援と地元住民のリーダーシップの組み合わせ',
    hint: '"this" の直前の文 "This combination of outside help and local leadership" を確認する。',
    explanation: `【出題意図】
指示語（this）が指す内容を本文中から特定する問題。長文読解で頻出の設問形式。

【解説】
下線部を含む文は"Experts say that this is a good model for other communities."。thisは直前の文"This combination of outside help and local leadership allowed the town to recover faster"の主語部分（外部からの支援と地元のリーダーシップの組み合わせ）を指している。
① 「地震で家が壊れたこと」→thisの直前の話題ではない（×）
③ 「専門家が町を訪れたこと」→本文にそのような記述はない（×）
④ 「屋根を修理したこと」→これは支援内容の一部であり、thisが指す全体ではない（×）
② が正解（✓）

【文法ポイント】
指示語問題では、直前の文（特に主語）を確認し、代入して意味が通るか確かめる。thisは単数の概念・出来事全体を指すことが多い。

【入試頻出】
・thisが直前の文全体やその主語を指すパターンに注意。
・「combination of A and B」のような複合的な内容を一語のthisでまとめることがある。
・段落の最後のthis/thatは、その段落全体の要約であることが多い。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_49',
    subject: 'eigo',
    passage: `Many high schools now encourage students to visit nursing homes as part of their volunteer activities. At first, some students feel nervous about talking with elderly residents they do not know. However, after a few visits, most students say they enjoy listening to the residents' stories about the past. The elderly residents, in turn, often say that these visits make their days brighter and give them a chance to share their experiences with younger generations. Teachers believe that these exchanges help students develop empathy while giving elderly people a sense of connection to the community.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の主題として最も適切なものを選べ。\n① 高校生が老人ホームを訪問することで両者に生まれる良い影響\n② 老人ホームの職員不足についての報告\n③ 高齢者の孤独に関する統計データ\n④ 学校の授業でのボランティア活動の評価方法',
    answer: '① 高校生が老人ホームを訪問することで両者に生まれる良い影響',
    hint: '本文全体が学生と高齢者の双方にとっての効果（共感の育成、地域とのつながり）を述べていることに注目する。',
    explanation: `【出題意図】
長文全体の主題（main idea）を把握する問題。細部ではなく文章全体の中心テーマを読み取る力を試す。

【解説】
本文の流れ：①高校が老人ホーム訪問を推奨→②最初は緊張するが徐々に楽しめるようになる→③高齢者側も訪問を喜ぶ→④先生は学生の共感力育成と高齢者のつながりの両方に良い影響があると考える。
① が本文全体の中心テーマと一致（✓）
② 「職員不足の報告」→本文に記述なし（×）
③ 「統計データ」→本文に数値データはない（×）
④ 「評価方法」→本文にそのような記述はない（×）

【文法ポイント】
主題問題では冒頭と結論部分に注目し、繰り返し出てくるキーワード（students, elderly residents, empathy, connection）を手がかりにする。

【入試頻出】
・主題は本文の一部だけでなく全体に関わる内容であることが多い。
・最後の文（teachers believe〜）に全体のまとめが書かれることが多い。
・具体的すぎる選択肢や本文にない情報を含む選択肢は主題として不適切。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_50',
    subject: 'eigo',
    passage: `Every Friday evening, a group of volunteers gathers at a local church to cook and serve a hot meal for people who are homeless. The volunteers include students, office workers, and retired teachers who all give up their evening for this activity. The meal service began five years ago with only a handful of volunteers, but now more than thirty people help each week. Some homeless visitors say that the meal is not just about food, but also about being treated with kindness and respect. The organizers hope to expand the service to other neighborhoods in the near future.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の内容と合っていないものを1つ選べ。\n① この食事提供活動は毎週金曜日の夜に行われている。\n② ボランティアには学生、会社員、退職した教師が含まれる。\n③ この活動は始まってから一度も規模が変わっていない。\n④ 主催者は他の地域にもこの活動を広げたいと考えている。',
    answer: '③ この活動は始まってから一度も規模が変わっていない。',
    hint: '本文には "began five years ago with only a handful of volunteers, but now more than thirty people help" とあり、規模の変化が述べられている。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」誤文識別型の読解問題。数量・変化に関する記述を正確に読み取る力を問う。

【解説】
① 「毎週金曜日の夜」→本文"Every Friday evening"と一致（✓）
② 「学生、会社員、退職した教師」→本文"students, office workers, and retired teachers"と一致（✓）
③ 「一度も規模が変わっていない」→本文には"began...with only a handful of volunteers, but now more than thirty people help"とあり、少人数から30人以上へと規模が大きく変化したことが述べられているため、この選択肢は本文と矛盾する（× 不一致）
④ 「他の地域に広げたい」→本文"hope to expand the service to other neighborhoods"と一致（✓）

正解：③

【文法ポイント】
「合っていないものを選べ」問題では、数・時間・変化を表す語句（a handful of, more than, began, now）を正確に比較する。

【入試頻出】
・数量表現の変化（from A to B / began small but grew）は誤答選択肢に使われやすい。
・「一度も〜ない」「変わっていない」という断定的な選択肢は本文の変化を示す記述と矛盾することが多い。
・本文の時間軸（過去→現在）を正しく追うことが正解の鍵。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
