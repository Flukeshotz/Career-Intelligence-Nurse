#!/usr/bin/env bash
# One-time: copy the four Azure AI values from the QP Editorial AI .env into this repo's GitHub
# Actions secrets. Values are piped straight through and never printed. Refuses to set an empty one.
set -euo pipefail

ENV_FILE="/Users/harsh/Desktop/SKILLCASE/QP Editorial AI/.env"
REPO="Flukeshotz/Career-Intelligence-Nurse"

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

for name in AZURE_AI_API_KEY AZURE_AI_ENDPOINT AZURE_AI_DEPLOYMENT AZURE_AI_API_VERSION; do
  value="${!name:-}"
  if [ -z "$value" ]; then
    echo "SKIPPED $name: not found in $ENV_FILE" >&2
    continue
  fi
  printf '%s' "$value" | gh secret set "$name" --repo "$REPO" --body -
  echo "set $name (${#value} characters)"
done
