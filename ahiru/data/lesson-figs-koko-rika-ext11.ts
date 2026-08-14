import type { Figure } from './figures';

// 高校受験 理科「大地の変化（火山・地震・地層）」拡張ユニット
// （koko_rika_s381〜koko_rika_s415）の教科書用図解。
// キーは lessons-koko-rika-ext11.ts の figureId と対応（全35課中17課に付与）。
// 方針：
//  ・火山の形は polygon の断面で示す。fitPoints は縦横比を保つので「平たい／急」がそのまま出る。
//  ・鉱物・二酸化ケイ素の割合は barChart／pieChart。合計は必ず100になるよう検算済み。
//  ・地震は lineChart。P波8km/s・S波4km/s で統一し、走時グラフの傾き・交点・
//    初期微動継続時間（震源距離÷8）がすべて同じ数値体系で一致するようにしてある。
//  ・柱状図は stratum。標高＝地表の標高−深さ を各キャプションで検算済み。
export const lessonFigsKokoRikaExt11: Record<string, Figure> = {
  // s382：ねばりけの弱い（黒っぽい）マグマ → 傾斜のゆるやかな火山
  lf_kokorikaext11_382: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'ふもと' },
      { x: 12, y: 0, label: 'ふもと' },
      { x: 6, y: 1.5, label: '火口' },
    ],
    fill: true,
    caption:
      'ねばりけの弱い玄武岩質マグマがつくる「傾斜のゆるやかな火山」の断面。溶岩が水のように遠くまで流れ広がるため、底面が広く高さが低い。この図は底12に対して高さ1.5（斜面の角度は約14度）だが、実際のマウナロア山（ハワイ）やキラウエア山はさらに平たく、斜面はわずか数度しかない',
  },

  // s383：ねばりけの強い（白っぽい）マグマ → ドーム状の火山
  lf_kokorikaext11_383: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'ふもと' },
      { x: 4, y: 0, label: 'ふもと' },
      { x: 2, y: 3.5, label: '溶岩ドーム' },
    ],
    fill: true,
    caption:
      'ねばりけの強い流紋岩質マグマがつくる「ドーム状（おわんをふせた形）の火山」の断面。溶岩が流れずに火口の上に盛り上がるため、底面がせまく背が高い。底4に対して高さ3.5（斜面の角度は約60度）。昭和新山・雲仙普賢岳の平成新山がこの形で、噴火は激しく爆発的になる',
  },

  // s384：マグマにふくまれる二酸化ケイ素（SiO₂）の割合とねばりけ
  lf_kokorikaext11_384: {
    kind: 'barChart',
    xLabel: 'マグマの種類',
    yLabel: '二酸化ケイ素の割合（％）',
    yMax: 80,
    bars: [
      { label: '玄武岩質', value: 50, color: '#0369A1' },
      { label: '安山岩質', value: 60, color: '#0284C7' },
      { label: '流紋岩質', value: 70, color: '#7DD3FC' },
    ],
    caption:
      'マグマにふくまれる二酸化ケイ素（SiO₂）のおおよその割合。この値が大きいほどマグマのねばりけは強くなり、色は白っぽく、火山の形は急になり、噴火は爆発的になる。左から順に「ゆるやかな火山→円すい形→ドーム状」と対応する。50％・60％・70％はおおよその目安の値',
  },

  // s388：花こう岩にふくまれる造岩鉱物のおおよその割合
  lf_kokorikaext11_388: {
    kind: 'pieChart',
    slices: [
      { label: '長石（無色鉱物）', value: 50, color: '#E0F2FE' },
      { label: '石英（無色鉱物）', value: 30, color: '#BAE6FD' },
      { label: '黒雲母（有色鉱物）', value: 15, color: '#0369A1' },
      { label: 'その他の有色鉱物', value: 5, color: '#0EA5E9' },
    ],
    caption:
      '花こう岩にふくまれる造岩鉱物のおおよその割合。無色鉱物（長石50％＋石英30％）で全体の80％を占めるため、岩石全体が白っぽく見える。有色鉱物は黒雲母15％とその他5％で合わせて20％。4つの合計は50＋30＋15＋5＝100％',
  },

  // s389：火成岩の種類と有色鉱物の割合
  lf_kokorikaext11_389: {
    kind: 'barChart',
    xLabel: '火成岩の種類（上：火山岩／下：深成岩）',
    yLabel: '有色鉱物の割合（％）',
    yMax: 80,
    bars: [
      { label: '流紋岩・花こう岩', value: 10, color: '#BAE6FD' },
      { label: '安山岩・せん緑岩', value: 35, color: '#0284C7' },
      { label: '玄武岩・はんれい岩', value: 60, color: '#0369A1' },
    ],
    caption:
      '火成岩にふくまれる有色鉱物（黒雲母・角閃石・輝石・カンラン石）のおおよその割合。右へ行くほど有色鉱物が増え、岩石は黒っぽくなる。残りはすべて無色鉱物（石英・長石）なので、無色鉱物の割合は左から90％・65％・40％となる。二酸化ケイ素の割合（70％・60％・50％）とは逆向きに変化することに注意',
  },

  // s391：地震計の記録（初期微動と主要動）
  lf_kokorikaext11_391: {
    kind: 'lineChart',
    xLabel: '地震発生からの時間（秒）',
    yLabel: 'ゆれの大きさ',
    xRange: [0, 30],
    yRange: [-6, 6],
    series: [
      {
        label: '地震計の記録',
        color: '#0369A1',
        points: [
          { x: 0, y: 0 },
          { x: 4, y: 0 },
          { x: 8, y: 0 },
          { x: 10, y: 0 },
          { x: 10.5, y: 1 },
          { x: 11.5, y: -1 },
          { x: 12.5, y: 1 },
          { x: 13.5, y: -1 },
          { x: 14.5, y: 1 },
          { x: 15.5, y: -1 },
          { x: 16.5, y: 1 },
          { x: 17.5, y: -1 },
          { x: 18, y: 0 },
          { x: 18.5, y: 5 },
          { x: 19.5, y: -5 },
          { x: 20.5, y: 4.5 },
          { x: 21.5, y: -4.5 },
          { x: 22.5, y: 4 },
          { x: 23.5, y: -4 },
          { x: 24.5, y: 3 },
          { x: 25.5, y: -3 },
          { x: 26.5, y: 2 },
          { x: 27.5, y: -2 },
          { x: 28.5, y: 1 },
          { x: 29.5, y: -1 },
          { x: 30, y: 0 },
        ],
      },
    ],
    caption:
      '震源距離80kmの地点の地震計の記録。P波（速さ8km/s）が80÷8＝10秒後に到達して小さなゆれ（初期微動）が始まり、S波（速さ4km/s）が80÷4＝20秒後に到達して大きなゆれ（主要動）に変わる。初期微動が続いた10秒から20秒までの10秒間が初期微動継続時間である',
  },

  // s395：走時グラフ（P波とS波の2直線）
  lf_kokorikaext11_395: {
    kind: 'lineChart',
    xLabel: '地震発生からの時間（秒）',
    yLabel: '震源距離（km）',
    xRange: [0, 40],
    yRange: [0, 320],
    series: [
      {
        label: 'P波（8km/s）',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 80 },
          { x: 20, y: 160 },
          { x: 30, y: 240 },
          { x: 40, y: 320 },
        ],
      },
      {
        label: 'S波（4km/s）',
        color: '#0EA5E9',
        dashed: true,
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 40 },
          { x: 20, y: 80 },
          { x: 30, y: 120 },
          { x: 40, y: 160 },
        ],
      },
    ],
    caption:
      '走時グラフ。2本とも原点（地震発生の瞬間・震源距離0km）を通る直線になる。P波は40秒で320km進むので320÷40＝8km/s、S波は40秒で160km進むので160÷40＝4km/s。傾きが急なほうがP波である。震源距離160kmの横線を引くと、P波は20秒後・S波は40秒後に到達し、その差20秒が初期微動継続時間になる',
  },

  // s397：初期微動継続時間と震源距離の比例（大森公式）
  lf_kokorikaext11_397: {
    kind: 'lineChart',
    xLabel: '初期微動継続時間（秒）',
    yLabel: '震源距離（km）',
    xRange: [0, 30],
    yRange: [0, 240],
    series: [
      {
        label: '震源距離＝8×初期微動継続時間',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 40 },
          { x: 10, y: 80 },
          { x: 20, y: 160 },
          { x: 30, y: 240 },
        ],
      },
    ],
    caption:
      'P波8km/s・S波4km/sのとき、初期微動継続時間Tと震源距離dの関係。d÷4−d÷8＝d÷8なのでT＝d÷8、つまりd＝8×Tとなり、原点を通る直線（比例）になる。T＝5秒なら40km、T＝10秒なら80km、T＝20秒なら160km、T＝30秒なら240km。比例定数8の単位はkm/秒である',
  },

  // s398：走時グラフから地震発生時刻を読み取る
  lf_kokorikaext11_398: {
    kind: 'lineChart',
    xLabel: '10時23分00秒からの経過秒数（秒）',
    yLabel: '震源距離（km）',
    xRange: [30, 70],
    yRange: [0, 240],
    series: [
      {
        label: 'P波（8km/s）',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 40, y: 0 },
          { x: 50, y: 80 },
          { x: 60, y: 160 },
          { x: 70, y: 240 },
        ],
      },
      {
        label: 'S波（4km/s）',
        color: '#0EA5E9',
        dashed: true,
        markers: true,
        points: [
          { x: 40, y: 0 },
          { x: 50, y: 40 },
          { x: 60, y: 80 },
          { x: 70, y: 120 },
        ],
      },
    ],
    caption:
      '横軸を「時刻」にした走時グラフ。2直線の交点は震源距離0kmの点、すなわち地震が発生した瞬間を表す。交点は40秒の位置なので、地震発生時刻は10時23分40秒。震源距離80kmの地点では、P波が50秒（10時23分50秒）、S波が60秒（10時24分00秒）に到達する',
  },

  // s400：3地点の記録から震源距離と発生時刻を求める総合演習
  lf_kokorikaext11_400: {
    kind: 'lineChart',
    xLabel: '地震発生からの時間（秒）',
    yLabel: '震源距離（km）',
    xRange: [0, 50],
    yRange: [0, 220],
    series: [
      {
        label: 'P波（8km/s）',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 40 },
          { x: 15, y: 120 },
          { x: 25, y: 200 },
        ],
      },
      {
        label: 'S波（4km/s）',
        color: '#0EA5E9',
        dashed: true,
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 40 },
          { x: 30, y: 120 },
          { x: 50, y: 200 },
        ],
      },
    ],
    caption:
      '3地点A（震源距離40km）・B（120km）・C（200km）の到達時間をプロットした走時グラフ。P波は40÷8＝5秒、120÷8＝15秒、200÷8＝25秒で到達。S波は40÷4＝10秒、120÷4＝30秒、200÷4＝50秒で到達。初期微動継続時間はそれぞれ5秒・15秒・25秒となり、いずれも震源距離÷8に一致する',
  },

  // s402：マグニチュードとエネルギーの比較
  lf_kokorikaext11_402: {
    kind: 'barChart',
    xLabel: 'マグニチュード',
    yLabel: 'エネルギー（M5を1としたときの比）',
    yMax: 1100,
    bars: [
      { label: 'M5', value: 1, color: '#BAE6FD' },
      { label: 'M6', value: 32, color: '#0284C7' },
      { label: 'M7', value: 1000, color: '#0369A1' },
    ],
    caption:
      'マグニチュードが1大きくなるとエネルギーは約32倍、2大きくなると32×32＝1024倍（約1000倍）になる。M5を1としたとき、M6は32、M7は約1000。棒の高さで比べるとM5とM6はほとんど見えないほど小さく、マグニチュードのわずかな差がエネルギーの桁違いの差になることがわかる',
  },

  // s405：粒の大きさと堆積する場所（海が深くなった記録）
  lf_kokorikaext11_405: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        topLabel: '地表',
        layers: [
          { name: '泥岩層（新しい）', thickness: 3, pattern: 'mud' },
          { name: '砂岩層', thickness: 3, pattern: 'sand' },
          { name: 'れき岩層（古い）', thickness: 3, pattern: 'gravel' },
        ],
      },
    ],
    caption:
      '下かられき岩→砂岩→泥岩と重なる地層。粒の大きいれきは河口近くの浅い海に、小さい泥は沖合の深い海に堆積する。下ほど古いので、この地点はしだいに深い海（または河口から遠い場所）になっていったとわかる。逆に上へ粒が大きくなっていれば、海が浅くなった記録である',
  },

  // s408：不整合をふくむ地層
  lf_kokorikaext11_408: {
    kind: 'stratum',
    columns: [
      {
        label: 'B地点',
        topLabel: '地表',
        layers: [
          { name: '砂岩層（新しい）', thickness: 3, pattern: 'sand' },
          { name: 'れき岩層（不整合面のすぐ上）', thickness: 1, pattern: 'gravel' },
          { name: '泥岩層（古い）', thickness: 3, pattern: 'mud' },
          { name: '凝灰岩層', thickness: 1, pattern: 'ash' },
        ],
      },
    ],
    caption:
      '不整合をふくむ柱状図。泥岩層の上面が不整合面で、その直上に角のとれていないれき（基底れき岩）がのっている。れき岩層と泥岩層の間で「一度陸地になって侵食され、再び海に沈んで堆積した」という長い時間の空白がある。れき岩層の直下に不整合面がある点が見分けの決め手になる',
  },

  // s411：示準化石と地質年代
  lf_kokorikaext11_411: {
    kind: 'stratum',
    columns: [
      {
        label: 'C地点',
        topLabel: '地表',
        layers: [
          { name: '泥岩層（ビカリア）＝新生代', thickness: 2, pattern: 'mud' },
          { name: '砂岩層（アンモナイト）＝中生代', thickness: 3, pattern: 'sand' },
          { name: '石灰岩層（フズリナ）＝古生代', thickness: 2, pattern: 'lime' },
        ],
      },
    ],
    caption:
      '示準化石から地質年代を読み取る柱状図。下ほど古いので、下からフズリナ（古生代）→アンモナイト（中生代）→ビカリア（新生代）の順に並ぶのが正しい。もしこの順序が逆になっていれば、地層が大きな力で押されて逆転している可能性を疑う',
  },

  // s413：鍵層（凝灰岩層）による地層の対比
  lf_kokorikaext11_413: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        topLabel: '地表',
        layers: [
          { name: '砂岩層', thickness: 2, pattern: 'sand' },
          { name: '凝灰岩層（鍵層）', thickness: 1, pattern: 'ash' },
          { name: '泥岩層', thickness: 3, pattern: 'mud' },
          { name: 'れき岩層', thickness: 2, pattern: 'gravel' },
        ],
      },
      {
        label: 'B地点',
        topLabel: '地表',
        layers: [
          { name: '泥岩層', thickness: 3, pattern: 'mud' },
          { name: '凝灰岩層（鍵層）', thickness: 1, pattern: 'ash' },
          { name: '砂岩層', thickness: 2, pattern: 'sand' },
          { name: 'れき岩層', thickness: 3, pattern: 'gravel' },
        ],
      },
    ],
    caption:
      '2地点の柱状図。上下の層の種類も厚さもちがうが、凝灰岩層だけは両方に1mずつある。凝灰岩は火山灰が短期間に広範囲へ降り積もってできるため、離れた地点でも同じ時代を示す「鍵層」として対比の基準に使える。まず凝灰岩層どうしを線で結んでから、上下の層を比べるのが読み取りの手順である',
  },

  // s414：標高＝地表の標高−深さ の計算
  lf_kokorikaext11_414: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        topLabel: '標高80m',
        layers: [
          { name: '泥岩層 深さ0〜12m', thickness: 12, pattern: 'mud' },
          { name: '凝灰岩層 深さ12〜14m', thickness: 2, pattern: 'ash' },
          { name: '砂岩層 深さ14〜20m', thickness: 6, pattern: 'sand' },
        ],
      },
      {
        label: 'B地点',
        topLabel: '標高75m',
        layers: [
          { name: '泥岩層 深さ0〜7m', thickness: 7, pattern: 'mud' },
          { name: '凝灰岩層 深さ7〜9m', thickness: 2, pattern: 'ash' },
          { name: '砂岩層 深さ9〜20m', thickness: 11, pattern: 'sand' },
        ],
      },
    ],
    caption:
      '深さ20mまでのボーリング柱状図。凝灰岩層の上面の標高を「地表の標高−深さ」で求めると、A地点は80−12＝68m、B地点は75−7＝68mで一致する。柱状図の見た目では凝灰岩の位置がずれているが、標高に直すと同じ高さなので、この2地点の間では地層は水平である',
  },

  // s415：3地点から地層の傾きを求める
  lf_kokorikaext11_415: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        topLabel: '標高60m',
        layers: [
          { name: '砂岩層 深さ0〜8m', thickness: 8, pattern: 'sand' },
          { name: '凝灰岩層 深さ8〜10m', thickness: 2, pattern: 'ash' },
          { name: '泥岩層 深さ10〜20m', thickness: 10, pattern: 'mud' },
        ],
      },
      {
        label: 'B地点（Aの真東100m）',
        topLabel: '標高65m',
        layers: [
          { name: '砂岩層 深さ0〜13m', thickness: 13, pattern: 'sand' },
          { name: '凝灰岩層 深さ13〜15m', thickness: 2, pattern: 'ash' },
          { name: '泥岩層 深さ15〜20m', thickness: 5, pattern: 'mud' },
        ],
      },
      {
        label: 'C地点（Aの真南100m）',
        topLabel: '標高55m',
        layers: [
          { name: '砂岩層 深さ0〜13m', thickness: 13, pattern: 'sand' },
          { name: '凝灰岩層 深さ13〜15m', thickness: 2, pattern: 'ash' },
          { name: '泥岩層 深さ15〜20m', thickness: 5, pattern: 'mud' },
        ],
      },
    ],
    caption:
      '凝灰岩層の上面の標高を計算すると、A地点は60−8＝52m、B地点は65−13＝52m、C地点は55−13＝42m。AとBは同じ52mなので東西方向には傾いていない。AとCは100m離れて52m→42mと10m下がるので、この地層は南へ向かって100mにつき10m低くなるように傾いている',
  },
};
