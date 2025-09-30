# Adaptive DNA — Codex Context (Concise)
- Build static portal in `docs/` with two viewers: ReDoc (`openapi.html`) and Swagger (`swagger.html`).
- Viewer→Portal new tab; Portal→Viewer back link **only in Dev card**, same tab.
- Label auto to ReDoc/Swagger; pill tinted; neutral text.
- Dev tools: `?dev=1`, `#dev`, Ctrl/⌘+Shift+D, or badge; store in sessionStorage.
- Default spec `/openapi.yaml`; allow `?spec=` override.
- Use CDN & SRI; CI deploys Pages from `/docs` on `main`.
- Colors: primary `#6C5CE7`, secondary `#00CEC9`. Accessibility essentials enabled.
