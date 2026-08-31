import type { Question } from './questions-meta';

export const gradeKoushikiC3Tairyoku1Questions: Question[] = [
  {
    id: 'koushiki_c3tairyoku1_chokuhoutai_ex1',
    subject: 'sansu',
    examType: 'chugaku',
    grade: 'e5',
    difficulty: 'basic',
    question: '縦7cm、横6cm、高さ5cmの直方体の体積は何cm³ですか。',
    answer: '210cm³',
    hint: '直方体の体積＝縦×横×高さ',
    explanation:
      '【解説】\n①直方体の体積の公式を確認する。\n　体積＝縦×横×高さ\n②問題の数値を公式にあてはめる。縦7cm、横6cm、高さ5cmなので、\n　体積＝7×6×5\n③かけ算を順番に計算する。まず7×6＝42。\n④次に42×5を計算する。42×5＝210。\n⑤よって体積は210cm³。\n答え：210cm³',
    figureDescription: '縦7cm・横6cm・高さ5cmの直方体の見取図',
  },
  {
    id: 'koushiki_c3tairyoku1_chokuhoutai_ex2',
    subject: 'sansu',
    examType: 'chugaku',
    grade: 'e5',
    difficulty: 'advanced',
    question:
      '縦8cm、横6cm、高さ□cmの直方体があります。この直方体の表面積は376cm²です。高さは何cmですか。',
    answer: '10cm',
    hint: '表面積＝(縦×横＋縦×高さ＋横×高さ)×2の式に数をあてはめて、高さを逆算する。',
    explanation:
      '【解説】\n①直方体の表面積の公式を確認する。\n　表面積＝(縦×横＋縦×高さ＋横×高さ)×2\n②わかっている数値を代入する。縦8cm、横6cm、高さを□cmとすると、\n　表面積＝(8×6＋8×□＋6×□)×2＝376\n③まず縦×横を計算する。8×6＝48。\n④376はかっこの中を2倍した値なので、かっこの中を求める。376÷2＝188。\n⑤48を引いて、高さがからむ部分を求める。8×□＋6×□＝188－48＝140。\n⑥8×□と6×□をまとめると、(8＋6)×□＝14×□となるので、14×□＝140。\n⑦□＝140÷14＝10。\n⑧よって高さは10cm。検算：表面積＝(8×6＋8×10＋6×10)×2＝(48＋80＋60)×2＝188×2＝376で一致。\n答え：10cm',
    figureDescription: '縦8cm・横6cmの直方体。表面積376cm²から高さを求める',
  },
  {
    id: 'koushiki_c3tairyoku1_kakuchuu_ex1',
    subject: 'sansu',
    examType: 'chugaku',
    grade: 'e5',
    difficulty: 'basic',
    question:
      '底面が底辺8cm・高さ5cmの直角三角形で、角柱の高さが12cmの三角柱があります。この三角柱の体積は何cm³ですか。',
    answer: '240cm³',
    hint: '角柱の体積＝底面積×高さ。底面積は三角形の面積の公式（底辺×高さ÷2）で先に求める。',
    explanation:
      '【解説】\n①角柱の体積の公式を確認する。\n　体積＝底面積×高さ\n②底面積を求める。底面は直角三角形で、底辺8cm・高さ5cmなので、\n　底面積＝底辺×高さ÷2＝8×5÷2＝40÷2＝20cm²\n③角柱の高さは12cmなので、公式にあてはめる。\n　体積＝底面積×高さ＝20×12\n④20×12を計算する。20×12＝240。\n⑤よって体積は240cm³。\n答え：240cm³',
    figureDescription: '底面が底辺8cm・高さ5cmの直角三角形、角柱の高さ12cmの三角柱の見取図',
  },
  {
    id: 'koushiki_c3tairyoku1_kakuchuu_ex2',
    subject: 'sansu',
    examType: 'chugaku',
    grade: 'e5',
    difficulty: 'advanced',
    question:
      '底面が直角三角形で3辺の長さが8cm・15cm・17cm（直角をはさむ辺が8cmと15cm）、角柱の高さが10cmの三角柱があります。この三角柱の表面積は何cm²ですか。',
    answer: '520cm²',
    hint: '表面積＝底面積×2＋側面積。側面積＝底面の周の長さ×角柱の高さ。',
    explanation:
      '【解説】\n①角柱の表面積の公式を確認する。\n　表面積＝底面積×2＋側面積、側面積＝底面の周の長さ×角柱の高さ\n②底面積を求める。底面は直角三角形で、直角をはさむ2辺が8cmと15cmなので、この2辺を底辺・高さとして使える。\n　底面積＝8×15÷2＝120÷2＝60cm²\n③底面の周の長さを求める。3辺をすべて足す。\n　周の長さ＝8＋15＋17＝40cm\n④側面積を求める。角柱の高さは10cmなので、\n　側面積＝周の長さ×高さ＝40×10＝400cm²\n⑤上下2枚の底面の面積を求める。\n　底面積×2＝60×2＝120cm²\n⑥表面積は、底面2枚分と側面積を合計する。\n　表面積＝120＋400＝520cm²\n答え：520cm²',
    figureDescription: '底面が3辺8cm・15cm・17cmの直角三角形、角柱の高さ10cmの三角柱の見取図',
  },
  {
    id: 'koushiki_c3tairyoku1_enchuu_ex1',
    subject: 'sansu',
    examType: 'chugaku',
    grade: 'e5',
    difficulty: 'basic',
    question: '底面の半径3cm、高さ9cmの円柱があります。この円柱の体積は何cm³ですか。円周率は3.14とします。',
    answer: '254.34cm³',
    hint: '円柱の体積＝底面積×高さ＝(半径×半径×円周率)×高さ',
    explanation:
      '【解説】\n①円柱の体積の公式を確認する。\n　体積＝底面積×高さ＝(半径×半径×円周率)×高さ\n②底面積を求める。半径3cmなので、\n　底面積＝3×3×3.14＝9×3.14＝28.26cm²\n③高さは9cmなので、公式にあてはめる。\n　体積＝28.26×9\n④28.26×9を計算する。28.26×9＝254.34。\n⑤よって体積は254.34cm³。\n答え：254.34cm³',
    figureDescription: '底面の半径3cm・高さ9cmの円柱の見取図',
  },
  {
    id: 'koushiki_c3tairyoku1_enchuu_ex2',
    subject: 'sansu',
    examType: 'chugaku',
    grade: 'e5',
    difficulty: 'advanced',
    question: '底面の半径6cm、高さ10cmの円柱があります。この円柱の表面積は何cm²ですか。円周率は3.14とします。',
    answer: '602.88cm²',
    hint: '表面積＝底面積×2＋側面積。側面積＝底面の円周×高さ。',
    explanation:
      '【解説】\n①円柱の表面積の公式を確認する。\n　表面積＝底面積×2＋側面積、側面積＝底面の円周×高さ\n②底面積を求める。半径6cmなので、\n　底面積＝6×6×3.14＝36×3.14＝113.04cm²\n③上下2枚分の底面積を求める。\n　113.04×2＝226.08cm²\n④底面の円周を求める。円周＝直径×円周率なので、\n　円周＝(6×2)×3.14＝12×3.14＝37.68cm\n⑤側面積を求める。円柱の高さは10cmなので、\n　側面積＝円周×高さ＝37.68×10＝376.8cm²\n⑥表面積は、底面2枚分と側面積を合計する。\n　表面積＝226.08＋376.8＝602.88cm²\n答え：602.88cm²',
    figureDescription: '底面の半径6cm・高さ10cmの円柱の見取図',
  },
];
