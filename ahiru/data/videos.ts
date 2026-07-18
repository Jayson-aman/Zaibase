// 解説動画の登録簿。問題ID・レッスンIDに動画URLを紐付ける。
// URLは YouTube / Vimeo / MP4・HLS 直リンクのいずれでもよい（VideoPlayerが判定）。
// 動画コンテンツ自体は用意した分だけここに追記していく（空でも安全）。

export type VideoRef = { url: string; title?: string };

// 問題ID → 解説動画
export const questionVideos: Record<string, VideoRef> = {
  // デモ（差し替え用サンプル）。実際の解説動画URLに置き換えてください。
  koko_kankan_sansu_04: {
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    title: '解説動画（サンプル・差し替え用）',
  },
};

// レッスンID → 動画解説
export const lessonVideos: Record<string, VideoRef> = {
  // 例: sansu_01_wariai: { url: 'https://youtu.be/xxxx', title: '割合の考え方' },
};

// 問題の解説動画を取得（レジストリ優先、無ければ問題データの videoUrl を使う）
export function getQuestionVideo(
  questionId: string,
  inlineUrl?: string,
): VideoRef | null {
  if (questionVideos[questionId]) return questionVideos[questionId];
  if (inlineUrl) return { url: inlineUrl };
  return null;
}

export function getLessonVideo(lessonId: string): VideoRef | null {
  return lessonVideos[lessonId] ?? null;
}
