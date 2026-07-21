# Portfolio — Utkarsh Baranwal

Dark editorial developer portfolio. Static HTML/CSS/JS — no framework, no build step.

**Live pages:** Home · About · Work · Blogs · Links · Uses · Guestbook · Book a Call

## Run it

```bash
python -m http.server 8000   # then open http://localhost:8000
```

## Layout

```
index.html  about.html  work.html  blogs.html
links.html  uses.html   guestbook.html  book-call.html
assets/site.css   design tokens + every component
assets/site.js    nav, footer, ⌘K menu, scroll reveals, IST clock, copy-email
assets/favicon.svg
```

Nav and footer are injected by `assets/site.js` — edit the `PAGES` array there, not eight files.

## Deploy

Any static host. GitHub Pages: Settings → Pages → deploy from `main` / root.

## What still needs your input

- **Photos** — avatar (Home, Links) and the hardware/project cards render lettered placeholders. Drop images into `assets/` and swap the `.avatar-ph` / `.cover-ph` / `.shot-ph` divs for `<img>`.
- **Testimonials** — three "Placeholder Name" quotes on the home page.
- **Blog links** — `blogs.html` posts all point at `#`.
- **Links page** — LeetCode and X rows say "ADD YOUR HANDLE".
- **GitHub graph** — `about.html` draws a seeded fake grid; wire it to the GitHub API if you want the real thing.
- **Guestbook** — signatures live in the visitor's own `localStorage`. Point it at a DB to share them.
- **Book a call** — the picker opens a prefilled `mailto:`. Swap for a cal.com embed.

