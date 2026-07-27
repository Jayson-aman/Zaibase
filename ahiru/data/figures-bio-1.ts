import type { Figure } from './figures';

// 理科：生物の構造図バッチ1（花のつくり・こん虫のからだ・心臓・目など）。
// 「写真も絵も見たことがなくて想像できない」という声を受けて追加。
// hidePartsには、その問題がまさに答えとして聞いている部位キーを入れ、
// 図では引き出し線だけ残して名前は「？」にする（答えを先に見せないため）。
export const figuresBio1: Record<string, Figure> = {
  // アブラナなどの花のつくり。やく（花粉が入った袋）の名前を答える問題なので、
  // やくのラベルだけ隠す（がく・花弁・花糸・柱頭・花柱・子房・胚珠は表示）。
  chugaku2026_rika_061: {
    kind: 'bioDiagram',
    template: 'flower',
    hideParts: ['yaku'],
  },
  // こん虫のからだ（頭部・胸部・腹部）。あし・はねがどこから出るか問う問題なので、
  // 胸部のラベルだけ隠す。
  chugaku2026_rika_063: {
    kind: 'bioDiagram',
    template: 'insectBody',
    hideParts: ['kyoubu'],
  },
  // ヒトの心臓の4つの部屋。全身から戻った血液が最初に入る部屋（右心房）を
  // 答える問題なので、右心房のラベルだけ隠す。
  chugaku2026_rika_066: {
    kind: 'bioDiagram',
    template: 'heart',
    hideParts: ['usinbou'],
  },
  // アブラナの花の観察（がく4・花びら4・おしべ6＝4長2短）を科名で答える問題。
  // 花の基本構造そのものが分かれば十分なので、ラベルはすべて表示。
  chugaku2026_rika_070: {
    kind: 'bioDiagram',
    template: 'flower',
  },
  // ヒトの目のつくり。光の量を調節する部分（ひとみ・虹彩）を答える問題なので、
  // こう彩のラベルを隠す。
  chugaku2026_rika_073: {
    kind: 'bioDiagram',
    template: 'eye',
    hideParts: ['koushi'],
  },
};
