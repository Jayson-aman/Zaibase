// 購入までの道すじ（ファネル）を、Firestore の accessEvents から数えて表示する（読み取り専用）。
//
// 何が分かるか：ペイウォールを開いた人 → プランをタップした人 → 購入できた人／やめた人／失敗した人、
// 無料枠の上限に当たった人、お知らせカード・定期テストの鍵をタップした人、買い切りの流れ。
// 「どの段階で人が止まっているか」を、人（uid）の数で出す。
//
// 使い方（Mac で。キーはチャットに貼らない）：
//   cd ~/zaibase-repo/ahiru/functions && npm install        # firebase-admin が入っていなければ
//   gcloud auth application-default login                    # zaibase-exam を見られる Google アカウントで
//   GOOGLE_CLOUD_PROJECT=zaibase-exam node ../scripts/funnel-report.mjs 30     # 引数＝何日ぶん（既定30）
//
// 注意：accessEvents の欄の使い方は services/analytics.ts のコメントのとおり
//   mode＝'subscription' など／subject＝プラン（pro・max）／examType＝詳細（intro＝お試し価格つき・full・エラー）。
import { createRequire } from 'module';
const require = createRequire(process.cwd() + '/package.json');
const admin = require('firebase-admin');

const days = Number(process.argv[2] ?? 30);
admin.initializeApp({ projectId: process.env.GOOGLE_CLOUD_PROJECT ?? 'zaibase-exam' });
const db = admin.firestore();
const since = admin.firestore.Timestamp.fromMillis(Date.now() - days * 86400000);

// 1) 利用者数（アカウントの種類）
let anon = 0, real = 0, total = 0, token;
do {
  const page = await admin.auth().listUsers(1000, token);
  for (const u of page.users) { total++; (u.providerData.length === 0 ? anon++ : real++); }
  token = page.pageToken;
} while (token);
console.log(`\n■ 利用者（Firebase Authentication）：全 ${total} 人（匿名 ${anon}／メール等で登録 ${real}）`);

// 2) イベントを人ごとに集める
const snap = await db.collection('accessEvents').where('createdAt', '>=', since).get();
const byEvent = new Map();   // event -> Set(uid)
const counts = new Map();    // event -> 回数
const detail = new Map();    // `${event}|${examType}` -> Set(uid)
const tiers = new Map();     // tier -> Set(uid)
for (const d of snap.docs) {
  const e = d.data();
  const ev = e.event ?? '?';
  if (!byEvent.has(ev)) byEvent.set(ev, new Set());
  byEvent.get(ev).add(e.uid);
  counts.set(ev, (counts.get(ev) ?? 0) + 1);
  if (e.examType) { const k = `${ev}|${e.examType}`; if (!detail.has(k)) detail.set(k, new Set()); detail.get(k).add(e.uid); }
  if (!tiers.has(e.tier)) tiers.set(e.tier, new Set());
  tiers.get(e.tier).add(e.uid);
}
const n = (ev) => byEvent.get(ev)?.size ?? 0;
console.log(`\n■ 直近 ${days} 日の記録：${snap.size} 件／人数（uid）でのべ ${new Set(snap.docs.map((d) => d.data().uid)).size} 人`);
for (const [t, s] of tiers) console.log(`  ${t}：${s.size} 人`);

console.log('\n■ 購入までの道すじ（人数）');
const rows = [
  ['無料枠の上限に当たった（問題）', 'trial_limit_paywall_shown'],
  ['ペイウォールを開いた', 'paywall_opened'],
  ['プランをタップした', 'plan_tapped'],
  ['購入が確定した', 'purchase_succeeded'],
  ['ストアの画面でやめた', 'purchase_cancelled'],
  ['購入エラーになった', 'purchase_failed'],
  ['ご家族の承認待ち', 'purchase_pending'],
  ['購入を復元した', 'restore_tapped'],
  ['（ホームの）無料の人への案内カードを見た', 'free_upgrade_card_shown'],
  ['（ホームの）案内カードをタップした', 'free_upgrade_card_tapped'],
  ['定期テストの教科書の鍵をタップした', 'teiki_lock_tapped'],
];
for (const [label, ev] of rows) console.log(`  ${label.padEnd(26, '　')} ${String(n(ev)).padStart(5)} 人（${counts.get(ev) ?? 0} 回）`);

console.log('\n■ 買い切り（公式集・まとめ買い・単元）');
for (const ev of ['unlock_tapped', 'unlock_login_required', 'unlock_confirm_declined', 'unlock_store_cancelled', 'unlock_failed', 'unlock_succeeded'])
  console.log(`  ${ev.padEnd(26)} ${String(n(ev)).padStart(5)} 人`);

console.log('\n■ 購入エラーの内わけ（detail の先頭）');
for (const [k, s] of [...detail].filter(([k]) => k.startsWith('purchase_failed|')).sort((a, b) => b[1].size - a[1].size).slice(0, 10))
  console.log(`  ${k.split('|')[1].slice(0, 60)} … ${s.size} 人`);

console.log('\n■ お試し価格つきで始めようとした人（plan_tapped の detail）');
console.log(`  intro（お試し価格が出ていた）：${detail.get('plan_tapped|intro')?.size ?? 0} 人／full（通常価格）：${detail.get('plan_tapped|full')?.size ?? 0} 人`);
console.log('  → intro が 0 人なら、お試し価格（App Store Connect の導入オファー）がペイウォールに出ていない。\n');
