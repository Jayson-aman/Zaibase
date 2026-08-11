import type { Figure } from './figures';

// 高校受験 国語「随筆・詩・短歌・俳句」拡張ユニット（koko_kokugo_s231〜s265）の教科書用図解。
// キーは lessons-koko-kokugo-ext07.ts の figureId と対応。
// 韻文は「音数の区切り」「句切れの位置」「季節の割り当て」など、
// 数直線・グラフにすると理解が一気に進む箇所にだけ図を付けてある（35課中15課）。
export const lessonFigsKokoKokugoExt07: Record<string, Figure> = {
  // s233：随筆の四つの層（導入→体験→感想→一般化）
  lf_kokokokugoext07_233: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '①導入（話題）' },
      { x: 2, label: '②体験（事実）' },
      { x: 3, label: '③感想（気持ち）' },
      { x: 4, label: '④一般化（主題）' },
    ],
    segments: [{ from: 2, to: 4 }],
    caption:
      '典型的な随筆の四つの層。設問の答えは②の体験そのものではなく、③〜④の考えの層にあることが多い。太線の範囲（体験→一般化）を結んで説明するのが記述の基本形。',
  },

  // s236：三大随筆の成立年（枕草子→方丈記→徒然草）
  lf_kokokokugoext07_236: {
    kind: 'numberLine',
    min: 1000,
    max: 1350,
    step: 50,
    points: [
      { x: 1001, label: '枕草子（清少納言）' },
      { x: 1212, label: '方丈記（鴨長明）' },
      { x: 1331, label: '徒然草（兼好法師）' },
    ],
    caption:
      '三大随筆の成立年（西暦・いずれもおよその年）。枕草子は平安中期、方丈記は鎌倉初期、徒然草は鎌倉末期。約二百年ずつ離れており、この順序が入試で問われる。',
  },

  // s238：詩の形式のおおよその内訳（現代の詩はほぼ口語自由詩）
  lf_kokokokugoext07_238: {
    kind: 'pieChart',
    slices: [
      { label: '口語自由詩', value: 80, color: '#0EA5E9' },
      { label: '文語定型詩', value: 10, color: '#0369A1' },
      { label: '散文詩', value: 6, color: '#16A34A' },
      { label: 'その他（口語定型詩など）', value: 4, color: '#F59E0B' },
    ],
    caption:
      '大正期以降に書かれた詩の形式のおおよその傾向。現代の詩はほとんどが口語自由詩なので、分類に迷ったらまずこれを疑う。文語定型詩は明治期の新体詩に多い。',
  },

  // s244：七五調のリズム（島崎藤村『初恋』冒頭）
  lf_kokokokugoext07_244: {
    kind: 'numberLine',
    min: 0,
    max: 12,
    step: 1,
    points: [
      { x: 7, label: '七音の終わり' },
      { x: 12, label: '五音の終わり' },
    ],
    segments: [
      { from: 0, to: 7 },
      { from: 7, to: 12 },
    ],
    caption:
      '七五調の区切り。島崎藤村『初恋』の「まだあげ初めし（ま・だ・あ・げ・そ・め・し＝七音）／前髪の（ま・え・が・み・の＝五音）」。七音のあとに五音が続くと軽やかな調子になり、逆の五七調は重々しい調べになる。',
  },

  // s247：短歌の五句構成（五・七・五・七・七＝三十一音）
  lf_kokokokugoext07_247: {
    kind: 'numberLine',
    min: 0,
    max: 31,
    step: 5,
    points: [
      { x: 5, label: '初句(五)' },
      { x: 12, label: '二句(七)' },
      { x: 17, label: '三句(五)' },
      { x: 24, label: '四句(七)' },
      { x: 31, label: '結句(七)' },
    ],
    segments: [
      { from: 0, to: 5 },
      { from: 5, to: 12 },
      { from: 12, to: 17 },
      { from: 17, to: 24 },
      { from: 24, to: 31 },
    ],
    caption:
      '短歌の三十一音の区切り。目盛りは通算の音数で、各句の終わりに印がある。上の句＝初句〜三句（0〜17音めの五七五）、下の句＝四句・結句（17〜31音めの七七）。',
  },

  // s248：字余りの歌の各句の音数（与謝野晶子・初句が六音）
  lf_kokokokugoext07_248: {
    kind: 'barChart',
    xLabel: '句',
    yLabel: '音数',
    yMax: 8,
    bars: [
      { label: 'その子二十', value: 6, color: '#EF4444' },
      { label: '櫛にながるる', value: 7, color: '#0EA5E9' },
      { label: '黒髪の', value: 5, color: '#0EA5E9' },
      { label: 'おごりの春の', value: 7, color: '#0EA5E9' },
      { label: 'うつくしきかな', value: 7, color: '#0EA5E9' },
    ],
    caption:
      '与謝野晶子「その子二十櫛にながるる黒髪のおごりの春のうつくしきかな」の各句の音数。定型は五・七・五・七・七＝三十一音だが、初句が六音（赤）で一音多く、合計三十二音の字余りになっている。',
  },

  // s249：句切れの位置（持統天皇・二句切れ）
  lf_kokokokugoext07_249: {
    kind: 'numberLine',
    min: 0,
    max: 31,
    step: 5,
    points: [{ x: 12, label: 'ここで切れる（二句切れ）' }],
    segments: [
      { from: 0, to: 12 },
      { from: 12, to: 31 },
    ],
    caption:
      '持統天皇「春過ぎて／夏来にけらし／白妙の／衣ほすてふ／天の香具山」の句切れ。二句の終わり（通算十二音め）の「夏来にけらし」で意味が完結するので二句切れ。ここに句点（。）を打てるかどうかが判定の決め手になる。',
  },

  // s252：三大歌集の成立年
  lf_kokokokugoext07_252: {
    kind: 'numberLine',
    min: 700,
    max: 1300,
    step: 100,
    points: [
      { x: 759, label: '万葉集（奈良）' },
      { x: 905, label: '古今和歌集（平安）' },
      { x: 1205, label: '新古今和歌集（鎌倉）' },
    ],
    caption:
      '三大歌集の成立年（西暦）。万葉集は七五九年の歌を最後に八世紀後半に成立、古今和歌集は九〇五年で最初の勅撰和歌集、新古今和歌集は一二〇五年。万葉集は勅撰ではない点に注意。',
  },

  // s254：近代短歌の主要な歌集・評論の刊行年
  lf_kokokokugoext07_254: {
    kind: 'numberLine',
    min: 1895,
    max: 1915,
    step: 5,
    points: [
      { x: 1898, label: '歌よみに与ふる書（正岡子規）' },
      { x: 1901, label: 'みだれ髪（与謝野晶子）' },
      { x: 1908, label: '海の声（若山牧水）' },
      { x: 1910, label: '一握の砂（石川啄木）' },
      { x: 1913, label: '赤光（斎藤茂吉）' },
    ],
    caption:
      '近代短歌の主要な刊行物と年。子規の評論が短歌革新の口火を切り、以後わずか十五年ほどのあいだに晶子・牧水・啄木・茂吉の代表歌集が続いた。歌人と歌集名の組み合わせは頻出。',
  },

  // s256：俳句の三句構成（五・七・五＝十七音）
  lf_kokokokugoext07_256: {
    kind: 'numberLine',
    min: 0,
    max: 17,
    step: 1,
    points: [
      { x: 5, label: '上五の終わり' },
      { x: 12, label: '中七の終わり' },
      { x: 17, label: '下五の終わり' },
    ],
    segments: [
      { from: 0, to: 5 },
      { from: 5, to: 12 },
      { from: 12, to: 17 },
    ],
    caption:
      '俳句の十七音の区切り。松尾芭蕉「古池や（ふ・る・い・け・や＝五音）／蛙飛びこむ（か・は・づ・と・び・こ・む＝七音）／水の音（み・づ・の・お・と＝五音）」。目盛りは通算の音数。',
  },

  // s257：旧暦の月と季節の対応
  lf_kokokokugoext07_257: {
    kind: 'numberLine',
    min: 1,
    max: 12,
    step: 1,
    points: [
      { x: 1, label: '春（一〜三月）' },
      { x: 4, label: '夏（四〜六月）' },
      { x: 7, label: '秋（七〜九月）' },
      { x: 10, label: '冬（十〜十二月）' },
    ],
    segments: [
      { from: 1, to: 3 },
      { from: 4, to: 6 },
      { from: 7, to: 9 },
      { from: 10, to: 12 },
    ],
    caption:
      '俳句の季節は旧暦が基準。旧暦一〜三月が春、四〜六月が夏、七〜九月が秋、十〜十二月が冬。旧暦は新暦よりおよそ一か月おそいので、旧暦五月の「五月雨」は今の六月ごろの梅雨（夏）、旧暦七月七日の「七夕」「天の川」は秋になる。',
  },

  // s258：歳時記の季語のおおよその季節分布
  lf_kokokokugoext07_258: {
    kind: 'pieChart',
    slices: [
      { label: '春', value: 25, color: '#F472B6' },
      { label: '夏', value: 30, color: '#16A34A' },
      { label: '秋', value: 25, color: '#F59E0B' },
      { label: '冬', value: 15, color: '#0EA5E9' },
      { label: '新年', value: 5, color: '#0369A1' },
    ],
    caption:
      '歳時記に収められる季語のおおよその季節分布。四季のほかに「新年」が独立した区分として立てられている点が重要（門松・初詣・雑煮・書初などは新年の季語）。',
  },

  // s259：切れ字の位置（芭蕉「古池や」＝初句切れ）
  lf_kokokokugoext07_259: {
    kind: 'numberLine',
    min: 0,
    max: 17,
    step: 1,
    points: [{ x: 5, label: '切れ字「や」' }],
    segments: [
      { from: 0, to: 5 },
      { from: 5, to: 17 },
    ],
    caption:
      '「古池や蛙飛びこむ水の音」の切れ。切れ字「や」は上五の終わり（五音め）に置かれ、そこで句が切れる（初句切れ）。まず古池が提示され、間をおいてから蛙の飛びこむ音が響く構成になる。「かな」「けり」は下五の終わり（十七音め）に置かれる。',
  },

  // s260：自由律俳句の音数（定型との比較）
  lf_kokokokugoext07_260: {
    kind: 'barChart',
    xLabel: '句',
    yLabel: '音数',
    yMax: 18,
    bars: [
      { label: '定型（五七五）', value: 17, color: '#94A3B8' },
      { label: '分け入つても…青い山', value: 17, color: '#0EA5E9' },
      { label: 'うしろすがたの…ゆくか', value: 14, color: '#0369A1' },
      { label: '咳をしても一人', value: 9, color: '#EF4444' },
    ],
    caption:
      '自由律俳句の音数。種田山頭火「分け入つても分け入つても青い山」は合計十七音だが六・六・五で五七五に分けられない。「うしろすがたのしぐれてゆくか」は十四音、尾崎放哉「咳をしても一人」は九音しかなく、その短さ自体が孤独の切実さを表している。',
  },

  // s261：『おくのほそ道』の主な訪問地（およその位置）
  lf_kokokokugoext07_261: {
    kind: 'japanMap',
    markers: [
      { x: 215, y: 199, label: '江戸・深川（出発）' },
      { x: 213, y: 187, label: '日光' },
      { x: 232, y: 133, label: '平泉（夏草や）' },
      { x: 221, y: 149, label: '立石寺（閑さや）' },
      { x: 213, y: 143, label: '象潟' },
      { x: 178, y: 197, label: '大垣（終着）' },
    ],
    caption:
      '松尾芭蕉『おくのほそ道』の旅（元禄二年＝一六八九年、同行は河合曾良）の主な訪問地のおよその位置。江戸・深川を出て日光から東北へ北上し、平泉・立石寺・象潟をめぐって日本海側を南下し、大垣で旅を終えた。全行程は約二千四百キロ。',
  },
};
