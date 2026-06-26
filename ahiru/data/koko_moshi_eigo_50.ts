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
    explanation: '【読解のポイント】第1段落で "In medicine", "In transportation", "In education" とAIの活用分野が3つ挙げられています。②は本文の「仕事が消える可能性」を過大解釈しており、③も逆（専門家は「最終的に雇用が増える」と述べています）。',
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
    explanation: '【読解のポイント】論説文の典型的な構成パターンです。第1段落は「スマートシティ」の定義、第2段落は交通・ゴミ・エネルギーの具体例（For example で始まる）、第3段落はプライバシーの課題と「バランスが必要」という提言。②が正確な説明です。',
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
    explanation: '【読解のポイント】"strike a balance between A and B" は「AとBのバランスをうまく取る」という重要イディオムです。ここでは「効率性の追求」と「個人のプライバシー保護」のバランスを保つことが求められています。',
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
    explanation: '【読解のポイント】"in particular（特に）" という表現で高齢者に特化した効果が述べられています。"reduce loneliness（孤独を減らす）" と "keep the mind active（頭を活発に保つ）" の2点が②の「孤独感を減らし、頭を活性化させる」に対応しています。',
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
    explanation: '【読解のポイント】"trigger" は「引き金を引く→引き起こす」、"chain reaction" は「連鎖反応」。生物多様性の喪失が「連鎖反応を引き起こし、生態系全体が崩壊する」という文脈から、①が正解です。銃の引き金（trigger）のイメージで覚えると良いでしょう。',
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
    explanation: '【読解のポイント】"pollinate flowers（花を受粉させる）" = 花粉を運ぶ、"which allows plants to reproduce（植物が繁殖できるようにする）" = 植物の繁殖を助ける。この関係節 "which" は前の節全体を受けています。②が正解です。',
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
    explanation: '【読解のポイント】"nervous（緊張した）" と "Her face turned red（顔が赤くなった）" は緊張や恥ずかしさを表す描写です。物語では登場人物の心情を表す「感情語」と「行動・様子の描写」の両方から読み取ることが重要です。',
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
    explanation: '【読解のポイント】物語のテーマは多くの場合、最後の段落の登場人物の「気づき・成長・変化」に表れます。Yukiは「英語の文法の正確さより人とつながることがコミュニケーションの本質だ」と気づきます。これが物語全体のメッセージです。',
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
    explanation: '【読解のポイント】Eメール問題では「送信目的（why was this email written?）」が頻出です。第3段落でTomは参加者が12人しかいないことを懸念し、30人必要だと述べ、MariaにSNSで宣伝を依頼しています。これがメールの主目的です。',
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
    explanation: '【読解のポイント】②は第2段落の内容と一致します。①はイベントは「来週の土曜日（next Saturday）」であり日曜日ではない。③は現在「12人」のみ（30人が目標）。④は「すでに許可を得た（she has given us permission）」と書かれている。',
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
    explanation: '【読解のポイント】"he might never play at a competitive level again（競技レベルで二度とプレーできないかもしれない）" という医師の言葉が原因で、Kenjiは第2段落で "lost and depressed（迷子になったような気持ちで落ち込んだ）" になります。物語問題では心情の「原因→結果」の流れを追いましょう。',
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
    explanation: '【読解のポイント】"grow on someone" は「（最初は気に入らなかったものが）だんだん好きになる」という慣用表現です。"At first ... laughed it off（最初は一笑に付した）" → "But as the days went by ... the idea grew on him（しかし日が経つにつれてそのアイデアが気に入ってきた）" という変化の流れです。',
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
    explanation: '【読解のポイント】対話の最後に "Good luck tomorrow（明日頑張って）" とあることから、テストはまだ行われていない（明日行われる）ことが分かります。また "Are you ready for the test?（テストの準備はできてる？）" という表現もテスト前であることを示しています。',
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
    explanation: '【読解のポイント】Meiは "I\'m especially nervous about the listening section（リスニングセクションが特に不安）" とはっきり述べています。一方、A（話し相手）は文法が弱点だと述べており、二人が異なる弱点を持っていることが "we both have different things to work on" という表現に反映されています。',
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
    explanation: '【読解のポイント】物語の感情の流れ：①nervous（緊張）→②Emmaに声をかけられる（助けられる）→③昼食でクラスメートと話しリラックスする（打ち解ける）→④コミュニケーションの本質に気づく（気づき）。これが①に対応しています。',
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
    question: '次の文の空所に入る最も適切な語句を選びなさい。\n「If I ______ more time, I would study abroad.」\n① have\n② had\n③ will have\n④ have had',
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
    question: '空所に入る最も適切な語を選びなさい。\n「The book ______ on the desk belongs to my teacher.」\n① lying\n② lie\n③ lain\n④ is lying',
    answer: '① lying',
    hint: '「机の上に置かれている本」—"the book" を後ろから修飾する現在分詞を考えよう。',
    explanation: '【文法のポイント】現在分詞（動詞-ing形）が名詞を修飾する「分詞の形容詞的用法」です。"lying on the desk" が "the book" を後置修飾しています。"lie（横たわる・置かれている）" の現在分詞は "lying" です。SVを見ると "The book ... belongs to ..." となっています。',
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
    question: '空所に入る最も適切な語を選びなさい。\n「This is the city ______ I was born.」\n① which\n② where\n③ who\n④ what',
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
    question: '空所に入る最も適切な語句を選びなさい。\n「She is the most talented singer ______ I have ever heard.」\n① who\n② which\n③ that\n④ what',
    answer: '③ that',
    hint: '先行詞が "the most talented singer" という最上級を含む場合、関係代名詞は何を使う？',
    explanation: '【文法のポイント】先行詞に最上級（the most talented）や序数詞（the first, the last）が付いている場合、関係代名詞は "that" を使うのが原則です。また "ever" を含む経験の現在完了と組み合わせて使われることが多いです。',
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
    question: '空所に入る最も適切な語句を選びなさい。\n「You ______ wear a seatbelt when you are in a car. It is the law.」\n① should\n② must\n③ had better\n④ ought to',
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
    explanation: '【文法のポイント】"so + 形容詞/副詞 + that + 主語 + cannot + 動詞" は "too + 形容詞/副詞 + (for + 目的語) + to + 動詞" に書き換えられます。"so high that we cannot climb it" → "too high for us to climb" となります。',
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
    question: '空所に入る最も適切な語句を選びなさい。\n「I wish I ______ play the piano as well as she does.」\n① can\n② could\n③ will\n④ am able to',
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
    explanation: '【文法のポイント】"ask + 目的語（人）+ to不定詞" は「〜に〜するよう頼む」という SVOC 構文です。"She asked me to open the window." が正しい形です。同様のパターン：tell（〜するよう言う）/ want（〜してほしい）/ order（〜するよう命令する）なども重要です。',
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
    question: '空所に入る最も適切な語句を選びなさい。\n「Japan is larger than ______ other country in East Asia.」\n① any\n② some\n③ every\n④ all',
    answer: '① any',
    hint: '比較級 + than any other + 単数名詞 = 最上級の表現。「東アジアの他のどの国よりも大きい」という意味。',
    explanation: '【文法のポイント】"比較級 + than any other + 単数名詞" は最上級と同じ意味を表す重要構文です。"Japan is larger than any other country in East Asia." = "Japan is the largest country in East Asia." 入試では最上級を比較級で言い換える問題として頻出です。',
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
    question: '空所に入る最も適切な語句を選びなさい。\n「______ tired he was, he kept on working.」\n① Although\n② However\n③ Despite\n④ Even though',
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
    question: '空所に入る最も適切な語句を選びなさい。\n「She told me that she ______ been waiting for over an hour.」\n① has\n② had\n③ have\n④ will have',
    answer: '② had',
    hint: '時制の一致（話法）を考えよう。"told（過去）" という主節の動詞に合わせて、従属節の現在完了は何に変わる？',
    explanation: '【文法のポイント】間接話法（話法）における時制の一致のルールです。主節が過去形（told）の場合、従属節の現在完了（has been）は過去完了（had been）に変化します。"She told me that she had been waiting for over an hour."（1時間以上待っていたと彼女は言った）',
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
    explanation: '【文法のポイント】"find + O + C" は「OがCだとわかる・感じる」という第5文型（SVOC）です。"The teacher" が S、"found" が V、"the classroom" が O（目的語）、"very noisy" が C（補語）。補語Cは目的語Oの状態を説明します（教室がとても騒がしい）。',
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
    explanation: '【文法のポイント】"study" の過去形 "studied"、場所は "at the library"、時間の長さは "for three hours"、時は "yesterday" を使います。語順は「動詞 + 場所 + 時間の長さ + 時」が自然な英語の語順です。',
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
    explanation: '【文法のポイント】"It is + 形容詞 + to + 動詞の原形" は「〜することは…だ」という形式主語（仮主語）の構文です。本来の主語は "to have good friends" ですが、長い主語を文末に移し、形式主語の "It" を文頭に置きます。',
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
    question: '次の語句を正しい順序に並べて英文を作りなさい。（1語不要）\n[ the / have / I / to / never / seen / been / movie / this ]',
    answer: 'I have never seen this movie.',
    hint: '現在完了形 "have + 過去分詞" で「一度も〜したことがない（経験）」を表す文を作ろう。不要な語は1つ。',
    explanation: '【文法のポイント】"have never + 過去分詞" で「一度も〜したことがない」という経験の否定を表します。正しい文：I have never seen this movie. 不要な語は "been"（have been to = 〜に行ったことがある、という別の表現で "been" を混ぜた引っかけ）。',
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
    explanation: '【文法のポイント】条件英作文では①指示通りの文の形にすること②英語として自然な文にすること③スペルミスをしないことが大切です。"instead of（〜の代わりに）" "This will help ..." などの表現を使うと説得力のある文になります。',
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
    question: '次の語句を正しい順序に並べて英文を作りなさい。\n[ you / do / how / English / long / been / studying / have ]?',
    answer: 'How long have you been studying English?',
    hint: '現在完了進行形の疑問文の語順：How long + have + 主語 + been + 動詞-ing？',
    explanation: '【文法のポイント】"How long have you been + 動詞-ing?" は「どのくらいの間〜し続けていますか」という現在完了進行形の疑問文です。開始時から現在まで継続している動作を尋ねます。この形は高校入試で頻出の問題形式です。',
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
    explanation: '【文法のポイント】"If + 現在形, 主語 + will + 動詞の原形" は「もし〜なら…するだろう」という条件文です。条件を表す "if" 節の中では未来のことでも現在形（rains）を使うのが英語のルールです。後半（主節）では will を使います。',
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
    question: 'この対話の内容と一致するものを選びなさい。\n① Tomは3時間テレビを見ていた。\n② 科学の課題は明後日が締め切りだ。\n③ TomはあとおよそBig20分で作業を終える予定だ。\n④ 母親は夕食をテーブルに出してしまった。',
    answer: '③',
    hint: '"I\'ll be done in about 20 minutes." という表現を確認しよう。',
    explanation: '【読解のポイント】③は "I\'ll be done in about 20 minutes（あと約20分で終わる）" と一致します。①Tomがしていたのは科学の課題（not テレビ）。②締め切りは "tomorrow（明日）"、明後日ではない。④母親は "I\'ll keep your food warm（温かく保っておく）" と言っており、まだ食卓に出すとは言っていない。',
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
    question: 'Visitorが支払う合計金額はいくらか。\n① 2,400円\n② 3,100円\n③ 3,500円\n④ 2,700円',
    answer: '② 3,100円',
    hint: '大人チケット2枚（1,200円×2）＋学生チケット1枚（700円）を計算しよう。',
    explanation: '【読解のポイント】計算問題です。大人チケット：1,200円 × 2 = 2,400円。学生チケット：700円 × 1 = 700円。合計：2,400 + 700 = 3,100円。本文の "that will be 3,100 yen in total" でも確認できます。',
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
    explanation: '【読解のポイント】③は "one hour earlier than the rest of the museum（博物館の他の部分より1時間早く閉まる）" と一致します。①は "Yes, it is（本日は開いている）" と矛盾。②は「同じ時間」ではなく「1時間早い」のが正しい。④無料とは述べられていない。',
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
    question: '対話の内容と一致するものを選びなさい。\n① SakuraはHinaの歌が嫌いだった。\n② RyoはKentaのマジックを見なかった。\n③ KentaはオレンジのなかからコインをBig見つけた。\n④ SakuraはKentaのマジックを最初から見た。',
    answer: '③',
    hint: '"He made a coin disappear and then found it inside an orange." という表現を確認しよう。',
    explanation: '【読解のポイント】③は "He made a coin disappear and then found it inside an orange（コインを消してオレンジの中から見つけた）" と一致します。①Sakuraは "amazing" や "beautiful voice" とポジティブに述べている。②Ryoはマジックを見て "incredible" と言っている。④SakuraはKentaのショーを "missed it（見逃した）" と述べている。',
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
    explanation: '【読解のポイント】③は "submit an application form by the end of this month（今月末までに申込書を提出する）" と一致します。①春（next spring）に行われる予定で秋ではない。②2週間（two weeks）で3週間ではない。④学校が大部分の費用を負担し（"The school will cover most of the expenses"）、参加者は5万円のみ負担する。',
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
