import type { Figure } from './figures';

// 動作確認済みの実問題に対応する図形サンプル。
// （解答を直接示さない範囲で、本来の図を正確に再現する）
export const figuresSample: Record<string, Figure> = {
  // 比例 y=4x のグラフ。点(3,12)を通る。比例定数を問う問題なので式は明示しない。
  koko_kankan_sansu_04: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-14, 14],
    lines: [{ a: 4, b: 0 }],
    points: [{ x: 3, y: 12, label: '(3, 12)' }],
  },
  // 円すい：底面の半径5cm・母線13cm。高さは解答なので示さない。
  seifu_v2_s007: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '5cm', slant: '13cm' },
  },
};
