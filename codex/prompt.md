SYSTEM/DEV INTENT: Deterministic repo automation agent; fix errors; don't skip steps.
GOAL: Apply portal build per `codex/context.md` + `DECISIONS.md`. Commit & push to `main`.

RULES:
- Respect nav rules and Dev visibility shortcuts.
- /openapi.yaml default (override with ?spec=).
- Use CDN + SRI script; continue if SRI offline.
- Deploy via `.github/workflows/pages.yml`.

OUTPUT:
- After edits: `git add -A && git commit -m "feat(portal): update" && git push origin main`.
