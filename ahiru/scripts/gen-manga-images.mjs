// manifest_*.json（作業用。{ マンガID: { コマ番号: ファイル名 } }）を集めて data/manga-images.ts を書き出す。
// 使い方: node scripts/gen-manga-images.mjs <manifestのあるフォルダ>
import fs from 'fs';
import path from 'path';
const dir = process.argv[2];
if (!dir) { console.error('usage: node scripts/gen-manga-images.mjs <dir>'); process.exit(1); }
const merged = {};
for (const f of fs.readdirSync(dir).filter((x) => /^manifest_.*\.json$/.test(x)).sort()) {
  const m = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const [id, panels] of Object.entries(m)) merged[id] = { ...(merged[id] ?? {}), ...panels };
}
const pub = path.join(process.cwd(), 'public', 'manga');
let n = 0;
const lines = [];
for (const id of Object.keys(merged).sort()) {
  const ps = Object.entries(merged[id]).filter(([, file]) => fs.existsSync(path.join(pub, file))).sort((a, b) => Number(a[0]) - Number(b[0]));
  if (!ps.length) continue;
  n += ps.length;
  lines.push(`  ${JSON.stringify(id)}: { ${ps.map(([i, f]) => `${Number(i)}: ${JSON.stringify(f)}`).join(', ')} },`);
}
const file = 'data/manga-images.ts';
let src = fs.readFileSync(file, 'utf8');
src = src.replace(/export const MANGA_IMAGES: Record<string, Record<number, string>> = \{[\s\S]*?\};/, `export const MANGA_IMAGES: Record<string, Record<number, string>> = {\n${lines.join('\n')}${lines.length ? '\n' : ''}};`);
fs.writeFileSync(file, src);
console.log('ok', Object.keys(merged).length, 'マンガ,', n, 'コマ');
