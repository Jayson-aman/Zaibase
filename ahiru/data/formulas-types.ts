// ───────────────────────────────────────────────────────────────
// 公式・まとめ（formulas）の共通型定義
// ───────────────────────────────────────────────────────────────
// 「公式だけ」ではなく、①わかりやすい説明 ②図解 ③例題 ④チェックポイント
// まで含んだ濃い教材にする。
// 図形が絡む項目は figure（クイズ問題と同じベクター図形システム）で描画し、
// 図形ではない計算の流れは steps（計算トレースの箇条書き）で示す。
// asciiFigure は未移行の項目向けのレガシーフォールバックとして残す
// （monospaceでも画面幅次第で崩れるため、新規項目では使わないこと）。

import type { Figure } from './figures';

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
  /** ベクター図形（図形問題はこちらを使う。FigureView で描画） */
  figure?: Figure;
  /** 計算の流れ（図形ではない文章題向け。1行1ステップで表示） */
  steps?: string[];
  /** 等幅テキストの図解（レガシー・未移行項目のみ） */
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
