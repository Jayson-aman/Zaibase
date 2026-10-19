// 「やさしい問題から」の案内文。やさしい問題から始めて、できたら次へ、むずかしければもどる。
// 子どもが「できない」と感じてやめてしまわないよう、いつでもステップ1にもどってよい、と伝える。
export type StepLevel = 1 | 2 | 3;

export const STEPS: { level: StepLevel; label: string; title: string; lead: string }[] = [
  { level: 1, label: 'ステップ1', title: 'まずここから', lead: '1問ずつ、すぐ答えが出る問題です。まちがえても大丈夫。のんびりいきましょう。' },
  { level: 2, label: 'ステップ2', title: 'ふつう', lead: '教科書の基本例題のレベルです。ステップ1ができたら、ここへ。' },
  { level: 3, label: 'ステップ3', title: 'テストに近い', lead: '定期テストに近い問題です。少し考える問題も出ます。' },
];

/** 教科ごとの「はじめの一歩」の声かけ */
export const FIRST_STEP_HINT: Record<string, string> = {
  sansu: '計算は、ゆっくり、1行ずつ。符号や分数は、指でなぞりながら確かめると安心だよ。',
  kokugo: '漢字や文法は、声に出して読むと覚えやすいよ。',
  rika: 'まずは用語を1つずつ。図を思いうかべると思い出しやすいよ。',
  shakai: '地名や出来事は、地図や年表の「どこ？いつ？」を思いうかべよう。',
  eigo: '英語は、声に出して、1文ずつ。単語の形を目で覚えよう。',
};

export const STEP_UP_PCT = 80;
export const STEP_DOWN_PCT = 60;
