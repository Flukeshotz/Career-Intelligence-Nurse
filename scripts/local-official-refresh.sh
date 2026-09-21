#!/usr/bin/env bash
# Re-reads the official notices that refuse cloud servers (RRB) FROM THIS COMPUTER, then commits the
# result. GitHub's daily job keeps everything else fresh; this covers only what it cannot reach.
set -euo pipefail

cd "$(dirname "$0")/.."
ENV_FILE="/Users/harsh/Desktop/SKILLCASE/QP Editorial AI/.env"

git pull -q --rebase origin main
set -a
# shellcheck disable=SC1090
[ -f "$ENV_FILE" ] && source "$ENV_FILE"
set +a

# Only the records the cloud cannot read. OFFICIAL_PROXY=off: do not bounce through the server.
OFFICIAL_PROXY=off npx tsx scripts/verify-official.ts --write exam-rrb-nurse-2026

git add src/lib/refreshed-data.json
if git diff --cached --quiet; then
  echo "no change"
else
  git commit -q -m "chore(data): official notice re-read from India"
  git push -q origin main
  echo "committed and pushed"
fi
