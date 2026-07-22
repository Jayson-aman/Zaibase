// ───────────────────────────────────────────────────────────────
// 公式・まとめ（formulas）の共通型定義
// ───────────────────────────────────────────────────────────────
// 「公式だけ」ではなく、①わかりやすい説明 ②等幅テキストの図解
// ③例題 ④チェックポイント まで含んだ濃い教材にする。
// 図解（asciiFigure）は monospace で崩れないテキスト図を使う。

export type FormulaExample = {
  /** 例題（問題文） */
  q: string;
  /** 解答・解き方 */
  a: string;
};

export type FormulaItem = {
  /** 公式・項目名（例：三角形の面積） */
  label: string;
  /** 公式そのもの（例：底辺 × 高さ ÷ 2） */
  formula: string;
  /** 一行の補足メモ（既存互換） */
  note?: string;
  /** かみくだいた説明（なぜそうなるか・使いどころ） */
  explanation?: string;
  /** 等幅テキストの図解（monospace で崩れない範囲で描く） */
  asciiFigure?: string;
  /** 例題＋解答 */
  example?: FormulaExample;
  /** テストで狙われるチェックポイント・ミスしやすい点 */
  checkpoints?: string[];
};

export type FormulaSection = {
  /** セクション見出し（例：面積・体積） */
  title: string;
  /** セクションの導入・全体像の一言 */
  intro?: string;
  items: FormulaItem[];
};
