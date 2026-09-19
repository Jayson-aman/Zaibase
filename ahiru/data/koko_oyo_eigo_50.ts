import type { Question } from './questions';

export const kokoOyoEigo50: Question[] = [
  // ============================================================
  // 長文読解（説明文）10問
  // ============================================================
  {
    id: 'koko_oyo_eigo_01',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文を読んで、空欄に入る最も適切な語を選びなさい。\n\nPlastic waste is one of the most serious environmental problems today. Every year, millions of tons of plastic are thrown away, and much of it ends up in the ocean. Scientists have found that small pieces of plastic, called microplastics, (　　) in the bodies of fish and other sea animals.\n\n① collect  ② accumulate  ③ disappear  ④ reduce',
    answer: '② accumulate',
    hint: '「体内に蓄積する」という意味になる動詞を選ぼう。',
    explanation:
      '【解法のコツ】\n空欄の前後をよく読もう。「小さなプラスチック片が魚や海の生き物の体内に（　）される」という文脈。accumulate は「蓄積する・たまる」という意味で、マイクロプラスチックが生体に蓄積するという科学的事実にぴったり。\n① collect「集める」→他動詞の用法が主で文脈に合わない\n③ disappear「消える」→逆の意味\n④ reduce「減らす」→ここでは蓄積の話なので不適\n英語は必ずできるようになる！文脈を丁寧に読めば正解できる問題だよ。',
    pitfall:
      'collect と accumulate は似ているが、accumulate は「自然と蓄積される」ニュアンスが強い。生物濃縮の文脈では accumulate が正解。',
    memoryTip:
      'accumulate ＝ a（強調）+ cumulate（積み上げる）→ どんどん積み上がる＝蓄積する。山が積み上がるイメージで覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_02',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文を読んで、下線部 "this phenomenon" が指す内容として最も適切なものを選びなさい。\n\nIn many cities around the world, people are leaving and moving to the countryside. This is partly because of high living costs and crowded conditions in urban areas. Some experts call this phenomenon "reverse urbanization." It has changed the population balance between cities and rural areas significantly.\n\n① 都市の人口が増加していること\n② 人々が都市から農村へ移住していること\n③ 農村の生活費が上昇していること\n④ 都市と農村の人口が同じになること',
    answer: '② 人々が都市から農村へ移住していること',
    hint: '直前の文に this phenomenon が指す内容が書かれているよ。',
    explanation:
      '【何を聞かれているか】\n下線部の指示語 "this phenomenon"（この現象）が、本文中の何を指しているかを選ぶ問題。\n\n【なぜ直前の文を見るのか】\n指示語（this/these/itなど）は、基本的に「直前に述べられた内容」を受けて使われる。英語では同じ内容を繰り返さずに指示語で言い換えるのが自然なので、指示語が出てきたら必ず一つ前の文に戻って確認する。\n\n【ポイント1】直前の文を確認する\n"this phenomenon" の直前には "people are leaving and moving to the countryside"（人々が都市を離れ、農村に移住している）とある。この内容を"phenomenon"（現象）と呼んでいる。\n\n【ポイント2】言い換え表現もヒントになる\n本文はこの現象を "reverse urbanization"（逆都市化）と名付けている。「都市化の逆」なので「都市から農村への移動」という内容と一致する。\n\n【ポイント3】選択肢を1つずつ照合する\n①「都市の人口が増加」→本文と逆の内容。③「農村の生活費が上昇」→本文は「都市の生活費が高い」と言っており逆。④「人口が同じになる」→本文に記述なし。②のみが本文と一致。\n\n【答え】\n② 人々が都市から農村へ移住していること\n\n【確かめ】\n"this phenomenon" の一文前を読み返し、"leaving and moving to the countryside" が「都市から農村への移住」と一致することを確認する。\n\n【よくあるまちがい】\n"high living costs"（生活費が高い）という語だけを見て③を選んでしまうミス。この語は「都市の」生活費が高いことの説明であり、農村の生活費の話ではない。\n\n【ここが絶対】\n指示語問題は必ず「直前の文」に戻って確認する。難しい単語（reverse urbanizationなど）に惑わされず、直前のやさしい説明文を読めば答えが見つかる。',
    pitfall:
      '「reverse urbanization」という難しい単語に惑わされないこと。本文の簡単な説明部分を読めば内容がわかる。',
    memoryTip:
      'this / these / it は「直前の名詞や文の内容を指す」と覚えよう。指示語が出たら必ず矢印を引いて確認する習慣をつけよう！',
  },
  {
    id: 'koko_oyo_eigo_03',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文の内容と合っているものを選びなさい。\n\nArtificial intelligence, or AI, is changing many jobs. Some people worry that robots and computers will replace human workers. However, many experts believe that AI will create new kinds of jobs that we cannot imagine today. The key is for workers to learn new skills and adapt to the changing environment.\n\n① AIは今後すべての仕事をなくす。\n② 専門家の多くはAIが新しい仕事を生み出すと考えている。\n③ AIは既存の仕事を変えることはない。\n④ 労働者はスキルを学ぶ必要はない。',
    answer: '② 専門家の多くはAIが新しい仕事を生み出すと考えている。',
    hint: '"many experts believe that..." の部分に注目。',
    explanation:
      '【解法のコツ】\n内容一致問題は、選択肢の一つ一つを本文と照らし合わせよう。\n① "Some people worry..."（心配する人はいる）が、"all jobs" とは書いていない → ✗\n② "many experts believe that AI will create new kinds of jobs" → ✓\n③ "AI is changing many jobs" とあるので変わっている → ✗\n④ "workers need to learn new skills" とあるので必要 → ✗\n英語は必ずできるようになる！本文に書いてあること＝正解、書いていないこと＝✗と判断しよう！',
    pitfall:
      '「すべて（all / every）」「ない（never / not）」という強い表現が入った選択肢は誇張されていることが多く、正解になりにくい。',
    memoryTip:
      '内容一致問題は「本文に書いてあるか？」が唯一の基準。自分の知識や常識で判断しないこと！',
  },
  {
    id: 'koko_oyo_eigo_04',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文の（　）に入れるのに最も適切な文を選びなさい。\n\nSolar energy has become much cheaper in recent years. (　　) In fact, in many countries, solar power is now cheaper than electricity from coal or natural gas.\n\n① This means that fewer people can afford it.\n② As a result, more and more people are using it.\n③ However, its price is expected to rise in the future.\n④ Therefore, governments have stopped supporting it.',
    answer: '② As a result, more and more people are using it.',
    hint: '直前の文「太陽光エネルギーがずっと安くなった」という内容の「結果」として自然なものを選ぼう。',
    explanation:
      '【解法のコツ】\n文挿入問題は「流れ」が命。直前「安くなった」→ 空欄 → 直後「多くの国でコールや天然ガスより安い」という文脈。「安くなった結果どうなるか？」を考えると「より多くの人が使うようになった」② が自然。\n① 「少ない人しか買えない」→ 安くなったのに矛盾\n③ 「価格が上がると予測される」→ Howeverで逆接なのに文脈が合わない\n④ 「政府が支援をやめた」→ 唐突で文脈が合わない\n英語は必ずできるようになる！接続詞（As a result / However / Therefore）を手がかりにしよう！',
    pitfall:
      '直後の文が「実際に（In fact）」と続くので、空欄は「太陽光エネルギーが普及した」という内容でないといけない。In fact の前後は同じ方向性の内容になる。',
    memoryTip:
      '"As a result" ＝ その結果、"However" ＝ しかし、"In fact" ＝ 実際に。接続表現はそのまま暗記しよう！',
  },
  {
    id: 'koko_oyo_eigo_05',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文中の下線部の "it" が指すものを日本語で答えなさい。\n\nThe Amazon rainforest is often called "the lungs of the Earth" because it produces a large amount of oxygen. Unfortunately, it is being destroyed at an alarming rate due to deforestation and farming. If we do not protect it, the global climate will be seriously affected.',
    answer: 'アマゾン熱帯雨林（The Amazon rainforest）',
    hint: '最初の文に登場する名詞を探そう。',
    explanation:
      '【何を聞かれているか】\n下線部の代名詞 "it" が、本文中で何を指しているかを日本語で答える問題。\n\n【なぜ最初の文の名詞を確認するのか】\n代名詞（it/they/heなど）は一度出てきた名詞を、以降くり返さずに指すために使われる。1つの段落の中で同じものを指し続けることが多いので、最初に登場した中心となる名詞を確認するのが基本。\n\n【ポイント1】最初の文の主語を確認する\n本文の最初の文は "The Amazon rainforest is often called..."。主語はThe Amazon rainforest（単数）で、これがitで置き換えられる対象になる。\n\n【ポイント2】すべての"it"が同じものを指しているか確認する\n2文目・3文目の"it"も、内容的に「熱帯雨林が伐採されている」「熱帯雨林を守らないと」とつながっており、すべて同じThe Amazon rainforestを指している。\n\n【ポイント3】the Earthとのひっかけに注意する\n文中には"the Earth"（地球）という語も出てくるが、これは"the lungs of the Earth"というカッコ内の比喩表現の一部であり、文の主語ではない。\n\n【答え】\nアマゾン熱帯雨林（The Amazon rainforest）\n\n【確かめ】\n"it"の位置に"The Amazon rainforest"を当てはめて文を読み直し、意味が通ることを確認する（例：「アマゾン熱帯雨林は森林伐採によって恐ろしい速さで破壊されている」）。\n\n【よくあるまちがい】\n"the lungs of the Earth"というフレーズの中の"the Earth"を答えにしてしまうミス。itが指すのは比喩の対象である「熱帯雨林」であり、比喩の中の「地球」ではない。\n\n【ここが絶対】\n代名詞問題はまず文の最初に出てきた名詞（多くは主語）を確認する。カッコ内の説明や比喩表現に惑わされないこと。',
    pitfall:
      '"it" が指すものは「地球（the Earth）」ではない。the Earth はカッコ内の説明で登場するだけで、文の主語は the Amazon rainforest。',
    memoryTip:
      '代名詞（it / they / he / she）が出たら、最も直近の対応する名詞に戻って確認。これをルーティン化しよう！',
  },
  {
    id: 'koko_oyo_eigo_06',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文を読んで、筆者が最も言いたいことを選びなさい。\n\nMany students spend hours looking at their smartphones before going to bed. Research shows that the blue light from screens makes it harder to fall asleep. Lack of sleep can lead to poor concentration and lower academic performance. To improve their health and grades, students should try to put their phones away at least one hour before bedtime.\n\n① スマートフォンの画面は目に悪い。\n② 就寝1時間前にスマートフォンをやめると健康と成績が改善される。\n③ 学生は勉強中にスマートフォンを使うべきでない。\n④ 睡眠不足は集中力に影響する。',
    answer: '② 就寝1時間前にスマートフォンをやめると健康と成績が改善される。',
    hint: '最後の文（筆者の主張）に注目しよう。',
    explanation:
      '【何を聞かれているか】\n説明文を読んで、筆者が最も伝えたい主張（要点）を選ぶ問題。\n\n【なぜ最後の文に注目するのか】\n説明文（意見文）は「問題提起→根拠→主張（結論）」という構成になることが多く、筆者の一番言いたいことは最後の文にまとめられることが多い。\n\n【ポイント1】最後の文を読む\n最後の文は"To improve their health and grades, students should try to put their phones away at least one hour before bedtime."（健康と成績を良くするために、少なくとも寝る1時間前にはスマホを片付けるべき）。ここに筆者の主張が集約されている。\n\n【ポイント2】"should"に注目する\n"should"（〜すべきだ）という語は、筆者の意見・主張を表す代表的なサイン。この語を含む文が主張文であることが多い。\n\n【ポイント3】根拠と主張を区別する\n④「睡眠不足は集中力に影響する」は本文中に書かれている事実だが、これは主張を支える「根拠」の一つであり、筆者が最終的に伝えたい「主張」そのものではない。\n\n【答え】\n② 就寝1時間前にスマートフォンをやめると健康と成績が改善される。\n\n【確かめ】\n選んだ選択肢が、最後の文の内容（スマホを片付ける→健康と成績の改善）と一致しているか読み比べる。\n\n【よくあるまちがい】\n本文中に出てくる正しい内容（④睡眠不足と集中力の関係）を、そのまま主張だと思ってしまうミス。正しい情報＝筆者の主張、とは限らない。\n\n【ここが絶対】\n説明文の主張問題は「最後の文、特にshould/must/need toを含む文」に注目する。途中の情報は根拠であり、結論ではないことを意識する。',
    pitfall:
      '途中の内容（④睡眠不足と集中力）は「根拠」であり「主張」ではない。根拠と主張を区別しよう。',
    memoryTip:
      '説明文の構造は「問題提起 → 根拠 → 主張（結論）」。主張はたいてい最後の段落か文にある！',
  },
  {
    id: 'koko_oyo_eigo_07',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文の空欄に入る最も適切な語句を選びなさい。\n\nVolunteering has many benefits. (　　), it gives people a sense of purpose and happiness. It also helps build social connections and develop new skills. Moreover, communities become stronger when more people volunteer.\n\n① On the other hand\n② For example\n③ First of all\n④ As a result',
    answer: '③ First of all',
    hint: '空欄の後ろに続く文をよく読もう。ボランティアのメリットが列挙されている。',
    explanation:
      '【解法のコツ】\nこの文は「ボランティアのメリット」を列挙している構造。空欄の後ろには "it gives..." → "It also helps..." → "Moreover..." と続く。最初のメリットを導く接続表現は "First of all"（まず第一に）が最適。\n① "On the other hand"（一方で）→ 対比には使わない\n② "For example"（例えば）→ 例示なので「メリット全体を示す最初の文」には合わない\n④ "As a result"（その結果）→ 原因・結果の関係がないので不可\n英語は必ずできるようになる！列挙のパターン（First / Also / Moreover）を覚えておこう！',
    pitfall:
      '"For example" は「具体例を出すとき」に使う。ここはメリットの第一番目を述べているので First of all が正解。',
    memoryTip:
      '列挙の定番フレーズ：First of all → Also / In addition → Moreover / Furthermore → Finally。この順序で覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_08',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文の内容に合うように、質問に英語で答えなさい。\n\nThe number of people learning Japanese as a foreign language has increased greatly over the past decade. One reason is the global popularity of Japanese anime and manga. Many fans want to enjoy these works in their original language. Another reason is interest in Japanese culture, food, and travel.\n\nQuestion: Why do many people want to learn Japanese?\n（理由を2つ英語で書きなさい）',
    answer:
      '① Because they want to enjoy anime and manga in their original language. ② Because they are interested in Japanese culture, food, and travel.',
    hint: '本文の "One reason is..." と "Another reason is..." に注目しよう。',
    explanation:
      '【解法のコツ】\n理由を問う問題は、本文の "reason" や "because" が登場する箇所を探そう。"One reason is the global popularity of anime and manga" と "Another reason is interest in Japanese culture, food, and travel" の2つが明示されている。\n英語で答えるときは "Because..." で始める。本文の語句をうまく使って書こう。\n英語は必ずできるようになる！理由問題は本文の "reason / because / so that" を探せばOK！',
    pitfall:
      '質問は "reasons（複数）" なので2つ答えることが必要。1つだけ書くと減点になる。',
    memoryTip:
      '"One reason is... Another reason is..." ＝ 理由を2つ列挙するパターン。英作文でも使える便利な表現！',
  },
  {
    id: 'koko_oyo_eigo_09',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文を読んで、タイトルとして最も適切なものを選びなさい。\n\nFood waste is a global problem. Each year, about one-third of all food produced for human consumption is lost or wasted. This is not only a waste of resources but also contributes to greenhouse gas emissions. Reducing food waste at home, in restaurants, and in supermarkets is essential for a sustainable future.\n\n① The Importance of Eating Healthy Food\n② Why People Waste Money on Food\n③ The Problem of Food Waste and the Need to Reduce It\n④ How Greenhouse Gases Affect the Climate',
    answer: '③ The Problem of Food Waste and the Need to Reduce It',
    hint: '英文全体のテーマを表すタイトルを選ぼう。',
    explanation:
      '【何を聞かれているか】\n英文を読んで、内容全体を最もよく表すタイトルを選ぶ問題。\n\n【なぜ全体をカバーする選択肢を選ぶのか】\nタイトルは文章の一部分だけでなく、全体のテーマを要約するものでなければならない。一部の情報だけに合う選択肢は、たとえ本文に書かれていても正解にならない。\n\n【ポイント1】本文の2つの柱を確認する\n本文は「食品廃棄が世界的な問題であること」と「それを減らすことが持続可能な未来に必要であること」の2点を軸にしている。\n\n【ポイント2】選択肢を1つずつ照合する\n①健康的な食事の重要性→本文にない内容。②お金の無駄→本文の主題ではない。④温室効果ガスの影響→本文の一部で触れているだけでメインテーマではない。\n\n【ポイント3】③が両方をカバーしていることを確認する\n③"The Problem of Food Waste and the Need to Reduce It"（食品廃棄の問題とそれを減らす必要性）は、問題提起と主張の両方を含んでおり、本文全体を過不足なく表している。\n\n【答え】\n③ The Problem of Food Waste and the Need to Reduce It\n\n【確かめ】\n本文の最初の文（問題提起：Food waste is a global problem）と最後の文（主張：Reducing food waste ... is essential）の両方が、選んだタイトルに反映されているか確認する。\n\n【よくあるまちがい】\n④のように、本文中に書かれてはいるが「一部の情報」にすぎない選択肢を選んでしまうミス。部分的に正しいことと、全体を表すタイトルであることは別。\n\n【ここが絶対】\nタイトル問題は「最初の文（問題提起）」と「最後の文（主張）」の両方を組み合わせてカバーしている選択肢を選ぶ。',
    pitfall:
      '④ は本文に温室効果ガスへの言及があるが、それはサブの論点であり、文全体のテーマではない。部分的に正しいものに引っかからないこと。',
    memoryTip:
      'タイトル問題のコツ：①最初の文（問題提起）②最後の文（主張）の2つを組み合わせた選択肢が正解になりやすい！',
  },
  {
    id: 'koko_oyo_eigo_10',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の英文中の下線部の語句に最も近い意味を選びなさい。\n\nThe school decided to abolish the rule that students must wear uniforms. Many students and parents welcomed this decision.\n\n① introduce　② change　③ get rid of　④ follow',
    answer: '③ get rid of',
    hint: 'abolish の意味を文脈から判断しよう。',
    explanation:
      '【解法のコツ】\nabolish は「廃止する」という意味の動詞。文脈から「制服を着なければならないルールを（　）した」→「廃止した（なくした）」と判断できる。"get rid of" は「取り除く・廃止する」という意味で最も近い。\n① introduce「導入する」→ 逆の意味\n② change「変える」→ 弱すぎる（廃止ではなく変更）\n④ follow「従う」→ 逆の方向性\n英語は必ずできるようになる！知らない単語は文脈で意味を推測する力が大切！',
    pitfall:
      'change（変える）は「廃止」より弱い表現。abolish は完全になくすことなので get rid of が正確。',
    memoryTip:
      'abolish ＝ 廃止する。ab（離れる）+ olish（育てる）の逆 → 完全になくす。法律・制度・慣習に使う格式ある単語！',
  },

  // ============================================================
  // 長文読解（物語・対話）10問
  // ============================================================
  {
    id: 'koko_oyo_eigo_11',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の対話を読んで、下線部の表現の意図として最も適切なものを選びなさい。\n\nSaki: I heard you didn\'t do well on the math test.\nKen: Yeah. I was so embarrassed. But I\'ve decided to start over.\nSaki: That\'s the spirit! I\'m sure you can do it.\n\n"That\'s the spirit!" はどのような意図で使われているか。\n\n① 相手のやる気を称えて励ましている。\n② 相手のやり方に反対を表明している。\n③ 相手の失敗を批判している。\n④ 相手に休むよう勧めている。',
    answer: '① 相手のやる気を称えて励ましている。',
    hint: '"That\'s the spirit!" は英語の会話でよく使う励ましの表現。',
    explanation:
      '【何を聞かれているか】\n会話表現 "That\'s the spirit!" が、どのような意図で使われているかを選ぶ問題。\n\n【なぜ文脈から意図を読み取るのか】\n熟語的な会話表現は単語を直訳しても意味がわからないことが多い。誰が、どんな場面で、何と言った直後にその表現を使っているかという文脈から意図を判断する。\n\n【ポイント1】直前の発言を確認する\nKenは「テストで恥ずかしい思いをしたが、やり直すと決めた」と言っている。これは前向きな決意の発言。\n\n【ポイント2】"That\'s the spirit!"の意味を確認する\nこのフレーズは「その意気だ！」「そうこなくちゃ！」という、相手の前向きな姿勢をほめて励ます決まり文句。\n\n【ポイント3】直後の発言もヒントになる\n続けてSakiは"I\'m sure you can do it."（絶対できるよ）と言っており、これも激励の言葉。前後とも励ましの流れなので、①の「やる気を称えて励ましている」が一致する。\n\n【答え】\n① 相手のやる気を称えて励ましている。\n\n【確かめ】\n"spirit"を「気力・意気込み」という意味で読み、Kenの前向きな発言→Sakiの励まし→さらなる励まし、という一連の流れが自然につながることを確認する。\n\n【よくあるまちがい】\n"spirit"を「幽霊・魂」という意味だと思い込み、文の意図を誤解してしまうミス。会話表現の中の単語は、決まり文句としての意味を覚えておく必要がある。\n\n【ここが絶対】\n会話表現の意図問題は、その一文だけでなく前後の発言もあわせて文脈で判断する。"That\'s the spirit!"＝「その意気！」という励ましの定番表現として覚えておく。',
    pitfall:
      '"spirit" を「幽霊」の意味で訳してしまう間違いに注意。ここでは「気力・意気込み・やる気」という意味。',
    memoryTip:
      '"That\'s the spirit!" ＝ 「その意気！」。スポーツや試験前に使う定番の激励フレーズ。会話問題の定番表現として覚えておこう！',
  },
  {
    id: 'koko_oyo_eigo_12',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の物語文を読んで、Emiの気持ちとして最も適切なものを選びなさい。\n\nEmi had practiced the piano every day for three months. On the day of the recital, her hands were shaking as she walked onto the stage. She took a deep breath and began to play. When she finished, the audience applauded loudly. Tears came to her eyes.\n\n① 演奏が失敗して悲しんでいる。\n② 長い練習の成果が実り、感動している。\n③ 観客の拍手に驚いて困惑している。\n④ 舞台に上がることが恐ろしくて逃げ出したい。',
    answer: '② 長い練習の成果が実り、感動している。',
    hint: '演奏後の観客の反応とEmiの様子に注目しよう。',
    explanation:
      '【何を聞かれているか】\n物語文を読んで、登場人物Emiの気持ちを選ぶ問題。\n\n【なぜ行動や状況の変化に注目するのか】\n物語の心情読み取り問題では、心情を直接表す言葉が書かれていないことが多い。そのかわり、登場人物の行動・状況・体の反応（震える、涙が出るなど）の変化から心情を推測する。\n\n【ポイント1】流れを順に追う\n①3か月間毎日練習した（努力）→②手が震えた（緊張）→③深呼吸して弾き始めた（緊張を乗り越える）→④観客が大きな拍手をした（成功）→⑤涙が出た（感動）という流れになっている。\n\n【ポイント2】"tears came to her eyes"の意味を文脈で判断する\n涙には「悲しみの涙」と「感動の涙」があるが、直前に「大きな拍手」という成功を表す出来事があるため、ここでの涙は感動・達成感の涙だと判断できる。\n\n【ポイント3】選択肢を消去する\n①「演奏が失敗」→本文に演奏の失敗は書かれていない。③「拍手に困惑」→拍手は喜ばしい反応で、困惑するとは考えにくい。④「逃げ出したい」→震えたのは緊張であり、その後実際に弾いているので逃げ出してはいない。\n\n【答え】\n② 長い練習の成果が実り、感動している。\n\n【確かめ】\n「努力→緊張→克服→成功→感動」という一連の流れの最後に涙が出ていることを確認し、涙の理由が悲しみではなく達成感であることを確かめる。\n\n【よくあるまちがい】\n「手が震えた」という描写だけを見て、そのままネガティブな気持ちが最後まで続くと考えてしまうミス。心情は「最初の状態」ではなく「その後どうなったか」まで含めて判断する。\n\n【ここが絶対】\n物語の心情問題は「最初の状態→出来事→最後の状態」の変化をすべて追ってから答える。途中の一場面だけで判断しない。',
    pitfall:
      '「手が震えた」を「怖くて逃げ出したい」と結びつけてはいけない。その後の行動（演奏 → 成功 → 感動の涙）を総合して判断すること。',
    memoryTip:
      '物語の心情問題のコツ：「最初の状態」→「何が起きたか」→「最後の状態」の変化を追うと心情がわかる！',
  },
  {
    id: 'koko_oyo_eigo_13',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の対話を読んで、空欄に入る最も適切な表現を選びなさい。\n\nA: Could you help me with this project? I really don\'t know where to start.\nB: Of course! (　　) Let\'s begin with the research part.\n\n① I\'m afraid I can\'t.\n② That\'s none of my business.\n③ I\'d be happy to.\n④ You should ask someone else.',
    answer: "③ I'd be happy to.",
    hint: '"Of course!" の後に続く自然な返答を選ぼう。',
    explanation:
      '【何を聞かれているか】\n会話文の空欄に入る、自然な返答を選ぶ問題。\n\n【なぜ直前の発言とのつながりを見るのか】\n会話文の空欄補充は、文法的に正しいかだけでなく、前後の発言と意味がつながるかどうかで判断する。Bはすでに"Of course!"と快諾しているので、その後に矛盾する内容は入らない。\n\n【ポイント1】"Of course!"の意味を確認する\n"Of course!"は「もちろん！」という快諾（引き受ける）の表現。\n\n【ポイント2】快諾の流れに合う表現を選ぶ\n③"I\'d be happy to."（喜んで）は快諾の気持ちをさらに表す表現で、"Of course!"のあとに続けて自然。\n\n【ポイント3】矛盾する選択肢を消去する\n①「残念ですができません」、②「私には関係ない」、④「他の人に聞いて」は、いずれも断りや拒否のニュアンスがあり、直前の"Of course!"（快諾）と矛盾するため不自然。\n\n【答え】\n③ I\'d be happy to.\n\n【確かめ】\n選んだ文をBの発言全体に当てはめて読み、"Of course! I\'d be happy to. Let\'s begin with the research part."という自然な流れになっているか確認する。\n\n【よくあるまちがい】\n選択肢の意味だけを単独で考えて、直前の"Of course!"との整合性を見落としてしまうミス。会話文は必ず前後のつながりで判断する。\n\n【ここが絶対】\n会話の空欄補充は、直前の発言と矛盾しない選択肢を選ぶ。"I\'d be happy to."＝「喜んで」は依頼を快く引き受けるときの定番表現として覚えておく。',
    pitfall:
      'Of course! は「もちろん！（承諾）」の表現。この後に断りの文は絶対に来ない。',
    memoryTip:
      '"I\'d be happy to." ＝ 喜んで。依頼を引き受けるときの丁寧な定番フレーズ。"Sure!" や "Of course!" とセットで使えるよ！',
  },
  {
    id: 'koko_oyo_eigo_14',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の物語を読んで、下線部の表現が表す意味を日本語で答えなさい。\n\nTaro had always dreamed of becoming a doctor. After years of hard work, he finally passed the medical school entrance exam. He felt as if he were walking on air.\n\n"walking on air" の意味を日本語で書きなさい。',
    answer: '天にも昇るような気持ち（非常に喜んでいる・気分が最高の状態）',
    hint: '前後の文脈（夢が叶った瞬間）から Taro の気持ちを考えよう。',
    explanation:
      '【解法のコツ】\n"walking on air" は「空中を歩いているような」という直訳だが、比喩的に「最高に気分が良い・有頂天になっている」という意味の熟語表現。太郎が長年の夢だった医学部合格を果たした場面なので、「天にも昇るような喜び」の状態を表している。\n英語は必ずできるようになる！知らないイディオムも、文脈と感情から推測できるよ！',
    pitfall:
      '直訳（「空中を歩いている」）で答えないこと。これは比喩表現なので、文脈に合った感情（喜び・有頂天）に変換して答える。',
    memoryTip:
      '"walking on air" ＝ 有頂天・天にも昇る気持ち。"on cloud nine"（9番目の雲の上 ＝ 最高に幸せ）も同じ意味の有名な表現！',
  },
  {
    id: 'koko_oyo_eigo_15',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の対話を読んで、下線部の Lisa の発言の意図を選びなさい。\n\nMike: I\'m thinking about quitting the soccer team. It\'s too hard.\nLisa: Are you sure about that? You\'ve worked so hard to get this far.\nMike: I know, but I just feel so tired.\nLisa: Sometimes taking a break is okay. But think it over before you decide.\n\n① 辞めることを強く反対している。\n② 辞めることを積極的に勧めている。\n③ Mikeの疲れを否定している。\n④ 一度立ち止まってよく考えてから決断するよう促している。',
    answer: '④ 一度立ち止まってよく考えてから決断するよう促している。',
    hint: '"think it over before you decide" に注目しよう。',
    explanation:
      '【解法のコツ】\nLisaの発言全体を読むと：\n①「本当に？ここまで頑張ってきたのに」（確認・少し引き留め）\n②「時々休むのも大丈夫」（疲れを理解）\n③「でも決める前にじっくり考えて」（即断を止める）\nLisaは「辞めるな！」と強く反対するのでも、「辞めろ」と勧めるのでもなく、「一度じっくり考えて」と促している④が最適。\n英語は必ずできるようになる！会話問題は発言全体のトーンをつかもう！',
    pitfall:
      '「Are you sure?」は反対ではなく「確認」の表現。強い反対（①）と混同しないこと。',
    memoryTip:
      '"think it over" ＝ じっくり考える。"think about it" より「慎重に時間をかけて考える」ニュアンスが強い。重要会話フレーズとして覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_16',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の物語文を読んで、内容として正しいものを選びなさい。\n\nYuki was nervous about giving a speech in front of the class. The night before, she practiced many times in front of the mirror. The next day, she made some mistakes, but she kept going and finished the speech. Her teacher said, "Well done, Yuki! Courage is more important than perfection."\n\n① Yuki は当日のスピーチを完璧にこなした。\n② Yuki は練習なしにスピーチをした。\n③ Yuki はミスをしたが最後まで話し続けた。\n④ 先生は Yuki のスピーチを批判した。',
    answer: '③ Yuki はミスをしたが最後まで話し続けた。',
    hint: '"she made some mistakes, but she kept going and finished" の部分に注目。',
    explanation:
      '【解法のコツ】\n① 「完璧」→ "she made some mistakes"（ミスをした）とあるので ✗\n② 「練習なし」→ "she practiced many times in front of the mirror"（鏡の前で何度も練習）とあるので ✗\n③ 「ミスをしたが最後まで話した」→ "she made some mistakes, but she kept going and finished" ✓\n④ 「批判した」→ 先生は "Well done!" と褒めているので ✗\n英語は必ずできるようになる！本文に書かれていることだけを根拠にして答えよう！',
    pitfall:
      'but（しかし）の後の内容が「実際に起きたこと」。but の前の内容（ミス）だけで判断しないように。',
    memoryTip:
      '内容一致問題は「本文の一言一句が根拠」。自分の想像や常識で判断しない！本文に戻って確認する習慣を！',
  },
  {
    id: 'koko_oyo_eigo_17',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の対話の空欄に入る最も自然な表現を選びなさい。\n\nA: Excuse me, could you tell me the way to the nearest station?\nB: Sure. Go straight down this street, then (　　) at the second traffic light.\n\n① take off\n② turn left\n③ get on\n④ look up',
    answer: '② turn left',
    hint: '道案内の表現を考えよう。',
    explanation:
      '【何を聞かれているか】\n道案内の会話文の空欄に入る、自然な表現を選ぶ問題。\n\n【なぜ道案内特有の表現を覚えるのか】\n道案内には決まった言い回しのパターンがあり、それを知っていれば場面から自然に判断できる。\n\n【ポイント1】道案内の基本表現を確認する\n"Go straight"（真っすぐ行く）、"Turn left/right"（左/右に曲がる）、"Take the ... street"（〜番目の道を行く）が道案内の代表的な表現。\n\n【ポイント2】空欄の位置を確認する\n"Go straight down this street, then (　　) at the second traffic light."（この道を真っすぐ行き、2つ目の信号で〜）という文脈なので、信号のところで行う動作が入る。\n\n【ポイント3】選択肢を意味で確認する\n①"take off"（離陸する・脱ぐ）、③"get on"（乗る）、④"look up"（調べる・見上げる）はいずれも道案内の場面では使わない表現。②"turn left"（左に曲がる）だけが自然。\n\n【答え】\n② turn left\n\n【確かめ】\n"then turn left at the second traffic light"（それから2つ目の信号で左に曲がる）という文が、道案内として自然な意味になっているか確認する。\n\n【よくあるまちがい】\n"get on"を「（信号に）乗る」のような意味だと誤解して選んでしまうミス。get onは電車やバスなど乗り物に使う表現で、信号には使わない。\n\n【ここが絶対】\n道案内の三種の神器（Go straight／Turn left・right／Take the ... street）を覚えておけば、道案内問題のほとんどに対応できる。',
    pitfall:
      '"at the traffic light" は「信号のところで」という意味。"in the traffic light" とは言わない。前置詞 at に注意。',
    memoryTip:
      '道案内の三種の神器：①Go straight ②Turn left/right ③Take the ... street。この3つで道案内問題のほとんどは解ける！',
  },
  {
    id: 'koko_oyo_eigo_18',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の物語を読んで、Riku がどのような経験を通じて何を学んだかを日本語で説明しなさい（40字以内）。\n\nRiku had always avoided speaking English because he was afraid of making mistakes. One day, a foreign tourist asked him for help. Although his English was not perfect, he tried his best to help the person find the museum. The tourist smiled and said, "Thank you so much!" After that, Riku realized that communication is more important than perfection.',
    answer:
      '間違いを恐れず外国人を助けた経験から、完璧さより伝える大切さを学んだ。',
    hint: '最後の文 "Riku realized that..." が何を学んだかを示しているよ。',
    explanation:
      '【何を聞かれているか】\n物語文を読んで、登場人物Rikuがどのような経験を通じて何を学んだかを40字以内の日本語でまとめる問題。\n\n【なぜ最後の文に注目するのか】\n「何を学んだか」を問う問題では、登場人物の気づきや心境の変化が書かれた最後の文に、学びの内容が直接示されていることが多い。\n\n【ポイント1】経験の内容を確認する\nRikuは英語を話すことを避けていたが、外国人観光客に助けを求められ、完璧ではない英語で道案内を手伝った、という経験をしている。\n\n【ポイント2】学びの内容を確認する\n最後の文"Riku realized that communication is more important than perfection."（コミュニケーションは完璧さより大切だと気づいた）が、学びそのものを表している。\n\n【ポイント3】「経験＋学び」の形でまとめる\nまとめ問題では「（どんな経験）を通じて、（何を学んだか）」という形に整理すると、字数内に要点を収められる。\n\n【答え】\n間違いを恐れず外国人を助けた経験から、完璧さより伝える大切さを学んだ。（35字）\n\n【確かめ】\n書き上げた文の文字数を実際に数え、40字以内におさまっているか確認する（この答えは35字）。また「経験」と「学び」の両方が含まれているか見直す。\n\n【よくあるまちがい】\n「英語が完璧になった」のように、本文に書かれていない結果を答えにしてしまうミス。本文が伝えているのは「完璧さより伝えることが大切だという気づき」であり、英語力そのものの向上ではない。また、字数を数えずに書いて指定の字数を超えてしまうミスにも注意。\n\n【ここが絶対】\nまとめ問題は「経験（きっかけ）＋学び（気づき）」の2つを必ず両方入れる。文字数指定がある場合は、書いたあと必ず数え直して確認する。',
    pitfall:
      '「英語が完璧になった」とまとめてしまいがちだが、本文にはそうは書いていない。あくまでも「完璧さより伝えることが大切」という気づきが学び。',
    memoryTip:
      '物語の「学び問題」の公式：「（経験）を通じて、（気づき・学び）を学んだ」という形でまとめるとスッキリ書ける！',
  },
  {
    id: 'koko_oyo_eigo_19',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の対話を読んで、Aがなぜ驚いているかを選びなさい。\n\nA: I heard that Kenji won first prize in the national speech contest!\nB: Yes, he did. He practiced every day after school for six months.\nA: Wow, I had no idea he was such a hard worker.\n\n① Kenji が大会で失格になったから。\n② Kenji がそれほど努力家だとは知らなかったから。\n③ Kenji が英語を学んでいることを知っていたから。\n④ Kenji が大会に出場しなかったから。',
    answer: '② Kenji がそれほど努力家だとは知らなかったから。',
    hint: '"I had no idea he was such a hard worker" の意味を正確に理解しよう。',
    explanation:
      '【解法のコツ】\n"I had no idea" ＝「全く知らなかった」。"such a hard worker"＝「こんなに努力家」。つまり「Kenji がこれほど努力家だったとは全く知らなかった」という意味。驚きの理由は②。\n英語は必ずできるようになる！会話の感情表現を正確に読み取ろう！',
    pitfall:
      '"I had no idea" は「知らなかった」という意味。"I had an idea"（アイデアがあった）と混同しないこと。no が入ると全否定になる。',
    memoryTip:
      '"I had no idea (that)..." ＝ ～だとは全く知らなかった。会話でよく使う重要表現！試験でも頻出なので必ず覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_20',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の物語の場面として最も適切なものを選びなさい。\n\n"Mom, I think I left my wallet at the restaurant," said Hana. Her mother looked at her and said, "Well, we\'d better call them." Hana\'s heart was beating fast. A few minutes later, her mother said with a smile, "They found it. We can pick it up tomorrow."\n\n① 家族が外食を楽しんでいる場面。\n② ハナが財布をなくして心配しているが、見つかって安心する場面。\n③ ハナの母が財布を盗まれた場面。\n④ ハナが忘れ物をして先生に叱られる場面。',
    answer: '② ハナが財布をなくして心配しているが、見つかって安心する場面。',
    hint: '最初と最後のハナの様子の変化に注目しよう。',
    explanation:
      '【何を聞かれているか】\n物語の場面（状況と登場人物の心情の流れ）として最も適切なものを選ぶ問題。\n\n【なぜ状況と感情の変化を追うのか】\n場面把握問題は、出来事の流れと登場人物の感情の変化をセットで確認することで、正しい場面を選べる。\n\n【ポイント1】出来事の流れを確認する\n①ハナが財布をレストランに忘れたかもしれないと言う（問題発生）→②母が「電話しよう」と言う（対応）→③ハナの心臓がドキドキする（不安）→④母が「見つかった」と微笑んで言う（解決）。\n\n【ポイント2】心情の変化を確認する\n不安（心臓がドキドキ）から安心（母の笑顔で「見つかった」）へと感情が変化している。\n\n【ポイント3】選択肢を消去する\n①「外食を楽しむ」→財布をなくした話なので不一致。③「盗まれた」→本文には盗難の記述はなく、レストランに忘れただけ。④「先生に叱られる」→先生は登場しない。\n\n【答え】\n② ハナが財布をなくして心配しているが、見つかって安心する場面。\n\n【確かめ】\n出来事（忘れ物→不安→発見→安心）の流れが選んだ選択肢と一致しているか確認する。\n\n【よくあるまちがい】\n「心臓がドキドキした」という描写を見て、単に「怖い場面」と決めつけてしまうミス。直後に「見つかった」という解決が続くため、最終的には安心する場面だと判断する必要がある。\n\n【ここが絶対】\n物語は「問題発生→解決」という流れで読み、感情も出来事に合わせて変化することを意識する。',
    pitfall:
      '「心臓がドキドキした（heart was beating fast）」を「怒り」や「興奮」と解釈しないこと。文脈（財布をなくした）から「不安・心配」と判断する。',
    memoryTip:
      '"heart was beating fast" ＝ 心臓がドキドキする。不安・緊張・興奮の場面で使う。文脈によって感情を判断しよう！',
  },

  // ============================================================
  // 文法応用 15問
  // ============================================================
  {
    id: 'koko_oyo_eigo_21',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な語句を選びなさい。（仮定法）\n\nIf I (　　) more time, I would travel around the world.\n\n① have  ② had  ③ will have  ④ have had',
    answer: '② had',
    hint: '「今もし～なら」という現在の事実に反する仮定を表す場合、動詞はどの形を使う？',
    explanation:
      '【何を聞かれているか】\n仮定法過去を使った文の空欄に入る、動詞の正しい形を選ぶ文法問題。\n\n【なぜ動詞を過去形にするのか】\n仮定法過去は「今の事実とは違うことを仮に想像する」ときに使う形。実際にはそうではないことを表すために、あえて時制を1段階過去にずらして「現実味を薄める」というのが英語の仕組み。\n\n【ポイント1】仮定法過去の公式を確認する\nIf＋主語＋動詞の過去形〜, 主語＋would/could/might＋動詞の原形〜。\n\n【ポイント2】文の意味から現在の事実に反する仮定だと判断する\n「もし時間がもっとあれば、世界中を旅するのに」は、実際には「今、時間がない」という現在の事実に反する内容。よって仮定法過去（過去形）を使う。\n\n【ポイント3】他の選択肢を消去する\n①"have"は直説法（現実の話）になってしまう。③"will have"は未来形で仮定法ではない。④"have had"は仮定法過去完了（過去の事実に反する仮定）で、今回は「現在」の話なので合わない。\n\n【答え】\n② had\n\n【確かめ】\n"If I had more time, I would travel around the world."を日本語に戻し、「もし（今）時間がもっとあれば、世界中を旅するのに（実際は時間がない）」という意味になることを確認する。\n\n【よくあるまちがい】\n"If"があるからといって単純に現在形（have）を使ってしまうミス。仮定法では「今の話」でも動詞を過去形にするのがルール。\n\n【ここが絶対】\n仮定法過去の公式（If+過去形, would+原形）は「今もし〜なら」という意味とセットで丸暗記する。',
    pitfall:
      'If節で "was" の代わりに "were" を使うのが仮定法の特徴（I were / he were）。were は全人称で使える。',
    memoryTip:
      '仮定法過去の公式：If + 過去形, would + 原形。「今もし～なら」で覚えよう！もし文に "would" が見えたら仮定法を疑え！',
  },
  {
    id: 'koko_oyo_eigo_22',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な関係代名詞を選びなさい。\n\nThe book (　　) I borrowed from the library was very interesting.\n\n① who  ② whose  ③ which  ④ whom',
    answer: '③ which',
    hint: '先行詞（修飾される名詞）は "the book"。人か物かを確認しよう。',
    explanation:
      '【解法のコツ】\n関係代名詞の選び方：\n・先行詞が「人」→ who / whom / whose\n・先行詞が「物・事」→ which / whose\n・どちらでも使える → that\n\n"the book" は「物」なので who は使えない。また、後ろの文 "I borrowed ___ from the library" の空欄に the book を入れると "I borrowed the book from the library" ＝ 目的語の位置なので、目的格の関係代名詞 which を使う（目的格は省略可能）。\n英語は必ずできるようになる！「先行詞が人か物か」「主格か目的格か」の2ステップで解ける！',
    pitfall:
      '"that" も正解として使えるが、選択肢にないので which を選ぶ。試験では that を選べる場合も多い。',
    memoryTip:
      '関係代名詞の選び方：人→who、物→which、どちらも→that。「人ほうだれ、物ほうどれ、どちらもたれ」で覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_23',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文を分詞構文に書き換えたとき、空欄に入る最も適切なものを選びなさい。\n\n元の文：Because she was tired, she went to bed early.\n書き換え：(　　) tired, she went to bed early.\n\n① Being  ② Having been  ③ Been  ④ To be',
    answer: '① Being',
    hint: '分詞構文で「be動詞＋形容詞」の場合、be動詞を分詞にすると？',
    explanation:
      '【解法のコツ】\n分詞構文の作り方：\n①接続詞（Because）を取る\n②主節と同じ主語（she）を取る\n③動詞を現在分詞（-ing形）に変える\n\n"was tired" → be動詞を分詞に → "Being tired"\n"Being tired, she went to bed early." が正解。\n\n② "Having been" → 完了の分詞構文（主節の動作より「前に」起きた場合）\n③ "Been" → 過去分詞のみは誤り\n④ "To be" → 不定詞（目的・原因には使えるが、ここでは理由の書き換えなので不可）\n英語は必ずできるようになる！分詞構文は「接続詞を取り、主語を取り、動詞を-ing形に」の3ステップ！',
    pitfall:
      '接続詞の意味（理由・時・条件など）は分詞構文では消えてしまう。文脈から意味を判断する必要がある。',
    memoryTip:
      '分詞構文の3ステップ：①接続詞を取る②同じ主語を取る③動詞を-ing。"Being tired" ＝ 疲れていたので。パターンで慣れよう！',
  },
  {
    id: 'koko_oyo_eigo_24',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な語句を選びなさい。（比較）\n\nThis movie is (　　) exciting than the one I watched last week.\n\n① very  ② much more  ③ the most  ④ as',
    answer: '② much more',
    hint: '「～よりずっと exciting だ」という比較級の文。"than" に注目。',
    explanation:
      '【何を聞かれているか】\n比較級を強調する語として正しいものを選ぶ文法問題。\n\n【なぜveryが使えないのか】\n"very"は原級（exciting, goodなど、そのままの形容詞）を強調する語であり、比較級（more exciting, betterなど、比べる形）を強調するには使えない。比較級を強調する語は別に決まっている。\n\n【ポイント1】比較級の強調語を確認する\n比較級を強めるときは"much / far / even / a lot"を使う。「ずっと〜」という意味になる。\n\n【ポイント2】文の形を確認する\n"This movie is (　　) exciting than..."という文はexciting（原級のまま比較級として使われている）とthanがセットになっているので、比較級の文だとわかる。\n\n【ポイント3】他の選択肢を消去する\n①"very"は比較級には使えない。③"the most"は最上級（3つ以上を比べるとき）の形で、thanとは一緒に使わない。④"as"は"as~as"（同等比較）の構文で使う語で、thanとは組み合わせない。\n\n【答え】\n② much more\n\n【確かめ】\n"This movie is much more exciting than the one I watched last week."を訳し、「この映画は先週見たものよりずっとおもしろい」という自然な意味になることを確認する。\n\n【よくあるまちがい】\n"very exciting"のように、うっかり"very"を比較級の前に置いてしまうミス。veryは比較級（more/-er）の前には置けない。\n\n【ここが絶対】\n比較級を強調するときは"much / far / even / a lot"を使う。"very"は原級専用と覚えておく。',
    pitfall:
      '比較級の強調で "very" は使えない！"very"は原級（exciting / good）にのみ使える。比較級には "much / far / even / a lot" を使おう。',
    memoryTip:
      '比較級の強調：much / far / even + 比較級。「ずっと～だ」と言いたいときは much more ~ than で決まり！',
  },
  {
    id: 'koko_oyo_eigo_25',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切なものを選びなさい。（間接疑問文）\n\nCan you tell me (　　) the next train will arrive?\n\n① when  ② what time does  ③ when does  ④ what time is',
    answer: '① when',
    hint: '間接疑問文では語順はどうなる？',
    explanation:
      '【解法のコツ】\n間接疑問文のルール：疑問詞＋主語＋動詞の語順（疑問文の語順ではない）。\n"Can you tell me + 疑問詞 + 主語 + 動詞?" の形になる。\n→ "Can you tell me when the next train will arrive?"\n\n② "what time does" → 疑問文の語順（does が助動詞の位置）になっているので✗\n③ "when does" → 同じく疑問文の語順✗\n④ "what time is" → is の語順が疑問文のまま✗\n\n英語は必ずできるようになる！間接疑問文は「疑問詞の後ろを普通の文の語順にする」だけ！',
    pitfall:
      '間接疑問文で最もよくあるミスは「疑問文の語順のまま」にしてしまうこと。tell me のあとはSVの普通の順番になることを必ず覚えよう。',
    memoryTip:
      '間接疑問文：疑問詞＋S＋V。「tell me when IT COMES（普通の文）」と頭の中で唱えよう！',
  },
  {
    id: 'koko_oyo_eigo_26',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の構造として正しいものを選びなさい。（SVOC）\n\n"We call this bird a sparrow."\n\n① S＝We、V＝call、O＝this bird、C＝a sparrow\n② S＝We、V＝call、O＝a sparrow、C＝this bird\n③ S＝We、V＝call this bird、O＝a sparrow\n④ S＝this bird、V＝call、O＝a sparrow',
    answer: '① S＝We、V＝call、O＝this bird、C＝a sparrow',
    hint: '"call A B" は「AをBと呼ぶ」という SVOC の構文。',
    explanation:
      '【何を聞かれているか】\n"We call this bird a sparrow."という文の文構造（SVOC）を正しく分析する問題。\n\n【なぜOとCがイコールの関係になるのか】\n"call A B"（AをBと呼ぶ）という形の動詞では、目的語（O）と補語（C）が「＝（イコール）」の関係になる。この文型を第5文型（SVOC）と呼ぶ。\n\n【ポイント1】SVOCをとる代表的な動詞を確認する\ncall（呼ぶ）、name（名付ける）、make（させる）、keep（保つ）、find（わかる）などがSVOCをとる代表的な動詞。\n\n【ポイント2】文を要素に分ける\n"We(S) call(V) this bird(O) a sparrow(C)."と分けられる。this bird（この鳥）とa sparrow（スズメ）はイコールの関係になっている。\n\n【ポイント3】他の選択肢を確認する\n②はOとCが逆になっている。③は動詞のまとめ方が誤り（"call this bird"を一つのVとして扱っている）。④は主語の取り方が誤り。\n\n【答え】\n① S＝We、V＝call、O＝this bird、C＝a sparrow\n\n【確かめ】\nO（this bird）とC（a sparrow）を"="でつないでみて、"this bird = a sparrow"（この鳥＝スズメ）という意味が成り立つか確認する。\n\n【よくあるまちがい】\nOとCの順番を逆にして覚えてしまうミス。"call A B"は「AをBと呼ぶ」の語順で、Aが先、Bが後。\n\n【ここが絶対】\nSVOCの文は「O＝C」の関係が成り立つかどうかで見分ける。call/name/make/keep/findの5つの動詞は特にセットで覚えておく。',
    pitfall:
      'OとCの順番を逆にしないこと。"call O C"（OをCと呼ぶ）の語順はV→O→Cの順。',
    memoryTip:
      'SVOC の動詞は「callとnameは呼ぶ、makeとkeepは～の状態にする、findは気づく」。"call A B" ＝ AをBと呼ぶ、で丸暗記！',
  },
  {
    id: 'koko_oyo_eigo_27',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な語句を選びなさい。（仮定法過去完了）\n\nIf I (　　) harder, I would have passed the exam.\n\n① studied  ② had studied  ③ have studied  ④ study',
    answer: '② had studied',
    hint: 'would have passed（主節の過去完了）が使われているので、if節も対応した形にしよう。',
    explanation:
      '【何を聞かれているか】\n仮定法過去完了を使った文の空欄に入る、動詞の正しい形を選ぶ文法問題。\n\n【なぜ過去完了の形にするのか】\n仮定法過去完了は「あの時もし〜していたら（実際はしなかった）」という、過去の事実に反する内容を表すときに使う。過去のことなので、動詞は「過去形」よりもさらに1段階前の「過去完了形（had+過去分詞）」にする。\n\n【ポイント1】仮定法過去完了の公式を確認する\nIf＋主語＋had＋過去分詞〜, 主語＋would have＋過去分詞〜。\n\n【ポイント2】主節の形をヒントにする\n主節に"would have passed"（過去完了に対応する形）があることから、if節も同じ「過去の仮定」であるとわかり、"had studied"が対応する。\n\n【ポイント3】他の選択肢を消去する\n①"studied"は仮定法過去（現在の仮定）用の形で、時制が合わない。③"have studied"は現在完了形で仮定法ではない。④"study"は現在形で仮定法ではない。\n\n【答え】\n② had studied\n\n【確かめ】\n"If I had studied harder, I would have passed the exam."を訳し、「もしもっと勉強していたら、試験に合格していたのに（実際は勉強しなかったので不合格だった）」という過去の事実に反する意味になることを確認する。\n\n【よくあるまちがい】\n仮定法過去（If+過去形, would+原形）と仮定法過去完了（If+had+過去分詞, would have+過去分詞）を混同してしまうミス。\n\n【ここが絶対】\n主節が"would have+過去分詞"のときは、if節は必ず"had+過去分詞"にする。この対応関係をセットで覚える。',
    pitfall:
      '仮定法過去（If + 過去形, would + 原形）と仮定法過去完了（If + had + 過去分詞, would have + 過去分詞）を混同しないこと。時制を見分ける鍵は主節の "would" か "would have" か。',
    memoryTip:
      '仮定法の時制公式：現在の仮定→過去形、過去の仮定→過去完了形（had＋過去分詞）。"もし勉強していたら"は過去の話なので had studied！',
  },
  {
    id: 'koko_oyo_eigo_28',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に最も適切な語句を選びなさい。（関係詞・whose）\n\nI have a friend (　　) father is a famous musician.\n\n① who  ② that  ③ whose  ④ whom',
    answer: '③ whose',
    hint: '「友達の父が」→ 所有関係を示す関係代名詞を選ぼう。',
    explanation:
      '【何を聞かれているか】\n関係代名詞"whose"を使う文の空欄に入る、正しい語を選ぶ文法問題。\n\n【なぜwhoseを使うのか】\n"whose"は「〜の」という所有関係を表す関係代名詞。先行詞（a friend）の所有物（father）を後ろで説明するときに使う。\n\n【ポイント1】whoseの後ろの形を確認する\nwhoseの後ろには必ず名詞が続く（今回はfather）。「(先行詞)の(名詞)が〜」という意味を作る。\n\n【ポイント2】他の関係代名詞と役割を区別する\n①"who"は主格で、後ろに動詞が直接続く。④"whom"は目的格で、後ろに主語＋動詞が続く。②"that"は主格・目的格の代わりに使えるが、所有格の代わりには使えない。\n\n【ポイント3】文全体の意味を確認する\n"a friend whose father is a famous musician"＝「父が有名な音楽家である友人」。友達自身の説明ではなく、友達の「父」について説明している点がポイント。\n\n【答え】\n③ whose\n\n【確かめ】\nwhoseの後ろに"father"という名詞が直接続いていること、そして文全体が「友達の父は有名な音楽家だ」という所有の意味になっていることを確認する。\n\n【よくあるまちがい】\n先行詞が「人」だからといって、所有格が必要な場面で"who"を選んでしまうミス。whoの後ろには動詞が来るが、今回は後ろに名詞（father）が来ているのでwhoseが正しい。\n\n【ここが絶対】\nwhoseの後ろには必ず名詞が来る。「whose＋名詞」のセットで「〜の（名詞）が」という意味になると覚える。whoseは人にも物にも使える。',
    pitfall:
      'whose は「人」にも「物」にも使える（先行詞を選ばない）。"a book whose cover is red"（表紙が赤い本）のように物にも使う。',
    memoryTip:
      'whose ＝ 所有格の関係代名詞。「whose + 名詞」のセットで覚えよう！「～の（名詞）が」という意味になる！',
  },
  {
    id: 'koko_oyo_eigo_29',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文を受動態に書き換えたとき、空欄に入る語を選びなさい。\n\n能動態：People all over the world speak English.\n受動態：English (　　) spoken all over the world.\n\n① is  ② was  ③ are  ④ were',
    answer: '① is',
    hint: '主語は English（単数）。時制は現在。',
    explanation:
      '【何を聞かれているか】\n能動態の文を受動態に書き換えたとき、空欄に入る正しいbe動詞を選ぶ文法問題。\n\n【なぜbe動詞を主語と時制に合わせるのか】\n受動態は「主語＋be動詞＋過去分詞」という形を取り、be動詞は主語の人称・数と、もとの文の時制の両方に合わせて選ぶ必要がある。\n\n【ポイント1】受動態の公式を確認する\n主語＋be動詞＋過去分詞（＋by＋動作主）。もとの文People all over the world speak English.のspeakを受動態にすると、目的語のEnglishが主語になり、動詞はspoken（過去分詞）になる。\n\n【ポイント2】主語と時制を確認する\n新しい主語はEnglish（単数・三人称）。もとの文の動詞speakは現在形なので、時制も現在のまま保つ。\n\n【ポイント3】be動詞を選ぶ\n単数・現在の組み合わせに合うbe動詞はis。「English is spoken all over the world.」となる。\n\n【答え】\n① is\n\n【確かめ】\n"English is spoken all over the world."を訳し、「英語は世界中で話されている」という意味になっていること、また主語Englishと動詞isの数・時制が一致していることを確認する。\n\n【よくあるまちがい】\nもとの文の主語People（複数）につられて、are/wereのような複数形のbe動詞を選んでしまうミス。受動態では新しい主語（English）に合わせてbe動詞を選び直す必要がある。\n\n【ここが絶対】\n受動態はbe動詞＋過去分詞のセット。be動詞は「新しい主語の人称・数」と「もとの文の時制」の両方に必ず合わせる。',
    pitfall:
      '受動態で使うのは「be動詞＋過去分詞」の組み合わせ。"be動詞＋動詞の原形"や"be動詞＋ing形"は受動態ではない。',
    memoryTip:
      '受動態 ＝ be + 過去分詞。主語が単数なら is/was、複数なら are/were。時制は能動態から引き継ぐ！',
  },
  {
    id: 'koko_oyo_eigo_30',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切なものを選びなさい。（話法の転換）\n\n直接話法：She said, "I am busy now."\n間接話法：She said that she (　　) busy then.\n\n① is  ② was  ③ will be  ④ has been',
    answer: '② was',
    hint: '間接話法では時制を1段階過去にずらす（時制の一致）。',
    explanation:
      '【何を聞かれているか】\n直接話法の文を間接話法に書き換えたとき、空欄に入る正しい動詞の形を選ぶ文法問題。\n\n【なぜ時制を1段階過去にずらすのか】\n間接話法では、主節の動詞（said＝過去形）に合わせて、引用符の中の動詞も時制を1段階過去にずらす。これを「時制の一致」と呼ぶ。\n\n【ポイント1】時制の一致のルールを確認する\n主節が過去形（said）のとき、that節の中の動詞も現在形→過去形に変える。am/is→was、will→would、can→couldのように対応する。\n\n【ポイント2】直接話法から変換の流れを確認する\n直接話法："I am busy now."（現在形）→間接話法：she was busy then（過去形）。主語も"I"→"she"に、時を表す語も"now"→"then"に変える。\n\n【ポイント3】他の選択肢を消去する\n①"is"は現在形のままで時制の一致がされていない。③"will be"は未来形で対応関係が違う。④"has been"は現在完了形で今回のルールとは異なる。\n\n【答え】\n② was\n\n【確かめ】\n"She said that she was busy then."を読み、"said"（過去）と"was"（過去）で時制がそろっていることを確認する。\n\n【よくあるまちがい】\n動詞（am→was）だけ変えて、"now"を"then"に変え忘れてしまうミス。時を表す語（now/today/yesterdayなど）も間接話法用に変換する必要がある。\n\n【ここが絶対】\n時制の一致は「主節が過去なら、that節も過去に」が大原則。am/is→was、will→would、can→couldの対応をセットで覚える。',
    pitfall:
      '"now" → "then"、"today" → "that day"、"yesterday" → "the day before" など、時を示す語も変換することを忘れずに！',
    memoryTip:
      '時制の一致：主節が過去（said）→ that節も過去に。am→was、is→was、will→would、can→could。これを「過去には過去で返す」と覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_31',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な語句を選びなさい。（現在完了）\n\nI (　　) this city for ten years.\n\n① lived in  ② have lived in  ③ am living in  ④ was living in',
    answer: '② have lived in',
    hint: '"for ten years"（10年間）というキーワードがある。現在まで続いている状態を表す時制は？',
    explanation:
      '【何を聞かれているか】\n"for ten years"という期間を表す語句とともに使う、正しい動詞の形を選ぶ文法問題。\n\n【なぜ現在完了を使うのか】\n"for＋期間"は「（過去のある時点から今まで）ずっと〜」という継続を表す。過去から現在まで続いている状態を表すには、現在完了（have/has＋過去分詞）を使う。\n\n【ポイント1】現在完了（継続用法）の公式を確認する\nhave/has＋過去分詞。「今まで（期間）ずっと〜している」という意味になる。\n\n【ポイント2】キーワードを確認する\n"for＋期間"（for ten years）や"since＋起点"（since 2015）が文中にあれば、現在完了（継続）が使われるサイン。\n\n【ポイント3】他の選択肢を消去する\n①"lived in"は単純過去で、「10年前に住んだ」だけの意味になり、今も住んでいるかは不明。③"am living in"は現在進行形で「今まさに」を表すが継続の長さは表せない。④"was living in"は過去進行形で今とのつながりがない。\n\n【答え】\n② have lived in\n\n【確かめ】\n"I have lived in this city for ten years."を訳し、「私はこの街に10年間（ずっと今も）住んでいる」という、過去から現在までの継続を表す意味になっていることを確認する。\n\n【よくあるまちがい】\n"for ten years"を見て単純に過去形（lived in）を選んでしまうミス。"for＋期間"は「今も続いている」ことを表すため、現在完了が必要。\n\n【ここが絶対】\n"for＋期間"や"since＋起点"が出てきたら、現在完了（have/has＋過去分詞）を疑う。liveのような状態動詞は進行形にしにくいことも覚えておく。',
    pitfall:
      'live は状態動詞なので進行形には使いにくい。"for ＋ 期間"と一緒なら現在完了（継続）が正解になることが多い。',
    memoryTip:
      '現在完了のキーワード：for/since ＝ 継続、already/yet ＝ 完了、ever/never ＝ 経験。"for ten years"→ have + 過去分詞！',
  },
  {
    id: 'koko_oyo_eigo_32',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な語句を選びなさい。（不定詞の形容詞的用法）\n\nI need something (　　) at the party tonight.\n\n① wearing  ② to wear  ③ to be worn  ④ worn',
    answer: '② to wear',
    hint: '「パーティーで着るものが必要」→ something を修飾する不定詞の形容詞的用法。',
    explanation:
      '【解法のコツ】\n不定詞の形容詞的用法：名詞 ＋ to ＋ 動詞の原形（「～するための名詞」「～すべき名詞」）\n"something to wear" ＝「着るためのもの」\n\n"I need something to wear at the party."\n① "wearing" → 分詞の形容詞用法（「着ている状態のもの」→ 文脈に合わない）\n③ "to be worn" → 受動態の不定詞（「着られるもの」→ 意味は通るが不自然）\n④ "worn" → 過去分詞（「すり減った・着古した」→ 意味が変わる）\n英語は必ずできるようになる！something/anything/nothing の後は to ＋ 動詞原形！',
    pitfall:
      'something/anything/nothing のように -thing で終わる語の場合、形容詞は後置される（something cold / something to drink）。語順に注意！',
    memoryTip:
      '「名詞 ＋ to ＋ 動詞原形」＝形容詞的用法。「～するための名詞」と訳す。"something to eat"（食べるもの）"time to study"（勉強する時間）で覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_33',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な語句を選びなさい。（付加疑問文）\n\nYou have finished your homework, (　　)?\n\n① have you  ② haven\'t you  ③ don\'t you  ④ didn\'t you',
    answer: "② haven't you",
    hint: '肯定文の付加疑問文は否定の疑問になる。動詞の形も確認しよう。',
    explanation:
      '【解法のコツ】\n付加疑問文のルール：\n①肯定文 → 否定の付加疑問（,haven\'t you? / ,don\'t you? など）\n②否定文 → 肯定の付加疑問（,have you? / ,do you? など）\n③使う助動詞は主文と同じ（主文がhave → haven\'t）\n\n"You have finished your homework, haven\'t you?"\n主文が現在完了（have finished）なので、付加疑問は have の否定形 → "haven\'t you"\n英語は必ずできるようになる！付加疑問は「肯定→否定、否定→肯定」の逆転法則！',
    pitfall:
      '付加疑問文の動詞は主文の動詞と必ず一致させる。主文が "have finished"（現在完了）なので "haven\'t"、"don\'t" ではない。',
    memoryTip:
      '付加疑問文の公式：①肯定文+ちょっと待って？→ 否定の付加 ②否定文+本当に？→ 肯定の付加。「逆ループ」で覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_34',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な語句を選びなさい。（使役動詞）\n\nMy mother made me (　　) my room before dinner.\n\n① clean  ② to clean  ③ cleaning  ④ cleaned',
    answer: '① clean',
    hint: '使役動詞 make の後ろの形に注意。',
    explanation:
      '【何を聞かれているか】\n使役動詞"make"を使った文の空欄に入る、正しい動詞の形を選ぶ文法問題。\n\n【なぜ原形（toなし）を使うのか】\n使役動詞make/let/haveは、「目的語に〜させる」という意味を作るとき、後ろの動詞をtoのつかない原形（原形不定詞）にするという決まりがある動詞のグループ。\n\n【ポイント1】使役動詞の後ろの形を確認する\nmake/let/have＋目的語＋動詞の原形（toなし）。get＋目的語＋to＋動詞の原形（toあり）とは形が違うので区別する。\n\n【ポイント2】文の意味を確認する\n"My mother made me clean my room before dinner."＝「母は夕食前に私に部屋をきれいにさせた」。madeの後ろの目的語meに対する動作がclean（原形）。\n\n【ポイント3】他の選択肢を消去する\n②"to clean"はgetの後ろでは使うがmakeの後ろでは使わない。③"cleaning"は進行形の形でmakeの後ろでは使わない。④"cleaned"は過去分詞で受動的な意味になり文意に合わない。\n\n【答え】\n① clean\n\n【確かめ】\nmadeとcleanの間にtoが入っていないこと、また"made me clean"（私に掃除させた）という使役の意味が成り立つことを確認する。\n\n【よくあるまちがい】\n他の一般動詞の感覚で"to clean"にしてしまうミス。make/let/haveの3つの使役動詞は例外的にtoをつけない原形を使う。\n\n【ここが絶対】\n使役動詞make/let/haveの後ろは「目的語＋動詞の原形（toなし）」。この3つの動詞はセットで覚えておく。',
    pitfall:
      'make は強制的に「させる」、let は許可して「させる」、have は当然として「させる」。ニュアンスの違いも覚えておこう。',
    memoryTip:
      '使役動詞 make/let/have + O + 動詞の原形（toなし）。「メイクしてレットして、とはなし（to なし）」と語呂合わせで覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_35',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の下線部の用法として正しいものを選びなさい。\n\n"Knowing the result, he smiled."\n\n① 現在分詞の形容詞的用法\n② 動名詞\n③ 分詞構文（理由・原因）\n④ 現在進行形',
    answer: '③ 分詞構文（理由・原因）',
    hint: '文頭に「分詞（-ing形）＋目的語、主文」という構造になっている。',
    explanation:
      '【解法のコツ】\n分詞構文の見分け方：文頭または文末に「動詞の-ing形＋（語句）、主文」の形がある場合、分詞構文。\n"Knowing the result, he smiled."\n＝「結果を知っていたので、彼は微笑んだ」\n元の文：Because he knew the result, he smiled.\n\n① 形容詞的用法 → 名詞の直後に来て名詞を修飾（例：the boy running）\n② 動名詞 → 名詞として機能（例：Knowing is important.）\n④ 現在進行形 → be動詞＋ing（例：He is knowing... → knowは進行形不可）\n英語は必ずできるようになる！文頭の-ing形コンマ主文パターン ＝ 分詞構文！',
    pitfall:
      '動名詞と分詞構文はどちらも -ing 形だが、文中での役割が違う。文頭に来て主文全体に意味を加えているなら分詞構文。',
    memoryTip:
      '分詞構文の識別：文頭に "-ing, S V" のパターンが来たら分詞構文。「理由・時・条件・譲歩」の意味を文脈から読み取ろう！',
  },

  // ============================================================
  // 英作文・整序 10問
  // ============================================================
  {
    id: 'koko_oyo_eigo_36',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の日本語を英語に直しなさい。\n\n「私には弾くことのできるピアノがありません。」\n\n（ヒント：使うべき構文は「不定詞の形容詞的用法」）',
    answer: "I have no piano to play. / I don't have a piano to play.",
    hint: '「弾くことのできるピアノ」= "piano to play" と不定詞で表現しよう。',
    explanation:
      '【解法のコツ】\n「（名詞）する（名詞）」は「名詞 ＋ to ＋ 動詞原形」の形容詞的用法で表す。\n"a piano to play"（弾くためのピアノ）\n否定：I have no piano to play. / I don\'t have a piano to play.\n\n"play" の後に "on" を付けると "a piano to play on" とより自然になることもある（ピアノは "play the piano" なので on は必須ではない）。\n英語は必ずできるようになる！「する名詞がない」は「have no 名詞 to 動詞原形」で表せる！',
    pitfall:
      'I have no piano to play on. という形もあり。楽器の場合 "play the piano" が一般的だが、不定詞の形容詞的用法の文では "to play" だけでも正解。',
    memoryTip:
      '"名詞 to 動詞原形" ＝ 「～するための/すべき名詞」。"time to study"（勉強する時間）、"piano to play"（弾くピアノ）で例文暗記！',
  },
  {
    id: 'koko_oyo_eigo_37',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の語句を並べ替えて、正しい英文を作りなさい。（１語不要）\n\n[ tell / you / could / can / me / where / she / lives ]?\n\nCould you _____ _____ _____ _____ ?',
    answer: 'Could you tell me where she lives?',
    hint: '間接疑問文の語順は「疑問詞＋主語＋動詞」。',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、間接疑問文を含む正しい英文を作る問題（１語不要）。\n\n【なぜ間接疑問文の語順にするのか】\n疑問文が別の文の中に組み込まれる（間接疑問文になる）とき、疑問詞の後ろは「疑問文の語順」ではなく「普通の文の語順（主語＋動詞）」になる、という英語のルールがある。\n\n【ポイント1】間接疑問文の語順を確認する\n疑問詞（where）＋主語（she）＋動詞（lives）の順になる。ふつうの疑問文"Where does she live?"のdoesは消え、動詞にsがついたlivesになる。\n\n【ポイント2】外側の文の形を確認する\n"Could you tell me 〜?"（〜を教えてもらえますか）という依頼の文の中に、where she livesという間接疑問文を組み込む形。\n\n【ポイント3】不要な語を見つける\n語群には"could"と"can"の2つの助動詞が入っているが、文頭にすでに"Could you"があるため、"can"は使わない不要な語。\n\n【答え】\nCould you tell me where she lives?\n\n【確かめ】\nwhere以下が"where does she live"ではなく"where she lives"という普通の文の語順になっているか、また"can"が使われずに余っているかを確認する。\n\n【よくあるまちがい】\n間接疑問文の中まで疑問文の語順（where does she live）にしてしまうミス。tell me以下に組み込まれた瞬間に、疑問文の語順から普通の文の語順に変わる。\n\n【ここが絶対】\n間接疑問文は「疑問詞＋主語＋動詞」という普通の文の語順にする。does/doなどの助動詞は消えて、動詞がその分の形（3人称単数ならs）に変わる。',
    pitfall:
      '間接疑問文の中は疑問文の語順にしない！"where does she live" → "where she lives" に変換。助動詞 does は不要になる。',
    memoryTip:
      '間接疑問文：「疑問詞＋S＋V（普通の語順）」。tell me where she lives ＝ 疑問文の does が消えて lives になる！',
  },
  {
    id: 'koko_oyo_eigo_38',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の日本語を英語に直しなさい。\n\n「もし私があなたなら、その申し出を受け入れるのに。」\n\n（仮定法過去を使いなさい）',
    answer: 'If I were you, I would accept the offer.',
    hint: '仮定法過去の公式：If + 主語 + were/動詞の過去形 ～, 主語 + would ＋ 動詞の原形。',
    explanation:
      '【何を聞かれているか】\n「もし私があなたなら、その申し出を受け入れるのに。」という日本語を、仮定法過去を使って英語にする問題。\n\n【なぜwereを使うのか】\n仮定法では、主語が"I"であっても特別に"was"ではなく"were"を使うという伝統的なルールがある（口語ではwasも使われるが、試験ではwereが基本）。\n\n【ポイント1】仮定法過去の公式にあてはめる\nIf＋主語＋動詞の過去形〜, 主語＋would＋動詞の原形〜。"If I were you"（もし私があなたなら）がこの型にぴったり当てはまる。\n\n【ポイント2】"accept the offer"という表現を使う\n「申し出を受け入れる」は"accept the offer"という頻出のセット表現。\n\n【ポイント3】文をつなげる\n"If I were you, I would accept the offer."という形にまとめる。\n\n【答え】\nIf I were you, I would accept the offer.\n\n【確かめ】\n"was"ではなく"were"になっていること、またIf節（過去形）と主節（would+原形）の組み合わせが仮定法過去の公式通りになっていることを確認する。\n\n【よくあるまちがい】\n"If I was you"のように、"I"にあわせて"was"を使ってしまうミス。仮定法のIf節では、主語が単数でも"were"を使うのが原則。\n\n【ここが絶対】\n"If I were you, I would 〜"（もし私があなたなら〜するのに）はアドバイスをするときの超頻出フレーズ。丸ごとセットで覚えておく。',
    pitfall:
      '仮定法で "I was" ではなく "I were" を使う。Were は仮定法の特徴的な形。"If I was you" は口語では聞くが、試験では were を使おう。',
    memoryTip:
      '"If I were you, I would..." ＝「もし私があなたなら～するのに」。アドバイスをするときの定番フレーズとして覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_39',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の語句を並べ替えて、正しい英文を作りなさい。（１語不要）\n\n[ the / book / written / by / was / wrote / him ]\n\nThe _____ _____ _____ _____ .',
    answer: 'The book was written by him.',
    hint: '受動態の文にしよう。by の後ろには動作主が来る。',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、受動態を使った正しい英文を作る問題（１語不要）。\n\n【なぜ受動態にするのか】\n日本語の「その本は彼によって書かれた」は、本（the book）が「書く」という動作をされる側になっているので、英語では受動態（be動詞＋過去分詞）で表す。\n\n【ポイント1】受動態の公式を確認する\n主語＋be動詞＋過去分詞＋by＋動作主。"The book was written by him."という形になる。\n\n【ポイント2】writeの活用を確認する\nwrite（原形）→wrote（過去形）→written（過去分詞）という不規則変化。受動態で使うのは過去分詞のwritten。\n\n【ポイント3】不要な語を見つける\n語群には過去形の"wrote"と過去分詞の"written"の両方が入っているが、受動態で使うのは過去分詞のwrittenだけなので、"wrote"が不要な語。\n\n【答え】\nThe book was written by him.\n\n【確かめ】\n"was written"という「be動詞＋過去分詞」のセットになっていること、また"wrote"が使われずに余っていることを確認する。\n\n【よくあるまちがい】\n過去形のwroteと過去分詞のwrittenを混同し、"was wrote"のように誤って組み合わせてしまうミス。受動態には必ず過去分詞を使う。\n\n【ここが絶対】\nwrite→wrote→writtenの活用をセットで覚え、受動態には必ず過去分詞（written）を使うことを徹底する。',
    pitfall:
      'write の活用：write → wrote（過去形）→ written（過去分詞）。受動態では過去分詞 written を使い、過去形 wrote は不要。',
    memoryTip:
      'write → wrote → written（不規則動詞の三基本形）。受動態では必ず過去分詞！"was written by" で丸暗記しよう！',
  },
  {
    id: 'koko_oyo_eigo_40',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の日本語を英語に直しなさい。\n\n「私に何か冷たい飲み物を持ってきてくれませんか？」\n\n（Could you ～ で始めること）',
    answer: 'Could you bring me something cold to drink?',
    hint: '「何か冷たい飲み物」＝ something cold to drink',
    explanation:
      '【解法のコツ】\n"something cold to drink"の作り方：\n① something（何か）\n② cold（冷たい）→ something の後に形容詞を置く（後置修飾）\n③ to drink（飲むための）→ 不定詞の形容詞的用法\n"Could you bring me something cold to drink?"\n＝「私に何か冷たい飲み物を持ってきてもらえませんか？」\n英語は必ずできるようになる！something/anything ＋ 形容詞 ＋ to 動詞原形 の語順は頻出！',
    pitfall:
      'something の後の形容詞は後置修飾（後ろに置く）。"cold something" は✗、"something cold" が正しい語順。',
    memoryTip:
      '-thing 系の語（something / anything / nothing）の修飾語順：something ＋ 形容詞 ＋ to 動詞原形。「ものコールドのむ」と語順で覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_41',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の語句を並べ替えて、正しい英文を作りなさい。（１語不要）\n\n[ is / the / tallest / most tall / building / in / this / city ]\n\nThis is _____ _____ _____ _____ _____ .',
    answer: 'This is the tallest building in the city.',
    hint: '最上級の形容詞の作り方：短い語は -est、長い語は most。tall はどちら？',
    explanation:
      '【解法のコツ】\n最上級の作り方：\n・短い語（1〜2音節）→ -est（tall → tallest）\n・長い語（3音節以上）→ most ＋ 形容詞（beautiful → most beautiful）\n\ntall は1音節なので "tallest" が正解。"most tall" は誤りで不要語。\n"This is the tallest building in the city."\n最上級には必ず "the" をつける！\n英語は必ずできるようになる！最上級は「the ＋ 形容詞-est ＋ 名詞 ＋ in/of」が基本形！',
    pitfall:
      'most tall は絶対に使わない！tall の最上級は tallest（-est 形）のみ。most は3音節以上の長い語に使う。',
    memoryTip:
      '最上級の公式：the + 短い語 + est / the most + 長い語。tall→tallest、beautiful→most beautiful。音節数で判断！',
  },
  {
    id: 'koko_oyo_eigo_42',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の日本語を英語に直しなさい。\n\n「彼女が言ったことが理解できませんでした。」\n\n（what を使って表現すること）',
    answer: "I couldn't understand what she said.",
    hint: '「彼女が言ったこと」＝ what she said（関係詞 what ＝ the thing that）',
    explanation:
      '【何を聞かれているか】\n「彼女が言ったことが理解できませんでした。」という日本語を、関係詞"what"を使って英語にする問題。\n\n【なぜwhatを使うのか】\n"what"は"the thing(s) that"（〜すること・もの）と同じ意味を表す関係代名詞で、先行詞を含んだまま「〜すること」という名詞のかたまり（名詞節）を作れる。\n\n【ポイント1】"what she said"の意味を確認する\n"what she said"＝「彼女が言ったこと」。"the thing that she said"と同じ意味になる。\n\n【ポイント2】語順を確認する\nwhatの後ろは疑問文の語順ではなく、"what＋主語＋動詞"という普通の文の語順（she said）になる。\n\n【ポイント3】文全体を組み立てる\n"I couldn\'t understand what she said."＝「私は彼女が言ったことを理解できなかった」。couldn\'tはcould notの短縮形で、過去の否定を表す。\n\n【答え】\nI couldn\'t understand what she said.\n\n【確かめ】\n"what she said"の部分が"what did she say"のような疑問文の語順になっていないこと、また文全体が「彼女が言ったことが理解できなかった」という意味になっていることを確認する。\n\n【よくあるまちがい】\n"what did she say"のように疑問文の語順のまま名詞節として使ってしまうミス。名詞節のwhatは間接疑問文と同じく「what+主語+動詞」の語順にする。\n\n【ここが絶対】\n関係詞whatは"the thing(s) that"と同じ意味。"what she said"（彼女が言ったこと）は英作文で非常によく使われるパターンとして覚えておく。',
    pitfall:
      '"what did she say" は疑問文の語順。名詞節として使うときは "what she said" の普通の語順にする。what = the thing that の置き換えで確認しよう。',
    memoryTip:
      '関係詞 what ＝ the thing(s) that。"what she said"＝"the thing that she said"。名詞節を作る what は間接疑問と同じ語順！',
  },
  {
    id: 'koko_oyo_eigo_43',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の語句を並べ替えて、正しい英文を作りなさい。（１語不要）\n\n[ nice / how / she / is / what / sings ]\n\n_____ _____ she sings!',
    answer: 'How nicely she sings!',
    hint: '感嘆文のパターンを思い出そう。副詞を使うには How を使う。',
    explanation:
      '【解法のコツ】\n感嘆文のパターン：\n・What ＋ （a/an）＋ 形容詞 ＋ 名詞 ＋ S ＋ V !（名詞を強調）\n・How ＋ 形容詞/副詞 ＋ S ＋ V !（形容詞・副詞を強調）\n\n"she sings"（動詞）を強調するには副詞が必要 → nice（形容詞）→ nicely（副詞）\n"How nicely she sings!"\n不要語：what、nice（nicelyに変換するため）\n英語は必ずできるようになる！感嘆文は How ＋ 副詞 / What ＋ 名詞 の2パターンを覚えよう！',
    pitfall:
      '"nice" のまま使うと "How nice she sings" は不自然（nice は形容詞で副詞的に動詞を修飾できない）。副詞 "nicely" に変換が必要。',
    memoryTip:
      '感嘆文の公式：How + 形容詞/副詞 + S + V! / What (a/an) + 形容詞 + 名詞 + S + V!。How beautiful she is! / What a beautiful girl she is! で覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_44',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の日本語を英語に直しなさい。\n\n「私は彼が来ることを望んでいます。」\n\n（I hope ～ または I want ～ を使って表現すること）',
    answer: 'I hope he will come. / I want him to come.',
    hint: 'hope は "that節"、want は "O + to 不定詞" の構文を使う。',
    explanation:
      '【何を聞かれているか】\n「私は彼が来ることを望んでいます。」という日本語を、"I hope～"または"I want～"を使って英語にする問題。\n\n【なぜ2つの構文を使い分けるのか】\nhopeとwantは同じ「望む」という意味でも、後ろに続く形が違う。hopeは「そうなってほしい」という願望をthat節で表し、wantは「（自分の意志で）〜してほしい」という気持ちをO+to不定詞で表す、という文型上の決まりがある。\n\n【ポイント1】hope+that節\n"I hope (that) he will come."＝「彼が来ることを望む」。hopeの後ろは主語＋動詞のある文（that節）が続く。willは未来の出来事に対する願望を表す。\n\n【ポイント2】want+O+to不定詞\n"I want him to come."＝「彼に来てほしい」。wantの後ろは「人＋to＋動詞の原形」という形になる。\n\n【ポイント3】hopeの後ろにO+to不定詞は使えない\n"I hope him to come."という形は文法的に誤り。hopeはthat節のみを取り、want/ask/tellのようにO+to不定詞を取ることはできない。\n\n【答え】\nI hope he will come. / I want him to come.\n\n【確かめ】\nhopeを使った文はthat節（he will come）になっているか、wantを使った文はO+to不定詞（him to come）になっているかをそれぞれ確認する。\n\n【よくあるまちがい】\n"I hope him to come."のように、hopeの後ろにwantと同じ形を使ってしまうミス。hopeとwantで後ろに続く形が違うことを覚えておく。\n\n【ここが絶対】\nhope→that節（I hope that S will V）、want→O to V（I want O to V）。この違いをセットで覚える。',
    pitfall:
      'I hope him to come. は✗。hope の後は that節（that S V）のみ。want / ask / tell などは "O to 不定詞" を使える動詞。',
    memoryTip:
      'hope → that節（I hope that S will V）、want → O to V（I want O to V）。この違いを "hopeはthat、wantはO to"と語呂で覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_45',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の語句を並べ替えて、正しい英文を作りなさい。（１語不要）\n\n[ had / studied / would / have / passed / math ]\n\nIf I （　）（　） harder, I （　）（　）（　） the exam.',
    answer: 'If I had studied harder, I would have passed the exam.',
    hint: '仮定法過去完了：If + had + 過去分詞, would have + 過去分詞',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、仮定法過去完了を使った正しい英文を作る問題（１語不要）。\n\n【なぜ仮定法過去完了を使うのか】\n「もっと勉強していたら合格していたのに（実際はしなかった）」という、過去の事実に反する内容を表すときは、仮定法過去完了（If+had+過去分詞, would have+過去分詞）を使う。\n\n【ポイント1】仮定法過去完了の公式を確認する\nIf＋主語＋had＋過去分詞〜, 主語＋would have＋過去分詞〜。\n\n【ポイント2】if節を組み立てる\n「もし〜していたら」の部分は"If I had studied harder"（もしもっと一生懸命勉強していたら）。hadとstudiedを組み合わせる。\n\n【ポイント3】主節を組み立てる\n「合格していたのに」の部分は"I would have passed the exam"。would・have・passedの3語を組み合わせる。\n\n【答え】\nIf I had studied harder, I would have passed the exam.\n\n【確かめ】\nif節が"had+過去分詞"、主節が"would have+過去分詞"になっているかを確認し、"math"が使われずに余っていることを確認する。\n\n【よくあるまちがい】\nif節に"have studied"（hadを使わない形）を使ってしまうミス。仮定法過去完了のif節は必ず"had+過去分詞"にする。\n\n【ここが絶対】\n仮定法過去完了の合言葉は「If+had→would have」。ifのhadと主節のwould haveをセットで覚える。',
    pitfall:
      '仮定法過去完了のif節は "had + 過去分詞"（had studied）で、"have + 過去分詞"（have studied）ではない。had を必ず使う。',
    memoryTip:
      '仮定法過去完了の合言葉：「If + had → would have」。「ハッドとウッドハブはセット」で覚えよう！',
  },

  // ============================================================
  // 語彙・熟語応用 5問
  // ============================================================
  {
    id: 'koko_oyo_eigo_46',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の "run" が持つ意味として最も適切なものを選びなさい。\n\n"She runs a small café near the station."\n\n① 走る　② 経営する　③ 流れる　④ 立候補する',
    answer: '② 経営する',
    hint: 'run は多義語。「店・会社・組織」などを目的語にとるとき、どんな意味になるか考えよう。',
    explanation:
      '【解法のコツ】\nrun は「走る」という意味でよく知られているが、多義語として多くの意味を持つ重要な単語。\n・run a café / business / company ＝「カフェ/ビジネス/会社を経営する」\n・run for president ＝「大統領に立候補する」\n・run a river ＝「川が流れる」\n\n文脈：she runs a small café（彼女が小さなカフェを～）→「経営する」② が正解。\n英語は必ずできるようになる！多義語は目的語から意味を判断しよう！',
    pitfall:
      '目的語が "café" など場所・ビジネスを表す語なら "経営する" の意味。run は文脈によって全く違う意味になる代表的な多義語。',
    memoryTip:
      'run の主要な意味：①走る②経営する③（川が）流れる④立候補する。"run a business"（ビジネスを走らせる ＝ 経営する）のイメージで覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_47',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な熟語を選びなさい。\n\nI\'m not feeling well today. I think I\'ll (　　) school.\n\n① take a chance on\n② take part in\n③ take care of\n④ take a day off from',
    answer: '④ take a day off from',
    hint: '「今日は学校を（　）」という文脈。体調不良で学校を休む表現は？',
    explanation:
      '【何を聞かれているか】\n体調不良で学校を休むという文脈に合う、正しい熟語を選ぶ問題。\n\n【なぜtake a day offが正しいのか】\n文の前半で"I\'m not feeling well today."（今日は体調が良くない）と述べられているので、後半には「休む」という意味の熟語が続くのが自然な流れになる。\n\n【ポイント1】選択肢の意味を確認する\n①take a chance on「〜に賭ける・試してみる」、②take part in「〜に参加する」、③take care of「〜の世話をする」、④take a day off from「〜を1日休む」。\n\n【ポイント2】文脈と一致する熟語を選ぶ\n体調不良→学校を休む、という流れに合うのは④のみ。①②③はいずれも体調不良とは関係のない意味。\n\n【ポイント3】fromの役割を確認する\n"take a day off from school"のfromは「何を休むか」を示す。fromを省いても「休む」という意味は通じるが、fromがあることで対象が明確になる。\n\n【答え】\n④ take a day off from\n\n【確かめ】\n"I think I\'ll take a day off from school."を訳し、「学校を1日休もうと思う」という、体調不良の文脈に合う自然な意味になっているか確認する。\n\n【よくあるまちがい】\n"take off"（離陸する・脱ぐ）という意味と混同し、文脈に合わない意味で解釈してしまうミス。"take a day off"は「休暇を取る」という別の意味を持つ熟語。\n\n【ここが絶対】\n"take a day off (from)"＝1日休む、という体調不良の場面で使う定番の熟語として覚えておく。',
    pitfall:
      'take a day off from school の from を忘れないこと。take a day off だけでも「休む」の意味はあるが、from があることで「どこを休むか」を明示できる。',
    memoryTip:
      '"take a day off (from)"＝ 1日休む。"take off"＝ 離陸する・脱ぐ という意味もあるが、"take a day off" は「休暇を取る」。文脈に注意！',
  },
  {
    id: 'koko_oyo_eigo_48',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の "light" の意味として最も適切なものを選びなさい。\n\n"Could you give me a light? I want to check the map in the dark."\n\n① 光・明かり　② 軽い　③ 明るい色の　④ 点火する',
    answer: '① 光・明かり',
    hint: '"give me a light" という表現は何を指しているか、文脈を考えよう。',
    explanation:
      '【解法のコツ】\n"give me a light"（明かりを貸してください）は、「懐中電灯・スマホのライトなど」を貸してほしいという意味。"I want to check the map in the dark"（暗い中で地図を確認したい）という文脈からも確認できる。\n"light" の主な意味：\n① 名詞「光・明かり」→ ✓\n② 形容詞「軽い」\n③ 形容詞「明るい（色）」\n④ 動詞「点火する」\n英語は必ずできるようになる！多義語は品詞と文脈の両方から判断しよう！',
    pitfall:
      '"give me a light" は喫煙者が「ライターを貸して」という意味でも使われるが、ここでは "check the map in the dark" から「懐中電灯・明かり」と判断できる。',
    memoryTip:
      'light の品詞確認：名詞（光・灯り）、形容詞（軽い・明るい色の）、動詞（点火する）。"give me a light" ＝ 明かりを貸して、は日常英会話で頻出！',
  },
  {
    id: 'koko_oyo_eigo_49',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な語句を選びなさい。\n\nThe train was delayed, (　　) we missed the concert.\n\n① because  ② so  ③ although  ④ unless',
    answer: '② so',
    hint: '「電車が遅れた → コンサートに間に合わなかった」という因果関係を表す接続詞を選ぼう。',
    explanation:
      '【解法のコツ】\n接続詞の使い分け：\n① because「なぜなら」→ 後ろに原因が来る（The concert was delayed because of the train.）\n② so「だから」→ 前に原因、後ろに結果が来る → ✓\n③ although「～にもかかわらず」→ 逆接\n④ unless「～しない限り」→ 条件\n\n"The train was delayed, so we missed the concert."\n＝「電車が遅れた。だから私たちはコンサートに間に合わなかった」\n英語は必ずできるようになる！因果関係の接続詞は「原因 so 結果」「結果 because 原因」で覚えよう！',
    pitfall:
      'because と so は逆の向きを持つ。because は後ろに「原因」、so は後ろに「結果」が来る。この違いをしっかり覚えよう。',
    memoryTip:
      '"so"＝だから（前が原因、後ろが結果）、"because"＝なぜなら（後ろが原因）。「soは順向き、becauseは逆向き」と覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_50',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '次の文の空欄に入る最も適切な熟語を選びなさい。\n\nShe is very good (　　) playing the violin.\n\n① for  ② at  ③ in  ④ on',
    answer: '② at',
    hint: '"be good ＋ 前置詞 ＋ 動名詞" の組み合わせ。何の前置詞が使われる？',
    explanation:
      '【何を聞かれているか】\n「バイオリンを弾くのが得意だ」という文の空欄に入る、正しい前置詞を選ぶ問題。\n\n【なぜatを使うのか】\n"be good at 〜"は「〜が得意だ」という意味を表す決まった熟語で、技術やスキルについて述べるときにatを使うと決まっている。\n\n【ポイント1】"be good at"の形を確認する\nbe good at＋名詞または動名詞（-ing形）。"good at playing the violin"＝「バイオリンを弾くのが得意」。\n\n【ポイント2】他の前置詞との意味の違いを確認する\n"be good for"は「〜に良い（健康や用途について）」、"be good in"や"be good on"は一般的な熟語としては使われない。\n\n【ポイント3】反対の意味も一緒に覚える\n"be bad at 〜ing"＝「〜するのが苦手」。goodとbadをセットで覚えると使い分けやすい。\n\n【答え】\n② at\n\n【確かめ】\n"She is very good at playing the violin."を訳し、「彼女はバイオリンを弾くのがとても得意だ」という意味になっていることを確認する。\n\n【よくあるまちがい】\n"good for"（健康に良いなどの意味）と"good at"（技術が得意という意味）を混同してしまうミス。前置詞によって意味が大きく変わることに注意する。\n\n【ここが絶対】\n"be good at 〜ing"＝〜するのが得意、は超頻出の熟語。「得意・スキル→at」とセットで覚える。',
    pitfall:
      '"be good for" は「健康に良い（good for your health）」、"be good at" は「得意だ（技術・スキルに使う）」。文脈によって使い分けよう。',
    memoryTip:
      '"be good at ～ing" ＝ ～するのが得意。"be bad at ～ing" ＝ ～するのが苦手。"at" ＝ 技術・スキルの的を絞るイメージで覚えよう！',
  },
];
