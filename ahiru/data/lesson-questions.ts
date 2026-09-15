// ───────────────────────────────────────────────────────────────
// 通常の教科書単元 → その単元に関係する問題の割り出し
// ───────────────────────────────────────────────────────────────
// 公式集（koushiki）は問題idと公式idが対応しているので正確に紐づくが、
// 通常の単元は900以上あり、問題側に単元のタグが無い（15,000問への
// 再タグ付けが必要になる）。そこで、単元タイトルから特徴語を取り出して
// 問題文に含まれるかで拾う「関係する問題」方式にしている。
// 正確な紐づけではないので、画面上も「この単元に関係する一問一答」と
// 断って出すこと。
//
// 汎用的すぎる語（「利用」「学校」「未来」など）を特徴語にすると
// 無関係な問題が大量に当たる。これは語ごとにリストを持って手で
// 除外するのではなく、その教科の問題全体での出現数で自動的に判定する
// （出過ぎる語＝特徴的でない語、とみなして使わない）。

import type { Question } from './questions-meta';
import type { Lesson } from './lesson-types';

// 「太陽」「秋田」「求め方」のような語は、その教科のあちこちの問題に出てくる。
// そういう語で拾うと単元と関係のない問題が並んでしまうので、当たりすぎる語は
// 特徴語として使わない。しきい値は低めにしてある（数を増やすより、
// 関係のない問題を出さないことを優先する）。
/** 1つの特徴語がこの割合より多くの問題に当たったら、特徴的でないとみなす */
const MAX_MATCH_RATIO = 0.015;
/** 同上の下限（母数が小さい教科で割合だけだと厳しすぎるため） */
const MIN_MATCH_CEILING = 12;
/** これより長い問題文は、その場で解く一問一答には向かない（大問・長文） */
const MAX_QUESTION_LENGTH = 200;

/**
 * 単元名によく出るが、話題そのものを表さない語。特徴語にすると
 * 無関係な問題に当たる（例:「売価の求め方」の「求め方」が
 * 速さの問題の「正しい求め方」に当たってしまう）。
 */
const NOT_A_TOPIC = new Set([
  '求め方', '答え方', '考え方', '解き方', '使い方', '書き方', '読み方', '表し方', '見分け方',
  '問題', '応用問題', '練習', '復習', '総合', '基本', '基礎', '応用', '発展', '演習',
  '性質', '種類', '特徴', '意味', '関係', '利用', '方法', '手順', '順序', '比較',
  'ポイント', 'きまり', '約束', '全体', '部分', 'しくみ', '仕組み', '違い', '使い分け',
  'からだ', 'つくり', '読み取り', '識別', '区別', '判別', '整理', '総整理', '完全マスター',
]);

/** 単元名の飾り（内容を表さない語尾）。特徴語から落とす。 */
const DECORATION = /(完全マスター|総仕上げ|マスター|発展編|総合演習|入門|演習|まとめ|完成)$/;
/** 「〜の応用」「〜の発展」のように、前の語だけが内容を表すもの */
const SUFFIX_NO = /の(応用|発展|基本|基礎|完成|しくみ|考え方|解法|練習)$/;

/**
 * 単元タイトルから特徴語の候補を、長い（＝具体的な）順に作る。
 * かっこの中や副題にこそ具体的な語が入っていることが多いので、
 * 主題だけでなく全部を候補にして、当たらない候補は自然に捨てる。
 * 例: '文章題の解法マスター（仕事算・植木算・鶴亀算）'
 *   → ['文章題の解法', '仕事算', '植木算', '鶴亀算', ...]
 */
export function extractLessonKeywords(title: string): string[] {
  const segments = title
    .replace(/[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]/g, '')
    // かっこ・コロン・ダッシュで、主題・副題・補足に切り分ける
    .split(/[：:（）()【】[\]]|\s?[─—–]{1,2}\s?/);

  const candidates: string[] = [];
  const add = (raw: string) => {
    let s = raw.trim();
    // 飾りは重ねて付いていることがある（例: 〜の発展 完全マスター）
    for (let i = 0; i < 3; i++) {
      const next = s.replace(DECORATION, '').replace(SUFFIX_NO, '').trim();
      if (next === s) break;
      s = next;
    }
    // 飾りを落としたあとに助詞が残ることがある（例: 単位量あたりの大きさの）
    s = s.replace(/[のをがはにでとへ]$/, '').trim();
    if (s.length < 2) return;
    if (NOT_A_TOPIC.has(s)) return;
    // 「それぞれの意味」「この単元」など、指示語で始まる語は話題を表さない
    if (/^(それ|これ|あれ|その|この|あの|どの|ここ)/.test(s)) return;
    // 英単語だけの語（little・never・no）は、英文の中にたまたま出てくるだけの
    // ことが多く、単元と関係のない問題を拾う。単元名の日本語の語で探す。
    if (/^[A-Za-z][A-Za-z ]*$/.test(s)) return;
    candidates.push(s);
  };

  for (const seg of segments) {
    add(seg);
    // 「仕事算・植木算・鶴亀算」のように並べてあるものは、1つずつでも探す
    if (/[・、,／/]/.test(seg)) seg.split(/[・、,／/]/).forEach(add);
    // 「AとB」で並んだ単元は片方ずつでも探せるようにする。
    // 「ことわざ」のような語を割ってしまわないよう、両側が2文字以上のときだけ。
    const andParts = seg.split('と');
    if (andParts.length === 2 && andParts[0].trim().length >= 2 && andParts[1].trim().length >= 2) {
      andParts.forEach(add);
    }
    // 「立体の切断」「四則演算の混合計算」のように、「の」でつながった
    // それぞれの語でも探す（全体で当たらなかったときの受け皿）。
    if (seg.includes('の')) seg.split('の').forEach(add);
  }
  // 長い（具体的な）語から順に試す
  return [...new Set(candidates)].sort((a, b) => b.length - a.length);
}

type Options = {
  /** MAX限定の問題を含めてよいか */
  isMax: boolean;
  /** 返す最大件数 */
  limit?: number;
};

/**
 * その単元に関係する問題を返す。見つからなければ空配列。
 * pool はその教科の問題（useSubjectQuestions から渡す）。
 */
export function getRelatedQuestions(lesson: Lesson, pool: Question[], opts: Options): Question[] {
  const { isMax, limit = 5 } = opts;
  if (pool.length === 0) return [];

  const examType = lesson.examType ?? 'chugaku';
  const base = pool.filter((q) => {
    // 公式集の例題は公式のページ側にその公式専用として出しているので、
    // ここには混ぜない（買い切りロックの判定もあちらに一任している）。
    if (q.id.startsWith('koushiki_')) return false;
    if ((q.examType ?? 'chugaku') !== examType) return false;
    if (q.maxOnly && !isMax) return false;
    // 長文読解は設問だけ出しても解けないので、その場で解く一問一答には向かない。
    // 本文がpassageではなくquestionに直接書かれている大問もあるため、長さでも弾く。
    if (q.passage != null && q.passage !== '') return false;
    if (q.question.length > MAX_QUESTION_LENGTH) return false;
    return true;
  });
  if (base.length === 0) return [];

  const ceiling = Math.max(MIN_MATCH_CEILING, Math.floor(base.length * MAX_MATCH_RATIO));

  for (const keyword of extractLessonKeywords(lesson.title)) {
    const hits = base.filter((q) => q.question.includes(keyword));
    // 2文字の語は「枕詞」「約数」のような専門語のこともあれば、「太陽」「秋田」の
    // ような一般語のこともある。長さでは区別できないので、ごく少数の問題にしか
    // 出てこないときだけ専門語とみなして使う。
    const limitForKeyword = keyword.length <= 2 ? Math.min(ceiling, 5) : ceiling;
    // 0件なら次の候補へ。出過ぎる語は特徴的でないので使わない。
    if (hits.length === 0 || hits.length > limitForKeyword) continue;
    // やさしい順に並べて、頭から必要数だけ返す
    const order = { basic: 0, standard: 1, advanced: 2 } as const;
    return [...hits].sort((a, b) => order[a.difficulty] - order[b.difficulty]).slice(0, limit);
  }
  return [];
}
