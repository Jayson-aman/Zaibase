// 図形データから「動く図解の説明文」を自動で組み立てる。
//
// ■ なぜ必要か
// 問題集の図1,320枚のうち798枚（60%）には steps が無く、
// 画面では線がすうっと現れて終わりだった。何の図なのか、
// どの数がどこの長さなのか、どこを見ればよいのかが、
// 文字では一切示されていない状態だった。
//
// ■ なぜ手書きではなくデータから作るのか
// 798枚を手で書くと、図に入っている数値と文章の数値が食いちがう事故が必ず起きる
// （過去に実際に起きていて、CLAUDE.md にも「図解の説明に書く数値は、その図形データに
// 入っている数値と必ず突き合わせる」と残してある）。
// ここでは figure の中にある値だけを読み上げるので、**原理的に食いちがわない**。
// さらに、あとから足す図にも自動で説明がつく。
//
// ■ 手書きが常に優先
// figure.steps があればそちらを使う（FigureView 側で分岐）。
// この関数は steps が無いときだけ呼ばれる、下支えの仕組み。
//
// ■ 説明の型（どの図でも同じ順番にして、読む側が迷わないようにする）
//   ① これは何の図か
//   ② 図に書きこまれている数（長さ・角度）を1つずつ
//   ③ 図の中の印が何を意味しているか（直角マーク・等しい印・高さ・補助線）
//   ④ この図で何を聞かれているか
//   ⑤ 答えと、図のどこを使ったか
// ④⑤は問題が渡されたときだけ付く。

import type { Figure } from './figures';

/** 図に添える問題（問題文と答えだけ使う） */
export type FigureQuestion = { question?: string; answer?: string };

const KANSUJI = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

/** 頂点の数から図形の呼び名を決める */
function polygonName(n: number): string {
  if (n === 3) return '三角形';
  if (n === 4) return '四角形';
  if (n >= 5 && n <= 10) return `${KANSUJI[n]}角形`;
  return `${n}角形`;
}

/** 頂点ラベルをつないだ呼び名（例：三角形ABC）。ラベルが無ければ形の名前だけ */
function shapeTitle(pts: { label?: string }[]): string {
  const name = polygonName(pts.length);
  const labels = pts.map((p) => p.label).filter(Boolean) as string[];
  return labels.length === pts.length ? `${name}${labels.join('')}` : name;
}

/** 辺 i の呼び名（両端の頂点ラベルがそろっていれば「辺AB」、なければ「○番目の辺」） */
function sideName(pts: { label?: string }[], i: number): string {
  const a = pts[i]?.label;
  const b = pts[(i + 1) % pts.length]?.label;
  return a && b ? `辺${a}${b}` : `${KANSUJI[i + 1] || i + 1}番目の辺`;
}

/** 問題文から「何を求めるか」を短く取り出す。取り出せなければ null */
function askedFor(text: string): string | null {
  const t = text.replace(/\s+/g, '');
  // 「〜を求めなさい」「〜を答えよ」などの直前をもらう
  const m = t.match(/([^。、）\]]{2,24})(?:の長さ|の大きさ|の面積|の体積|の値|の座標)?を(?:求め|答え)/);
  if (m) {
    // 文の途中で切れて助詞から始まることがある（「を底辺を軸として…の体積」）。
    // 先頭の助詞・記号を落としてから使う。落としきれない形は使わない。
    const target = m[0]
      .replace(/を(?:求め|答え).*$/, '')
      .replace(/^[をがはにでとものやからまで、。・）\]]+/, '');
    if (target.length >= 3 && target.length <= 28) return target;
  }
  return null;
}

/**
 * 空でない文字列だけ集める。
 * あわせて強調の ** を落とす。FigureView はマークダウンを解釈しないので、
 * 残しておくと画面に「**ならび順**」のようにそのまま記号が出てしまう。
 */
const keep = (xs: (string | null | undefined)[]): string[] =>
  xs
    .map((x) => (x == null ? '' : String(x).replace(/\*\*/g, '').trim()))
    .filter((x) => x.length > 0);

// ── 図の種類ごとの組み立て ────────────────────────────

function polygonSteps(f: Extract<Figure, { kind: 'polygon' }>): string[] {
  const pts = f.points ?? [];
  if (pts.length < 3) return [];
  const out: string[] = [];

  const title = shapeTitle(pts);
  const labels = pts.map((p) => p.label).filter(Boolean) as string[];
  out.push(
    labels.length === pts.length
      ? `${title}の図。頂点には ${labels.join('・')} と名前がついている。まず、どの点がどこにあるかを確かめる。`
      : `${title}の図。まず全体の形をつかむ。`,
  );

  // ② 図に書きこまれている長さ
  const given = (f.sideLabels ?? [])
    .map((s, i) => (s ? `${sideName(pts, i)}が${s}` : null))
    .filter(Boolean) as string[];
  if (given.length) {
    out.push(`図に書きこまれている長さは ${given.join('、')}。この数はすべて図の中にあるので、まず書き出しておく。`);
  }

  // ③ 印の意味
  if (f.rightAngles?.length) {
    const names = f.rightAngles.map((i) => (pts[i]?.label ? `${pts[i]!.label}` : '')).filter(Boolean);
    out.push(
      names.length
        ? `小さな四角の印がついている角（${names.map((n) => `∠${n}`).join('・')}）は直角、つまり90度という意味。直角があると三平方の定理や面積の式が使える。`
        : '小さな四角の印がついている角は直角、つまり90度という意味。',
    );
  }
  if (f.equalSides?.length) {
    out.push('同じ本数の短い線（ティック）がついている辺どうしは、長さが等しいという印。長さが書かれていなくても、等しいことは使ってよい。');
  }
  if (f.equalAngles?.length) {
    out.push('同じ形の弧がついている角どうしは、大きさが等しいという印。等しい角が2組あれば、相似を言うことができる。');
  }
  if (f.heights?.length) {
    const hs = f.heights.map((h) => h.label).filter(Boolean) as string[];
    out.push(
      hs.length
        ? `底辺に垂直に下ろした線が高さで、${hs.join('・')}。面積の式で使う高さは、必ず底辺と垂直な長さのほうで、斜めの辺ではない。`
        : '底辺に垂直に下ろした線が高さ。面積の式で使うのはこの垂直な長さで、斜めの辺ではない。',
    );
  }
  if (f.diagonals?.length) {
    const ds = f.diagonals
      .map(([a, b]) => (pts[a]?.label && pts[b]?.label ? `${pts[a]!.label}${pts[b]!.label}` : ''))
      .filter(Boolean);
    out.push(
      ds.length
        ? `中を通る線（${ds.join('・')}）は対角線。対角線を引くと図が三角形に分かれるので、分けた三角形どうしを比べられるようになる。`
        : '中を通る線は対角線。引くと図が三角形に分かれ、分けた三角形どうしを比べられるようになる。',
    );
  }
  if (f.segments?.length) {
    out.push('点線や細い線は、あとから足した補助線。もとの図形の辺ではないが、これを引くと使える性質が増える。');
  }
  if (f.circles?.length) {
    out.push('図の中の円にも注目する。円がからむときは、中心と接点を結ぶ線が直角になることが多い。');
  }
  if (f.regions?.length) {
    out.push('色を分けて塗ってあるのは、比べてほしい部分どうし。どこと どこ を見くらべるのかが、色で分かるようにしてある。');
  }

  // 頂点の数だけで必ず言えることを足す。
  // 数値も印も入っていない図（正三角形・正六角形など）は、ここが唯一の手がかりになる。
  const n = pts.length;
  const len = (i: number) => {
    const a = pts[i]!;
    const b = pts[(i + 1) % n]!;
    return Math.hypot(a.x - b.x, a.y - b.y);
  };
  const sides = pts.map((_, i) => len(i));
  const regular = n >= 3 && sides.every((v) => Math.abs(v - sides[0]!) < sides[0]! * 0.02);
  if (regular) {
    out.push(
      `どの辺も同じ長さにかいてあるので、正${polygonName(n).replace('角形', '')}角形。正多角形は辺も角もすべて等しいので、1つ分かれば全部分かる。1つの外角は 360 ÷ ${n} ＝ ${Math.round((360 / n) * 100) / 100}度。`,
    );
  } else if (n === 3) {
    out.push('三角形の内角の和は必ず180度。2つの角が分かれば、残りの1つは引き算で出る。');
  } else if (n >= 4) {
    out.push(
      `${polygonName(n)}は、1つの頂点から対角線を引くと ${n - 2} 個の三角形に分けられる。だから内角の和は 180 × ${n - 2} ＝ ${180 * (n - 2)}度。`,
    );
  }
  return out;
}

function circleSteps(f: Extract<Figure, { kind: 'circle' }>): string[] {
  const out: string[] = ['円の図。まず、まるい線（円周）と、その真ん中の点（中心）を区別する。'];
  if (f.showCenter) out.push('中心にも点が打ってある。中心から円周までの長さはどこも同じで、これが半径。');
  if (f.radiusLabel) out.push(`半径は ${f.radiusLabel}。円のどの向きに測っても同じ長さになる。`);
  const pts = (f.points ?? []).map((p) => p.label).filter(Boolean) as string[];
  if (pts.length) out.push(`円周の上に ${pts.join('・')} の点がとってある。どの点も中心から同じ距離にある。`);
  if (f.chords?.length) {
    out.push('円周上の点どうしを結んだ直線が弦。弦と中心を結ぶ線を足すと、二等辺三角形ができるのが解き方の入口になることが多い。');
  }
  if (f.sector) {
    out.push(
      f.sector.label
        ? `色のついた部分がおうぎ形で、中心の角は ${f.sector.label}。おうぎ形は円全体の「中心角 ÷ 360」の割合にあたる。`
        : '色のついた部分がおうぎ形。おうぎ形は円全体の「中心角 ÷ 360」の割合にあたる。',
    );
  }
  if ((f.points?.length ?? 0) >= 3 && f.chords?.length) {
    out.push('中心から見た角（中心角）と、円周上の点から見た角（円周角）では、中心角のほうがちょうど2倍になる。同じ弧を見ているかどうかを確かめる。');
  }
  return out;
}

/**
 * coordinate は「座標平面のグラフ」用の種類だが、理科では
 * 日食（地球・月・太陽）や光の屈折、太陽系の並びのように、
 * **ただ点を置いて位置関係を示す図**としても使われている。
 * これをグラフとして説明すると「横がx軸」「直角三角形をつくる」のような
 * まったく的外れな文が出てしまうので、先に見分ける。
 *
 * 見分け方：式のグラフ（直線・放物線・双曲線）も、面積を見る多角形も無く、
 * かつ点の名前が日本語（地球・月・太陽…）なら、それはグラフではない。
 */
function isSchematic(f: Extract<Figure, { kind: 'coordinate' }>): boolean {
  if (f.lines?.length || f.parabolas?.length || f.hyperbolas?.length || f.polygon?.length) return false;
  const labels = (f.points ?? []).map((p) => p.label ?? '');
  return labels.some((l) => /[ぁ-んァ-ヶ一-龠]/.test(l));
}

function schematicSteps(f: Extract<Figure, { kind: 'coordinate' }>): string[] {
  const named = (f.points ?? []).filter((p) => p.label);
  if (named.length < 2) return [];
  // 左から右へ実際にならんでいるときだけ、その順を言う。
  // 斜めに置かれた点まで「左から右へ」と言い切ると、図とちがう説明になる。
  const inLine = named.every((p) => Math.abs(p.y - named[0]!.y) < 0.5);
  const sorted = [...named].sort((a, b) => a.x - b.x);
  const out = [
    'ものの位置関係を表した図。グラフではないので、目もりの数値そのものではなく、ならび順と、たがいの間かくに注目する。',
    inLine
      ? `左から右へ ${sorted.map((p) => p.label).join('・')} の順にならんでいる。`
      : `図の中に置かれているのは ${named.map((p) => p.label).join('・')}。それぞれがどのあたりにあるかを確かめる。`,
  ];
  if (f.segments?.length) out.push('結んである線は、光の道すじや、ものとものを結ぶ向きを表している。どこからどこへ向かっているかを目で追う。');
  out.push('図の中の距離は、分かりやすくするために実際の比とは変えてあることが多い。順番と向きを読み取るための図だと考える。');
  return out;
}

function coordinateSteps(f: Extract<Figure, { kind: 'coordinate' }>): string[] {
  if (isSchematic(f)) return schematicSteps(f);
  // 名前のない点だけがならぶ図は、方眼の上の「格子点」を表していることが多い
  // （道順の数え方や、点の選び方の問題）。グラフとして説明すると的外れになる。
  const pts = f.points ?? [];
  const noLine = !f.lines?.length && !f.parabolas?.length && !f.hyperbolas?.length && !f.polygon?.length;
  if (noLine && pts.length >= 4 && pts.every((p) => !p.label)) {
    const xs = [...new Set(pts.map((p) => p.x))].length;
    const ys = [...new Set(pts.map((p) => p.y))].length;
    return [
      '方眼の上に点がならんでいる図。線の交わるところ（格子点）が、選んだり通ったりできる場所を表している。',
      `横に${xs}列、たてに${ys}行の点があり、全部で${pts.length}個。まず何個あるかを数えてから考える。`,
      '道順を数える問題では、それぞれの交差点に「左から来る数 ＋ 下から来る数」を書きこんでいくと、もれも重なりもなく数えられる。',
      '点を選んで図形をつくる問題では、3点が一直線にならぶ組だけは三角形にならないので、そこを数から引く。',
    ];
  }
  const out: string[] = ['座標平面の図。横がx軸、たてがy軸で、交わったところが原点。まず目もりを確かめる。'];
  for (const l of f.lines ?? []) {
    const dir = l.a > 0 ? '右上がり' : l.a < 0 ? '右下がり' : '横ばい';
    out.push(
      `直線 ${l.label ?? `y＝${l.a}x＋${l.b}`}。xの係数が${l.a}なので${dir}で、y軸とは (0, ${l.b}) で交わる。`,
    );
  }
  for (const p of f.parabolas ?? []) {
    out.push(`曲線 ${p.label ?? `y＝${p.a}x²`}。${p.a > 0 ? '下に凸（上向き）' : '上に凸（下向き）'}の放物線で、原点の近くはゆるやか、はなれるほど急になる。`);
  }
  for (const h of f.hyperbolas ?? []) {
    out.push(`曲線 ${h.label ?? `y＝${h.k}／x`}。反比例のグラフで、2本の曲線に分かれ、原点は通らない。`);
  }
  const named = (f.points ?? []).filter((p) => p.label);
  if (named.length) {
    out.push(
      `印のついている点は ${named.map((p) => `${p.label}(${p.x}, ${p.y})`).join('、')}。横にいくつ、たてにいくつ進んだ場所かを読み取る。`,
    );
  }
  if (f.segments?.length) out.push('点と点を結んだ線分も引いてある。長さを求めるときは、横の差とたての差で直角三角形をつくる。');
  if (f.polygon?.length) {
    out.push('色をつけた部分が、面積を考える図形。x軸やy軸にのっている辺を底辺にすると、高さが座標からそのまま読める。');
  }
  return out;
}

function solidSteps(f: Extract<Figure, { kind: 'solid' }>): string[] {
  const NAME: Record<string, string> = {
    cube: '立方体',
    cuboid: '直方体',
    cylinder: '円柱',
    cone: '円すい',
    triangularPrism: '三角柱',
    sphere: '球',
  };
  const name = NAME[f.shape] ?? '立体';
  const out: string[] = [`${name}の図。平面の紙に描いてあるが、おくゆきのある立体として見る。`];
  const L = f.labels ?? {};
  const given = keep([
    L.width && `横が${L.width}`,
    L.depth && `おくゆきが${L.depth}`,
    L.height && `高さが${L.height}`,
    L.radius && `半径が${L.radius}`,
    L.slant && `母線が${L.slant}`,
  ]);
  if (given.length) out.push(`書きこまれている長さは ${given.join('、')}。どの向きの長さかを、図と見くらべて確かめる。`);

  if (f.shape === 'cuboid' || f.shape === 'cube' || f.shape === 'cylinder' || f.shape === 'triangularPrism') {
    out.push('柱の形をした立体は、底面をそのまま真上に積み上げた形。だから体積は「底面積 × 高さ」で求まる。');
  }
  if (f.shape === 'cone') {
    out.push('とがった立体（すい）は、同じ底面・同じ高さの柱にちょうど3つ入る。だから体積は柱の3分の1になる。');
    if (L.slant && L.radius) {
      out.push(`ななめの長さ（母線 ${L.slant}）と、底面の半径 ${L.radius}、そして高さは直角三角形をつくる。母線がいちばん長い斜辺になる。`);
    }
  }
  if (f.shape === 'sphere') {
    out.push('球は、体積が 4/3 × π × 半径³、表面積が 4 × π × 半径²。体積は3乗、表面積は2乗と、次数で区別する。');
  }
  if (f.shape === 'cylinder' || f.shape === 'cone') {
    out.push('側面を切り開くと、円柱は長方形、円すいはおうぎ形になる。切り開いた辺の長さは、底面の円周と同じ長さになっている。');
  }
  return out;
}

function numberLineSteps(f: Extract<Figure, { kind: 'numberLine' }>): string[] {
  const out: string[] = [`数直線の図。${f.min} から ${f.max} までを、左から右へ大きくなる向きにとってある。`];
  if (f.step) out.push(`目もりは ${f.step} ごと。1目もりがいくつ分なのかを先に確かめる。`);
  const named = (f.points ?? []).filter((p) => p.label);
  if (named.length) out.push(`印がついているのは ${named.map((p) => `${p.label}（${p.x}）`).join('、')}。`);
  if ((f.points ?? []).some((p) => p.open)) {
    out.push('白ぬきの丸は「その数をふくまない」、ぬりつぶした丸は「その数をふくむ」という印。等号がつくかどうかの合図になる。');
  }
  if (f.segments?.length) out.push('太い線で示した部分が、当てはまる範囲。どこからどこまでかを、目もりで読み取る。');
  return out;
}

function stratumSteps(f: Extract<Figure, { kind: 'stratum' }>): string[] {
  const cols = f.columns ?? [];
  const out: string[] = ['地層の柱状図。地面を掘ったときに、どの層がどの順で重なっているかを棒で表したもの。'];
  out.push('地層は下から順に積もるので、下にある層ほど古い。いちばん上が最も新しい。');
  const names = cols.map((c) => c.label).filter(Boolean) as string[];
  if (names.length > 1) {
    out.push(`${names.join('・')} の${names.length}地点を並べてある。同じ層をさがして横に結ぶと、地層のかたむきが分かる。`);
  }
  const tops = cols.map((c) => c.topLabel).filter(Boolean) as string[];
  if (tops.length) out.push(`いちばん上に書いてあるのは地表の高さ（${tops.join('・')}）。比べるときは、この高さをそろえてから読む。`);
  const layerNames = [...new Set(cols.flatMap((c) => (c.layers ?? []).map((l) => l.name)))];
  if (layerNames.length) out.push(`出てくる層は ${layerNames.join('・')}。粒の大きさは、れき > 砂 > どろ の順に小さくなる。`);
  out.push('粒が大きいほど岸に近いところで積もるので、下から上へ粒が小さくなっていれば、海がだんだん深くなったことを表している。');
  return out;
}

function circuitSteps(f: Extract<Figure, { kind: 'circuit' }>): string[] {
  const par = f.layout === 'parallel';
  const out: string[] = [`回路の図。電気は電池の＋極から出て、導線をたどって−極へもどる。${par ? '枝分かれのある' : '1本道の'}つなぎ方になっている。`];
  if (f.battery?.label) out.push(`電源は ${f.battery.label}。電池を直列に増やすと、回路にかかる電圧はその分だけ大きくなる。`);
  const parts = [...(f.series ?? []), ...(f.branches ?? []).flat()];
  const named = parts.map((c) => c.label).filter(Boolean) as string[];
  if (named.length) out.push(`つながれているのは ${named.join('・')}。それぞれ何をはかる（何をする）部品かを確かめる。`);
  out.push(
    par
      ? '並列つなぎでは、枝分かれした先にかかる電圧はどの枝も同じ。電流のほうが枝に分かれるので、合計すると もとの電流にもどる。'
      : '直列つなぎでは、どこを流れる電流も同じ大きさ。電圧のほうが各部品に分かれてかかり、合計すると電源の電圧になる。',
  );
  if (parts.some((c) => c.type === 'ammeter')) out.push('電流計は、はかりたいところに直列につなぐ。＋端子は電池の＋極側につなぐ。');
  if (parts.some((c) => c.type === 'voltmeter')) out.push('電圧計は、はかりたい部品と並列につなぐ。電流計と つなぎ方が逆になる点に注意する。');
  const bulbs = parts.filter((c) => c.type === 'bulb').length;
  if (bulbs >= 2) {
    out.push(
      par
        ? `豆電球が${bulbs}個、並列につながれている。どの豆電球にも電池と同じ電圧がかかるので、1個のときと同じ明るさで光る。`
        : `豆電球が${bulbs}個、直列につながれている。電圧が${bulbs}個に分かれてかかるので、1個のときより暗くなる。1個が切れると回路がとぎれ、全部消える。`,
    );
  }
  return out;
}

const BIO: Record<string, string[]> = {
  flower: [
    '花のつくりの図。外側から順に、がく・花びら・おしべ・めしべとならんでいる。',
    'いちばん内側のめしべは、実や種子のもとになるいちばん大事な部分。だから中心に置かれ、まわりを囲んで守る形になっている。',
    'めしべを囲んでいるのがおしべで、先に花粉がつくられる。',
    '外側の花びらは虫を呼ぶ役目、いちばん外のがくはつぼみのときに全体を守る役目をしている。',
  ],
  seed: [
    '種子のつくりの図。中には、芽や根になる部分と、育つための養分がつまっている。',
    '芽・茎・根になる部分をまとめて胚という。ここが育って植物になる。',
    '残りの部分には発芽のための養分がたくわえられている。土から養分を取れるようになるまでの弁当にあたる。',
  ],
  leafCrossSection: [
    '葉を横に切った断面の図。上下で つくりがちがっている。',
    '表側には細長い細胞がすきまなくならび、光をよく受けられるようになっている。',
    '裏側の細胞はすきまが多く、気体が出入りしやすい。気孔も主に裏側にある。',
    '中を通る束が葉脈で、水を運ぶ道管と養分を運ぶ師管が通っている。',
  ],
  insectBody: [
    'こん虫のからだの図。頭・胸・腹の3つに分かれているのが、こん虫の決まり。',
    'あしは6本で、すべて胸から出ている。腹から出ていたらこん虫ではない。',
    'はねがある場合も、ついているのは胸。頭には目・触角・口がある。',
  ],
  heart: [
    '心臓のつくりの図。4つの部屋に分かれている。',
    '上の2つが心房で、もどってきた血液を受け取る部屋。下の2つが心室で、血液を送り出す部屋。',
    '左右に分かれているのは、肺へ行く血液と全身へ行く血液が混ざらないようにするため。',
    '送り出す力が必要な心室、とくに全身へ送る左心室の壁がいちばん厚くなっている。',
  ],
  digestiveSystem: [
    '消化のしくみの図。口から入った食べ物が、食道・胃・小腸・大腸を通って進んでいく。',
    '口ではだ液、胃では胃液、小腸ではすい液と腸液がはたらいて、食べ物を吸収できる大きさまで分解する。',
    '養分を吸収するのは小腸。内側がひだと柔毛でおおわれ、ふれる面積がとても広くなっている。',
    '大腸では主に水分を吸収する。かん臓は消化液の胆汁をつくり、吸収した養分をたくわえる役目もしている。',
  ],
  eye: [
    '目のつくりの図。光が入ってから、見えると感じるまでの道すじをたどる。',
    'ひとみから入った光は、レンズ（水晶体）で曲げられて、奥のスクリーンにあたる部分に像を結ぶ。',
    '光の量はひとみの大きさで調節される。明るいところでは小さく、暗いところでは大きくなる。',
    '像を受けた部分から神経を通って脳に伝わり、そこで初めて「見えた」と感じる。',
  ],
  ear: [
    '耳のつくりの図。音は空気のふるえとして伝わってくる。',
    'まず鼓膜がふるえ、そのふるえが小さな骨に伝わって大きくなる。',
    'おくの、うずまきの形をした部分でふるえが信号に変えられ、神経を通って脳へ伝わる。',
    'からだのかたむきを感じ取る部分も、同じ耳の中にある。',
  ],
};

function barChartSteps(f: Extract<Figure, { kind: 'barChart' }>): string[] {
  const bars = f.bars ?? [];
  if (!bars.length) return [];
  const out: string[] = [
    f.histogram
      ? 'ヒストグラムの図。棒をすきまなく並べてあるのは、区切られた階級がとぎれなく続いていることを表している。'
      : '棒グラフの図。棒の高さで量の大小をくらべる。',
  ];
  out.push(
    `たての目もりは${f.yLabel ?? '量'}、横は${f.xLabel ?? '項目'}。目もりが0から始まっているかをまず確かめる。途中から始まっていると、小さな差が大きく見えてしまう。`,
  );
  out.push(`ならんでいるのは ${bars.map((b) => b.label).join('・')} の${bars.length}本。`);
  const max = bars.reduce((a, b) => (b.value > a.value ? b : a), bars[0]!);
  const min = bars.reduce((a, b) => (b.value < a.value ? b : a), bars[0]!);
  out.push(`いちばん高いのは ${max.label} で ${max.value}、いちばん低いのは ${min.label} で ${min.value}。差は ${Math.round((max.value - min.value) * 100) / 100}。`);
  out.push('棒グラフは「どれが多いか」を見る図。時間とともにどう変わったかを見たいときは折れ線グラフ、全体にしめる割合を見たいときは円グラフを使う。');
  return out;
}

function pieChartSteps(f: Extract<Figure, { kind: 'pieChart' }>): string[] {
  const sl = f.slices ?? [];
  if (!sl.length) return [];
  const total = sl.reduce((s, x) => s + x.value, 0);
  const out: string[] = [
    '円グラフの図。円全体が「全部で100%」にあたり、切り分けた大きさが、それぞれの割合を表している。',
    `入っているのは ${sl.map((s) => s.label).join('・')} の${sl.length}種類。`,
  ];
  const big = sl.reduce((a, b) => (b.value > a.value ? b : a), sl[0]!);
  if (total > 0) {
    out.push(`いちばん大きいのは ${big.label} で、全体のおよそ ${Math.round((big.value / total) * 100)}%。`);
  }
  out.push('円グラフはふつう、大きい順に時計回りに並べる。だから右上から順に見ていけば、多い順に読める。');
  out.push('割合が同じでも、もとにする量がちがえば実際の数はちがう。「何に対する割合か」を必ず確かめる。');
  return out;
}

function chemEqSteps(f: Extract<Figure, { kind: 'chemEquation' }>): string[] {
  const eq = String(f.equation ?? '').trim();
  if (!eq) return [];
  const [left = '', right = ''] = eq.split(/->|→|=/);
  return [
    '化学反応式の図。矢印の左が反応する前の物質、右ができたあとの物質。',
    `左（反応する前）は ${left.trim()}。`,
    `右（できたあと）は ${right.trim()}。`,
    '大事なのは、矢印の左右で原子の種類と個数が必ず等しくなっていること。反応の前後で原子は生まれも消えもせず、組み合わせが変わるだけだからである。',
    '前の数字（係数）は分子の個数、右下の小さな数字は1つの分子にふくまれる原子の数。この2つを取りちがえないこと。',
  ];
}

function netSteps(f: Extract<Figure, { kind: 'net' }>): string[] {
  const name = f.shape === 'cube' ? '立方体' : '直方体';
  const out: string[] = [
    `${name}の展開図。組み立てるとどんな立体になるかを考える図で、面が平らに開かれている。`,
    '面は6つある。向かい合う面どうしは、組み立てたときに重ならない（となり合わない）関係になる。',
    '十字の形にならんでいるときは、まん中の列で1つおきの面どうしが向かい合う面になる。',
  ];
  if (f.faceLabels?.length) out.push(`面には ${f.faceLabels.filter(Boolean).join('・')} と書きこまれている。組み立てたときどこに来るかを追う。`);
  if (f.dims) out.push(`たて ${f.dims.d}、横 ${f.dims.w}、高さ ${f.dims.h}。展開図の面積を全部たしたものが、立体の表面積になる。`);
  out.push('組み立てたときに重なる辺をさがすときは、切れ目のある角から順にたどっていくと、まちがえにくい。');
  return out;
}

function boxplotSteps(f: Extract<Figure, { kind: 'boxplot' }>): string[] {
  return [
    '箱ひげ図。データの散らばりぐあいを、5つの数だけで表した図。',
    `いちばん小さい値が ${f.min}、いちばん大きい値が ${f.max}。ひげの左右のはしがこれにあたる。`,
    `箱の左はしが第1四分位数で ${f.q1}、右はしが第3四分位数で ${f.q3}。この箱の中に、データのまん中あたりの半分（50%）が入っている。`,
    `箱の中の線が中央値で ${f.median}。平均値ではなく、小さい順にならべたときのまん中の値である点に注意する。`,
    `箱の横はば（${f.q3} − ${f.q1} ＝ ${Math.round((f.q3 - f.q1) * 100) / 100}）を四分位範囲といい、これが広いほど散らばりが大きい。`,
    '平均値だけでは散らばりが分からないので、箱ひげ図で「どのあたりに集まっているか」を合わせて見る。',
  ];
}

function chemStructSteps(f: Extract<Figure, { kind: 'chemStructure' }>): string[] {
  const atoms = f.atoms ?? [];
  if (!atoms.length) return [];
  const counts: Record<string, number> = {};
  for (const a of atoms) counts[a.el] = (counts[a.el] ?? 0) + 1;
  const list = Object.entries(counts).map(([el, n]) => `${el}が${n}個`).join('、');
  const dbl = (f.bonds ?? []).filter((b) => (b.order ?? 1) >= 2).length;
  const out = [
    '分子の構造を表した図。丸が原子、線が原子どうしのつながり（結合）を表している。',
    `この分子にふくまれる原子は ${list}。`,
    '線が1本なら単結合、2本なら二重結合。線の本数は、その原子が手を何本出しているかを表している。',
  ];
  if (dbl) out.push('二重線になっているところは二重結合。単結合より強く結びついていて、切れにくい。');
  out.push('化学式では数しか分からないが、構造の図ならどの原子とどの原子がつながっているかまで分かる。');
  return out;
}

function bioSteps(f: Extract<Figure, { kind: 'bioDiagram' }>): string[] {
  const base = BIO[f.template];
  if (!base) return [];
  const out = [...base];
  if (f.hideParts?.length) out.push('一部の名前は空欄にしてある。図のどの位置にある部分かを手がかりに、名前を思い出す。');
  return out;
}

// ── 入口 ────────────────────────────────────────

/**
 * figure.steps が無い図に、図形データだけから説明文を組み立てる。
 * 3つ未満しか作れないときは null を返し、呼び出し側は今までどおり何も出さない。
 *
 * 出てくる数値はすべて figure の中にある値をそのまま読んでいるので、
 * 図と文章が食いちがうことはない。
 */
export function autoSteps(figure: Figure, q?: FigureQuestion): string[] | null {
  let body: string[] = [];
  switch (figure.kind) {
    case 'polygon': body = polygonSteps(figure); break;
    case 'circle': body = circleSteps(figure); break;
    case 'coordinate': body = coordinateSteps(figure); break;
    case 'solid': body = solidSteps(figure); break;
    case 'numberLine': body = numberLineSteps(figure); break;
    case 'stratum': body = stratumSteps(figure); break;
    case 'circuit': body = circuitSteps(figure); break;
    case 'bioDiagram': body = bioSteps(figure); break;
    case 'barChart': body = barChartSteps(figure); break;
    case 'pieChart': body = pieChartSteps(figure); break;
    case 'chemEquation': body = chemEqSteps(figure); break;
    case 'net': body = netSteps(figure); break;
    case 'boxplot': body = boxplotSteps(figure); break;
    case 'chemStructure': body = chemStructSteps(figure); break;
    default: body = [];
  }
  body = keep(body);

  // 手で書かれた caption があれば、説明の1つとして使う。
  // 「3つの内角の和 = 180°」のように、その図でいちばん見てほしい点が
  // 書かれていることが多く、自動で組み立てた文より的を射ている。
  const cap = String((figure as { caption?: string }).caption ?? '').trim();
  if (cap && !body.some((b) => b.includes(cap))) body.push(`この図で見てほしいのは、${cap}。`);

  // 印も数値も入っていない図は、上の組み立てだけでは2つ以下にしかならない。
  // そこで「図をどう使うか」を1つ足して、少なくとも読む手がかりが残るようにする。
  // ここを足さないと、polygon 83枚・coordinate 73枚が説明なしのままになる。
  if (body.length === 2) {
    if (figure.kind === 'polygon') {
      body.push('図に長さや角度が書きこまれていないときは、問題文に出てくる数を自分で図に書きこんでから考える。どこの長さなのかが目で見えるようになると、使う公式が決まる。');
    } else if (figure.kind === 'coordinate') {
      body.push('グラフから数を読み取るときは、必ず目もりの1つぶんがいくつかを先に確かめる。そのうえで、交点や軸と交わる点など、ちょうどの値になっている場所をさがす。');
    } else if (figure.kind === 'circle' && (figure.points?.length || figure.chords?.length)) {
      // 円周上に点が打ってある図形問題のときだけ。
      // 植木算のように「まるい池」を表しているだけの図に
      // 「二等辺三角形ができる」と言っても、まったく的外れになる。
      body.push('円の問題では、中心と円周上の点を結ぶ線（半径）を自分で引いてみる。半径はどれも同じ長さなので、二等辺三角形ができて角度や長さがつながる。');
    } else if (figure.kind === 'circle') {
      body.push('まるい形をした図。円のまわり（円周）は 直径 × 円周率、面積は 半径 × 半径 × 円周率 で求まる。まわりの長さと面積で、使う長さがちがう点に注意する。');
    }
  }
  if (body.length < 3) return null;

  // ④ 何を聞かれているか（問題文から取れたときだけ）
  const asked = q?.question ? askedFor(q.question) : null;
  if (asked) body.push(`この図で聞かれているのは「${asked}」。求めたいものが図のどこにあたるかを、指でなぞって確かめる。`);

  // ⑤ 答え（短いものだけ。長い記述式の答えはここには出さない）
  // 答えの末尾の「。」は落とす。落とさないと「…出ている。。合っていたか」と句点が二重になる。
  const ans = String(q?.answer ?? '').trim().replace(/。+$/, '');
  if (ans && ans.length <= 40 && !ans.includes('\n')) {
    // しめくくりの一言は図の種類に合わせる。図形でないものに
    // 「どの長さ・どの角を使ったか」と言っても意味が通らない。
    const MEASURED = new Set(['polygon', 'circle', 'solid', 'net']);
    const tail = MEASURED.has(figure.kind)
      ? '合っていたかどうかだけでなく、図のどの長さ・どの角を使って出したのかを、もう一度たどっておく。'
      : '合っていたかどうかだけでなく、図のどこを見ればそう言えるのかを、もう一度たどっておく。';
    body.push(`答えは ${ans}。${tail}`);
  }
  return body;
}

/**
 * 図を描き終える段（buildSteps）。
 * 最後の「聞かれていること」「答え」の段は、図が完成した状態で見せたいので、
 * それより手前で描き上げる。
 */
export function autoBuildSteps(steps: string[], q?: FigureQuestion): number {
  let tail = 0;
  if (q?.question && askedFor(q.question)) tail++;
  const ans = String(q?.answer ?? '').trim().replace(/。+$/, '');
  if (ans && ans.length <= 40 && !ans.includes('\n')) tail++;
  return Math.max(1, steps.length - tail);
}
