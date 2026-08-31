import type { Figure } from './figures';

export const lessonFigsKoushikiK5En2: Record<string, Figure> = {
  lf_koushiki_k5en2_naisetsu: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 20, label: 'A' },
      { angle: 110, label: 'B' },
      { angle: 200, label: 'C' },
      { angle: 290, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    sector: { from: 110, to: 290, label: '弧BCD（∠Aが見る弧）' },
    caption: '円に内接する四角形ABCD。∠Aは弧BCD（色をつけた弧）に対する円周角',
    steps: [
      '円に内接する四角形ABCD（この順に並ぶ）を考える。まず対角∠Aと∠Cに注目する',
      '∠Aは、Aから見て弧BCD（Aを含まない側、B→C→Dとたどる弧）に対する円周角である',
      '∠Cは、Cから見て弧DAB（Cを含まない側、D→A→Bとたどる弧）に対する円周角である',
      '円周角の定理より、∠A=（弧BCDに対する中心角）÷2、∠C=（弧DABに対する中心角）÷2',
      '弧BCDと弧DABをあわせると、ちょうど円周1周＝360°になる',
      'よって2つの弧に対応する中心角の和も360°になるので、∠A+∠C=360°÷2=180°',
      '同じ考え方を∠Bと∠Dについても使うと、∠B+∠D=180°も成り立つ',
    ],
  },

  lf_koushiki_k5en2_sessen: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 0, label: 'T' },
      { angle: 130, label: 'A' },
      { angle: 250, label: 'B' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    sector: { from: 0, to: 130, label: '弧TA（∠xの中にある弧）' },
    caption: '点Tにおける接線ℓ（図には直接示せないため、Tでの接線の向きは弦TAとのなす角∠xとして扱う）と弦TA。優弧TA上の点B',
    steps: [
      '接点Tにおける円の接線をℓとする。弦TAとℓがつくる角を∠xとし、その角の中に弧TA（色をつけた弧、点Bを含まない側）が入っているとする',
      '中心Oと、T・Aをそれぞれ結ぶ半径OT、OAを引く（△OTAはOT=OAの二等辺三角形）',
      '接線ℓは接点Tを通る半径OTと垂直に交わるので、∠OTA=90°-∠x',
      '△OTAは二等辺三角形なので、底角は等しく∠OAT=∠OTA=90°-∠x',
      '三角形の内角の和は180°なので、∠TOA=180°-(90°-∠x)-(90°-∠x)=2∠x',
      '∠TOAは弧TAに対する中心角である。円周角の定理より、この弧に対する円周角は中心角の半分、つまり2∠x÷2=∠x',
      '弧TAに対する円周角は、優弧（点Bを含む側）上のどの点から見ても同じ大きさなので、∠TBA=∠x。これで接弦定理∠x=∠TBAが示された',
    ],
  },

  lf_koushiki_k5en2_houbeki: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'A' },
      { angle: 190, label: 'B' },
      { angle: 270, label: 'C' },
      { angle: 350, label: 'D' },
    ],
    chords: [
      [0, 2],
      [1, 3],
    ],
    caption: '円の内部で弦ACと弦BDが点Pで交わる（Pは弦の交点、図には点として明示していないが2本の弦の交わる位置）',
    steps: [
      '円の内部で2本の弦ACとBDが点Pで交わっているとする',
      '△PABと△PDCに注目する',
      '∠APB=∠DPC（対頂角、向かい合う角なので等しい）',
      '∠PAB=∠PDC（弧BCに対する円周角。点Aから見ても点Dから見ても同じ弧BCに対する円周角なので等しい）',
      '2組の角がそれぞれ等しいので、△PAB∽△PDC（相似）が成り立つ',
      '相似な図形では対応する辺の比が等しいので、対応関係（P↔P、A↔D、B↔C）よりPA:PD=PB:PC',
      '比例式の性質（内側の項どうしの積=外側の項どうしの積）で整理すると、PA×PC=PB×PD。これが方べきの定理である',
    ],
  },
};
