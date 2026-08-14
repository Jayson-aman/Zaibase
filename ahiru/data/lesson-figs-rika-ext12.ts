import type { Figure } from './figures';

// 中学受験理科 拡張ユニットXII「地学：地層・地震・火山」（rika_s411〜rika_s450）
// 専用の図解データ。数値はすべて lessons-rika-ext12.ts 本文中の実データと一致させてある。
export const lessonFigsRikaExt12: Record<string, Figure> = {
  // ===== 411. 堆積のしくみと分級作用（級化層理） =====
  lf_rika_ext12_411: {
    kind: 'stratum',
    columns: [
      {
        label: '1回の洪水でできた1枚の層',
        topLabel: '地表',
        layers: [
          { name: '泥（細粒）', thickness: 1, pattern: 'mud' },
          { name: '砂（中粒）', thickness: 2, pattern: 'sand' },
          { name: 'れき（粗粒）', thickness: 3, pattern: 'gravel' },
        ],
      },
    ],
    caption: '1回の堆積でできた層（級化層理）では、重く大きい粒（れき）ほど先に沈むため下に、軽く小さい粒（泥）ほど後まで水中に残るため上にたまる',
  },

  // ===== 412. 堆積の場所と粒の大きさ（河口〜沖合の粒径変化） =====
  lf_rika_ext12_412: {
    kind: 'barChart',
    yLabel: '堆積物の粒の大きさ(mm・目安)',
    bars: [
      { label: '河口付近', value: 8 },
      { label: '少し沖合', value: 1 },
      { label: '沖合（深い場所）', value: 0.05 },
    ],
    caption: '河口に近いほど粗い粒（れき・砂）が、沖合に行くほど細かい粒（泥）が堆積する',
  },

  // ===== 413. 地層からわかる海面の変化（海進・海退） =====
  lf_rika_ext12_413: {
    kind: 'stratum',
    columns: [
      {
        label: 'ある地点の柱状図（海進の例）',
        topLabel: '地表（新しい）',
        layers: [
          { name: '泥岩（新しい・深い海）', thickness: 3, pattern: 'mud' },
          { name: '砂岩（中間）', thickness: 3, pattern: 'sand' },
          { name: 'れき岩（古い・浅い海）', thickness: 3, pattern: 'gravel' },
        ],
      },
    ],
    caption: '下から上へ「れき岩→砂岩→泥岩」と粒が細かくなる＝上に行くほど深い海の堆積物に変化＝海進（海水面上昇・土地の沈降）を示す',
  },

  // ===== 414. 整合と不整合 =====
  lf_rika_ext12_414: {
    kind: 'stratum',
    columns: [
      {
        label: '不整合の柱状図',
        topLabel: '地表',
        layers: [
          { name: '泥岩（新しい地層・水平）', thickness: 2, pattern: 'mud' },
          { name: '不整合面（大きな時間のずれ）', thickness: 0.4, pattern: 'plain' },
          { name: '砂岩（古い地層・侵食を受けた）', thickness: 3, pattern: 'sand' },
        ],
      },
    ],
    caption: '不整合面の上下では堆積に大きな時間の断絶がある。下の地層はいったん隆起して侵食を受けたのち、再び沈降して上に新しい地層が堆積した',
  },

  // ===== 415. 続成作用 — たい積物が堆積岩になるまで =====
  lf_rika_ext12_415: {
    kind: 'lineChart',
    xLabel: '埋没深度(m)',
    yLabel: 'かかる圧力（相対値）',
    xRange: [0, 200],
    yRange: [0, 5],
    series: [
      { markers: true, points: [ { x: 0, y: 0 }, { x: 50, y: 1 }, { x: 100, y: 2 }, { x: 200, y: 4 } ] },
    ],
    caption: '地層が深く埋もれるほど、上に積もった堆積物の重みで圧力が大きくなる。押し固められ（圧縮）、鉱物ですき間が埋められる（膠結）ことで堆積物は堆積岩になる（続成作用）',
  },

  // ===== 416. 地層累重の法則（逆転層の例） =====
  lf_rika_ext12_416: {
    kind: 'stratum',
    columns: [
      {
        label: '観察された柱状図',
        topLabel: '地表',
        layers: [
          { name: 'サンヨウチュウの化石（古生代）', thickness: 2 },
          { name: 'アンモナイトの化石（中生代）', thickness: 2 },
          { name: 'サンヨウチュウの化石（古生代）', thickness: 2 },
        ],
      },
    ],
    caption: '本来は上ほど新しい時代のはずが、一番上と一番下が古生代、中が中生代になっている＝大きな地殻変動（しゅう曲）で地層全体が逆転したと考えられる',
  },

  // ===== 417. 柱状図の読み方①（深さの計算） =====
  lf_rika_ext12_417: {
    kind: 'stratum',
    columns: [
      {
        topLabel: '地表',
        layers: [
          { name: 'れき岩(0〜1m)', thickness: 1, pattern: 'gravel' },
          { name: '砂岩(1〜3m)', thickness: 2, pattern: 'sand' },
          { name: '泥岩(3〜8m)', thickness: 5, pattern: 'mud' },
        ],
      },
    ],
    caption: '地表からの深さは、層の厚さを上から順に足し算して求める。深さ2.5mは砂岩層（1〜3m）に属する',
  },

  // ===== 418. 柱状図の対比（岩石の種類だけで対比してはいけない） =====
  lf_rika_ext12_418: {
    kind: 'stratum',
    columns: [
      {
        label: '地点P',
        layers: [
          { name: '砂岩（新しい）', thickness: 2, pattern: 'sand' },
          { name: '泥岩', thickness: 3, pattern: 'mud' },
          { name: '砂岩（古い）', thickness: 2, pattern: 'sand' },
        ],
      },
      {
        label: '地点Q',
        layers: [
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: '砂岩', thickness: 3, pattern: 'sand' },
          { name: 'れき岩', thickness: 2, pattern: 'gravel' },
        ],
      },
    ],
    caption: '地点Pには新旧2つの砂岩層がある。「砂岩」という岩石の種類が同じというだけで地点Qの砂岩層と安易に対比してはいけない',
  },

  // ===== 419. 火山灰の層（鍵層）を使った地層の対比 =====
  lf_rika_ext12_419: {
    kind: 'stratum',
    columns: [
      {
        label: '地点A',
        layers: [
          { name: '泥岩', thickness: 2, pattern: 'mud' },
          { name: '凝灰岩（鍵層）', thickness: 1, pattern: 'ash' },
          { name: '砂岩', thickness: 3, pattern: 'sand' },
        ],
      },
      {
        label: '地点B',
        layers: [
          { name: '砂岩', thickness: 1, pattern: 'sand' },
          { name: '凝灰岩（鍵層）', thickness: 1, pattern: 'ash' },
          { name: '泥岩', thickness: 4, pattern: 'mud' },
        ],
      },
    ],
    caption: '凝灰岩（火山灰の層）は同じ時期に広範囲へ一気に降り積もるため、周りの岩石の種類が違っても同じ凝灰岩の層を目印に離れた地点の地層を対比できる（鍵層）',
  },

  // ===== 421. 標高を考慮した地層の対比（計算問題） =====
  lf_rika_ext12_421: {
    kind: 'stratum',
    columns: [
      {
        label: '地点A',
        topLabel: '標高20m',
        layers: [
          { name: '（地表からの堆積物）5m', thickness: 5, pattern: 'plain' },
          { name: '凝灰岩の上面', thickness: 1, pattern: 'ash' },
        ],
      },
      {
        label: '地点B',
        topLabel: '標高60m',
        layers: [
          { name: '（地表からの堆積物）40m', thickness: 40, pattern: 'plain' },
          { name: '凝灰岩の上面', thickness: 1, pattern: 'ash' },
        ],
      },
    ],
    caption: '凝灰岩層の標高＝地点の標高－深さ。A:20－5＝15m、B:60－40＝20m。標高で比べるとBの方が高い位置に凝灰岩層がある',
  },

  // ===== 422. れき岩・砂岩・泥岩の粒の大きさ =====
  lf_rika_ext12_422: {
    kind: 'barChart',
    yLabel: '粒の直径(mm・例)',
    bars: [
      { label: 'れき（2mm以上）', value: 5 },
      { label: '砂（2〜1/16mm）', value: 0.5 },
      { label: '泥（1/16mm未満）', value: 0.02 },
    ],
    caption: 'れき岩・砂岩・泥岩は粒の大きさ（直径）で区別する。境目は2mmと1/16mm（0.0625mm）',
  },

  // ===== 423. 凝灰岩の特徴 =====
  lf_rika_ext12_423: {
    kind: 'stratum',
    columns: [
      {
        topLabel: '地表',
        layers: [
          { name: '砂岩', thickness: 2, pattern: 'sand' },
          { name: '凝灰岩', thickness: 2, pattern: 'ash' },
          { name: '泥岩', thickness: 3, pattern: 'mud' },
        ],
      },
    ],
    caption: '凝灰岩は火山灰が堆積してできた堆積岩。流水で運ばれてきた粒ではなく火山から直接降ってきた粒（ガラス質で角ばった粒）からできている点が他の堆積岩と異なる',
  },

  // ===== 424. 石灰岩とチャート（塩酸との反応） =====
  lf_rika_ext12_424: {
    kind: 'barChart',
    yLabel: 'うすい塩酸をかけたときの反応',
    bars: [
      { label: '石灰岩（反応あり＝泡が出る）', value: 1 },
      { label: 'チャート（反応なし）', value: 0 },
    ],
    caption: '石灰岩（主成分は炭酸カルシウム）はうすい塩酸をかけると二酸化炭素の泡を出して溶ける。チャート（主成分は二酸化ケイ素）は塩酸をかけても反応しない',
  },

  // ===== 428. 地質年代と示準化石 =====
  lf_rika_ext12_428: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '古生代（サンヨウチュウ・フズリナ）' },
      { x: 2, label: '中生代（アンモナイト・恐竜）' },
      { x: 3, label: '新生代（ビカリア・ナウマンゾウ）' },
    ],
    caption: '地質年代は古い方から古生代→中生代→新生代の順。それぞれの代表的な示準化石とセットで覚える',
  },

  // ===== 430. 示準化石と示相化石の総合問題 =====
  lf_rika_ext12_430: {
    kind: 'stratum',
    columns: [
      {
        topLabel: '地表',
        layers: [
          { name: '砂岩（ビカリアの化石）', thickness: 2, pattern: 'sand' },
          { name: '泥岩（アンモナイトの化石）', thickness: 3, pattern: 'mud' },
          { name: '石灰岩（サンゴの化石）', thickness: 2, pattern: 'lime' },
        ],
      },
    ],
    caption: 'ビカリア→新生代（示準化石）、アンモナイト→中生代（示準化石）、サンゴ→あたたかく浅い海（示相化石）。同じ柱状図でも「時代」を示す化石と「環境」を示す化石がある',
  },

  // ===== 432. 震源と震央 =====
  lf_rika_ext12_432: {
    kind: 'coordinate',
    xRange: [-20, 20],
    yRange: [-40, 10],
    points: [
      { x: 0, y: 0, label: '震央' },
      { x: 0, y: -30, label: '震源' },
    ],
    segments: [ [ { x: 0, y: 0 }, { x: 0, y: -30 } ] ],
    caption: '震源は地下で実際に地震が発生した場所。震央は震源の真上にある地表の点。震源の深さは震源から震央までの距離',
  },

  // ===== 433. P波とS波の伝わり方の違い =====
  lf_rika_ext12_433: {
    kind: 'lineChart',
    xLabel: '震源からの距離(km)',
    yLabel: '地震発生からの経過時間(秒)',
    xRange: [0, 50],
    yRange: [0, 13],
    series: [
      { label: 'P波', markers: true, points: [ { x: 0, y: 0 }, { x: 24, y: 3 }, { x: 48, y: 6 } ] },
      { label: 'S波', markers: true, points: [ { x: 0, y: 0 }, { x: 24, y: 6 }, { x: 48, y: 12 } ] },
    ],
    caption: 'グラフの傾きが小さいP波の方が速く伝わる。同じ距離でもS波の方が到達までの時間が長い＝P波の方が先に届く',
  },

  // ===== 434. 初期微動継続時間の求め方 =====
  lf_rika_ext12_434: {
    kind: 'barChart',
    yLabel: 'P波到達からの経過時間(秒)',
    bars: [
      { label: 'P波到達（基準）', value: 0 },
      { label: 'S波到達', value: 8 },
    ],
    caption: 'P波とS波の到達時刻の差（この場合8秒）が初期微動継続時間。S波到達時刻そのものではない',
  },

  // ===== 436. 震度とマグニチュード（エネルギーの比較） =====
  lf_rika_ext12_436: {
    kind: 'barChart',
    yLabel: '地震のエネルギー（M5を1とした相対値）',
    bars: [
      { label: 'M5', value: 1 },
      { label: 'M6', value: 32 },
      { label: 'M7', value: 1000 },
    ],
    caption: 'マグニチュードが1大きくなるとエネルギーは約32倍、2大きくなると1000倍になる',
  },

  // ===== 438. 初期微動継続時間と震源距離の比例関係 =====
  lf_rika_ext12_438: {
    kind: 'lineChart',
    xLabel: '初期微動継続時間(秒)',
    yLabel: '震源からの距離(km)',
    xRange: [0, 8],
    yRange: [0, 64],
    series: [
      { markers: true, points: [ { x: 0, y: 0 }, { x: 3, y: 24 }, { x: 6, y: 48 }, { x: 8, y: 64 } ] },
    ],
    caption: '震源からの距離は初期微動継続時間にほぼ比例する（大森公式）。このグラフでは 距離(km) = 8 × 初期微動継続時間(秒)',
  },

  // ===== 439. 到達時刻のグラフを読み取る計算問題 =====
  lf_rika_ext12_439: {
    kind: 'lineChart',
    xLabel: '震源からの距離(km)',
    yLabel: '到達までの時間(秒)',
    xRange: [0, 48],
    yRange: [0, 12],
    series: [
      { label: 'P波', markers: true, points: [ { x: 0, y: 0 }, { x: 24, y: 3 }, { x: 48, y: 6 } ] },
      { label: 'S波', markers: true, points: [ { x: 0, y: 0 }, { x: 24, y: 6 }, { x: 48, y: 12 } ] },
    ],
    caption: 'このグラフから、震源からの距離が36kmの地点の初期微動継続時間は約4.5秒と読み取れる（36÷8＝4.5）',
  },

  // ===== 441. 2地点のデータから震源距離を求める =====
  lf_rika_ext12_441: {
    kind: 'barChart',
    yLabel: '震源からの距離(km)',
    bars: [
      { label: '地点X（初期微動4秒）', value: 32 },
      { label: '地点Y（初期微動10秒）', value: 80 },
    ],
    caption: '同じ地震では比例定数kは一定。k＝32km÷4秒＝8。地点Yの震源距離＝8×10＝80km',
  },

  // ===== 442. 地震波計算の入試総合問題 =====
  lf_rika_ext12_442: {
    kind: 'lineChart',
    xLabel: '初期微動継続時間(秒)',
    yLabel: '震源からの距離(km)',
    xRange: [0, 12],
    yRange: [0, 96],
    series: [
      { markers: true, points: [ { x: 2, y: 16 }, { x: 5, y: 40 }, { x: 12, y: 96 } ] },
    ],
    caption: '3地点のデータはすべて「震源距離＝8×初期微動継続時間」の関係に乗る（比例定数k＝8）',
  },

  // ===== 444. マグマの成分（SiO2）と粘性の関係 =====
  lf_rika_ext12_444: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '玄武岩質（SiO2少・粘性小）' },
      { x: 2, label: '安山岩質（中間）' },
      { x: 3, label: '流紋岩質（SiO2多・粘性大）' },
    ],
    caption: 'マグマの粘り気はSiO2（二酸化ケイ素）の含有量が多いほど大きくなる：玄武岩質＜安山岩質＜流紋岩質',
  },

  // ===== 445. 軽石とスコリアの違い =====
  lf_rika_ext12_445: {
    kind: 'barChart',
    yLabel: '由来するマグマのSiO2含有量(%・目安)',
    bars: [
      { label: '軽石（白っぽい）', value: 70 },
      { label: 'スコリア（黒っぽい）', value: 50 },
    ],
    caption: '軽石とスコリアはどちらも気泡を多く含み軽いが、軽石はSiO2の多い白っぽいマグマ、スコリアはSiO2の少ない黒っぽいマグマに由来する',
  },

  // ===== 447. 冷え方と結晶の大きさ =====
  lf_rika_ext12_447: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '急冷（地表付近）→結晶小（斑状組織＝火山岩）' },
      { x: 3, label: '徐冷（地下深く）→結晶大（等粒状組織＝深成岩）' },
    ],
    caption: '冷え方がゆっくりなほど結晶が成長する時間が長くなり、大きな結晶（等粒状組織）になる',
  },

  // ===== 448. 火山岩3種のSiO2含有量 =====
  lf_rika_ext12_448: {
    kind: 'barChart',
    yLabel: 'SiO2含有量(%・目安)',
    bars: [
      { label: '玄武岩（黒っぽい）', value: 50 },
      { label: '安山岩（中間）', value: 60 },
      { label: '流紋岩（白っぽい）', value: 70 },
    ],
    caption: '火山岩はSiO2含有量が多いほど白っぽくなる：玄武岩＜安山岩＜流紋岩',
  },

  // ===== 449. 深成岩3種のSiO2含有量 =====
  lf_rika_ext12_449: {
    kind: 'barChart',
    yLabel: 'SiO2含有量(%・目安)',
    bars: [
      { label: 'はんれい岩（黒っぽい）', value: 50 },
      { label: 'せん緑岩（中間）', value: 60 },
      { label: '花こう岩（白っぽい）', value: 70 },
    ],
    caption: '深成岩も同じ規則：はんれい岩＜せん緑岩＜花こう岩。同じ色（同じマグマ）の火山岩とペアで覚える（はんれい岩⇔玄武岩、せん緑岩⇔安山岩、花こう岩⇔流紋岩）',
  },
};
