import type { Figure } from './figures';

export const figuresKoushikiK5En2: Record<string, Figure> = {
  koushiki_k5en2_naisetsu_ex1: {
    kind: 'circle',
    points: [
      { angle: 10, label: 'A' },
      { angle: 100, label: 'B' },
      { angle: 190, label: 'C' },
      { angle: 280, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '円に内接する四角形ABCD（∠BAD=72°）。辺BCをCの方向に延長した点E（図には点として明示していないが、辺BCの延長線上にある）',
    steps: [
      '円に内接する四角形ABCDを考える。∠BADと∠BCDが対角の関係にあることを確認する',
      '円に内接する四角形の性質より、∠BAD+∠BCD=180°',
      '∠BAD=72°を代入する：72°+∠BCD=180°',
      '移項して計算する：∠BCD=180°-72°=108°',
      '点Eは辺BCをCの方向に延長した点なので、∠BCDと∠DCEは一直線上の角（和が180°）になることを確認する',
      '式を立てる：∠DCE=180°-∠BCD=180°-108°',
      '計算する：∠DCE=72°（∠BADと一致し、外角=内対角の性質が確認できる）',
    ],
  },

  koushiki_k5en2_naisetsu_ex2: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 190, label: 'B' },
      { angle: 280, label: 'C' },
      { angle: 10, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '円に内接する四角形ABCD（AB=AD、∠BCD=110°）',
    steps: [
      '円に内接する四角形ABCDにおいて、∠BADと∠BCDが対角の関係にあることを確認する',
      '円に内接する四角形の性質より、∠BAD+∠BCD=180°',
      '∠BCD=110°を代入する：∠BAD+110°=180°',
      '計算する：∠BAD=70°',
      '△ABDに着目する。AB=ADなので△ABDはAを頂角とする二等辺三角形であり、底角∠ABD=∠ADBが成り立つ',
      '三角形の内角の和より、∠ABD+∠ADB+∠BAD=180°を立てる',
      '∠ABD=∠ADBとして2∠ABD+70°=180°を作り、2∠ABD=110°を導く',
      '計算する：∠ABD=55°',
    ],
  },

  koushiki_k5en2_sessen_ex1: {
    kind: 'circle',
    points: [
      { angle: 0, label: 'A' },
      { angle: 100, label: 'B' },
      { angle: 220, label: 'C' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    sector: { from: 0, to: 100, label: '劣弧AB（∠xの中にある弧）' },
    caption: '接線ℓ（点Aで接する）と弦ABがつくる角∠x=68°（劣弧ABをふくむ）。優弧AB上の点C',
    steps: [
      '接線ℓと弦ABがつくる角のうち、劣弧AB（色をつけた弧）をふくむ角を∠xとする',
      '接弦定理を確認する：接線と弦のつくる角は、その角の中にある弧に対する円周角に等しい',
      '∠xの中には劣弧ABが入っているので、∠xは劣弧ABに対する円周角に等しい',
      '劣弧ABに対する円周角は、優弧AB側にある点から測った角である',
      '点Cは優弧AB上にあるので、∠ACBが求める円周角にあたることを確認する',
      '接弦定理の式を立てる：∠ACB=∠x',
      '∠x=68°を代入する：∠ACB=68°',
    ],
  },

  koushiki_k5en2_sessen_ex2: {
    kind: 'circle',
    points: [
      { angle: 0, label: 'A' },
      { angle: 110, label: 'B' },
      { angle: 240, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [0, 2],
    ],
    sector: { from: 0, to: 110, label: '劣弧AB（∠xの中にある弧）' },
    caption: '接線ℓ（点Aで接する）と弦ABがつくる角（劣弧ABをふくむ角）=70°。優弧AB上の点Cで△ABCをつくる（∠ABC=50°）',
    steps: [
      '接線ℓと弦ABがつくる角（劣弧ABをふくむ）は70°であることを確認する',
      '点Cは優弧AB上にあるので、接弦定理よりこの角は∠ACBに等しい',
      '∠ACB=70°が求まる',
      '△ABCに着目し、三角形の内角の和が180°であることを使う',
      '式を立てる：∠BAC+∠ABC+∠ACB=180°',
      '∠ABC=50°、∠ACB=70°を代入する：∠BAC+50°+70°=180°',
      '計算する：∠BAC=180°-120°=60°',
    ],
  },

  koushiki_k5en2_houbeki_ex1: {
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
    caption: '円の内部で弦ACと弦BDが点Pで交わる（PA=6cm、PC=4cm、PB=3cm）',
    steps: [
      '円の内部で弦ACと弦BDが点Pで交わっていることを確認する',
      '方べきの定理を確認する：PA×PC=PB×PD',
      'PA=6cm、PC=4cmを代入して左辺を計算する：PA×PC=6×4=24',
      '右辺にPB=3cmを代入する：PB×PD=3×PD',
      '方べきの定理の式を立てる：24=3×PD',
      '両辺を3で割る：PD=24÷3',
      '計算する：PD=8cm',
    ],
  },

  koushiki_k5en2_houbeki_ex2: {
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
    caption: '円の内部で弦ACと弦BDが点Pで交わる（PA=xcm、PC=(x+3)cm、PB=4cm、PD=10cm）',
    steps: [
      '円の内部で弦ACと弦BDが点Pで交わっていることを確認する',
      '方べきの定理を確認する：PA×PC=PB×PD',
      'PA=x、PC=x+3、PB=4、PD=10を代入した式を立てる：x(x+3)=4×10',
      '右辺を計算する：x(x+3)=40',
      '展開して整理する：x²+3x-40=0',
      '積が-40、和が3になる2数8と-5を見つけ、(x+8)(x-5)=0と因数分解する',
      'x=-8、5が出るが、xは長さなのでx>0を満たすx=5だけを答えとして採用する',
      '検算する：PA×PC=5×8=40、PB×PD=4×10=40で一致する',
    ],
  },
};
