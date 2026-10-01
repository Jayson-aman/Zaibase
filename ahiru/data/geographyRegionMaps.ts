// 地方ごとの「拡大地図」に載せる、都市・平野・海・海流の位置（緯度経度で記述）。
// 山脈・川の線は data/geographyTerrain.ts を、都道府県の形は data/japanPrefectures.ts を使う。
// 位置は tools の project() で地図座標に直す。数値は小数第2位までの概略で、地図上の目印として十分な精度。

export type MapPoint = { name: string; lat: number; lon: number };
export type SeaLabel = MapPoint & { kind: 'sea' | 'warm' | 'cold' };
export type RegionMapData = {
  /** 県庁所在地（●で表示。都道府県名と一緒に出す） */
  capitals: MapPoint[];
  /** そのほかの主な都市（・で表示） */
  cities: MapPoint[];
  /** 平野・盆地・台地・半島などの名前（文字だけ） */
  plains: MapPoint[];
  /** 海・湾・海流（海流は暖流＝赤、寒流＝青） */
  seas: SeaLabel[];
};

export const regionMaps: Record<string, RegionMapData> = {
  hokkaido: {
    capitals: [{ name: '札幌', lat: 43.06, lon: 141.35 }],
    cities: [
      { name: '函館', lat: 41.77, lon: 140.73 },
      { name: '旭川', lat: 43.77, lon: 142.36 },
      { name: '釧路', lat: 42.98, lon: 144.38 },
      { name: '帯広', lat: 42.92, lon: 143.2 },
      { name: '稚内', lat: 45.41, lon: 141.67 },
      { name: '網走', lat: 44.02, lon: 144.27 },
      { name: '室蘭', lat: 42.32, lon: 140.97 },
    ],
    plains: [
      { name: '石狩平野', lat: 43.2, lon: 141.75 },
      { name: '十勝平野', lat: 42.75, lon: 143.2 },
      { name: '根釧台地', lat: 43.3, lon: 144.9 },
      { name: '上川盆地', lat: 43.6, lon: 142.5 },
    ],
    seas: [
      { name: 'オホーツク海', lat: 45.0, lon: 144.6, kind: 'sea' },
      { name: '日本海', lat: 43.9, lon: 139.9, kind: 'sea' },
      { name: '太平洋', lat: 41.7, lon: 144.2, kind: 'sea' },
      { name: '親潮', lat: 42.2, lon: 145.7, kind: 'cold' },
      { name: '津軽海峡', lat: 41.45, lon: 140.9, kind: 'sea' },
    ],
  },
  tohoku: {
    capitals: [
      { name: '青森', lat: 40.82, lon: 140.74 },
      { name: '盛岡', lat: 39.7, lon: 141.15 },
      { name: '仙台', lat: 38.27, lon: 140.87 },
      { name: '秋田', lat: 39.72, lon: 140.1 },
      { name: '山形', lat: 38.24, lon: 140.36 },
      { name: '福島', lat: 37.75, lon: 140.47 },
    ],
    cities: [
      { name: '八戸', lat: 40.51, lon: 141.49 },
      { name: '弘前', lat: 40.6, lon: 140.46 },
      { name: '石巻', lat: 38.43, lon: 141.3 },
      { name: '酒田', lat: 38.91, lon: 139.84 },
      { name: '会津若松', lat: 37.49, lon: 139.93 },
      { name: 'いわき', lat: 37.05, lon: 140.89 },
    ],
    plains: [
      { name: '津軽平野', lat: 40.75, lon: 140.35 },
      { name: '秋田平野', lat: 39.85, lon: 140.0 },
      { name: '庄内平野', lat: 38.75, lon: 139.85 },
      { name: '仙台平野', lat: 38.05, lon: 140.95 },
      { name: '北上盆地', lat: 39.3, lon: 141.2 },
      { name: '山形盆地', lat: 38.5, lon: 140.3 },
      { name: '会津盆地', lat: 37.55, lon: 139.85 },
    ],
    seas: [
      { name: '日本海', lat: 39.4, lon: 138.9, kind: 'sea' },
      { name: '太平洋', lat: 39.0, lon: 142.7, kind: 'sea' },
      { name: '親潮（寒流）', lat: 40.6, lon: 142.6, kind: 'cold' },
      { name: '対馬海流（暖流）', lat: 38.7, lon: 138.9, kind: 'warm' },
      { name: '三陸海岸', lat: 39.4, lon: 142.2, kind: 'sea' },
    ],
  },
  kanto: {
    capitals: [
      { name: '水戸', lat: 36.34, lon: 140.45 },
      { name: '宇都宮', lat: 36.57, lon: 139.88 },
      { name: '前橋', lat: 36.39, lon: 139.06 },
      { name: 'さいたま', lat: 35.86, lon: 139.65 },
      { name: '千葉', lat: 35.61, lon: 140.12 },
      { name: '東京', lat: 35.69, lon: 139.69 },
      { name: '横浜', lat: 35.45, lon: 139.64 },
    ],
    cities: [
      { name: '成田', lat: 35.78, lon: 140.32 },
      { name: '銚子', lat: 35.73, lon: 140.83 },
      { name: '小田原', lat: 35.26, lon: 139.15 },
      { name: '日光', lat: 36.75, lon: 139.6 },
    ],
    plains: [
      { name: '関東平野', lat: 36.1, lon: 139.6 },
      { name: '房総半島', lat: 35.3, lon: 140.2 },
      { name: '三浦半島', lat: 35.2, lon: 139.65 },
      { name: '関東ローム層の台地', lat: 35.9, lon: 139.35 },
    ],
    seas: [
      { name: '太平洋', lat: 35.9, lon: 141.4, kind: 'sea' },
      { name: '東京湾', lat: 35.55, lon: 139.95, kind: 'sea' },
      { name: '相模湾', lat: 35.1, lon: 139.4, kind: 'sea' },
      { name: '黒潮（暖流）', lat: 34.6, lon: 140.8, kind: 'warm' },
      { name: '親潮（寒流）', lat: 36.9, lon: 141.5, kind: 'cold' },
    ],
  },
  chubu: {
    capitals: [
      { name: '新潟', lat: 37.9, lon: 139.02 },
      { name: '富山', lat: 36.7, lon: 137.21 },
      { name: '金沢', lat: 36.56, lon: 136.66 },
      { name: '福井', lat: 36.07, lon: 136.22 },
      { name: '甲府', lat: 35.66, lon: 138.57 },
      { name: '長野', lat: 36.65, lon: 138.18 },
      { name: '岐阜', lat: 35.42, lon: 136.76 },
      { name: '静岡', lat: 34.98, lon: 138.38 },
      { name: '名古屋', lat: 35.18, lon: 136.91 },
    ],
    cities: [
      { name: '松本', lat: 36.24, lon: 137.97 },
      { name: '浜松', lat: 34.71, lon: 137.73 },
      { name: '豊田', lat: 35.08, lon: 137.16 },
    ],
    plains: [
      { name: '越後平野', lat: 37.6, lon: 138.9 },
      { name: '富山平野', lat: 36.6, lon: 137.2 },
      { name: '濃尾平野', lat: 35.25, lon: 136.7 },
      { name: '甲府盆地', lat: 35.62, lon: 138.6 },
      { name: '松本盆地', lat: 36.12, lon: 137.9 },
      { name: '能登半島', lat: 37.25, lon: 136.95 },
      { name: '伊豆半島', lat: 34.9, lon: 138.95 },
    ],
    seas: [
      { name: '日本海', lat: 38.0, lon: 136.8, kind: 'sea' },
      { name: '太平洋', lat: 34.2, lon: 138.2, kind: 'sea' },
      { name: '駿河湾', lat: 34.75, lon: 138.5, kind: 'sea' },
      { name: '伊勢湾', lat: 34.85, lon: 136.8, kind: 'sea' },
      { name: '対馬海流（暖流）', lat: 37.5, lon: 137.8, kind: 'warm' },
      { name: '黒潮（暖流）', lat: 33.9, lon: 137.6, kind: 'warm' },
    ],
  },
  kinki: {
    capitals: [
      { name: '大津', lat: 35.0, lon: 135.87 },
      { name: '京都', lat: 35.01, lon: 135.77 },
      { name: '大阪', lat: 34.69, lon: 135.5 },
      { name: '神戸', lat: 34.69, lon: 135.2 },
      { name: '奈良', lat: 34.69, lon: 135.83 },
      { name: '和歌山', lat: 34.23, lon: 135.17 },
      { name: '津', lat: 34.73, lon: 136.51 },
    ],
    cities: [
      { name: '姫路', lat: 34.82, lon: 134.69 },
      { name: '堺', lat: 34.57, lon: 135.48 },
      { name: '四日市', lat: 34.97, lon: 136.62 },
      { name: '伊勢', lat: 34.49, lon: 136.71 },
    ],
    plains: [
      { name: '大阪平野', lat: 34.6, lon: 135.55 },
      { name: '京都盆地', lat: 35.1, lon: 135.7 },
      { name: '奈良盆地', lat: 34.55, lon: 135.82 },
      { name: '琵琶湖', lat: 35.3, lon: 136.1 },
      { name: '紀伊半島', lat: 34.0, lon: 135.8 },
      { name: '淡路島', lat: 34.4, lon: 134.85 },
    ],
    seas: [
      { name: '日本海', lat: 35.95, lon: 134.9, kind: 'sea' },
      { name: '若狭湾', lat: 35.6, lon: 135.6, kind: 'sea' },
      { name: '大阪湾', lat: 34.5, lon: 135.2, kind: 'sea' },
      { name: '瀬戸内海', lat: 34.5, lon: 134.4, kind: 'sea' },
      { name: '太平洋', lat: 33.3, lon: 136.3, kind: 'sea' },
      { name: '黒潮（暖流）', lat: 33.2, lon: 135.3, kind: 'warm' },
    ],
  },
  chugoku: {
    capitals: [
      { name: '鳥取', lat: 35.5, lon: 134.24 },
      { name: '松江', lat: 35.47, lon: 133.05 },
      { name: '岡山', lat: 34.66, lon: 133.92 },
      { name: '広島', lat: 34.4, lon: 132.46 },
      { name: '山口', lat: 34.19, lon: 131.47 },
    ],
    cities: [
      { name: '倉敷', lat: 34.59, lon: 133.77 },
      { name: '福山', lat: 34.49, lon: 133.36 },
      { name: '下関', lat: 33.96, lon: 130.94 },
      { name: '出雲', lat: 35.37, lon: 132.75 },
    ],
    plains: [
      { name: '岡山平野', lat: 34.85, lon: 133.8 },
      { name: '広島平野', lat: 34.5, lon: 132.35 },
      { name: '鳥取砂丘', lat: 35.54, lon: 134.23 },
      { name: '出雲平野', lat: 35.3, lon: 132.85 },
      { name: '秋吉台', lat: 34.25, lon: 131.3 },
    ],
    seas: [
      { name: '日本海', lat: 36.25, lon: 132.6, kind: 'sea' },
      { name: '瀬戸内海', lat: 34.2, lon: 133.2, kind: 'sea' },
      { name: '対馬海流（暖流）', lat: 35.95, lon: 133.6, kind: 'warm' },
      { name: '関門海峡', lat: 33.95, lon: 130.95, kind: 'sea' },
    ],
  },
  shikoku: {
    capitals: [
      { name: '徳島', lat: 34.07, lon: 134.56 },
      { name: '高松', lat: 34.34, lon: 134.04 },
      { name: '松山', lat: 33.84, lon: 132.77 },
      { name: '高知', lat: 33.56, lon: 133.53 },
    ],
    cities: [
      { name: '今治', lat: 34.07, lon: 133.0 },
      { name: '新居浜', lat: 33.96, lon: 133.28 },
      { name: '宇和島', lat: 33.22, lon: 132.56 },
    ],
    plains: [
      { name: '讃岐平野', lat: 34.2, lon: 133.95 },
      { name: '徳島平野', lat: 34.0, lon: 134.45 },
      { name: '高知平野', lat: 33.5, lon: 133.6 },
      { name: '松山平野', lat: 33.8, lon: 132.75 },
    ],
    seas: [
      { name: '瀬戸内海', lat: 34.15, lon: 133.2, kind: 'sea' },
      { name: '太平洋', lat: 32.9, lon: 133.9, kind: 'sea' },
      { name: '黒潮（暖流）', lat: 32.7, lon: 134.3, kind: 'warm' },
      { name: '紀伊水道', lat: 33.95, lon: 134.9, kind: 'sea' },
    ],
  },
  kyushu: {
    capitals: [
      { name: '福岡', lat: 33.59, lon: 130.4 },
      { name: '佐賀', lat: 33.25, lon: 130.3 },
      { name: '長崎', lat: 32.74, lon: 129.87 },
      { name: '熊本', lat: 32.79, lon: 130.74 },
      { name: '大分', lat: 33.24, lon: 131.61 },
      { name: '宮崎', lat: 31.91, lon: 131.42 },
      { name: '鹿児島', lat: 31.56, lon: 130.56 },
    ],
    cities: [
      { name: '北九州', lat: 33.88, lon: 130.88 },
      { name: '久留米', lat: 33.32, lon: 130.51 },
      { name: '佐世保', lat: 33.18, lon: 129.72 },
    ],
    plains: [
      { name: '筑紫平野', lat: 33.2, lon: 130.55 },
      { name: '熊本平野', lat: 32.65, lon: 130.65 },
      { name: '宮崎平野', lat: 32.0, lon: 131.4 },
      { name: 'シラス台地', lat: 31.85, lon: 130.7 },
      { name: '阿蘇山', lat: 32.88, lon: 131.1 },
      { name: '桜島', lat: 31.58, lon: 130.66 },
    ],
    seas: [
      { name: '東シナ海', lat: 32.3, lon: 128.9, kind: 'sea' },
      { name: '玄界灘', lat: 33.95, lon: 129.7, kind: 'sea' },
      { name: '有明海', lat: 33.0, lon: 130.35, kind: 'sea' },
      { name: '日向灘', lat: 32.2, lon: 132.1, kind: 'sea' },
      { name: '黒潮（暖流）', lat: 31.0, lon: 131.9, kind: 'warm' },
    ],
  },
};
