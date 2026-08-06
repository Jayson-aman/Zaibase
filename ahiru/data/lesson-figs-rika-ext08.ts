import type { Figure } from './figures';

// 中学受験 理科「VIII. 水溶液の性質・中和反応」教科書用図解バッチ（rika_s256〜rika_s295 対応）。
// キーは lessons-rika-ext08.ts の figureId と対応する。
export const lessonFigsRikaExt08: Record<string, Figure> = {
  // ── 1. 水溶液の性質（酸性・中性・アルカリ性、指示薬） ─────────────────────────────
  // s256: 酸性・中性・アルカリ性の位置関係（導入・数値なし）
  lf_rex08_01: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 1, label: '酸性' },
      { x: 5, label: '中性' },
      { x: 9, label: 'アルカリ性' },
    ],
    caption: '水溶液は大きく3つの性質に分かれる。中性は酸性とアルカリ性のちょうど真ん中',
  },
  // s258: BTB溶液の色とpHのおおまかな対応
  lf_rex08_02: {
    kind: 'numberLine',
    min: 0,
    max: 14,
    step: 2,
    points: [
      { x: 3, label: '黄色(酸性)' },
      { x: 7, label: '緑色(中性)' },
      { x: 11, label: '青色(アルカリ性)' },
    ],
    caption: 'BTB溶液は酸性で黄色、中性で緑色、アルカリ性で青色になる',
  },
  // s259: フェノールフタレイン液は酸性・中性で無色、アルカリ性でのみ赤色
  lf_rex08_03: {
    kind: 'numberLine',
    min: 0,
    max: 14,
    step: 2,
    points: [
      { x: 3, label: '無色' },
      { x: 7, label: '無色' },
      { x: 11, label: '赤色(アルカリ性)' },
    ],
    caption: 'フェノールフタレイン液は酸性・中性ではどちらも無色。無色＝中性とは限らない',
  },
  // s260: 亜鉛にうすい塩酸を加えると水素が発生する
  lf_rex08_04: {
    kind: 'chemEquation',
    equation: 'Zn + 2HCl -> ZnCl2 + H2',
    caption: '亜鉛(Zn)にうすい塩酸を加えると、塩化亜鉛と水素(H₂)が発生する',
  },
  // s261: 代表的な水溶液のpH（第1回まとめ）
  lf_rex08_05: {
    kind: 'barChart',
    yLabel: 'pH',
    yMax: 14,
    bars: [
      { label: '胃液', value: 2 },
      { label: '食酢', value: 3 },
      { label: '水道水', value: 7 },
      { label: 'せっけん水', value: 10 },
      { label: '漂白剤', value: 13 },
    ],
    caption: '数字が小さいほど酸性が強く、大きいほどアルカリ性が強い(pHの詳細は次章で学習)',
  },

  // ── 2. pHとリトマス紙・BTB液・フェノールフタレイン液 ─────────────────────────────
  // s262: pHスケール0〜14の基本
  lf_rex08_06: {
    kind: 'numberLine',
    min: 0,
    max: 14,
    step: 2,
    points: [
      { x: 0, label: '強い酸性' },
      { x: 7, label: '中性' },
      { x: 14, label: '強いアルカリ性' },
    ],
    caption: 'pHは0〜14の数値。7が中性、7より小さいほど酸性が強く、7より大きいほどアルカリ性が強い',
  },
  // s263: 強酸・弱酸・強アルカリ・弱アルカリのpH比較
  lf_rex08_07: {
    kind: 'barChart',
    yLabel: 'pH',
    yMax: 14,
    bars: [
      { label: '塩酸', value: 1 },
      { label: '食酢', value: 3 },
      { label: '炭酸水', value: 5 },
      { label: '水', value: 7 },
      { label: '重そう水', value: 8 },
      { label: 'アンモニア水', value: 11 },
      { label: 'NaOH水溶液', value: 13 },
    ],
    caption: '塩酸・NaOH水溶液は強酸・強アルカリでpHが7から遠く離れている。炭酸水・重そう水は弱い',
  },
  // s266: pHのランキング実戦演習
  lf_rex08_08: {
    kind: 'barChart',
    yLabel: 'pH',
    yMax: 14,
    bars: [
      { label: '食酢', value: 3 },
      { label: '炭酸水', value: 5 },
      { label: '水道水', value: 7 },
      { label: '重そう水', value: 8 },
      { label: 'せっけん水', value: 9 },
      { label: 'NaOH水溶液', value: 13 },
    ],
    caption: '酸性の中で最も7に近い炭酸水(pH5)が最も弱い酸性',
  },

  // ── 3. 代表的な水溶液の分類 ─────────────────────────────
  // s267: 塩酸・炭酸水・食塩水のpH比較
  lf_rex08_09: {
    kind: 'barChart',
    yLabel: 'pH',
    yMax: 14,
    bars: [
      { label: '塩酸', value: 1 },
      { label: '炭酸水', value: 5 },
      { label: '食塩水', value: 7 },
    ],
    caption: '塩酸・炭酸水は酸性、食塩水は中性',
  },
  // s268: 石灰水に二酸化炭素を通すと白くにごる
  lf_rex08_10: {
    kind: 'chemEquation',
    equation: 'CO2 + Ca(OH)2 -> CaCO3 + H2O',
    caption: '石灰水(水酸化カルシウム水溶液)に二酸化炭素を通すと、白い沈殿(炭酸カルシウム)ができて白くにごる',
  },
  // s269: 代表的な水溶液のうち、気体が溶けているもの・固体が溶けているものの内訳
  lf_rex08_11: {
    kind: 'pieChart',
    slices: [
      { label: '気体が溶けている(塩酸・炭酸水・アンモニア水)', value: 3 },
      { label: '固体が溶けている(食塩水・砂糖水・NaOH水溶液・石灰水)', value: 4 },
    ],
    caption: '代表的な水溶液7種類の内訳。気体が溶けているものと固体が溶けているものに分かれる',
  },
  // s270: アンモニア分子の構造（刺激臭のある気体で、水に溶けるとアルカリ性）
  lf_rex08_12: {
    kind: 'chemStructure',
    atoms: [
      { el: 'N', x: 0, y: 0 },
      { el: 'H', x: -1.2, y: 0.9 },
      { el: 'H', x: 1.2, y: 0.9 },
      { el: 'H', x: 0, y: -1.4 },
    ],
    bonds: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 0, to: 3 },
    ],
    caption: 'アンモニア分子(NH₃)。刺激臭のある気体で、水によく溶けてアルカリ性を示す',
  },
  // s271: 水溶液の分類（酸性・中性・アルカリ性 × 気体・固体）総合問題の例
  lf_rex08_13: {
    kind: 'barChart',
    yLabel: '水溶液の数(組)',
    bars: [
      { label: '酸性・気体', value: 8 },
      { label: '酸性・固体', value: 2 },
      { label: '中性・固体', value: 6 },
      { label: 'アルカリ性・固体', value: 3 },
      { label: 'アルカリ性・気体', value: 1 },
    ],
    caption: 'あるクラスの実験結果の分類例(合計20種類)。酸性でも固体が溶けている例(ホウ酸水など)がある',
  },

  // ── 4. 中和反応の基本 ─────────────────────────────
  // s272: 塩酸と水酸化ナトリウム水溶液の中和（最も基本の反応式）
  lf_rex08_14: {
    kind: 'chemEquation',
    equation: 'HCl + NaOH -> NaCl + H2O',
    caption: '酸(塩酸)＋アルカリ(水酸化ナトリウム水溶液)→塩(食塩)＋水。中和反応の最も基本の形',
  },
  // s273: 塩酸A20mLと水溶液B30mLがちょうど中和する体積比
  lf_rex08_15: {
    kind: 'barChart',
    yLabel: '体積(mL)',
    bars: [
      { label: '塩酸A', value: 20 },
      { label: '水溶液B', value: 30 },
    ],
    caption: 'A:B=20:30=2:3の体積比でちょうど中和する(BTB溶液が緑色になる)',
  },
  // s274: 硫酸と水酸化バリウム水溶液の中和（水に溶けにくい塩ができる例）
  lf_rex08_16: {
    kind: 'chemEquation',
    equation: 'H2SO4 + Ba(OH)2 -> BaSO4 + 2H2O',
    caption: 'できる塩(硫酸バリウム)は水にほとんど溶けないため、白い沈殿になって水溶液がにごる',
  },
  // s275: 石灰水に二酸化炭素を通す反応（気体と水溶液の中和的な反応の例）
  lf_rex08_17: {
    kind: 'chemEquation',
    equation: 'CO2 + Ca(OH)2 -> CaCO3 + H2O',
    caption: 'さらに大量の二酸化炭素を通じ続けると、白い沈殿(炭酸カルシウム)は水に溶けやすい物質に変わり、にごりが消えて透明にもどる',
  },
  // s276: 塩酸とアンモニア水（ともに気体がとけた水溶液どうし）が出会うと白煙が生じる
  lf_rex08_18: {
    kind: 'chemEquation',
    equation: 'HCl + NH3 -> NH4Cl',
    caption: '塩化水素とアンモニアが出会うと、塩化アンモニウムの白い煙(白煙)が生じる',
  },
  // s277: 硫酸と水酸化ナトリウムの中和反応式（係数をそろえる練習）
  lf_rex08_19: {
    kind: 'chemEquation',
    equation: 'H2SO4 + 2NaOH -> Na2SO4 + 2H2O',
    caption: '左辺のNaを2個にそろえるためNaOHの前に係数2が必要。水も2個に増える',
  },

  // ── 5. 中和反応の計算問題 ─────────────────────────────
  // s278: 塩酸Aの体積とちょうど中和する水溶液Bの体積は比例する(A:B=10:15=2:3)
  lf_rex08_20: {
    kind: 'lineChart',
    xLabel: '塩酸Aの体積(mL)',
    yLabel: 'ちょうど中和するBの体積(mL)',
    xRange: [0, 40],
    yRange: [0, 65],
    series: [
      {
        label: 'A:B=2:3',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 15 },
          { x: 20, y: 30 },
          { x: 30, y: 45 },
          { x: 40, y: 60 },
        ],
      },
    ],
    caption: '原点を通る直線。Aの体積が2倍になれば、必要なBの体積も2倍になる',
  },
  // s279: 塩酸A50mLに水溶液B30mLを加えたとき(酸が過剰)の内訳
  lf_rex08_21: {
    kind: 'barChart',
    yLabel: '体積(mL)',
    bars: [
      { label: '反応した塩酸A', value: 20 },
      { label: '残った塩酸A(過剰)', value: 30 },
    ],
    caption: '合計50mLのうち20mLが水溶液B30mLと反応し、30mLは未反応のまま残る(水溶液は酸性)',
  },
  // s280: 塩酸A20mLに水溶液B50mLを加えたとき(アルカリが過剰)の内訳
  lf_rex08_22: {
    kind: 'barChart',
    yLabel: '体積(mL)',
    bars: [
      { label: '反応した水溶液B', value: 30 },
      { label: '余った水溶液B(過剰)', value: 20 },
    ],
    caption: 'A20mLと反応するBは30mLだけ。残り20mLは反応せず余ってアルカリ性を示す',
  },
  // s281: ちょうど中和させたときの塩酸Aの体積と生じる食塩の質量は比例する
  lf_rex08_23: {
    kind: 'lineChart',
    xLabel: '塩酸Aの体積(mL)(ちょうど中和)',
    yLabel: '生じる食塩の質量(g)',
    xRange: [0, 60],
    yRange: [0, 8],
    series: [
      {
        label: '食塩の質量',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 20, y: 2.4 },
          { x: 50, y: 6 },
          { x: 60, y: 7.2 },
        ],
      },
    ],
    caption: '生じる食塩の質量はA20mLあたり2.4g(0.12g/mL)の割合で比例する',
  },
  // s282: 塩酸A20mL固定・水溶液Bの体積を変えたときの食塩の質量(頭打ちグラフ)
  lf_rex08_24: {
    kind: 'lineChart',
    xLabel: '加えた水溶液Bの体積(mL)',
    yLabel: '生じた食塩の質量(g)',
    xRange: [0, 60],
    yRange: [0, 3],
    series: [
      {
        label: '食塩の質量',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 0.8 },
          { x: 20, y: 1.6 },
          { x: 30, y: 2.4 },
          { x: 40, y: 2.4 },
          { x: 60, y: 2.4 },
        ],
      },
    ],
    caption: 'B=30mLで折れ曲がり、それ以降は水平(一定)になる。塩酸A20mLを使い切ったため',
  },
  // s283: 塩酸A20mL固定・水溶液Bの体積とpHの変化(中和点付近で急変化)
  lf_rex08_25: {
    kind: 'lineChart',
    xLabel: '加えた水溶液Bの体積(mL)',
    yLabel: 'pH',
    xRange: [0, 60],
    yRange: [0, 14],
    series: [
      {
        label: 'pH',
        markers: true,
        points: [
          { x: 0, y: 1 },
          { x: 20, y: 2 },
          { x: 28, y: 4 },
          { x: 30, y: 7 },
          { x: 32, y: 10 },
          { x: 40, y: 12 },
          { x: 60, y: 13 },
        ],
      },
    ],
    caption: 'B=30mLでpHがちょうど7(中性)になる。中和点の直前・直後でpHが急激に変化する',
  },
  // s284: 濃度の異なる2種類の塩酸を混ぜて中和させる応用問題
  lf_rex08_26: {
    kind: 'barChart',
    yLabel: 'Aに換算した体積(mL)',
    bars: [
      { label: '塩酸A(10mL)', value: 10 },
      { label: '塩酸C(A換算で20mL相当)', value: 20 },
      { label: '必要な水溶液B', value: 45 },
    ],
    caption: '濃度が2倍の塩酸Cは、同じ体積でもAの2倍のはたらきをする。合計A30mL相当を中和するにはB45mL必要',
  },

  // ── 6. 気体・固体が溶けている水溶液の区別 ─────────────────────────────
  // s285: 気体が溶けている水溶液は加熱しても固体が残らない
  lf_rex08_27: {
    kind: 'barChart',
    yLabel: '蒸発後に残る固体(g)',
    yMax: 1,
    bars: [
      { label: '塩酸', value: 0 },
      { label: 'アンモニア水', value: 0 },
      { label: '炭酸水', value: 0 },
    ],
    caption: '気体が溶けている水溶液は、加熱して蒸発させても固体は残らない(0g)',
  },
  // s286: 食塩水を加熱すると水だけが蒸発し、濃度が濃くなる
  lf_rex08_28: {
    kind: 'barChart',
    yLabel: '濃度(%)',
    yMax: 50,
    bars: [
      { label: '蒸発前(食塩水100g中に食塩20g)', value: 20 },
      { label: '水50g蒸発後(食塩水50g中に食塩20g)', value: 40 },
    ],
    caption: '水だけが蒸発して食塩は残るため、濃度は20%→40%に濃くなる',
  },
  // s287: 中和実験で蒸発後に残る固体の質量(酸が過剰でも変わらないが、アルカリが過剰だと増える)
  lf_rex08_29: {
    kind: 'barChart',
    yLabel: '蒸発後に残る固体の質量(g)',
    yMax: 5,
    bars: [
      { label: 'ちょうど中和(A20+B30)', value: 2.4 },
      { label: '酸が過剰(A50+B30)', value: 2.4 },
      { label: 'アルカリが過剰(A20+B50)', value: 4.4 },
    ],
    caption: '酸が過剰でも残る固体は2.4gのまま変わらないが、アルカリが過剰だと固体(NaOH)2.0gが上乗せされ4.4gになる',
  },

  // ── 7. 水溶液分野の入試実戦演習 ─────────────────────────────
  // s289: 5種類の未知の水溶液を指示薬で分類した結果
  lf_rex08_30: {
    kind: 'pieChart',
    slices: [
      { label: '酸性', value: 2 },
      { label: '中性', value: 1 },
      { label: 'アルカリ性', value: 2 },
    ],
    caption: '5種類の水溶液(塩酸・食塩水・石灰水・炭酸水・アンモニア水)を指示薬で分類した結果',
  },
  // s290: 塩酸D40mLに水酸化カリウム水溶液Eを加えたときの未反応の塩酸の割合
  lf_rex08_31: {
    kind: 'lineChart',
    xLabel: '加えたE(水酸化カリウム水溶液)の体積(mL)',
    yLabel: '残っている塩酸D(未反応)の割合(%)',
    xRange: [0, 90],
    yRange: [0, 100],
    series: [
      {
        label: '未反応の割合',
        markers: true,
        points: [
          { x: 0, y: 100 },
          { x: 30, y: 50 },
          { x: 60, y: 0 },
          { x: 90, y: 0 },
        ],
      },
    ],
    caption: 'E=60mLで塩酸Dはすべて反応し尽くす(0%)。それ以降Eを加えても変化しない',
  },
  // s291: 塩酸F30mLと水溶液G20mLの中和に、追加の塩酸Fを再中和する応用問題
  lf_rex08_32: {
    kind: 'barChart',
    yLabel: '体積(mL)',
    bars: [
      { label: '最初のF', value: 30 },
      { label: '最初のG', value: 20 },
      { label: '追加したF', value: 15 },
      { label: '再中和に必要な追加G', value: 10 },
    ],
    caption: 'F:G=3:2の比を保つように追加のG(15×2/3=10mL)を求める',
  },
  // s292: 石灰石に塩酸を加えたときに発生する二酸化炭素の体積(頭打ちグラフ)
  lf_rex08_33: {
    kind: 'lineChart',
    xLabel: '加えた塩酸の体積(mL)',
    yLabel: '発生した二酸化炭素の体積(mL)',
    xRange: [0, 80],
    yRange: [0, 800],
    series: [
      {
        label: '発生したCO2',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 20, y: 240 },
          { x: 40, y: 480 },
          { x: 60, y: 720 },
          { x: 80, y: 720 },
        ],
      },
    ],
    caption: '塩酸60mLで石灰石がすべて溶けきり、それ以上は気体の量が増えない',
  },
  // s293: 蒸発後の固体の質量から水溶液Iが過剰に加えられたことを推定する
  lf_rex08_34: {
    kind: 'barChart',
    yLabel: '質量(g)',
    yMax: 5,
    bars: [
      { label: 'ちょうど中和した場合(予想)', value: 3.6 },
      { label: '実際に残った固体', value: 4.2 },
    ],
    caption: '差の0.6gは、過剰に加えたIの中の水酸化ナトリウム(0.6÷0.10＝6mL分)',
  },
  // s294: 塩酸J40mL固定・水溶液Kの体積を変えた4つの実験のBTB結果
  lf_rex08_35: {
    kind: 'barChart',
    yLabel: '水溶液Kの体積(mL)',
    bars: [
      { label: '①K20(黄)', value: 20 },
      { label: '②K40(黄)', value: 40 },
      { label: '③K60(緑)', value: 60 },
      { label: '④K80(青)', value: 80 },
    ],
    caption: 'J40mL一定に対し、K60mLでちょうど中性(緑)になる',
  },
  // s295: 単元総まとめ・pHスケールの最終確認
  lf_rex08_36: {
    kind: 'numberLine',
    min: 0,
    max: 14,
    step: 2,
    points: [
      { x: 0, label: '強酸性' },
      { x: 7, label: '中性' },
      { x: 14, label: '強アルカリ性' },
    ],
    caption: '水溶液の性質・中和反応の総まとめ。pH・指示薬・中和計算・気体と固体の区別を復習しよう',
  },
};
