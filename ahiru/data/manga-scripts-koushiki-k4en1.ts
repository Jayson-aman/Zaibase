import type { MangaScript } from './manga-types';

export const mangaScriptsKoushikiK4En1: Record<string, MangaScript> = {
  koushiki_k4en1_gaishin_naishin_suishin_manga: {
    id: 'koushiki_k4en1_gaishin_naishin_suishin_manga',
    title: '外心・内心・垂心を発見しよう',
    panels: [
      { speaker: 't', line: '三角形の3辺、それぞれの垂直二等分線を引いてみよう。まずAB、次にBC、それぞれの垂直二等分線をひくよ。' },
      { speaker: 's1', line: '2本引いただけなのに、もう交わっちゃいました!これって偶然ですか?' },
      { speaker: 's2', line: '垂直二等分線の上にある点って、両端から同じ距離になる点でしたよね。' },
      { speaker: 't', line: 'いいところに気づいたね。ABの垂直二等分線上の点はAとBから等しい距離、BCの垂直二等分線上の点はBとCから等しい距離。この2つの交点をOとすると…' },
      { speaker: 's1', line: 'OA=OBと、OB=OCが両方成り立つから…あ、OA=OCも自動的に成り立ちますね!' },
      { speaker: 't', line: 'その通り!ということは、Oは辺CAの垂直二等分線が満たすべき条件(CAから等しい距離)も、すでに満たしていることになる。' },
      { speaker: 's2', line: 'つまり3本目の垂直二等分線も、わざわざ引かなくても絶対にOを通るってことですか!?' },
      { speaker: 't', line: 'そういうこと。3本の直線が「1点で交わる」ことを証明したいときは、いきなり3本同時に考えるんじゃなくて、まず2本の交点を決めて、その点が3本目の条件も満たしていることを示す、というのがこの手の証明の定番パターンなんだ。' },
      { speaker: 't', line: 'この点Oは3頂点から等しい距離にあるから、A、B、Cを全部通る円(外接円)の中心になる。これが「外心」だよ。' },
      { speaker: 't', line: '外心 = 3辺の垂直二等分線の交点 = 3頂点から等しい距離にある点(外接円の中心)', emphasis: true },
      { speaker: 's1', line: '角の二等分線でも同じことができそうですね!今度は頂点からじゃなくて、辺までの距離が等しくなるパターンですか?' },
      { speaker: 't', line: '大正解。角の二等分線の交点は「内心」、垂線の交点は「垂心」と呼ばれていて、名前は違うけど「2本引いて交点を決め、3本目の条件も自動的に満たされることを確かめる」という証明の発想は全部共通なんだ。この考え方、覚えておいて損はないよ。' },
    ],
  },
};
