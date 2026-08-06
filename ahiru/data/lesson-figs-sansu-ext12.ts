import type { Figure } from './figures';

// 統計・資料の整理（sansu_s431〜sansu_s450）専用の図解データ。
// 数値はすべて lessons-sansu-ext12.ts の本文中の実データと一致させてある。

export const lessonFigsSansuExt12: Record<string, Figure> = {
  // ===== 431. 度数分布表の基本（ソフトボール投げ20人） =====
  lf_sansu_ext12_431: {
    kind: 'barChart',
    yLabel: '度数（人）',
    histogram: true,
    bars: [
      { label: '15m以上20m未満', value: 7 },
      { label: '20m以上25m未満', value: 8, color: '#F59E0B' },
      { label: '25m以上30m未満', value: 4 },
      { label: '30m以上35m未満', value: 1 },
    ],
    caption: '20人のソフトボール投げの記録を度数分布表にした。合計は7+8+4+1=20人。',
  },

  // ===== 432. ヒストグラムのかき方・読み方（テスト得点30人） =====
  lf_sansu_ext12_432: {
    kind: 'barChart',
    yLabel: '度数（人）',
    histogram: true,
    bars: [
      { label: '40〜50点', value: 2 },
      { label: '50〜60点', value: 5 },
      { label: '60〜70点', value: 9, color: '#F59E0B' },
      { label: '70〜80点', value: 8 },
      { label: '80〜90点', value: 4 },
      { label: '90〜100点', value: 2 },
    ],
    caption: '30人のテスト得点のヒストグラム。棒は隙間なく並べる。合計は2+5+9+8+4+2=30人。',
  },

  // ===== 433. 相対度数・累積度数（432と同じテスト得点データ） =====
  lf_sansu_ext12_433: {
    kind: 'barChart',
    yLabel: '累積度数（人）',
    histogram: true,
    bars: [
      { label: '〜50点', value: 2 },
      { label: '〜60点', value: 7 },
      { label: '〜70点', value: 16 },
      { label: '〜80点', value: 24 },
      { label: '〜90点', value: 28 },
      { label: '〜100点', value: 30, color: '#F59E0B' },
    ],
    caption: '累積度数は「その階級までの度数を合計した値」。最後の階級では必ず全体の人数(30人)と一致する。',
  },

  // ===== 434. 度数分布表からの平均（431と同じソフトボール投げデータ） =====
  lf_sansu_ext12_434: {
    kind: 'barChart',
    yLabel: '階級値×度数',
    histogram: true,
    bars: [
      { label: '17.5×7=122.5', value: 122.5 },
      { label: '22.5×8=180', value: 180, color: '#F59E0B' },
      { label: '27.5×4=110', value: 110 },
      { label: '32.5×1=32.5', value: 32.5 },
    ],
    caption: '階級値×度数の合計は122.5+180+110+32.5=445。度数の合計20で割ると平均は445÷20=22.25m。',
  },

  // ===== 435b. 二山型（双峰性）の例：睡眠時間24人 =====
  lf_sansu_ext12_435b: {
    kind: 'barChart',
    yLabel: '度数（人）',
    histogram: true,
    bars: [
      { label: '6時間台', value: 3 },
      { label: '7時間台', value: 8, color: '#F59E0B' },
      { label: '8時間台', value: 3 },
      { label: '9時間台', value: 8, color: '#F59E0B' },
      { label: '10時間台', value: 2 },
    ],
    caption: '山が2つある「二山型」の分布。7時間台と9時間台がどちらも度数8人で並んで最も多い（最頻の階級が2つ）。合計は3+8+3+8+2=24人。',
  },

  // ===== 436. 平均値と仮平均（5人のテスト点数） =====
  lf_sansu_ext12_436: {
    kind: 'barChart',
    yLabel: '点数',
    bars: [
      { label: 'Aさん78点', value: 78 },
      { label: 'Bさん82点', value: 82 },
      { label: 'Cさん75点', value: 75 },
      { label: 'Dさん90点', value: 90 },
      { label: 'Eさん85点', value: 85 },
    ],
    caption: '5人の合計は78+82+75+90+85=410点。平均は410÷5=82点。仮平均80点との差を使っても同じ82点になる。',
  },

  // ===== 437a. 中央値（奇数7人・並べかえ後） =====
  lf_sansu_ext12_437a: {
    kind: 'barChart',
    yLabel: '点数',
    bars: [
      { label: '1番目55', value: 55 },
      { label: '2番目62', value: 62 },
      { label: '3番目68', value: 68 },
      { label: '4番目70(中央値)', value: 70, color: '#F59E0B' },
      { label: '5番目78', value: 78 },
      { label: '6番目85', value: 85 },
      { label: '7番目90', value: 90 },
    ],
    caption: '小さい順に並べた7人の点数。7人（奇数）のときは真ん中の4番目が中央値＝70点。',
  },

  // ===== 437b. 中央値（偶数8人・並べかえ後） =====
  lf_sansu_ext12_437b: {
    kind: 'barChart',
    yLabel: '回数',
    bars: [
      { label: '1番目45', value: 45 },
      { label: '2番目47', value: 47 },
      { label: '3番目48', value: 48 },
      { label: '4番目50', value: 50, color: '#F59E0B' },
      { label: '5番目52', value: 52, color: '#F59E0B' },
      { label: '6番目55', value: 55 },
      { label: '7番目58', value: 58 },
      { label: '8番目60', value: 60 },
    ],
    caption: '8人（偶数）のときは真ん中の2つ(4番目50と5番目52)の平均が中央値＝(50+52)÷2=51回。',
  },

  // ===== 438a. 最頻値（家庭のペットの数20件） =====
  lf_sansu_ext12_438a: {
    kind: 'barChart',
    yLabel: '度数（件）',
    bars: [
      { label: '0匹', value: 5 },
      { label: '1匹', value: 7, color: '#F59E0B' },
      { label: '2匹', value: 5 },
      { label: '3匹', value: 2 },
      { label: '4匹', value: 1 },
    ],
    caption: '「1匹」の家庭が7件で最多。最頻値は1匹（4匹は最頻値ではなく、単なる最大の値）。',
  },

  // ===== 438b. 最頻値のタイ（好きな給食10人） =====
  lf_sansu_ext12_438b: {
    kind: 'barChart',
    yLabel: '票数（人）',
    bars: [
      { label: 'カレー', value: 3, color: '#F59E0B' },
      { label: 'ラーメン', value: 3, color: '#F59E0B' },
      { label: 'うどん', value: 2 },
      { label: 'パン', value: 2 },
    ],
    caption: 'カレーとラーメンがどちらも3人で並んで最多 → 最頻値は2つ（カレーとラーメン）。',
  },

  // ===== 439. 平均・中央値・最頻値の使い分け（月収10人＋外れ値） =====
  lf_sansu_ext12_439: {
    kind: 'barChart',
    yLabel: '月収（万円）',
    bars: [
      { label: '24', value: 24 },
      { label: '24', value: 24 },
      { label: '25', value: 25 },
      { label: '25', value: 25 },
      { label: '25', value: 25 },
      { label: '26', value: 26 },
      { label: '26', value: 26 },
      { label: '27', value: 27 },
      { label: '28', value: 28 },
      { label: 'CEO 500', value: 500, color: '#E11D48' },
    ],
    caption: '9人は24〜28万円台なのに、CEOの500万円だけ飛び抜けている。平均は73万円まで引き上げられるが、中央値25.5万円・最頻値25万円の方が実態に近い。',
  },

  // ===== 440. 度数分布表からの中央値・最頻値（テスト得点30人・別クラス） =====
  lf_sansu_ext12_440: {
    kind: 'barChart',
    yLabel: '度数（人）',
    histogram: true,
    bars: [
      { label: '40〜50点', value: 3 },
      { label: '50〜60点', value: 9, color: '#F59E0B' },
      { label: '60〜70点', value: 6 },
      { label: '70〜80点', value: 7 },
      { label: '80〜90点', value: 3 },
      { label: '90〜100点', value: 2 },
    ],
    caption: '最頻階級は度数9人で最多の「50〜60点」。ただし中央値（15・16番目）は累積度数3→12→18の並びから「60〜70点」の階級に入り、最頻階級とは一致しない。',
  },

  // ===== 441. 四分位数（反復横跳び12人） =====
  lf_sansu_ext12_441: {
    kind: 'boxplot',
    min: 38,
    q1: 42,
    median: 46.5,
    q3: 50.5,
    max: 55,
    scaleMin: 35,
    scaleMax: 58,
    caption: '12人のデータを並べかえ→前半6個{38,40,41,43,44,46}の中央値がQ1=42、後半6個{47,48,50,51,53,55}の中央値がQ3=50.5。',
  },

  // ===== 442. 箱ひげ図の読み方（50m走16人） =====
  lf_sansu_ext12_442: {
    kind: 'boxplot',
    min: 7.2,
    q1: 7.65,
    median: 8.05,
    q3: 8.45,
    max: 9.0,
    scaleMin: 7,
    scaleMax: 9.2,
    caption: '箱の中の線（8.05秒）は中央値であって平均値ではない。タイムは小さいほど速いので、上位25%はQ1(7.65秒)より速いグループ。',
  },

  // ===== 443a. 箱ひげ図の比較：A組10人 =====
  lf_sansu_ext12_443a: {
    kind: 'boxplot',
    min: 60,
    q1: 65,
    median: 71,
    q3: 76,
    max: 85,
    scaleMin: 55,
    scaleMax: 100,
    caption: 'A組：範囲＝85-60=25点、四分位範囲＝76-65=11点。データが中央値付近に集まっている。',
  },

  // ===== 443b. 箱ひげ図の比較：B組10人 =====
  lf_sansu_ext12_443b: {
    kind: 'boxplot',
    min: 50,
    q1: 60,
    median: 72.5,
    q3: 85,
    max: 95,
    scaleMin: 45,
    scaleMax: 100,
    caption: 'B組：範囲＝95-50=45点、四分位範囲＝85-60=25点。中央値はA組と近いが、散らばりはB組の方がずっと大きい。',
  },

  // ===== 444. 範囲・四分位範囲と外れ値（ゲーム得点11人） =====
  lf_sansu_ext12_444: {
    kind: 'boxplot',
    min: 20,
    q1: 23,
    median: 26,
    q3: 29,
    max: 95,
    scaleMin: 15,
    scaleMax: 100,
    caption: '外れ値95点のせいで範囲は95-20=75点と非常に大きいが、四分位範囲は29-23=6点と外れ値の影響をほとんど受けない。',
  },

  // ===== 445a. 好きなスポーツの割合（円グラフ・全体120人） =====
  lf_sansu_ext12_445a: {
    kind: 'pieChart',
    slices: [
      { label: 'サッカー 30%', value: 30 },
      { label: '野球 25%', value: 25 },
      { label: 'バスケットボール 20%', value: 20 },
      { label: 'その他 25%', value: 25 },
    ],
    caption: '全体120人のうち、その他は120×0.25=30人。',
  },

  // ===== 445b. 「その他」の内訳（棒グラフ・30人） =====
  lf_sansu_ext12_445b: {
    kind: 'barChart',
    yLabel: '人数（人）',
    bars: [
      { label: '卓球', value: 12 },
      { label: 'バドミントン', value: 10 },
      { label: '水泳', value: 8 },
    ],
    caption: '「その他」30人の内訳。12+10+8=30人で一致する。水泳が好きな人は全体120人の中では8÷120×100=約6.7%。',
  },

  // ===== 446. 入試実戦①：通学時間25人 =====
  lf_sansu_ext12_446: {
    kind: 'barChart',
    yLabel: '度数（人）',
    histogram: true,
    bars: [
      { label: '0〜10分', value: 3 },
      { label: '10〜20分', value: 7 },
      { label: '20〜30分', value: 9, color: '#F59E0B' },
      { label: '30〜40分', value: 4 },
      { label: '40〜50分', value: 2 },
    ],
    caption: '合計人数は3+7+9+4+2=25人。階級値×度数の合計は575、平均は575÷25=23分。',
  },

  // ===== 447. 入試実戦②：平均・中央値・最頻値の融合（5人） =====
  lf_sansu_ext12_447: {
    kind: 'barChart',
    yLabel: '点数',
    bars: [
      { label: '65点', value: 65 },
      { label: '70点(中央値)', value: 70, color: '#F59E0B' },
      { label: '70点(最頻値)', value: 70, color: '#F59E0B' },
      { label: '75点', value: 75 },
      { label: '80点', value: 80 },
    ],
    caption: '合計は65+70+70+75+80=360点、平均は360÷5=72点。中央値(3番目)は70点で、70点は2回出て最頻値でもある。',
  },

  // ===== 448. 入試実戦③：上体起こし20人（箱ひげ図） =====
  lf_sansu_ext12_448: {
    kind: 'boxplot',
    min: 15,
    q1: 22,
    median: 27,
    q3: 33,
    max: 42,
    scaleMin: 12,
    scaleMax: 45,
    caption: '回数は多いほど良い記録。上位25%（回数が多い方）はQ3の33回以上。箱(Q1〜Q3)の中には全体の50%が入るが、ひげ部分は25%ずつしかない。',
  },

  // ===== 449a. 給食アンケートの割合（円グラフ） =====
  lf_sansu_ext12_449a: {
    kind: 'pieChart',
    slices: [
      { label: 'ラーメン 40%', value: 40 },
      { label: 'カレー 25%', value: 25 },
      { label: 'からあげ 20%', value: 20 },
      { label: 'その他 15%', value: 15 },
    ],
    caption: 'ラーメンと答えた16人が全体の40%にあたる → 全体は16÷0.4=40人。',
  },

  // ===== 449b. 給食アンケートの実人数（棒グラフ） =====
  lf_sansu_ext12_449b: {
    kind: 'barChart',
    yLabel: '人数（人）',
    bars: [
      { label: 'ラーメン', value: 16, color: '#F59E0B' },
      { label: 'カレー', value: 10 },
      { label: 'からあげ', value: 8 },
      { label: 'その他', value: 6 },
    ],
    caption: '全体40人×各割合で計算：ラーメン16人・カレー10人・からあげ8人・その他6人（合計40人）。',
  },

  // ===== 450a. 総合演習：握力15人（ヒストグラム） =====
  lf_sansu_ext12_450a: {
    kind: 'barChart',
    yLabel: '度数（人）',
    histogram: true,
    bars: [
      { label: '20〜25kg', value: 4 },
      { label: '25〜30kg', value: 9, color: '#F59E0B' },
      { label: '30〜35kg', value: 2 },
    ],
    caption: '15人の握力：平均26.3kg、中央値26kg、最頻値28kg（28kgが4回で最多）。3つの代表値がすべて異なる。',
  },

  // ===== 450b. 総合演習：得点9人＋外れ値（箱ひげ図） =====
  lf_sansu_ext12_450b: {
    kind: 'boxplot',
    min: 10,
    q1: 11,
    median: 12,
    q3: 13.5,
    max: 90,
    scaleMin: 5,
    scaleMax: 95,
    caption: '外れ値90点のせいで平均は186÷9=約20.7点まで引き上げられるが、中央値は12点、四分位範囲も13.5-11=2.5点と小さく安定している。',
  },
};
