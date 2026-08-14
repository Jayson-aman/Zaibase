import type { Figure } from './figures';

// 中学受験 社会「地理：日本の地形・気候」拡張ユニット（shakai_s001〜shakai_s035）の教科書用図解。
// キーは lessons-shakai-ext01.ts の figureId と対応。
// japanMap の座標は data/japanPrefectures.ts と同じ viewBox 0 0 300 420。
// 気候の数値は気象庁の平年値（1991〜2020年）をもとにした概数。
export const lessonFigsShakaiExt01: Record<string, Figure> = {
  // s001：標準時子午線（東経135度・明石市）
  lf_shakaiext01_001: {
    kind: 'japanMap',
    markers: [
      { x: 115, y: 240, label: '明石(東経135度)' },
      { x: 186, y: 222, label: '東京(約140度)' },
    ],
    caption: '日本標準時の基準は東経135度の線で、兵庫県明石市を通る。東京はこれより東にあるため、太陽の南中は12時より約15分早い',
  },

  // s002：東西南北のはしの島（遠い島は方角の合う位置に寄せて表示）
  lf_shakaiext01_002: {
    kind: 'japanMap',
    markers: [
      { x: 300, y: 44, label: '択捉島(北)' },
      { x: 272, y: 300, label: '南鳥島(東)' },
      { x: 140, y: 400, label: '沖ノ鳥島(南)' },
      { x: 16, y: 392, label: '与那国島(西)' },
    ],
    caption: '南鳥島は東京の南東約1,900km、沖ノ鳥島は南約1,700kmにあり実際の地図には収まらないため、方角の合う位置に寄せてある',
  },

  // s003：国土面積と、領海＋排他的経済水域の面積
  lf_shakaiext01_003: {
    kind: 'barChart',
    yLabel: '面積(万km²)',
    yMax: 500,
    bars: [
      { label: '国土', value: 38, color: '#0EA5E9' },
      { label: '領海+EEZ', value: 447, color: '#0369A1' },
    ],
    caption: '国土は約38万km²（世界約60位）だが、領海と排他的経済水域を合わせると約447万km²で世界第6位になる',
  },

  // s004：7地方区分
  lf_shakaiext01_004: {
    kind: 'japanMap',
    markers: [
      { x: 247, y: 73, label: '北海道' },
      { x: 205, y: 150, label: '東北' },
      { x: 190, y: 212, label: '関東' },
      { x: 155, y: 208, label: '中部' },
      { x: 124, y: 243, label: '近畿' },
      { x: 88, y: 246, label: '中国四国' },
      { x: 48, y: 275, label: '九州' },
    ],
    caption: '7地方区分。中国と四国を分けて8地方とする分け方もある',
  },

  // s005：国土の利用（山地・丘陵と平地の割合）
  lf_shakaiext01_005: {
    kind: 'pieChart',
    slices: [
      { label: '山地・丘陵 約75%', value: 75, color: '#0369A1' },
      { label: '平地 約25%', value: 25, color: '#7DD3FC' },
    ],
    caption: '国土の約4分の3が山地・丘陵。人が住み耕せる平地は約4分の1しかなく、人口や工業が平野に集中する',
  },

  // s006：日本アルプス（飛騨・木曽・赤石）
  lf_shakaiext01_006: {
    kind: 'japanMap',
    markers: [
      { x: 151, y: 202, label: '飛騨(北ア)' },
      { x: 157, y: 219, label: '木曽(中央ア)' },
      { x: 169, y: 226, label: '赤石(南ア)' },
    ],
    caption: '西（北）から飛騨山脈＝北アルプス、木曽山脈＝中央アルプス、赤石山脈＝南アルプス。3,000m級の山が連なり「日本の屋根」と呼ばれる',
  },

  // s007：フォッサマグナ（糸魚川－静岡構造線）と中央構造線
  lf_shakaiext01_007: {
    kind: 'japanMap',
    markers: [
      { x: 163, y: 189, label: '糸魚川' },
      { x: 169, y: 238, label: '静岡' },
      { x: 132, y: 253, label: '中央構造線(紀伊)' },
      { x: 92, y: 258, label: '中央構造線(四国)' },
    ],
    caption: 'フォッサマグナの西のふちが糸魚川－静岡構造線（南北）。中央構造線は関東から紀伊半島・四国・九州へと東西に走る',
  },

  // s008：東日本の主な山地・山脈
  lf_shakaiext01_008: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 92, label: '日高山脈' },
      { x: 200, y: 160, label: '奥羽山脈' },
      { x: 217, y: 147, label: '北上高地' },
      { x: 176, y: 194, label: '越後山脈' },
    ],
    caption: '奥羽山脈は約500kmで日本一長く、東北を太平洋側と日本海側に分ける。夏のやませは東側（太平洋側）にぶつかり冷害を起こす',
  },

  // s009：日本の高い山ランキング
  lf_shakaiext01_009: {
    kind: 'barChart',
    yLabel: '標高(m)',
    yMax: 4000,
    bars: [
      { label: '富士山', value: 3776, color: '#0369A1' },
      { label: '北岳', value: 3193, color: '#0EA5E9' },
      { label: '奥穂高', value: 3190, color: '#38BDF8' },
      { label: '間ノ岳', value: 3190, color: '#38BDF8' },
      { label: '槍ヶ岳', value: 3180, color: '#7DD3FC' },
    ],
    caption: '1位 富士山3,776m。2位以下はすべて日本アルプスの山で、北岳3,193m、奥穂高岳と間ノ岳が3,190mで同率3位',
  },

  // s010：日本最大の関東平野
  lf_shakaiext01_010: {
    kind: 'japanMap',
    markers: [
      { x: 186, y: 211, label: '関東平野' },
      { x: 200, y: 223, label: '銚子(利根川河口)' },
    ],
    caption: '関東平野は約17,000km²で日本最大。低地は水田、関東ローム層におおわれた台地は畑・住宅地に利用される',
  },

  // s011：東日本の主な平野
  lf_shakaiext01_011: {
    kind: 'japanMap',
    markers: [
      { x: 229, y: 84, label: '石狩平野' },
      { x: 250, y: 96, label: '十勝平野' },
      { x: 186, y: 167, label: '庄内平野' },
      { x: 211, y: 173, label: '仙台平野' },
      { x: 171, y: 189, label: '越後平野' },
    ],
    caption: '石狩平野は泥炭地を客土で改良した稲作地帯、十勝平野は火山灰土を生かした大規模畑作（輪作）と酪農の地域',
  },

  // s012：西日本の主な平野
  lf_shakaiext01_012: {
    kind: 'japanMap',
    markers: [
      { x: 149, y: 230, label: '濃尾平野' },
      { x: 121, y: 244, label: '大阪平野' },
      { x: 101, y: 248, label: '讃岐平野' },
      { x: 44, y: 269, label: '筑紫平野' },
      { x: 65, y: 290, label: '宮崎平野' },
    ],
    caption: '濃尾平野は水が多すぎて輪中をつくり、讃岐平野は水が足りずため池をつくった。原因が正反対である点が問われる',
  },

  // s013：主な盆地と果樹
  lf_shakaiext01_013: {
    kind: 'japanMap',
    markers: [
      { x: 192, y: 170, label: '山形盆地(さくらんぼ)' },
      { x: 162, y: 204, label: '長野盆地(りんご)' },
      { x: 169, y: 226, label: '甲府盆地(ぶどう・もも)' },
    ],
    caption: '盆地は海から遠く年較差・日較差が大きい。昼夜の気温差が果物の甘みを増すため、果樹栽培がさかんになる',
  },

  // s014：主な台地
  lf_shakaiext01_014: {
    kind: 'japanMap',
    markers: [
      { x: 258, y: 82, label: '根釧台地(酪農)' },
      { x: 180, y: 214, label: '武蔵野台地' },
      { x: 167, y: 238, label: '牧ノ原台地(茶)' },
      { x: 47, y: 302, label: 'シラス台地' },
    ],
    caption: '台地は川の水面より高く水を得にくい。そのため稲作ではなく畑作・畜産・茶・果樹に利用される',
  },

  // s015：日本の川の長さランキング
  lf_shakaiext01_015: {
    kind: 'numberLine',
    min: 200,
    max: 400,
    step: 50,
    points: [
      { x: 268, label: '石狩川268' },
      { x: 322, label: '利根川322' },
      { x: 367, label: '信濃川367' },
    ],
    caption: '長さ1位は信濃川367km、2位 利根川322km、3位 石狩川268km（単位km）。世界のライン川約1,233kmと比べても日本の川は短い',
  },

  // s016：流域面積ランキング
  lf_shakaiext01_016a: {
    kind: 'barChart',
    yLabel: '流域面積(km²)',
    yMax: 18000,
    bars: [
      { label: '利根川', value: 16840, color: '#0369A1' },
      { label: '石狩川', value: 14330, color: '#0EA5E9' },
      { label: '信濃川', value: 11900, color: '#38BDF8' },
      { label: '北上川', value: 10150, color: '#7DD3FC' },
      { label: '木曽川', value: 9100, color: '#BAE6FD' },
    ],
    caption: '流域面積1位は利根川16,840km²。長さ1位の信濃川は流域面積では3位で、順位が入れかわる点が最頻出',
  },

  // s016：日本の主な湖
  lf_shakaiext01_016b: {
    kind: 'japanMap',
    markers: [
      { x: 255, y: 67, label: 'サロマ湖(面積3位)' },
      { x: 198, y: 147, label: '田沢湖(深さ1位)' },
      { x: 199, y: 208, label: '霞ヶ浦(面積2位)' },
      { x: 130, y: 233, label: '琵琶湖(面積1位)' },
    ],
    caption: '面積1位は琵琶湖 約670km²、深さ1位は田沢湖 423m。琵琶湖の最大水深は約104mで、面積と深さで1位がちがう',
  },

  // s017：東日本の主な川
  lf_shakaiext01_017: {
    kind: 'japanMap',
    markers: [
      { x: 229, y: 81, label: '石狩川' },
      { x: 189, y: 166, label: '最上川' },
      { x: 214, y: 155, label: '北上川' },
      { x: 171, y: 190, label: '信濃川' },
      { x: 190, y: 211, label: '利根川' },
    ],
    caption: '最上川は山形県だけを流れ庄内平野から日本海へ、北上川は岩手から宮城へ南下し仙台平野から太平洋へ注ぐ',
  },

  // s018：西日本の主な川
  lf_shakaiext01_018: {
    kind: 'japanMap',
    markers: [
      { x: 148, y: 231, label: '木曽三川' },
      { x: 125, y: 239, label: '淀川' },
      { x: 104, y: 256, label: '吉野川' },
      { x: 84, y: 269, label: '四万十川' },
      { x: 46, y: 269, label: '筑後川' },
    ],
    caption: '吉野川（四国三郎）の水は香川用水で讃岐平野へ送られる。四万十川はダムが少なく「日本最後の清流」と呼ばれる',
  },

  // s019：扇状地と三角州の代表例
  lf_shakaiext01_019: {
    kind: 'japanMap',
    markers: [
      { x: 169, y: 226, label: '甲府盆地(扇状地)' },
      { x: 82, y: 245, label: '広島(三角州)' },
    ],
    caption: '扇状地は谷口にでき砂利が積もるので果樹園に、三角州は河口にでき細かい泥が積もるので水田・市街地になる',
  },

  // s020：リアス海岸
  lf_shakaiext01_020: {
    kind: 'japanMap',
    markers: [
      { x: 220, y: 158, label: '三陸海岸' },
      { x: 128, y: 223, label: '若狭湾' },
      { x: 144, y: 252, label: '志摩半島' },
      { x: 74, y: 264, label: '宇和海' },
    ],
    caption: '谷に海水が入りこんでできた出入りの複雑な海岸。湾が深く波がおだやかで養殖に向くが、津波は湾奥ほど高くなる',
  },

  // s021：砂浜海岸・砂丘・砂州・砂嘴
  lf_shakaiext01_021: {
    kind: 'japanMap',
    markers: [
      { x: 266, y: 73, label: '野付崎(砂嘴)' },
      { x: 99, y: 224, label: '鳥取砂丘' },
      { x: 119, y: 227, label: '天橋立(砂州)' },
      { x: 200, y: 226, label: '九十九里浜(砂浜)' },
    ],
    caption: '砂が積もってできる地形。両側が海に張り出すのが砂州、片方だけ陸につながるのが砂嘴、風で内陸へ吹き寄せられたのが砂丘',
  },

  // s022：日本近海の海流と潮目
  lf_shakaiext01_022: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 116, label: '親潮(寒流)' },
      { x: 229, y: 168, label: '潮目(三陸沖)' },
      { x: 104, y: 213, label: '対馬海流(暖流)' },
      { x: 178, y: 256, label: '黒潮(暖流)' },
    ],
    caption: '暖流は黒潮（太平洋）と対馬海流（日本海）、寒流は親潮（太平洋）とリマン海流（日本海）。三陸沖の潮目は世界有数の好漁場',
  },

  // s023：干潟・干拓地
  lf_shakaiext01_023: {
    kind: 'japanMap',
    markers: [
      { x: 192, y: 139, label: '八郎潟(干拓→大潟村)' },
      { x: 101, y: 244, label: '児島湾(干拓)' },
      { x: 40, y: 277, label: '有明海(日本最大の干潟)' },
    ],
    caption: '干拓は堤防で仕切って水を抜き農地にする方法。有明海は干満差が最大約6mと日本一大きく、日本最大の干潟が広がる',
  },

  // s024：季節風のはたらき（金沢と静岡の月降水量の比較）
  lf_shakaiext01_024: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    xRange: [1, 12],
    yRange: [0, 350],
    series: [
      {
        label: '金沢',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 1, y: 256 }, { x: 2, y: 163 }, { x: 3, y: 157 }, { x: 4, y: 144 },
          { x: 5, y: 138 }, { x: 6, y: 170 }, { x: 7, y: 233 }, { x: 8, y: 179 },
          { x: 9, y: 232 }, { x: 10, y: 177 }, { x: 11, y: 251 }, { x: 12, y: 301 },
        ],
      },
      {
        label: '静岡',
        color: '#F97316',
        markers: true,
        points: [
          { x: 1, y: 80 }, { x: 2, y: 102 }, { x: 3, y: 197 }, { x: 4, y: 203 },
          { x: 5, y: 215 }, { x: 6, y: 280 }, { x: 7, y: 276 }, { x: 8, y: 235 },
          { x: 9, y: 321 }, { x: 10, y: 237 }, { x: 11, y: 122 }, { x: 12, y: 64 },
        ],
      },
    ],
    caption: '年降水量はほぼ同じ（金沢約2,400mm・静岡約2,300mm）だが、金沢は12月、静岡は9月に山が来る。冬の北西季節風と夏の南東季節風のちがい',
  },

  // s025：札幌の月平均気温
  lf_shakaiext01_025a: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '気温(℃)',
    xRange: [1, 12],
    yRange: [-5, 30],
    series: [
      {
        label: '札幌',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 1, y: -3.2 }, { x: 2, y: -2.7 }, { x: 3, y: 1.1 }, { x: 4, y: 7.3 },
          { x: 5, y: 13.0 }, { x: 6, y: 17.0 }, { x: 7, y: 21.1 }, { x: 8, y: 22.3 },
          { x: 9, y: 18.6 }, { x: 10, y: 12.1 }, { x: 11, y: 5.2 }, { x: 12, y: -0.9 },
        ],
      },
    ],
    caption: '1月-3.2℃、8月22.3℃で年較差は約25℃。1月が0℃を下回るのが北海道の気候を見分ける決め手',
  },

  // s025：札幌の月降水量
  lf_shakaiext01_025b: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    yMax: 350,
    bars: [
      { label: '1', value: 108, color: '#0EA5E9' },
      { label: '2', value: 92, color: '#0EA5E9' },
      { label: '3', value: 78, color: '#0EA5E9' },
      { label: '4', value: 55, color: '#0EA5E9' },
      { label: '5', value: 56, color: '#0EA5E9' },
      { label: '6', value: 60, color: '#0EA5E9' },
      { label: '7', value: 91, color: '#0EA5E9' },
      { label: '8', value: 127, color: '#0EA5E9' },
      { label: '9', value: 142, color: '#0EA5E9' },
      { label: '10', value: 110, color: '#0EA5E9' },
      { label: '11', value: 114, color: '#0EA5E9' },
      { label: '12', value: 115, color: '#0EA5E9' },
    ],
    caption: '札幌の年降水量は約1,150mmで全国平均（約1,700mm）より少ない。雪は多いが水にもどすとかさが小さいため',
  },

  // s026：金沢の月降水量（冬に山）
  lf_shakaiext01_026a: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    yMax: 350,
    bars: [
      { label: '1', value: 256, color: '#0369A1' },
      { label: '2', value: 163, color: '#0369A1' },
      { label: '3', value: 157, color: '#0369A1' },
      { label: '4', value: 144, color: '#0369A1' },
      { label: '5', value: 138, color: '#0369A1' },
      { label: '6', value: 170, color: '#0369A1' },
      { label: '7', value: 233, color: '#0369A1' },
      { label: '8', value: 179, color: '#0369A1' },
      { label: '9', value: 232, color: '#0369A1' },
      { label: '10', value: 177, color: '#0369A1' },
      { label: '11', value: 251, color: '#0369A1' },
      { label: '12', value: 301, color: '#0369A1' },
    ],
    caption: '金沢は12月(301mm)が最多で1月(256mm)がこれに次ぐ。冬に降水量の山ができるのは日本海側だけ。年降水量は約2,400mm',
  },

  // s027：静岡の月降水量（夏〜秋に山、冬に谷）
  lf_shakaiext01_027a: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    yMax: 350,
    bars: [
      { label: '1', value: 80, color: '#F97316' },
      { label: '2', value: 102, color: '#F97316' },
      { label: '3', value: 197, color: '#F97316' },
      { label: '4', value: 203, color: '#F97316' },
      { label: '5', value: 215, color: '#F97316' },
      { label: '6', value: 280, color: '#F97316' },
      { label: '7', value: 276, color: '#F97316' },
      { label: '8', value: 235, color: '#F97316' },
      { label: '9', value: 321, color: '#F97316' },
      { label: '10', value: 237, color: '#F97316' },
      { label: '11', value: 122, color: '#F97316' },
      { label: '12', value: 64, color: '#F97316' },
    ],
    caption: '静岡は9月(321mm)が最多、12月(64mm)が最少。金沢の12月301mmと比べると約5分の1で、太平洋側は冬に乾くことがわかる',
  },

  // s028：長野の月降水量（少雨）
  lf_shakaiext01_028a: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    yMax: 350,
    bars: [
      { label: '1', value: 55, color: '#7C3AED' },
      { label: '2', value: 49, color: '#7C3AED' },
      { label: '3', value: 65, color: '#7C3AED' },
      { label: '4', value: 58, color: '#7C3AED' },
      { label: '5', value: 70, color: '#7C3AED' },
      { label: '6', value: 112, color: '#7C3AED' },
      { label: '7', value: 138, color: '#7C3AED' },
      { label: '8', value: 112, color: '#7C3AED' },
      { label: '9', value: 125, color: '#7C3AED' },
      { label: '10', value: 82, color: '#7C3AED' },
      { label: '11', value: 45, color: '#7C3AED' },
      { label: '12', value: 54, color: '#7C3AED' },
    ],
    caption: '長野の年降水量は約965mmで全国最少クラス。1月の平均気温は-0.4℃で、同じ少雨でも温暖な瀬戸内とは冬の気温がちがう',
  },

  // s029：高松の月降水量（少雨・温暖）
  lf_shakaiext01_029a: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    yMax: 350,
    bars: [
      { label: '1', value: 39, color: '#16A34A' },
      { label: '2', value: 46, color: '#16A34A' },
      { label: '3', value: 81, color: '#16A34A' },
      { label: '4', value: 75, color: '#16A34A' },
      { label: '5', value: 101, color: '#16A34A' },
      { label: '6', value: 153, color: '#16A34A' },
      { label: '7', value: 160, color: '#16A34A' },
      { label: '8', value: 106, color: '#16A34A' },
      { label: '9', value: 167, color: '#16A34A' },
      { label: '10', value: 120, color: '#16A34A' },
      { label: '11', value: 55, color: '#16A34A' },
      { label: '12', value: 47, color: '#16A34A' },
    ],
    caption: '高松の年降水量は約1,150mm。中国山地が冬の北西季節風を、四国山地が夏の南東季節風をさえぎるため1年を通して少雨',
  },

  // s030：那覇の月降水量（梅雨と台風で2つの山）
  lf_shakaiext01_030a: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    yMax: 350,
    bars: [
      { label: '1', value: 102, color: '#E11D48' },
      { label: '2', value: 115, color: '#E11D48' },
      { label: '3', value: 143, color: '#E11D48' },
      { label: '4', value: 161, color: '#E11D48' },
      { label: '5', value: 245, color: '#E11D48' },
      { label: '6', value: 284, color: '#E11D48' },
      { label: '7', value: 188, color: '#E11D48' },
      { label: '8', value: 240, color: '#E11D48' },
      { label: '9', value: 275, color: '#E11D48' },
      { label: '10', value: 179, color: '#E11D48' },
      { label: '11', value: 119, color: '#E11D48' },
      { label: '12', value: 110, color: '#E11D48' },
    ],
    caption: '那覇の年降水量は約2,160mmと多い。5〜6月は本州より約1か月早い梅雨、8〜9月は台風によって山ができる',
  },

  // s031：雨温図の読み方（東京の月降水量）
  lf_shakaiext01_031: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    yMax: 350,
    bars: [
      { label: '1', value: 60, color: '#0EA5E9' },
      { label: '2', value: 57, color: '#0EA5E9' },
      { label: '3', value: 116, color: '#0EA5E9' },
      { label: '4', value: 134, color: '#0EA5E9' },
      { label: '5', value: 140, color: '#0EA5E9' },
      { label: '6', value: 168, color: '#0EA5E9' },
      { label: '7', value: 156, color: '#0EA5E9' },
      { label: '8', value: 155, color: '#0EA5E9' },
      { label: '9', value: 225, color: '#0EA5E9' },
      { label: '10', value: 235, color: '#0EA5E9' },
      { label: '11', value: 96, color: '#0EA5E9' },
      { label: '12', value: 58, color: '#0EA5E9' },
    ],
    caption: '東京の月降水量。秋（9月225mm・10月235mm）に山があり1月は約60mmと少ない → 太平洋側と判断できる',
  },

  // s032：札幌・静岡・那覇の月平均気温
  lf_shakaiext01_032: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '気温(℃)',
    xRange: [1, 12],
    yRange: [-5, 32],
    series: [
      {
        label: '那覇',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 1, y: 17.3 }, { x: 2, y: 17.5 }, { x: 3, y: 19.1 }, { x: 4, y: 21.5 },
          { x: 5, y: 24.2 }, { x: 6, y: 27.2 }, { x: 7, y: 29.1 }, { x: 8, y: 29.0 },
          { x: 9, y: 27.9 }, { x: 10, y: 25.5 }, { x: 11, y: 22.5 }, { x: 12, y: 19.0 },
        ],
      },
      {
        label: '静岡',
        color: '#F97316',
        markers: true,
        points: [
          { x: 1, y: 6.9 }, { x: 2, y: 7.7 }, { x: 3, y: 10.9 }, { x: 4, y: 15.4 },
          { x: 5, y: 19.6 }, { x: 6, y: 22.7 }, { x: 7, y: 26.5 }, { x: 8, y: 27.7 },
          { x: 9, y: 24.7 }, { x: 10, y: 19.6 }, { x: 11, y: 14.5 }, { x: 12, y: 9.3 },
        ],
      },
      {
        label: '札幌',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 1, y: -3.2 }, { x: 2, y: -2.7 }, { x: 3, y: 1.1 }, { x: 4, y: 7.3 },
          { x: 5, y: 13.0 }, { x: 6, y: 17.0 }, { x: 7, y: 21.1 }, { x: 8, y: 22.3 },
          { x: 9, y: 18.6 }, { x: 10, y: 12.1 }, { x: 11, y: 5.2 }, { x: 12, y: -0.9 },
        ],
      },
    ],
    caption: '夏の気温差は約7℃だが、1月は札幌-3.2℃・静岡6.9℃・那覇17.3℃と20℃以上ひらく。判別は冬の気温を見る',
  },

  // s033：金沢・高松・長野の月降水量
  lf_shakaiext01_033: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    xRange: [1, 12],
    yRange: [0, 350],
    series: [
      {
        label: '金沢',
        color: '#0369A1',
        markers: true,
        points: [
          { x: 1, y: 256 }, { x: 2, y: 163 }, { x: 3, y: 157 }, { x: 4, y: 144 },
          { x: 5, y: 138 }, { x: 6, y: 170 }, { x: 7, y: 233 }, { x: 8, y: 179 },
          { x: 9, y: 232 }, { x: 10, y: 177 }, { x: 11, y: 251 }, { x: 12, y: 301 },
        ],
      },
      {
        label: '高松',
        color: '#16A34A',
        markers: true,
        points: [
          { x: 1, y: 39 }, { x: 2, y: 46 }, { x: 3, y: 81 }, { x: 4, y: 75 },
          { x: 5, y: 101 }, { x: 6, y: 153 }, { x: 7, y: 160 }, { x: 8, y: 106 },
          { x: 9, y: 167 }, { x: 10, y: 120 }, { x: 11, y: 55 }, { x: 12, y: 47 },
        ],
      },
      {
        label: '長野',
        color: '#7C3AED',
        markers: true,
        points: [
          { x: 1, y: 55 }, { x: 2, y: 49 }, { x: 3, y: 65 }, { x: 4, y: 58 },
          { x: 5, y: 70 }, { x: 6, y: 112 }, { x: 7, y: 138 }, { x: 8, y: 112 },
          { x: 9, y: 125 }, { x: 10, y: 82 }, { x: 11, y: 45 }, { x: 12, y: 54 },
        ],
      },
    ],
    caption: '金沢だけが冬に山（12月301mm）。高松と長野は降り方が似ているので、1月の気温（高松5.9℃・長野-0.4℃）で見分ける',
  },

  // s034：地形の総合（地図問題でねらわれる地点）
  lf_shakaiext01_034: {
    kind: 'japanMap',
    markers: [
      { x: 220, y: 158, label: '三陸(リアス)' },
      { x: 171, y: 190, label: '信濃川(長さ1位)' },
      { x: 190, y: 211, label: '利根川(流域1位)' },
      { x: 149, y: 231, label: '濃尾(輪中)' },
      { x: 101, y: 248, label: '讃岐(ため池)' },
    ],
    caption: '長さ1位は信濃川、流域面積1位は利根川。輪中は水が多すぎる濃尾平野、ため池は水が足りない讃岐平野の対策',
  },

  // s035：6都市の年降水量の比較
  lf_shakaiext01_035: {
    kind: 'barChart',
    yLabel: '年降水量(mm)',
    yMax: 2600,
    bars: [
      { label: '金沢', value: 2400, color: '#0369A1' },
      { label: '静岡', value: 2300, color: '#F97316' },
      { label: '那覇', value: 2160, color: '#E11D48' },
      { label: '高松', value: 1150, color: '#16A34A' },
      { label: '札幌', value: 1150, color: '#0EA5E9' },
      { label: '長野', value: 965, color: '#7C3AED' },
    ],
    caption: '金沢と静岡は合計がほぼ同じでも降る季節が逆（12月と9月）。札幌と高松は合計が同じでも年平均気温が7.5℃ちがう',
  },
};
