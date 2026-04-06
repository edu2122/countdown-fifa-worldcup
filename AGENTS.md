# AGENTS.md

## Repo Snapshot
- Single Astro app (no monorepo) with Tailwind v4 via `@tailwindcss/vite`.
- Core page is a localized World Cup countdown: `/` (es), `/en/`, `/fr/`.
- TypeScript is strict (`astro/tsconfigs/strict`), but client logic is currently plain TS in browser script modules.

## Commands That Matter
- Install: `npm install`
- Dev server: `npm run dev`
- Production build (primary verification): `npm run build`
- Local build preview: `npm run preview`
- Astro CLI passthrough: `npm run astro -- <command>`

## Verified Architecture
- Route entrypoints:
  - `src/pages/index.astro` (Spanish default)
  - `src/pages/en/index.astro`
  - `src/pages/fr/index.astro`
- Shared page composition:
  - `src/components/CountdownPage.astro` (main layout/content assembly)
  - `src/components/CountdownGrid.astro`
  - `src/components/HostCitiesSection.astro`
  - `src/components/LanguageSwitcher.astro`
- Client behavior (countdown, locale persistence, city filter persistence):
  - `src/scripts/countdown-app.ts`
- Translation source of truth:
  - `src/data/i18n.ts`

## i18n + Routing Constraints
- Astro i18n is enabled in `astro.config.mjs` with `locales: ['es', 'en', 'fr']`, `defaultLocale: 'es'`, `prefixDefaultLocale: false`.
- Keep page files aligned with this config:
  - Default locale at root `src/pages/*`
  - Other locales under `src/pages/en/*`, `src/pages/fr/*`
- `LanguageSwitcher.astro` uses `getRelativeLocaleUrl()`; preserve this for locale-safe links.

## SEO / Sitemap
- Sitemap integration is active via `@astrojs/sitemap` in `astro.config.mjs`.
- `site` is currently a placeholder (`https://countdown-worldcup.example.com`); replace with real domain before production deploys.

## High-Signal Gotchas
- In `.astro` files, keep client import script as:
  - `<script> import '../scripts/countdown-app.ts' </script>`
  - Do not switch to `type="module"` with raw TS path unless you verify Astro bundles it correctly.
- Countdown logic currently uses `Date` (not Temporal) because Temporal migration caused runtime regressions.
- City filter state is persisted in `localStorage` under `preferred-city-filter`; locale preference uses `preferred-locale`.
- After touching countdown/filter logic, always run `npm run build` and manually verify `/`, `/en/`, `/fr/`.
