import type { Figure } from './figures';

// 算数：同志社香里中学校 過去問（平面図形と比）— 三角形ABCの3辺にD・E・Fを取り、
// DFとAEの交点GでAG:GEを求める問題。動く図解（10ステップ）つき。
export const figuresSansuGap7: Record<string, Figure> = {
  kankan_sansu_r07: {
    kind: 'polygon',
    // A→D→B→E→C→F→(Aに戻る) の順にたどると、三角形ABCの輪郭そのものになる
    // （D・E・Fはすべて辺の上の点なので、頂点に加えても形は変わらない）。
    points: [
      { x: 2, y: 6, label: 'A' },
      { x: 0.8, y: 2.4, label: 'D' },
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'E' },
      { x: 7, y: 0, label: 'C' },
      { x: 11 / 3, y: 4, label: 'F' },
    ],
    sideLabels: ['3cm', '2cm', '4cm', '3cm', '4cm', '2cm'],
    // 4つの部分三角形を色分け。(1)で使うBDE、(2)(3)で使うADF・CEF・DEF。
    regions: [
      { indices: [1, 2, 3], color: '#FEF3C7' }, // △BDE
      { indices: [0, 1, 5], color: '#DBEAFE' }, // △ADF
      { indices: [3, 4, 5], color: '#FCE7F3' }, // △CEF
      { indices: [1, 3, 5], color: '#DCFCE7' }, // △DEF（真ん中）
    ],
    // 補助線：DFとAEを、交点Gで2本ずつに分けて描く（Gにラベルを付けるため）
    segments: [
      { from: { x: 2, y: 6 }, to: { x: 48 / 17, y: 60 / 17, label: 'G' } },
      { from: { x: 48 / 17, y: 60 / 17 }, to: { x: 4, y: 0 } },
      { from: { x: 0.8, y: 2.4 }, to: { x: 48 / 17, y: 60 / 17 } },
      { from: { x: 48 / 17, y: 60 / 17 }, to: { x: 11 / 3, y: 4 } },
    ],
    caption:
      'AD=3cm・DB=2cm、BE=4cm・EC=3cm、AF=2cm・FC=4cm。線分DFと線分AEの交点がG。',
    steps: [
      '① まず三角形ABCの形をとらえる',
      '② 辺AB上にDを置く（AD:DB＝3:2）',
      '③ 辺BC上にEを置く（BE:EC＝4:3）',
      '④ 辺CA上にFを置く（AF:FC＝2:4＝1:2）',
      '⑤ 点Dと点Fを直線で結ぶ（線分DF）',
      '⑥ 点Aと点Eを直線で結ぶ（線分AE）',
      '⑦ 線分DFと線分AEが交わる点をGとする',
      '⑧ 隅の三角形BDEを塗る（(1)の答え：BD/BA×BE/BC＝2/5×4/7＝8/35）',
      '⑨ 残り2つの隅の三角形ADFとCEFも塗る（ADF＝1/5、CEF＝2/7）',
      '⑩ 真ん中に残る三角形DEFを塗る（(2)の答え：1－(8/35+1/5+2/7)＝2/7。(3)のAG:GEは△ADF:△DEF＝1/5:2/7＝7:10）',
    ],
  },
};
