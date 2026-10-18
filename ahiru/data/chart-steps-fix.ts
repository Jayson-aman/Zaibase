// グラフの説明（steps）の直し。
//
// データに固定で書かれている定型の説明には、次の食いちがいがあった。
//   ・山や谷のあるグラフ（周期的な変化・年間の気温など）に「全体として N だけ増えている」と出る（54図）
//   ・線が2本以上あるのに、1本目だけを説明している（100図）
//   ・同じ値の棒が複数あるのに、「いちばん大きいのは X」と1つだけ言い切る（41図）
// そこで、定型の文だけを見つけて、グラフの数値から作った説明に差しかえる。
// 手で書いた説明（定型でないもの）には一切さわらない。
import type { Figure } from './figures';

type Pt = { x: number; y: number };

const num = (v: number): string => String(Math.round(v * 100) / 100);

/** 1本の折れ線がどう動いているかを一文にする */
function describeSeries(label: string | undefined, pts: Pt[]): string {
  const p = [...pts].sort((a, b) => a.x - b.x);
  if (p.length < 2) return '';
  const name = label ? `「${label}」は` : '';
  const ds = p.slice(1).map((q, i) => q.y - p[i]!.y);
  const first = p[0]!;
  const last = p[p.length - 1]!;
  if (ds.every((d) => d >= 0) && last.y > first.y) return `${name}全体として${num(last.y - first.y)}だけ増えている。`;
  if (ds.every((d) => d <= 0) && last.y < first.y) return `${name}全体として${num(first.y - last.y)}だけ減っている。`;
  if (ds.every((d) => d === 0)) return `${name}ずっと同じ値で、横ばい。`;
  const hi = p.reduce((a, b) => (b.y > a.y ? b : a));
  const lo = p.reduce((a, b) => (b.y < a.y ? b : a));
  return `${name}上がったり下がったりしている。いちばん高いのは（${num(hi.x)}, ${num(hi.y)}）、いちばん低いのは（${num(lo.x)}, ${num(lo.y)}）。`;
}

function fixLineChart(fig: Extract<Figure, { kind: 'lineChart' }>): string[] | null {
  const steps = fig.steps;
  if (!steps) return null;
  const iTotal = steps.findIndex((s) => /^全体として[-0-9.]+だけ(増えて|減って)いる。/.test(s));
  if (iTotal < 0) return null;
  const series = fig.series ?? [];
  const multi = series.length > 1;
  const texts = series.map((s) => describeSeries(multi ? s.label ?? '線' : undefined, s.points)).filter(Boolean);
  if (!texts.length) return null;
  // 1本だけで、ずっと同じ向きに動くなら、もとの説明が正しいので変えない
  const only = series.length === 1 ? describeSeries(undefined, series[0]!.points) : '';
  if (series.length === 1 && /^全体として/.test(only)) return null;
  const out = [...steps];
  out[iTotal] = `${texts.join('')}${multi ? '' : ''}右上がりの部分は増加、右下がりの部分は減少と読む。`;
  const iStart = steps.findIndex((s, i) => i < iTotal && /^はじめは（/.test(s));
  if (iStart >= 0 && multi) {
    out[iStart] = `${series
      .map((s) => {
        const p = [...s.points].sort((a, b) => a.x - b.x);
        return `「${s.label ?? '線'}」は、はじめ（${num(p[0]!.x)}, ${num(p[0]!.y)}）から終わり（${num(p[p.length - 1]!.x)}, ${num(p[p.length - 1]!.y)}）まで`;
      })
      .join('、')}。`;
  } else if (iStart >= 0 && series.length === 1) {
    // 山や谷があるときは、はじめと終わりだけを言っても要点にならないので、そのまま残す
  }
  return out;
}

function fixBarChart(fig: Extract<Figure, { kind: 'barChart' }>): string[] | null {
  const steps = fig.steps;
  const bars = fig.bars ?? [];
  if (!steps || bars.length < 2) return null;
  const iMax = steps.findIndex((s) => /^いちばん大きいのは「/.test(s));
  const iMin = steps.findIndex((s) => /^いちばん小さいのは「/.test(s));
  if (iMax < 0 && iMin < 0) return null;
  const maxV = Math.max(...bars.map((b) => b.value));
  const minV = Math.min(...bars.map((b) => b.value));
  const maxs = bars.filter((b) => b.value === maxV);
  const mins = bars.filter((b) => b.value === minV);
  if (maxs.length < 2 && mins.length < 2) return null; // 同じ値が無ければ、もとの説明で正しい
  const out = [...steps];
  const unit = (() => {
    const m = steps[iMax >= 0 ? iMax : iMin]!.match(/で[-0-9.]+（([^）]+)）/);
    return m ? `（${m[1]}）` : '';
  })();
  if (iMax >= 0) {
    out[iMax] =
      maxs.length > 1
        ? `いちばん大きいのは ${maxs.map((b) => `「${b.label}」`).join('・')} で、どれも ${num(maxV)}${unit}。同じ値なので、順位はならぶ。`
        : `いちばん大きいのは「${maxs[0]!.label}」で ${num(maxV)}${unit}。`;
  }
  if (iMin >= 0) {
    out[iMin] =
      mins.length > 1
        ? `いちばん小さいのは ${mins.map((b) => `「${b.label}」`).join('・')} で、どれも ${num(minV)}。差は ${num(maxV - minV)}。`
        : `いちばん小さいのは「${mins[0]!.label}」で ${num(minV)}。差は ${num(maxV - minV)}。`;
  }
  // 「大きいほうから A → B → C と続く」は、同じ値があると順番が一つに決まらない
  const iOrder = steps.findIndex((s) => /^大きいほうから /.test(s));
  if (iOrder >= 0) {
    const groups = new Map<number, string[]>();
    for (const b of bars) groups.set(b.value, [...(groups.get(b.value) ?? []), b.label]);
    const top = [...groups.entries()].sort((a, b) => b[0] - a[0]).slice(0, 3);
    out[iOrder] = `大きいほうから ${top.map(([v, ls]) => `${ls.join('・')}（${num(v)}）`).join(' → ')} と続く。同じ値のものは、同じ順位として読む。`;
  }
  return out;
}

/** 定型の説明が入っているグラフだけ、数値から作った説明に差しかえて返す（それ以外はそのまま） */
export function repairChartSteps(fig: Figure): Figure {
  if (fig.kind === 'lineChart') {
    const s = fixLineChart(fig);
    return s ? { ...fig, steps: s } : fig;
  }
  if (fig.kind === 'barChart') {
    const s = fixBarChart(fig);
    return s ? { ...fig, steps: s } : fig;
  }
  return fig;
}
