// ahiru コード監査（静的）
//
// 過去に実際に起きた不具合のパターンだけを検査する。
// 一般的なlintではなく、「このアプリでこれをやると壊れる」ことの一覧。
//
// 実行: npm run audit （scripts/audit.sh 経由）

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
let problems = 0;

function report(label, hits, note) {
  const n = hits.length;
  if (n) problems += n;
  console.log(`${n ? '⚠' : '✓'} ${label.padEnd(44)} ${String(n).padStart(5)}件`);
  if (n) {
    hits.slice(0, 8).forEach((h) => console.log(`      ${h}`));
    if (note) console.log(`      → ${note}`);
  }
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.expo', 'dist', 'android', 'ios'].includes(e.name)) continue;
      walk(p, out);
    } else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) out.push(p);
  }
  return out;
}
const files = [...walk(path.join(ROOT, 'app')), ...walk(path.join(ROOT, 'components'))];
const rel = (f) => path.relative(ROOT, f);

// ── E. 点滅 ─────────────────────────────────────
console.log('\n=== E. 点滅（再発しやすいパターン） ===');

// 1) removeClippedSubviews は画面外のセルをビュー階層から切り離すため、
//    戻ってきたときに一瞬空白になる。社会・理科の点滅の直接の原因だった。
report(
  'removeClippedSubviews を有効にしている',
  files.flatMap((f) => {
    const src = fs.readFileSync(f, 'utf8');
    return [...src.matchAll(/removeClippedSubviews(?!=\{false\})/g)]
      .filter((m) => !/\/\//.test(src.slice(src.lastIndexOf('\n', m.index), m.index)))
      .map((m) => `${rel(f)}:${src.slice(0, m.index).split('\n').length}`);
  }),
  'false を明示するか、属性ごと外すこと',
);

// 2) FlatList に渡す data / renderItem / ListHeaderComponent が
//    毎回新しくなると、全行が作りなおされて点滅する。
report(
  'FlatList を使う画面でメモ化が足りない',
  files
    .filter((f) => fs.readFileSync(f, 'utf8').includes('<FlatList'))
    .filter((f) => {
      const s = fs.readFileSync(f, 'utf8');
      // renderItem がその場に書かれた関数（={( や ={{ で始まる）ならメモ化されていない
      return /renderItem=\{\s*\(/.test(s) || !/useMemo/.test(s);
    })
    .map(rel),
  'data は useMemo、renderItem は useCallback、行は React.memo にする',
);

// 3) useWindowDimensions の値をそのままサイズに使うと、Web版で
//    縦スクロールバーが出入りしただけで窓幅が十数px変わり、
//    全行が別のサイズで描き直されて画像がちらつき、行の高さが変わって
//    スクロール位置まで巻き戻る。上限（Math.min）か丸め（Math.round(x/N)*N）
//    のどちらかで、小さな変化を吸収すること。
report(
  'useWindowDimensions を丸めずにサイズへ使用',
  files.flatMap((f) => {
    const src = fs.readFileSync(f, 'utf8');
    if (!src.includes('useWindowDimensions')) return [];
    // 窓幅から計算しているのに、上限も丸めも無い行を拾う
    return src.split('\n').flatMap((l, i) => {
      if (!/(?:winWidth|windowWidth|width)\s*-\s*\d/.test(l)) return [];
      if (/Math\.min|Math\.round\s*\([^)]*\/\s*\d+\s*\)\s*\*/.test(l)) return [];
      return [`${rel(f)}:${i + 1}  ${l.trim().slice(0, 60)}`];
    });
  }),
  'Math.min で上限をつけるか、Math.round(x/32)*32 のように丸める',
);

// ── C. バグ（フックの規則） ────────────────────────────
console.log('\n=== C. バグ ===');

// 早期returnより後ろにフックを書くと、条件によって呼び出し数が変わり、
// Reactが状態を取りちがえる。tsc では検出できない。
// useEffect 内の `return () => {}`（後始末）は早期returnではないので除く。
const hookAfterReturn = [];
for (const f of files.filter((f) => f.endsWith('.tsx'))) {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  let early = null;
  let inHookBody = 0;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^(export default function|export function)/.test(l)) { early = null; inHookBody = 0; }
    if (/\b(useEffect|useCallback|useMemo|useLayoutEffect)\s*\(/.test(l)) inHookBody = 1;
    if (inHookBody && /^  \}, \[/.test(l)) inHookBody = 0;
    // インデント2の return（コンポーネント直下）だけを早期returnとみなす
    if (!inHookBody && early === null && /^  (?:return|if \(.*\) (?:return|\{))/.test(l)) {
      const blk = lines.slice(i, i + 10).join('\n');
      if (/return/.test(blk)) early = i + 1;
    }
    if (early !== null && /^  const \w+ = use(Memo|Callback|State|Effect|Reducer)\(/.test(l))
      hookAfterReturn.push(`${rel(f)}:${i + 1}  ${l.trim().slice(0, 60)}`);
  }
}
report('早期returnより後ろのフック', hookAfterReturn, 'フックは早期returnより前にまとめること');

// ── A. 失敗（結線漏れ） ─────────────────────────────
console.log('\n=== A. 失敗 ===');
const dataDir = path.join(ROOT, 'data');
const dataFiles = fs.readdirSync(dataDir).filter((f) => f.endsWith('.ts'));
const unwired = [];
for (const f of dataFiles.filter((f) => /^lessons-.*ext\d+\.ts$/.test(f))) {
  const base = f.slice(0, -3);
  const m = fs.readFileSync(path.join(dataDir, f), 'utf8').match(/export const (\w+)/);
  if (!m) { unwired.push(`${f}（exportが無い）`); continue; }
  const wired = dataFiles.some((g) => {
    if (g === f) return false;
    const s = fs.readFileSync(path.join(dataDir, g), 'utf8');
    return s.includes(`from './${base}'`) && s.includes(`...${m[1]}`);
  });
  if (!wired) unwired.push(`${f}（${m[1]} が親のindexに入っていない）`);
}
report('単元ファイルの結線漏れ', unwired, 'import と spread の両方が要る');

console.log(`\n合計 ${problems} 件`);
process.exit(problems === 0 ? 0 : 1);
