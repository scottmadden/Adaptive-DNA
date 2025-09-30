# Adaptive DNA — Decisions (Source of Truth)

## Brand & UX
- Primary: `#6C5CE7` (purple). Secondary (hover/focus): `#00CEC9` (teal).
- Modern, sleek, coder vibe; neutral text; tasteful shadows.
- Single toast at a time; center-top; dismissible.

## Navigation
- Viewers: `openapi.html` (ReDoc), `swagger.html` (Swagger UI).
- Viewer→Portal Dev: opens in new tab.
- Portal→Viewer: **Dev card back link only**, opens in same tab.
- Label auto: “Back to ReDoc/Swagger UI”; pill tinted (red/green), text neutral.

## Dev Tools
- Show on `?dev=1`, `#dev`, or Ctrl/⌘+Shift+D, or DEV badge.
- Persist state in `sessionStorage`.

## Content & Assets
- Default spec: `/openapi.yaml` (at `docs/openapi.yaml`).
- Storybook placeholder: site root `/` shows Pending until wired.
- Favicon: `docs/favicon.svg`.

## Implementation
- Robust `siteRoot()` supports org/user & project pages.
- ReDoc/Swagger via CDN with SRI injection (script + CI).
- CSP deferred for now.

## Git/CI/Pages
- Default branch `main`.
- Pages deploy via workflow from `/docs`.
- Conventional Commits encouraged.
- Merge: squash; rebase disabled (repo setting).
- CODEOWNERS: single owner `@scottmadden`.

## Accessibility
- `noscript`, focus-visible rings, aria labels.
