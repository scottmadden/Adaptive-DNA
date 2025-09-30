#!/usr/bin/env bash
set -euo pipefail
sed -n '1,200p' codex/context.md
echo
sed -n '1,200p' DECISIONS.md
echo
echo "Suggested next task: verify docs/index.html, docs/openapi.html, docs/swagger.html match decisions; commit & push main."
