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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図の中の部分三角形・部分図形を色分けして塗りつぶす（参考書のように、比べている
   * 2つ・3つの三角形をそれぞれ別の色で塗ると、どことどこを比べているか一目で分かる）。
   * indicesはpointsの頂点indexを結んで塗る部分図形（3つ以上）。colorは省略時パレットを順に使う。
   */
  regions?: { indices: number[]; color?: string }[];
  /**
   * 図の中に描く円（points と同じ座標系。レンダラーが points ごと自動フィットする）。
   * 2円の共通接線のように「円＋補助三角形」を1枚で見せたいときに使う。
   */
  circles?: { x: number; y: number; r: number; label?: string }[];
  /**
   * 頂点を結ぶ辺とは別に引く補助線（points と同じ座標系）。
   * 接線・半径など、多角形の辺ではない線分を足すときに使う。
   */
  segments?: { from: Pt; to: Pt; label?: string; dashed?: boolean }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
};

// 化学反応式（係数・添字を整形して表示）
export type ChemEqFigure = {
  kind: 'chemEquation';
  // 例: "2H2 + O2 -> 2H2O"  /  "CH4 + 2O2 -> CO2 + 2H2O"
  equation: string;
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
};

// 構造式（原子の座標＋結合）
export type ChemStructFigure = {
  kind: 'chemStructure';
  atoms: { el: string; x: number; y: number }[];
  bonds: { from: number; to: number; order?: 1 | 2 | 3 }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
};

// 棒グラフ・ヒストグラム
export type BarChartFigure = {
  kind: 'barChart';
  xLabel?: string;
  yLabel?: string;
  yMax?: number;
  histogram?: boolean; // 棒を隙間なく並べる（度数分布）
  bars: { label: string; value: number; color?: string; /** 問題を解く前の画面で、値の数字を「？」にする（答えが棒の上に書いてあると先に見えてしまう） */ hidden?: boolean }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
};

// 円グラフ（割合）
export type PieChartFigure = {
  kind: 'pieChart';
  slices: { label: string; value: number; color?: string }[];
  caption?: string;
  /** 解く手順（①②③…の順で並べた文字列の配列）。動く図解で番号付きで段階的に表示する */
  steps?: string[];
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
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
  /**
   * 図を描き終えるのが steps の何番目か（1始まり）。
   * これより後ろの手順は、図が完成した状態のまま計算や結論を述べるのに使う。
   * 省略すると steps の最後の1つ手前までで描き終える。
   *
   * 指定しないと、説明より先に図ができあがってしまうことがある。
   * （円錐で「半径は6cm」と言っている時点で高さの8cmまで出ていた）
   */
  buildSteps?: number;
};

// 図解スライド（言葉・箱・矢印・図形を自由に組み合わせた解説用の図）。
// 座標は 320×240 の内部座標。parts を上から順に描き、stepParts で
// 「スライド i までに何個の部品を見せるか」（累計）を指定する。
export type DiagramElement =
  | { t: 'box'; x: number; y: number; w: number; h: number; text?: string; color?: string; fill?: string; size?: number }
  | { t: 'label'; x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; bold?: boolean }
  | { t: 'arrow'; x1: number; y1: number; x2: number; y2: number; color?: string; dashed?: boolean }
  | { t: 'line'; x1: number; y1: number; x2: number; y2: number; color?: string; dashed?: boolean; width?: number }
  | { t: 'circle'; cx: number; cy: number; r: number; color?: string; fill?: string; text?: string; size?: number }
  | { t: 'poly'; pts: [number, number][]; color?: string; fill?: string }
  | { t: 'sector'; cx: number; cy: number; r: number; from: number; to: number; color?: string; fill?: string };

export type DiagramFigure = {
  kind: 'diagram';
  parts: DiagramElement[];
  /** スライドごとの「ここまで見せる部品の数」（累計）。steps と同じ長さ */
  stepParts: number[];
  caption?: string;
  /** スライドの説明文（1枚ぶんずつ）。7枚以上を目安に、内容に必要なだけ */
  steps?: string[];
  buildSteps?: number;
};

export type Figure =
  | DiagramFigure
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
import { figuresKoushikiOyoK2Heikou } from './figures-koushiki-oyo-k2heikou';
import { figuresKoushikiOyoK1Godo } from './figures-koushiki-oyo-k1godo';
import { figuresKoushikiOyoC5Kakudo } from './figures-koushiki-oyo-c5kakudo';
import { figuresQuizAdd01 } from './figures-quiz-add01';
import { figuresSchoolChugaku02 } from './figures-school-chugaku-02';
import { figuresSchoolKoko01 } from './figures-school-koko-01';
import { figuresSchoolKoko05 } from './figures-school-koko-05';
import { figuresSchoolKoko06 } from './figures-school-koko-06';
import { figuresSchoolKoko00 } from './figures-school-koko-00';
import { figuresSchoolKoko02 } from './figures-school-koko-02';
import { figuresSchoolKoko04 } from './figures-school-koko-04';
import { figuresSchoolKoko07 } from './figures-school-koko-07';
import { figuresSchoolKoko03 } from './figures-school-koko-03';
import { figuresSchoolChugaku01 } from './figures-school-chugaku-01';
import { figuresSchoolChugaku03 } from './figures-school-chugaku-03';
import { figuresSchoolChugaku04 } from './figures-school-chugaku-04';
import { figuresSchoolChugaku09 } from './figures-school-chugaku-09';
import { figuresSchoolChugaku07 } from './figures-school-chugaku-07';
import { figuresSchoolChugaku06 } from './figures-school-chugaku-06';
import { figuresSchoolChugaku05 } from './figures-school-chugaku-05';
import { figuresSchoolChugaku00 } from './figures-school-chugaku-00';
import { figuresSchoolChugaku11 } from './figures-school-chugaku-11';
import { figuresSchoolChugaku10 } from './figures-school-chugaku-10';
import { figuresSchoolChugaku08 } from './figures-school-chugaku-08';
import { figuresSansuGap7 } from './figures-sansu-gap-7';
import { figuresMoshi202703Kokugo } from './figures-moshi-2027-03-kokugo';
import { figuresMoshi202703Eigo } from './figures-moshi-2027-03-eigo';
import { figuresMoshi202703Shakai } from './figures-moshi-2027-03-shakai';
import { figuresMoshi202703Sansu } from './figures-moshi-2027-03-sansu';
import { figuresMoshi202703Rika } from './figures-moshi-2027-03-rika';
import { figuresMoshi202703KokugoChugaku2 } from './figures-moshi-2027-03-kokugo-c2';
import { figuresMoshi202703KokugoKoko2 } from './figures-moshi-2027-03-kokugo-k2';
import { figuresMoshi202703EigoChugaku2 } from './figures-moshi-2027-03-eigo-c2';
import { figuresMoshi202703EigoKoko2 } from './figures-moshi-2027-03-eigo-k2';
import { figuresMoshi202703ShakaiChugaku2 } from './figures-moshi-2027-03-shakai-c2';
import { figuresMoshi202703ShakaiKoko2 } from './figures-moshi-2027-03-shakai-k2';
import { figuresMoshi202703SansuChugaku2 } from './figures-moshi-2027-03-sansu-c2';
import { figuresMoshi202703SansuKoko2 } from './figures-moshi-2027-03-sansu-k2';
import { figuresMoshi202703RikaChugaku2 } from './figures-moshi-2027-03-rika-c2';
import { figuresMoshi202703RikaKoko2 } from './figures-moshi-2027-03-rika-k2';
import { figuresMoshi202612EigoChugaku1 } from './figures-moshi-2026-12-eigo-c1';
import { figuresMoshi202612EigoChugaku2 } from './figures-moshi-2026-12-eigo-c2';
import { figuresMoshi202612EigoKoko1 } from './figures-moshi-2026-12-eigo-k1';
import { figuresMoshi202612EigoKoko2 } from './figures-moshi-2026-12-eigo-k2';
import { figuresMoshi202612KokugoChugaku1 } from './figures-moshi-2026-12-kokugo-c1';
import { figuresMoshi202612KokugoChugaku2 } from './figures-moshi-2026-12-kokugo-c2';
import { figuresMoshi202612KokugoKoko1 } from './figures-moshi-2026-12-kokugo-k1';
import { figuresMoshi202612KokugoKoko2 } from './figures-moshi-2026-12-kokugo-k2';
import { figuresMoshi202612RikaChugaku1 } from './figures-moshi-2026-12-rika-c1';
import { figuresMoshi202612RikaChugaku2 } from './figures-moshi-2026-12-rika-c2';
import { figuresMoshi202612RikaKoko1 } from './figures-moshi-2026-12-rika-k1';
import { figuresMoshi202612RikaKoko2 } from './figures-moshi-2026-12-rika-k2';
import { figuresMoshi202612SansuChugaku1 } from './figures-moshi-2026-12-sansu-c1';
import { figuresMoshi202612SansuChugaku2 } from './figures-moshi-2026-12-sansu-c2';
import { figuresMoshi202612SansuKoko1 } from './figures-moshi-2026-12-sansu-k1';
import { figuresMoshi202612SansuKoko2 } from './figures-moshi-2026-12-sansu-k2';
import { figuresMoshi202612ShakaiChugaku1 } from './figures-moshi-2026-12-shakai-c1';
import { figuresMoshi202612ShakaiChugaku2 } from './figures-moshi-2026-12-shakai-c2';
import { figuresMoshi202612ShakaiKoko1 } from './figures-moshi-2026-12-shakai-k1';
import { figuresMoshi202612ShakaiKoko2 } from './figures-moshi-2026-12-shakai-k2';
import { figuresHonshikenSchool_hakuryo } from './figures-honshiken-school-hakuryo';
import { figuresHonshikenSchool_hakuryo_B } from './figures-honshiken-school-hakuryo-B';
import { figuresHonshikenSchool_hakuryo_A } from './figures-honshiken-school-hakuryo-A';
import { figuresHonshikenSchool_kobe_jogakuin } from './figures-honshiken-school-kobe-jogakuin';
import { figuresHonshikenSchool_kobe_jogakuin_B } from './figures-honshiken-school-kobe-jogakuin-B';
import { figuresHonshikenSchool_kobe_jogakuin_A } from './figures-honshiken-school-kobe-jogakuin-A';
import { figuresHonshikenSchool_koko_keio_shiki } from './figures-honshiken-school-koko-keio-shiki';
import { figuresHonshikenSchool_koko_keio_shiki_B } from './figures-honshiken-school-koko-keio-shiki-B';
import { figuresHonshikenSchool_koko_keio_shiki_A } from './figures-honshiken-school-koko-keio-shiki-A';
import { figuresHonshikenSchool_koko_rakunan } from './figures-honshiken-school-koko-rakunan';
import { figuresHonshikenSchool_koko_rakunan_B } from './figures-honshiken-school-koko-rakunan-B';
import { figuresHonshikenSchool_koko_rakunan_A } from './figures-honshiken-school-koko-rakunan-A';
import { figuresHonshikenSchool_rakunan } from './figures-honshiken-school-rakunan';
import { figuresHonshikenSchool_rakunan_B } from './figures-honshiken-school-rakunan-B';
import { figuresHonshikenSchool_rakunan_A } from './figures-honshiken-school-rakunan-A';
import { figuresHonshikenSchool_rokko } from './figures-honshiken-school-rokko';
import { figuresHonshikenSchool_rokko_B } from './figures-honshiken-school-rokko-B';
import { figuresHonshikenSchool_rokko_A } from './figures-honshiken-school-rokko-A';
import { figuresHonshikenSchool_tokyo_azabu } from './figures-honshiken-school-tokyo-azabu';
import { figuresHonshikenSchool_tokyo_azabu_B } from './figures-honshiken-school-tokyo-azabu-B';
import { figuresHonshikenSchool_tokyo_azabu_A } from './figures-honshiken-school-tokyo-azabu-A';
import { figuresHonshikenSchool_tokyo_eiko } from './figures-honshiken-school-tokyo-eiko';
import { figuresHonshikenSchool_tokyo_eiko_B } from './figures-honshiken-school-tokyo-eiko-B';
import { figuresHonshikenSchool_tokyo_eiko_A } from './figures-honshiken-school-tokyo-eiko-A';
import { figuresHonshikenSchool_tokyo_joshigakuin } from './figures-honshiken-school-tokyo-joshigakuin';
import { figuresHonshikenSchool_tokyo_joshigakuin_B } from './figures-honshiken-school-tokyo-joshigakuin-B';
import { figuresHonshikenSchool_tokyo_joshigakuin_A } from './figures-honshiken-school-tokyo-joshigakuin-A';
import { figuresHonshikenSchool_tokyo_kaisei } from './figures-honshiken-school-tokyo-kaisei';
import { figuresHonshikenSchool_tokyo_musashi_A } from './figures-honshiken-school-tokyo-musashi-A';
import { figuresHonshikenSchool_tokyo_musashi_B } from './figures-honshiken-school-tokyo-musashi-B';
import { figuresHonshikenSchool_tokyo_kaijo_A } from './figures-honshiken-school-tokyo-kaijo-A';
import { figuresHonshikenSchool_tokyo_kaijo_B } from './figures-honshiken-school-tokyo-kaijo-B';
import { figuresHonshikenSchool_tokyo_toshimagaoka_A } from './figures-honshiken-school-tokyo-toshimagaoka-A';
import { figuresHonshikenSchool_tokyo_toshimagaoka_B } from './figures-honshiken-school-tokyo-toshimagaoka-B';
import { figuresHonshikenSchool_tokyo_futaba_A } from './figures-honshiken-school-tokyo-futaba-A';
import { figuresHonshikenSchool_tokyo_futaba_B } from './figures-honshiken-school-tokyo-futaba-B';
import { figuresHonshikenSchool_tokyo_kichijoji_A } from './figures-honshiken-school-tokyo-kichijoji-A';
import { figuresHonshikenSchool_tokyo_kichijoji_B } from './figures-honshiken-school-tokyo-kichijoji-B';
import { figuresHonshikenSchool_tokyo_shibumaku_A } from './figures-honshiken-school-tokyo-shibumaku-A';
import { figuresHonshikenSchool_tokyo_shibumaku_B } from './figures-honshiken-school-tokyo-shibumaku-B';
import { figuresHonshikenSchool_tokyo_asano_A } from './figures-honshiken-school-tokyo-asano-A';
import { figuresHonshikenSchool_tokyo_asano_B } from './figures-honshiken-school-tokyo-asano-B';
import { figuresHonshikenSchool_tokyo_ferris_A } from './figures-honshiken-school-tokyo-ferris-A';
import { figuresHonshikenSchool_tokyo_ferris_B } from './figures-honshiken-school-tokyo-ferris-B';
import { figuresHonshikenSchool_rakusei_A } from './figures-honshiken-school-rakusei-A';
import { figuresHonshikenSchool_rakusei_B } from './figures-honshiken-school-rakusei-B';
import { figuresHonshikenSchool_suma_A } from './figures-honshiken-school-suma-A';
import { figuresHonshikenSchool_suma_B } from './figures-honshiken-school-suma-B';
import { figuresHonshikenSchool_koko_tsukuba_A } from './figures-honshiken-school-koko-tsukuba-A';
import { figuresHonshikenSchool_koko_tsukuba_B } from './figures-honshiken-school-koko-tsukuba-B';
import { figuresHonshikenSchool_koko_shibumaku_A } from './figures-honshiken-school-koko-shibumaku-A';
import { figuresHonshikenSchool_koko_shibumaku_B } from './figures-honshiken-school-koko-shibumaku-B';
import { figuresHonshikenSchool_koko_waseda_jitsugyo_A } from './figures-honshiken-school-koko-waseda-jitsugyo-A';
import { figuresHonshikenSchool_koko_waseda_jitsugyo_B } from './figures-honshiken-school-koko-waseda-jitsugyo-B';
import { figuresHonshikenSchool_tokyo_kaisei_B } from './figures-honshiken-school-tokyo-kaisei-B';
import { figuresHonshikenSchool_tokyo_kaisei_A } from './figures-honshiken-school-tokyo-kaisei-A';
import { figuresHonshikenSchool_tokyo_komaba_toho } from './figures-honshiken-school-tokyo-komaba-toho';
import { figuresHonshikenSchool_tokyo_komaba_toho_B } from './figures-honshiken-school-tokyo-komaba-toho-B';
import { figuresHonshikenSchool_tokyo_komaba_toho_A } from './figures-honshiken-school-tokyo-komaba-toho-A';
import { figuresHonshikenSchool_tokyo_oin_sansu } from './figures-honshiken-school-tokyo-oin';
import { figuresHonshikenSchool_tokyo_oin_B } from './figures-honshiken-school-tokyo-oin-B';
import { figuresHonshikenSchool_tokyo_oin_A } from './figures-honshiken-school-tokyo-oin-A';
import { figuresHonshikenSchool_tokyo_seiko_yokohama } from './figures-honshiken-school-tokyo-seiko-yokohama';
import { figuresHonshikenSchool_tokyo_seiko_yokohama_B } from './figures-honshiken-school-tokyo-seiko-yokohama-B';
import { figuresHonshikenSchool_tokyo_seiko_yokohama_A } from './figures-honshiken-school-tokyo-seiko-yokohama-A';
import { figuresHonshikenSchool_tokyo_tsukuba_komaba } from './figures-honshiken-school-tokyo-tsukuba-komaba';
import { figuresHonshikenSchool_tokyo_tsukuba_komaba_B } from './figures-honshiken-school-tokyo-tsukuba-komaba-B';
import { figuresHonshikenSchool_tokyo_tsukuba_komaba_A } from './figures-honshiken-school-tokyo-tsukuba-komaba-A';
import { figuresHonshikenSchool_koko_kasei } from './figures-honshiken-school-koko-kasei';
import { figuresHonshikenSchool_koko_ritsumeikan } from './figures-honshiken-school-koko-ritsumeikan';
import { figuresHonshikenSchool_koko_tokai } from './figures-honshiken-school-koko-tokai';
import { figuresRitsumeikanKoko_sansu } from './figures-ritsumeikan-koko-sansu';
import { figuresRitsumeikanKoko_kokugo } from './figures-ritsumeikan-koko-kokugo';
import { figuresRitsumeikanKoko_rika } from './figures-ritsumeikan-koko-rika';
import { figuresRitsumeikanKoko_shakai } from './figures-ritsumeikan-koko-shakai';
import { figuresRitsumeikanKoko_eigo } from './figures-ritsumeikan-koko-eigo';
import { figuresHonshikenSchool_sansu } from './figures-honshiken-school-fukuoka-kurume';
import { figuresHonshikenSchool_kaimei } from './figures-honshiken-school-kaimei';
import { figuresHonshikenSchool_kankan } from './figures-honshiken-school-kankan';
import { figuresHonshikenSchool_kansai_hokuyo } from './figures-honshiken-school-kansai-hokuyo';
import { figuresHonshikenSchool_kenmei } from './figures-honshiken-school-kenmei';
import { figuresHonshikenSchool_kindai } from './figures-honshiken-school-kindai';
import { figuresHonshikenSchool_kinrankai } from './figures-honshiken-school-kinrankai';
import { figuresHonshikenSchool_koko_azabu } from './figures-honshiken-school-koko-azabu';
import { figuresHonshikenSchool_koko_hibiya } from './figures-honshiken-school-koko-hibiya';
import { figuresHonshikenSchool_koko_koyo } from './figures-honshiken-school-koko-koyo';
import { figuresHonshikenSchool_koko_meidai } from './figures-honshiken-school-koko-meidai';
import { figuresHonshikenSchool_koko_nada } from './figures-honshiken-school-koko-nada';
import { figuresHonshikenSchool_koko_nishiyamato } from './figures-honshiken-school-koko-nishiyamato';
import { figuresHonshikenSchool_koko_shitennoji } from './figures-honshiken-school-koko-shitennoji';
import { figuresHonshikenSchool_koko_todaiji } from './figures-honshiken-school-koko-todaiji';
import { figuresHonshikenSchool_koko_top } from './figures-honshiken-school-koko-top';
import { figuresHonshikenSchool_koko_waseda } from './figures-honshiken-school-koko-waseda';
import { figuresHonshikenSchool_koko_kankan } from './figures-honshiken-school-koko-kankan';
import { figuresHonshikenSchool_koko_keio } from './figures-honshiken-school-koko-keio';
import { figuresHonshikenSchool_myojo } from './figures-honshiken-school-myojo';
import { figuresHonshikenSchool_nagoya_tokai } from './figures-honshiken-school-nagoya-tokai';
import { figuresHonshikenSchool_nandai } from './figures-honshiken-school-nandai';
import { figuresHonshikenSchool_naniwa } from './figures-honshiken-school-naniwa';
import { figuresHonshikenSchool_osaka_jogakuin } from './figures-honshiken-school-osaka-jogakuin';
import { figuresHonshikenSchool_otani } from './figures-honshiken-school-otani';
import { figuresHonshikenSchool_otemon } from './figures-honshiken-school-otemon';
import { figuresHonshikenSchool_poole } from './figures-honshiken-school-poole';
import { figuresHonshikenSchool_seifu_nankai } from './figures-honshiken-school-seifu-nankai';
import { figuresHonshikenSchool_seifu } from './figures-honshiken-school-seifu';
import { sansuFigs } from './figures-honshiken-school-seiko';
import { figuresHonshikenSchool_shitennoji } from './figures-honshiken-school-shitennoji';
import { figuresHonshikenSchool_takatsuki } from './figures-honshiken-school-takatsuki';
import { figuresHonshikenSchool_tezukayama } from './figures-honshiken-school-tezukayama';
import { figuresHonshikenSchool_toin } from './figures-honshiken-school-toin';
import { figuresHonshikenSchool_tokyo_aoyama } from './figures-honshiken-school-tokyo-aoyama';
import { figuresHonshikenSchool_tokyo_chuo } from './figures-honshiken-school-tokyo-chuo';
import { figuresHonshikenSchool_tokyo_gakushuin } from './figures-honshiken-school-tokyo-gakushuin';
import { figuresHonshikenSchool_tokyo_hosei } from './figures-honshiken-school-tokyo-hosei';
import { figuresHonshikenSchool_tokyo_meidai } from './figures-honshiken-school-tokyo-meidai';
import { figuresHonshiken202702EigoChugaku1 } from './figures-honshiken-2027-02-eigo-c1';
import { figuresHonshiken202702EigoChugaku2 } from './figures-honshiken-2027-02-eigo-c2';
import { figuresHonshiken202702EigoKoko1 } from './figures-honshiken-2027-02-eigo-k1';
import { figuresHonshiken202702EigoKoko2 } from './figures-honshiken-2027-02-eigo-k2';
import { figuresHonshiken202702KokugoChugaku1 } from './figures-honshiken-2027-02-kokugo-c1';
import { figuresHonshiken202702KokugoChugaku2 } from './figures-honshiken-2027-02-kokugo-c2';
import { figuresHonshiken202702KokugoKoko1 } from './figures-honshiken-2027-02-kokugo-k1';
import { figuresHonshiken202702KokugoKoko2 } from './figures-honshiken-2027-02-kokugo-k2';
import { figuresHonshiken202702RikaChugaku1 } from './figures-honshiken-2027-02-rika-c1';
import { figuresHonshiken202702RikaChugaku2 } from './figures-honshiken-2027-02-rika-c2';
import { figuresHonshiken202702RikaKoko1 } from './figures-honshiken-2027-02-rika-k1';
import { figuresHonshiken202702RikaKoko2 } from './figures-honshiken-2027-02-rika-k2';
import { figuresHonshiken202702SansuChugaku1 } from './figures-honshiken-2027-02-sansu-c1';
import { figuresHonshiken202702SansuChugaku2 } from './figures-honshiken-2027-02-sansu-c2';
import { figuresHonshiken202702SansuKoko1 } from './figures-honshiken-2027-02-sansu-k1';
import { figuresHonshiken202702SansuKoko2 } from './figures-honshiken-2027-02-sansu-k2';
import { figuresHonshiken202702ShakaiChugaku1 } from './figures-honshiken-2027-02-shakai-c1';
import { figuresHonshiken202702ShakaiChugaku2 } from './figures-honshiken-2027-02-shakai-c2';
import { figuresHonshiken202702ShakaiKoko1 } from './figures-honshiken-2027-02-shakai-k1';
import { figuresHonshiken202702ShakaiKoko2 } from './figures-honshiken-2027-02-shakai-k2';
import { figuresHonshiken202701EigoChugaku1 } from './figures-honshiken-2027-01-eigo-c1';
import { figuresHonshiken202701EigoChugaku2 } from './figures-honshiken-2027-01-eigo-c2';
import { figuresHonshiken202701EigoKoko1 } from './figures-honshiken-2027-01-eigo-k1';
import { figuresHonshiken202701EigoKoko2 } from './figures-honshiken-2027-01-eigo-k2';
import { figuresHonshiken202701KokugoChugaku1 } from './figures-honshiken-2027-01-kokugo-c1';
import { figuresHonshiken202701KokugoChugaku2 } from './figures-honshiken-2027-01-kokugo-c2';
import { figuresHonshiken202701KokugoKoko1 } from './figures-honshiken-2027-01-kokugo-k1';
import { figuresHonshiken202701KokugoKoko2 } from './figures-honshiken-2027-01-kokugo-k2';
import { figuresHonshiken202701RikaChugaku1 } from './figures-honshiken-2027-01-rika-c1';
import { figuresHonshiken202701RikaChugaku2 } from './figures-honshiken-2027-01-rika-c2';
import { figuresHonshiken202701RikaKoko1 } from './figures-honshiken-2027-01-rika-k1';
import { figuresHonshiken202701RikaKoko2 } from './figures-honshiken-2027-01-rika-k2';
import { figuresHonshiken202701SansuChugaku1 } from './figures-honshiken-2027-01-sansu-c1';
import { figuresHonshiken202701SansuChugaku2 } from './figures-honshiken-2027-01-sansu-c2';
import { figuresHonshiken202701SansuKoko1 } from './figures-honshiken-2027-01-sansu-k1';
import { figuresHonshiken202701SansuKoko2 } from './figures-honshiken-2027-01-sansu-k2';
import { figuresHonshiken202701ShakaiChugaku1 } from './figures-honshiken-2027-01-shakai-c1';
import { figuresHonshiken202701ShakaiChugaku2 } from './figures-honshiken-2027-01-shakai-c2';
import { figuresHonshiken202701ShakaiKoko1 } from './figures-honshiken-2027-01-shakai-k1';
import { figuresHonshiken202701ShakaiKoko2 } from './figures-honshiken-2027-01-shakai-k2';

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
  ...figuresKoushikiOyoK2Heikou,
  ...figuresKoushikiOyoK1Godo,
  ...figuresKoushikiOyoC5Kakudo,
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
  ...figuresQuizAdd01,
  ...figuresSchoolChugaku02,
  ...figuresSchoolKoko01,
  ...figuresSchoolKoko05,
  ...figuresSchoolKoko06,
  ...figuresSchoolKoko00,
  ...figuresSchoolKoko02,
  ...figuresSchoolKoko04,
  ...figuresSchoolKoko07,
  ...figuresSchoolKoko03,
  ...figuresSchoolChugaku01,
  ...figuresSchoolChugaku03,
  ...figuresSchoolChugaku04,
  ...figuresSchoolChugaku09,
  ...figuresSchoolChugaku07,
  ...figuresSchoolChugaku06,
  ...figuresSchoolChugaku05,
  ...figuresSchoolChugaku00,
  ...figuresSchoolChugaku11,
  ...figuresSchoolChugaku10,
  ...figuresSchoolChugaku08,
  ...figuresSansuGap7,
  ...figuresMoshi202703Kokugo,
  ...figuresMoshi202703Eigo,
  ...figuresMoshi202703Shakai,
  ...figuresMoshi202703Sansu,
  ...figuresMoshi202703Rika,
  ...figuresMoshi202703KokugoChugaku2,
  ...figuresMoshi202703KokugoKoko2,
  ...figuresMoshi202703EigoChugaku2,
  ...figuresMoshi202703EigoKoko2,
  ...figuresMoshi202703ShakaiChugaku2,
  ...figuresMoshi202703ShakaiKoko2,
  ...figuresMoshi202703SansuChugaku2,
  ...figuresMoshi202703SansuKoko2,
  ...figuresMoshi202703RikaChugaku2,
  ...figuresMoshi202703RikaKoko2,
  ...figuresMoshi202612EigoChugaku1,
  ...figuresMoshi202612EigoChugaku2,
  ...figuresMoshi202612EigoKoko1,
  ...figuresMoshi202612EigoKoko2,
  ...figuresMoshi202612KokugoChugaku1,
  ...figuresMoshi202612KokugoChugaku2,
  ...figuresMoshi202612KokugoKoko1,
  ...figuresMoshi202612KokugoKoko2,
  ...figuresMoshi202612RikaChugaku1,
  ...figuresMoshi202612RikaChugaku2,
  ...figuresMoshi202612RikaKoko1,
  ...figuresMoshi202612RikaKoko2,
  ...figuresMoshi202612SansuChugaku1,
  ...figuresMoshi202612SansuChugaku2,
  ...figuresMoshi202612SansuKoko1,
  ...figuresMoshi202612SansuKoko2,
  ...figuresMoshi202612ShakaiChugaku1,
  ...figuresMoshi202612ShakaiChugaku2,
  ...figuresMoshi202612ShakaiKoko1,
  ...figuresMoshi202612ShakaiKoko2,
  ...figuresHonshikenSchool_hakuryo,
  ...figuresHonshikenSchool_hakuryo_B,
  ...figuresHonshikenSchool_hakuryo_A,
  ...figuresHonshikenSchool_kobe_jogakuin,
  ...figuresHonshikenSchool_kobe_jogakuin_B,
  ...figuresHonshikenSchool_kobe_jogakuin_A,
  ...figuresHonshikenSchool_koko_keio_shiki,
  ...figuresHonshikenSchool_koko_keio_shiki_B,
  ...figuresHonshikenSchool_koko_keio_shiki_A,
  ...figuresHonshikenSchool_koko_rakunan,
  ...figuresHonshikenSchool_koko_rakunan_B,
  ...figuresHonshikenSchool_koko_rakunan_A,
  ...figuresHonshikenSchool_rakunan,
  ...figuresHonshikenSchool_rakunan_B,
  ...figuresHonshikenSchool_rakunan_A,
  ...figuresHonshikenSchool_rokko,
  ...figuresHonshikenSchool_rokko_B,
  ...figuresHonshikenSchool_rokko_A,
  ...figuresHonshikenSchool_tokyo_azabu,
  ...figuresHonshikenSchool_tokyo_azabu_B,
  ...figuresHonshikenSchool_tokyo_azabu_A,
  ...figuresHonshikenSchool_tokyo_eiko,
  ...figuresHonshikenSchool_tokyo_eiko_B,
  ...figuresHonshikenSchool_tokyo_eiko_A,
  ...figuresHonshikenSchool_tokyo_joshigakuin,
  ...figuresHonshikenSchool_tokyo_joshigakuin_B,
  ...figuresHonshikenSchool_tokyo_joshigakuin_A,
  ...figuresHonshikenSchool_tokyo_kaisei,
  ...figuresHonshikenSchool_tokyo_musashi_A,
  ...figuresHonshikenSchool_tokyo_musashi_B,
  ...figuresHonshikenSchool_tokyo_kaijo_A,
  ...figuresHonshikenSchool_tokyo_kaijo_B,
  ...figuresHonshikenSchool_tokyo_toshimagaoka_A,
  ...figuresHonshikenSchool_tokyo_toshimagaoka_B,
  ...figuresHonshikenSchool_tokyo_futaba_A,
  ...figuresHonshikenSchool_tokyo_futaba_B,
  ...figuresHonshikenSchool_tokyo_kichijoji_A,
  ...figuresHonshikenSchool_tokyo_kichijoji_B,
  ...figuresHonshikenSchool_tokyo_shibumaku_A,
  ...figuresHonshikenSchool_tokyo_shibumaku_B,
  ...figuresHonshikenSchool_tokyo_asano_A,
  ...figuresHonshikenSchool_tokyo_asano_B,
  ...figuresHonshikenSchool_tokyo_ferris_A,
  ...figuresHonshikenSchool_tokyo_ferris_B,
  ...figuresHonshikenSchool_rakusei_A,
  ...figuresHonshikenSchool_rakusei_B,
  ...figuresHonshikenSchool_suma_A,
  ...figuresHonshikenSchool_suma_B,
  ...figuresHonshikenSchool_koko_tsukuba_A,
  ...figuresHonshikenSchool_koko_tsukuba_B,
  ...figuresHonshikenSchool_koko_shibumaku_A,
  ...figuresHonshikenSchool_koko_shibumaku_B,
  ...figuresHonshikenSchool_koko_waseda_jitsugyo_A,
  ...figuresHonshikenSchool_koko_waseda_jitsugyo_B,
  ...figuresHonshikenSchool_tokyo_kaisei_B,
  ...figuresHonshikenSchool_tokyo_kaisei_A,
  ...figuresHonshikenSchool_tokyo_komaba_toho,
  ...figuresHonshikenSchool_tokyo_komaba_toho_B,
  ...figuresHonshikenSchool_tokyo_komaba_toho_A,
  ...figuresHonshikenSchool_tokyo_oin_sansu,
  ...figuresHonshikenSchool_tokyo_oin_B,
  ...figuresHonshikenSchool_tokyo_oin_A,
  ...figuresHonshikenSchool_tokyo_seiko_yokohama,
  ...figuresHonshikenSchool_tokyo_seiko_yokohama_B,
  ...figuresHonshikenSchool_tokyo_seiko_yokohama_A,
  ...figuresHonshikenSchool_tokyo_tsukuba_komaba,
  ...figuresHonshikenSchool_tokyo_tsukuba_komaba_B,
  ...figuresHonshikenSchool_tokyo_tsukuba_komaba_A,
  ...figuresHonshikenSchool_koko_kasei,
  ...figuresHonshikenSchool_koko_ritsumeikan,
  ...figuresHonshikenSchool_koko_tokai,
  ...figuresRitsumeikanKoko_sansu,
  ...figuresRitsumeikanKoko_kokugo,
  ...figuresRitsumeikanKoko_rika,
  ...figuresRitsumeikanKoko_shakai,
  ...figuresRitsumeikanKoko_eigo,
  ...figuresHonshikenSchool_sansu,
  ...figuresHonshikenSchool_kaimei,
  ...figuresHonshikenSchool_kankan,
  ...figuresHonshikenSchool_kansai_hokuyo,
  ...figuresHonshikenSchool_kenmei,
  ...figuresHonshikenSchool_kindai,
  ...figuresHonshikenSchool_kinrankai,
  ...figuresHonshikenSchool_koko_azabu,
  ...figuresHonshikenSchool_koko_hibiya,
  ...figuresHonshikenSchool_koko_koyo,
  ...figuresHonshikenSchool_koko_meidai,
  ...figuresHonshikenSchool_koko_nada,
  ...figuresHonshikenSchool_koko_nishiyamato,
  ...figuresHonshikenSchool_koko_shitennoji,
  ...figuresHonshikenSchool_koko_todaiji,
  ...figuresHonshikenSchool_koko_top,
  ...figuresHonshikenSchool_koko_waseda,
  ...figuresHonshikenSchool_koko_kankan,
  ...figuresHonshikenSchool_koko_keio,
  ...figuresHonshikenSchool_myojo,
  ...figuresHonshikenSchool_nagoya_tokai,
  ...figuresHonshikenSchool_nandai,
  ...figuresHonshikenSchool_naniwa,
  ...figuresHonshikenSchool_osaka_jogakuin,
  ...figuresHonshikenSchool_otani,
  ...figuresHonshikenSchool_otemon,
  ...figuresHonshikenSchool_poole,
  ...figuresHonshikenSchool_seifu_nankai,
  ...figuresHonshikenSchool_seifu,
  ...sansuFigs,
  ...figuresHonshikenSchool_shitennoji,
  ...figuresHonshikenSchool_takatsuki,
  ...figuresHonshikenSchool_tezukayama,
  ...figuresHonshikenSchool_toin,
  ...figuresHonshikenSchool_tokyo_aoyama,
  ...figuresHonshikenSchool_tokyo_chuo,
  ...figuresHonshikenSchool_tokyo_gakushuin,
  ...figuresHonshikenSchool_tokyo_hosei,
  ...figuresHonshikenSchool_tokyo_meidai,
  ...figuresHonshiken202702EigoChugaku1,
  ...figuresHonshiken202702EigoChugaku2,
  ...figuresHonshiken202702EigoKoko1,
  ...figuresHonshiken202702EigoKoko2,
  ...figuresHonshiken202702KokugoChugaku1,
  ...figuresHonshiken202702KokugoChugaku2,
  ...figuresHonshiken202702KokugoKoko1,
  ...figuresHonshiken202702KokugoKoko2,
  ...figuresHonshiken202702RikaChugaku1,
  ...figuresHonshiken202702RikaChugaku2,
  ...figuresHonshiken202702RikaKoko1,
  ...figuresHonshiken202702RikaKoko2,
  ...figuresHonshiken202702SansuChugaku1,
  ...figuresHonshiken202702SansuChugaku2,
  ...figuresHonshiken202702SansuKoko1,
  ...figuresHonshiken202702SansuKoko2,
  ...figuresHonshiken202702ShakaiChugaku1,
  ...figuresHonshiken202702ShakaiChugaku2,
  ...figuresHonshiken202702ShakaiKoko1,
  ...figuresHonshiken202702ShakaiKoko2,
  ...figuresHonshiken202701EigoChugaku1,
  ...figuresHonshiken202701EigoChugaku2,
  ...figuresHonshiken202701EigoKoko1,
  ...figuresHonshiken202701EigoKoko2,
  ...figuresHonshiken202701KokugoChugaku1,
  ...figuresHonshiken202701KokugoChugaku2,
  ...figuresHonshiken202701KokugoKoko1,
  ...figuresHonshiken202701KokugoKoko2,
  ...figuresHonshiken202701RikaChugaku1,
  ...figuresHonshiken202701RikaChugaku2,
  ...figuresHonshiken202701RikaKoko1,
  ...figuresHonshiken202701RikaKoko2,
  ...figuresHonshiken202701SansuChugaku1,
  ...figuresHonshiken202701SansuChugaku2,
  ...figuresHonshiken202701SansuKoko1,
  ...figuresHonshiken202701SansuKoko2,
  ...figuresHonshiken202701ShakaiChugaku1,
  ...figuresHonshiken202701ShakaiChugaku2,
  ...figuresHonshiken202701ShakaiKoko1,
  ...figuresHonshiken202701ShakaiKoko2,
};

export function getFigure(questionId: string): Figure | null {
  return figures[questionId] ?? null;
}
