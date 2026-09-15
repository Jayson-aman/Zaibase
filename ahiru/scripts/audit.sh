#!/usr/bin/env bash
# ahiru 総点検。コミット前に必ず通す。
#
#   cd ahiru && npm run audit
#
# 検査する順番：型 → データ（実行時）→ コード（静的）→ バンドル
# データ監査は esbuild で実際にデータ層を読みこんで走らせる。
# 正規表現でソースを読むだけだと、index への結線漏れのように
# 「ファイルは正しいのにアプリには出ていない」不具合を見逃す。

set -uo pipefail
cd "$(dirname "$0")/.." || exit 1
fail=0

echo "━━━ 1/4 型チェック ━━━"
if npx tsc --noEmit -p .; then echo "✓ tsc エラーなし"; else echo "⚠ tsc エラーあり"; fail=1; fi

echo
echo "━━━ 2/4 データ監査（実行時） ━━━"
OUT=$(mktemp -d)
if npx --yes esbuild@0.23.1 scripts/audit-data.ts \
     --bundle --platform=node --format=cjs --loader:.png=empty \
     --outfile="$OUT/audit-data.cjs" --log-level=error; then
  node "$OUT/audit-data.cjs" || fail=1
else
  echo "⚠ データ監査のビルドに失敗"; fail=1
fi
rm -rf "$OUT"

echo
echo "━━━ 3/4 コード監査（静的） ━━━"
node scripts/audit-code.mjs || fail=1

echo
echo "━━━ 4/4 Web バンドル ━━━"
if npx expo export --platform web >/dev/null 2>&1; then
  echo "✓ expo export 成功"
else
  echo "⚠ expo export 失敗"; fail=1
fi

echo
if [ "$fail" -eq 0 ]; then
  echo "══ すべて通過 ══"
else
  echo "══ 未解決の項目あり。上の ⚠ を確認すること ══"
fi
exit "$fail"
