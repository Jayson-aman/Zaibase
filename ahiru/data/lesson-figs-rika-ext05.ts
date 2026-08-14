import type { Figure } from './figures';

// V. 物理：浮力・密度（Buoyancy / Density）図解バッチ
// キーは lessons-rika-ext05.ts の figureId と対応。
export const lessonFigsRikaExt05: Record<string, Figure> = {
  // ===== rika_s146 密度とは何か =====
  lf_rikaext05_146: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '水', value: 1.0 },
      { label: '氷', value: 0.92 },
      { label: '木材', value: 0.5 },
      { label: 'アルミ', value: 2.7 },
      { label: '鉄', value: 7.9 },
      { label: '金', value: 19.3 },
    ],
    caption: '代表的な物質の密度の比較。値が大きいほど「同じ体積でずっしり重い」',
  },

  // ===== rika_s147 密度の計算①（物質を見分ける） =====
  lf_rikaext05_147: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '物質A(44.5g/5cm³)', value: 8.9 },
      { label: '物質B(39.5g/5cm³)', value: 7.9 },
      { label: 'アルミ(参考)', value: 2.7 },
    ],
    caption: '物質Aの密度8.9→銅、物質Bの密度7.9→鉄と特定できる',
  },

  // ===== rika_s149 いろいろな物質の密度一覧 =====
  lf_rikaext05_149: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '水', value: 1.0 },
      { label: 'アルミ', value: 2.7 },
      { label: '鉄', value: 7.9 },
      { label: '銅', value: 8.9 },
      { label: '鉛', value: 11.3 },
      { label: '水銀', value: 13.6 },
      { label: '金', value: 19.3 },
    ],
    caption: '金属はすべて水（1.00）より密度が大きい。鉄(7.9)と銅(8.9)の数値を混同しないこと',
  },

  // ===== rika_s151 メスシリンダーによる体積測定 =====
  lf_rikaext05_151: {
    kind: 'numberLine',
    min: 0,
    max: 100,
    step: 10,
    segments: [{ from: 50, to: 78 }],
    points: [
      { x: 50, label: 'はじめ50cm³' },
      { x: 78, label: '石を入れた後78cm³' },
    ],
    caption: '水位の変化分（78－50＝28cm³）が石の体積。あとの目盛りをそのまま体積にしないこと',
  },

  // ===== rika_s152 浮く・沈むの判定①（密度の比較） =====
  lf_rikaext05_152: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '氷', value: 0.92 },
      { label: '水(基準)', value: 1.0 },
      { label: 'アルミ', value: 2.7 },
    ],
    caption: '氷は水より密度が小さいので浮く。アルミは水より密度が大きいので沈む',
  },

  // ===== rika_s153 浮く物質・沈む物質の具体例 =====
  lf_rikaext05_153: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: 'コルク', value: 0.24 },
      { label: '氷', value: 0.92 },
      { label: 'ポリエチレン', value: 0.95 },
      { label: '水(基準)', value: 1.0 },
      { label: 'PET', value: 1.4 },
      { label: 'アルミ', value: 2.7 },
    ],
    caption: '水(1.0)より左（小さい）は浮く物質、右（大きい）は沈む物質。プラスチックは種類で結果が変わる',
  },

  // ===== rika_s154 液体の密度と浮き沈みの変化 =====
  lf_rikaext05_154: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '卵', value: 1.05 },
      { label: '真水', value: 1.0 },
      { label: '食塩水', value: 1.1 },
      { label: 'エタノール', value: 0.79 },
    ],
    caption: '卵(1.05)は真水(1.0)には沈むが、食塩水(1.1)には浮く',
  },

  // ===== rika_s155 密度の異なる液体の重なり（層分離） =====
  lf_rikaext05_155: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '油(最上層)', value: 0.8 },
      { label: '水(中間層)', value: 1.0 },
      { label: '水銀(最下層)', value: 13.6 },
    ],
    caption: '密度の大きい順に下から重なる：水銀→水→油。密度0.9の物体は水と油の境界に位置する',
  },

  // ===== rika_s156 浮いている物体の沈む体積の割合 =====
  lf_rikaext05_156: {
    kind: 'barChart',
    yLabel: '沈んだ体積の割合(%)',
    bars: [
      { label: '密度0.2', value: 20 },
      { label: '密度0.5', value: 50 },
      { label: '密度0.8', value: 80 },
      { label: '密度0.92', value: 92 },
    ],
    caption: '沈んだ体積の割合＝物体の密度÷水の密度(1.00)×100。密度が水に近いほど深く沈む',
  },

  // ===== rika_s157 アルキメデスの原理の基本 =====
  lf_rikaext05_157: {
    kind: 'lineChart',
    xLabel: '沈んだ体積(cm³)',
    yLabel: '浮力(g重)',
    xRange: [0, 50],
    yRange: [0, 50],
    series: [
      { label: '水(密度1.00)', points: [{ x: 0, y: 0 }, { x: 50, y: 50 }], markers: true },
    ],
    caption: '水の場合、浮力(g重)の数値は沈んだ体積(cm³)の数値と一致する（密度1.00のため）',
  },

  // ===== rika_s158 浮力の公式と液体による浮力の違い =====
  lf_rikaext05_158: {
    kind: 'lineChart',
    xLabel: '沈んだ体積(cm³)',
    yLabel: '浮力(g重)',
    xRange: [0, 40],
    yRange: [0, 48],
    series: [
      { label: '食塩水(1.20)', points: [{ x: 0, y: 0 }, { x: 40, y: 48 }], markers: true },
      { label: '水(1.00)', points: [{ x: 0, y: 0 }, { x: 40, y: 40 }], markers: true },
      { label: 'エタノール(0.79)', points: [{ x: 0, y: 0 }, { x: 40, y: 31.6 }], markers: true },
    ],
    caption: '同じ沈んだ体積でも、液体の密度が大きいほど浮力の線の傾きが急になる（浮力が大きい）',
  },

  // ===== rika_s161 ばねばかり実験（沈める深さと読みの変化） =====
  lf_rikaext05_161: {
    kind: 'lineChart',
    xLabel: '沈んだ体積(cm³)',
    yLabel: 'ばねばかりの読み(g)',
    xRange: [0, 80],
    yRange: [80, 150],
    series: [
      {
        label: '重さ150g・体積60cm³の物体',
        points: [{ x: 0, y: 150 }, { x: 30, y: 120 }, { x: 60, y: 90 }, { x: 80, y: 90 }],
        markers: true,
      },
    ],
    caption: '沈んだ体積に比例して読みが減少し、完全に沈んだ体積60cm³から先は90gで一定になる',
  },

  // ===== rika_s162 浮力と物体の形・向きの関係 =====
  lf_rikaext05_162: {
    kind: 'barChart',
    yLabel: '浮力(g重)',
    bars: [
      { label: '球形', value: 60 },
      { label: '板状', value: 60 },
      { label: '棒状', value: 60 },
    ],
    caption: '同じ体積60cm³の粘土なら、形を変えても浮力はすべて60g重で等しい',
  },

  // ===== rika_s163 ばねばかりの読み＝重さ－浮力 =====
  lf_rikaext05_163: {
    kind: 'barChart',
    yLabel: '大きさ(g)',
    bars: [
      { label: '物体の重さ', value: 300 },
      { label: '浮力', value: 80 },
      { label: 'ばねばかりの読み', value: 220 },
    ],
    caption: 'ばねばかりの読み(220g)＝物体の重さ(300g)－浮力(80g重)',
  },

  // ===== rika_s165 液体を変えたときのばねばかりの読みの変化 =====
  lf_rikaext05_165: {
    kind: 'barChart',
    yLabel: 'ばねばかりの読み(g)',
    bars: [
      { label: '水', value: 150 },
      { label: '食塩水', value: 142.5 },
      { label: 'エタノール', value: 160.5 },
    ],
    caption: '密度の大きい食塩水ほど浮力が強く読みが小さくなり、密度の小さいエタノールほど読みは大きくなる',
  },

  // ===== rika_s166 一部だけ沈めたときのばねばかりの読み =====
  lf_rikaext05_166: {
    kind: 'lineChart',
    xLabel: '沈んだ体積(cm³)',
    yLabel: 'ばねばかりの読み(g)',
    xRange: [0, 90],
    yRange: [150, 260],
    series: [
      {
        label: '重さ250g・体積90cm³の物体',
        points: [{ x: 0, y: 250 }, { x: 60, y: 190 }, { x: 90, y: 160 }],
        markers: true,
      },
    ],
    caption: '沈んだ体積60cm³の時点での読みは190g。全体積90cm³まで沈めると読みは160gになる',
  },

  // ===== rika_s169 氷が水に浮くしくみと沈む体積の割合 =====
  lf_rikaext05_169: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '氷', value: 0.92 },
      { label: '水', value: 1.0 },
    ],
    caption: '氷の密度0.92は水の1.00の92%。体積300cm³の氷は276cm³（92%）が水面下に沈む',
  },

  // ===== rika_s170 氷が溶けたときの水位変化 =====
  lf_rikaext05_170: {
    kind: 'numberLine',
    min: 0,
    max: 320,
    step: 40,
    points: [
      { x: 24, label: '水面上の氷:24cm³' },
      { x: 276, label: '押しのけた水＝とけた水:276cm³' },
      { x: 300, label: '氷全体:300cm³' },
    ],
    caption: '氷が水面上に出ていた体積(24cm³)と、氷がとけて減る体積(300－276＝24cm³)がちょうど等しいため水位は変わらない',
  },

  // ===== rika_s172 船が浮くしくみ（見かけの密度） =====
  lf_rikaext05_172: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '鉄そのもの', value: 7.9 },
      { label: '船体全体(見かけ)', value: 0.75 },
      { label: '水', value: 1.0 },
    ],
    caption: '鉄そのものは水よりずっと密度が大きいが、空洞を含めた船体全体の見かけの密度は水より小さくなる',
  },

  // ===== rika_s173 浮力の総合問題①（複数物体の組み合わせ） =====
  lf_rikaext05_173: {
    kind: 'barChart',
    yLabel: '大きさ(g)',
    bars: [
      { label: '全体の重さ', value: 235 },
      { label: '完全に沈めた場合の浮力', value: 250 },
    ],
    caption: '浮力(250g重)が全体の重さ(235g)を上回るので、木片とアルミをつないだ全体は浮く',
  },

  // ===== rika_s174 浮力の総合問題②（水を注ぎ足すと浮き上がる） =====
  lf_rikaext05_174: {
    kind: 'lineChart',
    xLabel: '沈んだ体積(cm³)',
    yLabel: '浮力(g重)',
    xRange: [0, 500],
    yRange: [0, 320],
    series: [
      {
        label: '密度0.6・体積500cm³・重さ300gの物体',
        points: [{ x: 0, y: 0 }, { x: 300, y: 300 }, { x: 500, y: 300 }],
        markers: true,
      },
    ],
    caption: '沈んだ体積が300cm³（全体の60%）に達すると浮力が重さ(300g)に追いつき、そこから先は底を離れて浮く',
  },

  // ===== rika_s175 浮力の総合問題③（グラフ読み取り） =====
  lf_rikaext05_175: {
    kind: 'lineChart',
    xLabel: '沈めた深さ(cm)',
    yLabel: 'ばねばかりの読み(g)',
    xRange: [0, 6],
    yRange: [90, 210],
    series: [
      {
        label: '底面積20cm²の直方体',
        points: [{ x: 0, y: 200 }, { x: 4, y: 104 }, { x: 6, y: 104 }],
        markers: true,
      },
    ],
    caption: '深さ4cmで折れ曲がる（＝物体の高さ4cm）。下がり幅96g＝浮力＝液体の密度(1.2)×体積(80cm³)',
  },
};
