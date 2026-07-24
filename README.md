# plainspeak-site

Vite/React microsite for the `Plainspeak` project page at
`https://www.danmercede.com/works/plainspeak/`.

## Role

This repo owns the marketing/presentation surface for `Plainspeak` (AI that
reads the fine print for you; built for the FutureAI Global Hackathon 2026):
layout, copy, metadata, static assets, and Vercel routing/cache config. The
source project owns the Next.js app, the Claude call, the JSON contract, the
defensive parser, and the tests.

## Source Of Truth

- Product repo: github.com/OrionArchitekton/plainspeak
- Site copy: `constants.ts`
- Metadata: `index.html`
- Routing/cache: `vercel.json`

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Boundaries

Keep claims grounded in the source project README, specs, and verified behavior.
Plainspeak is explicitly not legal, medical, or financial advice; the site copy
says so honestly. It was submitted to the FutureAI Global Hackathon 2026 and
holds no award, so state no placement. Do not change the Plainspeak app from this
repo.
