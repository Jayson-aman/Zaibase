import type { Question } from './questions-meta';

// 中学2年生・英語（eigo）の新規オリジナル問題50問。
// 範囲：過去形（規則・不規則動詞）／過去進行形／未来表現（will・be going to）／
//       助動詞（must・have to・should等）／不定詞（名詞的・副詞的・形容詞的用法）／
//       動名詞／比較級・最上級／接続詞（when・if・because・that）／
//       文型（SVOO・SVOCの基礎）
// すべて grade: 'j2'、examType: 'koko'。
export const gradeJ2EigoQuestions: Question[] = [
  // ============================================================
  // 過去形（規則動詞） 5問 (01-05)
  // ============================================================
  {
    id: 'grade_j2_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI (　) soccer with my friends yesterday. （わたしは昨日、友だちとサッカーをしました。）',
    answer: 'played',
    choices: ['played', 'plays', 'playing', 'play'],
    hint: '規則動詞の過去形はedをつける。',
    explanation:
      '【解説】\n規則動詞の過去形は動詞の原形にedをつけて作る。play→played。\nyesterday（昨日）があるので過去の文だとわかる。\n答え：played',
  },
  {
    id: 'grade_j2_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nShe (　) her room last Sunday. （彼女はこの前の日曜日に部屋をそうじしました。）',
    answer: 'cleaned',
    choices: ['cleaned', 'cleans', 'cleaning', 'clean'],
    hint: 'clean（そうじする）の過去形。',
    explanation:
      '【何を聞かれているか】\n"She (　) her room last Sunday."（彼女はこの前の日曜日に部屋をそうじしました。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜcleanedにするのか】\n"last Sunday"（この前の日曜日）という過去を表す語句があるので、動詞を過去形にする必要がある。\n\n【ポイント1】cleanの変化を確認する\ncleanのような規則動詞は、edをつけて過去形にする（clean→cleaned）。\n\n【ポイント2】過去を表す語句を確認する\n"last Sunday"から、過去の出来事について述べた文だとわかる。\n\n【ポイント3】他の選択肢を消去する\ncleans（現在形）、cleaning（ing形）、clean（原形）はいずれも過去の出来事を表せない。\n\n【答え】\ncleaned\n\n【確かめ】\ncleanにedがついてcleanedになっているか確認する。\n\n【よくあるまちがい】\n過去を表す語句があるのに、現在形cleansのままにしてしまうミス。\n\n【ここが絶対】\nlast〜、yesterday、〜ago等の語があれば過去形を使うと覚える。',
  },
  {
    id: 'grade_j2_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '「勉強した」という意味になるように、studyを過去形にした正しいつづりはどれですか。',
    answer: 'studied',
    choices: ['studied', 'studyed', 'studies', 'studieed'],
    hint: 'yで終わる動詞は、yをiに変えてedをつける。',
    explanation:
      '【解説】\n子音字+yで終わる動詞は、yをiに変えてからedをつける。study→studi+ed→studied。\nstudiesは3人称単数現在形なので過去形ではない。\n答え：studied',
    pitfall: 'studyedのようにyをそのままにしてedをつけるミスが多いので注意。',
  },
  {
    id: 'grade_j2_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      "次の文の（　）に入る正しい形はどれですか。\nI didn't (　) TV last night. （わたしは昨夜テレビを見ませんでした。）",
    answer: 'watch',
    choices: ['watch', 'watched', 'watches', 'watching'],
    hint: "didn'tのあとの動詞は原形にする。",
    explanation:
      '【何を聞かれているか】\n"I didn\'t (　) TV last night."（わたしは昨夜テレビを見ませんでした。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜwatchを原形のまま使うのか】\n過去の否定文はdidn\'t（did not）の後に動詞の原形を続けるという決まりがあり、didn\'tの中にすでに過去の意味が含まれているので、動詞を過去形にする必要はない。\n\n【ポイント1】didn\'tの後の動詞の形を確認する\ndidn\'t（did not）の後は動詞の原形を続ける。\n\n【ポイント2】watchの形を確認する\nwatch→そのままの形（原形）で使う。\n\n【ポイント3】他の選択肢を消去する\nwatched（過去形）、watches（3単現）、watching（ing形）はいずれもdidn\'tの後には使えない。\n\n【答え】\nwatch\n\n【確かめ】\ndidn\'tの後がwatch（原形）になっており、watchedになっていないか確認する。\n\n【よくあるまちがい】\ndidn\'tの後にwatchedと過去形のままにしてしまうミス。\n\n【ここが絶対】\ndidn\'t（did not）の後ろは動詞の原形、と徹底して覚える。',
    pitfall:
      "didn'tのあとにwatchedと過去形のままにしてしまうミスに注意。didn'tの中にすでに過去の意味が入っている。",
  },
  {
    id: 'grade_j2_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '次の文を「〜しませんでした」という否定文に書きかえなさい。\nHe cleaned his room.',
    answer: "He didn't clean his room.",
    hint: "一般動詞の過去の否定文は didn't + 動詞の原形。",
    explanation:
      '【何を聞かれているか】\n"He cleaned his room."を「〜しませんでした」という否定文に書きかえる問題。\n\n【なぜdidn\'tの後で動詞を原形に戻すのか】\n一般動詞の過去の否定文は、主語の後にdidn\'tを置き、動詞を原形に戻すという決まりがある。\n\n【ポイント1】didn\'tを置く位置を確認する\n主語Heの後にdidn\'tを置く。\n\n【ポイント2】動詞の形を確認する\ncleaned（過去形）→clean（原形）にして、didn\'t cleanとする。\n\n【ポイント3】完成した文を確認する\n"He didn\'t clean his room."という型になる。\n\n【答え】\nHe didn\'t clean his room.\n\n【確かめ】\ndidn\'tの後の動詞がclean（原形）になっており、cleanedのままになっていないか確認する。\n\n【よくあるまちがい】\ndidn\'tを置いても、動詞をcleanedのまま残してしまうミス。\n\n【ここが絶対】\n一般動詞の過去の否定文＝主語+didn\'t+動詞の原形、という型でセットで覚える。',
  },

  // ============================================================
  // 過去形（不規則動詞） 5問 (06-10)
  // ============================================================
  {
    id: 'grade_j2_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI (　) to Kyoto last summer. （わたしは去年の夏、京都に行きました。）',
    answer: 'went',
    choices: ['went', 'goed', 'gone', 'going'],
    hint: 'goの過去形は不規則に変化する。',
    explanation:
      '【解説】\ngo（行く）の過去形は不規則動詞で went になる。edをつけるのではないので注意。\n答え：went',
    pitfall: 'goedと間違えて答えないように。goは不規則動詞。',
  },
  {
    id: 'grade_j2_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nWe (　) a great time at the party. （わたしたちはパーティーで楽しい時間を過ごしました。）',
    answer: 'had',
    choices: ['had', 'haved', 'have', 'having'],
    hint: 'haveの過去形は不規則に変化する。',
    explanation:
      '【何を聞かれているか】\n"We (　) a great time at the party."（わたしたちはパーティーで楽しい時間を過ごしました。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜhadを使うのか】\nhave（〜を過ごす、持っている）の過去形は不規則に変化し、hadになるという決まりがある。\n\n【ポイント1】haveの過去形を確認する\nhave→had（不規則動詞）。\n\n【ポイント2】他の選択肢を消去する\nhaved（規則動詞のような誤った変化）、have（現在形）、having（ing形）はいずれも過去の文には使えない。\n\n【ポイント3】文全体の意味を確認する\n"We had a great time at the party."＝「わたしたちはパーティーで楽しい時間を過ごしました」。\n\n【答え】\nhad\n\n【確かめ】\nhaveがhad（不規則な過去形）になっているか確認する。\n\n【よくあるまちがい】\nhaveの過去形をhavedのように規則動詞と同じ変化にしてしまうミス。\n\n【ここが絶対】\nhaveの過去形はhad、という不規則変化として個別に覚える。',
  },
  {
    id: 'grade_j2_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nMy mother (　) a new bag last week. （母は先週、新しいかばんを買いました。）',
    answer: 'bought',
    choices: ['bought', 'buyed', 'buys', 'buying'],
    hint: 'buyの過去形は不規則に変化する。',
    explanation:
      '【何を聞かれているか】\n"My mother (　) a new bag last week."（母は先週、新しいかばんを買いました。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜboughtを使うのか】\nbuy（買う）の過去形は不規則に変化し、boughtになるという決まりがある。\n\n【ポイント1】buyの過去形を確認する\nbuy→bought（不規則動詞）。\n\n【ポイント2】過去を表す語句を確認する\n"last week"から過去の文だとわかる。\n\n【ポイント3】他の選択肢を消去する\nbuyed（規則動詞のような誤った変化）、buys（現在形）、buying（ing形）はいずれも過去の文には使えない。\n\n【答え】\nbought\n\n【確かめ】\nbuyがbought（不規則な過去形）になっているか確認する。\n\n【よくあるまちがい】\nbuyの過去形をbuyedのように規則動詞と同じ変化にしてしまうミス。\n\n【ここが絶対】\nbuyの過去形はbought、という不規則変化として個別に覚える。',
  },
  {
    id: 'grade_j2_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nWe (　) a beautiful sunset yesterday evening. （わたしたちは昨日の夕方、美しい夕日を見ました。）',
    answer: 'saw',
    choices: ['saw', 'seed', 'seen', 'sawed'],
    hint: 'seeの過去形は不規則に変化する。',
    explanation:
      '【何を聞かれているか】\n"We (　) a beautiful sunset yesterday evening."（わたしたちは昨日の夕方、美しい夕日を見ました。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜsawを使うのか】\nsee（見る）の過去形は不規則に変化し、sawになるという決まりがある。\n\n【ポイント1】seeの過去形を確認する\nsee→saw（不規則動詞）。\n\n【ポイント2】seenとの違いを確認する\nseenは過去分詞形であり、have/hasと組み合わせて使うもので、過去形としては使わない。\n\n【ポイント3】他の選択肢を消去する\nseed（誤った変化）、seen（過去分詞形）、sawed（誤った変化）はいずれも不適切。\n\n【答え】\nsaw\n\n【確かめ】\nseeがsaw（不規則な過去形）になっており、seenと混同していないか確認する。\n\n【よくあるまちがい】\nseenを過去形として使ってしまうミス。\n\n【ここが絶対】\nseeの変化はsee-saw-seen（原形-過去形-過去分詞形）とセットで覚える。',
    pitfall: 'seenを過去形として使ってしまうミスに注意。seenはhave/hasと組み合わせて使う過去分詞形。',
  },
  {
    id: 'grade_j2_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    passage:
      'Last Saturday, Mika went to the zoo with her family. She saw many animals and took a lot of pictures there. In the afternoon, they ate lunch at a small restaurant near the zoo. After lunch, Mika bought a T-shirt with a panda on it. She had a really great day.',
    question: '次の英文を読んで、質問に答えなさい。\n質問：What did Mika buy at the zoo?',
    answer: 'a T-shirt with a panda on it（パンダの絵が描かれたTシャツ）',
    hint: '「Mika bought」に続く部分に注目する。',
    explanation:
      '【何を聞かれているか】\n本文を読み、ミカが動物園で何を買ったかを答える問題。\n\n【なぜboughtに注目するのか】\n「何を買ったか」という設問の答えは、buy（買う）の過去形boughtを含む一文に直接示されている。\n\n【ポイント1】該当の一文を確認する\n本文中の"Mika bought a T-shirt with a panda on it."に注目する。\n\n【ポイント2】boughtの意味を確認する\nboughtはbuy（買う）の過去形。\n\n【ポイント3】答えの内容を確認する\nミカが動物園の帰りに買ったのは「パンダの絵が描かれたTシャツ」。\n\n【答え】\na T-shirt with a panda on it（パンダの絵が描かれたTシャツ）\n\n【確かめ】\n答えが、boughtの直後に続く具体的な品物（Tシャツ）になっているか確認する。\n\n【よくあるまちがい】\n本文中の他の出来事（動物園で見た動物など）と混同してしまうミス。\n\n【ここが絶対】\n「何を買ったか」を問う設問は、buy/boughtの直後に続く目的語に注目する。',
  },

  // ============================================================
  // 過去進行形 4問 (11-14)
  // ============================================================
  {
    id: 'grade_j2_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI (　) TV when you called me. （あなたが電話をくれたとき、わたしはテレビを見ているところでした。）',
    answer: 'was watching',
    choices: ['was watching', 'watched', 'am watching', 'watching'],
    hint: '「〜しているところだった」は be動詞の過去形+動詞のing形。',
    explanation:
      '【解説】\n「〜しているところだった」という過去のある時点で進行中だった動作は、過去進行形（was/were+動詞のing形）で表す。主語がIなのでbe動詞はwasを使う。\n答え：was watching',
  },
  {
    id: 'grade_j2_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThey (　) soccer in the park at that time. （そのとき、彼らは公園でサッカーをしているところでした。）',
    answer: 'were playing',
    choices: ['were playing', 'was playing', 'played', 'are playing'],
    hint: '主語がTheyのときのbe動詞の過去形はwere。',
    explanation:
      '【何を聞かれているか】\n"They (　) soccer in the park at that time."（そのとき、彼らは公園でサッカーをしているところでした。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜwere playingを使うのか】\n「〜しているところだった」という過去進行形は、be動詞の過去形＋動詞のing形で表し、主語They（3人称複数）に対応するbe動詞の過去形はwereになる。\n\n【ポイント1】過去進行形の形を確認する\nbe動詞の過去形+動詞のing形。\n\n【ポイント2】主語Theyのbe動詞を確認する\nTheyは複数なので、be動詞の過去形はwere。\n\n【ポイント3】他の選択肢を消去する\nwas playing（単数用）、played（単純過去）、are playing（現在進行形）はいずれも不適切。\n\n【答え】\nwere playing\n\n【確かめ】\n主語Theyに対応するwereが使われ、was playingと混同していないか確認する。\n\n【よくあるまちがい】\n主語がheやsheのときのwasを、theyやweのときにも使ってしまうミス。\n\n【ここが絶対】\n主語がheやsheのときはwas、theyやweのときはwereを使うと覚える。',
    pitfall: '主語がheやsheのときはwas、theyやweのときはwereを使う。混同しないこと。',
  },
  {
    id: 'grade_j2_eigo_13',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の文を「〜していませんでした」という過去進行形の否定文に書きかえなさい。\nThey were studying then.',
    answer: "They weren't studying then.",
    hint: '過去進行形の否定文はbe動詞のあとにnotを置く。',
    explanation:
      '【何を聞かれているか】\n"They were studying then."を「〜していませんでした」という過去進行形の否定文に書きかえる問題。\n\n【なぜbe動詞の後にnotを置くのか】\n過去進行形の否定文は、be動詞（was/were）の後にnotを置いて表すという決まりがある。\n\n【ポイント1】be動詞の位置を確認する\n過去進行形の文のbe動詞はwere。\n\n【ポイント2】否定文の形を確認する\nwereの後にnotをつけてweren\'t（were not）とする。\n\n【ポイント3】完成した文を確認する\n"They weren\'t studying then."という型になる。\n\n【答え】\nThey weren\'t studying then.\n\n【確かめ】\nwereの直後にnot（weren\'t）が入っているか確認する。\n\n【よくあるまちがい】\nstudyingの前にnotを置くなど、位置を誤ってしまうミス。\n\n【ここが絶対】\n過去進行形の否定文＝be動詞の過去形+not+動詞のing形、という型でセットで覚える。',
  },
  {
    id: 'grade_j2_eigo_14',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nWhen the phone rang, I (　) dinner in the kitchen. （電話が鳴ったとき、わたしは台所で夕食を作っているところでした。）',
    answer: 'was cooking',
    choices: ['was cooking', 'cooked', 'cook', 'cooking'],
    hint: '「〜していたときに、別の動作が起きた」という文では、進行中の動作を過去進行形で表す。',
    explanation:
      '【解説】\n「〜しているときに…が起きた」という文では、「〜していた（進行中の動作）」を過去進行形、「…が起きた（一瞬の出来事）」を過去形で表すことが多い。ここでは rang（過去形）が一瞬の出来事、料理していたことが進行中の動作なので was cooking が正しい。\n答え：was cooking',
    memoryTip: 'When+過去形の文, 主語+was/were+〜ing. の形をセットで覚える。',
  },

  // ============================================================
  // 未来表現（will / be going to） 5問 (15-19)
  // ============================================================
  {
    id: 'grade_j2_eigo_15',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る単語はどれですか。\nI (　) call you tomorrow. （わたしは明日あなたに電話します。）',
    answer: 'will',
    choices: ['will', 'am', 'do', 'was'],
    hint: '未来のことを表す助動詞。',
    explanation:
      '【何を聞かれているか】\n"I (　) call you tomorrow."（わたしは明日あなたに電話します。）の空欄に入る単語を選ぶ問題。\n\n【なぜwillを使うのか】\n「〜するつもりだ、〜するだろう」という未来のことを表すときは、willの後に動詞の原形を続けるという決まりがある。\n\n【ポイント1】willの意味を確認する\nwill＝未来のことを表す助動詞。\n\n【ポイント2】willの後の動詞の形を確認する\nwillの後は動詞の原形call。\n\n【ポイント3】他の選択肢を消去する\nam、do、wasはいずれも未来を表す助動詞ではない。\n\n【答え】\nwill\n\n【確かめ】\nwillの後にcall（原形）が続いているか確認する。\n\n【よくあるまちがい】\n未来のことなのにamやwasのような現在形・過去形を使ってしまうミス。\n\n【ここが絶対】\nwill+動詞の原形＝「〜するだろう、〜するつもりだ」という未来を表す型で覚える。',
  },
  {
    id: 'grade_j2_eigo_16',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る単語はどれですか。\nWe (　) going to visit Kyoto next week. （わたしたちは来週京都を訪れる予定です。）',
    answer: 'are',
    choices: ['are', 'is', 'will', 'was'],
    hint: '主語がWeのときのbe動詞。',
    explanation:
      '【何を聞かれているか】\n"We (　) going to visit Kyoto next week."（わたしたちは来週京都を訪れる予定です。）の空欄に入る単語を選ぶ問題。\n\n【なぜareを使うのか】\n「〜する予定だ」というすでに決まっている予定を表すbe going toの文で、主語We（複数）に対応するbe動詞はareになる。\n\n【ポイント1】be going toの形を確認する\nbe動詞+going to+動詞の原形。\n\n【ポイント2】主語Weのbe動詞を確認する\nWeは複数なので、be動詞はare。\n\n【ポイント3】他の選択肢を消去する\nis（三人称単数用）、will（別の未来表現）、was（過去形）はいずれも不適切。\n\n【答え】\nare\n\n【確かめ】\n主語Weに対応するareが選ばれ、isと混同していないか確認する。\n\n【よくあるまちがい】\nbe going toのbe動詞を、主語に合わせずisにしてしまうミス。\n\n【ここが絶対】\nbe going to＝「もう決まっている予定」を表し、be動詞は主語に合わせて変えると覚える。',
  },
  {
    id: 'grade_j2_eigo_17',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '「彼女は来週、新しいカバンを買うつもりです。」を表す正しい英文はどれですか。',
    answer: 'She is going to buy a new bag next week.',
    choices: [
      'She is going to buy a new bag next week.',
      'She is going to buys a new bag next week.',
      'She going to buy a new bag next week.',
      'She is buy going to a new bag next week.',
    ],
    hint: 'be going toのあとの動詞は原形。',
    explanation:
      '【解説】\n「〜するつもりだ」という前から決めていた予定は be going to + 動詞の原形 で表す。主語がsheなのでbe動詞はis。\n答え：She is going to buy a new bag next week.',
  },
  {
    id: 'grade_j2_eigo_18',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      "次の文の（　）に入る単語はどれですか。\nIt's cold in here. I (　) close the window. （ここは寒いですね。窓を閉めます。）",
    answer: 'will',
    choices: ['will', 'am going to', 'was', 'do'],
    hint: 'その場で決めたことを言うときはwillを使う。',
    explanation:
      '【解説】\nその場で思いついてすぐに決めたことを言うときは will を使う。一方、be going to は前もって決めていた予定に使う。ここでは「今、寒いと気づいて」その場で窓を閉めることを決めているので will が正しい。\n答え：will',
    pitfall: 'will（その場での決定）とbe going to（前からの予定）の使い分けに注意。',
  },
  {
    id: 'grade_j2_eigo_19',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nLook at those clouds! It (　) rain soon. （あの雲を見て！もうすぐ雨が降りそうです。）',
    answer: 'is going to',
    choices: ['is going to', 'will', 'was going to', 'is will'],
    hint: '目の前の証拠から判断する予測はbe going toを使う。',
    explanation:
      '【解説】\n目の前に見えている証拠（雲）をもとにした予測は be going to を使うことが多い。ここでは黒い雲を見て「雨が降りそうだ」と予測しているので is going to が正しい。\n答え：is going to',
  },

  // ============================================================
  // 助動詞（must / have to / should） 5問 (20-24)
  // ============================================================
  {
    id: 'grade_j2_eigo_20',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '「あなたはここで静かにしなければなりません。」を表す正しい英文はどれですか。',
    answer: 'You must be quiet here.',
    choices: [
      'You must be quiet here.',
      'You must to be quiet here.',
      'You musts be quiet here.',
      'You must being quiet here.',
    ],
    hint: 'mustのあとの動詞は原形。toはつけない。',
    explanation:
      '【何を聞かれているか】\n「あなたはここで静かにしなければなりません。」を表す正しい英文を選ぶ問題。\n\n【なぜmustの後にtoをつけないのか】\n「〜しなければならない」を表す助動詞mustは、後ろに動詞の原形を直接続け、不定詞のようにtoをつけないという決まりがある。\n\n【ポイント1】mustの形を確認する\nmust+動詞の原形。\n\n【ポイント2】toをつけないことを確認する\n"must to be"のようにtoをつけるのは誤り。\n\n【ポイント3】他の選択肢を消去する\nmusts（助動詞にsをつける誤り）、must being（ing形にする誤り）はいずれも不適切。\n\n【答え】\nYou must be quiet here.\n\n【確かめ】\nmustの直後にbe（原形）が続いており、toが入っていないか確認する。\n\n【よくあるまちがい】\nmustをwant toのような不定詞構文と混同し、to をつけてしまうミス。\n\n【ここが絶対】\nmustの後の動詞は原形のみ、toはつけないと覚える。',
  },
  {
    id: 'grade_j2_eigo_21',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '「彼は毎朝早く起きなければなりません。」を表す正しい英文はどれですか。',
    answer: 'He has to get up early every morning.',
    choices: [
      'He has to get up early every morning.',
      'He have to get up early every morning.',
      'He has to gets up early every morning.',
      'He must to get up early every morning.',
    ],
    hint: '主語が3人称単数（he）のときはhave toではなくhas toを使う。',
    explanation:
      '【何を聞かれているか】\n「彼は毎朝早く起きなければなりません。」を表す正しい英文を選ぶ問題。\n\n【なぜhas toを使うのか】\n「〜しなければならない」はhave toでも表せるが、主語がhe・she・itなど3人称単数のときは、haveをhasに変えてhas toとするという決まりがある。\n\n【ポイント1】主語の種類を確認する\n主語Heは3人称単数。\n\n【ポイント2】has toの形を確認する\nhave→has（3人称単数現在形）に変え、has toとする。\n\n【ポイント3】has toの後の動詞の形を確認する\nhas toの後の動詞は原形（get up）。\n\n【答え】\nHe has to get up early every morning.\n\n【確かめ】\nhaveがhasに変わっており、has toの後がget（原形）になっているか確認する。\n\n【よくあるまちがい】\n主語が3人称単数なのにhave toのままにしてしまうミス。\n\n【ここが絶対】\n主語が3人称単数でもmustはmustsのように変化しないが、have toはhas toに変化する点に注意する。',
    pitfall: '主語が3人称単数でもmustはmustsのように変化しないが、have toはhas toに変化する点に注意。',
  },
  {
    id: 'grade_j2_eigo_22',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '「あなたはもっと野菜を食べるべきです。」を表す正しい英文はどれですか。',
    answer: 'You should eat more vegetables.',
    choices: [
      'You should eat more vegetables.',
      'You should eats more vegetables.',
      'You should to eat more vegetables.',
      'You are should eat more vegetables.',
    ],
    hint: '「〜すべきだ」というアドバイスを表す助動詞。',
    explanation:
      '【何を聞かれているか】\n「あなたはもっと野菜を食べるべきです。」を表す正しい英文を選ぶ問題。\n\n【なぜshouldの後にtoをつけないのか】\n「〜すべきだ」というアドバイスを表す助動詞shouldは、後ろに動詞の原形を直接続け、toをつけないという決まりがある。\n\n【ポイント1】shouldの意味を確認する\nshould＝「〜すべきだ」というアドバイスを表す助動詞。\n\n【ポイント2】shouldの後の動詞の形を確認する\nshould+動詞の原形（eat）、toはつけない。\n\n【ポイント3】他の選択肢を消去する\nshould eats（3単現のsをつける誤り）、should to eat（toをつける誤り）、are should eat（be動詞と助動詞を混同する誤り）はいずれも不適切。\n\n【答え】\nYou should eat more vegetables.\n\n【確かめ】\nshouldの直後にeat（原形）が続いており、toやsが入っていないか確認する。\n\n【よくあるまちがい】\nshouldの後の動詞にtoをつけてしまうミス。\n\n【ここが絶対】\nshouldの後の動詞は原形のみ、toはつけないと覚える（must, can, willと同じグループ）。',
  },
  {
    id: 'grade_j2_eigo_23',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      "次の文の（　）に入る正しい形はどれですか。\nYou (　) touch that stove. It's very hot. （そのストーブにさわってはいけません。とても熱いです。）",
    answer: 'must not',
    choices: ['must not', "don't have to", 'should', "can't"],
    hint: '「〜してはいけない」という禁止を表す言い方。',
    explanation:
      "【解説】\n「〜してはいけない」という禁止は must not（mustn't）で表す。don't have to は「〜する必要がない」という意味で、禁止の意味にはならないので注意。\n答え：must not",
    pitfall:
      "must not（してはいけない＝禁止）と don't have to（する必要がない＝不必要）の意味のちがいを混同しないこと。",
  },
  {
    id: 'grade_j2_eigo_24',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      "次の文の（　）に入る正しい形はどれですか。\nYou (　) come to the party if you are busy. It's not necessary. （もし忙しいなら、パーティーに来る必要はありません。）",
    answer: "don't have to",
    choices: ["don't have to", 'must not', 'should', "can't"],
    hint: '「〜する必要がない」を表す言い方。',
    explanation:
      "【解説】\n「〜する必要がない」という意味はdon't have toで表す。文の最後にIt's not necessary.（それは必要ではありません）とあることから、禁止ではなく不必要の意味が入るとわかる。\n答え：don't have to",
  },

  // ============================================================
  // 不定詞（名詞的・副詞的・形容詞的用法） 6問 (25-30)
  // ============================================================
  {
    id: 'grade_j2_eigo_25',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI want (　) a doctor in the future. （わたしは将来、医者になりたいです。）',
    answer: 'to be',
    choices: ['to be', 'being', 'be', 'been'],
    hint: 'want のあとには〈to+動詞の原形〉が続く。',
    explanation:
      '【何を聞かれているか】\n"I want (　) a doctor in the future."（わたしは将来、医者になりたいです。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜto beを使うのか】\nwant to〜（〜したい）は不定詞の名詞的用法で、wantの後には〈to+動詞の原形〉を続けるという決まりがある。\n\n【ポイント1】want toの形を確認する\nwant+to+動詞の原形。\n\n【ポイント2】be動詞の原形を確認する\n「〜になる」という意味には、be動詞の原形beを使う。\n\n【ポイント3】他の選択肢を消去する\nbeing（ing形）、be（toが抜けている）、been（過去分詞形）はいずれも不適切。\n\n【答え】\nto be\n\n【確かめ】\nwantの後にto be（to+原形）が続いているか確認する。\n\n【よくあるまちがい】\ntoを抜かして"want be a doctor"としてしまうミス。\n\n【ここが絶対】\nwant to+動詞の原形＝「〜したい」という型でセットで覚える。',
  },
  {
    id: 'grade_j2_eigo_26',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nShe went to the library (　) some books. （彼女は本を借りるために図書館へ行きました。）',
    answer: 'to borrow',
    choices: ['to borrow', 'borrowing', 'borrow', 'borrowed'],
    hint: '「〜するために」は不定詞の副詞的用法で表す。',
    explanation:
      '【解説】\n「〜するために」という目的を表すときは不定詞の副詞的用法〈to+動詞の原形〉を使う。\n答え：to borrow',
  },
  {
    id: 'grade_j2_eigo_27',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI have a lot of homework (　) today. （わたしは今日やるべき宿題がたくさんあります。）',
    answer: 'to do',
    choices: ['to do', 'doing', 'did', 'done'],
    hint: '名詞のすぐあとに〈to+動詞の原形〉を続けて「〜するための、〜すべき」という意味を表す。',
    explanation:
      '【解説】\n不定詞の形容詞的用法は、名詞のすぐあとに〈to+動詞の原形〉を続けて「〜するための、〜すべき」という意味を表す。ここではhomework（宿題）を後ろから修飾している。\n答え：to do',
  },
  {
    id: 'grade_j2_eigo_28',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\n(　) English every day is important for you. （毎日英語を勉強することはあなたにとって大切です。）',
    answer: 'To study',
    choices: ['To study', 'Studying', 'Study', 'Studied'],
    hint: '文の最初で主語になる不定詞は〈To+動詞の原形〉の形。大文字で始める。',
    explanation:
      '【解説】\n不定詞の名詞的用法は文の主語にもなれる。文の最初に来るので、Toの最初の文字は大文字にする。\n動名詞（Studying）を使っても似た意味を表せるが、この問題では不定詞の形を選ぶ。\n答え：To study',
  },
  {
    id: 'grade_j2_eigo_29',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI was happy (　) the good news. （わたしはその良い知らせを聞いてうれしかったです。）',
    answer: 'to hear',
    choices: ['to hear', 'hearing', 'hear', 'heard'],
    hint: '感情の原因を表す不定詞の副詞的用法。',
    explanation:
      '【解説】\nhappy などの感情を表す形容詞のあとに〈to+動詞の原形〉を続けると、「〜して（感情の原因）」という意味になる。これも不定詞の副詞的用法の1つ。\n答え：to hear',
  },
  {
    id: 'grade_j2_eigo_30',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の日本語を「It is ... for ... to ...」の形を使って英語にしなさい。\nこの本を読むことは、わたしにとって難しいです。',
    answer: 'It is difficult for me to read this book.',
    hint: '「〜することは…にとって〜だ」は It is 〜 for 人 to 〜. の形で表す。',
    explanation:
      '【何を聞かれているか】\n「この本を読むことは、わたしにとって難しいです。」を「It is ... for ... to ...」の形を使って英語にする問題。\n\n【なぜItが形式上の主語なのか】\n〈It is+形容詞+for+人+to+動詞の原形〉の構文では、Itはあとに続くto read this book（この本を読むこと）を指す形式上の主語として使われる。\n\n【ポイント1】構文の基本の形を確認する\nIt is+形容詞+for+人+to+動詞の原形。\n\n【ポイント2】語句を当てはめる\n形容詞difficult、人me、動詞the原形read this bookを当てはめる。\n\n【ポイント3】完成した文を確認する\n"It is difficult for me to read this book."という型になる。\n\n【答え】\nIt is difficult for me to read this book.\n\n【確かめ】\nItの後にis difficult、for me、to read this bookの順に正しく並んでいるか確認する。\n\n【よくあるまちがい】\nforとtoの位置を逆にしてしまうミス。\n\n【ここが絶対】\nIt is+形容詞+for+人+to+動詞の原形＝「〜することは…にとって〜だ」という型で覚える。',
  },

  // ============================================================
  // 動名詞 5問 (31-35)
  // ============================================================
  {
    id: 'grade_j2_eigo_31',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI enjoy (　) tennis with my friends. （わたしは友だちとテニスをするのを楽しみます。）',
    answer: 'playing',
    choices: ['playing', 'to play', 'play', 'played'],
    hint: 'enjoyのあとには動名詞（〜ing）が続く。',
    explanation:
      '【解説】\nenjoy（〜を楽しむ）のあとには動名詞（動詞のing形）を続ける。enjoyは不定詞を目的語にとらない動詞なので注意。\n答え：playing',
    pitfall: 'enjoy to playとしないこと。enjoyのあとは必ずing形。',
  },
  {
    id: 'grade_j2_eigo_32',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nShe is good at (　) pictures. （彼女は絵を描くのが得意です。）',
    answer: 'drawing',
    choices: ['drawing', 'draw', 'to draw', 'drew'],
    hint: '前置詞atのあとには動名詞が続く。',
    explanation:
      '【解説】\n前置詞（at, in, of など）のあとに動詞を続けるときは、動名詞（〜ing）の形にする。be good at 〜ing で「〜するのが得意だ」という意味。\n答え：drawing',
  },
  {
    id: 'grade_j2_eigo_33',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\n(　) in the sea is a lot of fun. （海で泳ぐことはとても楽しいです。）',
    answer: 'Swimming',
    choices: ['Swimming', 'Swim', 'To swimming', 'Swam'],
    hint: '文の主語になる動名詞は文の最初に来て大文字で始める。',
    explanation:
      '【解説】\n動名詞（動詞のing形）は名詞と同じように文の主語になれる。文の最初に来るのでSの文字は大文字にする。\n答え：Swimming',
  },
  {
    id: 'grade_j2_eigo_34',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nHe finished (　) his homework before dinner. （彼は夕食前に宿題をやり終えました。）',
    answer: 'doing',
    choices: ['doing', 'to do', 'do', 'did'],
    hint: 'finishのあとには動名詞だけが続き、不定詞は続かない。',
    explanation:
      '【何を聞かれているか】\n"He finished (　) his homework before dinner."（彼は夕食前に宿題をやり終えました。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜ動名詞を使うのか】\nfinish（〜し終える）の後には動名詞（〜ing）だけを続けることができ、不定詞（to＋動詞の原形）は続けられないという決まりがある。\n\n【ポイント1】finishの後の形を確認する\nfinish＋動詞のing形（動名詞）。\n\n【ポイント2】不定詞との違いを確認する\n"finish to do"のように不定詞を続けるのは誤り。\n\n【ポイント3】他の選択肢を消去する\nto do（不定詞）、do（原形）、did（過去形）はいずれもfinishの後には使えない。\n\n【答え】\ndoing\n\n【確かめ】\nfinishedの後がdoing（動名詞）になっているか確認する。\n\n【よくあるまちがい】\nfinishの後に不定詞to doを使ってしまうミス。\n\n【ここが絶対】\nfinishの後はing形のみ、finish to doとは言わないと覚える（enjoy, stop, mindと同じグループ）。',
    pitfall: 'finish to doとは言わない。finishのあとはing形のみ。',
  },
  {
    id: 'grade_j2_eigo_35',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '「彼は手紙を書くのをやめました。」という意味になる正しい英文はどれですか。',
    answer: 'He stopped writing a letter.',
    choices: [
      'He stopped writing a letter.',
      'He stopped to write a letter.',
      'He stopped write a letter.',
      'He stopped to writing a letter.',
    ],
    hint: 'stop+動名詞は「〜するのをやめる」、stop+to不定詞は「〜するために立ち止まる」という別の意味になる。',
    explanation:
      '【解説】\nstop+動名詞（stop writing）は「〜するのをやめる」という意味。一方、stop+to不定詞（stop to write）は「〜するために立ち止まる」という別の意味になるので注意。ここでは「手紙を書くのをやめた」なので stopped writing が正しい。\n答え：He stopped writing a letter.',
    pitfall: 'stop to writeにすると「（歩くのを）やめて手紙を書く（＝そのために立ち止まる）」という別の意味になってしまう。',
  },

  // ============================================================
  // 比較級・最上級 6問 (36-41)
  // ============================================================
  {
    id: 'grade_j2_eigo_36',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '次の文の（　）に入る正しい形はどれですか。\nTom is (　) than Ken. （トムはケンより背が高いです。）',
    answer: 'taller',
    choices: ['taller', 'more tall', 'tallest', 'tall'],
    hint: '短い形容詞の比較級はerをつける。',
    explanation:
      '【解説】\ntallのような短い（1〜2音節の）形容詞の比較級は、語尾にerをつけて作る。tall→taller。\nmore tallとは言わないので注意。\n答え：taller',
  },
  {
    id: 'grade_j2_eigo_37',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThis is the (　) mountain in Japan. （これは日本でいちばん高い山です。）',
    answer: 'highest',
    choices: ['highest', 'high', 'higher', 'most high'],
    hint: '最上級は語尾にestをつけて、前にtheを置く。',
    explanation:
      '【解説】\n短い形容詞の最上級は語尾にestをつけて作り、前にtheを置く。high→highest。the highest mountain in Japanで「日本でいちばん高い山」という意味になる。\n答え：highest',
  },
  {
    id: 'grade_j2_eigo_38',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThis cake is (　) than that one. （このケーキはあのケーキより良いです。）',
    answer: 'better',
    choices: ['better', 'gooder', 'best', 'more good'],
    hint: 'goodの比較級は不規則に変化する。',
    explanation:
      '【解説】\ngood（良い）の比較級は不規則に変化してbetterになる。gooderとは言わない。\ngood-better-bestの変化の形を覚えておく。\n答え：better',
    memoryTip: 'good-better-best（良い・より良い・いちばん良い）はセットで覚える。',
  },
  {
    id: 'grade_j2_eigo_39',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      "次の文の（　）に入る正しい形はどれですか。\nToday's weather is (　) than yesterday's. （今日の天気は昨日より悪いです。）",
    answer: 'worse',
    choices: ['worse', 'more bad', 'worst', 'badder'],
    hint: 'badの比較級は不規則に変化する。',
    explanation:
      '【解説】\nbad（悪い）の比較級は不規則に変化してworseになる。badder、more badとは言わない。\nbad-worse-worstの変化の形を覚えておく。\n答え：worse',
  },
  {
    id: 'grade_j2_eigo_40',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThis question is (　) than that one. （この問題はあの問題より難しいです。）',
    answer: 'more difficult',
    choices: ['more difficult', 'difficulter', 'most difficult', 'difficult'],
    hint: 'difficultのようにつづりの長い形容詞の比較級はmoreを前に置く。',
    explanation:
      '【解説】\ndifficult（難しい）のようにつづりが長い（2音節以上の）形容詞は、語尾にerをつけずに、前にmoreを置いて比較級を作る。\n答え：more difficult',
    pitfall: 'difficulterのように語尾にerをつけてしまうミスに注意。長い形容詞はmoreを使う。',
  },
  {
    id: 'grade_j2_eigo_41',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '次の日本語を「as ... as」を使って英語にしなさい。\nこの本はあの本と同じくらいおもしろいです。',
    answer: 'This book is as interesting as that one.',
    hint: '「〜と同じくらい…だ」は as+形容詞+as で表す。',
    explanation:
      '【解説】\n「〜と同じくらい…だ」というときは〈as+形容詞（原級）+as〉の形を使う。形容詞は比較級や最上級の形にせず、もとの形（原級）のままにする。\n答え：This book is as interesting as that one.',
    pitfall: 'as more interesting asのように比較級にしてしまわないこと。asとasの間の形容詞は原級のまま。',
  },

  // ============================================================
  // 接続詞（when / if / because / that） 5問 (42-46)
  // ============================================================
  {
    id: 'grade_j2_eigo_42',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る単語はどれですか。\nI was cooking dinner (　) he came home. （彼が家に帰ってきたとき、わたしは夕食を作っていました。）',
    answer: 'when',
    choices: ['when', 'if', 'because', 'that'],
    hint: '「〜するとき」を表す接続詞。',
    explanation: '【解説】\n「〜するとき」という意味を表す接続詞は when。\n答え：when',
  },
  {
    id: 'grade_j2_eigo_43',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      "次の文の（　）に入る単語はどれですか。\nI was tired (　) I didn't sleep well last night. （昨夜よく眠れなかったので、わたしは疲れていました。）",
    answer: 'because',
    choices: ['because', 'when', 'if', 'that'],
    hint: '理由を表す接続詞。',
    explanation: '【解説】\n「〜なので」という理由を表す接続詞は because。\n答え：because',
  },
  {
    id: 'grade_j2_eigo_44',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る単語はどれですか。\n(　) it rains tomorrow, we will stay home. （もし明日雨が降ったら、わたしたちは家にいます。）',
    answer: 'If',
    choices: ['If', 'When', 'Because', 'That'],
    hint: '「もし〜なら」という条件を表す接続詞。',
    explanation:
      '【解説】\n「もし〜なら」という条件を表す接続詞はif。文の最初に来るので、大文字のIfで始める。\nif〜の文の中では、未来のことでも現在形（rains）で表すことに注意。\n答え：If',
    pitfall: 'if節の中では未来のことでもwillを使わず現在形で表す（rainsであってwill rainではない）。',
  },
  {
    id: 'grade_j2_eigo_45',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る単語はどれですか。\nI think (　) she is right. （わたしは彼女が正しいと思います。）',
    answer: 'that',
    choices: ['that', 'if', 'when', 'because'],
    hint: 'think のあとに続けて「〜ということ」を表す接続詞。',
    explanation:
      '【解説】\nI think that 〜.（わたしは〜だと思う）のthatは「〜ということ」という意味を表す接続詞。この意味のthatは省略されることも多いが、ここでは接続詞としてthatを選ぶ。\n答え：that',
  },
  {
    id: 'grade_j2_eigo_46',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    passage:
      'Yuki likes rainy days because she can read books at home. When it rains, she makes hot tea and sits by the window with her favorite book. If the rain stops in the afternoon, she goes for a short walk in the park near her house.',
    question: '次の英文を読んで、質問に答えなさい。\n質問：Why does Yuki like rainy days?',
    answer: 'Because she can read books at home.（家で本を読むことができるから。）',
    hint: '最初の文のbecauseのあとに理由が書かれている。',
    explanation:
      '【解説】\n最初の文 Yuki likes rainy days because she can read books at home. の because のあとに理由が書かれている。becauseは「〜なので」という理由を表す接続詞。\nよって、ユキが雨の日を好きな理由は「家で本を読むことができるから」。\n答え：Because she can read books at home.（家で本を読むことができるから。）',
  },

  // ============================================================
  // 文型（SVOO・SVOCの基礎） 4問 (47-50)
  // ============================================================
  {
    id: 'grade_j2_eigo_47',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '「わたしは彼に手紙を送りました。」を表す正しい英文はどれですか。',
    answer: 'I sent him a letter.',
    choices: [
      'I sent him a letter.',
      'I sent a letter him.',
      'I sent to him a letter.',
      'I sent him to a letter.',
    ],
    hint: '「（人）に（もの）を〜する」はSVOOの形で、動詞のすぐあとに人、その次にものを置く。',
    explanation:
      '【解説】\n「（人）に（ものを）〜する」という文は、〈主語+動詞+人+もの〉のSVOO（第4文型）の形で表せる。動詞sent（sendの過去形）のすぐあとに人（him）、その次にもの（a letter）を置く。\n答え：I sent him a letter.',
  },
  {
    id: 'grade_j2_eigo_48',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の文をtoを使って書きかえなさい。\nShe showed me the picture.',
    answer: 'She showed the picture to me.',
    hint: '〈動詞+人+もの〉の文は〈動詞+もの+to+人〉に書きかえられる。',
    explanation:
      '【解説】\nSVOO（〈動詞+人+もの〉）の文は、多くの場合〈動詞+もの+to+人〉の形に書きかえられる。showed me the picture → showed the picture to me。\n答え：She showed the picture to me.',
  },
  {
    id: 'grade_j2_eigo_49',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の文型として正しいものはどれですか。\nThe news made her happy. （その知らせは彼女を幸せにしました。）',
    answer: 'S+V+O+C',
    choices: ['S+V+O+C', 'S+V+O+O', 'S+V+O', 'S+V'],
    hint: 'her（目的語）＝happy（補語）の関係が成り立つ文型を選ぶ。',
    explanation:
      '【解説】\nThe news made her happy. では、madeのあとにher（目的語）とhappy（補語）が続いている。her＝happy（彼女＝幸せ）という関係が成り立つので、この文はS+V+O+C（第5文型）の形。\n答え：S+V+O+C',
    pitfall: 'her（人）とhappy（形容詞）の間に「＝」の関係が成り立つのがSVOCの特徴。SVOOではO＝Oの関係にはならない。',
  },
  {
    id: 'grade_j2_eigo_50',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '「わたしたちはその犬をポチと呼びます。」を表す正しい英文はどれですか。',
    answer: 'We call the dog Pochi.',
    choices: [
      'We call the dog Pochi.',
      'We call Pochi the dog.',
      'We call to the dog Pochi.',
      'We call the dog to Pochi.',
    ],
    hint: '「（O）を（C）と呼ぶ」はcall+O+Cの形。',
    explanation:
      '【解説】\n「（O）を（C）と呼ぶ」はcall+目的語（O）+補語（C）のSVOCの形で表す。the dog（O）＝Pochi（C）の関係が成り立つので、動詞のあとに the dog、その次に Pochi を置く。\n答え：We call the dog Pochi.',
  },
];
