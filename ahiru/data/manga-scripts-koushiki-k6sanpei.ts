import type { MangaScript } from './manga-types';

export const mangaScriptsKoushikiK6Sanpei: Record<string, MangaScript> = {
  koushiki_k6sanpei_kukan_zukei_manga: {
    id: 'koushiki_k6sanpei_kukan_zukei_manga',
    title: '空間図形に三平方の定理を使おう',
    panels: [
      { speaker: 't', line: '直方体の対角線、たとえば頂点Aから真反対の頂点Gまでの長さを求めてみよう。定規で直接測れない長さだね。' },
      { speaker: 's1', line: '直方体には直角がたくさんありますよね。三平方の定理が使えそうな気がします。' },
      { speaker: 't', line: 'いいところに気づいたね。まず底面の対角線ACに注目してみよう。AB、ADのどちらも分かっているとする。' },
      { speaker: 's2', line: '長方形の対角線だから、AC²=AB²+AD²ですね!三平方の定理そのままです。' },
      { speaker: 't', line: 'その通り。じゃあ、このACと、直方体の高さAE(=CG)を使うと、AGはどうなるかな?' },
      { speaker: 's1', line: '三角形ACGに注目すればいいのか…あ、CGは底面に垂直だから、ACとも垂直に交わりますね!直角三角形になります!' },
      { speaker: 't', line: '完璧。ということは、この三角形ACGにもう一度三平方の定理が使えるね。' },
      { speaker: 's2', line: 'AG²=AC²+CG²で、ACのところにさっき求めたAB²+AD²を代入すると…AG²=AB²+AD²+AE²になります!' },
      { speaker: 't', line: '直方体の対角線: AG²=AB²+AD²+AE²(3辺すべての2乗の和)', emphasis: true },
      { speaker: 's1', line: '三平方の定理を2回使ったら、3辺全部を2乗して足すだけの式になるんですね!平面が立体に拡張された感じがします。' },
      { speaker: 't', line: 'そういうこと。実はこの考え方、円すいや角すいの高さを求めるとき、それに座標が(x,y,z)の3つになったときの2点間の距離を求めるときにも、まったく同じ発想が使える。「垂直に交わる直角三角形を見つけて三平方の定理」という基本は、平面でも空間でも変わらないんだ。' },
    ],
  },
};
