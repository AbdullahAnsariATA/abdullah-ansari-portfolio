# Multi-site deployment

This is **one codebase that powers two websites** with the same UI but different content.

- **Shared UI** lives in `src/components` and `src/sections` — change it once and **both sites update**.
- **Per-site content** lives in `src/content/<site>.js` — edit one file and only that site changes.
- The active site is chosen at **build time** via the `VITE_SITE` env var.

## Sites

| Site         | `VITE_SITE`   | Content file               | Build command            |
| ------------ | ------------- | -------------------------- | ------------------------ |
| React Native | `reactnative` | `src/content/reactnative.js` | `npm run build`          |
| Full Stack   | `fullstack`   | `src/content/fullstack.js`   | `npm run build:fullstack` |

`VITE_SITE` is set by the `.env` files:

- `.env` → `VITE_SITE=reactnative` (the default for every build/dev)
- `.env.fullstack` → `VITE_SITE=fullstack` (loaded only with `--mode fullstack`)

## Local commands

```bash
npm run dev               # React Native site (default)
npm run dev:fullstack     # Full Stack site
npm run build             # build React Native -> dist/
npm run build:fullstack   # build Full Stack -> dist/
npm run preview           # preview last React Native build
npm run preview:fullstack # preview last Full Stack build
```

## Vercel setup (two projects, same repo)

Import the **same Git repo** as **two Vercel projects**:

| Vercel project              | Build command            | Output dir | Domain                                  |
| --------------------------- | ------------------------ | ---------- | --------------------------------------- |
| abdullahansari-reactnative  | `npm run build`          | `dist`     | abdullahansari-reactnative.vercel.app   |
| abdullahansari-fullstack    | `npm run build:fullstack`| `dist`     | abdullahansari-fullstack.vercel.app     |

> Note: Vercel's free domains end in **`.vercel.app`**, not `.vercel.com`. Use the
> `.vercel.app` host (or attach your own custom domain in Project → Settings → Domains).

Every push rebuilds **both** projects from the same code:

- Change shared UI (`src/components`, `src/sections`, `src/index.css`) → both sites get it.
- Change `src/content/reactnative.js` → only the React Native site changes.
- Change `src/content/fullstack.js` → only the Full Stack site changes.

### Alternative: one build command, env var in the dashboard

Instead of `build:fullstack`, you can keep the build command as `npm run build` for both
projects and just set the **Environment Variable** `VITE_SITE=fullstack` on the Full Stack
project (Project → Settings → Environment Variables). Both approaches are equivalent.

## Adding a third site later

1. Create `src/content/<newsite>.js` (copy the shape of `reactnative.js`).
2. Register it in `src/content/index.js` (`const sites = { reactnative, fullstack, newsite }`).
3. Add `.env.<newsite>` with `VITE_SITE=<newsite>` and a `build:<newsite>` script.
4. Create a new Vercel project pointing at the same repo with that build command.
