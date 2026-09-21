#!/usr/bin/env bash
# Installs a daily macOS schedule (09:00, or the next time the Mac wakes) for local-official-refresh.sh.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PLIST="$HOME/Library/LaunchAgents/in.skillcase.official-refresh.plist"
cat > "$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>in.skillcase.official-refresh</string>
  <key>ProgramArguments</key><array><string>/bin/bash</string><string>-lc</string><string>$ROOT/scripts/local-official-refresh.sh</string></array>
  <key>StartCalendarInterval</key><dict><key>Hour</key><integer>9</integer><key>Minute</key><integer>0</integer></dict>
  <key>StandardOutPath</key><string>$HOME/Library/Logs/skillcase-official-refresh.log</string>
  <key>StandardErrorPath</key><string>$HOME/Library/Logs/skillcase-official-refresh.log</string>
</dict></plist>
EOF
launchctl unload "$PLIST" 2>/dev/null || true
launchctl load "$PLIST"
echo "installed: runs daily at 09:00. Log: ~/Library/Logs/skillcase-official-refresh.log"
