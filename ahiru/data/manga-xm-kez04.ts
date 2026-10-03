import type { MangaScript } from './manga-types';

export const XM_KEZ04_SCRIPTS: Record<string, MangaScript> = {
  'koko_eigo_11_pronunciation_xm': {
    id: 'koko_eigo_11_pronunciation_xm',
    title: '-ed の発音は「つづり」で決めていい？',
    panels: [
      { speaker: 't', line: 'played、called、opened、stopped。下線部の -ed の発音が、他と異なるものを1つ選ぼう。' },
      { speaker: 's1', line: '「-ed の前が子音字なら [t]」と覚えました。called は l が子音字だから [t]、opened の n も [t]、stopped の p も [t]。played だけ y で、ちがいそうです。' },
      { speaker: 's2', line: 'でも、called を [コールト] と読むのは聞いたことがないです。[コールド] と読んでいる気がします。' },
      { speaker: 't', line: 'いい違和感だね。ここで、-ed の前の「文字」ではなく「音」を見ているかな。のどに指を当てて、stop の最後の p と、call の最後の l を言ってみよう。' },
      { speaker: 's1', line: 'p は息だけで、のどはふるえません。l はのどがぶるぶるします。あれ、同じ子音でも、ちがうんですね。' },
      { speaker: 't', line: 'そう。のどがふるえない音を無声音、ふるえる音を有声音という。-ed の発音を決めるのは、この直前の「音」だ。' },
      { speaker: 't', line: '無声音のあとは [t]、有声音と母音のあとは [d]、t と d の音のあとだけ [id]。つづりが子音字かどうかは関係ない。', emphasis: true },
      { speaker: 's2', line: 'すると played、called、opened は [d] で、stopped だけが [t]。答えは stopped ですね。' },
      { speaker: 's1', line: '試しに wanted を言うと、t の音で終わるから [id] で音が1つ増えます。迷ったら、のどに指を当てて確かめます。' },
    ],
  },
  'koko_eigo_04_reading_xm': {
    id: 'koko_eigo_04_reading_xm',
    title: '知らない単語は「but」の前に聞く',
    panels: [
      { speaker: 't', line: 'Tom is usually quiet, but today he was talkative. この talkative の意味を、文脈から推測してみよう。' },
      { speaker: 's1', line: 'talk という語が入っているから「話をする」で、「静かだが、今日は話をした」だと思います。' },
      { speaker: 's2', line: 'それだと「静か」と「話をした」のつながりが、少し弱い気がします。but は、前と後ろが同じ方向の内容をつなぐ語でしたか？' },
      { speaker: 't', line: 'but はどんな関係を表す語だったか、もう一度思い出してみよう。前の文は Tom がどんな人だと言っているかな。' },
      { speaker: 's1', line: 'but は逆接です。前の文は「ふだんは quiet（おとなしい）」だから、あとは反対のことが来るはずです。' },
      { speaker: 't', line: 'では、quiet の反対の意味の語は何だろう。選択肢が「おしゃべりな」「疲れた」「親切な」ならどれかな。' },
      { speaker: 't', line: 'but のあとは前の文と反対の内容が来る。quiet の反対なので「おしゃべりな」だ。知らない語は、逆接・言いかえ・例示のサインで意味を絞る。', emphasis: true },
      { speaker: 's2', line: 'In other words が前にあれば同じ意味、for example なら具体例、と分ければいいんですね。' },
      { speaker: 's1', line: '確かめとして「ふだんは静かだが、今日はおしゃべりだった」と日本語に直すと、自然につながります。1語にこだわらず、つなぎ言葉を見ます。' },
    ],
  },
  'koko_eigo_18_question_types_xm': {
    id: 'koko_eigo_18_question_types_xm',
    title: '同じ単語が並ぶ選択肢に注意',
    panels: [
      { speaker: 't', line: '本文は Mika was late for school because she missed the bus. 内容に合う文を選ぼう。ア：Mika missed the bus because she was late for school. イ：Mika was late for school because she missed the bus.' },
      { speaker: 's1', line: '2つとも Mika、late、school、missed、bus が全部入っています。どっちも本文と合っているように見えます。' },
      { speaker: 't', line: '使われている単語が同じでも、意味が同じとは限らないね。because は、そのあとにどんな内容を置く語かな。' },
      { speaker: 's2', line: 'because のあとは「理由」です。本文は「バスに乗り遅れたから、遅刻した」で、理由は she missed the bus です。' },
      { speaker: 't', line: 'アを日本語にするとどうなるかな。同じように、because のあとの部分が何を言っているか見てみよう。' },
      { speaker: 's1', line: 'アは「遅刻したから、バスに乗り遅れた」になります。原因と結果が逆です。時間の順番としても変ですね。' },
      { speaker: 't', line: '内容一致では、単語がそろっているかではなく、意味と関係が同じかで判断する。because のあとが原因、前が結果。この向きが逆なら誤りだ。', emphasis: true },
      { speaker: 's2', line: 'こういう因果の逆転は、選択肢の語がほとんど本文と同じなので、ひっかかりやすいんですね。' },
      { speaker: 's1', line: '確かめには、選択肢を日本語にして「A だから B」の A と B が本文と同じ向きか見ます。そのうえで本文の該当箇所を指でおさえます。' },
    ],
  },
  'koko_eigo_19_dialogue_reading_xm': {
    id: 'koko_eigo_19_dialogue_reading_xm',
    title: '空所は「次の発言」から逆算する',
    panels: [
      { speaker: 't', line: 'A: Shall we eat lunch at the new restaurant? B: （　　） A: OK, then let\'s go to the old one near the station. 空所に入るのは、ア Yes, let\'s go. イ I\'m sorry, it\'s too expensive. ウ It opens at eleven. のどれかな？' },
      { speaker: 's1', line: 'Shall we ～? は「～しませんか」という提案です。提案には「いいですね」と答えるのが基本だから、アだと思います。' },
      { speaker: 's2', line: 'でも、A は「じゃあ、駅の近くの古いほうに行こう」と言っています。これはおかしくないですか？' },
      { speaker: 't', line: '直後の発言に注目したね。A は新しい店に行くという案から、何に変えたのかな。' },
      { speaker: 's1', line: 'then は「それなら」という意味なので、B の発言を受けて予定を変えています。つまり B は断ったんですね。' },
      { speaker: 't', line: 'アを入れて読むと、A の次の発言はつながるかな。提案への返事には、承諾と断りの2つがあった。それを選ぶ手がかりはどこにあるだろう。' },
      { speaker: 't', line: '提案には承諾か断りが続くが、どちらかは直後の発言が教えてくれる。then let\'s go to the old one があるので、B は断ったとわかり、答えはイだ。', emphasis: true },
      { speaker: 's2', line: 'ウの「11時に開きます」は、提案への答えになっていないので、そこでも消えますね。' },
      { speaker: 's1', line: '確かめとして、イを入れて通して読むと「高いからごめん」「それなら古い店へ」と自然につながります。直前だけでなく、前後をはさんで読みます。' },
    ],
  },
};

export const XM_KEZ04_SECTIONS: Record<string, string> = {
  'koko_eigo_11_pronunciation#0': 'koko_eigo_11_pronunciation_xm',
  'koko_eigo_04_reading#1': 'koko_eigo_04_reading_xm',
  'koko_eigo_18_question_types#0': 'koko_eigo_18_question_types_xm',
  'koko_eigo_19_dialogue_reading#2': 'koko_eigo_19_dialogue_reading_xm',
};
