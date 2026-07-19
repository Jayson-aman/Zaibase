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
