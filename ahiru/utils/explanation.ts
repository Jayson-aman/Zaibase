// 問題の解説を画面に出すときの整形。
//
// 解説は全15,199問すべてに入っていて、中央値167字ある。
// ところが画面は長いあいだ、無料ユーザーには hint（中央値34字）だけを
// 「📖 解説」という見出しで出していた。ヒントの無い532問では
// explanation の1行目だけを出していたため、そこが「【解説】」という
// 見出しの文字しか無い問題では、画面に「【(1)の解説】」とだけ表示され、
// 裏にある1,000字以上の解説がまったく読めなかった。
//
// 2026/9/14に方針を変更し、解説本文は無料で全文を出すことにした。
// Proが受け持つのは 図解つき・覚え方・ひっかけ注意・AI弱点コーチ・聞き流し。

/** 解説本文。無料・Proを問わずこれを出す。hint は解説が無いときだけの予備。 */
export function explanationText(q: { explanation?: string; hint?: string }, fallback?: string): string {
  const raw = (q.explanation ?? fallback ?? q.hint ?? '').trim();
  if (!raw) return '';
  // 先頭が「【解説】」だけの行なら落とす。画面の見出しがすでに「解説」なので二重になる。
  // 【出題意図】【解法】のように中身の区切りを表す見出しは、本文の一部なので残す。
  const lines = raw.split('\n');
  if (lines[0].trim() === '【解説】') return lines.slice(1).join('\n').trim();
  return raw;
}

/** 解説とは別に、補足としてヒントも出せるか（解説と同じ文言なら出さない） */
export function hintText(q: { explanation?: string; hint?: string }): string {
  const h = (q.hint ?? '').trim();
  if (!h) return '';
  const e = explanationText(q);
  return e.includes(h) ? '' : h;
}
