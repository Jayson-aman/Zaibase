import type { Figure } from './figures';

// 中学受験 英語「アルファベット・フォニックス・発音とつづり」拡張ユニット
// （eigo_s001〜eigo_s040）の教科書用図解。
// キーは lessons-eigo-ext01.ts の figureId と対応。
// 英語は「音」そのものを絵にできない教科なので、口の形の位置関係・分類の割合・
// 数の比較など、図にすることで本当に理解が進む箇所にだけ付けてある（40課中17課）。
export const lessonFigsEigoExt01: Record<string, Figure> = {
  // s001：大文字と小文字の形の関係（小さくしただけの字／形が変わる字）
  lf_eigoext01_001: {
    kind: 'pieChart',
    slices: [
      { label: '形が変わる字', value: 15, color: '#0EA5E9' },
      { label: '小さくしただけの字', value: 11, color: '#0369A1' },
    ],
    caption:
      '26字の大文字と小文字の関係。C-c、O-o、S-s、P-p、K-k など11字は大文字を小さくした形だが、A-a、B-b、D-d、E-e、G-g、R-r など15字は形そのものが変わる。まちがえやすいのは後者のグループ',
  },

  // s002：小文字の高さ3グループ（4本線のどこに書くか）
  lf_eigoext01_002: {
    kind: 'barChart',
    xLabel: '高さのグループ',
    yLabel: '字数',
    yMax: 16,
    bars: [
      { label: '上に出る', value: 7, color: '#0EA5E9' },
      { label: 'まん中だけ', value: 14, color: '#0369A1' },
      { label: '下に出る', value: 5, color: '#16A34A' },
    ],
    caption:
      '小文字26字を高さで分けた内訳。上に出る7字（b d f h k l t）、下に出る5字（g j p q y）、まん中だけの14字（a c e i m n o r s u v w x z）。4本線ではこの3グループを書き分ける',
  },

  // s003：アルファベット26字の並びと、歌の4つの区切り
  lf_eigoext01_003: {
    kind: 'numberLine',
    min: 1,
    max: 26,
    step: 1,
    points: [
      { x: 1, label: 'A' },
      { x: 7, label: 'G' },
      { x: 8, label: 'H' },
      { x: 16, label: 'P' },
      { x: 17, label: 'Q' },
      { x: 22, label: 'V' },
      { x: 23, label: 'W' },
      { x: 26, label: 'Z' },
    ],
    caption:
      'アルファベット26字を1番目から26番目まで並べた図。アルファベットの歌は A〜G／H〜P／Q〜V／W〜Z の4つに区切られる。M が13番目でちょうどまん中になる',
  },

  // s005：母音字・子音字・y の役割分担
  lf_eigoext01_005: {
    kind: 'pieChart',
    slices: [
      { label: '子音字（20）', value: 20, color: '#0369A1' },
      { label: '母音字（5）', value: 5, color: '#0EA5E9' },
      { label: '両方になる y', value: 1, color: '#F59E0B' },
    ],
    caption:
      '26字の役割。母音字は a・e・i・o・u の5字だけ。y は語頭では子音（yes, you）、語中・語末では母音（my, happy）として働く特別な字なので、別に数えてある',
  },

  // s006：短母音5つの口の形（舌の位置×口の開き）
  lf_eigoext01_006: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 1, y: 9, label: 'i (sit)' },
      { x: 2, y: 6, label: 'e (bed)' },
      { x: 3, y: 1, label: 'a (cat)' },
      { x: 6, y: 4, label: 'u (cup)' },
      { x: 8, y: 2, label: 'o (box)' },
    ],
    caption:
      '短母音5つを口の形で並べた図。横軸は舌の位置（左＝前寄り、右＝奥寄り）、たて軸は口の開き（上＝せまい、下＝大きく開く）。a はいちばん口を大きく横に開き、i はいちばんせまい。日本人が苦手な a・o・u は、どれも下のほうに位置する',
  },

  // s010：CVC（子音＋母音＋子音）の語の組み立て
  lf_eigoext01_010: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 5, y: 8 },
    ],
    sideLabels: ['①子音 c', '②母音 a', '③子音 t'],
    fill: true,
    caption:
      '英語の基本の語の形 CVC（子音＋母音＋子音）を3つの辺で表した図。cat は c－a－t の3つの音でできている。まん中の母音は短母音になり、この3つをつないで読む（ブレンディング）',
  },

  // s011：1つの長母音の音を表すつづりの通り数
  lf_eigoext01_011: {
    kind: 'barChart',
    xLabel: '長母音の音',
    yLabel: 'つづりの通り数',
    yMax: 6,
    bars: [
      { label: 'エイ', value: 3, color: '#0EA5E9' },
      { label: 'イー', value: 5, color: '#0369A1' },
      { label: 'アイ', value: 4, color: '#16A34A' },
      { label: 'オウ', value: 4, color: '#F59E0B' },
      { label: 'ユー', value: 3, color: '#64748B' },
    ],
    caption:
      '同じ長母音の音を表すつづりが何通りあるか（代表的なものだけ）。エイ＝a_e／ai／ay、イー＝ee／ea／e_e／ie／y、アイ＝i_e／igh／y／ie、オウ＝o_e／oa／ow／oe、ユー＝u_e／ue／ew。読むのは簡単でも、書くときにどれを選ぶかで迷う',
  },

  // s012：マジックE（子音＋母音＋子音＋e）の組み立て
  lf_eigoext01_012: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['①子音 c', '②母音 a → エイ', '③子音 k', '④e（読まない）'],
    fill: true,
    caption:
      'マジックE の語 cake を4つの辺で表した図。④の語末の e は音を出さないが、②の母音にアルファベット読み（長母音）をさせる働きをする。cap→cape、hop→hope、cut→cute も同じしくみ',
  },

  // s014：二重母音は口の形が動く音（動きの向き）
  lf_eigoext01_014: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 1, y: 9, label: 'イ' },
      { x: 9, y: 9, label: 'ウ' },
      { x: 3, y: 1, label: 'ア' },
      { x: 8, y: 2, label: 'オ' },
    ],
    segments: [
      [
        { x: 8, y: 2 },
        { x: 1, y: 9 },
      ],
      [
        { x: 3, y: 1 },
        { x: 9, y: 9 },
      ],
      [
        { x: 3, y: 1 },
        { x: 1, y: 9 },
      ],
    ],
    caption:
      '二重母音は、口の形が動きながら出る音。横軸は舌の位置、たて軸は口の開き（上＝せまい）。オ→イ が oi／oy（coin, boy）、ア→ウ が ou／ow（house, now）、ア→イ が i_e／igh／y（bike, night, my）。2つの音を切らず、なめらかに1つの音として出す',
  },

  // s017：語頭・語末に続けられる子音の数（日本語との比較）
  lf_eigoext01_017: {
    kind: 'barChart',
    xLabel: '位置',
    yLabel: '続けられる子音の数',
    yMax: 5,
    bars: [
      { label: '日本語（語頭）', value: 1, color: '#64748B' },
      { label: '英語（語頭）', value: 3, color: '#0EA5E9' },
      { label: '英語（語末）', value: 4, color: '#0369A1' },
    ],
    caption:
      '子音をいくつ続けられるかの比較。日本語は原則「子音＋母音」なので語頭の子音は1つだけ。英語は語頭に3つ（street, spring, scream）、語末に4つ（texts）まで並べられる。この差が日本人にとっての発音の壁になる',
  },

  // s021：文章に出てくる th の音の割合（有声と無声）
  lf_eigoext01_021: {
    kind: 'pieChart',
    slices: [
      { label: '有声（the, this, that）', value: 80, color: '#0EA5E9' },
      { label: '無声（think, three, month）', value: 20, color: '#0369A1' },
    ],
    caption:
      '英文を読むときに出てくる th の音のおおよその割合（のべ数）。the・this・that・they のように何度もくり返し使われる語が有声なので、実際の文章では有声の th のほうがはるかに多くなる。ただし語の種類の数で数えると無声の語のほうが多い',
  },

  // s026：文字の数と音の数のずれ（英語のつづりがむずかしい理由）
  lf_eigoext01_026: {
    kind: 'barChart',
    xLabel: '文字と音',
    yLabel: '数',
    yMax: 26,
    bars: [
      { label: '母音字', value: 5, color: '#0EA5E9' },
      { label: '母音の音', value: 20, color: '#0369A1' },
      { label: '子音字', value: 21, color: '#16A34A' },
      { label: '子音の音', value: 24, color: '#F59E0B' },
    ],
    caption:
      '英語の文字と音の数の比較（音の数はおおよその値）。とくに母音は、5つの文字で20前後の音を表さなければならない。だから1つの文字がいくつもの音を持つことになり、つづりと音がずれる。日本語のかなは1字が1つの音に対応する',
  },

  // s028：2音節語のアクセント位置（名詞と動詞のちがい）
  lf_eigoext01_028: {
    kind: 'barChart',
    xLabel: '品詞とアクセントの位置',
    yLabel: '割合（％）',
    yMax: 100,
    bars: [
      { label: '名詞・第1', value: 90, color: '#0EA5E9' },
      { label: '名詞・第2', value: 10, color: '#0369A1' },
      { label: '動詞・第1', value: 40, color: '#16A34A' },
      { label: '動詞・第2', value: 60, color: '#F59E0B' },
    ],
    caption:
      '2音節の語で、どちらの音節を強く読むかのおおよその割合。名詞はほとんどが第1音節（TEA-cher, STU-dent, WIN-dow）、動詞は第2音節が多い（be-GIN, for-GET, en-JOY）。present や record のように、位置がちがうと品詞と意味が変わる語もある',
  },

  // s029：語末の -s の3つの発音の割合
  lf_eigoext01_029: {
    kind: 'pieChart',
    slices: [
      { label: 'ズ（有声音のあと）', value: 70, color: '#0EA5E9' },
      { label: 'ス（無声音のあと）', value: 25, color: '#0369A1' },
      { label: 'イズ（s・sh・ch のあと）', value: 5, color: '#F59E0B' },
    ],
    caption:
      '複数形・三単現の -s の発音のおおよその割合。dogs・pens のように有声音のあとの「ズ」がいちばん多い。books・cats のような無声音のあとは「ス」、buses・boxes・watches のように音がぶつかるときだけ「イズ」となり音節が1つ増える',
  },

  // s030：語末の -ed の3つの発音の割合
  lf_eigoext01_030: {
    kind: 'pieChart',
    slices: [
      { label: 'ド（有声音のあと）', value: 60, color: '#0EA5E9' },
      { label: 'ト（無声音のあと）', value: 30, color: '#0369A1' },
      { label: 'イド（t・d のあと）', value: 10, color: '#F59E0B' },
    ],
    caption:
      '規則動詞の -ed の発音のおおよその割合。played・called のように有声音のあとは「ド」、looked・helped のような無声音のあとは「ト」、wanted・needed のように t・d のあとだけ「イド」となり音節が1つ増える',
  },

  // s031：強勢拍リズム（強く読む語の間隔は一定）
  lf_eigoext01_031: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'DOGS' },
      { x: 2, label: 'EAT' },
      { x: 3, label: 'BONES' },
    ],
    caption:
      '英語のリズム。強く読む語（DOGS・EAT・BONES）の間隔はほぼ等しくなる。The dogs will eat the bones. のように弱い語（the, will）が増えても、強く読む語が3つなら全体の長さはほとんど変わらない。弱い語はすきまに押しこまれて速く短く読まれる',
  },

  // s032：ヘボン式と訓令式でつづりが異なる音の割合
  lf_eigoext01_032: {
    kind: 'pieChart',
    slices: [
      { label: 'つづりが同じ音', value: 83, color: '#0EA5E9' },
      { label: 'つづりが異なる音', value: 20, color: '#F59E0B' },
    ],
    caption:
      '日本語の音（清音・濁音・半濁音・拗音を合わせておよそ100）のうち、ヘボン式と訓令式でつづりが異なるものの数。異なるのは し・ち・つ・ふ・じ・ぢ・づ と しゃ行・ちゃ行・じゃ行だけで、残りはまったく同じである',
  },
};
