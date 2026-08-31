// 問題に添える「実際の図形」を宣言的に定義するデータ。
// components/FigureView.tsx が react-native-svg で描画する。
// 画像（ラスター）ではなくベクター描画なので、拡大しても綺麗で、
// 座標・辺の長さ・角度が解答と必ず一致する。

export type Pt = { x: number; y: number; label?: string };

// 座標平面（比例・反比例・一次関数・二次関数のグラフ）
export type CoordFigure = {
  kind: 'coordinate';
  xRange?: [number, number];
  yRange?: [number, number];
  lines?: { a: number; b: number; label?: string; color?: string }[]; // y = a·x + b
  parabolas?: { a: number; b?: number; c?: number; label?: string; color?: string }[]; // y = a·x²(+b·x+c)
  hyperbolas?: { k: number; label?: string; color?: string }[]; // y = k / x
  points?: Pt[];
  segments?: [Pt, Pt][];
  polygon?: Pt[]; // 塗りつぶす領域（例：三角形OAB）
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 多角形（三角形・四角形などの面積・合同・角度）
export type PolyFigure = {
  kind: 'polygon';
  points: Pt[]; // 頂点（任意単位・レンダラーが自動フィット）。順に結ぶ
  sideLabels?: (string | null)[]; // 各辺 points[i]–points[i+1] のラベル
  fill?: boolean;
  rightAngles?: number[]; // 直角マークを付ける頂点index
  equalSides?: number[][]; // 等しい辺のグループ（辺index）。ticそれぞれ本数を変える
  equalAngles?: number[][]; // 等しい角のグループ（頂点index）
  diagonals?: [number, number][]; // 対角線（頂点index対）
  heights?: { from: number; toEdge: [number, number]; label?: string }[]; // 高さ（垂線）
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 円（円周角・中心角・弦・おうぎ形）
export type CircleFigure = {
  kind: 'circle';
  radiusLabel?: string;
  points?: { angle: number; label?: string }[]; // 円周上の点（角度：0=右、反時計回り）
  chords?: [number, number][]; // pointsのindex対を結ぶ弦
  sector?: { from: number; to: number; label?: string }; // 塗りつぶすおうぎ形（度）
  showCenter?: boolean;
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 立体（直方体・円柱・円すい・三角柱・球）
export type SolidFigure = {
  kind: 'solid';
  shape: 'cube' | 'cuboid' | 'cylinder' | 'cone' | 'triangularPrism' | 'sphere';
  labels?: {
    width?: string;
    depth?: string;
    height?: string;
    radius?: string;
    slant?: string;
  };
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 数直線（不等式の解・範囲）
export type NumberLineFigure = {
  kind: 'numberLine';
  min: number;
  max: number;
  step?: number;
  points?: { x: number; label?: string; open?: boolean }[];
  segments?: { from: number; to: number; fromOpen?: boolean; toOpen?: boolean }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 箱ひげ図
export type BoxplotFigure = {
  kind: 'boxplot';
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  scaleMin?: number;
  scaleMax?: number;
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 化学反応式（係数・添字を整形して表示）
export type ChemEqFigure = {
  kind: 'chemEquation';
  // 例: "2H2 + O2 -> 2H2O"  /  "CH4 + 2O2 -> CO2 + 2H2O"
  equation: string;
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 構造式（原子の座標＋結合）
export type ChemStructFigure = {
  kind: 'chemStructure';
  atoms: { el: string; x: number; y: number }[];
  bonds: { from: number; to: number; order?: 1 | 2 | 3 }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 折れ線・曲線グラフ（複数系列・軸ラベル）。溶解度曲線・冷却曲線・電流電圧(I-V)・
// 光合成曲線・ばねの伸び・時間変化など、任意の測定データをプロットする。
export type LineChartFigure = {
  kind: 'lineChart';
  xLabel?: string;
  yLabel?: string;
  xRange?: [number, number];
  yRange?: [number, number];
  series: {
    label?: string;
    color?: string;
    dashed?: boolean;
    markers?: boolean; // データ点に●を打つ
    points: { x: number; y: number }[];
  }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 棒グラフ・ヒストグラム
export type BarChartFigure = {
  kind: 'barChart';
  xLabel?: string;
  yLabel?: string;
  yMax?: number;
  histogram?: boolean; // 棒を隙間なく並べる（度数分布）
  bars: { label: string; value: number; color?: string }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 円グラフ（割合）
export type PieChartFigure = {
  kind: 'pieChart';
  slices: { label: string; value: number; color?: string }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 回路図（電池・抵抗/電熱線・豆電球・スイッチ・電流計・電圧計）
export type CircuitComponent = {
  type: 'resistor' | 'bulb' | 'switch' | 'ammeter' | 'voltmeter';
  label?: string;
};
export type CircuitFigure = {
  kind: 'circuit';
  layout?: 'series' | 'parallel';
  series?: CircuitComponent[]; // 直列に並ぶ素子（上辺）
  branches?: CircuitComponent[][]; // 並列の各枝（layout:'parallel'）
  battery?: { label?: string; cells?: number };
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 展開図（立方体・直方体）
export type NetFigure = {
  kind: 'net';
  shape: 'cube' | 'cuboid';
  faceLabels?: string[]; // 十字型に並ぶ6面のラベル（任意）
  dims?: { w: string; d: string; h: string }; // 直方体の寸法ラベル
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 日本地図（都道府県の実形状＋任意のマーカー）。
// 座標は data/japanPrefectures.ts と同じ viewBox 0 0 300 420。
// 遠方の島（南鳥島・沖ノ鳥島など）は実際の距離では収まらないため、
// 方角が合う位置に寄せて配置してよい（キャプションで実際の遠さを補足する）。
export type JapanMapFigure = {
  kind: 'japanMap';
  markers?: { x: number; y: number; label: string }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 生物の構造図（花・種子・葉・こん虫・心臓・消化器官・目・耳など、名称が
// 覚えにくい部分をラベル付きの模式図で示す）。テンプレートごとに固定の
// 部位キーがあり、hidePartsで「答えにあたる部位」のラベルだけ隠せる
// （その部位を指す引き出し線は残るが文字は「？」になる）。
export type BioDiagramTemplate =
  | 'flower'
  | 'seed'
  | 'leafCrossSection'
  | 'insectBody'
  | 'heart'
  | 'digestiveSystem'
  | 'eye'
  | 'ear';
export type BioDiagramFigure = {
  kind: 'bioDiagram';
  template: BioDiagramTemplate;
  hideParts?: string[]; // 隠したい部位キー（そのテンプレートの部位一覧はFigureView.tsx参照）
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

// 地層・柱状図（複数地点の対比）
export type StratumFigure = {
  kind: 'stratum';
  columns: {
    label?: string;
    topLabel?: string; // 地表の標高など
    layers: {
      name: string;
      thickness: number;
      pattern?: 'mud' | 'sand' | 'gravel' | 'lime' | 'ash' | 'plain';
    }[];
  }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
};

export type Figure =
  | CoordFigure
  | PolyFigure
  | CircleFigure
  | SolidFigure
  | NumberLineFigure
  | BoxplotFigure
  | ChemEqFigure
  | ChemStructFigure
  | LineChartFigure
  | BarChartFigure
  | PieChartFigure
  | CircuitFigure
  | NetFigure
  | StratumFigure
  | JapanMapFigure
  | BioDiagramFigure;

// 問題ID → 図形。各バッチファイルから登録をマージする。
import { figuresSample } from './figures-sample';
import { figuresMath1 } from './figures-math-1';
import { figuresMath2 } from './figures-math-2';
import { figuresMath3 } from './figures-math-3';
import { figuresMath4 } from './figures-math-4';
import { figuresMath5 } from './figures-math-5';
import { figuresMath6 } from './figures-math-6';
import { figuresSci1 } from './figures-sci-1';
import { figuresSci2 } from './figures-sci-2';
import { figuresSci3 } from './figures-sci-3';
import { figuresSci4 } from './figures-sci-4';
import { figuresMath7 } from './figures-math-7';
import { figuresSocial1 } from './figures-social-1';
import { figuresOsakaJogakuin } from './school_osaka_jogakuin';
import { figuresKokoAzabu } from './school_koko_azabu';
import { figuresKokoNanzan } from './school_koko_nanzan';
import { figuresKokoSeinan } from './school_koko_seinan';
import { figuresKokoTaki } from './school_koko_taki';
import { figuresKokoKurume } from './school_koko_kurume';
import { figuresKokoOhori } from './school_koko_ohori';
import { figuresKokoTokai } from './school_koko_tokai';
import { figuresKokoShitennoji } from './school_koko_shitennoji';
import { figuresKokoKaseiFill } from './school_koko_kasei_fill';
import { figuresKokoTodaijiFill } from './school_koko_todaiji_fill';
import { figuresKokoKoyoFill } from './school_koko_koyo_fill';
import { figuresKokoKeioFill } from './school_koko_keio_fill';
import { figuresKokoNadaFill } from './school_koko_nada_fill';
import { figuresKokoNishiyamatoFill } from './school_koko_nishiyamato_fill';
import { figuresKokoMeidaiFill } from './school_koko_meidai_fill';
import { figuresCoreSansu } from './figures-core-sansu';
import { figuresCoreRika } from './figures-core-rika';
import { figuresKokoSansu } from './figures-koko-sansu';
import { figuresKokoRika } from './figures-koko-rika';
import { figuresSansuGap1 } from './figures-sansu-gap-1';
import { figuresSansuGap2 } from './figures-sansu-gap-2';
import { figuresSansuGap3 } from './figures-sansu-gap-3';
import { figuresSansuGap4 } from './figures-sansu-gap-4';
import { figuresSansuGap5 } from './figures-sansu-gap-5';
import { figuresSansuGap6 } from './figures-sansu-gap-6';
import { figuresBio1 } from './figures-bio-1';
import { figuresBioGap1 } from './figures-bio-gap-1';
import { figuresBioGap2 } from './figures-bio-gap-2';
import { figuresGradeE5Sansu } from './figures-grade-e5-sansu';
import { figuresGradeE4Sansu } from './figures-grade-e4-sansu';
import { figuresGradeJ1Sansu } from './figures-grade-j1-sansu';
import { figuresGradeE6Sansu } from './figures-grade-e6-sansu';
import { figuresGradeJ2Sansu } from './figures-grade-j2-sansu';
import { figuresGradeJ3Sansu } from './figures-grade-j3-sansu';
import { figuresGradeE4Rika } from './figures-grade-e4-rika';
import { figuresGradeE5Rika } from './figures-grade-e5-rika';
import { figuresGradeE6Rika } from './figures-grade-e6-rika';
import { figuresGradeJ1Rika } from './figures-grade-j1-rika';
import { figuresGradeJ2Rika } from './figures-grade-j2-rika';
import { figuresGradeJ3Rika } from './figures-grade-j3-rika';
import { figuresKoushikiC1Menseki } from './figures-koushiki-c1menseki';
import { figuresKoushikiC2En } from './figures-koushiki-c2en';
import { figuresKoushikiC3Tairyoku1 } from './figures-koushiki-c3tairyoku1';
import { figuresKoushikiC4Tairyoku2 } from './figures-koushiki-c4tairyoku2';
import { figuresKoushikiC6Soji } from './figures-koushiki-c6soji';
import { figuresKoushikiC5Kakudo } from './figures-koushiki-c5kakudo';
import { figuresKoushikiK2Heikou } from './figures-koushiki-k2heikou';
import { figuresKoushikiK4En1 } from './figures-koushiki-k4en1';
import { figuresKoushikiK5En2 } from './figures-koushiki-k5en2';
import { figuresKoushikiK1Godo } from './figures-koushiki-k1godo';
import { figuresKoushikiK3Souji } from './figures-koushiki-k3souji';
import { figuresKoushikiK6Sanpei } from './figures-koushiki-k6sanpei';
import { figuresKoushikiOyoC3Tairyoku1 } from './figures-koushiki-oyo-c3tairyoku1';
import { figuresKoushikiOyoC4Tairyoku2 } from './figures-koushiki-oyo-c4tairyoku2';
import { figuresKoushikiOyoC6Soji } from './figures-koushiki-oyo-c6soji';
import { figuresKoushikiOyoK4En1 } from './figures-koushiki-oyo-k4en1';
import { figuresKoushikiOyoC2En } from './figures-koushiki-oyo-c2en';
import { figuresKoushikiOyoK6Sanpei } from './figures-koushiki-oyo-k6sanpei';
import { figuresKoushikiOyoK5En2 } from './figures-koushiki-oyo-k5en2';
import { figuresKoushikiOyoC1Menseki } from './figures-koushiki-oyo-c1menseki';
import { figuresKoushikiOyoK3Souji } from './figures-koushiki-oyo-k3souji';

export const figures: Record<string, Figure> = {
  ...figuresKoushikiOyoC3Tairyoku1,
  ...figuresKoushikiOyoC4Tairyoku2,
  ...figuresKoushikiOyoC6Soji,
  ...figuresKoushikiOyoK4En1,
  ...figuresKoushikiOyoC2En,
  ...figuresKoushikiOyoK6Sanpei,
  ...figuresKoushikiOyoK5En2,
  ...figuresKoushikiOyoC1Menseki,
  ...figuresKoushikiOyoK3Souji,
  ...figuresKoushikiC1Menseki,
  ...figuresKoushikiC2En,
  ...figuresKoushikiC3Tairyoku1,
  ...figuresKoushikiC4Tairyoku2,
  ...figuresKoushikiC6Soji,
  ...figuresKoushikiC5Kakudo,
  ...figuresKoushikiK2Heikou,
  ...figuresKoushikiK4En1,
  ...figuresKoushikiK5En2,
  ...figuresKoushikiK1Godo,
  ...figuresKoushikiK3Souji,
  ...figuresKoushikiK6Sanpei,
  // 「解く順番の図解」の動作見本。長方形の面積・周の長さ・対角線を
  // ①②③の手順付きで、動く図解の進行に合わせて順番に表示する。
  chugaku_sansu_ex_01_006: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8 },
      { x: 12, y: 8 },
      { x: 12, y: 0 },
      { x: 0, y: 0 },
    ],
    sideLabels: ['12cm', '8cm', null, null],
    rightAngles: [0, 1, 2, 3],
    diagonals: [[0, 2]],
    steps: [
      '面積 = 縦 × 横 = 8 × 12 = 96cm²',
      '周の長さ = (縦 + 横) × 2 = (8 + 12) × 2 = 40cm',
      '対角線 = √(8² + 12²) = √208 = 4√13 cm（三平方の定理）',
    ],
  },
  ...figuresSample,
  ...figuresCoreSansu,
  ...figuresCoreRika,
  ...figuresKokoSansu,
  ...figuresKokoRika,
  ...figuresMath1,
  ...figuresMath2,
  ...figuresMath3,
  ...figuresMath4,
  ...figuresMath5,
  ...figuresMath6,
  ...figuresMath7,
  ...figuresSci1,
  ...figuresSci2,
  ...figuresSci3,
  ...figuresSci4,
  ...figuresSocial1,
  ...figuresOsakaJogakuin,
  ...figuresKokoAzabu,
  ...figuresKokoNanzan,
  ...figuresKokoSeinan,
  ...figuresKokoTaki,
  ...figuresKokoKurume,
  ...figuresKokoOhori,
  ...figuresKokoTokai,
  ...figuresKokoShitennoji,
  ...figuresKokoKaseiFill,
  ...figuresKokoTodaijiFill,
  ...figuresKokoKoyoFill,
  ...figuresKokoKeioFill,
  ...figuresKokoNadaFill,
  ...figuresKokoNishiyamatoFill,
  ...figuresKokoMeidaiFill,
  ...figuresSansuGap1,
  ...figuresSansuGap2,
  ...figuresSansuGap3,
  ...figuresSansuGap4,
  ...figuresSansuGap5,
  ...figuresSansuGap6,
  ...figuresBio1,
  ...figuresBioGap1,
  ...figuresBioGap2,
  ...figuresGradeE5Sansu,
  ...figuresGradeE4Sansu,
  ...figuresGradeJ1Sansu,
  ...figuresGradeE6Sansu,
  ...figuresGradeJ2Sansu,
  ...figuresGradeJ3Sansu,
  ...figuresGradeE4Rika,
  ...figuresGradeE5Rika,
  ...figuresGradeE6Rika,
  ...figuresGradeJ1Rika,
  ...figuresGradeJ2Rika,
  ...figuresGradeJ3Rika,
};

export function getFigure(questionId: string): Figure | null {
  return figures[questionId] ?? null;
}
