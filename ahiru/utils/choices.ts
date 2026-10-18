// 選択肢の並べ替え。
//
// データ側では正解が1番目に偏っている問題群があり（正解の位置を数えると、
// 1番目201・2番目146・3番目139・4番目7）、いちばん上を選ぶだけで当たってしまう。
// 表示のときに並べ替えて、位置では当てられないようにする。
//
// ・同じ問題は同じ起動のあいだ同じ並びにする（再描画のたびに入れかわると混乱する）
// ・起動のたびに並びは変わる
// ・選択肢どうしが位置や記号で参照しあっているもの（「上のすべて」「ア・イ」「A」「B」の記号つき）は、
//   並べ替えると問題として成り立たなくなるので、そのままにする

const SESSION_SEED = Math.floor(Math.random() * 0x7fffffff);

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 記号つき・相互参照つきの選択肢か（並べ替えてはいけない） */
function isOrderDependent(choices: string[]): boolean {
  return choices.some((c) => {
    const t = c.trim();
    if (/^[A-Da-dＡ-Ｄ][\s.．:：)）]/.test(t)) return true;                 // 「A 〜」「A. 〜」
    if (/^[ア-エ①-④⑴-⑷1-4１-４][\s.．:：)）、]/.test(t)) return true;      // 「ア 〜」「① 〜」
    if (/(上の|右の|左の|下の|以上の|これらの|いずれも|すべて|全て|どれも|どちらも|両方|上記|a〜|ア〜)/.test(t)) return true;
    if (/^[ア-エ①-④ABCD]([・、,と及び]|および)[ア-エ①-④ABCD]/.test(t)) return true; // 「アとウ」
    return false;
  });
}

export function shuffledChoices(questionId: string, choices: string[] | undefined): string[] | undefined {
  if (choices == null || choices.length < 2) return choices;
  if (isOrderDependent(choices)) return choices;
  const out = [...choices];
  const r = rng(hash(questionId) ^ SESSION_SEED);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
