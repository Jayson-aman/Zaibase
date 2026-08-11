import type { Figure } from './figures';

// 高校受験 数学「入試実戦演習・得点戦略」拡張ユニット（koko_math_s411〜s450）の教科書用図解。
// キーは lessons-koko-math-ext12.ts の figureId と対応（lf_kokomathext12_XXX、XXX はセッション番号）。
// 得点戦略の単元なので、①配点・時間配分などの数値、②実際の入試問題の図、の二種類に絞ってある（40課中19課）。
export const lessonFigsKokoMathExt12: Record<string, Figure> = {
  // s411：模試の失点原因の内訳（計算ミスが失点の大半を占めることを数値で示す）
  lf_kokomathext12_411: {
    kind: 'barChart',
    xLabel: '失点の原因',
    yLabel: '割合（％）',
    yMax: 40,
    bars: [
      { label: '符号ミス', value: 32, color: '#0EA5E9' },
      { label: '移項ミス', value: 18, color: '#0284C7' },
      { label: '通分・約分', value: 15, color: '#0369A1' },
      { label: '写しまちがい', value: 12, color: '#64748B' },
      { label: '問題文の読み違え', value: 12, color: '#F59E0B' },
      { label: '本当に解けない', value: 11, color: '#DC2626' },
    ],
    caption: '数学の失点のうち「本当に解けなかった」のは約1割にすぎない。残り9割は符号・移項・通分・書き写しといった手続きのミスで、手順を固定するだけで取り返せる部分である',
  },

  // s414：平方根の近似値を数直線上の位置として覚える
  lf_kokomathext12_414: {
    kind: 'numberLine',
    min: 0,
    max: 6,
    step: 1,
    points: [
      { x: 1.414, label: '√2≒1.41' },
      { x: 2.236, label: '√5≒2.24' },
      { x: 3.162, label: '√10≒3.16' },
      { x: 3.464, label: '2√3=√12≒3.46' },
      { x: 4.472, label: '2√5=√20≒4.47' },
    ],
    caption: '√2≒1.41、√3≒1.73、√5≒2.24 を数直線上の位置で覚えておくと、答えの妥当性チェックに使える。√5 は 2 と 3 の間、2√3=√12 は 3 と 4 の間（3²=9 < 12 < 16=4²）',
  },

  // s416：小問集合1問あたりの持ち時間（秒）
  lf_kokomathext12_416: {
    kind: 'barChart',
    xLabel: '大問1 小問集合の各問',
    yLabel: '目標時間（秒）',
    yMax: 100,
    bars: [
      { label: '(1)正負の数', value: 40, color: '#0EA5E9' },
      { label: '(2)文字式', value: 40, color: '#0EA5E9' },
      { label: '(3)展開', value: 50, color: '#0284C7' },
      { label: '(4)平方根', value: 50, color: '#0284C7' },
      { label: '(5)方程式', value: 60, color: '#0369A1' },
      { label: '(6)確率', value: 70, color: '#0369A1' },
      { label: '(7)角度', value: 70, color: '#64748B' },
      { label: '(8)作図', value: 90, color: '#F59E0B' },
    ],
    caption: '小問集合8問の目標時間の合計は 40+40+50+50+60+70+70+90＝470秒＝7分50秒。1問1分を超えたら飛ばす、という基準をこの表で体に入れておく',
  },

  // s419：50分の時間配分の設計図
  lf_kokomathext12_419: {
    kind: 'barChart',
    xLabel: '大問',
    yLabel: '配分時間（分）',
    yMax: 14,
    bars: [
      { label: '大問1 小問集合', value: 12, color: '#0EA5E9' },
      { label: '大問2 確率・データ', value: 7, color: '#0284C7' },
      { label: '大問3 関数', value: 10, color: '#0369A1' },
      { label: '大問4 図形・証明', value: 11, color: '#64748B' },
      { label: '大問5 空間・規則性', value: 5, color: '#F59E0B' },
      { label: '見直し', value: 5, color: '#16A34A' },
    ],
    caption: '試験時間50分の配分例。12+7+10+11+5+5＝50分。見直しの5分を最初から予算に入れておくのが要点で、ここを削ると単位・符号のミスがそのまま失点になる',
  },

  // s420：公立高校入試 数学の配点内訳（100点満点の典型例）
  lf_kokomathext12_420: {
    kind: 'barChart',
    xLabel: '大問',
    yLabel: '配点（点）',
    yMax: 35,
    bars: [
      { label: '大問1 小問集合', value: 30, color: '#0EA5E9' },
      { label: '大問2 確率・データ', value: 15, color: '#0284C7' },
      { label: '大問3 関数', value: 20, color: '#0369A1' },
      { label: '大問4 図形・証明', value: 20, color: '#64748B' },
      { label: '大問5 空間・規則性', value: 15, color: '#F59E0B' },
    ],
    caption: '公立高校入試の配点の典型例（合計100点）。大問1と大問2で45点、つまり全体の半分近くが基本問題である。ここを落とさないだけで合格ラインの大半に届く',
  },

  // s422：追いつき問題（一次関数2本の交点）
  lf_kokomathext12_422: {
    kind: 'coordinate',
    xRange: [0, 18],
    yRange: [0, 1300],
    lines: [
      { a: 60, b: 0, label: '弟 y=60x' },
      { a: 100, b: -500, label: '兄 y=100x−500' },
    ],
    points: [{ x: 12.5, y: 750, label: '(12.5, 750)' }],
    caption: '弟は分速60mで家を出発、その5分後に兄が分速100mで追いかける。兄の式は y=100(x−5)=100x−500（実際に動くのは x≧5 の部分）。60x=100x−500 を解いて x=12.5、y=750。弟の出発から12.5分後、家から750mの地点で追いつく',
  },

  // s423：平行四辺形の対角線と合同（公立の証明の定番図）
  lf_kokomathext12_423: {
    kind: 'polygon',
    points: [
      { x: 1, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 7, y: 4, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '平行四辺形ABCDの対角線AC・BDの交点をOとする。AB//DC より錯角が等しく、AB=DC（平行四辺形の対辺）なので、1組の辺とその両端の角がそれぞれ等しく △ABO≡△CDO。ここから AO=CO、BO=DO（対角線はそれぞれの中点で交わる）が導ける',
  },

  // s426：放物線と直線の交点・三角形の面積（難関私立の定番）
  lf_kokomathext12_426: {
    kind: 'coordinate',
    xRange: [-4, 6],
    yRange: [-1, 10],
    parabolas: [{ a: 0.5, label: 'y=½x²' }],
    lines: [{ a: 1, b: 4, label: 'y=x+4' }],
    points: [
      { x: -2, y: 2, label: 'A(−2, 2)' },
      { x: 4, y: 8, label: 'B(4, 8)' },
      { x: 0, y: 4, label: 'C(0, 4)' },
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: -2, y: 2 },
      { x: 4, y: 8 },
    ],
    caption: '放物線 y=½x² と直線 y=x+4 の交点は A(−2, 2)、B(4, 8)。△OAB は y軸との交点 C(0, 4) で2つに分け、OC=4 を共通の底辺とみて、面積＝½×4×2＋½×4×4＝4＋8＝12',
  },

  // s427：2弦の交点と方べきの定理（相似の複合）
  lf_kokomathext12_427: {
    kind: 'circle',
    points: [
      { angle: 150, label: 'A' },
      { angle: 210, label: 'B' },
      { angle: 30, label: 'C' },
      { angle: 330, label: 'D' },
    ],
    chords: [
      [0, 3],
      [1, 2],
    ],
    caption: '2つの弦AD・BCの交点をPとする。∠PAB=∠PCD（弧BDに対する円周角）、∠APB=∠CPD（対頂角）より △PAB∽△PCD。よって PA:PC=PB:PD すなわち PA×PD=PB×PC（方べきの定理）',
  },

  // s428：立方体を3頂点を通る平面で切る
  lf_kokomathext12_428: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '1辺6cmの立方体（体積 6³＝216cm³）。頂点Aに集まる3辺の反対の端B・D・Eを通る平面で切ると、切り取られる三角すいA-BDEの体積は ⅓×(½×6×6)×6＝36cm³、残りは216−36＝180cm³。切り口△BDEは1辺6√2cmの正三角形で面積 18√3cm²',
  },

  // s429：二等辺三角形を使う合同証明の基本図
  lf_kokomathext12_429: {
    kind: 'polygon',
    points: [
      { x: 4, y: 7, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    equalSides: [[0, 2]],
    equalAngles: [[1, 2]],
    caption: 'AB=AC の二等辺三角形ABC。証明で使える材料は「仮定 AB=AC」「二等辺三角形の底角は等しいので ∠ABC=∠ACB」「共通の辺・共通の角」の3つ。辺BC上に BD=CE となる点D・Eをとれば △ABD≡△ACE が示せる',
  },

  // s430：DE//BC の相似（相似比と面積比）
  lf_kokomathext12_430: {
    kind: 'polygon',
    points: [
      { x: 0, y: 9, label: 'A' },
      { x: -2.667, y: 3, label: 'D' },
      { x: -4, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 5.333, y: 3, label: 'E' },
    ],
    diagonals: [[1, 4]],
    caption: 'DE//BC、AD:DB＝2:1 のとき △ADE∽△ABC で相似比は AD:AB＝2:3。BC＝12cm なら DE＝12×⅔＝8cm。面積比は 2²:3²＝4:9 なので、台形DBCE と △ADE の面積比は 5:4 になる',
  },

  // s431：半円の弧に対する円周角は90°
  lf_kokomathext12_431: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 70, label: 'C' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    caption: 'ABが直径のとき ∠ACB＝90°。OA=OB=OC（半径）より △OAC と △OBC はどちらも二等辺三角形。∠OCA＝a、∠OCB＝b とおくと 2a+2b＝180° から a+b＝90°、つまり ∠ACB＝90° と示せる',
  },

  // s438：補助線1本で解けるブーメラン形
  lf_kokomathext12_438: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: -5, y: 0, label: 'B' },
      { x: 0, y: 3, label: 'D' },
      { x: 5, y: 0, label: 'C' },
    ],
    diagonals: [[0, 2]],
    caption: 'へこみのある四角形（ブーメラン形）。頂点AとDを結ぶ補助線を引いて △ABD と △ACD に分けると、∠BDC＝∠A+∠B+∠C が示せる。∠A=30°、∠B=25°、∠C=20° なら ∠BDC＝75°',
  },

  // s440：弦と中心を結ぶ補助線
  lf_kokomathext12_440: {
    kind: 'circle',
    showCenter: true,
    radiusLabel: 'r',
    points: [
      { angle: 210, label: 'A' },
      { angle: 330, label: 'B' },
      { angle: 90, label: 'C' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    caption: '弦ABが与えられたら、まず中心Oと結ぶ補助線OA・OBを引く。OA=OB=半径なので △OAB は二等辺三角形になり、Oから弦ABに下ろした垂線はABを2等分する。中心角 ∠AOB＝120° のとき、優弧上の点Cについて円周角 ∠ACB＝60°',
  },

  // s441：直方体の対角線は「必要な直角三角形だけ」平面に描き直す
  lf_kokomathext12_441: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '12cm' },
    caption: '縦3cm・横4cm・高さ12cmの直方体。まず底面の対角線を √(3²+4²)＝5cm と出し、次にそれを1辺とする直角三角形で立体の対角線 √(5²+12²)＝√169＝13cm を求める。立体は「必要な直角三角形だけ」を平面に描き直すのが鉄則',
  },

  // s442：座標平面上の三角形の面積（y軸で2つに分ける）
  lf_kokomathext12_442: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-1, 11],
    parabolas: [{ a: 1, label: 'y=x²' }],
    lines: [{ a: 2, b: 3, label: 'y=2x+3' }],
    points: [
      { x: -1, y: 1, label: 'A(−1, 1)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
      { x: 0, y: 3, label: 'C(0, 3)' },
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: -1, y: 1 },
      { x: 3, y: 9 },
    ],
    caption: '放物線 y=x² と直線 y=2x+3 の交点は x²=2x+3 すなわち (x−3)(x+1)=0 より A(−1, 1)、B(3, 9)。△OAB は y軸で分割し、OC＝3 を底辺として 面積＝½×3×1＋½×3×3＝1.5＋4.5＝6',
  },

  // s443：等積変形（底辺に平行な直線上なら頂点を動かしてよい）
  lf_kokomathext12_443: {
    kind: 'coordinate',
    xRange: [-1, 8],
    yRange: [-1, 8],
    lines: [{ a: 0, b: 6, label: 'y=6（OAに平行）' }],
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 4, y: 0, label: 'A(4, 0)' },
      { x: 2, y: 6, label: 'B(2, 6)' },
      { x: 6, y: 6, label: "B'(6, 6)" },
    ],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 6, y: 6 },
      ],
      [
        { x: 4, y: 0 },
        { x: 6, y: 6 },
      ],
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 2, y: 6 },
    ],
    caption: '△OAB の面積は ½×4×6＝12。頂点Bを直線 y=6 上のどこへ動かしても（例：B′(6, 6)）、底辺OA＝4 と高さ6が変わらないので面積は12のまま。これが等積変形',
  },

  // s445：動点の面積グラフ（折れ目は頂点通過の時刻）
  lf_kokomathext12_445: {
    kind: 'coordinate',
    xRange: [0, 14],
    yRange: [0, 34],
    points: [
      { x: 5, y: 30, label: '(5, 30)' },
      { x: 8, y: 30, label: '(8, 30)' },
      { x: 13, y: 0, label: '(13, 0)' },
    ],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 5, y: 30 },
      ],
      [
        { x: 5, y: 30 },
        { x: 8, y: 30 },
      ],
      [
        { x: 8, y: 30 },
        { x: 13, y: 0 },
      ],
    ],
    caption: '長方形ABCD（AB=6cm、BC=10cm）の周上を点Pが毎秒2cmで B→C→D→A と動くときの △ABP の面積 y（横軸 x は秒）。0≦x≦5 は y=6x、5≦x≦8 は y=30（一定）、8≦x≦13 は y=78−6x。折れ目はPが頂点C（5秒）・D（8秒）を通過する時刻',
  },
};
