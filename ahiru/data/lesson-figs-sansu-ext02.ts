import type { Figure } from './figures';

// 中学受験算数：割合と比（拡張ユニットII・45セッション）の動く図解。
// キーは lessons-sansu-ext02.ts の各 Lesson.sections[].figureId から参照される。
export const lessonFigsSansuExt02: Record<string, Figure> = {
  // s041: 割合の3要素と割合の三角形（定員250人・女子150人）
  lf_ext02_001: {
    kind: 'pieChart',
    slices: [
      { label: '女子150人', value: 150 },
      { label: '男子100人', value: 100 },
    ],
    caption: '定員250人のうち女子150人 → 割合＝150÷250＝0.6（60%）',
  },

  // s042: 線分図で割合を理解する（全体40枚のうち使った12枚）
  lf_ext02_002: {
    kind: 'numberLine',
    min: 0,
    max: 40,
    step: 4,
    points: [
      { x: 12, label: '使った12枚' },
      { x: 40, label: '全体40枚' },
    ],
    segments: [{ from: 0, to: 12 }],
    caption: '使った割合＝12÷40＝0.3（3割）、残りは7割（28枚）',
  },

  // s045: 割合の増減と線分図（2000円→15%値上げ→15%値下げ）
  lf_ext02_003: {
    kind: 'numberLine',
    min: 1900,
    max: 2350,
    step: 50,
    points: [
      { x: 2000, label: '定価2,000円' },
      { x: 2300, label: '15%値上げ後2,300円' },
      { x: 1955, label: '15%値下げ後1,955円' },
    ],
    caption: '15%上げて15%下げても元の2,000円には戻らない（1,955円＝45円安い）',
  },

  // s046: 百分率の意味と分数・小数への変換（得票数の例）
  lf_ext02_004: {
    kind: 'pieChart',
    slices: [
      { label: 'A候補540票(45%)', value: 540 },
      { label: 'B候補660票(55%)', value: 660 },
    ],
    caption: '合計1,200票のうちA候補540票 → 540÷1,200＝0.45（45%）',
  },

  // s047: 歩合（割・分・厘）の仕組み（0〜10割の数直線）
  lf_ext02_005: {
    kind: 'numberLine',
    min: 0,
    max: 1,
    step: 0.1,
    points: [{ x: 0.35, label: '3割5分＝0.35' }],
    caption: '0.1の位が「割」の目盛り。0〜1（0割〜10割）を10等分している',
  },

  // s049: ○割増し・○%引きの計算（定価2,400円→4割引き）
  lf_ext02_006: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '定価', value: 2400 },
      { label: '4割引き後の売価', value: 1440 },
    ],
    caption: '売価＝定価×(1−0.4)＝2,400×0.6＝1,440円（960円は「値引き額」）',
  },

  // s050: 用法①割合を求める（定員80人・出席72人）
  lf_ext02_007: {
    kind: 'barChart',
    yLabel: '人',
    bars: [
      { label: '定員(基準量)80人', value: 80 },
      { label: '出席者(比較量)72人', value: 72 },
    ],
    caption: '出席率＝72÷80＝0.9（90%）',
  },

  // s051: 用法②比較量を求める（定員350人の72%）
  lf_ext02_008: {
    kind: 'barChart',
    yLabel: '人',
    bars: [
      { label: '定員(基準量)350人', value: 350 },
      { label: '女子(比較量)252人', value: 252 },
    ],
    caption: '女子の人数＝350×0.72＝252人',
  },

  // s052: 用法③基準量を求める（68%で952円→定価1,400円）
  lf_ext02_009: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '定価(基準量)', value: 1400 },
      { label: '売価952円(68%)', value: 952 },
    ],
    caption: '定価＝952÷0.68＝1,400円',
  },

  // s055: 比とは何か（リボンの長さ12cm:20cm→3:5）
  lf_ext02_010: {
    kind: 'barChart',
    yLabel: 'cm',
    bars: [
      { label: 'リボンA', value: 12 },
      { label: 'リボンB', value: 20 },
    ],
    caption: '12cm:20cm を最大公約数4で約分すると 3:5',
  },

  // s057: 比の値（x:y=3:4を満たす点の集まり）
  lf_ext02_011: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 14],
    lines: [{ a: 4 / 3, b: 0, label: 'x:y = 3:4' }],
    points: [
      { x: 3, y: 4, label: '3:4' },
      { x: 6, y: 8, label: '6:8' },
      { x: 9, y: 12, label: '9:12' },
    ],
    caption: 'どの点でも x:y＝3:4（比の値 x÷y＝3/4）が成り立つ＝すべて等しい比',
  },

  // s059: 逆比とその利用（速さの比5:4→時間の比4:5）
  lf_ext02_012: {
    kind: 'barChart',
    yLabel: '比の大きさ',
    bars: [
      { label: 'Aの速さ', value: 5 },
      { label: 'Bの速さ', value: 4 },
      { label: 'Aの時間', value: 4 },
      { label: 'Bの時間', value: 5 },
    ],
    caption: '速さの比5:4に対して、時間の比は逆比の4:5になる',
  },

  // s063: 比例式の文章題（合計2,400円を5:3に配分）
  lf_ext02_013: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '兄(5)', value: 1500 },
      { label: '弟(3)', value: 900 },
    ],
    caption: '合計2,400円を5:3に配分 → 1あたり300円、兄1,500円・弟900円',
  },

  // s064: 連比とは（合計300円をA:B:C=2:3:5に配分）
  lf_ext02_014: {
    kind: 'pieChart',
    slices: [
      { label: 'A 60円', value: 60 },
      { label: 'B 90円', value: 90 },
      { label: 'C 150円', value: 150 },
    ],
    caption: '合計300円をA:B:C＝2:3:5に配分（1あたり30円）',
  },

  // s066: 連比の作り方②（兄弟妹の年齢5:4:3、合計48歳）
  lf_ext02_015: {
    kind: 'pieChart',
    slices: [
      { label: '兄 20歳', value: 20 },
      { label: '弟 16歳', value: 16 },
      { label: '妹 12歳', value: 12 },
    ],
    caption: '合計48歳をA:B:C＝5:4:3に配分（1あたり4歳）',
  },

  // s067: 連比の文章題（A:B:C=6:4:5、合計450個）
  lf_ext02_016: {
    kind: 'pieChart',
    slices: [
      { label: 'A 180個', value: 180 },
      { label: 'B 120個', value: 120 },
      { label: 'C 150個', value: 150 },
    ],
    caption: 'A:B:C＝6:4:5、合計450個 → 分母は6+4+5＝15（AとBだけの10ではない）',
  },

  // s068: 相当算とは（所持金の3/5にあたる1,800円）
  lf_ext02_017: {
    kind: 'pieChart',
    slices: [
      { label: '使った1,800円(3/5)', value: 1800 },
      { label: '残り1,200円(2/5)', value: 1200 },
    ],
    caption: '所持金3,000円のうち3/5（1,800円）を使った',
  },

  // s070: 差が与えられた相当算（全体の3割より120円多い＝600円）
  lf_ext02_018: {
    kind: 'numberLine',
    min: 0,
    max: 1600,
    step: 200,
    points: [
      { x: 480, label: '全体の3割=480円' },
      { x: 600, label: '480+120=600円' },
      { x: 1600, label: '全体1,600円' },
    ],
    segments: [{ from: 0, to: 480 }],
    caption: '全体×0.3＝480円、480＋120＝600円 → 全体＝1,600円',
  },

  // s071: 2段階の相当算（所持金4,800円、半分ずつ使う）
  lf_ext02_019: {
    kind: 'pieChart',
    slices: [
      { label: '1回目に使った2,400円', value: 2400 },
      { label: '2回目に使った1,200円', value: 1200 },
      { label: '残り1,200円', value: 1200 },
    ],
    caption: '所持金4,800円 → 半分使う → 残りの半分をさらに使う → 1,200円残る',
  },

  // s072: 相当算の文章題（クラス60人、男子45%・女子55%）
  lf_ext02_020: {
    kind: 'numberLine',
    min: 0,
    max: 60,
    step: 10,
    points: [
      { x: 27, label: '男子27人(45%)' },
      { x: 60, label: '全体60人' },
    ],
    segments: [{ from: 27, to: 60 }],
    caption: '女子（27〜60の区間）は33人。女子−男子＝6人＝全体の10%にあたる',
  },

  // s073: 倍数算とは（所持金6,000円と4,000円、やりとりで1:1に）
  lf_ext02_021: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: 'Aの前6,000円', value: 6000 },
      { label: 'Bの前4,000円', value: 4000 },
      { label: 'Aの後5,000円', value: 5000 },
      { label: 'Bの後5,000円', value: 5000 },
    ],
    caption: 'Aが1,000円渡す前後の所持金。比は3:2→1:1に変化',
  },

  // s074: 差が一定の倍数算（差1,800円のまま比が7:4→5:2）
  lf_ext02_022: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: 'Aの前4,200円', value: 4200 },
      { label: 'Bの前2,400円', value: 2400 },
      { label: 'Aの後3,000円', value: 3000 },
      { label: 'Bの後1,200円', value: 1200 },
    ],
    caption: '2人とも同じ1,200円を使っても差は1,800円のまま変わらない',
  },

  // s075: 和が一定の倍数算（合計32冊、5:3→1:1）
  lf_ext02_023: {
    kind: 'barChart',
    yLabel: '冊',
    bars: [
      { label: 'Aの前20冊', value: 20 },
      { label: 'Bの前12冊', value: 12 },
      { label: 'Aの後16冊', value: 16 },
      { label: 'Bの後16冊', value: 16 },
    ],
    caption: 'AがBに4冊渡しても合計32冊は変わらない（和が一定）',
  },

  // s078: 損益算の基本用語（原価600円→定価780円→売価624円）
  lf_ext02_024: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '原価', value: 600 },
      { label: '定価(3割の利益)', value: 780 },
      { label: '売価(2割引き)', value: 624 },
    ],
    caption: '原価600円 →（×1.3）→ 定価780円 →（×0.8）→ 売価624円（利益24円）',
  },

  // s079: 定価の求め方（原価2,400円の15%増し）
  lf_ext02_025: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '原価', value: 2400 },
      { label: '定価(15%増し)', value: 2760 },
    ],
    caption: '定価＝原価×1.15＝2,400×1.15＝2,760円（360円は「利益額」であって定価ではない）',
  },

  // s080: 売価の求め方（定価1,600円→25%引き→さらに100円引き）
  lf_ext02_026: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '定価', value: 1600 },
      { label: '25%引き後', value: 1200 },
      { label: 'クーポン適用後', value: 1100 },
    ],
    caption: '1,600×0.75＝1,200円 → さらに100円引きで1,100円（順序を守って計算する）',
  },

  // s081: 利益・損失を求める文章題（原価2,500円→売価2,300円）
  lf_ext02_027: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '原価', value: 2500 },
      { label: '売価', value: 2300 },
    ],
    caption: '損失200円は原価の何%か → 200÷2,500＝0.08（8%）※分母は原価',
  },

  // s082: 2段階の割引（定価4,000円、15%引き→さらに10%引き）
  lf_ext02_028: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '定価', value: 4000 },
      { label: '誤答:30%引きなら', value: 2800 },
      { label: '正しい売価(23.5%引き)', value: 3060 },
    ],
    caption: '15%＋10%＝25%引きではない。0.85×0.9＝0.765（実質23.5%引き）で3,060円',
  },

  // s085: 損益算の総まとめ（定価5,000円、10%引き→さらに20%引き）
  lf_ext02_029: {
    kind: 'barChart',
    yLabel: '円',
    bars: [
      { label: '定価', value: 5000 },
      { label: '誤答:30%引きなら', value: 3500 },
      { label: '正しい売価', value: 3600 },
    ],
    caption: '10%引き→20%引きの合計は30%引きではなく実質28%引き（5,000×0.72＝3,600円）',
  },
};
