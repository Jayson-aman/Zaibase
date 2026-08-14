import type { Figure } from './figures';

// 高校受験 社会「公民 政治のしくみ」拡張ユニット（koko_shakai_s371〜koko_shakai_s405）の図解。
// キーは lessons-koko-shakai-ext11.ts の figureId と対応（35課中17課に付与）。
// 制度の関係図は polygon、議席数・署名数などの比較は barChart、
// 手続きの段階・日数は numberLine、割合は pieChart で表している。
// ※特定の政党名・政治的立場は一切登場させていない。
export const lessonFigsKokoShakaiExt11: Record<string, Figure> = {
  // s372：小選挙区制で死票がどれだけ生じるか（定数1の選挙区の例）
  lf_kokoshakaiext11_372: {
    kind: 'barChart',
    xLabel: '候補者',
    yLabel: '得票数（千票）',
    yMax: 50,
    bars: [
      { label: 'A（当選）', value: 40, color: '#0EA5E9' },
      { label: 'B（落選）', value: 35, color: '#94A3B8' },
      { label: 'C（落選）', value: 25, color: '#94A3B8' },
    ],
    caption:
      '定数1の小選挙区の例。総投票100千票のうち当選したAは40千票で、B・Cに投じられた60千票（全体の60％）はすべて死票になる。当選者の得票が過半数に届かないことも起こる',
  },

  // s373：衆議院465人・参議院248人の内訳
  lf_kokoshakaiext11_373: {
    kind: 'barChart',
    xLabel: '議院と選挙のしくみ',
    yLabel: '定数（人）',
    yMax: 300,
    bars: [
      { label: '衆・小選挙区', value: 289, color: '#0EA5E9' },
      { label: '衆・比例代表', value: 176, color: '#0369A1' },
      { label: '参・選挙区', value: 148, color: '#16A34A' },
      { label: '参・比例代表', value: 100, color: '#15803D' },
    ],
    caption:
      '衆議院465人＝小選挙区289＋比例代表176。参議院248人＝選挙区148＋比例代表100。青が衆議院、緑が参議院。足し算で必ず検算できるようにしておく',
  },

  // s374：一票の格差（議員1人あたりの有権者数）
  lf_kokoshakaiext11_374: {
    kind: 'barChart',
    xLabel: '選挙区（いずれも定数1）',
    yLabel: '議員1人あたりの有権者数（万人）',
    yMax: 50,
    bars: [
      { label: 'A区', value: 48, color: '#F59E0B' },
      { label: 'B区', value: 36, color: '#0284C7' },
      { label: 'C区', value: 30, color: '#0284C7' },
      { label: 'D区', value: 24, color: '#0EA5E9' },
    ],
    caption:
      '一票の格差＝48万÷24万＝2.0倍。有権者が少ないD区の一票がもっとも重く、多いA区の一票がもっとも軽い。「人数が多い区ほど一票は軽い」と直感の逆になる点に注意',
  },

  // s375：年代別の投票率（衆議院議員総選挙のおおよその傾向）
  lf_kokoshakaiext11_375: {
    kind: 'barChart',
    xLabel: '年代',
    yLabel: '投票率（％・おおよその値）',
    yMax: 80,
    bars: [
      { label: '10代', value: 43, color: '#0EA5E9' },
      { label: '20代', value: 36, color: '#0EA5E9' },
      { label: '30代', value: 47, color: '#0284C7' },
      { label: '40代', value: 56, color: '#0284C7' },
      { label: '50代', value: 63, color: '#0369A1' },
      { label: '60代', value: 71, color: '#0369A1' },
      { label: '70代〜', value: 62, color: '#0369A1' },
    ],
    caption:
      '衆議院議員総選挙における年代別投票率のおおよその傾向。20代が最も低く60代が最も高い。投票率の低い世代の要望は政策に反映されにくくなるという指摘がある',
  },

  // s381：1回の選挙で選ばれる議員数（衆＝全員、参＝半数）
  lf_kokoshakaiext11_381: {
    kind: 'barChart',
    xLabel: '議院と選挙',
    yLabel: '人数（人）',
    yMax: 500,
    bars: [
      { label: '衆・定数', value: 465, color: '#BAE6FD' },
      { label: '衆・総選挙で改選', value: 465, color: '#0EA5E9' },
      { label: '参・定数', value: 248, color: '#BBF7D0' },
      { label: '参・通常選挙で改選', value: 124, color: '#16A34A' },
    ],
    caption:
      '衆議院は総選挙で465人全員を選び直す（任期4年・解散あり）。参議院は任期6年で3年ごとに半数の124人だけを改選する（解散なし）。「6年ごとに全員を選び直す」は誤り',
  },

  // s383：法律ができるまでの段階
  lf_kokoshakaiext11_383: {
    kind: 'numberLine',
    min: 0,
    max: 8,
    step: 1,
    points: [
      { x: 1, label: '①提出（議員・内閣）' },
      { x: 2, label: '②委員会' },
      { x: 3, label: '③本会議' },
      { x: 4, label: '④他院の委員会' },
      { x: 5, label: '⑤他院の本会議' },
      { x: 6, label: '⑥成立' },
      { x: 7, label: '⑦公布（天皇）' },
    ],
    caption:
      '法律ができるまでの流れ。「委員会→本会議」を衆参それぞれで1回ずつ、計4段階ふむのが骨格。両院で可決すれば成立し、内閣を経て天皇が公布する',
  },

  // s384：国の一般会計歳出の内訳（おおよその割合）
  lf_kokoshakaiext11_384: {
    kind: 'pieChart',
    slices: [
      { label: '社会保障関係費', value: 33, color: '#0EA5E9' },
      { label: '国債費', value: 24, color: '#0369A1' },
      { label: '地方交付税交付金等', value: 16, color: '#16A34A' },
      { label: '防衛関係費', value: 8, color: '#F59E0B' },
      { label: '公共事業関係費', value: 5, color: '#EF4444' },
      { label: '文教及び科学振興費', value: 5, color: '#A855F7' },
      { label: 'その他', value: 9, color: '#94A3B8' },
    ],
    caption:
      '国の一般会計歳出のおおよその内訳（％）。最大は社会保障関係費で約3分の1、次いで借金の返済にあたる国債費が約4分の1。公共事業関係費は5％程度にすぎない',
  },

  // s385：衆議院の優越で参議院が議決しない場合の日数
  lf_kokoshakaiext11_385: {
    kind: 'numberLine',
    min: 0,
    max: 70,
    step: 10,
    points: [
      { x: 10, label: '内閣総理大臣の指名' },
      { x: 30, label: '予算・条約の承認' },
      { x: 60, label: '法律案' },
    ],
    caption:
      '参議院が議決しないまま経過したとき衆議院の議決が優先される日数。首相の指名10日、予算・条約30日、法律案60日。決まらないと困る度合いが強いものほど日数が短い',
  },

  // s388：議院内閣制における国民・国会・内閣の関係
  lf_kokoshakaiext11_388: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '国会（立法）' },
      { x: 10, y: 0, label: '内閣（行政）' },
      { x: 5, y: 8, label: '国民' },
    ],
    sideLabels: [
      '国会→内閣：首相の指名・不信任決議／内閣→国会：衆議院の解散',
      '内閣←国民：世論',
      '国民→国会：選挙',
    ],
    fill: true,
    caption:
      '議院内閣制の関係図。国民が直接選ぶのは国会議員だけで、内閣総理大臣は国会が指名する。国会は不信任決議、内閣は衆議院の解散という、互いを倒す手段を持ち合っている',
  },

  // s389：内閣不信任決議の可決から特別会の召集まで（最長の場合）
  lf_kokoshakaiext11_389: {
    kind: 'numberLine',
    min: 0,
    max: 80,
    step: 10,
    points: [
      { x: 0, label: '不信任決議の可決' },
      { x: 10, label: '解散または総辞職' },
      { x: 50, label: '総選挙' },
      { x: 80, label: '特別会の召集' },
    ],
    caption:
      '横軸は不信任決議の可決からの経過日数（最長の場合）。10日以内に解散か総辞職、解散なら解散の日から40日以内に総選挙、総選挙の日から30日以内に特別会。10→40→30の順',
  },

  // s392：三審制の段階（地方裁判所が第一審の場合）
  lf_kokoshakaiext11_392: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '第一審：地方裁判所' },
      { x: 2, label: '第二審：高等裁判所' },
      { x: 3, label: '第三審：最高裁判所' },
    ],
    caption:
      '三審制の段階。第一審から第二審へは控訴、第二審から第三審へは上告という。第一審は事件により簡易裁判所・家庭裁判所になることもある。確定後のやり直しは再審であり第四審ではない',
  },

  // s395：裁判員裁判の合議体の構成
  lf_kokoshakaiext11_395: {
    kind: 'pieChart',
    slices: [
      { label: '裁判員 6人', value: 6, color: '#0EA5E9' },
      { label: '裁判官 3人', value: 3, color: '#0369A1' },
    ],
    caption:
      '裁判員裁判の合議体は裁判員6人＋裁判官3人＝9人。有罪とするには裁判官1人以上を含む過半数の賛成が必要で、裁判員6人全員が有罪でも裁判官が全員無罪なら有罪にできない',
  },

  // s397：三権分立の関係図
  lf_kokoshakaiext11_397: {
    kind: 'polygon',
    points: [
      { x: 5, y: 9, label: '国会（立法権）' },
      { x: 10, y: 0, label: '内閣（行政権）' },
      { x: 0, y: 0, label: '裁判所（司法権）' },
    ],
    sideLabels: [
      '国会→内閣：不信任決議／内閣→国会：衆議院の解散',
      '内閣→裁判所：裁判官の任命／裁判所→内閣：命令・規則・処分の違憲審査',
      '裁判所→国会：法律の違憲審査／国会→裁判所：弾劾裁判所の設置',
    ],
    fill: true,
    caption:
      '三権分立の関係図。三つの辺それぞれに、行きと帰りの二本ずつ計六本の抑制手段がある。国民は選挙（国会）・世論（内閣）・国民審査（裁判所）で三権を取り囲む',
  },

  // s399：裁判所が持つ違憲審査権の向き
  lf_kokoshakaiext11_399: {
    kind: 'polygon',
    points: [
      { x: 5, y: 9, label: '裁判所' },
      { x: 10, y: 0, label: '内閣' },
      { x: 0, y: 0, label: '国会' },
    ],
    sideLabels: ['命令・規則・処分の違憲審査', null, '法律の違憲審査'],
    fill: true,
    caption:
      '裁判所から出る違憲審査の矢印は二本。国会に向かうものは「法律」、内閣に向かうものは「命令・規則・処分」が対象。持つのはすべての裁判所、最終判断を下すのは最高裁判所',
  },

  // s402：地方自治の二元代表制
  lf_kokoshakaiext11_402: {
    kind: 'polygon',
    points: [
      { x: 5, y: 9, label: '住民' },
      { x: 10, y: 0, label: '地方議会' },
      { x: 0, y: 0, label: '首長' },
    ],
    sideLabels: [
      '直接選挙（議員・任期4年）',
      '議会→首長：不信任決議／首長→議会：解散・再議請求',
      '直接選挙（首長・任期4年）',
    ],
    fill: true,
    caption:
      '地方の二元代表制。首長も議員も住民が直接選ぶ点が、国会が内閣総理大臣を指名する国の議院内閣制とちがう。地方議会は一院制である',
  },

  // s403：直接請求に必要な署名数（有権者60,000人の市の場合）
  lf_kokoshakaiext11_403: {
    kind: 'barChart',
    xLabel: '請求の種類',
    yLabel: '必要な署名数（人）',
    yMax: 22000,
    bars: [
      { label: '条例の制定・改廃', value: 1200, color: '#0EA5E9' },
      { label: '事務の監査', value: 1200, color: '#0EA5E9' },
      { label: '議会の解散', value: 20000, color: '#F59E0B' },
      { label: '首長・議員の解職', value: 20000, color: '#F59E0B' },
    ],
    caption:
      '有権者60,000人の市の場合。条例・監査は50分の1で1,200人、議会の解散と解職は3分の1で20,000人。身分を失わせる請求だけが桁ちがいに重い（請求先も前二つは首長・監査委員、後二つは選挙管理委員会）',
  },

  // s404：地方公共団体の歳入の内訳（おおよその割合）
  lf_kokoshakaiext11_404: {
    kind: 'pieChart',
    slices: [
      { label: '地方税（自主財源）', value: 33, color: '#0EA5E9' },
      { label: '地方交付税交付金', value: 17, color: '#0369A1' },
      { label: '国庫支出金', value: 18, color: '#16A34A' },
      { label: '地方債', value: 10, color: '#F59E0B' },
      { label: 'その他', value: 22, color: '#94A3B8' },
    ],
    caption:
      '地方公共団体の歳入のおおよその内訳（％）。自ら集める地方税は約3分の1にとどまる（三割自治）。地方交付税交付金は使い道が自由、国庫支出金は使い道が指定される。地方債は借金',
  },
};
