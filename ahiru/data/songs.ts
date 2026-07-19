// 社会（地理・歴史・公民）の暗記用「替え歌」。
// 著作権に配慮し、メロディはパブリックドメインの童謡・唱歌のみを指定する
// （歌詞はすべてオリジナル）。melody にはそのメロディ名を書く。

import { songsShakai } from './songs-shakai';

export type SongCategory = '地理' | '歴史' | '公民';

export type Song = {
  id: string;
  category: SongCategory;
  title: string;
  /** パブリックドメインのメロディ名（例：きらきら星、桃太郎、かえるの合唱 など） */
  melody: string;
  /** 替え歌の歌詞（改行区切り） */
  lyrics: string;
  /** この歌で覚えられる要点（暗記のポイント） */
  points: string;
};

export const songs: Song[] = [
  ...songsShakai,
];

export function getSongsByCategory(category: SongCategory): Song[] {
  return songs.filter((s) => s.category === category);
}
