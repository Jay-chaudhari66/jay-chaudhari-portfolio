# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Cyberpunk redesign (this pass)

The whole visual identity has been reworked:

- **Palette**: near-black background (`#05050A`), neon cyan (`#00F0FF`) as primary accent, neon magenta/fuchsia (`#FF2E92`-family) as secondary — swapped in everywhere the old blue/purple/indigo/orange classes were used.
- **Fonts**: Chakra Petch for all headings, JetBrains Mono for labels/tags, Inter kept for body copy.
- **3D accent**: `src/components/hero/ParticleField.jsx` — a lightweight canvas background with drifting neon particles and two slow-rotating wireframe polyhedra (hand-rolled 3D projection, no new dependency). Sits behind the hero via `HeroBackground.jsx`.
- **Glitch effect**: `.glitch` class in `index.css` + reusable `src/components/ui/GlitchText.jsx` component. Currently applied to the hero name (hover to see the RGB-split glitch).
- **Global atmosphere**: a fixed perspective grid and CRT scanline texture layered behind/above all content (`body::before` / `body::after` in `index.css`).
- **Cards & buttons**: `SpotlightCard`, `GlassPanel`, and `buttonVariants.js` now carry neon glow borders/shadows instead of plain white/gray.

### Repo cleanup done in this pass
- Removed `src - Copy/` and `src - Copy.zip` (stray committed backups)
- Removed dead empty placeholder components
- `.env` is now git-ignored and untracked — **you still need to rotate your Web3Forms key**, since the old one is in git history on GitHub
- Fixed the `og:url` placeholder in `index.html`

### If you want to go further
- Swap `ParticleField`'s canvas approach for React Three Fiber if you want richer depth/lighting later — the component is isolated so it's a drop-in replacement.
- Apply `GlitchText` to other section titles (`SectionTitle.jsx`) if you want the glitch hover on more than just the hero name.
- Two pre-existing lint warnings (unused imports in `HeroVisual.jsx` and `ContactForm.jsx`) were left as-is — unrelated to this redesign.
