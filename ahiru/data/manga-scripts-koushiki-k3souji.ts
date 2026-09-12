import type { MangaScript } from './manga-types';

export const mangaScriptsKoushikiK3Souji: Record<string, MangaScript> = {
  koushiki_k3souji_cheva_manga: {
    id: 'koushiki_k3souji_cheva_manga',
    title: 'チェバの定理を発見しよう',
    panels: [
      { speaker: 't', line: '三角形ABCの中に点Pをとって、A・B・CからPを通る直線をそれぞれ対辺までのばすよ。これで辺が3か所に分けられるね。' },
      { speaker: 's1', line: 'BD:DC、CE:EA、AF:FBの3つの比ができました。バラバラな数字になりそうですね。' },
      { speaker: 's2', line: 'でも先生、これって点Pの位置を変えても、この3つの比の間に何か規則がありそうな気がします…！' },
      { speaker: 't', line: 'いいところに気づいたね。実際に三角形の面積を使って比べてみよう。△ABPと△ACPの面積の比は、底辺BP・PCの比と同じになるんだったね。' },
      { speaker: 's1', line: 'あ、面積比＝底辺の比！ これ、平行線と面積のところでやりました。' },
      { speaker: 't', line: 'その通り。同じように考えると、BD:DC＝△ABD:△ACD＝△PBD:△PCDになる。この2つの差や比をうまく組み合わせると…' },
      { speaker: 's2', line: 'BD:DC＝△PAB:△PACになりますね！ 面積を仲立ちにすると、線分の比が三角形の比に変身するんですね。' },
      { speaker: 't', line: '3つの頂点でも同じ考え方をすると、それぞれの比がすべて三角形の面積比で表せる。これを全部かけ合わせるとどうなるかな？' },
      { speaker: 's1', line: '面積が上と下で全部同じものが出てきて…あ！ ぜんぶ約分されて消えちゃいます！' },
      { speaker: 't', line: 'その通り！ だから点Pがどこにあっても、次の式が必ず成り立つ。これがチェバの定理だよ。', emphasis: false },
      { speaker: 't', line: '（BD/DC）×（CE/EA）×（AF/FB）＝ 1', emphasis: true },
      { speaker: 's2', line: '3つの比をかけると必ず1になる…！ 点Pをどこに動かしても崩れないなんて不思議です。' },
      { speaker: 't', line: 'この「かけると1」という形は、図形の中に隠れた対称性を見つけたときによく出てくる形なんだ。覚えておくと、面積比から比を求める問題が一気に解きやすくなるよ。' },
    ],
  },
};
