# Portfolio — Utkarsh Baranwal

Dark editorial developer portfolio. Next.js App Router, fully static — every route prerenders to HTML.

**Live pages:** Home · About · Work · Blogs · Links · Uses · Guestbook · Book a Call

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static prerender of all 8 routes
```

## Layout

```
app/layout.jsx          html shell, fonts, nav + footer + effects
app/globals.css         design tokens + every component
app/icon.svg            favicon
app/page.jsx            Home
app/{about,work,blogs,links,uses,guestbook,book-call}/page.jsx
app/components/site.js       PAGES array, email, social links
app/components/Nav.jsx       header + ⌘K command menu
app/components/Footer.jsx    footer
app/components/Effects.jsx   scroll reveals, IST clock, copy-email
app/guestbook/Guestbook.jsx  sign form + localStorage feed
app/book-call/Scheduler.jsx  day/time picker → prefilled mailto
```

Nav and footer come from `app/components/site.js` — edit the `PAGES` array there, not eight files.

## Deploy

Vercel (zero config), or `next build` output on any Node host.

## What still needs your input

- **Photos** — avatar (Home, Links) and the hardware/project cards render lettered placeholders. Drop images into `public/` and swap the `.avatar-ph` / `.cover-ph` / `.shot-ph` divs for `<Image>`.
- **Testimonials** — three "Placeholder Name" quotes on the home page.
- **Blog links** — posts in `app/blogs/page.jsx` all point at `#`.
- **Links page** — LeetCode and X rows say "ADD YOUR HANDLE".
- **GitHub graph** — `app/about/page.jsx` draws a seeded fake grid; wire it to the GitHub API if you want the real thing.
- **Guestbook** — signatures live in the visitor's own `localStorage`. Point it at a route handler + DB to share them.
- **Book a call** — the picker opens a prefilled `mailto:`. Swap for a cal.com embed.
