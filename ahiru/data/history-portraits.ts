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
];

export function getPortraitForPerson(personField?: string): HistoryPortrait | null {
  if (personField == null) return null;
  for (const p of historyPortraits) {
    if (personField.includes(p.person)) return p;
  }
  return null;
}
