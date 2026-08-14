import type { Figure } from './figures';

// 高校受験 国語「説明的文章の読解（応用）」拡張ユニット（koko_kokugo_s121〜s155）の図解。
// キーは lessons-koko-kokugo-ext04.ts の figureId と対応。
// 説明的文章は「図表つき読解」が入試頻出なので、本文中に引用されたデータを
// そのままグラフ化し、本文と図を突き合わせて読む練習ができるようにしてある（35課中16課）。
export const lessonFigsKokoKokugoExt04: Record<string, Figure> = {
  // s121：対比の目印を探す練習に使う本文中のグラフ（若者の自動車保有率）
  lf_kokokokugoext04_121: {
    kind: 'barChart',
    xLabel: '調査年',
    yLabel: '20代の自動車保有率(%)',
    yMax: 70,
    bars: [
      { label: '1995年', value: 62, color: '#0369A1' },
      { label: '2005年', value: 49, color: '#0284C7' },
      { label: '2015年', value: 33, color: '#0EA5E9' },
      { label: '2025年', value: 24, color: '#7DD3FC' },
    ],
    caption: '本文が引く「20代の自動車保有率」。1995年の62%から2025年の24%へ、30年で38ポイント減っている。筆者はこの数値を「所有」から「利用」への価値観の転換の根拠として使っている',
  },

  // s123：対比が「時間の前後」で示される型（新聞とネットの逆転）
  lf_kokokokugoext04_123: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '割合(%)',
    xRange: [2005, 2025],
    yRange: [0, 80],
    series: [
      {
        label: '新聞を毎日読む',
        color: '#64748B',
        markers: true,
        points: [
          { x: 2005, y: 52 },
          { x: 2010, y: 44 },
          { x: 2015, y: 33 },
          { x: 2020, y: 22 },
          { x: 2025, y: 14 },
        ],
      },
      {
        label: 'ネットでニュースを読む',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 2005, y: 18 },
          { x: 2010, y: 31 },
          { x: 2015, y: 48 },
          { x: 2020, y: 63 },
          { x: 2025, y: 74 },
        ],
      },
    ],
    caption: '本文が引く二本の折れ線。二本は2010年（新聞44%・ネット31%）と2015年（新聞33%・ネット48%）の間で上下が入れかわる。「いつ逆転したか」はグラフからは年単位まで特定できない',
  },

  // s125：対比の一方だけが目立つ円グラフ（新しい言葉を知るきっかけ）
  lf_kokokokugoext04_125: {
    kind: 'pieChart',
    slices: [
      { label: '動画・SNS', value: 46, color: '#0EA5E9' },
      { label: 'テレビ', value: 22, color: '#0369A1' },
      { label: '友人との会話', value: 18, color: '#16A34A' },
      { label: '本・新聞', value: 9, color: '#F59E0B' },
      { label: 'その他', value: 5, color: '#64748B' },
    ],
    caption: '本文が引く「中学生が新しい言葉を知るきっかけ」。動画・SNSが46%で最も多いが、半数には達していない。「画面から」（動画・SNS＋テレビ＝68%）と「人から」（友人との会話18%）という対比で読むこともできる',
  },

  // s126：空間の対比（都市と中山間地域）
  lf_kokokokugoext04_126: {
    kind: 'barChart',
    xLabel: '地域',
    yLabel: '買い物までの平均移動時間(分)',
    yMax: 40,
    bars: [
      { label: '大都市', value: 8, color: '#0EA5E9' },
      { label: '地方都市', value: 14, color: '#0284C7' },
      { label: '中山間地域', value: 37, color: '#0369A1' },
    ],
    caption: '本文が引く「食料品店までの平均移動時間」。中山間地域の37分は大都市の8分の約4.6倍。筆者はこの差を「便利さは全国一律ではない」という主張の根拠にしている',
  },

  // s127：具体と抽象のピラミッド（上へ行くほど抽象、下へ行くほど具体）
  lf_kokokokugoext04_127: {
    kind: 'polygon',
    points: [
      { x: 5, y: 9, label: '抽象（筆者の主張）' },
      { x: 0, y: 0, label: '具体例A' },
      { x: 10, y: 0, label: '具体例B' },
    ],
    sideLabels: ['↓ 具体化（つまり例えば）', '同じ性質をもつ例のならび', '↑ 抽象化（つまりまとめると）'],
    fill: true,
    caption: '説明的文章の基本構造。下の具体例をまとめ上げると上の主張になり、上の主張をかみくだくと下の具体例になる。設問で問われるのはほぼ常に「上」の側',
  },

  // s129：抽象度のものさし（同じものを指す語も、上位ほど抽象度が高い）
  lf_kokokokugoext04_129: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 0, label: '赤いリンゴ' },
      { x: 1, label: 'リンゴ' },
      { x: 2, label: '果物' },
      { x: 3, label: '食べ物' },
      { x: 4, label: '物' },
      { x: 5, label: '存在' },
    ],
    caption: '抽象度のものさし。右へ行くほど抽象度が高く、指す範囲が広くなるかわりに情報量は減る。傍線部の言いかえは「同じ目盛りの語」か「一つ右の語」で答えるのが原則',
  },

  // s131：具体例に添えられた数値（学校段階別の月間読書冊数）
  lf_kokokokugoext04_131: {
    kind: 'barChart',
    xLabel: '学校段階',
    yLabel: '1か月の平均読書冊数(冊)',
    yMax: 12,
    bars: [
      { label: '小学生', value: 11.6, color: '#0EA5E9' },
      { label: '中学生', value: 4.5, color: '#0284C7' },
      { label: '高校生', value: 1.8, color: '#0369A1' },
    ],
    caption: '本文の具体例に添えられた数値。小学生11.6冊は高校生1.8冊の約6.4倍。この数値そのものは「具体」であり、筆者の主張は「読書が生活から押し出されていく」という「抽象」の側にある',
  },

  // s133：主張・根拠・理由づけの三角ロジック
  lf_kokokokugoext04_133: {
    kind: 'polygon',
    points: [
      { x: 5, y: 9, label: '主張（結論）' },
      { x: 0, y: 0, label: '根拠となる事実' },
      { x: 10, y: 0, label: '理由づけ（つなぐ考え）' },
    ],
    sideLabels: ['支える →', '事実と考えを結ぶ', '← 支える'],
    fill: true,
    caption: '論の三角形。事実だけでは主張は立たず、「その事実がなぜ主張を支えるのか」という理由づけが必ず要る。設問「根拠を答えよ」では事実だけでなく理由づけまで書けると差がつく',
  },

  // s135：主張を支える根拠データ（朝読書導入後の貸出冊数の推移）
  lf_kokokokugoext04_135: {
    kind: 'barChart',
    xLabel: '朝読書の導入からの経過',
    yLabel: '1人あたり年間貸出冊数(冊)',
    yMax: 30,
    bars: [
      { label: '導入前', value: 12.1, color: '#64748B' },
      { label: '1年後', value: 19.6, color: '#7DD3FC' },
      { label: '2年後', value: 25.3, color: '#0EA5E9' },
      { label: '3年後', value: 28.4, color: '#0369A1' },
    ],
    caption: '本文が根拠として引く数値。3年で12.1冊から28.4冊へ約2.3倍。ただしこれは1校のデータであり、「全国の中学生が本を読むようになった」ことの証明にはならない',
  },

  // s138：譲歩段落と主張段落の分量の差
  lf_kokokokugoext04_138: {
    kind: 'barChart',
    xLabel: '段落',
    yLabel: 'おおよその字数',
    yMax: 300,
    bars: [
      { label: '①問題提起', value: 180, color: '#0284C7' },
      { label: '②たしかに', value: 150, color: '#64748B' },
      { label: '③しかし', value: 260, color: '#0EA5E9' },
      { label: '④だから', value: 210, color: '#0369A1' },
    ],
    caption: '譲歩型の文章の分量。灰色の②「たしかに」は筆者の意見ではなく、いったん認める反対意見。字数も③④より少ないことが多い。長さと重要度がずれる典型例',
  },

  // s142：図表読解①（部活動の週あたり活動日数）
  lf_kokokokugoext04_142: {
    kind: 'barChart',
    xLabel: '週あたりの活動日数',
    yLabel: '生徒の割合(%)',
    yMax: 35,
    bars: [
      { label: '3日以下', value: 12, color: '#7DD3FC' },
      { label: '4日', value: 15, color: '#38BDF8' },
      { label: '5日', value: 24, color: '#0EA5E9' },
      { label: '6日', value: 31, color: '#0284C7' },
      { label: '7日', value: 18, color: '#0369A1' },
    ],
    caption: '運動部員の週あたり活動日数。最も多いのは6日の31%だが、過半数ではない。5日以上を合計すると24＋31＋18＝73%になる。「最大の棒」と「合計」を区別して読む',
  },

  // s143：図表読解②（1人1日あたりのごみ排出量の推移）
  lf_kokokokugoext04_143: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '1人1日あたりのごみ排出量(g)',
    xRange: [2000, 2025],
    yRange: [800, 1200],
    series: [
      {
        label: 'ごみ排出量',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 2000, y: 1185 },
          { x: 2005, y: 1131 },
          { x: 2010, y: 976 },
          { x: 2015, y: 939 },
          { x: 2020, y: 901 },
          { x: 2025, y: 872 },
        ],
      },
    ],
    caption: 'ごみ排出量は一貫して減っているが、減り方は鈍っている。2000→2010年は1185→976で209gの減、2010→2020年は976→901で75gの減。「減り続けている」と「減り方が小さくなっている」は両立する',
  },

  // s144：図表読解③（食品ロスの発生元）
  lf_kokokokugoext04_144: {
    kind: 'pieChart',
    slices: [
      { label: '家庭', value: 46, color: '#0EA5E9' },
      { label: '食品製造業', value: 25, color: '#0369A1' },
      { label: '外食産業', value: 15, color: '#16A34A' },
      { label: '食品小売業', value: 11, color: '#F59E0B' },
      { label: '食品卸売業', value: 3, color: '#64748B' },
    ],
    caption: '食品ロスの発生元の割合。単独では家庭の46%が最大だが、事業系の四つを合計すると25＋15＋11＋3＝54%で家庭を上回る。「最大の項目」と「まとめた合計」で結論が逆になる例',
  },

  // s145：図表読解④（割合と実数のずれ）
  lf_kokokokugoext04_145: {
    kind: 'barChart',
    xLabel: '学校',
    yLabel: '「読書が好き」と答えた割合(%)',
    yMax: 70,
    bars: [
      { label: 'A中学（全校200人）', value: 60, color: '#0EA5E9' },
      { label: 'B中学（全校400人）', value: 45, color: '#0369A1' },
    ],
    caption: '割合ではA中学が上（60%対45%）。しかし人数に直すとA中学は200×0.6＝120人、B中学は400×0.45＝180人で、B中学のほうが60人多い。グラフが割合なのか実数なのかを必ず確かめる',
  },

  // s146：図表読解⑤（二系列の逆転と交点）
  lf_kokokokugoext04_146: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '総人口に占める割合(%)',
    xRange: [1970, 2025],
    yRange: [0, 35],
    series: [
      {
        label: '15歳未満',
        color: '#16A34A',
        markers: true,
        points: [
          { x: 1970, y: 23.9 },
          { x: 1990, y: 18.2 },
          { x: 2010, y: 13.2 },
          { x: 2025, y: 11.1 },
        ],
      },
      {
        label: '65歳以上',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1970, y: 7.1 },
          { x: 1990, y: 12.1 },
          { x: 2010, y: 23.0 },
          { x: 2025, y: 29.6 },
        ],
      },
    ],
    caption: '15歳未満と65歳以上の割合。1990年は年少18.2%・高齢12.1%で年少が上、2010年は年少13.2%・高齢23.0%で高齢が上。逆転は1990年と2010年の間に起きたことしかこの図からは言えない',
  },

  // s148：同じデータを二人の筆者が正反対に評価する例
  lf_kokokokugoext04_148: {
    kind: 'barChart',
    xLabel: '調査年',
    yLabel: 'AIを導入した企業の割合(%)',
    yMax: 60,
    bars: [
      { label: '2020年', value: 9, color: '#7DD3FC' },
      { label: '2022年', value: 17, color: '#38BDF8' },
      { label: '2024年', value: 32, color: '#0EA5E9' },
      { label: '2026年', value: 48, color: '#0369A1' },
    ],
    caption: '文章Aと文章Bが共通して引くグラフ。Aは「6年で9%から48%へ、5倍以上に急増した」と読み、Bは「6年たっても半数に届かない」と読む。同じ数値でも比較の基準が違えば評価は逆になる',
  },
};
