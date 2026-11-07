// マンガ解説のコマに添える、AI（Google Gemini）で作ったイラストの対応表。
// マンガID → コマの番号（0始まり）→ 画像ファイル名。画像は public/manga/ に置く（webp・512px）。
// 台本（data/manga-scripts*.ts）は変えない。画像が無いコマは、これまでどおり文字だけで出る。
// このファイルは scripts/gen-manga-images.mjs が、作業用の manifest から書き出す。手で直さない。
export const MANGA_IMAGES: Record<string, Record<number, string>> = {};

/** 画像の置き場（Web は同じサイトの /manga/、アプリは本番サイトから取る） */
export function mangaImageUrl(file: string, isWeb: boolean): string {
  return isWeb ? `/manga/${file}` : `https://exam.zaibase.group/manga/${file}`;
}
