// 公式集の「討論・探求型」解説マンガのデータ型。
// 生徒2人＋先生が会話しながら公式・定理を発見していく形式で、
// コマ送り（1コマずつ「次へ」で進む）のビジュアルノベル風UIで表示する。

/** 話者。s1/s2は生徒、tは先生。 */
export type MangaSpeaker = 's1' | 's2' | 't';

export type MangaPanel = {
  speaker: MangaSpeaker;
  /** セリフ本文 */
  line: string;
  /**
   * 「発見の瞬間」（公式・定理そのものを提示するコマ）はtrueにして、
   * 通常のセリフより目立つ強調表示にする。
   */
  emphasis?: boolean;
};

export type MangaScript = {
  id: string;
  /** 一覧に出すタイトル（省略可、通常は非表示） */
  title?: string;
  panels: MangaPanel[];
};
