import { ImageSourcePropType } from 'react-native';

// 歴史年表（data/timeline.ts）の person フィールドに対応する肖像画・写真。
// person フィールドは「中大兄皇子・中臣鎌足」のように複数人が「・」区切りで
// 入ることがあるため、getPortraitForPerson は部分一致で検索する。
export type HistoryPortrait = {
  /** timeline.ts の person 文字列に含まれる人物名（完全一致の部分文字列） */
  person: string;
  image: ImageSourcePropType;
  /** 出典・注記（例：伝統的な肖像画／本人と断定はできない　など） */
  caption?: string;
};

export const historyPortraits: HistoryPortrait[] = [
  {
    person: '中臣鎌足',
    image: require('../assets/history-portraits/nakatomi-no-kamatari.jpg'),
    caption: '伝統的な肖像画（藤原氏の祖・大化の改新の中心人物）',
  },
  {
    person: '聖徳太子',
    image: require('../assets/history-portraits/shotoku-taishi.jpg'),
    caption: '唐本御影（伝聖徳太子像）。近年は本人ではないとの説もある伝統的な肖像画',
  },
  {
    person: '中大兄皇子',
    image: require('../assets/history-portraits/nakanooe-no-oji.jpg'),
    caption: 'のちの天智天皇。大化の改新で中臣鎌足とともに蘇我氏を倒した',
  },
  {
    person: '元明天皇',
    image: require('../assets/history-portraits/genmei-tennou.jpg'),
    caption: '第43代天皇（女帝）。天智天皇の皇女。710年に平城京へ遷都した',
  },
  {
    person: '聖武天皇',
    image: require('../assets/history-portraits/shomu-tennou.jpg'),
    caption: '天平年間の災害・疫病（天然痘）を機に仏教に深く帰依し、国分寺建立・東大寺大仏造立を発願した',
  },
  {
    person: '桓武天皇',
    image: require('../assets/history-portraits/kanmu-tennou.jpg'),
    caption: '光仁天皇の子（山部親王）。794年に平安京へ遷都した',
  },
  {
    person: '菅原道真',
    image: require('../assets/history-portraits/sugawara-no-michizane.jpg'),
    caption: '平安前期の学者・政治家。894年に遣唐使の廃止を建議した',
  },
  {
    person: '藤原道長',
    image: require('../assets/history-portraits/fujiwara-no-michinaga.jpg'),
    caption: '藤原兼家の五男。1016年に摂政となり、摂関政治の全盛期を築いた',
  },
  {
    person: '白河上皇',
    image: require('../assets/history-portraits/shirakawa-tennou.jpg'),
    caption: '第72代天皇（白河天皇）。譲位後の1086年に院政を始めた',
  },
  {
    person: '源義経',
    image: require('../assets/history-portraits/minamoto-no-yoshitsune.jpg'),
    caption: '源頼朝の異母弟。1185年、壇ノ浦の戦いで平氏を滅ぼした',
  },
];

/** 1人の肖像画だけが欲しいとき（最初の一致） */
export function getPortraitForPerson(personField?: string): HistoryPortrait | null {
  const list = getPortraitsForPerson(personField);
  return list[0] ?? null;
}

/** person フィールドに複数人（「・」区切り）が含まれる場合、一致した全員分を返す */
export function getPortraitsForPerson(personField?: string): HistoryPortrait[] {
  if (personField == null) return [];
  return historyPortraits.filter((p) => personField.includes(p.person));
}

// できごと自体を写した写真（人物の肖像ではない：建造物・仏像など）。
// timeline.ts の event 文字列に部分一致するもの。
export type HistoryEventImage = {
  /** timeline.ts の event 文字列に含まれる部分文字列 */
  eventMatch: string;
  image: ImageSourcePropType;
  caption?: string;
};

export const historyEventImages: HistoryEventImage[] = [
  {
    eventMatch: '東大寺の大仏',
    image: require('../assets/history-portraits/todaiji-daibutsu.jpg'),
    caption: '東大寺盧舎那仏像（現在の姿）。聖武天皇の発願により造立された',
  },
  {
    eventMatch: '平城京に遷都',
    image: require('../assets/history-portraits/heijokyo-daigokuden.jpg'),
    caption: '平城宮 大極殿・大極門（復元）。当時の宮殿の姿を伝える',
  },
];

export function getEventImages(eventText?: string): HistoryEventImage[] {
  if (eventText == null) return [];
  return historyEventImages.filter((e) => eventText.includes(e.eventMatch));
}
