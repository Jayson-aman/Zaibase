#!/usr/bin/env bash
# データ監査（実行時）だけを回す。問題を足す作業の途中で、自分の問題が監査に引っかからないか確かめる用。
#   cd ahiru && bash scripts/audit-data-only.sh 2>&1 | grep -n "<自分の course や id>"
# 全体の合格判定は `npm run audit`（型・コード・バンドルも含む）。
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1
OUT=$(mktemp -d)
if npx --yes esbuild@0.23.1 scripts/audit-data.ts --bundle --platform=node --format=cjs --loader:.png=empty \
     --outfile="$OUT/audit-data.cjs" --log-level=error; then
  node "$OUT/audit-data.cjs"
  rc=$?
else
  echo "⚠ データ監査のビルドに失敗"; rc=1
fi
rm -rf "$OUT"
exit $rc
