# akidev.jp, bilingual dev résumé

Dark-mode single-page résumé, live at **<https://akidev.jp/>**, with an
EN / 日本語 toggle.

React 19 · Vite 7 · Tailwind 4. No other runtime dependencies.

## Running it

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run preview` serves the production build locally.

## What is not here

There was an unlisted "personal details" page behind an unguessable hash
route. It is gone, along with the hash router and the 404 page that existed
to serve it.

The reason: this repo is public and the site is public, so an unguessable
URL protected nothing. Everything on that page shipped inside the JavaScript
bundle and sat in plain text in `src/`, discoverable by devtools or GitHub
code search regardless of whether anyone knew the slug. Obscurity is not
access control.

**So there is no phone number, date of birth, street address, prefecture,
or city anywhere in this repo or in the built bundle.** Contact is email,
which is the thing you want findable anyway. Location stays coarse at
"Kyushu, Japan". Keep it that way.

If a recruiter needs the rest, email it to them directly. If you ever
genuinely need a gated page, that requires a server-side auth check, which
a static site cannot provide.

## Editing the content

Everything you'll actually want to change is in two files:

| File | What's in it |
| --- | --- |
| [`src/i18n/content.js`](src/i18n/content.js) | Every string on the site, in both languages |
| [`src/site.config.js`](src/site.config.js) | Social links |

`content.js` has two trees, `en` and `ja`, with **identical shapes**. If you
add a field to one, add it to the other. A missing key renders as blank,
not as a fallback to English.

The copy is real, drawn from the English résumé and the 履歴書. The Japanese
is written toward 職務経歴書 conventions: です・ます for prose, 体言止め for
bullets, factual over conversational.

**No em dashes in the copy**, in either language. Use commas, colons, or a
full stop. Date ranges use an en dash in English and 〜 in Japanese.

**Location is deliberately coarse.** "Kyushu, Japan" / 「日本・九州」 appears
everywhere; no prefecture, city, or street address is anywhere in the source
or the built bundle. Keep it that way when you edit.

See [`INTAKE.md`](INTAKE.md) for what's still outstanding.

### Language switching

- Choice is saved to `localStorage` under `portfolio:lang`.
- First visit with no saved choice falls back to the browser's language
  (`ja*` → Japanese, everything else → English).
- Switching sets `<html lang>`, which swaps the font stack to Noto Sans JP
  and loosens line-height, since Japanese text needs more vertical room
  than Latin at the same size.

## Project layout

```
src/
  App.jsx                 providers + backdrop, renders Home
  site.config.js          social links
  i18n/
    content.js            all copy, en + ja
    LanguageContext.jsx   language state, persistence, <html lang> sync
  hooks/
    useReveal.js          scroll-reveal via IntersectionObserver
    useScrollSpy.js       active nav section + scroll progress bar
  components/             Nav, Hero, About, Skills, Experience, …
  pages/                  Home
```

There is no router. The site is one document; every nav item is an in-page
anchor.

## Deploying

Deployed to GitHub Pages at `akidev.jp` by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push
to `main`.

**This requires Settings → Pages → Source set to "GitHub Actions."** If it's
set to "Deploy from a branch" instead, Pages serves the repo source verbatim.
The browser then receives `src/main.jsx` as `text/jsx`, refuses to execute
it, and you get a page with a correct title and favicon but a completely
blank body. Pages cannot build a Vite app on its own; something has to run
`npm run build` first, which is what the workflow is for.

`public/CNAME` holds the custom domain. Pages needs that file present in the
*published output*. `public/` is copied verbatim into `dist/`, so it lands
in the right place. Without it, a deploy can drop the custom-domain setting.

`base` is set to `./` in [`vite.config.js`](vite.config.js), so the build
also works from a subpath (project-site Pages, an S3 prefix) unchanged.

Never commit `dist/`. It's gitignored; the workflow builds it fresh.

The domain is hard-coded in four places. If it ever changes, update all of
them together:

| Where | What |
| --- | --- |
| [`index.html`](index.html) | `<link rel="canonical">` and the `og:` tags |
| [`public/robots.txt`](public/robots.txt) | `Sitemap:` line |
| [`public/sitemap.xml`](public/sitemap.xml) | `<loc>` |
| [`public/CNAME`](public/CNAME) | the domain Pages serves on |
| [`src/components/Nav.jsx`](src/components/Nav.jsx) | the `akidev.jp` wordmark |

### Link previews

`og:` tags are set for when you paste the URL into Slack, LinkedIn, or a
recruiter's inbox. They're static English, because crawlers only read the
served HTML and never run the language toggle.

There's no `og:image`, so previews render as a plain text card. If you want
a proper preview image, drop a 1200×630 PNG at `public/og.png` and add:

```html
<meta property="og:image" content="https://akidev.jp/og.png" />
```

…then change `twitter:card` from `summary` to `summary_large_image`.

## Accessibility notes

