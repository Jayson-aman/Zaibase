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
};

// 化学反応式（係数・添字を整形して表示）
export type ChemEqFigure = {
  kind: 'chemEquation';
  // 例: "2H2 + O2 -> 2H2O"  /  "CH4 + 2O2 -> CO2 + 2H2O"
  equation: string;
  caption?: string;
};

// 構造式（原子の座標＋結合）
export type ChemStructFigure = {
  kind: 'chemStructure';
  atoms: { el: string; x: number; y: number }[];
  bonds: { from: number; to: number; order?: 1 | 2 | 3 }[];
  caption?: string;
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
};

// 円グラフ（割合）
export type PieChartFigure = {
  kind: 'pieChart';
  slices: { label: string; value: number; color?: string }[];
  caption?: string;
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
};

// 展開図（立方体・直方体）
export type NetFigure = {
  kind: 'net';
  shape: 'cube' | 'cuboid';
  faceLabels?: string[]; // 十字型に並ぶ6面のラベル（任意）
  dims?: { w: string; d: string; h: string }; // 直方体の寸法ラベル
  caption?: string;
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
  | StratumFigure;

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

export const figures: Record<string, Figure> = {
  ...figuresSample,
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
};

export function getFigure(questionId: string): Figure | null {
  return figures[questionId] ?? null;
}
