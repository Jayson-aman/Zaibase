import type { Figure } from './figures';

// 高校受験 理科「運動とエネルギー・仕事」拡張ユニット（koko_rika_s146〜koko_rika_s185）の図解。
// キーは lessons-koko-rika-ext05.ts の figureId と完全一致させてある（全40セッション中20課に付与）。
// 記録タイマーは「東日本＝50Hz＝1打点1/50秒（0.02秒）」「西日本＝60Hz＝1打点1/60秒（約0.0167秒）」で統一。
// 数値はすべて本文の計算・答えと一致するよう検算済み（v=距離/時間、W=F×距離、位置E=重さ×高さ、運動E=½mv²）。
export const lessonFigsKokoRikaExt05: Record<string, Figure> = {
  // s146：移動距離と時間のグラフ。途中で止まっても「全体の距離÷全体の時間」が平均の速さ
  lf_kokorikaext05_146: {
    kind: 'lineChart',
    xLabel: '時間 (s)',
    yLabel: '移動距離 (m)',
    xRange: [0, 40],
    yRange: [0, 80],
    series: [
      {
        label: '実際の動き',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 20 },
          { x: 20, y: 20 },
          { x: 40, y: 80 },
        ],
      },
      {
        label: '平均の速さ 2.0 m/s',
        color: '#F59E0B',
        dashed: true,
        points: [
          { x: 0, y: 0 },
          { x: 40, y: 80 },
        ],
      },
    ],
    caption:
      '最初の10秒で20m進み、次の10秒は止まり（グラフが水平）、最後の20秒で60m進んだようす。平均の速さは全体の距離80m÷全体の時間40秒＝2.0m/s（オレンジの直線の傾き）。20〜40秒の区間だけなら60m÷20秒＝3.0m/sで、平均の速さとは一致しない',
  },

  // s148：記録タイマーの打点。等速のときは打点間隔が一定
  lf_kokorikaext05_148: {
    kind: 'barChart',
    xLabel: '5打点ごとに切ったテープ（東日本・1区間0.1秒）',
    yLabel: 'テープの長さ (cm)',
    yMax: 5,
    bars: [
      { label: '①', value: 3.0, color: '#0EA5E9' },
      { label: '②', value: 3.0, color: '#0EA5E9' },
      { label: '③', value: 3.0, color: '#0EA5E9' },
      { label: '④', value: 3.0, color: '#0EA5E9' },
      { label: '⑤', value: 3.0, color: '#0EA5E9' },
      { label: '⑥', value: 3.0, color: '#0EA5E9' },
    ],
    caption:
      '東日本（50Hz）の記録タイマーで打った等速直線運動のテープを、5打点ごと（＝打点間隔5つ分＝0.02秒×5＝0.1秒）に切って並べたもの。どの区間も3.0cmで一定なので、速さは3.0cm÷0.1秒＝30cm/s＝0.30m/sのまま変わらない',
  },

  // s149：だんだん速くなる運動のテープ。長さが 1,3,5,7,9,11cm と 2cm ずつ増える
  lf_kokorikaext05_149: {
    kind: 'barChart',
    xLabel: '5打点ごとに切ったテープ（東日本・1区間0.1秒）',
    yLabel: 'テープの長さ (cm)',
    yMax: 13,
    bars: [
      { label: '①', value: 1.0, color: '#0EA5E9' },
      { label: '②', value: 3.0, color: '#0EA5E9' },
      { label: '③', value: 5.0, color: '#0EA5E9' },
      { label: '④', value: 7.0, color: '#0EA5E9' },
      { label: '⑤', value: 9.0, color: '#0EA5E9' },
      { label: '⑥', value: 11.0, color: '#0EA5E9' },
    ],
    caption:
      '静止から動き出した台車のテープ（東日本50Hz・5打点＝0.1秒ごとに切断）。長さは1.0→3.0→5.0→7.0→9.0→11.0cmで、増え方が2.0cmずつ一定。各区間の平均の速さは0.10／0.30／0.50／0.70／0.90／1.10m/sとなり、0.1秒あたり0.20m/sずつ増える。0.6秒間の移動距離は合計36cm＝0.36m',
  },

  // s150：上のテープから作った速さ－時間グラフ（右上がりの直線）
  lf_kokorikaext05_150: {
    kind: 'lineChart',
    xLabel: '時間 (s)',
    yLabel: '速さ (m/s)',
    xRange: [0, 0.6],
    yRange: [0, 1.2],
    series: [
      {
        label: '各区間の平均の速さ',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0.05, y: 0.1 },
          { x: 0.15, y: 0.3 },
          { x: 0.25, y: 0.5 },
          { x: 0.35, y: 0.7 },
          { x: 0.45, y: 0.9 },
          { x: 0.55, y: 1.1 },
        ],
      },
      {
        label: '原点までのばした直線',
        color: '#F59E0B',
        dashed: true,
        points: [
          { x: 0, y: 0 },
          { x: 0.6, y: 1.2 },
        ],
      },
    ],
    caption:
      'テープの各区間の平均の速さを、その区間の「まん中の時刻」に点で打ったもの（区間①は0〜0.1秒なので0.05秒の位置）。点が一直線に並び、原点を通る右上がりの直線になる。傾きは1.2m/s÷0.6s＝2.0で、1秒あたり2.0m/sずつ速くなることを表す',
  },

  // s152：等速直線運動の速さ－時間グラフ。水平な直線＋面積＝距離
  lf_kokorikaext05_152: {
    kind: 'lineChart',
    xLabel: '時間 (s)',
    yLabel: '速さ (m/s)',
    xRange: [0, 5],
    yRange: [0, 0.6],
    series: [
      {
        label: '等速直線運動',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0.4 },
          { x: 1, y: 0.4 },
          { x: 2, y: 0.4 },
          { x: 3, y: 0.4 },
          { x: 4, y: 0.4 },
          { x: 5, y: 0.4 },
        ],
      },
    ],
    caption:
      '速さ0.40m/sの等速直線運動の速さ－時間グラフ。時間がたっても速さが変わらないので水平な直線になる。グラフと横軸ではさまれた長方形の面積0.40m/s×5s＝2.0mが、5秒間に進んだ距離を表す',
  },

  // s153：移動距離－時間グラフ。傾きが速さ
  lf_kokorikaext05_153: {
    kind: 'lineChart',
    xLabel: '時間 (s)',
    yLabel: '移動距離 (m)',
    xRange: [0, 5],
    yRange: [0, 4],
    series: [
      {
        label: '台車A 0.40 m/s',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 2.0 },
        ],
      },
      {
        label: '台車B 0.80 m/s',
        color: '#16A34A',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 4.0 },
        ],
      },
    ],
    caption:
      '等速直線運動の移動距離－時間グラフは原点を通る直線になり、その傾きが速さを表す。台車Aは5秒で2.0m進むので2.0÷5＝0.40m/s、台車Bは5秒で4.0m進むので4.0÷5＝0.80m/s。Bの傾きはAのちょうど2倍',
  },

  // s156：斜面を下る台車のテープ（3.0cmずつ増える）
  lf_kokorikaext05_156: {
    kind: 'barChart',
    xLabel: '5打点ごとに切ったテープ（東日本・1区間0.1秒）',
    yLabel: 'テープの長さ (cm)',
    yMax: 16,
    bars: [
      { label: '①', value: 2.0, color: '#0369A1' },
      { label: '②', value: 5.0, color: '#0369A1' },
      { label: '③', value: 8.0, color: '#0369A1' },
      { label: '④', value: 11.0, color: '#0369A1' },
      { label: '⑤', value: 14.0, color: '#0369A1' },
    ],
    caption:
      '斜面を下る台車のテープ（東日本50Hz・5打点＝0.1秒ごとに切断）。長さは2.0→5.0→8.0→11.0→14.0cmで、となり合う区間の差が3.0cmで一定。各区間の平均の速さは0.20／0.50／0.80／1.10／1.40m/sとなり、0.1秒ごとに0.30m/sずつ増える＝1秒あたり3.0m/s増える。5区間0.5秒間の移動距離は合計40cm＝0.40m',
  },

  // s157：斜面の傾きと速さの増え方（v-tグラフの傾きの比較）
  lf_kokorikaext05_157: {
    kind: 'lineChart',
    xLabel: '時間 (s)',
    yLabel: '速さ (m/s)',
    xRange: [0, 1],
    yRange: [0, 10],
    series: [
      {
        label: '傾き小',
        color: '#93C5FD',
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 2.0 },
        ],
      },
      {
        label: '傾き中',
        color: '#0EA5E9',
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 4.9 },
        ],
      },
      {
        label: '傾き大',
        color: '#0369A1',
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 7.0 },
        ],
      },
      {
        label: '真下（自由落下）',
        color: '#F59E0B',
        dashed: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 9.8 },
        ],
      },
    ],
    caption:
      '同じ台車を傾きのちがう斜面で下らせたときの速さ－時間グラフ。どれも原点を通る直線（速さが一定の割合で増える）だが、斜面が急なほど直線の傾きが大きい。傾き中の線は斜面の角度30°にあたり、1秒あたり4.9m/s＝自由落下9.8m/sのちょうど半分。斜面を90°（真下）にした極限がオレンジの自由落下',
  },

  // s158：斜面上の物体にはたらく重力の分解（3:4:5の直角三角形）
  lf_kokorikaext05_158: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 4, y: 3, label: 'C' },
    ],
    sideLabels: ['底辺 4.0 m', '高さ 3.0 m', '斜面 5.0 m'],
    rightAngles: [1],
    fill: true,
    caption:
      '高さ3.0m・底辺4.0m・斜面の長さ5.0m（3:4:5）のなめらかな斜面。台車の重さが20Nのとき、斜面にそって下向きにはたらく分力は20N×(高さ3.0÷斜面5.0)＝12Nで、斜面上のどこでも同じ大きさ。力が一定だから速さは一定の割合で増える',
  },

  // s159：自由落下の速さ－時間グラフ（v = 9.8t）
  lf_kokorikaext05_159: {
    kind: 'lineChart',
    xLabel: '落ち始めてからの時間 (s)',
    yLabel: '速さ (m/s)',
    xRange: [0, 2],
    yRange: [0, 20],
    series: [
      {
        label: '自由落下',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 0.5, y: 4.9 },
          { x: 1.0, y: 9.8 },
          { x: 1.5, y: 14.7 },
          { x: 2.0, y: 19.6 },
        ],
      },
    ],
    caption:
      '空気の抵抗を無視した自由落下の速さ－時間グラフ。1秒ごとに9.8m/sずつ速くなるので、原点を通る傾き9.8の直線になる（v＝9.8×t）。落ちた距離はグラフと横軸で囲む三角形の面積で、2秒後なら½×2×19.6＝19.6m（h＝4.9×t²でも同じ）。この直線は物体の質量を変えても変わらない',
  },

  // s160：斜面を上る台車（減速）の速さ－時間グラフ
  lf_kokorikaext05_160: {
    kind: 'lineChart',
    xLabel: '時間 (s)',
    yLabel: '速さ (m/s)',
    xRange: [0, 2],
    yRange: [0, 4.5],
    series: [
      {
        label: '斜面を上る台車',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 4.0 },
          { x: 0.5, y: 3.0 },
          { x: 1.0, y: 2.0 },
          { x: 1.5, y: 1.0 },
          { x: 2.0, y: 0 },
        ],
      },
    ],
    caption:
      '初速4.0m/sで斜面を上り始めた台車。斜面にそって下向きの力がはたらき続けるので、1秒あたり2.0m/sずつ速さが減る右下がりの直線になり、2.0秒後に速さ0（いちばん高い所）になる。そこまでに進んだ距離は三角形の面積½×2.0s×4.0m/s＝4.0m。速さ0の直後は逆向きに下り始める',
  },

  // s161：速さ－時間グラフの面積＝移動距離（加速する運動）
  lf_kokorikaext05_161: {
    kind: 'coordinate',
    xRange: [0, 6],
    yRange: [0, 12],
    lines: [{ a: 2, b: 0, label: 'v＝2t' }],
    polygon: [
      { x: 0, y: 0 },
      { x: 5, y: 0 },
      { x: 5, y: 10 },
    ],
    points: [
      { x: 5, y: 10, label: '(5, 10)' },
    ],
    caption:
      '横軸が時間(s)、縦軸が速さ(m/s)のグラフ。1秒あたり2.0m/sずつ速くなる運動は直線v＝2tになり、0〜5秒に進んだ距離は色をつけた三角形の面積½×5s×10m/s＝25m。速さ－時間グラフでは「面積＝移動距離」、「傾き＝速さの増え方」を必ず区別する',
  },

  // s171：道具を変えても仕事は変わらない（力の大きさの比較）
  lf_kokorikaext05_171: {
    kind: 'barChart',
    xLabel: '40Nの荷物を高さ1.5mまで上げる方法',
    yLabel: '必要な力 (N)',
    yMax: 45,
    bars: [
      { label: '直接', value: 40, color: '#0369A1' },
      { label: '動滑車1個', value: 20, color: '#0EA5E9' },
      { label: '動滑車2個', value: 10, color: '#38BDF8' },
      { label: '斜面3.0m', value: 20, color: '#16A34A' },
    ],
    caption:
      '重さ40Nの荷物を高さ1.5mまで上げるのに必要な力。直接なら40Nで1.5m引き、動滑車1個なら20Nで3.0m、動滑車2個なら10Nで6.0m、長さ3.0mの斜面なら20Nで3.0m引く。力は小さくなるが引く距離がそのぶん長くなるので、仕事はどれも60J（＝40×1.5＝20×3.0＝10×6.0）で変わらない',
  },

  // s172：斜面を使った仕事（高さ2.0m・斜面4.0m）
  lf_kokorikaext05_172: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3.46, y: 0, label: 'B' },
      { x: 3.46, y: 2, label: 'C' },
    ],
    sideLabels: ['底辺 約3.5 m', '高さ 2.0 m', '斜面 4.0 m'],
    rightAngles: [1],
    fill: true,
    caption:
      '高さ2.0m・斜面の長さ4.0mのなめらかな斜面。重さ60Nの荷物を斜面にそって引き上げるとき、必要な力は60N×(2.0÷4.0)＝30Nで半分になるが、引く距離は4.0mと2倍になる。仕事は30N×4.0m＝120Jで、直接持ち上げる60N×2.0m＝120Jと等しい',
  },

  // s176：位置エネルギーは高さに比例・質量（重さ）に比例
  lf_kokorikaext05_176: {
    kind: 'lineChart',
    xLabel: '基準面からの高さ (m)',
    yLabel: '位置エネルギー (J)',
    xRange: [0, 3],
    yRange: [0, 60],
    series: [
      {
        label: '質量1kg（重さ10N）',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 10 },
          { x: 2, y: 20 },
          { x: 3, y: 30 },
        ],
      },
      {
        label: '質量2kg（重さ20N）',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 20 },
          { x: 2, y: 40 },
          { x: 3, y: 60 },
        ],
      },
    ],
    caption:
      '位置エネルギー＝重さ(N)×基準面からの高さ(m)。どちらも原点を通る直線なので高さに比例し、重さが2倍の物体は同じ高さでも位置エネルギーが2倍になる（質量100gにはたらく重力を1Nとして計算）',
  },

  // s177：運動エネルギーは速さの2乗に比例
  lf_kokorikaext05_177: {
    kind: 'lineChart',
    xLabel: '速さ (m/s)',
    yLabel: '運動エネルギー (J)',
    xRange: [0, 4],
    yRange: [0, 16],
    series: [
      {
        label: '質量2kgの物体',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 4 },
          { x: 3, y: 9 },
          { x: 4, y: 16 },
        ],
      },
    ],
    caption:
      '質量2kgの物体の運動エネルギー（½×2×v²＝v²）。直線ではなく右上がりに反り上がる曲線になり、速さが2倍(1→2m/s)で4倍、3倍(1→3m/s)で9倍、4倍(1→4m/s)で16倍。「速さの2乗に比例」を示す形',
  },

  // s178：おもりを落として杭を打ちこむ実験（高さに比例）
  lf_kokorikaext05_178: {
    kind: 'barChart',
    xLabel: 'おもりを落とす高さ (cm)',
    yLabel: '杭が打ちこまれた深さ (cm)',
    yMax: 2.5,
    bars: [
      { label: '10', value: 0.5, color: '#0EA5E9' },
      { label: '20', value: 1.0, color: '#0EA5E9' },
      { label: '30', value: 1.5, color: '#0EA5E9' },
      { label: '40', value: 2.0, color: '#0EA5E9' },
    ],
    caption:
      '同じおもりを高さを変えて落とし、杭の打ちこまれた深さを測った結果。深さは高さに比例している（10cmで0.5cm、40cmで2.0cm＝4倍）。杭を打つ仕事のもとは落とす前の位置エネルギー＝重さ×高さなので、深さは「高さ」に比例する。ぶつかる直前の速さは高さの平方根に比例するので、深さは速さには比例しないことに注意',
  },

  // s181：振り子での位置エネルギーと運動エネルギーの移り変わり
  lf_kokorikaext05_181: {
    kind: 'lineChart',
    xLabel: '時間（1往復を1とした割合）',
    yLabel: 'エネルギー (J)',
    xRange: [0, 1],
    yRange: [0, 1.2],
    series: [
      {
        label: '位置エネルギー',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 1.0 },
          { x: 0.25, y: 0 },
          { x: 0.5, y: 1.0 },
          { x: 0.75, y: 0 },
          { x: 1.0, y: 1.0 },
        ],
      },
      {
        label: '運動エネルギー',
        color: '#16A34A',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 0.25, y: 1.0 },
          { x: 0.5, y: 0 },
          { x: 0.75, y: 1.0 },
          { x: 1.0, y: 0 },
        ],
      },
      {
        label: '力学的エネルギー（合計）',
        color: '#F59E0B',
        dashed: true,
        points: [
          { x: 0, y: 1.0 },
          { x: 1.0, y: 1.0 },
        ],
      },
    ],
    caption:
      '質量0.50kg（重さ5.0N）のおもりを、最下点より0.20m高い所から静かにはなした振り子の模式グラフ。はなした瞬間の位置エネルギーは5.0N×0.20m＝1.0J。最下点（横軸0.25・0.75）で位置エネルギーが0、運動エネルギーが1.0Jになり、そのときの速さは½×0.50×v²＝1.0よりv＝2.0m/s。二つの合計（力学的エネルギー）は常に1.0Jで一定',
  },

  // s182：コースの形とエネルギー（力学的エネルギーの保存）
  lf_kokorikaext05_182: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [0, 6],
    parabolas: [{ a: 0.2, label: 'コースの形' }],
    points: [
      { x: -5, y: 5, label: 'A 高さ5.0m' },
      { x: 0, y: 0, label: 'B 高さ0m' },
      { x: 3, y: 1.8, label: 'C 高さ1.8m' },
    ],
    caption:
      'なめらかな谷型のコース（横軸は水平方向の位置m、縦軸は高さm）を、質量1.0kg（重さ10N）の球がA点から静かに転がり落ちるようす。A（高さ5.0m）の位置エネルギーは10N×5.0m＝50J。B（高さ0m）では位置エネルギー0・運動エネルギー50Jとなり、½×1.0×v²＝50よりv＝10m/s。C（高さ1.8m）では位置エネルギー18J・運動エネルギー32Jとなりv＝8.0m/s。合計はどこでも50Jで一定',
  },

  // s185：火力発電のエネルギー変換効率
  lf_kokorikaext05_185: {
    kind: 'pieChart',
    slices: [
      { label: '電気エネルギー 40%', value: 40, color: '#0EA5E9' },
      { label: '排熱として放出 60%', value: 60, color: '#F59E0B' },
    ],
    caption:
      '燃料の化学エネルギーを100としたときの、火力発電所（汽力発電）でのおおよその行き先。取り出せる電気エネルギーは約40%で、残り約60%は熱として海水や大気に逃げる。消えたのではなく形を変えて散らばっただけで、エネルギーの総量は保存されている（変換効率＝取り出したいエネルギー÷与えたエネルギー×100）',
  },
};
