import type { Figure } from './figures';

// 高校受験 英語「不定詞・動名詞・分詞」拡張ユニット（koko_eigo_s256〜koko_eigo_s295）の教科書用図解。
// キーは lessons-koko-eigo-ext08.ts の figureId と対応（40課中18課）。
// 英語は図にしにくい教科なので、「語順を四角の枠に見立てる」「分類の割合」
// 「2軸で使い分けを整理する」など、図にして本当に理解が進む箇所にだけ付けてある。
// 語順の図は、四角形の辺を①→②→③→④の順にたどると英語の並びになるようにしてある。
export const lessonFigsKokoEigoExt08: Record<string, Figure> = {
  // s256：不定詞の三用法の内訳（名詞的用法が最も多い）
  lf_kokoeigoext08_256: {
    kind: 'pieChart',
    slices: [
      { label: '名詞的用法', value: 45, color: '#0EA5E9' },
      { label: '副詞的用法', value: 35, color: '#0369A1' },
      { label: '形容詞的用法', value: 20, color: '#16A34A' },
    ],
    caption: '中学教科書・高校入試の英文に現れる不定詞のおおよその内訳。名詞的用法（want to〜 など動詞の目的語）が最も多く、次いで副詞的用法（〜するために・〜して）。形容詞的用法（something to eat など）は比較的少ないが、語順を問う問題として出やすい',
  },

  // s257：主語になる不定詞の語順（動詞は必ず単数扱い）
  lf_kokoeigoext08_257: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①To＋動詞の原形（主語のかたまり）', '②is / was（単数扱い）', '③形容詞・名詞', '④.'],
    fill: true,
    caption: '主語になる不定詞の語順。左上から時計回りに①→②→③→④とたどる。①のかたまり全体が一つの事がらなので、②の動詞は are ではなく is になる。To read many books is important. のように、中に複数形の名詞が入っていても is のまま',
  },

  // s260：名詞を修飾する語の位置（1語なら前・2語以上なら後ろ）
  lf_kokoeigoext08_260: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①1語の修飾語（cold）', '②名詞（water）', '③2語以上のかたまり（to drink）', '④＝cold water to drink'],
    fill: true,
    caption: '英語の修飾の位置。名詞を説明する語は、1語なら名詞の前（①）、2語以上のかたまりなら名詞の後ろ（③）に置く。to＋原形は必ず2語以上なので、不定詞の形容詞的用法は例外なく名詞の後ろに来る。分詞（a sleeping baby ／ a baby sleeping in the bed）も同じ原則で位置が決まる',
  },

  // s261：-thing ＋ 形容詞 ＋ to不定詞 の語順
  lf_kokoeigoext08_261: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①something / anything / nothing', '②形容詞（cold・hot・new）', '③to＋動詞の原形', '④＝something cold to drink'],
    fill: true,
    caption: '-thing で終わる代名詞に形容詞と不定詞が付くときの語順。ふつうの名詞と違い、形容詞は②のように必ずうしろに置く（× cold something）。不定詞はさらにそのうしろ（③）に来る。else を入れる場合は②と③の間',
  },

  // s264：目的を表す副詞的用法（文が完成したあとに付け足す）
  lf_kokoeigoext08_264: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①主語', '②動詞＋（目的語・場所）＝ここで文は完成', '③to＋動詞の原形（〜するために）', '④.'],
    fill: true,
    caption: '目的を表す副詞的用法の語順。②までで文として成立しているところに、③が付け足される。だから③を消しても文は壊れない（I went to the library. だけで成立する）。この「消しても成り立つか」が三用法の判定法になる',
  },

  // s266：感情の原因を表す副詞的用法（気持ちが先、理由があと）
  lf_kokoeigoext08_266: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①主語', '②be動詞＋感情の形容詞（glad・sad・surprised）', '③to＋動詞の原形（〜して）', '④.'],
    fill: true,
    caption: '感情の原因を表す副詞的用法。日本語は「会えてうれしい」と理由を先に言うが、英語は②で気持ちを先に述べ、③でその理由をあとから足す。②が be動詞＋感情の形容詞になっていれば、③は「〜するために」ではなく「〜して」と訳す',
  },

  // s269：疑問詞＋不定詞（動詞＋人＋how to〜）の語順
  lf_kokoeigoext08_269: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①動詞（tell・teach・show）', '②人（me・him）', '③疑問詞（how・what・where）', '④to＋動詞の原形'],
    fill: true,
    caption: 'tell / teach / show を使うときの語順。②の人を先に置き、③④のかたまり（how to use this machine など）をそのうしろに置く。③④全体で一つの名詞のはたらきをするので、長くても②の前に出すことはできない。know / learn のように人を置かない動詞では②を飛ばす',
  },

  // s272：形式主語 It の文の語順
  lf_kokoeigoext08_272: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①It（形式主語・訳さない）', '②is / was ＋形容詞', '③（for＋人）', '④to＋動詞の原形＝本当の主語'],
    fill: true,
    caption: '形式主語の文の語順。①の It は「それは」と訳さず、本当の主語は④である。「だれにとって」を示すときは③に for＋人（目的格）を入れる。人の性質を表す形容詞（kind・careless）のときだけ、③は of＋人 になる',
  },

  // s275：It takes ＋人＋時間＋to〜 の語順（for を入れない）
  lf_kokoeigoext08_275: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①It takes / It took', '②人（me・him）※for は付けない', '③時間（thirty minutes）', '④to＋動詞の原形'],
    fill: true,
    caption: '所要時間を表す It takes の語順。②に人を置くとき前置詞 for は付けない（× It takes for me 〜）。It is easy for me to swim. の for につられる誤りが最も多い。費用を言うときは①を It costs にして、③に金額を置く',
  },

  // s276：too 〜 to … の語順（not がないのに否定の意味）
  lf_kokoeigoext08_276: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①主語＋be動詞（または一般動詞）', '②too', '③形容詞・副詞', '④to＋動詞の原形＝「…できない」'],
    fill: true,
    caption: 'too 〜 to … の語順。②の too は「必要以上に」という否定的な意味を持つため、文に not がなくても④が実現しないことを表す。so 〜 that … can\'t に書きかえるときは、that 節が独立した文になるので目的語の it を補う必要がある',
  },

  // s278：形容詞・副詞 ＋ enough ＋ to〜 の語順（enough はうしろ）
  lf_kokoeigoext08_278: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①主語＋be動詞（または一般動詞）', '②形容詞・副詞（old・fast）', '③enough', '④to＋動詞の原形＝「…できる」'],
    fill: true,
    caption: 'enough を使う文の語順。②と③の順に注意する。enough は形容詞・副詞のうしろ（old enough／fast enough）に置き、前に置くのは名詞を修飾するとき（enough money）だけ。too 〜 to … が否定の意味なのに対し、こちらは肯定の意味になる',
  },

  // s280：want ＋人＋ to〜 の語順（動作をする人が変わる）
  lf_kokoeigoext08_280: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①主語＋want(s) / told / asked', '②人（目的格：me・him・her）', '③to＋動詞の原形', '④残りの語句'],
    fill: true,
    caption: 'want / tell / ask ＋人＋ to〜 の語順。②の人が③の動作をする（I want you to help me. なら手伝うのは you）。②を入れなければ①の主語が動作をする（I want to help you.）。否定は not to〜 とし、not は③の to の前に置く',
  },

  // s284：主語・補語になる動名詞（動詞は単数扱い）
  lf_kokoeigoext08_284: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①動詞の-ing形＋続く語句（主語のかたまり）', '②is / was（単数扱い）', '③形容詞・名詞', '④.'],
    fill: true,
    caption: '動名詞が主語になるときの語順。①のかたまり全体が一つの事がらなので②は is になる。Reading English books is not easy. のように、中の名詞が複数形（books）でも are にしない。不定詞が主語のときとまったく同じ扱いである',
  },

  // s288：目的語に何をとるかによる動詞の分類（中学で覚える20語）
  lf_kokoeigoext08_288: {
    kind: 'pieChart',
    slices: [
      { label: '動名詞のみ 8語', value: 8, color: '#0EA5E9' },
      { label: '不定詞のみ 7語', value: 7, color: '#0369A1' },
      { label: '両方とれる 5語', value: 5, color: '#16A34A' },
    ],
    caption: '中学で覚える20語の内訳。動名詞のみ8語＝enjoy・finish・stop・mind・practice・keep・give up・avoid／不定詞のみ7語＝want・hope・decide・promise・wish・expect・plan／両方5語＝like・love・begin・start・continue。動名詞のみが最大の40%を占める',
  },

  // s290：to不定詞（これから）と動名詞（すでに）の対比
  lf_kokoeigoext08_290: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 4],
    points: [
      { x: 1, y: 3, label: 'remember to do＝忘れずに〜する' },
      { x: 2, y: 3, label: 'remember doing＝〜したのを覚えている' },
      { x: 1, y: 2, label: 'forget to do＝〜するのを忘れる' },
      { x: 2, y: 2, label: 'forget doing＝〜したのを忘れる' },
      { x: 1, y: 1, label: 'stop to do＝〜するために立ち止まる' },
      { x: 2, y: 1, label: 'stop doing＝〜するのをやめる' },
    ],
    caption: '横軸の左（x＝1）が to不定詞、右（x＝2）が動名詞。縦は動詞の種類（上から remember・forget・stop）。左の列はどれも「これからする動作」、右の列はどれも「すでにした（している）動作」を表す。stop だけは to不定詞が目的語ではなく「〜するために」を表す副詞的用法になる',
  },

  // s293：分詞1語は名詞の前
  lf_kokoeigoext08_293: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①冠詞・所有格（a / the / my）', '②分詞1語（sleeping・broken）', '③名詞（baby・window）', '④＝a sleeping baby'],
    fill: true,
    caption: '分詞が1語だけのときの語順。ふつうの形容詞と同じく②のように名詞の前に置く。冠詞は分詞よりさらに前（①）。語句が付いて2語以上になった瞬間、かたまりは名詞の後ろに回る（a baby sleeping in the bed）',
  },

  // s294：分詞が2語以上なら名詞の後ろ
  lf_kokoeigoext08_294: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①名詞（the boy）', '②分詞（running・written）', '③続く語句（in the park）', '④文の動詞（is my brother）'],
    fill: true,
    caption: '分詞が2語以上のかたまりになったときの語順。①の名詞のうしろに②③がまとめて置かれ、そのあとに④の文の動詞が来る。The boy running in the park is my brother. では①〜③までが主語なので、動詞は the park ではなく The boy に合わせて is になる',
  },

  // s295：名詞のうしろに続く形の識別
  lf_kokoeigoext08_295: {
    kind: 'polygon',
    points: [
      { x: 0, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['①名詞', '②-ing／過去分詞＝分詞（〜している・〜される）', '②′ to＋原形＝不定詞（〜するための）', '②″ 主語＋動詞＝関係代名詞の省略'],
    fill: true,
    caption: '名詞のうしろに続く三つの形の識別。①の名詞の直後に来るものを見る。-ing や過去分詞なら分詞（the boy running in the park）、to＋原形なら不定詞の形容詞的用法（something to eat）、主語＋動詞なら関係代名詞の省略（the book I read yesterday）。いずれの場合も、そのかたまりのあとに文の動詞があるかを必ず確認する',
  },
};
