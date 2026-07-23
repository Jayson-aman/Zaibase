// ───────────────────────────────────────────────────────────────
// 不正解のときにかける「励みになる言葉」
// ───────────────────────────────────────────────────────────────
// 責めず、次につながる前向きな声かけ。連続で間違えたときは
// 特に温かいメッセージを出す。ランダムではなく index で選ぶ
// （Math.random はこの環境の一部で不可のため、呼び出し側で
//  問題番号などを渡してローテーションする）。

export const ENCOURAGEMENTS: string[] = [
  '間違えた問題こそ、いちばん成績が伸びるチャンス！🌱',
  '大丈夫。今わかれば、本番で解ければOK！💪',
  'ナイストライ！解説を読めば必ず身につくよ📖',
  'ここでつまずく人は多いよ。今つぶしておこう🔧',
  'あきらめない君は、もう合格に近づいている✨',
  'ミスは成長のサイン。一歩ずつ進もう🚶',
  '今日の1問が、入試当日の1点になる！🎯',
  'よく最後まで考えたね。その姿勢が力になる🔥',
];

// 3回以上連続で間違えたときの、特にやさしい声かけ
export const STREAK_ENCOURAGEMENTS: string[] = [
  'ちょっと難しかったね。基礎からいっしょに固め直そう🌱',
  '焦らなくて大丈夫。基本問題で自信を取り戻そう😊',
  'ここで基礎に戻るのは、遠回りに見えて近道だよ🧭',
];

/** 通常の励まし（index でローテーション） */
export function pickEncouragement(index: number): string {
  return ENCOURAGEMENTS[Math.abs(index) % ENCOURAGEMENTS.length];
}

/** 連続不正解時のやさしい励まし */
export function pickStreakEncouragement(index: number): string {
  return STREAK_ENCOURAGEMENTS[Math.abs(index) % STREAK_ENCOURAGEMENTS.length];
}
