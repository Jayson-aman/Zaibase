import type { Figure } from './figures';

// 高校受験 英語「助動詞・命令文・感嘆文・付加疑問」拡張ユニット（koko_eigo_s146〜koko_eigo_s180）の図解。
// キーは lessons-koko-eigo-ext05.ts の figureId と対応。
// 英語は図にしにくい教科なので、「確信の強さ」「丁寧さ」「時制で使える形」「意味の向き」など、
// ことばの位置関係を目で見ると理解が進む箇所にだけ付けてある（35課中15課）。
export const lessonFigsKokoEigoExt05: Record<string, Figure> = {
  // s148：can は現在・過去しか持てない。未来や不定詞は be able to が引き受ける
  lf_kokoeigoext05_148: {
    kind: 'coordinate',
    xRange: [0, 6],
    yRange: [0, 3],
    points: [
      { x: 1, y: 2, label: 'could' },
      { x: 2, y: 2, label: 'can' },
      { x: 3, y: 2, label: '×will can' },
      { x: 1, y: 1, label: 'was able to' },
      { x: 2, y: 1, label: 'is able to' },
      { x: 3, y: 1, label: 'will be able to' },
    ],
    caption:
      '横軸は時の流れ（1＝過去、2＝現在、3＝未来）。上段が can、下段が be able to。can は過去の could までしか持てず、未来には立てない（×will can）。形を変えられる be able to が、未来・不定詞・完了形を引き受ける',
  },

  // s153：推量の助動詞を「確信の強さ」×「言い方の控えめさ」の二軸に置く
  lf_kokoeigoext05_153: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 9, y: 1, label: 'must' },
      { x: 8, y: 2.5, label: 'will' },
      { x: 6.5, y: 4, label: 'should' },
      { x: 5, y: 5.5, label: 'may' },
      { x: 3.5, y: 7, label: 'could' },
      { x: 2, y: 8.5, label: 'might' },
      { x: 0.5, y: 1.5, label: "can't" },
    ],
    caption:
      '横軸は「そうだ」と思う度合い（右へ行くほど確信が強い）、縦軸は言い方の控えめさ（上へ行くほど控えめ）。must（〜にちがいない）と can\'t（〜のはずがない）は両端で言い切っており、might・could は確信も弱く言い方も控えめになる',
  },

  // s155：must は現在にしか立てない。過去・未来は have to が受け持つ
  lf_kokoeigoext05_155: {
    kind: 'coordinate',
    xRange: [0, 6.2],
    yRange: [0, 3],
    points: [
      { x: 1, y: 2, label: '×なし' },
      { x: 2.5, y: 2, label: 'must' },
      { x: 4, y: 2, label: '×なし' },
      { x: 1, y: 1, label: 'had to' },
      { x: 2.5, y: 1, label: 'have to' },
      { x: 4, y: 1, label: 'will have to' },
    ],
    caption:
      '横軸は時の流れ（1＝過去、2.5＝現在、4＝未来）。上段の must は現在にしか立てず、過去形も未来形も持たない。下段の have to は一般動詞なので、had to・will have to と自由に時制を変えられる',
  },

  // s157：not をつけたときの落ち方が must と have to でまるで違う
  lf_kokoeigoext05_157: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [-3, 3],
    points: [
      { x: 1, y: 2, label: 'must' },
      { x: 3, y: 2, label: 'have to' },
      { x: 1, y: -2, label: 'must not' },
      { x: 3, y: 0, label: "don't have to" },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 1, y: -2 },
      ],
      [
        { x: 3, y: 2 },
        { x: 3, y: 0 },
      ],
    ],
    caption:
      '縦軸は意味の向き（＋2＝しなければならない／0＝しなくてよい／−2＝してはいけない）。左が must の列、右が have to の列。not をつけると must は下の「禁止」まで落ちるが、have to は真ん中の「自由」で止まる。同じ not でも落ち方が違う',
  },

  // s158：推量を表す助動詞の確信度の目安
  lf_kokoeigoext05_158: {
    kind: 'barChart',
    yLabel: '確信の度合い（％・目安）',
    yMax: 100,
    bars: [
      { label: 'might', value: 25 },
      { label: 'may', value: 40 },
      { label: 'should', value: 70 },
      { label: 'will', value: 85 },
      { label: 'must', value: 95 },
    ],
    caption:
      '「彼は疲れている」と推量するときの確信度のおおよその目安。must（〜にちがいない）が最も強く、might（ひょっとすると）が最も弱い。否定側で「〜のはずがない」と言い切るときは can\'t を使う（must not は禁止の意味になる）',
  },

  // s160：義務・助言を表す表現の強さの段階
  lf_kokoeigoext05_160: {
    kind: 'barChart',
    yLabel: '強さの目安（％）',
    yMax: 100,
    bars: [
      { label: 'should', value: 50 },
      { label: 'had better', value: 70 },
      { label: 'have to', value: 85 },
      { label: 'must', value: 95 },
    ],
    caption:
      'すすめる強さの目安。should（〜したほうがよい）がいちばんおだやかで、had better は「そうしないとまずい」という警告、have to は外の事情による必要、must は話し手の強い判断。目上の人への助言には should や Why don\'t you 〜? を使う',
  },

  // s163：will と be going to は「いつ決めたか」で分かれる
  lf_kokoeigoext05_163: {
    kind: 'numberLine',
    min: -3,
    max: 3,
    step: 1,
    points: [
      { x: -2, label: '前から決めていた' },
      { x: 0, label: '話す瞬間' },
      { x: 2, label: '実行する未来' },
    ],
    caption:
      '横軸は時間の流れ（左が過去、右が未来）。be going to は左の点、つまり話す前にすでに決まっていた予定を表す。will は 0 の点、つまり話しながらその場で決めた意志を表す。実行するのはどちらも右の未来である',
  },

  // s165：依頼・希望を表す言い方の丁寧さ
  lf_kokoeigoext05_165: {
    kind: 'barChart',
    yLabel: '丁寧さの目安（％）',
    yMax: 100,
    bars: [
      { label: 'want to', value: 30 },
      { label: 'Will you', value: 45 },
      { label: 'would like to', value: 75 },
      { label: 'Would you', value: 80 },
    ],
    caption:
      'want to より would like to、Will you より Would you のほうが丁寧になる。would は will の過去形だが過去の意味はなく、過去形にして一歩引くことで丁寧さを作っている。Would you like 〜? は相手へのすすめ、Would you 〜? は自分のための依頼',
  },

  // s166：used to / would often が表す時間の範囲
  lf_kokoeigoext05_166: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 2,
    segments: [{ from: 1, to: 5 }],
    points: [{ x: 8.5, label: '現在' }],
    caption:
      '太い線の部分が used to / would often の表す時期。過去のある期間くり返していた動作（または続いていた状態）を指し、右端の現在ではもうしていない、という含みがある。状態を表すときは would が使えず、used to だけになる',
  },

  // s167：Shall I と Shall we は答え方まで別
  lf_kokoeigoext05_167: {
    kind: 'coordinate',
    xRange: [0, 4.5],
    yRange: [0, 3],
    points: [
      { x: 1, y: 2, label: 'Shall I 〜?' },
      { x: 1, y: 1, label: 'Yes, please.' },
      { x: 3, y: 2, label: 'Shall we 〜?' },
      { x: 3, y: 1, label: "Yes, let's." },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 1, y: 1 },
      ],
      [
        { x: 3, y: 2 },
        { x: 3, y: 1 },
      ],
    ],
    caption:
      '左は自分だけが動く申し出（Shall I 〜? ＝〜しましょうか）で、答えは Yes, please. / No, thank you.。右は二人でする提案（Shall we 〜? ＝いっしょに〜しましょうか）で、答えは Yes, let\'s. / No, let\'s not.。主語の I と we が答え方まで決める',
  },

  // s170：依頼表現の丁寧さの階段
  lf_kokoeigoext05_170: {
    kind: 'barChart',
    yLabel: '丁寧さの目安（％）',
    yMax: 100,
    bars: [
      { label: 'Can you', value: 30 },
      { label: 'Will you', value: 40 },
      { label: 'Could you', value: 70 },
      { label: 'Would you', value: 75 },
      { label: 'mind 〜ing', value: 90 },
    ],
    caption:
      '相手に何かを頼む表現の丁寧さの目安。can → could、will → would と過去形にすると一歩引いた言い方になり、相手に断る余地が生まれる。いちばん右は Would you mind 〜ing?（〜していただけませんか）で、引き受ける答えは Not at all.',
  },

  // s172：許可を求める表現の丁寧さ
  lf_kokoeigoext05_172: {
    kind: 'numberLine',
    min: 0,
    max: 100,
    step: 25,
    points: [
      { x: 15, label: 'Can I' },
      { x: 45, label: 'Is it OK if I' },
      { x: 70, label: 'May I' },
      { x: 92, label: 'Could I' },
    ],
    caption:
      '許可を求める表現の丁寧さの目安（右へ行くほど改まった言い方）。友だちには Can I 〜?、店や先生には May I 〜? / Could I 〜? を使う。May I と Could I の丁寧さはほぼ同じで、May I のほうがあらたまった響きになる',
  },

  // s175：命令文から依頼へ——強制力と丁寧さ
  lf_kokoeigoext05_175: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 1, y: 9, label: '命令文' },
      { x: 3, y: 7.5, label: 'please＋命令文' },
      { x: 5, y: 5.5, label: 'Will you?' },
      { x: 6.5, y: 3.5, label: 'Could you?' },
      { x: 7.8, y: 2, label: 'mind 〜ing?' },
    ],
    caption:
      '横軸は丁寧さ（右へ行くほど丁寧）、縦軸は強制力（上へ行くほど強い）。命令文がいちばん直接的で相手に選ぶ余地がなく、Could you 〜? や Would you mind 〜ing? へ進むほど、相手が断れる余地が生まれる。目上の人には右下の言い方を選ぶ',
  },

  // s179：付加疑問文はたすき掛け
  lf_kokoeigoext05_179: {
    kind: 'coordinate',
    xRange: [0, 3.6],
    yRange: [0, 3],
    points: [
      { x: 1, y: 2, label: '本文が肯定' },
      { x: 1, y: 1, label: '本文が否定' },
      { x: 2.5, y: 2, label: '肯定のタグ' },
      { x: 2.5, y: 1, label: '否定のタグ' },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 2.5, y: 1 },
      ],
      [
        { x: 1, y: 1 },
        { x: 2.5, y: 2 },
      ],
    ],
    caption:
      '線がたすき掛けになっているのがポイント。本文が肯定なら否定の短縮形のタグ（You are a student, aren\'t you?）、本文が否定なら肯定のタグ（You don\'t like natto, do you?）をつける。タグの主語は必ず代名詞に直す（Tom → he）',
  },

  // s180：否定疑問文への答えは、英語と日本語で「はい・いいえ」が入れかわる
  lf_kokoeigoext05_180: {
    kind: 'coordinate',
    xRange: [0, 4.2],
    yRange: [0, 3],
    points: [
      { x: 1, y: 2, label: 'Yes, I do.' },
      { x: 2.5, y: 2, label: 'いいえ、好き' },
      { x: 1, y: 1, label: "No, I don't." },
      { x: 2.5, y: 1, label: 'はい、好かない' },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 2.5, y: 2 },
      ],
      [
        { x: 1, y: 1 },
        { x: 2.5, y: 1 },
      ],
    ],
    caption:
      'Don\'t you like natto?（納豆が好きではないのですか）への答え。左が英語、右がその日本語訳。英語は答えの中身が肯定なら Yes、否定なら No と決まるが、日本語は質問に同意するかどうかで決まるため、訳すと「はい」と「いいえ」が入れかわる',
  },
};
