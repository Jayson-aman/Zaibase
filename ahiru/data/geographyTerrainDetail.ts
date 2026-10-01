/**
 * 拡大地図用の山脈・川・おもな山。緯度経度（[緯度, 経度]）の折れ線で持ち、描くときに投影する。
 * 川は水源→河口の順。山脈は尾根の道すじ。地図の位置合わせには data/geoProject.ts を使う。
 */
export type LL = [number, number];

export type RangeLine = { id: string; name: string; regions: string[]; pts: LL[]; label: LL };
export type RiverLine = { id: string; name: string; regions: string[]; pts: LL[]; label: LL };
export type Peak = { name: string; regions: string[]; lat: number; lon: number; h: number };

export const rangeLines: RangeLine[] = [
  { id: 'hidaka', name: '日高山脈', regions: ['hokkaido'], pts: [[41.95, 143.2], [42.3, 143.0], [42.72, 142.68], [43.2, 142.8], [43.5, 142.9]], label: [42.4, 142.75] },
  { id: 'kitami', name: '北見山地', regions: ['hokkaido'], pts: [[43.9, 143.0], [44.4, 142.6], [45.0, 142.1]], label: [44.5, 142.45] },
  { id: 'teshio', name: '天塩山地', regions: ['hokkaido'], pts: [[44.0, 142.0], [44.6, 141.9], [45.1, 141.9]], label: [44.7, 141.7] },
  { id: 'ou', name: '奥羽山脈', regions: ['tohoku'], pts: [[40.66, 140.88], [39.95, 140.85], [39.85, 141.0], [38.96, 140.79], [38.14, 140.45], [37.7, 140.25], [37.12, 139.96]], label: [39.4, 140.6] },
  { id: 'dewa', name: '出羽山地', regions: ['tohoku'], pts: [[40.5, 140.1], [39.1, 140.05], [38.3, 139.9], [37.85, 139.7]], label: [38.8, 139.75] },
  { id: 'kitakami', name: '北上高地', regions: ['tohoku'], pts: [[40.3, 141.6], [39.5, 141.5], [39.0, 141.4], [38.3, 141.3]], label: [39.7, 141.8] },
  { id: 'echigo', name: '越後山脈', regions: ['tohoku', 'kanto', 'chubu'], pts: [[37.85, 139.7], [37.4, 139.5], [37.0, 139.4], [36.83, 138.93]], label: [37.3, 139.15] },
  { id: 'kantou', name: '関東山地', regions: ['kanto'], pts: [[36.0, 138.7], [35.85, 139.0], [35.7, 139.3]], label: [35.95, 138.95] },
  { id: 'ashio', name: '足尾山地', regions: ['kanto'], pts: [[36.75, 139.4], [36.5, 139.5], [36.3, 139.55]], label: [36.5, 139.75] },
  { id: 'hida', name: '飛騨山脈（北アルプス）', regions: ['chubu'], pts: [[36.76, 137.76], [36.58, 137.62], [36.34, 137.65], [36.29, 137.65], [36.1, 137.55]], label: [36.55, 137.4] },
  { id: 'kiso', name: '木曽山脈（中央アルプス）', regions: ['chubu'], pts: [[35.9, 137.8], [35.79, 137.8], [35.45, 137.65]], label: [35.4, 137.3] },
  { id: 'akaishi', name: '赤石山脈（南アルプス）', regions: ['chubu'], pts: [[35.75, 138.24], [35.67, 138.24], [35.45, 138.15], [35.33, 138.1]], label: [35.25, 138.45] },
  { id: 'kii', name: '紀伊山地', regions: ['kinki'], pts: [[34.3, 135.55], [34.2, 135.9], [34.18, 136.1], [34.0, 136.2]], label: [34.05, 135.75] },
  { id: 'chugoku', name: '中国山地', regions: ['chugoku'], pts: [[34.2, 131.5], [34.6, 132.2], [34.9, 132.6], [35.2, 133.4], [35.35, 134.2], [35.35, 134.8]], label: [35.15, 132.9] },
  { id: 'shikoku', name: '四国山地', regions: ['shikoku'], pts: [[33.9, 134.5], [33.85, 134.1], [33.75, 133.5], [33.77, 133.12], [33.65, 132.6]], label: [33.55, 133.6] },
  { id: 'kyushu', name: '九州山地', regions: ['kyushu'], pts: [[32.9, 131.3], [32.6, 131.1], [32.3, 131.0], [31.9, 130.9]], label: [32.4, 131.4] },
  { id: 'tsukushi', name: '筑紫山地', regions: ['kyushu'], pts: [[33.5, 130.45], [33.45, 130.75], [33.4, 131.0]], label: [33.7, 130.7] },
];

export const riverLines: RiverLine[] = [
  { id: 'ishikari', name: '石狩川', regions: ['hokkaido'], pts: [[43.68, 143.0], [43.77, 142.37], [43.4, 141.95], [43.2, 141.4]], label: [43.55, 142.0] },
  { id: 'tokachi', name: '十勝川', regions: ['hokkaido'], pts: [[43.4, 143.0], [43.0, 143.2], [42.92, 143.3], [42.73, 143.7]], label: [43.0, 143.45] },
  { id: 'kitakami', name: '北上川', regions: ['tohoku'], pts: [[40.2, 141.3], [39.7, 141.15], [39.4, 141.1], [38.9, 141.1], [38.43, 141.3]], label: [39.5, 141.35] },
  { id: 'mogami', name: '最上川', regions: ['tohoku'], pts: [[37.75, 140.0], [37.9, 140.1], [38.25, 140.35], [38.75, 140.3], [38.9, 139.85]], label: [38.3, 140.55] },
  { id: 'abukuma', name: '阿武隈川', regions: ['tohoku'], pts: [[37.2, 139.9], [37.4, 140.4], [37.75, 140.45], [38.0, 140.9]], label: [37.55, 140.65] },
  { id: 'tone', name: '利根川', regions: ['kanto'], pts: [[36.95, 139.0], [36.4, 139.05], [36.2, 139.5], [36.18, 139.7], [35.9, 140.3], [35.74, 140.85]], label: [36.05, 140.1] },
  { id: 'arakawa', name: '荒川', regions: ['kanto'], pts: [[35.9, 138.7], [36.0, 139.3], [35.75, 139.8]], label: [36.05, 139.45] },
  { id: 'tama', name: '多摩川', regions: ['kanto'], pts: [[35.85, 138.9], [35.65, 139.4], [35.53, 139.78]], label: [35.52, 139.35] },
  { id: 'shinano', name: '信濃川（千曲川）', regions: ['chubu'], pts: [[35.95, 138.7], [36.25, 138.45], [36.65, 138.2], [36.85, 138.37], [37.1, 138.75], [37.45, 138.85], [37.93, 139.05]], label: [37.2, 138.4] },
  { id: 'kiso', name: '木曽川', regions: ['chubu'], pts: [[35.95, 137.8], [35.85, 137.7], [35.5, 137.5], [35.38, 136.95], [35.05, 136.75]], label: [35.62, 137.2] },
  { id: 'tenryu', name: '天竜川', regions: ['chubu'], pts: [[36.05, 138.1], [35.5, 137.85], [35.1, 137.8], [34.65, 137.8]], label: [35.3, 138.0] },
  { id: 'oi', name: '大井川', regions: ['chubu'], pts: [[35.45, 138.1], [35.0, 138.2], [34.65, 138.25]], label: [34.85, 138.45] },
  { id: 'fuji', name: '富士川', regions: ['chubu'], pts: [[35.9, 138.3], [35.65, 138.55], [35.3, 138.45], [35.1, 138.65]], label: [35.45, 138.7] },
  { id: 'yodo', name: '淀川', regions: ['kinki'], pts: [[35.0, 135.9], [34.89, 135.8], [34.9, 135.7], [34.7, 135.5], [34.65, 135.4]], label: [34.95, 135.55] },
  { id: 'kinokawa', name: '紀の川', regions: ['kinki'], pts: [[34.2, 136.0], [34.35, 135.7], [34.25, 135.4], [34.2, 135.15]], label: [34.4, 135.45] },
  { id: 'kumano', name: '熊野川', regions: ['kinki'], pts: [[34.15, 135.85], [33.95, 135.85], [33.72, 136.0]], label: [33.85, 136.15] },
  { id: 'takahashi', name: '高梁川', regions: ['chugoku'], pts: [[35.1, 133.35], [34.8, 133.6], [34.6, 133.75]], label: [34.95, 133.75] },
  { id: 'gonokawa', name: '江の川', regions: ['chugoku'], pts: [[34.7, 132.9], [35.0, 132.6], [35.0, 132.35], [35.0, 132.2]], label: [34.85, 132.55] },
  { id: 'yoshino', name: '吉野川', regions: ['shikoku'], pts: [[33.8, 133.4], [33.9, 133.7], [34.02, 133.8], [34.1, 134.3], [34.1, 134.6]], label: [34.2, 134.0] },
  { id: 'shimanto', name: '四万十川', regions: ['shikoku'], pts: [[33.45, 133.1], [33.3, 132.95], [33.1, 132.85], [32.95, 132.99]], label: [33.15, 133.1] },
  { id: 'chikugo', name: '筑後川', regions: ['kyushu'], pts: [[33.1, 131.2], [33.32, 130.93], [33.32, 130.5], [33.15, 130.28]], label: [33.4, 130.75] },
  { id: 'kuma', name: '球磨川', regions: ['kyushu'], pts: [[32.35, 131.1], [32.22, 130.75], [32.4, 130.6], [32.5, 130.55]], label: [32.1, 130.85] },
];

export const peaks: Peak[] = [
  { name: '羊蹄山', regions: ['hokkaido'], lat: 42.83, lon: 140.81, h: 1898 },
  { name: '旭岳', regions: ['hokkaido'], lat: 43.66, lon: 142.85, h: 2291 },
  { name: '幌尻岳', regions: ['hokkaido'], lat: 42.72, lon: 142.68, h: 2052 },
  { name: '八甲田山', regions: ['tohoku'], lat: 40.66, lon: 140.88, h: 1585 },
  { name: '岩手山', regions: ['tohoku'], lat: 39.85, lon: 141.0, h: 2038 },
  { name: '鳥海山', regions: ['tohoku'], lat: 39.1, lon: 140.05, h: 2236 },
  { name: '蔵王山', regions: ['tohoku'], lat: 38.14, lon: 140.45, h: 1841 },
  { name: '筑波山', regions: ['kanto'], lat: 36.22, lon: 140.1, h: 877 },
  { name: '浅間山', regions: ['chubu', 'kanto'], lat: 36.4, lon: 138.52, h: 2568 },
  { name: '富士山', regions: ['chubu'], lat: 35.36, lon: 138.73, h: 3776 },
  { name: '北岳', regions: ['chubu'], lat: 35.67, lon: 138.24, h: 3193 },
  { name: '槍ヶ岳', regions: ['chubu'], lat: 36.34, lon: 137.65, h: 3180 },
  { name: '立山', regions: ['chubu'], lat: 36.58, lon: 137.62, h: 3015 },
  { name: '白山', regions: ['chubu'], lat: 36.15, lon: 136.77, h: 2702 },
  { name: '御嶽山', regions: ['chubu'], lat: 35.89, lon: 137.48, h: 3067 },
  { name: '大台ヶ原', regions: ['kinki'], lat: 34.18, lon: 136.1, h: 1695 },
  { name: '大山', regions: ['chugoku'], lat: 35.37, lon: 133.54, h: 1729 },
  { name: '石鎚山', regions: ['shikoku'], lat: 33.77, lon: 133.12, h: 1982 },
  { name: '剣山', regions: ['shikoku'], lat: 33.85, lon: 134.1, h: 1955 },
  { name: '阿蘇山', regions: ['kyushu'], lat: 32.88, lon: 131.1, h: 1592 },
  { name: '雲仙岳', regions: ['kyushu'], lat: 32.76, lon: 130.3, h: 1483 },
  { name: '桜島', regions: ['kyushu'], lat: 31.58, lon: 130.66, h: 1117 },
];
