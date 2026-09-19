import type { Question } from './questions';

export const kokoMoshiEigo50: Question[] = [
  // ============================================================
  // 長文読解（論説・説明文）: 12問
  // ============================================================
  {
    id: 'koko_moshi_eigo_01',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Plastic pollution has become one of the most serious environmental problems in the world. Every year, millions of tons of plastic waste enter the ocean, harming marine life and ecosystems. Scientists have found tiny pieces of plastic, called microplastics, even in the deepest parts of the sea. These microplastics can be eaten by fish and other sea creatures, and eventually they may end up on our dinner plates.

Many countries are now taking action to reduce plastic waste. Some have banned single-use plastic bags and bottles. Others are investing in new technologies to recycle plastic more efficiently. However, experts say that these efforts are not enough. We need a complete change in the way we produce and consume goods.

Education plays an important role in solving this problem. When people understand the impact of plastic pollution, they are more likely to change their habits. Schools and communities can teach people how to reduce, reuse, and recycle. Small actions by many individuals can add up to a big difference.`,
    question: '本文の主旨として最も適切なものを選びなさい。\n① プラスチック汚染は深海にのみ影響を与える。\n② プラスチック汚染への対策として、法律・技術・教育の多角的なアプローチが必要だ。\n③ リサイクル技術を向上させるだけでプラスチック問題は解決できる。\n④ 魚がプラスチックを食べることは人体に無害だ。',
    answer: '②',
    hint: '各段落の要点をまとめてみよう。第1段落・第2段落・第3段落それぞれ何について書かれているかな？',
    explanation: '【読解のポイント】第1段落は「プラスチック汚染の深刻さ」、第2段落は「法律・技術での対策とその限界」、第3段落は「教育の重要性」について述べています。筆者は一つの解決策だけでなく、総合的なアプローチが必要だと主張しているため②が正解です。',
    pitfall: '①は「deepest parts of the sea」の表現を見て誤解しやすいが、本文は深海だけでなく広く海洋全体の問題を述べている。',
    memoryTip: '論説文は各段落の「トピックセンテンス（最初か最後の文）」を押さえると主旨がつかめる！',
  },
  {
    id: 'koko_moshi_eigo_02',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Plastic pollution has become one of the most serious environmental problems in the world. Every year, millions of tons of plastic waste enter the ocean, harming marine life and ecosystems. Scientists have found tiny pieces of plastic, called microplastics, even in the deepest parts of the sea. These microplastics can be eaten by fish and other sea creatures, and eventually they may end up on our dinner plates.

Many countries are now taking action to reduce plastic waste. Some have banned single-use plastic bags and bottles. Others are investing in new technologies to recycle plastic more efficiently. However, experts say that these efforts are not enough. We need a complete change in the way we produce and consume goods.

Education plays an important role in solving this problem. When people understand the impact of plastic pollution, they are more likely to change their habits. Schools and communities can teach people how to reduce, reuse, and recycle. Small actions by many individuals can add up to a big difference.`,
    question: '第2段落の空所に入る語句として最も適切なものを選びなさい。\n「These efforts are not ______; we need a complete change.」\n① enough\n② too much\n③ important\n④ impossible',
    answer: '①',
    hint: '直後に「we need a complete change」とあることから、現状の努力が「十分ではない」という流れを考えよう。',
    explanation: '【読解のポイント】逆接の接続詞 "However" の後に来る文なので、「現在の取り組みでは不十分だ」という否定的な内容が続きます。"not enough（十分でない）" が文脈に合います。',
    pitfall: '"too much" を選んでしまうと「やりすぎ」という意味になってしまい、文意が逆になるので注意。',
    memoryTip: '"However" や "But" の後は前の内容を否定・制限する内容が来ることが多い！',
  },
  {
    id: 'koko_moshi_eigo_03',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Artificial intelligence, or AI, is rapidly changing many aspects of our lives. In medicine, AI can analyze thousands of medical images in seconds to detect diseases like cancer at an early stage. In transportation, self-driving cars powered by AI are being tested in cities around the world. In education, AI tutors can personalize lessons for each student based on their learning pace and style.

However, AI also raises important questions. As AI takes over more tasks, some jobs may disappear. Workers in industries like manufacturing and data entry face the risk of being replaced by machines. This could increase inequality if the benefits of AI are not shared fairly across society.

Despite these concerns, most experts believe that AI will ultimately create more jobs than it destroys. New technologies have always changed the job market throughout history, and humans have always adapted. The key is to prepare for the future by learning new skills and embracing change.`,
    question: '本文の内容と一致するものを選びなさい。\n① AIは医療・交通・教育の分野で活用されている。\n② AIの普及により、将来的に全ての仕事がなくなる。\n③ 専門家のほとんどはAIが雇用を大幅に減らすと考えている。\n④ 製造業はAIの恩恵を最も受けている分野だ。',
    answer: '①',
    hint: '第1段落に医療・交通・教育の3分野についての具体例が述べられているよ。',
    explanation:
      '【何を聞かれているか】\n本文（AIの活用についての説明文）の内容と一致する選択肢を選ぶ問題。\n\n【なぜ極端な表現の選択肢に注意するのか】\n「全て（all）」「必ず（always）」のような極端な言い切りの選択肢は、本文が「一部（some）」としか述べていない場合に不一致になりやすい。内容一致問題の定番のひっかけパターン。\n\n【ポイント1】本文の具体例を確認する\n第1段落で"In medicine"（医療分野で）、"In transportation"（交通分野で）、"In education"（教育分野で）という3つの活用例が挙げられている。\n\n【ポイント2】選択肢②のひっかけを見抜く\n②「全ての仕事がなくなる」は、本文の「一部の仕事が消える可能性がある（some jobs may disappear）」という内容を過大に言い換えたもので、本文とは一致しない。\n\n【ポイント3】選択肢③のひっかけを見抜く\n③「専門家のほとんどはAIが雇用を大幅に減らすと考えている」は本文と逆。本文では専門家は「最終的に雇用が増える」と述べている。\n\n【答え】\n①\n\n【確かめ】\n選んだ選択肢が、第1段落で挙げられた「医療・交通・教育」という3分野の具体例と一致しているか確認する。\n\n【よくあるまちがい】\n本文に出てくる単語（雇用・仕事）だけを見て、内容をよく確認せずに選択肢を選んでしまうミス。「全て」「大幅に」のような極端な表現には特に注意する。\n\n【ここが絶対】\n内容一致問題では、選択肢の中の「all/every/always/never」などの極端な表現は不正解になりやすいと覚えておく。',
    pitfall: '②の「全ての仕事」という表現は本文に書かれていない。本文は「some jobs may disappear」（一部の仕事）と述べているだけ。',
    memoryTip: '選択肢の "all / every / always / never" などの「極端な表現」は不正解になりやすい！',
  },
  {
    id: 'koko_moshi_eigo_04',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Artificial intelligence, or AI, is rapidly changing many aspects of our lives. In medicine, AI can analyze thousands of medical images in seconds to detect diseases like cancer at an early stage. In transportation, self-driving cars powered by AI are being tested in cities around the world. In education, AI tutors can personalize lessons for each student based on their learning pace and style.

However, AI also raises important questions. As AI takes over more tasks, some jobs may disappear. Workers in industries like manufacturing and data entry face the risk of being replaced by machines. This could increase inequality if the benefits of AI are not shared fairly across society.

Despite these concerns, most experts believe that AI will ultimately create more jobs than it destroys. New technologies have always changed the job market throughout history, and humans have always adapted. The key is to prepare for the future by learning new skills and embracing change.`,
    question: '第3段落で筆者が最も伝えたいことは何か。\n① 技術の進歩は社会の不平等を生む。\n② 歴史を振り返ると、技術革新は常に失業をもたらした。\n③ 変化に備え、新しいスキルを身に付けることが重要だ。\n④ AIは最終的に医療分野でしか役に立たない。',
    answer: '③',
    hint: '第3段落の最後の文 "The key is to prepare for the future by learning new skills and embracing change." に注目しよう。',
    explanation: '【読解のポイント】英文では最後の段落の最後の文が筆者の結論・主張になることが多いです。"The key is to ..." という表現は「最も重要なことは〜だ」という意味で、筆者の主張を明確に示しています。',
    pitfall: '②は「技術革新が失業をもたらした」という内容は本文に含まれるが、筆者の主張ではなく背景情報に過ぎない。',
    memoryTip: '"The key is to ～" / "What is important is ～" はライターの主張を示す重要表現！',
  },
  {
    id: 'koko_moshi_eigo_05',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Sleep is essential for both physical and mental health. During sleep, the body repairs damaged cells, strengthens the immune system, and consolidates memories. Teenagers, in particular, need 8 to 10 hours of sleep per night to support their rapid growth and development.

However, many teenagers today are not getting enough sleep. The widespread use of smartphones and social media at night is a major factor. The blue light emitted by screens interferes with the production of melatonin, a hormone that signals the body to sleep. As a result, many young people find it difficult to fall asleep at a reasonable hour.

Lack of sleep has serious consequences. Students who do not sleep enough tend to have lower grades, poorer concentration, and worse emotional regulation. Some studies have also linked chronic sleep deprivation to an increased risk of depression and anxiety. Schools and families need to work together to help teenagers develop healthier sleep habits.`,
    question: '下線部 "consolidates memories" の意味として最も近いものを選びなさい。\n① 記憶を消去する\n② 記憶を整理・定着させる\n③ 記憶を増やす\n④ 記憶を混乱させる',
    answer: '②',
    hint: 'consolidate は「強化する・まとめる」という意味。睡眠中に脳が何をしているかを文脈から考えてみよう。',
    explanation: '【読解のポイント】"consolidate" は「固める・強化する・統合する」という意味の動詞です。睡眠中に記憶が「整理されて定着する」という科学的事実に基づいた表現で、②が正解です。文脈（体の修復・免疫強化と並列）からも「良い効果」であることが読み取れます。',
    pitfall: '①の「消去する」は全く逆の意味。語彙問題は前後の文脈と語の根本的な意味を組み合わせて考えよう。',
    memoryTip: 'consolidate = con（一緒に）+ solid（固い）→「しっかりまとめる」とイメージ！',
  },
  {
    id: 'koko_moshi_eigo_06',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Sleep is essential for both physical and mental health. During sleep, the body repairs damaged cells, strengthens the immune system, and consolidates memories. Teenagers, in particular, need 8 to 10 hours of sleep per night to support their rapid growth and development.

However, many teenagers today are not getting enough sleep. The widespread use of smartphones and social media at night is a major factor. The blue light emitted by screens interferes with the production of melatonin, a hormone that signals the body to sleep. As a result, many young people find it difficult to fall asleep at a reasonable hour.

Lack of sleep has serious consequences. Students who do not sleep enough tend to have lower grades, poorer concentration, and worse emotional regulation. Some studies have also linked chronic sleep deprivation to an increased risk of depression and anxiety. Schools and families need to work together to help teenagers develop healthier sleep habits.`,
    question: '本文によると、ティーンエイジャーの睡眠不足の主な原因は何か。\n① 勉強のプレッシャーが大きすぎるから\n② スマートフォンやSNSの夜間使用\n③ 学校が早朝から始まるから\n④ メラトニンが過剰に分泌されるから',
    answer: '②',
    hint: '第2段落の "The widespread use of smartphones and social media at night is a major factor." に注目！',
    explanation: '【読解のポイント】"a major factor（主な要因）" という表現が正解の根拠です。スマートフォンのブルーライトがメラトニンの分泌を妨げ、眠れなくなるという因果関係が述べられています。④はメラトニンが「減少する」のが正しく、「過剰分泌」ではないので誤り。',
    pitfall: '④メラトニンについて書かれているが、本文は「interferes with the production of melatonin（メラトニン生成を妨げる）」なので、逆の内容。',
    memoryTip: '"a major factor" = 「主な原因・要因」→試験でよく使われる重要表現！',
  },
  {
    id: 'koko_moshi_eigo_07',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `The concept of a "smart city" refers to an urban area that uses digital technology and data to improve services and quality of life for its residents. Smart cities use sensors and the Internet of Things (IoT) to collect data on everything from traffic flow to energy consumption. This information is then analyzed to make city services more efficient and responsive.

For example, smart traffic lights can adjust their timing based on real-time traffic data, reducing congestion and travel time. Smart waste management systems can alert collection teams when bins are full, cutting down unnecessary trips. Smart energy grids can balance supply and demand more effectively, reducing waste and lowering costs.

Critics of smart cities argue that collecting so much data raises serious privacy concerns. Citizens may not be comfortable with being constantly monitored by sensors and cameras. Governments and city planners must therefore strike a balance between using data to improve efficiency and protecting the privacy and rights of individuals.`,
    question: '本文の段落構成として最も正確な説明を選びなさい。\n① 第1段落＝反論、第2段落＝主張、第3段落＝結論\n② 第1段落＝定義、第2段落＝具体例、第3段落＝課題と提言\n③ 第1段落＝歴史、第2段落＝比較、第3段落＝まとめ\n④ 第1段落＝原因、第2段落＝問題点、第3段落＝解決策',
    answer: '②',
    hint: '各段落の最初の文と全体のテーマを確認しよう。「スマートシティとは何か？」→「具体的にどうなっているか？」→「批判と課題は？」という流れ。',
    explanation:
      '【何を聞かれているか】\n本文の段落構成（各段落が何を述べているか）を正しく説明した選択肢を選ぶ問題。\n\n【なぜ各段落の最初の文に注目するのか】\n論説文では、各段落の最初の文（トピックセンテンス）にその段落の要点がまとめられていることが多い。全文を精読しなくても、最初の文を確認するだけで段落の役割がわかる。\n\n【ポイント1】第1段落の役割を確認する\n「スマートシティとは何か」という定義が述べられている。\n\n【ポイント2】第2段落の役割を確認する\n"For example"（例えば）という語で始まり、交通・ゴミ・エネルギーの具体例が挙げられている。\n\n【ポイント3】第3段落の役割を確認する\nプライバシーに関する課題と、「バランスが必要」という提言が述べられている。\n\n【答え】\n②\n\n【確かめ】\n選んだ選択肢の「定義→具体例→課題と提言」という流れが、各段落の最初の文の内容と一致しているか確認する。\n\n【よくあるまちがい】\n段落構成問題を、本文全体を細部まで読み込んでから解こうとして時間をかけすぎるミス。まずは各段落の最初の1文を確認するだけでほぼ判断できる。\n\n【ここが絶対】\n英文論説文の黄金パターンは「①定義・導入→②具体例・詳細→③課題・結論」。この型を覚えておくと段落構成問題を素早く解ける。',
    pitfall: '段落構成問題は「各段落の最初の1文」を読むだけでほぼ判断できる。全文精読の前にトピックセンテンスを確認しよう。',
    memoryTip: '英文論説の黄金パターン：①定義・導入 → ②具体例・詳細 → ③課題・結論',
  },
  {
    id: 'koko_moshi_eigo_08',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `The concept of a "smart city" refers to an urban area that uses digital technology and data to improve services and quality of life for its residents. Smart cities use sensors and the Internet of Things (IoT) to collect data on everything from traffic flow to energy consumption. This information is then analyzed to make city services more efficient and responsive.

For example, smart traffic lights can adjust their timing based on real-time traffic data, reducing congestion and travel time. Smart waste management systems can alert collection teams when bins are full, cutting down unnecessary trips. Smart energy grids can balance supply and demand more effectively, reducing waste and lowering costs.

Critics of smart cities argue that collecting so much data raises serious privacy concerns. Citizens may not be comfortable with being constantly monitored by sensors and cameras. Governments and city planners must therefore strike a balance between using data to improve efficiency and protecting the privacy and rights of individuals.`,
    question: '本文中の "strike a balance" の意味として最も適切なものを選びなさい。\n① 一方を犠牲にする\n② 両者のバランスをうまく保つ\n③ データ収集を禁止する\n④ プライバシーを最優先にする',
    answer: '②',
    hint: '"strike a balance between A and B" でよく使われるイディオム。AとBの間で何をするかをイメージしよう。',
    explanation:
      '【何を聞かれているか】\n本文中の熟語 "strike a balance" の意味として最も適切なものを選ぶ問題。\n\n【なぜ「両者を大切にする」という意味になるのか】\n"strike a balance between A and B"は「AとBの間でバランスをうまく取る」という意味の決まった言い回しで、strikeはここでは「（バランスを）達成する・打ち立てる」という意味で使われている。\n\n【ポイント1】前後の文脈を確認する\n本文では「効率性の追求」と「個人のプライバシー保護」という、2つの異なる価値の間でバランスを取ることが求められている。\n\n【ポイント2】選択肢のひっかけを見抜く\n①「一方を犠牲にする」は意味が逆で、balanceは両方を大切にするというニュアンス。③④はそれぞれ「収集の禁止」「片方の最優先」であり、どちらも「バランス」の意味とは異なる。\n\n【ポイント3】strikeの意味を確認する\nstrikeには「打つ」以外に「（合意・バランスなどを）成立させる」という意味がある。\n\n【答え】\n②\n\n【確かめ】\n"strike a balance between efficiency and privacy"を「効率性とプライバシーのバランスをうまく取る」と訳し、文脈に合っているか確認する。\n\n【よくあるまちがい】\nstrikeを「打つ・攻撃する」という基本の意味だけで解釈し、①のような「犠牲にする」という誤った意味を選んでしまうミス。\n\n【ここが絶対】\n"strike a balance between A and B"＝AとBのバランスをうまく取る、という重要イディオムとしてセットで覚えておく。',
    pitfall: '①「一方を犠牲にする」は意味が逆。"balance" は両方を大切にするというニュアンス。',
    memoryTip: '"strike a balance" = バランスを「打ち立てる」。strike は「達成する」の意味でも使われる！',
  },
  {
    id: 'koko_moshi_eigo_09',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Volunteering is an activity in which people give their time and energy freely to help others or benefit their community. Research has shown that volunteering has numerous benefits not only for the recipients of help but also for the volunteers themselves.

Studies indicate that people who volunteer regularly report higher levels of happiness and life satisfaction compared to those who do not. Volunteering provides a sense of purpose and connection to others, which can improve mental health. For elderly people in particular, volunteering has been shown to reduce loneliness and keep the mind active.

From a social perspective, volunteering strengthens communities. When neighbors help each other, trust is built and social bonds are reinforced. Many important community services, such as food banks, literacy programs, and disaster relief efforts, depend entirely on volunteers. Without these dedicated individuals, many vulnerable members of society would not receive the support they need.`,
    question: '高齢者にとってボランティアが特に有益である理由を本文から選びなさい。\n① 収入を得られるから\n② 孤独感を減らし、頭を活性化させるから\n③ 若い人と同じ仕事ができるから\n④ 地域サービスの責任者になれるから',
    answer: '②',
    hint: '第2段落の最後の文 "For elderly people in particular, volunteering has been shown to reduce loneliness and keep the mind active." を確認しよう。',
    explanation:
      '【何を聞かれているか】\n高齢者にとってボランティアが特に有益である理由を、本文から選ぶ問題。\n\n【なぜ"in particular"に注目するのか】\n"in particular"（特に・とりわけ）という表現は、その直後に重要な情報が続くことを示す目印。設問が「高齢者にとって特に」と聞いているので、この表現の直後を確認すればよい。\n\n【ポイント1】該当する文を確認する\n第2段落の最後の文"For elderly people in particular, volunteering has been shown to reduce loneliness and keep the mind active."（特に高齢者にとって、ボランティアは孤独感を減らし、頭を活発に保つことが示されている）。\n\n【ポイント2】2つの効果を確認する\n"reduce loneliness"（孤独を減らす）と"keep the mind active"（頭を活発に保つ）の2点が、選択肢②の内容と一致する。\n\n【ポイント3】選択肢①のひっかけを見抜く\n①「収入を得られるから」は、本文の"volunteering"（ボランティア＝無償の活動）という前提と矛盾する。\n\n【答え】\n②\n\n【確かめ】\n選んだ選択肢が「孤独感を減らす」「頭を活性化させる」という本文の2つのポイントの両方を含んでいるか確認する。\n\n【よくあるまちがい】\nボランティアという語のイメージだけで①のような「収入」に関する選択肢を選んでしまうミス。ボランティアは基本的に無償の活動であることを本文と合わせて確認する。\n\n【ここが絶対】\n"in particular"（特に）という表現の直後には、設問で問われる重要な情報が置かれていることが多い。',
    pitfall: '①「収入を得る」は「freely（無償で）」と矛盾する。ボランティアは無報酬であることを確認しよう。',
    memoryTip: '"in particular" = 「特に・とりわけ」→重要な情報の前に置かれる目印の表現！',
  },
  {
    id: 'koko_moshi_eigo_10',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `The rise of remote work has transformed the modern workplace. Before the COVID-19 pandemic, working from home was a privilege enjoyed by relatively few employees. However, the pandemic forced millions of workers around the world to work remotely almost overnight. Companies that had been reluctant to allow remote work discovered that productivity did not necessarily decline.

Now, many companies have adopted hybrid models, allowing employees to split their time between the office and home. Workers report many advantages: no commuting time, more flexibility to manage family responsibilities, and better work-life balance. However, remote work also has drawbacks. Some employees feel isolated and miss the social interaction of the office. Others find it difficult to separate work from personal life when both happen in the same space.

The future of work will likely continue to evolve. Companies and employees will need to negotiate new arrangements that balance productivity, well-being, and collaboration.`,
    question: '本文の内容と一致しないものを選びなさい。\n① パンデミック前はリモートワークをしている人は比較的少なかった。\n② パンデミックにより、多くの企業が否応なくリモートワークに移行した。\n③ リモートワークには通勤時間の削減というメリットがある。\n④ リモートワーク導入後、すべての企業で生産性が下がった。',
    answer: '④',
    hint: '"productivity did not necessarily decline" という表現に注目しよう。',
    explanation: '【読解のポイント】本文は "productivity did not necessarily decline（生産性が必ずしも低下したわけではない）" と述べており、「すべての企業で生産性が下がった」という④は本文と矛盾します。"not necessarily" は「必ずしも〜ではない」という重要表現です。',
    pitfall: '内容一致「しない」問題では、各選択肢を本文と照らし合わせて、一つひとつ確認することが大切。',
    memoryTip: '"not necessarily" = 「必ずしも〜ではない」→部分否定の重要表現！',
  },
  {
    id: 'koko_moshi_eigo_11',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Biodiversity refers to the variety of life on Earth, including all species of plants, animals, fungi, and microorganisms, as well as the ecosystems they form. Scientists estimate that there are between 8 and 10 million species on our planet, although only about 1.5 million have been formally identified and named.

Biodiversity is not just about the number of species. It is also about the health and balance of ecosystems. Every species plays a role in maintaining the balance of nature. For example, bees pollinate flowers, which allows plants to reproduce. Without bees, many crops that humans depend on for food would disappear.

Unfortunately, biodiversity is declining at an alarming rate due to human activities. Deforestation, pollution, climate change, and the introduction of invasive species are the leading causes. The loss of biodiversity can trigger a chain reaction, causing entire ecosystems to collapse. Protecting biodiversity is therefore one of the most urgent environmental challenges of our time.`,
    question: '下線部 "trigger a chain reaction" の意味として最も適切なものを選びなさい。\n① 連鎖反応を引き起こす\n② 問題を一度に解決する\n③ 環境を徐々に改善する\n④ 生物の進化を加速させる',
    answer: '①',
    hint: '"trigger" = 引き起こす、"chain reaction" = 連鎖反応。前後の文脈（生態系の崩壊）も参考にしよう。',
    explanation:
      '【何を聞かれているか】\n下線部 "trigger a chain reaction" の意味として最も適切なものを選ぶ問題。\n\n【なぜ「連鎖反応を引き起こす」という意味になるのか】\n"trigger"は「（銃の）引き金」が元の意味で、そこから「（ある出来事の）引き金を引く→引き起こす」という動詞として使われる。"chain reaction"は「鎖のようにつながって起こる反応＝連鎖反応」。\n\n【ポイント1】前後の文脈を確認する\n生物多様性の喪失についての文章で、"trigger a chain reaction"は「連鎖反応を引き起こし、生態系全体が崩壊する」という悪い結果につながる文脈で使われている。\n\n【ポイント2】選択肢②のひっかけを見抜く\n②「問題を一度に解決する」はポジティブな意味だが、本文全体はネガティブな（問題が悪化する）文脈なので、意味が正反対になり不一致。\n\n【ポイント3】triggerのイメージを持つ\n「銃の引き金を引く」イメージで覚えると、「何かをきっかけに一気に事が起こる」というニュアンスがつかみやすい。\n\n【答え】\n①\n\n【確かめ】\n"trigger a chain reaction"を「連鎖反応を引き起こす」と訳し、生態系が悪化していくという文脈と一致することを確認する。\n\n【よくあるまちがい】\n文章全体のトーン（悪い方向への変化）を確認せずに、単語のイメージだけで②のようなポジティブな意味を選んでしまうミス。\n\n【ここが絶対】\ntrigger＝引き金を引く→何かを引き起こす、という動詞として頻出。文脈がポジティブかネガティブかも必ず確認する。',
    pitfall: '②「一度に解決する」は文脈と逆の意味。文章全体がネガティブな（問題悪化の）文脈なので注意。',
    memoryTip: 'trigger = 引き金を引く → 「何かを引き起こす」という動詞として頻出！',
  },
  {
    id: 'koko_moshi_eigo_12',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Biodiversity refers to the variety of life on Earth, including all species of plants, animals, fungi, and microorganisms, as well as the ecosystems they form. Scientists estimate that there are between 8 and 10 million species on our planet, although only about 1.5 million have been formally identified and named.

Biodiversity is not just about the number of species. It is also about the health and balance of ecosystems. Every species plays a role in maintaining the balance of nature. For example, bees pollinate flowers, which allows plants to reproduce. Without bees, many crops that humans depend on for food would disappear.

Unfortunately, biodiversity is declining at an alarming rate due to human activities. Deforestation, pollution, climate change, and the introduction of invasive species are the leading causes. The loss of biodiversity can trigger a chain reaction, causing entire ecosystems to collapse. Protecting biodiversity is therefore one of the most urgent environmental challenges of our time.`,
    question: 'ミツバチに関して本文が述べていることとして正しいものを選びなさい。\n① ミツバチは気候変動によって絶滅した。\n② ミツバチは花粉を運び、植物の繁殖を助ける。\n③ ミツバチがいなくても食料生産に影響はない。\n④ ミツバチは外来種として生態系を破壊している。',
    answer: '②',
    hint: '第2段落の "bees pollinate flowers, which allows plants to reproduce" に注目しよう。',
    explanation:
      '【何を聞かれているか】\nミツバチに関して本文が述べている内容として正しいものを選ぶ問題。\n\n【なぜ関係代名詞whichの指す内容を確認するのか】\n"which"が前の節全体を受けて「そしてそれは〜」という意味を追加することがある。この構造を正しく読めないと、文の意味を取り違えてしまう。\n\n【ポイント1】該当する文を確認する\n第2段落の"bees pollinate flowers, which allows plants to reproduce"（ミツバチは花を受粉させ、それによって植物が繁殖できるようになる）。\n\n【ポイント2】whichの指す内容を確認する\nここでのwhichは「ミツバチが花を受粉させること」という前の節全体を指しており、「そしてそれが植物の繁殖を可能にする」という意味を追加している。\n\n【ポイント3】選択肢③のひっかけを見抜く\n③「ミツバチがいなくても食料生産に影響はない」は、本文の"Without bees, many crops would disappear"（ミツバチがいなければ多くの作物が消えてしまう）と正反対の内容。\n\n【答え】\n②\n\n【確かめ】\n"pollinate flowers"（花粉を運ぶ・受粉させる）と"allows plants to reproduce"（植物の繁殖を助ける）という2つの内容が、選択肢②とそのまま一致することを確認する。\n\n【よくあるまちがい】\nwhichが指す内容を「flowers（花）」のような直前の1語だけだと誤解してしまうミス。ここでのwhichは前の節全体（bees pollinate flowers ということ）を指している。\n\n【ここが絶対】\n関係代名詞whichが前の節全体を受ける用法は高校入試頻出。カンマの後のwhichは「そしてそれは」と訳して文の構造を確認する。',
    pitfall: '③は「Without bees, many crops would disappear（ミツバチがいないと多くの作物が消える）」と矛盾する。',
    memoryTip: '"which" が関係代名詞として前の節全体を受ける用法は高校入試頻出！文の構造をしっかり把握しよう。',
  },

  // ============================================================
  // 長文読解（物語・Eメール・対話）: 10問
  // ============================================================
  {
    id: 'koko_moshi_eigo_13',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Yuki was nervous on her first day at the international school. She had moved from Osaka to Sydney just three weeks ago, and her English was still not very good. As she walked into the classroom, all the other students turned to look at her. Her face turned red.

"Hi! My name is Emma. Want to sit next to me?" a girl with red hair said with a bright smile.

Yuki hesitated for a moment, then nodded. "Thank you," she whispered.

During lunch, Emma introduced Yuki to her friends. They asked Yuki about Japan — about food, anime, and places to visit. Yuki was surprised to find that her classmates knew a lot about Japanese culture. She started to feel more relaxed.

By the end of the day, Yuki realized something important: she had been so afraid of making mistakes in English that she had forgotten that communication is not just about grammar — it is about connecting with people.`,
    question: 'Yukiが授業最初に感じた感情として最も適切なものを選びなさい。\n① 喜び\n② 怒り\n③ 緊張・恥ずかしさ\n④ 退屈',
    answer: '③',
    hint: '"Yuki was nervous" という表現と、"Her face turned red" という描写を確認しよう。',
    explanation:
      '【何を聞かれているか】\n物語文を読んで、Yukiが授業の最初に感じた感情を選ぶ問題。\n\n【なぜ感情語と行動描写の両方を見るのか】\n物語の心情問題では、"nervous"のような感情を直接表す語と、"her face turned red"のような体の反応の描写の両方が、同じ心情を裏付ける手がかりになる。\n\n【ポイント1】感情語を確認する\n本文に"Yuki was nervous"（緊張していた）と直接書かれている。\n\n【ポイント2】行動・様子の描写を確認する\n"Her face turned red"（顔が赤くなった）という描写も、緊張や恥ずかしさを表す典型的な体の反応。\n\n【ポイント3】選択肢②のひっかけを見抜く\n「顔が赤くなった」だけを見ると「怒り」を連想しがちだが、初日で新しい環境・英語への不安という状況から、怒りではなく緊張・恥ずかしさだと判断できる。\n\n【答え】\n③\n\n【確かめ】\n"nervous"という感情語と"her face turned red"という描写の両方が、選んだ選択肢「緊張・恥ずかしさ」と矛盾なくつながることを確認する。\n\n【よくあるまちがい】\n「顔が赤くなった」という描写だけを見て、状況を確認せずに「怒り」だと判断してしまうミス。体の反応は複数の感情に共通することがあるため、必ず状況説明もあわせて確認する。\n\n【ここが絶対】\n物語の心情問題は「感情を表す語」と「場面・状況」の両方をセットで確認して判断する。',
    pitfall: '「Her face turned red」だけを見て「怒り」と判断しないこと。文脈（初日・新環境・英語が不安）から「緊張・恥ずかしさ」と判断できる。',
    memoryTip: '心情問題は「感情を表す語」＋「場面や状況」を合わせて判断しよう！',
  },
  {
    id: 'koko_moshi_eigo_14',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Yuki was nervous on her first day at the international school. She had moved from Osaka to Sydney just three weeks ago, and her English was still not very good. As she walked into the classroom, all the other students turned to look at her. Her face turned red.

"Hi! My name is Emma. Want to sit next to me?" a girl with red hair said with a bright smile.

Yuki hesitated for a moment, then nodded. "Thank you," she whispered.

During lunch, Emma introduced Yuki to her friends. They asked Yuki about Japan — about food, anime, and places to visit. Yuki was surprised to find that her classmates knew a lot about Japanese culture. She started to feel more relaxed.

By the end of the day, Yuki realized something important: she had been so afraid of making mistakes in English that she had forgotten that communication is not just about grammar — it is about connecting with people.`,
    question: 'この物語のテーマとして最も適切なものを選びなさい。\n① 英語の文法を完璧にマスターすることの重要性\n② 異文化を持つ人同士でもつながれるというコミュニケーションの本質\n③ 海外で生活することの危険性\n④ アニメが国際交流に果たす役割',
    answer: '②',
    hint: '最後の段落のYukiの気づき（"communication is not just about grammar — it is about connecting with people"）がこの物語の核心。',
    explanation:
      '【何を聞かれているか】\nこの物語のテーマ（作品全体が伝えたいメッセージ）として最も適切なものを選ぶ問題。\n\n【なぜ最後の段落の気づきに注目するのか】\n物語のテーマは、多くの場合、主人公が物語の終わりで得る「気づき・成長・変化」に集約されている。細部のエピソードではなく、この最終的な気づきを見つけることがテーマ把握のコツ。\n\n【ポイント1】Yukiの気づきを確認する\n最後の段落で"communication is not just about grammar — it is about connecting with people"（コミュニケーションは文法だけの問題ではなく、人とつながることだ）と気づいている。\n\n【ポイント2】選択肢②が気づきと一致することを確認する\n「異文化を持つ人同士でもつながれるというコミュニケーションの本質」は、Yukiの気づきをそのまま言い換えたもの。\n\n【ポイント3】選択肢④のひっかけを見抜く\n④「アニメが国際交流に果たす役割」は、物語の中で会話のきっかけとして登場するエピソードの一つにすぎず、物語全体のテーマではない。\n\n【答え】\n②\n\n【確かめ】\n選んだ選択肢が、Yukiの最後の気づき（文法よりも人とつながることが大切）の内容と一致しているか確認する。\n\n【よくあるまちがい】\n物語の途中に出てくる印象的な出来事（アニメの話など）を、そのままテーマだと思ってしまうミス。細部のエピソードと物語全体のテーマを混同しないこと。\n\n【ここが絶対】\n物語のテーマ問題は「主人公の最後の気づき・変化」を最終段落から探せば見つかる。',
    pitfall: '④アニメは会話のきっかけに登場するが、物語の主テーマではない。細部の情報とテーマを混同しないよう注意。',
    memoryTip: '物語のテーマは「主人公の最後の気づき・変化」を探せば見つかる！',
  },
  {
    id: 'koko_moshi_eigo_15',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `From: Tom Henderson <tom.h@greenvalleyhs.edu>
To: Maria Santos <maria.s@greenvalleyhs.edu>
Subject: Our Environment Club project
Date: June 10

Hi Maria,

I hope you are doing well. I wanted to write to you about our upcoming Environment Club project. As you know, we have been planning a school cleanup event for next Saturday, June 15.

I have already spoken to the school principal, and she has given us permission to use the school grounds. I have also contacted the local hardware store, and they have agreed to donate 50 garbage bags and 20 pairs of gloves for us to use.

However, I am a little worried about the number of participants. So far, only 12 students have signed up. I think we need at least 30 to make the event a real success. Could you help spread the word through social media? I will make some posters and put them up around school.

Also, I was thinking we could invite local residents to join us. It would be a great way to build stronger ties between the school and the community. What do you think?

Looking forward to hearing from you.

Best,
Tom`,
    question: 'Tomがこのメールを書いた主な目的は何か。\n① クリーンアップイベントの日時を変更するため\n② 学校の許可をもらうため\n③ 参加者を増やすためにMariaに協力を求めるため\n④ 地元のハードウェアストアに寄付を依頼するため',
    answer: '③',
    hint: 'メールの第3段落の "Could you help spread the word through social media?" という依頼文に注目しよう。',
    explanation:
      '【何を聞かれているか】\nTomがこのメールを書いた主な目的を選ぶ問題。\n\n【なぜ依頼表現に注目するのか】\nEメールの目的を問う問題では、「Could you ～?」のような依頼表現がある文に、書き手が本当に伝えたいこと（メールを書いた理由）が表れていることが多い。\n\n【ポイント1】該当する文を確認する\n第3段落の"Could you help spread the word through social media?"（SNSで宣伝を広めるのを手伝ってもらえますか）という依頼文。\n\n【ポイント2】依頼の背景を確認する\nTomは参加者が現在12人しかおらず、30人必要だと懸念しており、その解決のためにMariaに協力を依頼している。\n\n【ポイント3】他の選択肢が「既に完了したこと」であると見抜く\n②「学校の許可をもらうため」や④「ハードウェアストアへの寄付依頼」は、本文中で既に完了している出来事として書かれており、これから頼みたいこと（メールの目的）ではない。\n\n【答え】\n③\n\n【確かめ】\nメールの後半にある依頼文の内容が、選んだ選択肢「参加者を増やすための協力依頼」と一致しているか確認する。\n\n【よくあるまちがい】\nメールに登場する情報をすべて同じ重みで扱い、既に完了したこと（許可を得た、寄付をもらった）と、これから頼みたいこと（メールの目的）を区別せずに選んでしまうミス。\n\n【ここが絶対】\nメールの目的問題は「Could you ～?」「I was wondering if ～」のような依頼表現を探せば見つかる。',
    pitfall: '②③④はすべてメールに登場するが、②と④はすでに「完了済み」のこと。主目的はまだ達成されていない「依頼」の部分。',
    memoryTip: 'メール問題の目的は「Could you ～?」「I was wondering if ～」などの依頼表現を探せば分かる！',
  },
  {
    id: 'koko_moshi_eigo_16',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `From: Tom Henderson <tom.h@greenvalleyhs.edu>
To: Maria Santos <maria.s@greenvalleyhs.edu>
Subject: Our Environment Club project
Date: June 10

Hi Maria,

I hope you are doing well. I wanted to write to you about our upcoming Environment Club project. As you know, we have been planning a school cleanup event for next Saturday, June 15.

I have already spoken to the school principal, and she has given us permission to use the school grounds. I have also contacted the local hardware store, and they have agreed to donate 50 garbage bags and 20 pairs of gloves for us to use.

However, I am a little worried about the number of participants. So far, only 12 students have signed up. I think we need at least 30 to make the event a real success. Could you help spread the word through social media? I will make some posters and put them up around school.

Also, I was thinking we could invite local residents to join us. It would be a great way to build stronger ties between the school and the community. What do you think?

Looking forward to hearing from you.

Best,
Tom`,
    question: 'このメールの内容と一致するものを選びなさい。\n① イベントは来週の日曜日に行われる予定だ。\n② 地元のハードウェアストアがゴミ袋と手袋を提供してくれる。\n③ 現在30人の学生がサインアップしている。\n④ 学校長はまだ許可を与えていない。',
    answer: '②',
    hint: '第2段落の "they have agreed to donate 50 garbage bags and 20 pairs of gloves" を確認しよう。',
    explanation:
      '【何を聞かれているか】\nこのメールの内容と一致する選択肢を選ぶ問題。\n\n【なぜ数字や固有名詞に印をつけるのか】\n内容一致問題では、曜日・人数・数量などの細かい情報が選択肢で少しだけ変えられていることが多い。本文の該当箇所と選択肢の数字を1つずつ照合する必要がある。\n\n【ポイント1】該当する文を確認する\n第2段落の"they have agreed to donate 50 garbage bags and 20 pairs of gloves"（ゴミ袋50枚と手袋20組の寄付に同意してくれた）。\n\n【ポイント2】他の選択肢を本文と照合する\n①イベントは「来週の土曜日（next Saturday）」であり日曜日ではない。③現在の参加者は「12人」のみ（30人が目標）。④校長は「すでに許可を与えた（she has given us permission）」とあり、まだ与えていないという内容と矛盾。\n\n【ポイント3】②が本文と一致することを確認する\n「ハードウェアストアがゴミ袋と手袋を提供」という内容は、寄付に同意したという本文の内容とそのまま一致する。\n\n【答え】\n②\n\n【確かめ】\n選択肢②の「ゴミ袋と手袋の提供」が、本文の"donate 50 garbage bags and 20 pairs of gloves"と一致していることを確認する。\n\n【よくあるまちがい】\n曜日・人数などの細部をうろ覚えのまま選んでしまうミス。内容一致問題は必ず本文の該当箇所に戻って数字や固有名詞を照合する。\n\n【ここが絶対】\n内容一致問題は選択肢の「数字・固有名詞・時制」に注目し、本文の該当箇所と1つずつ照合する習慣をつける。',
    pitfall: '曜日・人数・数字などの細部を問う問題は本文をしっかり照合すること。うろ覚えで選ぶと間違えやすい。',
    memoryTip: '内容一致問題は選択肢の「数字・固有名詞・時制」に印をつけて本文と照合する習慣をつけよう！',
  },
  {
    id: 'koko_moshi_eigo_17',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `A: Excuse me. Could you tell me how to get to the nearest train station?
B: Sure! Go straight down this street for about two blocks, then turn left at the traffic light.
A: Turn left at the traffic light. Got it. Is it far from there?
B: Not really. It should be about a five-minute walk. You'll see a convenience store on your right just before you get there.
A: A convenience store on the right. Great. By the way, do you know what time the last train leaves?
B: Hmm, I think it's around 11:30 at night, but I'm not one hundred percent sure. You might want to check at the station.
A: OK, thank you so much. You've been really helpful.
B: My pleasure. Have a safe trip!`,
    question: 'この対話に関して正しいものを選びなさい。\n① AはBに電車の乗り方を聞いている。\n② 駅まで歩いて約5分かかる。\n③ 最終電車は深夜0時発だとBは確信している。\n④ 駅の右側にコンビニがある。',
    answer: '②',
    hint: '"It should be about a five-minute walk." という表現を確認しよう。',
    explanation: '【読解のポイント】②は "about a five-minute walk（約5分歩く）" と一致します。①Aは「電車の乗り方」ではなく「駅への行き方」を聞いている。③Bは "I\'m not one hundred percent sure" と言っており確信がない。④コンビニは「駅の手前」に「右手に見える」のであって、駅の右側ではない。',
    pitfall: '④の「駅の右側」と「駅に着く手前の右側」は違う。位置関係の細部に注意しよう。',
    memoryTip: '道案内の英語表現：go straight（直進）/ turn left（左折）/ on your right（右手に）は必須ボキャブラリー！',
  },
  {
    id: 'koko_moshi_eigo_18',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Kenji had always dreamed of becoming a professional soccer player. Every day after school, he practiced for two hours in the park near his house. But during a crucial match in his second year of high school, he injured his knee and was told by the doctor that he might never play at a competitive level again.

For weeks, Kenji felt lost and depressed. Soccer had been his whole world. He stopped going to practice and spent most of his time in his room. His mother was worried about him.

One afternoon, his former coach visited him. "Kenji," the coach said, "your knowledge of the game is extraordinary. Have you ever thought about coaching?"

At first, Kenji laughed it off. But as the days went by, the idea grew on him. He started watching games more carefully, analyzing tactics and formations. Slowly, a new passion was born.

Two years later, Kenji became the youngest assistant coach in his region's youth soccer league. He had found a new way to stay connected to the game he loved.`,
    question: 'Kenjiが落ち込んでいた主な理由として正しいものを選びなさい。\n① 学校の成績が悪かったから\n② サッカーを続けられなくなるかもしれないと知ったから\n③ コーチに叱られたから\n④ 母親との関係が悪化したから',
    answer: '②',
    hint: '第1段落の「けがをして競技レベルでプレーできなくなるかもしれない」という医師の言葉とその後のKenjiの反応を確認しよう。',
    explanation:
      '【何を聞かれているか】\n物語文を読んで、Kenjiが落ち込んでいた主な理由を選ぶ問題。\n\n【なぜ原因と結果を区別するのか】\n物語の心情問題では「何が原因でその気持ちになったか」を正確に読み取る必要がある。似たような出来事が複数書かれていても、直接の原因と、そこから生じた結果（周囲の反応など）を混同しないようにする。\n\n【ポイント1】原因となる出来事を確認する\n医師の"he might never play at a competitive level again"（競技レベルで二度とプレーできないかもしれない）という言葉が、Kenjiの落ち込みの直接の原因。\n\n【ポイント2】結果としての心情描写を確認する\nその言葉を受けて、第2段落でKenjiは"lost and depressed"（迷子になったような気持ちで落ち込んだ）状態になる。\n\n【ポイント3】選択肢④のひっかけを見抜く\n④「母親との関係が悪化した」は、母親がKenjiを心配しているという描写から連想されるが、これはKenjiの落ち込みの「結果・反応」であって「原因」ではない。\n\n【答え】\n②\n\n【確かめ】\n「医師の発言（原因）→Kenjiの落ち込み（結果）」という因果関係が、選んだ選択肢と一致しているか確認する。\n\n【よくあるまちがい】\n本文に出てくる出来事を、原因か結果かを区別せずにそのまま選択肢と照合してしまうミス。「なぜそう感じたか」という因果関係を必ず前後の文から確認する。\n\n【ここが絶対】\n物語の心情問題は「原因→結果」の流れを前後の文から探して答える。',
    pitfall: '④母親が心配しているのは事実だが、それはKenjiの落ち込みの「原因」ではなく「結果・反応」。因果関係を混同しないこと。',
    memoryTip: '物語の心情問題は「なぜそう感じたか？」という原因を前後の文から探そう！',
  },
  {
    id: 'koko_moshi_eigo_19',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Kenji had always dreamed of becoming a professional soccer player. Every day after school, he practiced for two hours in the park near his house. But during a crucial match in his second year of high school, he injured his knee and was told by the doctor that he might never play at a competitive level again.

For weeks, Kenji felt lost and depressed. Soccer had been his whole world. He stopped going to practice and spent most of his time in his room. His mother was worried about him.

One afternoon, his former coach visited him. "Kenji," the coach said, "your knowledge of the game is extraordinary. Have you ever thought about coaching?"

At first, Kenji laughed it off. But as the days went by, the idea grew on him. He started watching games more carefully, analyzing tactics and formations. Slowly, a new passion was born.

Two years later, Kenji became the youngest assistant coach in his region's youth soccer league. He had found a new way to stay connected to the game he loved.`,
    question: '"the idea grew on him" の意味として最も近いものを選びなさい。\n① アイデアが彼には難しすぎた\n② 徐々にそのアイデアが気に入ってきた\n③ アイデアについて周りに話した\n④ アイデアを完全に否定した',
    answer: '②',
    hint: '前の文 "At first, Kenji laughed it off" と対比して考えよう。最初は否定したが、時間が経つにつれて…',
    explanation:
      '【何を聞かれているか】\n下線部 "the idea grew on him" の意味として最も近いものを選ぶ問題。\n\n【なぜ「だんだん好きになる」という意味になるのか】\n"grow on someone"は「（最初は良いと思わなかったものが）時間とともにだんだん気に入ってくる」という意味の慣用表現。growを「成長する」という文字通りの意味で読むと誤解する。\n\n【ポイント1】前後の対比を確認する\n"At first, Kenji laughed it off"（最初、Kenjiはそれを笑い飛ばした＝否定的だった）という文と対比されている。\n\n【ポイント2】時間の経過を示す語を確認する\n"But as the days went by"（しかし日が経つにつれて）という表現が、心境の変化が時間とともに起きたことを示している。\n\n【ポイント3】選択肢②が文脈と一致することを確認する\n「最初は否定的だったが、だんだん気に入ってきた」という流れが、選択肢②「徐々にそのアイデアが気に入ってきた」と一致する。\n\n【答え】\n②\n\n【確かめ】\n"laughed it off"（最初は否定）→"grew on him"（だんだん気に入る）という心境の変化の流れが、選んだ選択肢と一致することを確認する。\n\n【よくあるまちがい】\n"grow"を「成長する・大きくなる」という文字通りの意味で解釈し、①のような「難しすぎる」という誤った意味を選んでしまうミス。\n\n【ここが絶対】\n"grow on someone"＝だんだん好きになる、という慣用表現としてセットで覚えておく。',
    pitfall: '"grow" を「成長する・大きくなる」という文字通りの意味で解釈すると誤答になる。慣用表現は前後の文脈から判断しよう。',
    memoryTip: '"grow on someone" = だんだん好きになる。"It grows on you." は「じわじわ良さが分かってくる」という感じ！',
  },
  {
    id: 'koko_moshi_eigo_20',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `A: Hey, Mei. You look tired today. Are you okay?
B: Not really. I stayed up until 2 a.m. studying for the English test. I'm so worried about it.
A: I know how you feel. But you've been working really hard all semester. I think you'll do fine.
B: I hope so. I'm especially nervous about the listening section. I always miss important details.
A: Have you tried practicing with English podcasts or movies? That really helped me.
B: That's a good idea. I'll try that. How about you? Are you ready for the test?
A: I think so. I've been focusing on grammar because that's my weak point. I feel more confident now.
B: That's great. I guess we both have different things to work on. Let's do our best!
A: Exactly! Good luck tomorrow.`,
    question: 'この対話の場面として最も適切なものを選びなさい。\n① テストが終わった後の廊下での会話\n② テスト前日の学校での会話\n③ 英語の授業中の会話\n④ 試験会場での会話',
    answer: '②',
    hint: '最後の "Good luck tomorrow" という表現から、テストは明日であることが分かる。',
    explanation:
      '【何を聞かれているか】\n対話文を読んで、この会話が行われている場面を選ぶ問題。\n\n【なぜ時間を表す語に注目するのか】\n場面（いつ・どこで）を問う問題では、"tomorrow"や"yesterday"のような時を表す語や、動詞の時制が大きな手がかりになる。\n\n【ポイント1】該当する表現を確認する\n対話の最後に"Good luck tomorrow"（明日頑張って）とあり、テストがまだ行われていない（明日行われる）ことがわかる。\n\n【ポイント2】他の表現も確認する\n"Are you ready for the test?"（テストの準備はできてる？）という表現も、テストが今後行われることを前提にした質問。\n\n【ポイント3】選択肢①のひっかけを見抜く\n①「テストが終わった後の廊下での会話」は、"tomorrow"（明日）という未来を示す語と矛盾するため誤り。\n\n【答え】\n②\n\n【確かめ】\n"Good luck tomorrow"が「明日のテストに向けて」という意味であることを確認し、この会話がテスト前日に行われていることを確かめる。\n\n【よくあるまちがい】\n"Good luck"という表現だけを見て、テストが終わった後のねぎらいの言葉だと誤解してしまうミス。"tomorrow"という語まで確認して、未来のことだと判断する。\n\n【ここが絶対】\n場面問題は、"tomorrow/yesterday/next week"などの時間を表す語と動詞の時制から特定する。',
    pitfall: '①「テスト後」と誤解しないこと。"Good luck tomorrow" は未来のことを指している。',
    memoryTip: '時制と「明日・昨日・来週」などの時間表現から場面を特定しよう！',
  },
  {
    id: 'koko_moshi_eigo_21',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `A: Hey, Mei. You look tired today. Are you okay?
B: Not really. I stayed up until 2 a.m. studying for the English test. I'm so worried about it.
A: I know how you feel. But you've been working really hard all semester. I think you'll do fine.
B: I hope so. I'm especially nervous about the listening section. I always miss important details.
A: Have you tried practicing with English podcasts or movies? That really helped me.
B: That's a good idea. I'll try that. How about you? Are you ready for the test?
A: I think so. I've been focusing on grammar because that's my weak point. I feel more confident now.
B: That's great. I guess we both have different things to work on. Let's do our best!
A: Exactly! Good luck tomorrow.`,
    question: 'Mei（B）がテストで特に不安に感じているのはどの分野か。\n① 文法\n② 英作文\n③ リスニング\n④ 長文読解',
    answer: '③',
    hint: '"I\'m especially nervous about the listening section." という一文を探してみよう。',
    explanation:
      '【何を聞かれているか】\n対話文を読んで、Mei（B）がテストで特に不安に感じている分野を選ぶ問題。\n\n【なぜ「誰が言ったか」を意識するのか】\n対話文では、A・B（複数の登場人物）がそれぞれ異なる内容を話すことが多い。同じ話題について異なる意見や状況が語られるので、どちらの発言かを取り違えると誤答につながる。\n\n【ポイント1】Meiの発言を確認する\nMeiは"I\'m especially nervous about the listening section"（リスニングセクションが特に不安）とはっきり述べている。\n\n【ポイント2】Aの発言と区別する\n話し相手（A）は文法が弱点だと述べており、Meiの弱点とは異なる。\n\n【ポイント3】"we both have different things to work on"の意味を確認する\n「2人ともそれぞれ違う課題がある」という意味で、AとBの弱点がそれぞれ異なることを表している。\n\n【答え】\n③\n\n【確かめ】\n選んだ選択肢「リスニング」が、Mei自身の発言"I\'m especially nervous about the listening section"と一致していることを確認する。\n\n【よくあるまちがい】\nAの発言（文法が弱点）とMeiの発言を混同し、①「文法」を選んでしまうミス。対話文は必ず「誰が言ったか」を意識しながら読む。\n\n【ここが絶対】\n対話問題は登場人物ごとに発言を整理しながら読み、設問が誰について聞いているかを必ず確認する。',
    pitfall: '①文法はAの弱点であってMeiの弱点ではない。登場人物を混同しないよう、誰が何を言っているかを丁寧に追おう。',
    memoryTip: '対話問題は「誰が言ったか（A / B）」を常に意識しながら読もう！',
  },
  {
    id: 'koko_moshi_eigo_22',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Yuki was nervous on her first day at the international school. She had moved from Osaka to Sydney just three weeks ago, and her English was still not very good. As she walked into the classroom, all the other students turned to look at her. Her face turned red.

"Hi! My name is Emma. Want to sit next to me?" a girl with red hair said with a bright smile.

Yuki hesitated for a moment, then nodded. "Thank you," she whispered.

During lunch, Emma introduced Yuki to her friends. They asked Yuki about Japan — about food, anime, and places to visit. Yuki was surprised to find that her classmates knew a lot about Japanese culture. She started to feel more relaxed.

By the end of the day, Yuki realized something important: she had been so afraid of making mistakes in English that she had forgotten that communication is not just about grammar — it is about connecting with people.`,
    question: '本文の流れとして最も正確なものを選びなさい。\n① 緊張→助けられる→打ち解ける→気づき\n② 喜び→挫折→回復→成功\n③ 怒り→悲しみ→許し→感謝\n④ 準備→失敗→再挑戦→達成',
    answer: '①',
    hint: '物語全体の感情の流れ（緊張→声をかけられる→昼食でリラックス→最後の気づき）を追ってみよう。',
    explanation:
      '【何を聞かれているか】\n物語全体の流れ（感情や出来事の順番）として最も正確なものを選ぶ問題。\n\n【なぜ本文の順番通りに追うのか】\n物語の流れを問う問題は、選択肢が複雑に見えても、実際には本文に書かれている出来事の順番と照らし合わせるだけで正解を絞り込める。\n\n【ポイント1】出来事を順に確認する\n①緊張している場面→②Emmaに声をかけられる場面→③昼食の時間にクラスメートと話してリラックスする場面→④コミュニケーションの本質に気づく場面、という順番になっている。\n\n【ポイント2】選択肢①が本文の順番と一致することを確認する\n「緊張→助けられる→打ち解ける→気づき」という流れが、上記の出来事の順番とそのまま対応している。\n\n【ポイント3】他の選択肢を消去する\n②「喜び→挫折→回復→成功」、③「怒り→悲しみ→許し→感謝」、④「準備→失敗→再挑戦→達成」は、いずれも本文に書かれていない感情や出来事を含んでいる。\n\n【答え】\n①\n\n【確かめ】\n本文に書かれた出来事の順番（緊張→声をかけられる→打ち解ける→気づき）を選んだ選択肢と1つずつ照合する。\n\n【よくあるまちがい】\n選択肢の言葉の響きだけで似ていそうなものを選んでしまうミス。必ず本文に書かれた実際の出来事の順番と照合する。\n\n【ここが絶対】\n物語の流れ問題は「導入→展開→転換→結末（気づき）」というパターンを頭に入れ、本文の順番通りに出来事を追って答える。',
    pitfall: '物語の流れ問題は本文の順番通りに感情・出来事を追えばよい。選択肢が複雑に見えても、実際の流れと照合すれば正解を絞れる。',
    memoryTip: '物語の構造：導入→展開→転換→結末（気づき）というパターンを頭に入れておこう！',
  },

  // ============================================================
  // 文法総合: 13問
  // ============================================================
  {
    id: 'koko_moshi_eigo_23',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の文の空所に入る最も適切な語句を選びなさい。 「If I ______ more time, I would study abroad.」',
    choices: ['① have', '② had', '③ will have', '④ have had'],
    answer: '② had',
    hint: '仮定法過去の形は "If + 主語 + 動詞の過去形, 主語 + would + 動詞の原形" だよ。',
    explanation: '【文法のポイント】仮定法過去は「現在の事実と異なる仮定」を表します。"If I had more time（もし時間があれば）" は実際には時間がないという含意があります。"would study abroad" が後半にあるので、前半は過去形 "had" が正解です。',
    pitfall: '①の "have" は直説法（実際に時間がある場合）の条件文。仮定法か直説法かを区別することが重要。',
    memoryTip: '仮定法過去：If + 過去形, would/could/might + 原形。「現実と逆のことを想像している」サインが仮定法！',
  },
  {
    id: 'koko_moshi_eigo_24',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '空所に入る最も適切な語を選びなさい。 「The book ______ on the desk belongs to my teacher.」',
    choices: ['① lying', '② lie', '③ lain', '④ is lying'],
    answer: '① lying',
    hint: '「机の上に置かれている本」—"the book" を後ろから修飾する現在分詞を考えよう。',
    explanation:
      '【何を聞かれているか】\n「机の上に置かれている本は私の先生のものです。」という文の空欄に入る、正しい語を選ぶ文法問題。\n\n【なぜlyingを使うのか】\n"the book"を後ろから修飾するとき、「机の上に置かれている（という状態が続いている）」という意味を表すには、現在分詞（動詞のing形）を使って名詞を後置修飾する。\n\n【ポイント1】文の骨格（SV）を確認する\n"The book ... belongs to my teacher."という文で、動詞はすでに"belongs"が使われている。空欄にもう1つの述語動詞を入れることはできない。\n\n【ポイント2】lieの活用を確認する\n「横たわる・置かれている」という意味の自動詞lieの現在分詞はlying（原形lie→lie+ing、iをyに変えてing）。\n\n【ポイント3】現在分詞の後置修飾を確認する\n"the book lying on the desk"＝「机の上に置かれている本」。lying on the deskがthe bookを後ろから説明している。\n\n【答え】\n① lying\n\n【確かめ】\n文全体に述語動詞が"belongs"の1つだけであることを確認し、"lying on the desk"が"the book"を修飾するかたまりになっていることを確認する。\n\n【よくあるまちがい】\n④"is lying"を選んでしまうミス。すでに"belongs"という述語動詞があるため、"is lying"のようなもう1つの述語動詞は入れられない。\n\n【ここが絶対】\n名詞を後ろから修飾する現在分詞（〜している）は、文中にすでに述語動詞がある場合に使われる。過去分詞（〜された）による後置修飾とセットで覚える。',
    pitfall: '④ "is lying" は述語動詞の形で、既に "belongs" という述語があるので2つ目の述語は入れられない。',
    memoryTip: '名詞を後ろから修飾する現在分詞（〜している）・過去分詞（〜された）はセットで覚えよう！',
  },
  {
    id: 'koko_moshi_eigo_25',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '空所に入る最も適切な語を選びなさい。 「This is the city ______ I was born.」',
    choices: ['① which', '② where', '③ who', '④ what'],
    answer: '② where',
    hint: '先行詞は "the city（場所）" で、空所の後に "I was born" という完全な文が続いている。',
    explanation: '【文法のポイント】関係副詞 "where" は「場所を表す先行詞 + 完全な文」という構造で使います。"I was born（私が生まれた）" はそれだけで主語・述語が揃った完全な文なので、関係副詞 "where" が適切です。"which" は後に不完全な文（名詞が欠けた文）が続きます。',
    pitfall: '①"which" を選ぶと "I was born" の中に "which" が入れられる位置がなく文法的に不正確になる（"where" = "in which" と置き換えられる）。',
    memoryTip: '関係副詞 where = in which。後ろに「完全な文」が続くなら関係副詞、「不完全な文」なら関係代名詞！',
  },
  {
    id: 'koko_moshi_eigo_26',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '空所に入る最も適切な語句を選びなさい。 「She is the most talented singer ______ I have ever heard.」',
    choices: ['① who', '② which', '③ that', '④ what'],
    answer: '③ that',
    hint: '先行詞が "the most talented singer" という最上級を含む場合、関係代名詞は何を使う？',
    explanation:
      '【何を聞かれているか】\n最上級を含む先行詞の後ろに続く、正しい関係代名詞を選ぶ文法問題。\n\n【なぜthatを使うのか】\n先行詞に"the most talented"のような最上級がついている場合、関係代名詞にはwho/whichではなく、thatを使うのが英語の慣用的なルールになっている。\n\n【ポイント1】先行詞を確認する\n"the most talented singer"（最も才能のある歌手）には最上級"the most"がついている。\n\n【ポイント2】最上級・序数詞のあとの関係代名詞のルールを確認する\n先行詞に最上級（the most talented）、序数詞（the first, the last）、the only、the veryなどがつく場合、関係代名詞はthatを使うのが原則。\n\n【ポイント3】現在完了"ever"との組み合わせを確認する\n"that I have ever heard"（今まで聞いた中で）のように、経験を表す現在完了＋everとセットでよく使われる。\n\n【答え】\n③ that\n\n【確かめ】\n"She is the most talented singer that I have ever heard."を訳し、「彼女は私が今まで聞いた中で最も才能のある歌手だ」という意味になっていることを確認する。\n\n【よくあるまちがい】\n先行詞が「人」だからという理由だけで①"who"を選んでしまうミス。人が先行詞でも、最上級がついている場合はthatが好まれる。\n\n【ここが絶対】\n最上級・the only・the veryが先行詞につくときは、関係代名詞はthatを使う、という入試頻出ルールを覚えておく。',
    pitfall: '①"who" も人を先行詞にとれるが、最上級の先行詞には "that" が慣用的に好まれる。入試ではこの違いをしっかり覚えよう。',
    memoryTip: '最上級・the only・the very → 関係代名詞は "that"！これは入試頻出ルール。',
  },
  {
    id: 'koko_moshi_eigo_27',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '空所に入る最も適切な語句を選びなさい。 「You ______ wear a seatbelt when you are in a car. It is the law.」',
    choices: ['① should', '② must', '③ had better', '④ ought to'],
    answer: '② must',
    hint: '「法律だから」という強い義務・強制を表すには？',
    explanation: '【文法のポイント】"must" は話者が主観的に「強い義務・必然性」を表す助動詞です。"It is the law（法律だから）" という理由と最もマッチする強さの義務表現は "must" です。"should / ought to / had better" も義務を表しますが、"must" ほど強くはありません。',
    pitfall: '"had better" は「〜しないとまずいよ」という警告・脅しのニュアンスが強く、法律の説明文脈には少しずれる。',
    memoryTip: 'must（強い義務・法律・話者の確信）/ should（望ましい）/ had better（警告）の強さの違いを整理しよう！',
  },
  {
    id: 'koko_moshi_eigo_28',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の2文をほぼ同じ意味になるように空所を埋めなさい。\n（元の文）"The mountain is so high that we cannot climb it."\n（書き換え）"The mountain is ______ ______ for us to climb."',
    answer: 'too high',
    hint: '"so ... that ... cannot" = "too ... to ..." の書き換えパターン。',
    explanation:
      '【何を聞かれているか】\n"so...that...cannot"の構文を、ほぼ同じ意味の"too...to"の構文に書き換える問題。\n\n【なぜtoo...toに書き換えられるのか】\n"so+形容詞+that+主語+cannot+動詞"（とても〜なので…できない）と、"too+形容詞+for+目的語+to+動詞"（…するには〜すぎる）は、同じ「できないほど〜だ」という意味を表す、入試最頻出の書き換えパターン。\n\n【ポイント1】元の文の構造を確認する\n"The mountain is so high that we cannot climb it."＝「その山はとても高いので、私たちは登れない」。\n\n【ポイント2】書き換えの公式にあてはめる\nso高い+that+we+cannot+climb → too+high+for us+to+climb。主語weはfor usという形に変わる。\n\n【ポイント3】forを忘れずに入れる\n元の文にある"we"（誰にとって難しいのか）は、書き換えた文では"for us"という形で残す必要がある。\n\n【答え】\ntoo high\n\n【確かめ】\n"The mountain is too high for us to climb."を訳し、「その山は私たちが登るには高すぎる」という、元の文とほぼ同じ意味になっていることを確認する。\n\n【よくあるまちがい】\n"for us"を省略してしまい、「誰にとって高すぎるのか」が文から消えてしまうミス。元の文の主語（we）を忘れずにfor usとして残す。\n\n【ここが絶対】\n"so...that...cannot"→"too...to"の書き換えは入試最頻出の構文変換。forの後に元の文の主語を置くこともセットで覚える。',
    pitfall: '"for us" の部分を入れ忘れないこと。元の文に "we" があるので "for us" が必要。',
    memoryTip: 'so ... that cannot → too ... to の書き換えは入試最頻出の構文変換！セットで覚えよう。',
  },
  {
    id: 'koko_moshi_eigo_29',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '空所に入る最も適切な語句を選びなさい。 「I wish I ______ play the piano as well as she does.」',
    choices: ['① can', '② could', '③ will', '④ am able to'],
    answer: '② could',
    hint: '"I wish + 仮定法" の形に注目。現在の願望を表す "I wish" の後の動詞の形は？',
    explanation: '【文法のポイント】"I wish + 主語 + 動詞の過去形" は「（現在）〜ならいいのに」という現在実現不可能な願望を表す仮定法過去です。"can（できる）" の過去形は "could" なので、"I wish I could play ..." が正解です。',
    pitfall: '①"can" はそのまま現在形なので仮定法にならない。"I wish" の後は必ず過去形（仮定法）を使う。',
    memoryTip: '"I wish I could ～" = 「〜できたらなあ」。現実には「できない」と悔しがっている表現！',
  },
  {
    id: 'koko_moshi_eigo_30',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語に合うように、空所に適切な語句を入れなさい。\n「彼女は私に窓を開けるよう頼んだ。」\n"She ______ me to open the window."',
    answer: 'asked',
    hint: 'SVOC構文の "ask + 人 + to不定詞" のパターン。「〜するよう頼む」は何という動詞？',
    explanation:
      '【何を聞かれているか】\n「彼女は私に窓を開けるよう頼んだ。」という日本語に合うように、空欄に適切な動詞を入れる問題。\n\n【なぜaskedを使うのか】\n"ask+人+to不定詞"は「（人）に〜するよう頼む」という意味を表す決まった文型。日本語の「頼んだ」という動詞にちょうど対応する。\n\n【ポイント1】"ask+O+to不定詞"の形を確認する\nask＋目的語（人）＋to＋動詞の原形。"She asked me to open the window."＝「彼女は私に窓を開けるよう頼んだ」。\n\n【ポイント2】同じ形を取る他の動詞も確認する\ntell（〜するよう言う）、want（〜してほしい）、order（〜するよう命令する）なども同じ"O+to不定詞"の形を取る。\n\n【ポイント3】sayとの違いに注意する\n"say"はこの構文を取れず、"say to+人+that節"という別の形になる。\n\n【答え】\nasked\n\n【確かめ】\n"She asked me to open the window."が「彼女は私に窓を開けるよう頼んだ」という意味になっていることと、askedの後ろが「人+to不定詞」の形になっていることを確認する。\n\n【よくあるまちがい】\n"She said me to open..."のように、sayをask/tellと同じ構文で使ってしまうミス。sayは"O+to不定詞"の形を取れない。\n\n【ここが絶対】\nask/tell/want/order＋人＋to不定詞、は超頻出のSVOC構文。この4つの動詞をセットで覚えておく。',
    pitfall: '"She said me to open..." という誤りが多い。"say" はこの構文を取れない。"say to + 人 + that節" を使う。',
    memoryTip: 'ask / tell / want / order + 人 + to do は超頻出のSVOC構文！まとめて覚えよう。',
  },
  {
    id: 'koko_moshi_eigo_31',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '空所に入る最も適切な語句を選びなさい。 「Japan is larger than ______ other country in East Asia.」',
    choices: ['① any', '② some', '③ every', '④ all'],
    answer: '① any',
    hint: '比較級 + than any other + 単数名詞 = 最上級の表現。「東アジアの他のどの国よりも大きい」という意味。',
    explanation:
      '【何を聞かれているか】\n「日本は東アジアの他のどの国よりも大きい。」という文の空欄に入る、正しい語を選ぶ文法問題。\n\n【なぜanyを使うのか】\n"比較級+than any other+単数名詞"は「他のどの〜よりも」という意味を表し、比較級を使いながら実質的に最上級と同じ意味を表す決まった構文。\n\n【ポイント1】構文の形を確認する\n比較級（larger）＋than any other＋単数名詞（country）。"other"の後ろの名詞は単数形にするのがルール。\n\n【ポイント2】最上級との言い換えを確認する\n"Japan is larger than any other country in East Asia."＝"Japan is the largest country in East Asia."（日本は東アジアで最も大きい国だ）と、ほぼ同じ意味になる。\n\n【ポイント3】他の選択肢を消去する\n③"every other"は文法的に不自然な組み合わせ。②"some"や④"all"はこの構文では使わない。\n\n【答え】\n① any\n\n【確かめ】\n"than any other country"の後ろが単数形（country）になっていること、また文全体が最上級と同じ意味を表していることを確認する。\n\n【よくあるまちがい】\n"every other"を使ってしまうミス。"any other"が比較級を使った最上級表現の定番であり、everyは使わない。\n\n【ここが絶対】\n"比較級+than any other+単数名詞"＝最上級と同じ意味、という入試頻出の書き換え構文としてセットで覚える。',
    pitfall: '"every other" も使えそうに見えるが、"larger than every other" は文法的に不自然。"any other" が定番の表現。',
    memoryTip: '比較級 + than any other + 単数名詞 = 最上級！「他のどれよりも」というイメージ。',
  },
  {
    id: 'koko_moshi_eigo_32',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '空所に入る最も適切な語句を選びなさい。 「______ tired he was, he kept on working.」',
    choices: ['① Although', '② However', '③ Despite', '④ Even though'],
    answer: '② However',
    hint: '"However + 形容詞/副詞 + 主語 + 動詞" という特殊な構文。"どんなに〜でも" という意味。',
    explanation: '【文法のポイント】"However + 形容詞/副詞 + 主語 + 動詞" = 「どんなに〜でも」という譲歩を表す構文です。ここでは "However tired he was, ..." となります。"Although" や "Even though" は接続詞なので後ろに主語+動詞の文がそのまま続きます（However のように形容詞が前に出ない）。',
    pitfall: '③"Despite" は前置詞なので後ろに名詞（句）が続く（Despite his tiredness...）。形容詞+SVの構造には使えない。',
    memoryTip: '"However + 形容詞 + S + V" = "No matter how + 形容詞 + S + V" と同義！両方入試に出る。',
  },
  {
    id: 'koko_moshi_eigo_33',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の文を受動態に書き換えなさい。\n「They built this bridge 100 years ago.」',
    answer: 'This bridge was built (by them) 100 years ago.',
    hint: '受動態の形：be動詞 + 過去分詞。時制は "built（過去形）" なので be 動詞も過去形にする。',
    explanation: '【文法のポイント】能動態 "They built this bridge 100 years ago." を受動態に変換します。"this bridge" が主語になり、"built" は過去分詞なので "was built" となります。"by them" は省略可能です。完全な形：This bridge was built by them 100 years ago.',
    pitfall: '"were built" という複数形にしないこと。主語が "This bridge"（単数）なので "was built" が正しい。',
    memoryTip: '受動態変換の手順：①目的語を主語に②be動詞+過去分詞③もとの主語を"by ～"に（省略可）',
  },
  {
    id: 'koko_moshi_eigo_34',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '空所に入る最も適切な語句を選びなさい。 「She told me that she ______ been waiting for over an hour.」',
    choices: ['① has', '② had', '③ have', '④ will have'],
    answer: '② had',
    hint: '時制の一致（話法）を考えよう。"told（過去）" という主節の動詞に合わせて、従属節の現在完了は何に変わる？',
    explanation:
      '【何を聞かれているか】\n間接話法（伝聞）の文の空欄に入る、正しい動詞の形を選ぶ文法問題。\n\n【なぜ過去完了にするのか】\n間接話法では、主節の動詞（told＝過去形）に合わせて、引用内容の時制も1段階過去にずらす「時制の一致」のルールがある。現在完了（has been）は、間接話法では過去完了（had been）になる。\n\n【ポイント1】時制の一致の対応を確認する\n主節がtold（過去形）のとき、現在完了（has/have+過去分詞）は過去完了（had+過去分詞）に変わる。\n\n【ポイント2】直接話法との違いを確認する\n直接話法では"I have been waiting for over an hour."（現在完了進行形）だったものが、間接話法でtoldに合わせてhadに変わる。\n\n【ポイント3】他の選択肢を消去する\n①"has"は現在完了のままで時制の一致がされていない。③"have"も同様。④"will have"は未来完了で時制が合わない。\n\n【答え】\n② had\n\n【確かめ】\n"She told me that she had been waiting for over an hour."を訳し、「彼女は1時間以上待っていたと言った」という意味になっていることを確認する。\n\n【よくあるまちがい】\n主節がtoldという過去形であることに気づかず、現在完了（has been）のまま選んでしまうミス。\n\n【ここが絶対】\n時制の一致：主節が過去形→現在完了は過去完了に変化する。この対応をセットで覚える。',
    pitfall: '直接話法だと "I have been waiting for over an hour"（現在完了進行形）だが、間接話法で主節が過去形になると過去完了になる。',
    memoryTip: '時制の一致：主節が過去形 → 従属節の現在→過去、現在完了→過去完了、過去→過去完了に変化する！',
  },
  {
    id: 'koko_moshi_eigo_35',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の文のSVOCを答えなさい。\n「The teacher found the classroom very noisy.」',
    answer: 'S=The teacher, V=found, O=the classroom, C=very noisy',
    hint: '"find + 目的語 + 形容詞" の第5文型（SVOC）。Cは目的語の状態を説明する補語。',
    explanation:
      '【何を聞かれているか】\n"The teacher found the classroom very noisy."という文のSVOCを答える問題。\n\n【なぜfind+O+Cという形になるのか】\n"find"は「〜だとわかる・感じる」という意味で使われるとき、目的語（O）の状態を補語（C）で説明するSVOC（第5文型）を作る動詞の一つ。\n\n【ポイント1】文を要素に分ける\n"The teacher(S) found(V) the classroom(O) very noisy(C)."と分けられる。\n\n【ポイント2】OとCの関係を確認する\nthe classroom（教室）＝very noisy（とても騒がしい）という、目的語と補語がイコールの関係になっている。\n\n【ポイント3】他のSVOC動詞と一緒に覚える\nfind（〜だとわかる）以外にも、make（〜にする）、keep（〜のままにする）、leave（〜のままにしておく）がSVOCを作る代表的な動詞。\n\n【答え】\nS=The teacher, V=found, O=the classroom, C=very noisy\n\n【確かめ】\n"the classroom = very noisy"（教室＝とても騒がしい）という関係が成り立つかを確認する。\n\n【よくあるまちがい】\n"very noisy"を"found"を修飾する副詞句だと誤解してしまうミス。ここでは目的語the classroomの状態を説明する形容詞（補語）として使われている。\n\n【ここが絶対】\nSVOCのmake/find/keep/leave+O+C（形容詞）というパターンは入試必須。O＝Cの関係になっているかを確認する。',
    pitfall: '"very noisy" を副詞句と混同しないこと。これは目的語 "the classroom" を説明する形容詞（補語）。',
    memoryTip: 'SVOC構文の make/find/keep/leave + O + C（形容詞）パターンは入試必須！',
  },

  // ============================================================
  // 英作文: 8問
  // ============================================================
  {
    id: 'koko_moshi_eigo_36',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語を英語にしなさい。\n「私は昨日、図書館で3時間勉強しました。」',
    answer: 'I studied at the library for three hours yesterday.',
    hint: '時制は過去形。場所（図書館で）・時間（3時間）・時（昨日）を英語でどう表すか考えよう。',
    explanation:
      '【何を聞かれているか】\n「私は昨日、図書館で3時間勉強しました。」という日本語を英語にする問題。\n\n【なぜこの語順にするのか】\n英語では副詞（場所・時間の長さ・時点を表す語句）を並べるとき、「場所→時間の長さ→時点」の順に置くのが自然な語順というルールがある。\n\n【ポイント1】動詞を過去形にする\n"study"の過去形は"studied"。\n\n【ポイント2】場所と時間の長さを表す\n場所は"at the library"、時間の長さ（3時間）は"for three hours"。\n\n【ポイント3】時点を表す語を最後に置く\n"yesterday"（昨日）は文末に置くのが一般的。\n\n【答え】\nI studied at the library for three hours yesterday.\n\n【確かめ】\n"studied"（過去形）→"at the library"（場所）→"for three hours"（時間の長さ）→"yesterday"（時点）の順になっているか確認する。\n\n【よくあるまちがい】\n場所と時間の長さの順番を逆にしてしまうミス（for three hours at the library のような語順）。英語では場所が先、時間の長さが後という順番が自然。\n\n【ここが絶対】\n英語の副詞語順：場所→時間の長さ→時点。「どこで・どのくらい・いつ」の順に並べる。',
    pitfall: '"yesterday" を文頭に置いても間違いではないが、一般的には文末に置くことが多い。',
    memoryTip: '英語の副詞語順：場所→時間の長さ→時点。「どこで・どのくらい・いつ」の順に並べよう！',
  },
  {
    id: 'koko_moshi_eigo_37',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の語句を正しい順序に並べて英文を作りなさい。\n[ to / is / have / important / it / friends / good ]',
    answer: 'It is important to have good friends.',
    hint: '"It is + 形容詞 + to + 動詞の原形" の形式主語構文（仮主語のit）を使おう。',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、形式主語のitを使った正しい英文を作る問題。\n\n【なぜ形式主語のitを使うのか】\n"to have good friends"（良い友達を持つこと）のように、to不定詞が主語になると長くなりすぎる場合、英語では本来の主語を文末に回し、代わりに形式的な主語"It"を文頭に置くという決まりがある。\n\n【ポイント1】形式主語構文の公式を確認する\n"It is＋形容詞＋to＋動詞の原形"＝「〜することは…だ」。\n\n【ポイント2】本来の主語を見つける\n本来の主語は"to have good friends"（良い友達を持つこと）で、これを文末に移動させる。\n\n【ポイント3】文を組み立てる\n"It is important to have good friends."＝「良い友達を持つことは大切だ」。\n\n【答え】\nIt is important to have good friends.\n\n【確かめ】\n"It"が形式的な主語で、実際の内容（to have good friends）が文末にあることを確認する。\n\n【よくあるまちがい】\n"To have good friends is important."のように、to不定詞をそのまま主語にしてしまうミス。文法的には間違いではないが、英語では形式主語のIt is...の形がより自然でよく使われる。\n\n【ここが絶対】\n"It is+形容詞+to do"＝「〜することは…だ」。to不定詞が長い主語になるときはこの形を使う。',
    pitfall: '"To have good friends is important." も文法的に正しいが、英語では形式主語の "It is ..." の形が自然でよく使われる。',
    memoryTip: '"It is + 形容詞 + to do" → 「〜することは...だ」。to不定詞が長い主語のときに使う！',
  },
  {
    id: 'koko_moshi_eigo_38',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の語句を正しい順序に並べて英文を作りなさい。（1語不要）\n[ I / have / never / seen / been / movie / this ]',
    answer: 'I have never seen this movie.',
    hint: '現在完了形 "have + 過去分詞" で「一度も〜したことがない（経験）」を表す文を作ろう。不要な語は1つ。',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、現在完了（経験）を使った正しい英文を作る問題（1語不要）。\n\n【なぜhave never seenを使うのか】\n「一度も〜したことがない」という経験の否定は、現在完了の否定形"have never＋過去分詞"で表す。\n\n【ポイント1】現在完了（経験）の公式を確認する\nhave/has＋過去分詞。neverを入れると「一度も〜したことがない」という否定の経験を表す。\n\n【ポイント2】seeの活用を確認する\nsee（原形）→saw（過去形）→seen（過去分詞）という不規則変化。現在完了には過去分詞seenを使う。\n\n【ポイント3】不要な語を見つける\n"been"は"have been to〜"（〜に行ったことがある）という別の経験表現で使う語で、この文脈では使わない引っかけの語。\n\n【答え】\nI have never seen this movie.\n\n【確かめ】\n"have never seen"（見たことがない）という形になっていること、また"been"が使われずに余っていることを確認する。\n\n【よくあるまちがい】\n"have been to"（行ったことがある）と"have seen"（見たことがある）という2つの経験表現を混同し、beenを使ってしまうミス。\n\n【ここが絶対】\n"have never seen〜"＝〜を見たことがない、"have never been to〜"＝〜に行ったことがない、という2つの経験表現をセットで区別して覚える。',
    pitfall: '"have been to" と "have seen" を混同させる引っかけ問題。"seen" と "been" の両方があるときはどちらが正しい文脈かを判断しよう。',
    memoryTip: '"have never seen" = 見たことがない（経験の否定）。"have never been to" = 行ったことがない（経験の否定）。',
  },
  {
    id: 'koko_moshi_eigo_39',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の条件に従って英語で書きなさい。\n条件：「あなたが環境のためにできることを1つ挙げ、その理由も含めて2文以上の英語で書きなさい。」',
    answer: '（例）I can use a reusable bag instead of a plastic bag when I go shopping. This will help reduce plastic waste and protect the ocean.',
    hint: '"I can ..." で始めて、続いて "because" や "This will ..." で理由・効果を説明しよう。',
    explanation:
      '【何を聞かれているか】\n「環境のためにできることを1つ挙げ、その理由も含めて2文以上」という条件に従って英語で書く自由英作文問題。\n\n【なぜ2文構成にするのか】\n条件英作文では、指示された条件（今回は「理由を含めて2文以上」）を満たすことが採点上とても重要。1文で「何をするか」だけ書いても、理由が抜けていると条件を満たしたことにならない。\n\n【ポイント1】1文目で行動を述べる\n"I can use a reusable bag instead of a plastic bag when I go shopping."（買い物のときにビニール袋の代わりに繰り返し使える袋を使うことができる）のように、"I can〜"の形で具体的な行動を書く。\n\n【ポイント2】2文目で理由・効果を述べる\n"This will help reduce plastic waste and protect the ocean."のように、"This will〜"や"because〜"を使って、その行動がなぜ環境に良いのかを説明する。\n\n【ポイント3】文法・スペルミスに注意する\n条件を満たしていても、文法やスペルの誤りがあると減点対象になるため、書いたあとに見直す習慣をつける。\n\n【答え】\n（例）I can use a reusable bag instead of a plastic bag when I go shopping. This will help reduce plastic waste and protect the ocean.\n\n【確かめ】\n「何をするか（行動）」と「なぜそれが良いのか（理由・効果）」の両方が2文以上で書けているかを見直す。\n\n【よくあるまちがい】\n行動だけを1文書いて終わりにしてしまうミス。「理由も含めて2文以上」という条件を満たすには、必ず理由・効果の文を加える。\n\n【ここが絶対】\n条件英作文の基本形：①主張（I can/I will）→②理由・効果（because/This will）の2文構成を守る。',
    pitfall: '一文しか書かないと減点される。「何をするか」＋「なぜか・どんな効果があるか」の2文構成を守ろう。',
    memoryTip: '条件英作文の基本：①主張（I can / I will）→②理由・効果（because / This will）の2文構成！',
  },
  {
    id: 'koko_moshi_eigo_40',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語を英語にしなさい。\n「彼女は毎朝6時に起きて、学校まで歩いて行きます。」',
    answer: 'She gets up at six every morning and walks to school.',
    hint: '主語は "She"、時制は現在形（習慣）。「学校まで歩いて行く」は "walk to school" というイディオム。',
    explanation: '【文法のポイント】日常の習慣を表す現在形（習慣の現在）を使います。主語が "She"（三人称単数）なので "gets up"（三単現のs）と "walks" が正しい形です。"walk to school" は「学校まで歩いて行く」という頻出イディオムです。',
    pitfall: '"She get up..." と三単現のsを忘れるミスが多い。主語が三人称単数の現在形では必ずsをつける！',
    memoryTip: '"walk to school" = 徒歩で通学。"go to school by bike / bus / train" などの交通手段表現もセットで覚えよう。',
  },
  {
    id: 'koko_moshi_eigo_41',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の語句を正しい順序に並べて英文を作りなさい。\n[ you / how / English / long / been / studying / have ]?',
    answer: 'How long have you been studying English?',
    hint: '現在完了進行形の疑問文の語順：How long + have + 主語 + been + 動詞-ing？',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、現在完了進行形の疑問文を作る問題。\n\n【なぜ現在完了進行形の疑問文の語順にするのか】\n「どのくらいの間〜し続けていますか」という、過去から現在まで続く動作の長さを尋ねるときは、現在完了進行形（have/has been＋動詞-ing）の疑問文を使う。\n\n【ポイント1】現在完了進行形の疑問文の語順を確認する\nHow long＋have＋主語＋been＋動詞-ing？という語順になる。\n\n【ポイント2】文を組み立てる\n"How long have you been studying English?"＝「あなたはどのくらいの間英語を勉強していますか」。\n\n【ポイント3】現在形の疑問文との違いを確認する\n"How long do you study English?"は現在形の疑問文で「習慣的にどのくらい勉強するか」という別の意味になり、継続を表す現在完了進行形とは意味が異なる。\n\n【答え】\nHow long have you been studying English?\n\n【確かめ】\n"have"→"been"→"studying"という現在完了進行形の語順になっているか確認する。\n\n【よくあるまちがい】\n現在形の疑問文（do you study）と混同してしまうミス。「ずっと〜し続けている」という継続の意味を尋ねるときは、現在完了進行形を使う。\n\n【ここが絶対】\n"How long have you been -ing?"＝「どのくらい〜し続けていますか」という、継続を尋ねる現在完了進行形の疑問文としてセットで覚える。',
    pitfall: '"How long do you study English?" は現在完了ではなく現在形の疑問文なので意味が異なる（習慣的にどのくらい勉強するか）。',
    memoryTip: 'How long have you been -ing? = 「どのくらい〜し続けていますか」→ 継続を表す現在完了進行形！',
  },
  {
    id: 'koko_moshi_eigo_42',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語を英語にしなさい。\n「もし明日雨が降れば、私たちはその試合を中止します。」',
    answer: 'If it rains tomorrow, we will cancel the game.',
    hint: '「もし〜なら（これから起こりうること）」は直説法の条件文。条件節の中は未来でも現在形を使う！',
    explanation:
      '【何を聞かれているか】\n「もし明日雨が降れば、私たちはその試合を中止します。」という日本語を、条件文を使って英語にする問題。\n\n【なぜif節の中で現在形を使うのか】\n英語では、if（もし〜なら）で始まる条件節の中では、たとえ未来のことを表していても現在形を使うという決まりがある。未来の助動詞willはif節の中では使わない。\n\n【ポイント1】条件文の公式を確認する\nIf＋主語＋現在形〜, 主語＋will＋動詞の原形〜。\n\n【ポイント2】if節を組み立てる\n「もし明日雨が降れば」は"If it rains tomorrow"。tomorrow（未来のこと）でも動詞は現在形rainsを使う。\n\n【ポイント3】主節を組み立てる\n「私たちはその試合を中止します」は"we will cancel the game"。主節ではwillを使う。\n\n【答え】\nIf it rains tomorrow, we will cancel the game.\n\n【確かめ】\nif節の動詞が現在形（rains）になっていて、willが使われていないことを確認する。\n\n【よくあるまちがい】\n"If it will rain tomorrow..."のように、if節の中でもwillを使ってしまうミス。未来のことでも、if節の中は現在形にするのがルール。\n\n【ここが絶対】\n条件を表すif節の中はwillを使わず現在形にする。「もし明日雨が降れば→If it rains tomorrow」とセットで覚える。',
    pitfall: '"If it will rain..." とwillを使うのは間違い。条件節（if節）の中はwillを使わず現在形にする！',
    memoryTip: 'If節の中はwillを使わない！「もし明日雨が降れば → If it rains tomorrow」と覚えよう。',
  },
  {
    id: 'koko_moshi_eigo_43',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の条件に従って英語で書きなさい。\n条件：「あなたが将来なりたい職業と、その理由を2文以上の英語で書きなさい。」',
    answer: '（例）I want to be a doctor in the future. I want to help people who are sick and suffering, and I believe medicine can save many lives.',
    hint: '"I want to be a ..." で始めて、"because" や "I want to ..." を使って理由を続けよう。',
    explanation: '【文法のポイント】将来の夢を語る英作文では "I want to be ..." / "I hope to become ..." / "My dream is to ..." などの表現が使えます。理由を述べるときは "because" や "I believe ..." などを使って具体的に説明しましょう。',
    pitfall: '職業名のスペルに注意：doctor / teacher / engineer / nurse / lawyer など。また "I want to be a doctor" の不定冠詞 "a" を忘れないこと。',
    memoryTip: '将来の夢英作文の定型：I want to be a ～ because I want to ... / I think ... が使いやすい！',
  },

  // ============================================================
  // リスニング形式（読んで答える）: 7問
  // ============================================================
  {
    id: 'koko_moshi_eigo_44',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[対話を読んで答えなさい]
Mother: Tom, dinner is ready. Come down now.
Tom: Just a minute, Mom. I'm in the middle of something.
Mother: You've been in your room for three hours. What are you doing?
Tom: I'm finishing my science project. It's due tomorrow.
Mother: Oh, I didn't know that. Okay, finish it and then come eat. I'll keep your food warm.
Tom: Thanks, Mom. I'll be done in about 20 minutes.`,
    question:
      'この対話の内容と一致するものを選びなさい。\n① Tomは3時間テレビを見ていた。\n② 科学の課題は明後日が締め切りだ。\n③ Tomはあとおよそ20分で作業を終える予定だ。\n④ 母親は夕食をテーブルに出してしまった。',
    answer: '③',
    hint: '"I\'ll be done in about 20 minutes." という表現を確認しよう。',
    explanation:
      '【何を聞かれているか】\n対話文を読んで、内容と一致する選択肢を選ぶ問題。\n\n【なぜdueという語に注目するのか】\n"due"は「（期限が）〜である」という意味を表す重要単語で、締め切りに関する内容一致問題では特に注目すべきキーワードになる。\n\n【ポイント1】該当する文を確認する\n"I\'ll be done in about 20 minutes."（あと約20分で終わる）という発言が、選択肢③の内容と一致する。\n\n【ポイント2】他の選択肢を本文と照合する\n①Tomがしていたのはテレビではなく科学の課題。②締め切りは"due tomorrow"（明日）であり明後日ではない。④母親は"I\'ll keep your food warm"（温かく保っておく）と言っており、まだ食卓に出していない。\n\n【ポイント3】"in about 〜 minutes"の意味を確認する\n「あと約〜分で」という所要時間の見込みを表す表現。\n\n【答え】\n③\n\n【確かめ】\n選んだ選択肢が"I\'ll be done in about 20 minutes"の内容とそのまま一致していることを確認する。\n\n【よくあるまちがい】\n"due tomorrow"（明日締め切り）を「明後日」のように読み違えてしまうミス。dueは「期限」を表す重要単語として正確に読み取る。\n\n【ここが絶対】\n"due+日時"＝「〜が締め切りだ」という表現を覚えておく。内容一致問題は本文の具体的な表現と選択肢を1つずつ照合する。',
    pitfall: '②「due tomorrow（明日締め切り）」と「明後日」を混同しないこと。dueは「期限」を表す重要単語。',
    memoryTip: '"due + 日時" = 「〜が締め切りだ」。due tomorrow / due next week など入試頻出表現！',
  },
  {
    id: 'koko_moshi_eigo_45',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[対話を読んで答えなさい]
Staff: Good afternoon. Welcome to City Museum. How can I help you?
Visitor: Hi. I'd like two adult tickets and one student ticket, please.
Staff: Sure. Adult tickets are 1,200 yen each, and student tickets are 700 yen. So that will be 3,100 yen in total.
Visitor: Here you go. By the way, is the special exhibition on the third floor open today?
Staff: Yes, it is. But please note that it closes at 5 p.m., which is one hour earlier than the rest of the museum.
Visitor: Got it. Thank you.`,
    question: 'Visitorが支払う合計金額はいくらか。',
    choices: ['① 2,400円', '② 3,100円', '③ 3,500円', '④ 2,700円'],
    answer: '② 3,100円',
    hint: '大人チケット2枚（1,200円×2）＋学生チケット1枚（700円）を計算しよう。',
    explanation:
      '【何を聞かれているか】\n対話文（チケット購入の場面）を読んで、Visitorが支払う合計金額を計算する問題。\n\n【なぜ計算が必要なのか】\n英語の読解問題の中には、本文中の数字を正確に読み取って計算する問題がある。英単語の意味だけでなく、数量（何枚か）を正確に把握することが重要。\n\n【ポイント1】チケットの単価と枚数を確認する\n大人チケットは1,200円で2枚、学生チケットは700円で1枚。\n\n【ポイント2】それぞれの合計を計算する\n大人チケット：1,200円×2＝2,400円。学生チケット：700円×1＝700円。\n\n【ポイント3】全体の合計を計算する\n2,400円＋700円＝3,100円。本文の"that will be 3,100 yen in total"という表現でも確認できる。\n\n【答え】\n② 3,100円\n\n【確かめ】\n1,200×2＋700×1＝3,100という計算が正しいか、本文の"3,100 yen in total"という表現と一致しているかを確認する。\n\n【よくあるまちがい】\n「2枚」と「1枚」という数量を読み間違えて、誤った金額を計算してしまうミス。英語の数字問題は数量を正確にメモしてから計算する。\n\n【ここが絶対】\n英語の金額・計算問題は、聞き取った（読み取った）数字と数量を素早く正確にメモする習慣をつける。',
    pitfall: '計算自体は簡単だが、「2枚と1枚」という数量を正確に把握してから計算しよう。',
    memoryTip: '英語の金額・計算問題は聞き取った数字を素早くメモする習慣をつけよう！',
  },
  {
    id: 'koko_moshi_eigo_46',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[対話を読んで答えなさい]
Staff: Good afternoon. Welcome to City Museum. How can I help you?
Visitor: Hi. I'd like two adult tickets and one student ticket, please.
Staff: Sure. Adult tickets are 1,200 yen each, and student tickets are 700 yen. So that will be 3,100 yen in total.
Visitor: Here you go. By the way, is the special exhibition on the third floor open today?
Staff: Yes, it is. But please note that it closes at 5 p.m., which is one hour earlier than the rest of the museum.
Visitor: Got it. Thank you.`,
    question: '3階の特別展示に関して正しいものを選びなさい。\n① 本日は閉館している。\n② 博物館全体と同じ時間に閉まる。\n③ 博物館全体よりも1時間早く閉まる。\n④ 本日は特別に無料で見られる。',
    answer: '③',
    hint: '"it closes at 5 p.m., which is one hour earlier than the rest of the museum" という表現を確認しよう。',
    explanation:
      '【何を聞かれているか】\n博物館の3階の特別展示に関する説明を読んで、内容と一致する選択肢を選ぶ問題。\n\n【なぜ比較級の表現に注目するのか】\n"one hour earlier than〜"（〜より1時間早く）という比較級の表現が、選択肢の正誤を分ける決め手になっている。\n\n【ポイント1】該当する文を確認する\n"it closes at 5 p.m., which is one hour earlier than the rest of the museum"（午後5時に閉まり、これは博物館の他の部分より1時間早い）。\n\n【ポイント2】他の選択肢を本文と照合する\n①本文の"Yes, it is"（本日は開いている）と矛盾。②「同じ時間」ではなく「1時間早い」が正しい。④無料とは述べられていない。\n\n【ポイント3】earlierの意味を確認する\nearlyの比較級で「より早く」という意味。\n\n【答え】\n③\n\n【確かめ】\n選んだ選択肢が"one hour earlier than the rest of the museum"の内容と一致していることを確認する。\n\n【よくあるまちがい】\n"Yes, it is"（開いている）という肯定の返答を見落とし、①「本日は閉館している」を選んでしまうミス。\n\n【ここが絶対】\n"〜 earlier than…"＝「…より〜早く」という比較級の表現に注目して、本文の具体的な時間の違いを正確に読み取る。',
    pitfall: '①を選んでしまう生徒が多いが、"Yes, it is"（開いている）という肯定の返答を見落とさないように。',
    memoryTip: '"one hour earlier than ～" = 「〜より1時間早い」比較級の表現。earlier = early の比較級！',
  },
  {
    id: 'koko_moshi_eigo_47',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[対話を読んで答えなさい]
Ryo: Hi, Sakura. Did you watch the school talent show last night?
Sakura: Yes! It was amazing. My favorite part was when Hina sang that English song. She has such a beautiful voice.
Ryo: I know! I was surprised because I didn't know she could sing like that. Did you see Kenta's magic show?
Sakura: I missed it. I arrived late because of the train delay. Was it good?
Ryo: It was incredible. He made a coin disappear and then found it inside an orange. The audience went wild.
Sakura: Wow, I wish I had seen it. Maybe he'll perform again at the cultural festival.`,
    question: 'Sakuraが才能ショーに遅刻した理由は何か。\n① 授業が長引いたから\n② 電車の遅延があったから\n③ 友達を待っていたから\n④ 体調が悪かったから',
    answer: '②',
    hint: '"I arrived late because of the train delay." という一文を確認しよう。',
    explanation: '【読解のポイント】"because of the train delay（電車の遅延のため）" という表現が②に対応しています。"because of + 名詞（句）" は「〜のために・〜が原因で」という因果関係を表す重要表現です。',
    pitfall: '聞き取り形式の問題では理由を問う設問が多い。"because" / "because of" / "due to" / "since" などの原因を表す表現に注目しよう。',
    memoryTip: '"because of + 名詞" vs "because + 文"。because of a train delay / because the train was delayed どちらも頻出！',
  },
  {
    id: 'koko_moshi_eigo_48',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[対話を読んで答えなさい]
Ryo: Hi, Sakura. Did you watch the school talent show last night?
Sakura: Yes! It was amazing. My favorite part was when Hina sang that English song. She has such a beautiful voice.
Ryo: I know! I was surprised because I didn't know she could sing like that. Did you see Kenta's magic show?
Sakura: I missed it. I arrived late because of the train delay. Was it good?
Ryo: It was incredible. He made a coin disappear and then found it inside an orange. The audience went wild.
Sakura: Wow, I wish I had seen it. Maybe he'll perform again at the cultural festival.`,
    question:
      '対話の内容と一致するものを選びなさい。\n① SakuraはHinaの歌が嫌いだった。\n② RyoはKentaのマジックを見なかった。\n③ Kentaはオレンジのなかからコインを見つけた。\n④ SakuraはKentaのマジックを最初から見た。',
    answer: '③',
    hint: '"He made a coin disappear and then found it inside an orange." という表現を確認しよう。',
    explanation:
      '【何を聞かれているか】\n対話文を読んで、内容と一致する選択肢を選ぶ問題。\n\n【なぜmakeを使った表現に注目するのか】\n"make+O+動詞の原形"（Oを〜させる）という使役動詞の構文が、マジックの内容を説明する重要な部分になっている。\n\n【ポイント1】該当する文を確認する\n"He made a coin disappear and then found it inside an orange."（コインを消して、それからオレンジの中から見つけた）が選択肢③の内容と一致する。\n\n【ポイント2】他の選択肢を本文と照合する\n①Sakuraは"amazing"や"beautiful voice"とポジティブに述べている。②Ryoはマジックを見て"incredible"と言っている。④Sakuraは"missed it"（見逃した）と述べており、最初から見ていたわけではない。\n\n【ポイント3】使役動詞makeの意味を確認する\n"make a coin disappear"＝「コインを消す（消えさせる）」。\n\n【答え】\n③\n\n【確かめ】\n選んだ選択肢が"made a coin disappear and then found it inside an orange"の内容と一致していることを確認する。\n\n【よくあるまちがい】\n対話形式で、誰が何を経験し、どう感じたかを混同してしまうミス。登場人物ごとに発言を整理してから答える。\n\n【ここが絶対】\n"make+O+動詞の原形"＝Oを〜させる、という使役動詞の構文を正確に読み取る。対話問題は「誰が・何を・どう思ったか」を整理する。',
    pitfall: '対話形式では誰が何を経験したかを混同しやすい。「誰が・何を・どう思ったか」を整理してから答えよう。',
    memoryTip: '"make + O + 動詞の原形（原形不定詞）" = OをVさせる（使役動詞）。"make a coin disappear" = コインを消す（消えさせる）。',
  },
  {
    id: 'koko_moshi_eigo_49',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[対話を読んで答えなさい]
Teacher: Class, I have some exciting news. Our school has been selected to participate in an international student exchange program next spring.
Student A: Really? Which country will we visit?
Teacher: We will go to Canada for two weeks. Students who are interested need to submit an application form by the end of this month.
Student B: Do we need to speak English all the time?
Teacher: Yes, the program is designed to improve your English skills. You will stay with a host family and attend a local high school. It will be a wonderful experience.
Student A: How much does it cost?
Teacher: The school will cover most of the expenses. Participants will need to pay 50,000 yen for personal spending.`,
    question: 'このプログラムについて正しいものを選びなさい。\n① 来年の秋に行われる予定だ。\n② 3週間のカナダ研修だ。\n③ 参加希望者は今月末までに申込書を提出する。\n④ 費用はすべて参加者が負担する。',
    answer: '③',
    hint: '"Students who are interested need to submit an application form by the end of this month." という一文を確認しよう。',
    explanation:
      '【何を聞かれているか】\n海外研修プログラムの説明を読んで、内容と一致する選択肢を選ぶ問題。\n\n【なぜ数字や期間に注目するのか】\nプログラムの説明文では、時期・期間・費用などの数字情報が選択肢で少しだけ変えられていることが多く、本文と正確に照合する必要がある。\n\n【ポイント1】該当する文を確認する\n"Students who are interested need to submit an application form by the end of this month."（希望者は今月末までに申込書を提出する必要がある）が選択肢③と一致する。\n\n【ポイント2】他の選択肢を本文と照合する\n①実施は「来年の春（next spring）」で秋ではない。②期間は「2週間（two weeks）」で3週間ではない。④"The school will cover most of the expenses"（学校が費用の大部分を負担する）とあり、参加者がすべて負担するわけではない。\n\n【ポイント3】"submit an application form"の意味を確認する\n「申込書を提出する」という意味の重要表現。\n\n【答え】\n③\n\n【確かめ】\n選んだ選択肢が"submit an application form by the end of this month"の内容と一致していることを確認する。\n\n【よくあるまちがい】\n"two weeks"（2週間）と「3週間」のように、似た数字表現を読み違えてしまうミス。\n\n【ここが絶対】\nプログラムの説明文は「時期・期間・費用」の数字情報を本文と1つずつ照合して答える。',
    pitfall: '数字や期間の読み違いが多い設問。"two weeks"（2週間）と "three weeks"（3週間）など似た表現に注意。',
    memoryTip: '"submit an application form" = 申込書を提出する。"by the end of this month" = 今月末までに。英語の締め切り表現は重要！',
  },
  {
    id: 'koko_moshi_eigo_50',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[対話を読んで答えなさい]
Teacher: Class, I have some exciting news. Our school has been selected to participate in an international student exchange program next spring.
Student A: Really? Which country will we visit?
Teacher: We will go to Canada for two weeks. Students who are interested need to submit an application form by the end of this month.
Student B: Do we need to speak English all the time?
Teacher: Yes, the program is designed to improve your English skills. You will stay with a host family and attend a local high school. It will be a wonderful experience.
Student A: How much does it cost?
Teacher: The school will cover most of the expenses. Participants will need to pay 50,000 yen for personal spending.`,
    question: 'このプログラムに参加すると何ができるか。最も適切なものを選びなさい。\n① カナダの高校に通い、ホームステイをする。\n② カナダの大学で英語の特別講義を受ける。\n③ カナダ人の生徒が日本に来て交流する。\n④ 英語を使わずに日本語で生活できる。',
    answer: '①',
    hint: '"You will stay with a host family and attend a local high school." という一文を確認しよう。',
    explanation: '【読解のポイント】①は "stay with a host family（ホームファミリーに滞在＝ホームステイ）" と "attend a local high school（地元の高校に通う）" という表現と一致します。②大学ではなく高校に通う。③は参加者が「カナダに行く」プログラムで、カナダ人が来るわけではない。④英語を常に話す必要がある（"designed to improve your English skills"）と述べられている。',
    pitfall: '④は "Do we need to speak English all the time?" という質問に対して "Yes" と答えているので誤り。YesとNoを聞き取ることが重要。',
    memoryTip: '"stay with a host family" = ホームステイする。"attend a local high school" = 地元の高校に通う。留学・交流プログラム関連の頻出表現！',
  },
];
