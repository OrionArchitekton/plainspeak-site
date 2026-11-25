---
brand: "plainspeak-site"
name: "Plainspeak"
archetype: "WorksBenchmarkDossier"
polarity: "dark"
tokens: "tokens/brand.tokens.json"
---

# Plainspeak Design System (Archetype C: WorksBenchmarkDossier)

Dark archival Obsidian-Navy (`#050C24`) benchmark dossier built on Astro 7.4.13 MPA + Preact Islands, pairing HeroSplit + Proof Ledger cards + Interactive Frozen Dossier Inspector + Command Surface Ledger.

## Palette and Contrast Rules

- Canvas: `#050C24` (Obsidian-Navy)
- Raised dossier card surface: `#0A1538`
- Elevated plate surface: `#112154`
- Primary ink: `#F8FAFC`
- Secondary prose ink: `#E2E8F0`
- Muted metadata: `#94A3B8` (`>=5.2:1` on `#112154`)
- Primary CTA fill: `#E68249` (Copper Mid), hover `#F0975A`, ink `#020B29` (`>=7.07:1`)
- Accent inline text/markers on dark surfaces: `#F0975A`
- Focus ring: `#FFC08B`

## Typography

- Display / Headings: `Newsreader Variable` (subsetted OFL-1.1 WOFF2)
- Body / UI: `IBM Plex Sans Variable` (subsetted OFL-1.1 WOFF2)
- Code / Ledger Telemetry: `JetBrains Mono Variable` (subsetted OFL-1.1 WOFF2)

## Performance & Island Budget

- Static prose, proof ledger cards, quickstart blocks, and command table ship with 0 KB client JS.
- Interactive `DossierInspector` Preact island loads lazily (`client:idle`) keeping total client JS under 30 KB and reducing page payload by >=50% vs the 228 KB Vite SPA baseline.
- Mandatory `@media (prefers-reduced-motion: reduce)` disables all transitions and animations.
