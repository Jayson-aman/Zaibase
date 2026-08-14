import type { Figure } from './figures';

// 高校受験 理科「化学変化とイオン・電池・中和」拡張ユニット（koko_rika_s266〜koko_rika_s305）の教科書用図解。
// キーは lessons-koko-rika-ext08.ts の figureId と対応（40課中20課＝50%）。
// この単元は「目に見えないイオンの出入り」を追う単元なので、図解を主役に据えている。
// circuit で電気分解の装置と電池の回路、chemEquation で各反応の化学反応式、
// lineChart で中和にともなうイオンの数の変化（H＋は減り、Na＋は増え、Cl−は一定）、
// barChart でイオンの価数と粒子の数、numberLine で pH の目盛りを示す。
export const lessonFigsKokoRikaExt08: Record<string, Figure> = {
  // s266：原子の構造（ヘリウム原子のモデル）。陽子2・中性子2・電子2でつり合う
  lf_kokorikaext08_266: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: '原子核（陽子2＋中性子2）',
    points: [
      { angle: 90, label: '電子（−）' },
      { angle: 270, label: '電子（−）' },
    ],
    caption:
      'ヘリウム原子のモデル。中心の原子核は陽子2個（＋2）と中性子2個（電気なし）、そのまわりに電子2個（−2）がある。＋2と−2が打ち消し合うので、原子全体は電気を帯びていない。原子核は原子の大きさに比べてきわめて小さく、質量のほとんどはここに集まっている',
  },

  // s269：ナトリウム原子とナトリウムイオンの粒子の数（変わるのは電子だけ）
  lf_kokorikaext08_269: {
    kind: 'barChart',
    yLabel: '粒子の数（個）',
    yMax: 13,
    bars: [
      { label: 'Na 陽子', value: 11, color: '#0EA5E9' },
      { label: 'Na 電子', value: 11, color: '#0369A1' },
      { label: 'Na＋ 陽子', value: 11, color: '#0EA5E9' },
      { label: 'Na＋ 電子', value: 10, color: '#0369A1' },
    ],
    caption:
      'ナトリウム原子とナトリウムイオンの粒子の数。陽子は11個のままで変わらず、電子だけが11個から10個に減る。11−10＝＋1 で、これがナトリウムイオン Na＋ の価数にあたる。陽子の数が変わらないので、元素はナトリウムのままである',
  },

  // s271：陽イオンの価数（＝失った電子の数）
  lf_kokorikaext08_271: {
    kind: 'barChart',
    yLabel: '価数（失った電子の数）',
    yMax: 4,
    bars: [
      { label: 'H＋', value: 1, color: '#0EA5E9' },
      { label: 'Na＋', value: 1, color: '#0EA5E9' },
      { label: 'K＋', value: 1, color: '#0EA5E9' },
      { label: 'NH4＋', value: 1, color: '#0EA5E9' },
      { label: 'Mg2＋', value: 2, color: '#0369A1' },
      { label: 'Ca2＋', value: 2, color: '#0369A1' },
      { label: 'Cu2＋', value: 2, color: '#0369A1' },
      { label: 'Zn2＋', value: 2, color: '#0369A1' },
      { label: 'Al3＋', value: 3, color: '#16A34A' },
    ],
    caption:
      '入試で必要な陽イオンと、その価数（失った電子の数）。1価は H＋・Na＋・K＋・Ag＋・NH4＋、2価は Mg2＋・Ca2＋・Ba2＋・Zn2＋・Cu2＋・Fe2＋、3価は Al3＋。銅は Cu＋ ではなく Cu2＋、アンモニウムは NH3＋ ではなく NH4＋ である点に注意する',
  },

  // s272：陰イオンの価数（＝受け取った電子の数）
  lf_kokorikaext08_272: {
    kind: 'barChart',
    yLabel: '価数（受け取った電子の数）',
    yMax: 3,
    bars: [
      { label: 'Cl−', value: 1, color: '#F59E0B' },
      { label: 'OH−', value: 1, color: '#F59E0B' },
      { label: 'NO3−', value: 1, color: '#F59E0B' },
      { label: 'O2−', value: 2, color: '#B45309' },
      { label: 'S2−', value: 2, color: '#B45309' },
      { label: 'SO4 2−', value: 2, color: '#B45309' },
      { label: 'CO3 2−', value: 2, color: '#B45309' },
    ],
    caption:
      '入試で必要な陰イオンと、その価数（受け取った電子の数）。1価は Cl−・OH−・NO3−、2価は O2−・S2−・SO4 2−・CO3 2−。価数の見分け方は「もとの酸についていた水素の数」。硫酸 H2SO4 は水素2個なので SO4 は2価、硝酸 HNO3 は水素1個なので NO3 は1価',
  },

  // s276：電解質水溶液に電流が流れる回路
  lf_kokorikaext08_276: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'switch' },
      { type: 'resistor', label: '水溶液（炭素電極2本）' },
      { type: 'ammeter', label: '電流計' },
    ],
    battery: { label: '電源' },
    caption:
      '水溶液に電流が流れるか調べる回路。導線の中を運ぶのは電子だが、水溶液の中を運ぶのはイオンで、陽イオンは陰極側へ、陰イオンは陽極側へ移動する。食塩水のような電解質の水溶液では針が振れ、砂糖水やエタノール水溶液（非電解質）ではイオンが生じないので針が振れない',
  },

  // s278：電気分解の装置と、陰極・陽極で起こること
  lf_kokorikaext08_278: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'switch' },
      { type: 'resistor', label: '電解槽（陰極｜陽極）' },
      { type: 'ammeter', label: '電流計' },
    ],
    battery: { label: '直流電源' },
    caption:
      '電気分解の装置。電源の−極につないだ電極が陰極、＋極につないだ電極が陽極。電子は電源の−極から出て導線を通り陰極へ流れこむので、陰極では陽イオンが電子を受け取る（例 Cu2＋＋2e−→Cu）。陽極では陰イオンが電子を渡す（例 2Cl−→Cl2＋2e−）。陽イオンは陰極へ、陰イオンは陽極へ動く',
  },

  // s279：塩化銅水溶液の電気分解
  lf_kokorikaext08_279: {
    kind: 'chemEquation',
    equation: 'CuCl2 -> Cu + Cl2',
    caption:
      '塩化銅水溶液の電気分解。陰極では Cu2＋＋2e−→Cu で赤色の銅が付着し、陽極では 2Cl−→Cl2＋2e− で刺激臭のある塩素が発生する。電子2個のやりとりで銅原子1個と塩素分子1個ができるので、両者は1対1。Cu2＋ が減るので水溶液の青色はしだいにうすくなる',
  },

  // s280：塩酸の電気分解
  lf_kokorikaext08_280: {
    kind: 'chemEquation',
    equation: '2HCl -> H2 + Cl2',
    caption:
      '塩酸の電気分解。陰極では 2H＋＋2e−→H2 で水素、陽極では 2Cl−→Cl2＋2e− で塩素が発生する。理論上の体積比は 水素：塩素＝1：1 だが、塩素は水にとけやすいため、実際に集まる量は塩素のほうが少なくなる',
  },

  // s281：水の電気分解
  lf_kokorikaext08_281: {
    kind: 'chemEquation',
    equation: '2H2O -> 2H2 + O2',
    caption:
      '水の電気分解。純水はイオンがほとんどなく電流が流れないので、水酸化ナトリウム（または硫酸）を少量とかして行う。加えた薬品は分解されず、分解されるのは水である。陰極に水素、陽極に酸素が発生し、体積比は 水素：酸素＝2：1。これは水 H2O の原子数の比と一致する',
  },

  // s282：水の電気分解で集まる気体の体積（水素：酸素＝2：1）
  lf_kokorikaext08_282: {
    kind: 'lineChart',
    xLabel: '電流を流した時間（分）',
    yLabel: '集まった気体の体積（cm3）',
    xRange: [0, 10],
    yRange: [0, 44],
    series: [
      {
        label: '水素（陰極）',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 2, y: 8 },
          { x: 4, y: 16 },
          { x: 6, y: 24 },
          { x: 8, y: 32 },
          { x: 10, y: 40 },
        ],
      },
      {
        label: '酸素（陽極）',
        color: '#F59E0B',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 2, y: 4 },
          { x: 4, y: 8 },
          { x: 6, y: 12 },
          { x: 8, y: 16 },
          { x: 10, y: 20 },
        ],
      },
    ],
    caption:
      '水の電気分解で集まる気体の体積。どちらも原点を通る直線で、発生量は「電流×時間」に比例する。どの時刻で比べても 水素：酸素＝2：1 で、水素の直線の傾きは酸素の2倍。10分で水素40cm3のとき酸素は20cm3である',
  },

  // s284：金属のイオンへのなりやすさの順位
  lf_kokorikaext08_284: {
    kind: 'barChart',
    yLabel: 'イオンへのなりやすさ（順位）',
    yMax: 6,
    bars: [
      { label: 'Mg', value: 5, color: '#0EA5E9' },
      { label: 'Zn', value: 4, color: '#0284C7' },
      { label: 'Fe', value: 3, color: '#0369A1' },
      { label: 'Cu', value: 2, color: '#B45309' },
      { label: 'Ag', value: 1, color: '#64748B' },
    ],
    caption:
      '中学で扱う金属のイオンへのなりやすさ。マグネシウム＞亜鉛＞鉄＞銅＞銀の順で、棒の高さは順位を示すもので実測値ではない。左ほど電子を手放しやすく、うすい塩酸にとけて水素を出しやすく、さびやすく、電池では−極になる。右ほど単体で安定し、自然界で金属のまま産出する',
  },

  // s288：うすい塩酸に亜鉛板と銅板を入れた化学電池
  lf_kokorikaext08_288: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'bulb', label: '豆電球・モーター' }],
    battery: { label: '亜鉛板（−極）｜銅板（＋極）／うすい塩酸' },
    caption:
      'うすい塩酸に亜鉛板と銅板を入れた化学電池。亜鉛のほうがイオンになりやすいので Zn→Zn2＋＋2e− ととけ、残した電子が導線を通って銅板へ流れる。銅板では 2H＋＋2e−→H2 で泡が出る。電子の向きは亜鉛板→銅板、電流の向きはその逆で銅板→亜鉛板。したがって銅板が＋極になる',
  },

  // s289：ダニエル電池
  lf_kokorikaext08_289: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'bulb', label: 'モーター' },
      { type: 'ammeter', label: '電流計' },
    ],
    battery: { label: '亜鉛板／硫酸亜鉛（−）｜銅板／硫酸銅（＋）' },
    caption:
      'ダニエル電池。−極では Zn→Zn2＋＋2e− と亜鉛がとけて質量が減り、＋極では Cu2＋＋2e−→Cu と銅が付着して質量が増える。硫酸銅水溶液の青色はうすくなる。二つの水溶液をセロハンで仕切るのは、すぐに混ざるのを防ぎつつイオンだけを通し、両側の電気的なかたよりを打ち消すため。セロハンを通るのはイオンで、電子ではない',
  },

  // s292：燃料電池（水の電気分解の逆反応）
  lf_kokorikaext08_292: {
    kind: 'chemEquation',
    equation: '2H2 + O2 -> 2H2O',
    caption:
      '燃料電池の全体の反応。−極で H2→2H＋＋2e−、＋極で O2＋4H＋＋4e−→2H2O が起こる。生じるのは水だけで、二酸化炭素は出ない。水の電気分解 2H2O→2H2＋O2 のちょうど逆向きの反応で、電気分解が電気→化学、燃料電池が化学→電気とエネルギーの変換の向きも逆になっている',
  },

  // s296：pH の目盛り
  lf_kokorikaext08_296: {
    kind: 'numberLine',
    min: 0,
    max: 14,
    step: 2,
    segments: [{ from: 0, to: 7 }],
    points: [
      { x: 1, label: '強い酸性' },
      { x: 7, label: '中性' },
      { x: 13, label: '強いアルカリ性' },
    ],
    caption:
      'pH の目盛り。7が中性で、7より小さいほど酸性が強く（水素イオンが多く）、7より大きいほどアルカリ性が強い（水酸化物イオンが多い）。太く塗った0〜7が酸性側。pHが1小さくなると水素イオンの濃さは約10倍になるので、pH3 は pH5 の約100倍の水素イオンをもつ。胃液 約2、食酢 約3、雨水 約5.6、海水 約8、石けん水 約10',
  },

  // s298：塩酸と水酸化ナトリウム水溶液の中和
  lf_kokorikaext08_298: {
    kind: 'chemEquation',
    equation: 'HCl + NaOH -> NaCl + H2O',
    caption:
      '塩酸と水酸化ナトリウム水溶液の中和。中和の本体は H＋＋OH−→H2O で、酸性の原因とアルカリ性の原因が同時に消える。残る Na＋ と Cl− は反応せず水溶液中にイオンのままいて、水を蒸発させると塩化ナトリウムの結晶になる。この NaCl のような物質を塩（えん）という',
  },

  // s299：硫酸と水酸化バリウム水溶液の中和（沈殿ができる）
  lf_kokorikaext08_299: {
    kind: 'chemEquation',
    equation: 'H2SO4 + Ba(OH)2 -> BaSO4 + 2H2O',
    caption:
      '硫酸と水酸化バリウム水溶液の中和。H＋＋OH−→H2O と同時に Ba2＋＋SO4 2−→BaSO4 が起こる。硫酸バリウムは水にほとんどとけないので白い沈殿になる。塩がイオンとして残らないため、ちょうど中和した点では水溶液中のイオンがほぼなくなり、電流が流れなくなる',
  },

  // s301：中和の量的関係（酸の体積と、必要なアルカリの体積は比例）
  lf_kokorikaext08_301: {
    kind: 'lineChart',
    xLabel: 'うすい塩酸の体積（cm3）',
    yLabel: 'ちょうど中和に必要な水酸化ナトリウム水溶液（cm3）',
    xRange: [0, 25],
    yRange: [0, 22],
    series: [
      {
        label: '必要な体積',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 4 },
          { x: 10, y: 8 },
          { x: 15, y: 12 },
          { x: 20, y: 16 },
          { x: 25, y: 20 },
        ],
      },
    ],
    caption:
      '濃さを変えずに酸の体積だけを変えたときの、ちょうど中和に必要なアルカリの体積。原点を通る直線になり、両者は比例する。塩酸10cm3に水酸化ナトリウム水溶液8cm3で中和するなら、塩酸15cm3には12cm3、25cm3には20cm3が必要。なお塩酸に水を加えてうすめても、含まれる水素イオンの数は変わらないので必要な量は変わらない',
  },

  // s303：中和にともなうイオンの数の変化（この単元の最重要グラフ）
  lf_kokorikaext08_303: {
    kind: 'lineChart',
    xLabel: '加えた水酸化ナトリウム水溶液（cm3）',
    yLabel: 'イオンの数（個分）',
    xRange: [0, 40],
    yRange: [0, 42],
    series: [
      {
        label: 'H＋（減る）',
        color: '#DC2626',
        markers: true,
        points: [
          { x: 0, y: 20 },
          { x: 10, y: 10 },
          { x: 20, y: 0 },
          { x: 30, y: 0 },
          { x: 40, y: 0 },
        ],
      },
      {
        label: 'Na＋（増える）',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 10 },
          { x: 20, y: 20 },
          { x: 30, y: 30 },
          { x: 40, y: 40 },
        ],
      },
      {
        label: 'Cl−（一定）',
        color: '#16A34A',
        markers: true,
        points: [
          { x: 0, y: 20 },
          { x: 10, y: 20 },
          { x: 20, y: 20 },
          { x: 30, y: 20 },
          { x: 40, y: 20 },
        ],
      },
      {
        label: 'OH−（中和点から増える）',
        color: '#F59E0B',
        dashed: true,
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 0 },
          { x: 20, y: 0 },
          { x: 30, y: 10 },
          { x: 40, y: 20 },
        ],
      },
    ],
    caption:
      'うすい塩酸20cm3（H＋・Cl− をそれぞれ20個分ふくむ）に、同じ濃さの水酸化ナトリウム水溶液を加えたときのイオンの数。H＋ は中和されて減り、20cm3加えた中和点で0になり以後も0。Na＋ は加えた分だけ増え続け、中和点の前後で傾きは変わらない。Cl− は反応に関わらないので最初から最後まで20個分で一定。OH− は中和点までは加えたそばから水になるので0で、中和点をこえてから増え始める',
  },

  // s304：硫酸に水酸化バリウム水溶液を加えたときの電流の変化（V字型）
  lf_kokorikaext08_304: {
    kind: 'lineChart',
    xLabel: '加えた水酸化バリウム水溶液（cm3）',
    yLabel: '流れる電流（mA）',
    xRange: [0, 40],
    yRange: [0, 66],
    series: [
      {
        label: '電流',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 0, y: 60 },
          { x: 5, y: 45 },
          { x: 10, y: 30 },
          { x: 15, y: 15 },
          { x: 20, y: 0 },
          { x: 25, y: 15 },
          { x: 30, y: 30 },
          { x: 35, y: 45 },
          { x: 40, y: 60 },
        ],
      },
    ],
    caption:
      'うすい硫酸に水酸化バリウム水溶液を加えたときに流れる電流。H＋ と OH− は水になり、Ba2＋ と SO4 2− は硫酸バリウムの沈殿になるので、四種類のイオンがすべて水溶液から消える。そのため中和点（20cm3）で電流はほぼ0になる。それをこえると余った Ba2＋ と OH− が増えるので電流はふたたび大きくなり、グラフはV字型になる。塩化ナトリウムのように塩が水にとける中和では、Na＋ と Cl− が残るので電流は0にならない',
  },
};
