// 使い捨てメールの一覧が、アプリ側（utils/disposableEmail.ts）と
// サーバー側（functions/_disposableDomains.js）で同じかを確かめる。食いちがうと、
// アプリでは断れるのにサーバーでは通る（または逆）ことになる。
import { readFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const server = require('../functions/_disposableDomains.js');
const ts = readFileSync(new URL('../utils/disposableEmail.ts', import.meta.url), 'utf8');
const body = ts.slice(ts.indexOf('new Set(['), ts.indexOf(']);'));
const app = [...body.matchAll(/'([^']+)'/g)].map((m) => m[1]);
const a = new Set(app), s = new Set(server);
const onlyApp = [...a].filter((x) => !s.has(x)), onlyServer = [...s].filter((x) => !a.has(x));
if (onlyApp.length || onlyServer.length || app.length !== a.size || server.length !== s.size) {
  console.log('⚠ 使い捨てメールの一覧が食いちがう', { onlyApp, onlyServer, dupApp: app.length - a.size, dupServer: server.length - s.size });
  process.exit(1);
}
console.log(`✓ 使い捨てメールの一覧（${s.size}件）がアプリとサーバーで一致`);
