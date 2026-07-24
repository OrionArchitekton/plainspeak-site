# AGENTS.md - plainspeak-site

## Repo Role

`plainspeak-site` is the Vite/React microsite for the `Plainspeak` project page
at danmercede.com/works/plainspeak/. It owns presentation, metadata, static
assets, and cache config for the site surface.

## Boundaries

- Owns site copy, layout, Open Graph metadata, Vercel config, and static assets.
- Does not own the Plainspeak Next.js app, the Claude call, the JSON contract,
  the defensive parser, or the tests (github.com/OrionArchitekton/plainspeak).
- Keep product claims grounded in the source project README, specs, and verified
  behavior. Plainspeak is explicitly not legal, medical, or financial advice;
  keep the site copy honest about that. It holds no award, so state no placement.

## Authority Order

1. `/home/orion/src/orion-estate/platform/orion-estate-audit/AGENTS.md`
2. Source project: the `plainspeak` repo README.md and specs/
3. This repo's `README.md`, `constants.ts`, `index.html`, and `vercel.json`
4. Vite build output and package scripts

## Validation

```bash
npm install
npm run build
```

For docs-only changes, run `git diff --check` at minimum.
