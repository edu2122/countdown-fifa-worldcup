# Countdown World Cup 2026

Sitio web en Astro + TailwindCSS con cuenta regresiva para el Mundial 2026 (USA, Mexico, Canada), soporte i18n (`/`, `/en`, `/fr`), filtros por pais en ciudades sede y sitemap.

## Stack

- Astro 6
- TailwindCSS v4 (`@tailwindcss/vite`)
- PNPM

## Requisitos

- Node.js `>= 22.12.0`
- pnpm `10.x`

## Comandos

Ejecuta todo desde la raiz del proyecto:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Comando Astro CLI:

```bash
pnpm astro -- --help
```

## Estructura principal

```text
src/
  components/
    CountdownPage.astro
    CountdownGrid.astro
    HostCitiesSection.astro
    LanguageSwitcher.astro
  data/
    i18n.ts
    cities.ts
  pages/
    index.astro
    en/index.astro
    fr/index.astro
  scripts/
    countdown-app.ts
  layouts/
    Layout.astro
public/
  logo-countdown.webp
  flags/
```

## i18n

- Locales configurados en `astro.config.mjs`: `es`, `en`, `fr`
- `es` es locale por defecto sin prefijo (`/`)
- Rutas:
  - `https://tu-dominio/`
  - `https://tu-dominio/en/`
  - `https://tu-dominio/fr/`

## SEO y sitemap

- Se genera sitemap con `@astrojs/sitemap` al hacer build.
- Salida esperada en `dist/`:
  - `sitemap-index.xml`
  - `sitemap-0.xml`

Importante: configura `site` en `astro.config.mjs` con tu dominio real para URLs correctas en el sitemap.

## Deploy en Vercel

### Opcion 1: desde GitHub (recomendada)

1. Sube este repo a GitHub.
2. En Vercel: **Add New Project** -> importa el repositorio.
3. Framework preset: **Astro**.
4. Build command: `pnpm build`
5. Output directory: `dist`
6. Instala con: `pnpm install`

### Opcion 2: con CLI

```bash
pnpm dlx vercel
pnpm dlx vercel --prod
```

Si usas token:

```bash
pnpm dlx vercel --prod --token TU_VERCEL_TOKEN
```

Despues del deploy, actualiza `site` en `astro.config.mjs` con el dominio final y vuelve a desplegar para que el sitemap quede consistente.
