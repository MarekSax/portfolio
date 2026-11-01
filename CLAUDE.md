# CLAUDE.md

Personal portfolio site of Marek Maciejewski — a single-page React app deployed to GitHub Pages.

## Stack

- React 18 + TypeScript 5, bundled with Vite 7
- Styling: SCSS modules (`*.module.scss`) via `sass`, `classnames` for conditional classes
- Libraries: `react-scroll` (section navigation), `react-intersection-observer` (reveal animations), `react-responsive` (mobile/desktop switch at 768px), `react-icons`, `html-react-parser` (renders HTML strings from content data)

## Commands

```bash
npm ci            # install dependencies (Node 20 in CI)
npm run dev       # dev server (vite --host)
npm run build     # type-check (tsc -b) + production build to dist/
npm run lint      # eslint, --max-warnings 0 (any warning fails)
npx prettier --write src   # format
```

Before committing, `npm run build` and `npm run lint` must both pass.

## Structure

- `src/App.tsx` — page composition: Navbar/MobileMenu, Hero, About, Projects, Skills, Footer inside `AnimatedBackground`
- `src/components/<Name>/` — one folder per component: `<Name>.tsx`, `<Name>.module.scss`, `index.ts` re-export (`export * from './<Name>'`)
- `src/data/pageContent.ts` — **all site content** (about text, commercial/personal projects, skills). Edit content here, not in components. The `about` field is an HTML string rendered with `html-react-parser`.
- `src/data/MenuItems.ts` — navigation entries (`link` is a section id or a file in `public/`)
- `src/types/` — `PageContent`, `Projects`, `Project`, `Skill`; re-exported from `src/types/index.ts`
- `src/scss/` — global styles: `_variables.scss` (color palette: `$clr-black`, `$clr-gray`, `$clr-accent`, `$clr-light`), `_mixins.scss`, `_reset.scss`
- `public/images/projects/*.webp` — project screenshots, referenced from `pageContent.ts` as `./images/projects/<file>.webp`
- `public/Marek-Maciejewski-CV-Resume.pdf` — CV linked from the menu

## Conventions

- Prettier: single quotes, semicolons, 2 spaces, trailing commas `es5`, 80 cols; imports sorted by `@trivago/prettier-plugin-sort-imports` (react → third-party → `@/` → relative, separated by blank lines)
- Named exports for components; functional components with hooks
- Use SCSS variables/mixins from `src/scss` instead of hard-coded colors
- Project images: `.webp` format

## Adding a project

1. Add a screenshot to `public/images/projects/<name>.webp`
2. Append an entry to `commercial` or `personal` in `src/data/pageContent.ts` (`title`, `description`, `technologies`, `img`, optional `role`, `demoUrl`, `codeUrl`)

## Deployment

Pushing to `main` triggers `.github/workflows/jekyll-gh-pages.yml`: `npm ci` → `npm run build` → deploy `dist/` to GitHub Pages. Vite `base` is `/portfolio/` — keep asset paths relative so they work under that prefix.
