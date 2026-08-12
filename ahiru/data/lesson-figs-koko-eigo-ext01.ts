import type { Figure } from './figures';

// 高校受験 英語「発音・アクセント・語形変化・語彙」拡張ユニット（koko_eigo_s001〜koko_eigo_s035）の教科書用図解。
// キーは lessons-koko-eigo-ext01.ts の figureId と対応。
// 英語は「語そのもの」を図に描けない教科なので、分類ごとの語数の内訳・アクセントのある音節の位置・
// 程度や意識の強さといった、数量や位置に置きかえられる箇所にだけ付けてある（35課中15課）。
// 語数はすべて本文中に列挙した語の実数と一致させてある。
export const lessonFigsKokoEigoExt01: Record<string, Figure> = {
  // s002：つづり字 ea の発音の内訳（本文に挙げた16語）
  lf_kokoeigoext01_002: {
    kind: 'barChart',
    xLabel: 'ea の発音',
    yLabel: '語数',
    yMax: 10,
    bars: [
      { label: '[iː]', value: 8, color: '#0EA5E9' },
      { label: '[e]', value: 5, color: '#0369A1' },
      { label: '[eɪ]', value: 3, color: '#16A34A' },
    ],
    caption:
      '本文で挙げた ea の語16語の内訳。[iː] が eat・sea・teach・easy・please・meat・speak・read の8語、[e] が head・bread・ready・weather・heavy の5語、[eɪ] は great・break・steak の3語だけ。少数派の [e] と [eɪ] を語ごと覚えるのが早い',
  },

  // s006：名詞と動詞でアクセントが移る語（アクセントのある音節の番号）
  lf_kokoeigoext01_006: {
    kind: 'barChart',
    xLabel: '語（名＝名詞・動＝動詞）',
    yLabel: 'アクセントのある音節（先頭から）',
    yMax: 3,
    bars: [
      { label: 'present 名', value: 1, color: '#0EA5E9' },
      { label: 'present 動', value: 2, color: '#0369A1' },
      { label: 'record 名', value: 1, color: '#0EA5E9' },
      { label: 'record 動', value: 2, color: '#0369A1' },
      { label: 'object 名', value: 1, color: '#0EA5E9' },
      { label: 'object 動', value: 2, color: '#0369A1' },
    ],
    caption:
      'つづりが同じでも品詞でアクセントが移る語。名詞は第1音節（薄い色）、動詞は第2音節（濃い色）に来る。「名前は前、動くと後ろ」と覚える。increase・progress も同じ動き方をする',
  },

  // s007：語尾ごとに、アクセントが語末から何番目の音節に来るか
  lf_kokoeigoext01_007: {
    kind: 'barChart',
    xLabel: '語尾',
    yLabel: '語末から数えた音節の番号',
    yMax: 4,
    bars: [
      { label: '-tion', value: 2, color: '#0EA5E9' },
      { label: '-ic', value: 2, color: '#0EA5E9' },
      { label: '-ial', value: 2, color: '#0EA5E9' },
      { label: '-ity', value: 3, color: '#0369A1' },
      { label: '-ical', value: 3, color: '#0369A1' },
      { label: '-graphy', value: 3, color: '#0369A1' },
    ],
    caption:
      '語尾で決まるアクセントの位置。2＝語末から二つ目（in-for-MA-tion、e-LEC-tric、of-FI-cial）、3＝語末から三つ目（a-BIL-i-ty、e-co-NOM-i-cal、pho-TOG-ra-phy）。語尾そのものを強く読むわけではない点に注意',
  },

  // s009：カタカナ語になっている語の、英語でのアクセント位置
  lf_kokoeigoext01_009: {
    kind: 'barChart',
    xLabel: '語',
    yLabel: 'アクセントのある音節（先頭から）',
    yMax: 4,
    bars: [
      { label: 'volunteer', value: 3, color: '#16A34A' },
      { label: 'hotel', value: 2, color: '#0369A1' },
      { label: 'guitar', value: 2, color: '#0369A1' },
      { label: 'percent', value: 2, color: '#0369A1' },
      { label: 'calendar', value: 1, color: '#0EA5E9' },
      { label: 'orange', value: 1, color: '#0EA5E9' },
      { label: 'energy', value: 1, color: '#0EA5E9' },
      { label: 'camera', value: 1, color: '#0EA5E9' },
    ],
    caption:
      'カタカナで知っている語の、英語でのアクセント位置。volunteer だけ第3音節、hotel・guitar・percent は第2音節、calendar・orange・energy・camera は第1音節。日本語の長音（ー）の位置とはまったく対応しない',
  },

  // s010：語尾 -s／-es の発音の内訳（本文に挙げた28語）
  lf_kokoeigoext01_010: {
    kind: 'pieChart',
    slices: [
      { label: '[z]', value: 12, color: '#0EA5E9' },
      { label: '[ɪz]', value: 9, color: '#0369A1' },
      { label: '[s]', value: 7, color: '#16A34A' },
    ],
    caption:
      '本文で挙げた -s／-es の語28語の内訳。有声音の後の [z] が12語、歯擦音の後の [ɪz] が9語、無声音の後の [s] が7語。分かれ目は -s の直前の音であって、つづりの文字ではない',
  },

  // s011：語尾 -ed の発音の内訳（本文に挙げた34語）
  lf_kokoeigoext01_011: {
    kind: 'pieChart',
    slices: [
      { label: '[d]', value: 14, color: '#0EA5E9' },
      { label: '[t]', value: 10, color: '#16A34A' },
      { label: '[ɪd]', value: 10, color: '#0369A1' },
    ],
    caption:
      '本文で挙げた -ed の語34語の内訳。有声音の後は [d]、無声音の後は [t]、[t]／[d] の後だけが [ɪd] になって音節が一つ増える。音節が増えるのは wanted・needed の仲間だけである',
  },

  // s013：複数形のつくり方4種類と、本文に挙げた語数
  lf_kokoeigoext01_013: {
    kind: 'barChart',
    xLabel: 'つくり方',
    yLabel: '語数',
    yMax: 12,
    bars: [
      { label: '-s', value: 8, color: '#0EA5E9' },
      { label: '-es', value: 11, color: '#0369A1' },
      { label: 'y→ies', value: 8, color: '#16A34A' },
      { label: 'f→ves', value: 8, color: '#F59E0B' },
    ],
    caption:
      '複数形のつくり方は四通り（本文に挙げた35語の内訳）。-es になるのは s・x・ch・sh・o で終わる語、ies になるのは「子音字＋y」の語だけで、boy・day のような「母音字＋y」は -s のままである',
  },

  // s014：不規則な複数形・単複同形の型別（本文に挙げた15語）
  lf_kokoeigoext01_014: {
    kind: 'barChart',
    xLabel: '型',
    yLabel: '語数',
    yMax: 8,
    bars: [
      { label: '母音が変わる', value: 6, color: '#0EA5E9' },
      { label: '-en が付く', value: 2, color: '#0369A1' },
      { label: '単複同形', value: 7, color: '#16A34A' },
    ],
    caption:
      '-s を付けない複数形（本文に挙げた15語）。母音が変わるのは man・woman・foot・tooth・goose・mouse の6語、-en が付くのは child・ox の2語、単複同形は sheep・deer・fish・Japanese・Chinese・yen・aircraft の7語',
  },

  // s017：不規則動詞の型別のおおよその割合
  lf_kokoeigoext01_017: {
    kind: 'pieChart',
    slices: [
      { label: 'A－B－B', value: 45, color: '#0EA5E9' },
      { label: 'A－B－C', value: 35, color: '#0369A1' },
      { label: 'A－A－A', value: 12, color: '#16A34A' },
      { label: 'A－B－A', value: 8, color: '#F59E0B' },
    ],
    caption:
      '中学で学ぶ不規則動詞（およそ100語）の型別のおおよその割合。過去形と過去分詞が同じ A－B－B 型が半分近くを占め、三つとも異なる A－B－C 型がそれに次ぐ。A－A－A と A－B－A を合わせても二割ほどしかない',
  },

  // s022：自動詞・他動詞のペア（lie／lay、rise／raise）を2軸に配置
  lf_kokoeigoext01_022: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 2, y: 8, label: 'lie 横になる' },
      { x: 8, y: 8, label: 'lay 置く' },
      { x: 2, y: 3, label: 'rise のぼる' },
      { x: 8, y: 3, label: 'raise 上げる' },
    ],
    caption:
      '横軸は目的語をとるかどうか（左＝自動詞・目的語なし／右＝他動詞・目的語あり）。上段が lie（lie-lay-lain）と lay（lay-laid-laid）、下段が rise（rise-rose-risen）と raise（raise-raised-raised）。左側の自動詞が不規則変化、右側の他動詞が規則的な変化になっている',
  },

  // s028：温度を表す形容詞の強さ（反意語は両端どうし・内側どうし）
  lf_kokoeigoext01_028: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 1, label: 'cold' },
      { x: 3, label: 'cool' },
      { x: 7, label: 'warm' },
      { x: 9, label: 'hot' },
    ],
    caption:
      '温度を表す形容詞は四段階に並ぶ。反意語になるのは両端どうし（cold ⇔ hot）と内側どうし（cool ⇔ warm）で、cold の反対がいつでも warm というわけではない',
  },

  // s031：頻度を表す副詞のおおよその強さ
  lf_kokoeigoext01_031: {
    kind: 'numberLine',
    min: 0,
    max: 100,
    step: 20,
    points: [
      { x: 0, label: 'never' },
      { x: 10, label: 'seldom' },
      { x: 30, label: 'sometimes' },
      { x: 60, label: 'often' },
      { x: 80, label: 'usually' },
      { x: 100, label: 'always' },
    ],
    caption:
      '頻度を表す副詞のおおよその強さ（％はあくまで目安）。always → usually → often → sometimes → seldom → never の順に減る。読解では usually と sometimes の取りちがえが内容一致問題の失点につながる',
  },

  // s033：数量を表す語の強さ（a の有無で肯定・否定が入れかわる）
  lf_kokoeigoext01_033: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 0, label: 'no' },
      { x: 1, label: 'few / little' },
      { x: 3, label: 'a few / a little' },
      { x: 5, label: 'some' },
      { x: 9, label: 'many / much' },
    ],
    caption:
      '数量を表す語の並び。a が付かない few・little は「ほとんどない」で0に近く、a が付いた a few・a little は「少しある」で肯定的になる。a 一文字で意味が正反対に動く',
  },

  // s034：by（期限）と until（継続）のちがい
  lf_kokoeigoext01_034: {
    kind: 'numberLine',
    min: 0,
    max: 8,
    step: 1,
    segments: [{ from: 0, to: 5 }],
    points: [{ x: 5, label: 'five' }],
    caption:
      '太線が until five（5時までずっと続く）。by five は5時という点までのどこかで動作が終わればよく、線ではなく期限を表す。だから wait・stay には until、finish・come には by を使う',
  },

  // s035：「見る」「聞く」の語を、目か耳か・意識の強さの2軸に配置
  lf_kokoeigoext01_035: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 10],
    points: [
      { x: 1, y: 8, label: 'see' },
      { x: 5, y: 8, label: 'look at' },
      { x: 9, y: 8, label: 'watch' },
      { x: 1, y: 3, label: 'hear' },
      { x: 8, y: 3, label: 'listen to' },
    ],
    caption:
      '横軸は意識の強さ（左＝自然に入ってくる／右＝意識して向ける）。上段が目（see ＜ look at ＜ watch）、下段が耳（hear ＜ listen to）。carefully のような語がある文では、右側の look at・watch・listen to を選ぶ',
  },
};
