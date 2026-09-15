// ───────────────────────────────────────────────────────────────
// 高校受験 英語（公式・まとめ）拡張分
// ───────────────────────────────────────────────────────────────
// 既存の formulas-eigo.ts は中1〜中3の文法を9節23項目で1周した内容だが、
// 他教科（理科90・数学82）にくらべて薄く、入試で差がつく分野が
// 足りていなかった。そこを厚くする。
//
// 追加するのは、配点が大きく差がつきやすい次の分野：
//   ・不定詞と動名詞の使い分け（目的語の形で意味が変わる動詞まで）
//   ・分詞と関係代名詞（目的格の省略・前置詞との組み合わせ）
//   ・比較の書きかえ（原級・比較級・最上級の言いかえ）
//   ・文型と語順（SVOO・SVOC・there構文）
//   ・書きかえ問題の型
//   ・長文読解の解き方
//   ・英作文（条件英作文・和文英訳）
//   ・リスニングで問われる型
//
// ⚠ 英文にはアポストロフィ（It's、don't、Let's）が入る。
//    TypeScript の単一引用符の文字列に入れると構文エラーになるので、
//    英文をふくむ文字列は必ず二重引用符で書くこと。
//    このファイルは全体を二重引用符でそろえてある。
//
// label は¥50買い切りの識別キーなので、既存の英語23項目と重ならないこと。
//
// data/formulas.ts で 英語: [...eigoFormulas, ...eigoKokoFormulas] と連結する。
// examType は付けない（未設定＝両方に出す）。中1〜中3の文法は
// 中学受験の英語選択にもそのまま役立つため、既存9節と同じあつかいにする。

import type { FormulaSection } from "./formulas-types";

export const eigoKokoFormulas: FormulaSection[] = [
  {
    title: "文型と語順の基本",
    studyPeriod: "中2",
    intro:
      "英語は語順で意味が決まります。動詞のあとに何が来るかで文型が決まり、それが分かると長文も英作文も速くなります。",
    items: [
      {
        label: "5つの文型と動詞の後ろの形",
        locked: true,
        formula:
          "SV ／ SVC（S＝C）／ SVO ／ SVOO（人＋物）／ SVOC（O＝C）",
        explanation:
          "動詞の後ろに何が来るかで文型が決まります。SVCは主語と補語がイコールの関係、SVOCは目的語と補語がイコールの関係になります。この2つを見分けるには、イコールで結べるのがどれかを確かめます。",
        steps: [
          "SV: He runs.（動詞だけで意味が完結する）",
          "SVC: He is a teacher.（He ＝ a teacher）",
          "SVO: I play tennis.（play の相手が tennis）",
          "SVOO: I gave him a book.（人＋物の順）",
          "SVOC: We call him Ken.（him ＝ Ken）",
          "SVCになる動詞: be, become, look, feel, sound, get",
        ],
        example: {
          q: "We call him Ken. の him と Ken の関係を答えなさい。",
          a: "him ＝ Ken（SVOCの目的格補語）",
        },
        quiz: [
          {
            q: "She looks happy. は何文型ですか。",
            a: "SVC",
            explanation:
              "SVC。She ＝ happy という関係が成り立つからである。look は「〜に見える」という意味で、後ろに主語の様子を説明する語（補語）をとる。このとき補語になるのは形容詞なので、She looks happily. とはしない。become, feel, sound, get も同じ仲間。",
          },
          {
            q: "I gave him a book. を to を使って書きかえなさい。",
            a: "I gave a book to him.",
            explanation:
              "I gave a book to him. SVOO（人 ＋ 物の順）は、SVO ＋ to / for（物 ＋ 人の順）に書きかえられる。to と for のどちらを使うかは動詞で決まっていて、相手がいないと成り立たない動作には to、相手がいなくてもできる動作には for を使うからである。give, show, teach, send は to、buy, make, cook は for。",
          },
          {
            q: "SVC と SVOC の見分け方を答えなさい。",
            a: "SVCは主語＝補語、SVOCは目的語＝補語",
            explanation:
              "SVCは主語＝補語、SVOCは目的語＝補語。イコールで結べるのがどちらかを見れば区別できるからである。He is a teacher. は He ＝ teacher なので SVC、We call him Ken. は him ＝ Ken なので SVOC。動詞の後ろにある語どうしの関係をたしかめるのがこつ。",
          },
        ],
        checkpoints: [
          "SVOO の書きかえは to 系と for 系がある",
          "look, feel, sound のあとは形容詞（副詞ではない）",
        ],
      },
      {
        label: "There構文と存在を表す言い方",
        locked: true,
        formula:
          "There is ＋ 単数 ／ There are ＋ 複数 ／ the や所有格がつく名詞には使わない",
        explanation:
          "There is/are は「〜がある・いる」を表します。be動詞は後ろの名詞に合わせます。特定のもの（the book, my bag）には使えず、その場合は The book is on the desk. のように書きます。",
        steps: [
          "There is ＋ 単数名詞 / There are ＋ 複数名詞",
          "過去は There was / There were",
          "疑問文は Is there 〜? / Are there 〜?",
          "答え方は Yes, there is. / No, there is not.",
          "the や my がつく名詞には There 構文を使わない",
        ],
        example: {
          q: "机の上に本が3冊あります。を英語にしなさい。",
          a: "There are three books on the desk.",
        },
        quiz: [
          {
            q: "There is my bag on the table. は正しいですか。",
            a: "正しくない（My bag is on the table. とする）",
            explanation:
              "正しくない（My bag is on the table. とする）。There 構文は「〜があります」と、相手がまだ知らないものの存在を新しく知らせる言い方だからである。my や the がついたものは、すでに相手も分かっているものなので、この構文とはかみ合わない。特定のものは、ふつうに主語にして be動詞の文にする。",
          },
          {
            q: "Are there any students in the room? に No で答えなさい。",
            a: "No, there are not.（No, there aren't.）",
            explanation:
              "No, there are not.（短縮した形でもよい）。There 構文でたずねられたら、答えるときも there を使う決まりだからである。主語を they にして No, they are not. とすると、その they が何を指すのか分からなくなってしまう。聞かれた形をそのまま使って答える、と考えるとよい。",
          },
          {
            q: "There ＿ a lot of water in the glass. に入る be動詞は何ですか。",
            a: "is",
            explanation:
              "water は数えられない名詞なので単数あつかいです。a lot of につられて are としないようにします。",
          },
        ],
        checkpoints: [
          "the や my がつくものには There 構文を使わない",
          "数えられない名詞は単数あつかい",
        ],
      },
      {
        label: "名詞の数と冠詞の使い分け",
        locked: true,
        formula:
          "数えられる名詞は a/an か複数形 ／ 数えられない名詞は a をつけず複数形にもしない",
        explanation:
          "名詞は、数えられる可算名詞と、数えられない不可算名詞に分かれます。可算名詞は a をつけたり複数形にしたりできます（a book / two books）。不可算名詞は water, money, information, homework, advice のように、形の決まっていないものや目に見えないものが多く、a をつけず複数形にもしません。量を表すときは a glass of water, two pieces of paper のように入れ物や単位を借ります。a は初めて出てくるもの、the は話し手と聞き手の両方が分かっているものにつけます。",
        steps: [
          "数えられない名詞: water, milk, money, time, information, homework, advice, news",
          "量を表すには単位をつける: a glass of water, two pieces of paper",
          "many ＋ 数えられる名詞 / much ＋ 数えられない名詞",
          "a: 初めて話題に出るもの / the: すでに出たもの・1つしかないもの",
          "the sun, the moon, the earth は1つしかないので the",
        ],
        example: {
          q: "many と much の使い分けを答えなさい。",
          a: "many は数えられる名詞、much は数えられない名詞につく",
        },
        quiz: [
          {
            q: "I have many homeworks today. の誤りを直しなさい。",
            a: "I have a lot of homework today.",
            explanation:
              "homework は数えられない名詞なので複数形にできず、many もつきません。a lot of は両方に使えます。",
          },
          {
            q: "a と the の使い分けを一言で答えなさい。",
            a: "a は初めて出るもの、the はすでに分かっているもの",
            explanation:
              "a は初めて出るもの、the はすでに分かっているもの。a は「たくさんある中の1つ」を表すのに対し、the は「どれのことか相手も分かっている」ことを示すからである。I saw a dog. The dog was very big. のように、1回目は a、2回目からは the になる。話し手と聞き手の間で特定できているかどうかが分かれ目。",
          },
          {
            q: "「コップ1杯の水」を英語で書きなさい。",
            a: "a glass of water",
            explanation:
              "a glass of water。water は数えられない名詞なので、a water や two waters とは言えないからである。そこで、入れ物や単位を使って量を表す。紙なら a piece of paper、パンなら a loaf of bread、コーヒーなら a cup of coffee。2杯なら two glasses of water と、数えるのは入れ物のほうになる。",
          },
        ],
        checkpoints: [
          "homework, information, advice は数えられない",
          "a lot of は数えられる名詞にも数えられない名詞にも使える",
        ],
      },
      {
        label: "代名詞の格と再帰代名詞",
        locked: true,
        formula: "主格 ／ 所有格 ／ 目的格 ／ 所有代名詞 ／ 再帰代名詞",
        explanation:
          "I - my - me - mine - myself のように5つの形があります。前置詞のあとは目的格になるので、with I ではなく with me です。所有代名詞は「所有格＋名詞」を1語で表したもので、後ろに名詞は置きません。",
        steps: [
          "I - my - me - mine - myself",
          "you - your - you - yours - yourself",
          "he - his - him - his - himself",
          "she - her - her - hers - herself",
          "they - their - them - theirs - themselves",
          "前置詞のあとは目的格（for me, with him）",
        ],
        example: {
          q: "This book is mine. の mine は何を表していますか。",
          a: "my book（所有格＋名詞を1語で表したもの）",
        },
        quiz: [
          {
            q: "Between you and ＿, I like it. に入る語は何ですか。",
            a: "me",
            explanation:
              "between は前置詞なので、後ろは目的格になります。and につられて I としないようにします。",
          },
          {
            q: "She made the cake ＿.（彼女が自分で作った）に入る語は何ですか。",
            a: "herself",
            explanation:
              "再帰代名詞を強調に使う形です。by herself なら「ひとりで」という意味になります。",
          },
          {
            q: "This is mine book. の誤りを直しなさい。",
            a: "This is my book.（または This book is mine.）",
            explanation:
              "This is my book.（または This book is mine.）。mine は「私のもの」という意味を1語で表す所有代名詞なので、後ろに名詞を置くと「私のもの本」となって重なってしまうからである。名詞をつけるなら所有格の my を使う。my book ＝ mine と、同じ内容を2通りで言い表せる。",
          },
        ],
        checkpoints: [
          "前置詞のあとは目的格",
          "所有代名詞の後ろに名詞は置かない",
        ],
      },
    ],
  },

  {
    title: "不定詞と動名詞を深める",
    studyPeriod: "中3前半",
    intro:
      "動詞の後ろに不定詞が来るか動名詞が来るかは、動詞ごとに決まっています。意味が変わる動詞は入試の定番です。",
    items: [
      {
        label: "目的語の形が決まっている動詞",
        locked: true,
        formula:
          "不定詞のみ: want, hope, decide, promise ／ 動名詞のみ: enjoy, finish, stop, give up",
        explanation:
          "動詞ごとに後ろの形が決まっています。不定詞をとる動詞はこれから先のことを、動名詞をとる動詞はすでに起きたことや今していることを表す傾向があります。like, begin, start はどちらもとれます。",
        steps: [
          "不定詞のみ: want, hope, wish, decide, promise, expect, plan",
          "動名詞のみ: enjoy, finish, stop, give up, mind, practice",
          "どちらも可: like, love, begin, start, continue",
          "不定詞は これから のこと、動名詞は すでに のこと、と考えると覚えやすい",
        ],
        example: {
          q: "I enjoyed to play tennis. の誤りを直しなさい。",
          a: "I enjoyed playing tennis.（enjoy は動名詞のみ）",
        },
        quiz: [
          {
            q: "We finished ＿ (clean) the room. を正しい形にしなさい。",
            a: "cleaning",
            explanation:
              "cleaning。finish は動名詞（ing形）だけをとる動詞だからである。finish は「すでに始めていたことを終える」という意味なので、これから先のことを表す to 不定詞とはかみ合わない。enjoy, stop, finish は ing形だけ、と3つまとめて覚えるとよい。",
          },
          {
            q: "He decided ＿ (go) abroad. を正しい形にしなさい。",
            a: "to go",
            explanation:
              "to go。decide は不定詞だけをとる動詞だからである。「決める」のはこれからすることについてなので、未来を向いている to 不定詞とかみ合う。want, hope, decide, plan も同じ仲間。動詞の意味が過去向きか未来向きかで、ing形か to 不定詞かが決まる、と考えると覚えやすい。",
          },
          {
            q: "不定詞をとる動詞と動名詞をとる動詞の傾向を答えなさい。",
            a: "不定詞はこれから先のこと、動名詞はすでに起きたことや今していること",
            explanation:
              "want to go（これから行きたい）、enjoy playing（今していて楽しい）と考えると整理できます。",
          },
        ],
        checkpoints: [
          "enjoy, finish, stop は動名詞のみ",
          "want, hope, decide は不定詞のみ",
        ],
      },
      {
        label: "stop と remember の意味の変化",
        locked: true,
        formula:
          "stop ＋ ing は「〜するのをやめる」／ stop ＋ to 不定詞は「〜するために立ち止まる」",
        explanation:
          "同じ動詞でも、後ろが動名詞か不定詞かで意味が変わるものがあります。stop smoking はタバコをやめる、stop to smoke はタバコを吸うために立ち止まる、です。remember to do はこれからすることを覚えている、remember doing は過去にしたことを覚えている、です。",
        steps: [
          "stop ＋ ing: 〜するのをやめる",
          "stop ＋ to 不定詞: 〜するために立ち止まる（不定詞は目的を表す副詞用法）",
          "remember ＋ to 不定詞: （これから）〜するのを覚えている",
          "remember ＋ ing: （過去に）〜したのを覚えている",
          "forget も同じ使い分け",
          "try ＋ to 不定詞: 〜しようとする / try ＋ ing: ためしに〜してみる",
        ],
        example: {
          q: "He stopped to talk with her. の意味を答えなさい。",
          a: "彼は彼女と話すために立ち止まった",
        },
        quiz: [
          {
            q: "Remember to lock the door. の意味を答えなさい。",
            a: "忘れずにドアにかぎをかけなさい（これからすること）",
            explanation:
              "忘れずにドアにかぎをかけなさい（これからすること）。to 不定詞はこれからすることを表すので、remember to do は「これからするのを覚えておく」という意味になるからである。いっぽう remember doing なら「かぎをかけたのを覚えている」と、すでにしたことの話になる。to は未来向き、ing は過去向きと覚える。",
          },
          {
            q: "She stopped talking. と She stopped to talk. の意味のちがいを答えなさい。",
            a: "前者は話すのをやめた、後者は話すために立ち止まった",
            explanation:
              "stop の後ろの to 不定詞は目的語ではなく、目的を表す副詞用法です。だから意味が変わります。",
          },
          {
            q: "forget to do と forget doing のちがいを答えなさい。",
            a: "to do はこれからするのを忘れる、doing は過去にしたのを忘れる",
            explanation:
              "to do はこれからするのを忘れる、doing は過去にしたのを忘れる。to 不定詞が未来を向き、動名詞がすでにしたことを表すという性質のちがいから生まれる区別だからである。I forgot to call him.（電話するのを忘れた）と I forgot calling him.（電話したことを忘れていた）。remember と同じ使い分けなので、セットで覚える。",
          },
        ],
        checkpoints: [
          "to 不定詞は これから、ing は すでに",
          "stop to do の to は目的語ではなく目的を表す",
        ],
      },
      {
        label: "疑問詞＋不定詞",
        locked: true,
        formula:
          "how to ＝ 〜のしかた ／ what to ＝ 何を〜すべきか ／ where to ＝ どこへ〜すべきか",
        explanation:
          "疑問詞と不定詞を組み合わせると、1つのまとまり（名詞のはたらき）になります。tell me how to use it のように、動詞の目的語になります。間接疑問文への書きかえも問われます。",
        steps: [
          "how to do: 〜のしかた、どうやって〜するか",
          "what to do: 何を〜すべきか",
          "where to go: どこへ行くべきか",
          "when to start: いつ始めるべきか",
          "which to choose: どちらを選ぶべきか",
          "間接疑問文に書きかえられる（how to do it → how I should do it）",
        ],
        example: {
          q: "I do not know what to do. を間接疑問文に書きかえなさい。",
          a: "I do not know what I should do.",
        },
        quiz: [
          {
            q: "Please tell me ＿ ＿ get to the station.（駅への行き方）を完成させなさい。",
            a: "how to",
            explanation:
              "how to。how to ＋ 動詞の原形 で「〜のしかた」を表すからである。疑問詞に to 不定詞をつけると、「何を〜すべきか」「いつ〜すべきか」といった意味のまとまりになる。what to do（何をすべきか）、where to go（どこへ行くべきか）、when to start（いつ始めるべきか）も同じ形。",
          },
          {
            q: "疑問詞＋不定詞は、文の中でどんなはたらきをしますか。",
            a: "名詞のはたらき（動詞の目的語などになる）",
            explanation:
              "名詞のはたらき（動詞の目的語などになる）。ひとまとまりで「〜のしかた」「何をすべきか」という中身を表すので、名詞と同じように扱えるからである。I know how to swim. では know の目的語、How to use it is difficult. なら主語になる。名詞のかたまりだと分かれば、文のどこに置けるかが決まる。",
          },
          {
            q: "why to do という形はありますか。",
            a: "ない",
            explanation:
              "why だけは不定詞と組み合わせません。理由を言うときは why 節を使います。",
          },
        ],
        checkpoints: [
          "why to という形はない",
          "間接疑問文に書きかえられる",
        ],
      },
      {
        label: "make・let・help と原形不定詞",
        locked: true,
        formula: "make ／ let ／ have ＋ 人 ＋ 動詞の原形（to をつけない）",
        explanation:
          "使役動詞 make, let, have の後ろは、to のつかない原形になります。help は help him to study も help him study も使えます。see, hear, feel などの知覚動詞も原形をとります。to を入れてしまうのがよくある誤りです。",
        steps: [
          "make ＋ 人 ＋ 原形: （強制的に）〜させる",
          "let ＋ 人 ＋ 原形: （許して）〜させる",
          "have ＋ 人 ＋ 原形: （頼んで）〜してもらう",
          "help ＋ 人 ＋ 原形 / to 不定詞: どちらも可",
          "知覚動詞 see, hear, feel ＋ 人 ＋ 原形",
          "ただし受動態にすると to が復活する（was made to go）",
        ],
        example: {
          q: "My mother made me clean my room. の意味を答えなさい。",
          a: "母は私に部屋をそうじさせた",
        },
        quiz: [
          {
            q: "Let me to know. の誤りを直しなさい。",
            a: "Let me know.",
            explanation:
              "Let me know. let の後ろは to のつかない原形（原形不定詞）を使う決まりだからである。make, let, have の3つは同じ形をとり、使役動詞と呼ばれる。help は to があってもなくてもよい。to をつけるかどうかは動詞ごとに決まっているので、この3つは特別あつかいで覚える。",
          },
          {
            q: "I saw him ＿ (cross) the street. を正しい形にしなさい。",
            a: "cross（または crossing）",
            explanation:
              "cross（または crossing）。see, hear, feel などの知覚動詞は、後ろに to のつかない原形をとるからである。原形なら「渡りきるところまで見た」、crossing なら「渡っている途中を見た」と、動作のどこを見たのかがちがってくる。どちらも正しいが、意味に差が出る点をおさえる。",
          },
          {
            q: "He was made ＿ (go) there. を正しい形にしなさい。",
            a: "to go",
            explanation:
              "to go。能動態では make him go と原形を使うが、受動態にすると to が復活して be made to do の形になるからである。原形のままだと、動詞が2つ並んで見えて文の切れ目が分からなくなるため、to を置いて区切っていると考えるとよい。make の受動態でよく問われるところ。",
          },
        ],
        checkpoints: [
          "make, let, have の後ろは to をつけない",
          "受動態にすると to が復活する",
        ],
      },
    ],
  },

  {
    title: "分詞・関係代名詞を深める",
    studyPeriod: "中3夏",
    intro:
      "長い名詞のかたまりを読み解く力が問われます。どこからどこまでが1つの名詞かを見きわめる練習をしましょう。",
    items: [
      {
        label: "目的格の関係代名詞と省略",
        locked: true,
        formula:
          "目的格の関係代名詞（whom / which / that）は省略できる ／ 主格は省略できない",
        explanation:
          "The book I read was interesting. のように、名詞の直後に「主語＋動詞」が続いていたら、目的格の関係代名詞が省略されています。主格は省略できないので、名詞の直後に動詞が来ていれば省略ではありません。",
        steps: [
          "主格: The man who lives here is kind.（省略できない）",
          "目的格: The book (which) I read was good.（省略できる）",
          "名詞の直後が 主語＋動詞 → 目的格が省略されている",
          "名詞の直後が 動詞 → 主格（省略されていない）",
          "前置詞の目的語のときも省略できる: the house (which) I live in",
        ],
        example: {
          q: "This is the letter he wrote. で省略されている語は何ですか。",
          a: "which（または that）。目的格なので省略できる",
        },
        quiz: [
          {
            q: "The girl ＿ is singing is my sister. の＿に入る語は何ですか。省略できますか。",
            a: "who。主格なので省略できない",
            explanation: "＿の後ろが動詞 is singing なので主格です。",
          },
          {
            q: "関係代名詞が省略されているかどうかを見分ける方法を答えなさい。",
            a: "名詞の直後に「主語＋動詞」が続いていれば省略されている",
            explanation:
              "名詞の直後に「主語＋動詞」が続いていれば省略されている。省略できるのは目的格の関係代名詞だけで、そのときは後ろに主語と動詞がそろっているからである。逆に名詞の直後がいきなり動詞なら、それは主格なので省略できない。The book I read（省略あり）と The book which is on the desk（省略なし）。この見分けが長文読解の速さを決める。",
          },
          {
            q: "This is the house which I live in. の which は省略できますか。",
            a: "できる",
            explanation:
              "前置詞 in の目的語にあたるので目的格です。in which とまとめる形もありますが、中学では in を後ろに残す形で十分です。",
          },
        ],
        checkpoints: [
          "直後が主語＋動詞なら省略、直後が動詞なら主格",
          "主格は省略できない",
        ],
      },
      {
        label: "関係代名詞 what と that の使い分け",
        locked: true,
        formula:
          "what は先行詞をふくむ（＝the thing which）／ that は先行詞が必要",
        explanation:
          "what は「〜すること・〜するもの」という意味で、前に先行詞を置きません。This is what I want. は「これが私のほしいものだ」です。that は先行詞が必要で、先行詞に最上級や the only がつくときによく使われます。",
        steps: [
          "what ＝ the thing(s) which（先行詞をふくむ）",
          "that は先行詞が必要",
          "先行詞に最上級・the only・the first・all がつくと that が好まれる",
          "先行詞が人と物の両方のときも that",
          "前置詞の直後には that を使えない",
        ],
        example: {
          q: "Show me what you bought. の意味を答えなさい。",
          a: "あなたが買ったものを見せてください",
        },
        quiz: [
          {
            q: "This is the thing which I need. を what を使って書きかえなさい。",
            a: "This is what I need.",
            explanation:
              "what は the thing which をまとめた形なので、先行詞を消せます。",
          },
          {
            q: "This is the most interesting book ＿ I have ever read. に入る関係代名詞は何ですか。",
            a: "that",
            explanation:
              "先行詞に最上級がついているので that が好まれます。which でも通じますが、入試では that が答えになります。",
          },
          {
            q: "what の前に先行詞を置けますか。",
            a: "置けない（what が先行詞をふくんでいるため）",
            explanation:
              "置けない（what が先行詞をふくんでいるため）。what は「〜するもの・こと」という意味で、the thing which の2語ぶんをまとめて1語で表しているからである。だから the thing what という形は、同じ内容を二重に言うことになって誤りになる。What he said is true. のように、what から始まるかたまりがそのまま主語や目的語になる。",
          },
        ],
        checkpoints: [
          "what は先行詞をふくむ。前に名詞を置かない",
          "最上級・the only のあとは that",
        ],
      },
      {
        label: "分詞の後置修飾と長い主語",
        locked: true,
        formula:
          "現在分詞（〜ing）は「〜している」／ 過去分詞（〜ed）は「〜される・された」",
        explanation:
          "分詞1語なら名詞の前、2語以上のかたまりなら名詞の後ろに置きます。The boy running over there is Ken. のように、主語が長くなると動詞を見失いやすいので、どこまでが主語かを見きわめる練習が必要です。",
        steps: [
          "1語の分詞 → 名詞の前（a running boy）",
          "2語以上のかたまり → 名詞の後ろ（the boy running over there）",
          "現在分詞: その名詞が動作をする側（〜している）",
          "過去分詞: その名詞が動作をされる側（〜される・された）",
          "長い主語のときは、まず動詞を探してから主語の範囲を決める",
        ],
        example: {
          q: "the language spoken in Brazil の意味を答えなさい。",
          a: "ブラジルで話されている言語（話される側なので過去分詞）",
        },
        quiz: [
          {
            q: "The girl ＿ (play) the piano is my sister. を正しい形にしなさい。",
            a: "playing",
            explanation: "少女が弾く側なので現在分詞です。",
          },
          {
            q: "現在分詞と過去分詞は、何で使い分けますか。",
            a: "その名詞が動作をする側か、される側か",
            explanation:
              "その名詞が動作をする側か、される側か。現在分詞（ing形）は「〜している」と動作をする側、過去分詞は「〜される」と動作を受ける側を表すからである。a boy running（走っているのは少年自身）、a book written（書かれたのは本のほうで、書いたのは別の人）。名詞と動詞の関係がどちら向きかを確かめる。",
          },
          {
            q: "長い主語の文で、まず何を探しますか。",
            a: "文全体の動詞",
            explanation:
              "文全体の動詞。動詞が見つかれば、その前までがまとめて主語だと決まるからである。分詞や関係代名詞で説明が足されると主語が長くなり、どこで切れるのか分からなくなるが、動詞を目印にすれば区切れる。The boy running in the park is my brother. なら is が文の動詞で、その前までが主語。",
          },
        ],
        checkpoints: [
          "1語なら前、2語以上なら後ろ",
          "する側は ing、される側は 過去分詞",
        ],
      },
      {
        label: "間接疑問文の語順",
        locked: true,
        formula: "疑問詞 ＋ 主語 ＋ 動詞（疑問文の語順にしない）",
        explanation:
          "文の中に疑問文が入ると、語順がふつうの文に戻ります。Do you know where he lives? のように、where の後ろは he lives であって does he live ではありません。時制の一致にも注意します。",
        steps: [
          "疑問詞 ＋ 主語 ＋ 動詞 の順にする",
          "do, does, did は使わない",
          "疑問詞が主語のときは語順が変わらない（who came）",
          "主節が過去なら、中の動詞も過去にする（時制の一致）",
          "文全体が疑問文なら最後はクエスチョンマーク",
        ],
        example: {
          q: "Do you know? ＋ Where does he live? を1文にしなさい。",
          a: "Do you know where he lives?",
        },
        quiz: [
          {
            q: "I do not know what is this. の誤りを直しなさい。",
            a: "I do not know what this is.",
            explanation:
              "I do not know what this is. 文の中に組みこまれた疑問文は、もう問いかけではなく名詞のかたまりとしてはたらくので、疑問文の語順にはせず「疑問詞 ＋ 主語 ＋ 動詞」の順にするからである。What is this? の語順のまま入れてはいけない。be動詞が最後に来る形になる。",
          },
          {
            q: "Tell me who ＿ (come) here yesterday. を正しい形にしなさい。",
            a: "came",
            explanation:
              "疑問詞 who が主語なので語順は変わりません。yesterday があるので過去形にします。",
          },
          {
            q: "間接疑問文で do, does, did は使いますか。",
            a: "使わない",
            explanation:
              "ふつうの文の語順に戻るためです。does he live ではなく he lives になります。",
          },
        ],
        checkpoints: [
          "疑問詞＋主語＋動詞。do/does/did は使わない",
          "疑問詞が主語なら語順は変わらない",
        ],
      },
    ],
  },

  {
    title: "比較と書きかえ",
    studyPeriod: "中3前半",
    intro:
      "同じ内容を別の形で言いかえる問題は毎年出ます。型を覚えれば、その場で作れるようになります。",
    items: [
      {
        label: "比較の3つの言いかえ",
        locked: true,
        formula:
          "最上級 ＝ 比較級 ＋ than any other ＋ 単数 ＝ No other 〜 as 〜 as",
        explanation:
          "「彼がクラスで一番背が高い」は3通りに言えます。He is the tallest in his class. / He is taller than any other student in his class. / No other student in his class is as tall as he is. 形を覚えて書きかえられるようにします。",
        steps: [
          "最上級: the ＋ est / the most 〜 in（of）",
          "比較級 ＋ than any other ＋ 単数名詞",
          "No other ＋ 単数名詞 ＋ is as ＋ 原級 ＋ as",
          "No other ＋ 単数名詞 ＋ is ＋ 比較級 ＋ than",
          "in は場所や集団、of は複数のものの中で",
        ],
        example: {
          q: "Mt. Fuji is the highest mountain in Japan. を比較級で書きかえなさい。",
          a: "Mt. Fuji is higher than any other mountain in Japan.",
        },
        quiz: [
          {
            q: "than any other の後ろは単数形と複数形のどちらですか。",
            a: "単数形",
            explanation:
              "単数形。any other は「ほかのどの1つと比べても」という意味で、1つずつ取り出して比べる言い方だからである。だから any other students ではなく any other student になる。Ken is taller than any other student in his class. は、最上級の Ken is the tallest student in his class. と同じ内容を表す。",
          },
          {
            q: "in と of の使い分けを答えなさい。",
            a: "in は場所や集団、of は複数のものの中で",
            explanation:
              "in は場所や集団、of は複数のものの中で。in のあとには、その範囲を一つのまとまりとしてとらえられる語が来るからである（in my class, in Japan, in the world）。of のあとには、数えられるものを並べた語が来る（of the four, of all the students）。範囲か、数の集まりかで決まる。",
          },
          {
            q: "No other boy in this class is as tall as Ken. を最上級で書きかえなさい。",
            a: "Ken is the tallest boy in this class.",
            explanation:
              "Ken is the tallest boy in this class. 「ほかのどの少年もケンほど背が高くない」ということは、ケンがいちばん高いということだからである。否定＋原級、否定＋比較級、比較級＋than any other、最上級の4つは同じ内容を表す言いかえで、入試でくり返し問われる。書きかえたら、だれがいちばんなのかを確かめる。",
          },
        ],
        checkpoints: [
          "than any other の後ろは単数",
          "3つの形を行き来できるようにする",
        ],
      },
      {
        label: "as 〜 as を使った表現",
        locked: true,
        formula:
          "as ＋ 原級 ＋ as ＝ 同じくらい ／ not as ＋ 原級 ＋ as ＝ 〜ほど…ない ／ 倍数 ＋ as 〜 as",
        explanation:
          "not as tall as は「〜ほど背が高くない」で、比較級を使った less tall than と同じ意味です。倍数を表すときは twice as large as のように as 〜 as の前に置きます。数字を使うときは three times as 〜 as となります。",
        steps: [
          "as ＋ 原級 ＋ as: 同じくらい〜",
          "not as ＋ 原級 ＋ as: 〜ほど…ではない",
          "twice as ＋ 原級 ＋ as: 2倍〜",
          "three times as ＋ 原級 ＋ as: 3倍〜",
          "as 〜 as possible ＝ as 〜 as one can: できるだけ〜",
        ],
        example: {
          q: "I am not as old as my brother. を比較級で書きかえなさい。",
          a: "My brother is older than I am.",
        },
        quiz: [
          {
            q: "This box is twice ＿ ＿ ＿ that one.（2倍の大きさ）を完成させなさい。",
            a: "as large as",
            explanation:
              "as large as。倍数を表す語は as 〜 as のかたまりの前に置く決まりだからである。twice as large as（2倍）、three times as large as（3倍）となる。なお「2倍」は twice、「3倍」以上は three times のように times を使い、half as large as なら半分になる。",
          },
          {
            q: "as soon as possible の意味を答えなさい。",
            a: "できるだけ早く",
            explanation:
              "できるだけ早く。as 〜 as possible で「できるかぎり〜」を表すからである。possible の代わりに主語に合わせた can を使って as soon as he can とも言え、この言いかえも問われる。as soon as は「〜するとすぐに」という接続詞の使い方もあるので、後ろが possible か文かで見分ける。",
          },
          {
            q: "not as 〜 as を比較級で言いかえると、主語はどうなりますか。",
            a: "入れかわる",
            explanation:
              "入れかわる。not as tall as は「〜ほど背が高くない」という意味で、比べた相手のほうが高いことを表しているからである。だから比較級で言うときは、高いほうを主語に立てなおす必要がある。A is not as tall as B. → B is taller than A. 主語が逆になる点が要注意。",
          },
        ],
        checkpoints: [
          "not as 〜 as を比較級に直すと主語が入れかわる",
          "倍数は as の前",
        ],
      },
      {
        label: "頻出の書きかえパターン",
        locked: true,
        formula: "同じ内容を別の構文で表す型を覚える",
        explanation:
          "書きかえ問題は型が決まっています。too 〜 to と so 〜 that、不定詞と接続詞、能動態と受動態などです。どの語が消えてどの語が増えるかを意識すると、その場で作れるようになります。",
        steps: [
          "too 〜 to do ＝ so 〜 that 主語 cannot do",
          "〜 enough to do ＝ so 〜 that 主語 can do",
          "It is 〜 for A to do ＝ 不定詞の意味上の主語",
          "Shall I 〜? ＝ Do you want me to 〜?",
          "Why do not we 〜? ＝ Let us 〜 ＝ Shall we 〜?",
          "must ＝ have to / must not ＝ do not have to ではない（意味がちがう）",
        ],
        example: {
          q: "He is too young to drive. を so 〜 that で書きかえなさい。",
          a: "He is so young that he cannot drive.",
        },
        quiz: [
          {
            q: "must not と do not have to の意味のちがいを答えなさい。",
            a: "must not は「〜してはいけない」、do not have to は「〜しなくてよい」",
            explanation:
              "must ＝ have to と覚えていると、否定形で取りちがえます。意味が正反対に近いので要注意です。",
          },
          {
            q: "This book is so easy that I can read it. を enough で書きかえなさい。",
            a: "This book is easy enough for me to read.",
            explanation:
              "This book is easy enough for me to read. enough は形容詞の後ろに置く決まりなので、enough easy とはしないからである（名詞につくときは enough books と前に置く）。「だれにとって」は for me、「〜するには」は to read で表す。so 〜 that … と 〜 enough to … は同じ内容の言いかえになる。",
          },
          {
            q: "Shall we go? と同じ意味の表現を1つ答えなさい。",
            a: "Let us go.（Why do not we go? も可）",
            explanation:
              "Let us go.（Why do not we go? も可）。3つとも「一緒に行きましょう」と相手をさそう言い方で、形はちがっても伝える内容が同じだからである。書きかえでよく問われる。答え方は Yes, let us. / Sure. などになる。How about going? も似たさそい方だが、こちらは後ろが ing形になる点がちがう。",
          },
        ],
        checkpoints: [
          "must not と do not have to は意味がちがう",
          "enough は形容詞の後ろ",
        ],
      },
    ],
  },

  {
    title: "長文読解と英作文",
    studyPeriod: "中3秋〜直前",
    intro:
      "配点がいちばん大きい分野です。時間配分と解く順番を決めておくと、本番で最後まで届きます。",
    items: [
      {
        label: "長文の解き方の手順",
        locked: true,
        formula: "設問を先に読む → 段落ごとに要点をつかむ → 根拠に線を引いて答える",
        explanation:
          "本文を全部読んでから設問を見ると、もう一度探し直すことになります。先に設問を読んでおけば、何を探しながら読むかが決まります。答えの根拠になる部分には必ず線を引き、思いこみで答えないようにします。",
        steps: [
          "① 設問を先に読む（選択肢までは読まなくてよい）",
          "② 段落ごとに、何の話かを一言でメモする",
          "③ 設問に関係する段落を特定する",
          "④ 根拠になる文に線を引く",
          "⑤ 選択肢は本文と照らして消去法で絞る",
          "分からない単語は前後から推測し、そこで止まらない",
        ],
        example: {
          q: "長文を読むとき、設問と本文はどちらを先に読みますか。",
          a: "設問（何を探すかを決めてから読むため）",
        },
        quiz: [
          {
            q: "知らない単語が出てきたらどうしますか。",
            a: "前後から意味を推測し、そこで止まらずに読み進める",
            explanation:
              "前後から意味を推測し、そこで止まらずに読み進める。1語で止まってしまうと時間が足りなくなるうえ、その単語が設問に関係しないことも多いからである。実際、全体の流れさえつかめれば解ける設問が多い。前後の文や、その語がプラスの意味かマイナスの意味かだけでも見当をつけて先へ進む。",
          },
          {
            q: "選択肢を選ぶとき、何をしますか。",
            a: "本文の該当箇所と照らして、合わないものを消す",
            explanation:
              "本文の該当箇所と照らして、合わないものを消す。正しいものを一つ選ぼうとすると、どれももっともらしく見えて迷うが、消すべき理由はたいてい一つはっきりしているからである。「本文に書かれていない」「言いすぎている（always, all, never）」「本文と逆になっている」選択肢を消すと残りが絞れる。",
          },
          {
            q: "段落ごとにメモを取るのはなぜですか。",
            a: "設問に関係する段落をすぐ見つけられるようにするため",
            explanation:
              "設問に関係する段落をすぐ見つけられるようにするため。長文では、設問を読んでから答えの場所をさがし直すのに最も時間がかかるからである。段落の横に「筆者の体験」「反対意見」のように一言だけ書いておけば、探し直す時間が大きく減る。長く書く必要はない。",
          },
        ],
        checkpoints: [
          "設問を先に読む",
          "根拠に線を引く。思いこみで答えない",
        ],
      },
      {
        label: "指示語と代名詞が指すもの",
        locked: true,
        formula: "it / they / this / that が指す内容は、たいてい直前にある",
        explanation:
          "下線部の指す内容を答える問題は頻出です。直前の名詞や文を探し、見つけたら下線部に入れて読み、意味が通るか確かめます。単数か複数か、人か物かで候補を絞れます。",
        steps: [
          "直前の名詞・文を探す",
          "it は単数、they は複数、this / that は文全体を指すこともある",
          "見つけたら入れかえて読み、意味が通るか確かめる",
          "日本語で答える指示なら、本文の英語を訳して書く",
          "「それ」のまま答えない",
        ],
        example: {
          q: "下線部の it が指す内容を見つけたあと、必ずすることは何ですか。",
          a: "下線部に入れかえて読み、意味が通るか確かめる",
        },
        quiz: [
          {
            q: "they が指すものを探すとき、単数と複数のどちらの名詞を探しますか。",
            a: "複数",
            explanation:
              "複数。they は複数を受ける代名詞なので、数の合わない単数の名詞は最初から候補から外せるからである。同じように it なら単数、he なら男性の単数、と数と性で候補をしぼれる。代名詞の指す内容を問われたら、まず数を確かめてから前をさがすと速い。",
          },
          {
            q: "this や that が指すのは名詞だけですか。",
            a: "文全体を指すこともある",
            explanation:
              "文全体を指すこともある。this や that は、直前に述べられた内容をまるごと受けることができるからである。He failed the test. This made him sad. の This は「テストに落ちたこと」全体を指している。名詞だけを探して見つからないときは、前の文の内容そのものを疑う。",
          },
          {
            q: "日本語で答える問題で「それ」と書いてよいですか。",
            a: "よくない（指す内容を具体的に書く）",
            explanation: "何を指すかを答える問題なので、指示語のままでは答えになりません。",
          },
        ],
        checkpoints: [
          "見つけたら必ず入れかえて確認",
          "単数か複数かで候補を絞る",
        ],
      },
      {
        label: "条件英作文の書き方",
        locked: true,
        formula: "知っている表現だけで書く ／ 条件（語数・文数）を必ず守る",
        explanation:
          "難しい日本語を無理に訳そうとせず、自分が確実に書ける英語に言いかえるのが要点です。「私は感動しました」が書けなければ「私はとてもうれしかった」でよいのです。語数や文数の条件を守らないと、内容が良くても得点になりません。",
        steps: [
          "条件（語数・文数・使う語）に線を引く",
          "日本語を、自分が書ける easy な日本語に言いかえる",
          "主語と動詞をはっきりさせる",
          "時制と三単現のsを確かめる",
          "ピリオド・大文字を確かめる",
          "書けない単語は別の言い方にする",
        ],
        example: {
          q: "難しい日本語を英語にできないとき、どうしますか。",
          a: "自分が確実に書ける easy な日本語に言いかえてから英語にする",
        },
        quiz: [
          {
            q: "英作文を書き終えたあと、確かめる項目を3つ答えなさい。",
            a: "主語と動詞／時制と三単現のs／大文字とピリオド",
            explanation:
              "主語と動詞／時制と三単現のs／大文字とピリオド。内容が合っていても、この3つのミスで失点することが非常に多いからである。とくに主語を書き忘れる、過去の話なのに現在形のまま、文の最初を小文字で始める、というミスは見直せば必ず気づける。書き終えたら必ずこの順で見直す。",
          },
          {
            q: "語数の条件が「20語以上」のとき、15語で書いてよいですか。",
            a: "よくない（条件を満たさないと減点される）",
            explanation:
              "よくない（条件を満たさないと減点される）。条件英作文は、内容だけでなく条件を守れているかも採点の対象になっているからである。語数が足りないと、その時点で減点や0点になることもある。内容を考える前に、まず条件（語数・使う語・書く内容）を確かめる。",
          },
          {
            q: "書けない単語があるとき、どうしますか。",
            a: "知っている別の言い方にする",
            explanation:
              "知っている別の言い方にする。英作文で大事なのは、正しい英語で内容を伝えることであって、難しい単語を使うことではないからである。「祖父」が書けなければ my father's father、「病院」が出てこなければ a place for sick people のように言いかえられる。書けない語にこだわって手が止まるほうが損。",
          },
        ],
        checkpoints: [
          "条件を落とすと内容が良くても減点",
          "三単現のsと時制は最後に必ず確認",
        ],
      },
      {
        label: "リスニングで問われる型",
        locked: true,
        formula: "放送前に選択肢を読む ／ 数字・曜日・場所はメモする",
        explanation:
          "放送が始まる前に選択肢や図を見ておくと、何を聞き取ればよいかが分かります。数字や時刻、曜日は聞いた瞬間にメモします。2回読まれる場合は、1回目で大まかに、2回目で細かい部分を確かめます。",
        steps: [
          "放送前に選択肢・図・表に目を通す",
          "数字・時刻・曜日・場所は聞いた瞬間にメモ",
          "1回目で大まかに、2回目で細部を確かめる",
          "聞き取れない部分があっても止まらない",
          "答えは最後の発言に出てくることが多い",
        ],
        example: {
          q: "リスニングで放送が始まる前にすることは何ですか。",
          a: "選択肢や図に目を通し、何を聞き取ればよいかを決める",
        },
        quiz: [
          {
            q: "リスニングで必ずメモすべきものを3つ答えなさい。",
            a: "数字・時刻（曜日）・場所",
            explanation:
              "数字・時刻（曜日）・場所。この3つは設問で問われやすいうえ、覚えておくのが難しく、選択肢を見ている間に忘れてしまうからである。記憶だけにたよらず、聞こえたらすぐ書き取る。とくに数字は、複数出てきたときにどちらがどちらか混ざりやすいので、何の数字かも添えて書く。",
          },
          {
            q: "聞き取れない部分があったらどうしますか。",
            a: "そこで止まらず、次を聞く",
            explanation:
              "そこで止まらず、次を聞く。音声は待ってくれないので、1か所にこだわっているあいだに、その後の内容がすべて聞けなくなってしまうからである。聞き取れなかった部分も、全体の流れが分かれば見当がつくことが多い。切りかえて次に集中するほうが、結果として正答数は増える。",
          },
          {
            q: "会話の答えは、どのあたりに出てくることが多いですか。",
            a: "最後の発言",
            explanation:
              "予定や結論は会話の終わりで決まることが多いためです。",
          },
        ],
        checkpoints: [
          "放送前に選択肢を読む",
          "聞き逃してもそこで止まらない",
        ],
      },
      {
        label: "会話文でよく出る応答",
        locked: true,
        formula: "決まり文句は、場面とセットで覚える",
        explanation:
          "会話文の空所補充では、決まった応答が答えになります。May I help you? には I am just looking. や I am looking for 〜、How about 〜? には That sounds good. のように、対になる表現を覚えておきます。",
        steps: [
          "May I help you? → I am just looking. / I am looking for 〜",
          "How about 〜? / Why do not we 〜? → That sounds good.",
          "Thank you. → You are welcome.",
          "I am sorry. → That is all right. / No problem.",
          "電話: This is Ken speaking. / May I speak to 〜?",
          "道案内: Go straight. / Turn right at the first corner.",
        ],
        example: {
          q: "May I help you? に対して、見ているだけのときの答えを英語で書きなさい。",
          a: "I am just looking, thank you.",
        },
        quiz: [
          {
            q: "電話で「ケンをお願いします」は英語でどう言いますか。",
            a: "May I speak to Ken?",
            explanation:
              "May I speak to Ken? 電話では相手の姿が見えないので、直接呼ぶのではなく「話してもよいですか」とたずねる形で取りつぐのが決まった言い方だからである。自分を名乗るときも I am Ken. ではなく This is Ken speaking. となる。電話の場面は表現がほぼ決まっているので、そのまま覚える。",
          },
          {
            q: "How about going to the movies? への肯定的な答えを1つ書きなさい。",
            a: "That sounds good.（Sure. / That is a good idea. も可）",
            explanation:
              "That sounds good.（Sure. / That is a good idea. も可）。sound は「〜に聞こえる」という意味で、相手の提案を聞いた感想を述べる言い方だからである。主語が That と3人称単数なので、sounds の s を落とさないよう注意する。断るときは Sorry, I cannot. などになる。",
          },
          {
            q: "道案内で「2つ目の角を左に曲がってください」を英語で書きなさい。",
            a: "Turn left at the second corner.",
            explanation:
              "Turn left at the second corner. at the ＋ 序数 ＋ corner の形で「〜つ目の角で」を表す。角は地点なので、点を指す前置詞の at を使うからである。序数には the がつく。道案内では Go straight（まっすぐ行く）、Turn right（右に曲がる）、on your left（左手に）もあわせて覚えておくとよい。",
          },
        ],
        checkpoints: [
          "場面と対にして覚える",
          "電話では This is 〜 speaking.",
        ],
      },
    ],
  },
];
