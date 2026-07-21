'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PAGES } from './site';

export default function Nav() {
  const here = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') setOpen(false);
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, []);

  // close the menu whenever a route change lands
  useEffect(() => setOpen(false), [here]);

  const link = (p) => (
    <Link key={p.h} href={p.h} aria-current={p.h === here ? 'page' : undefined}>
      {p.n}
    </Link>
  );

  return (
    <>
      <header className="nav">
        <Link className="nav__brand" href="/">
          <span className="nav__mark">UB</span>
          <span className="nav__name">Utkarsh Baranwal</span>
        </Link>
        <nav className="nav__pills">{PAGES.slice(0, 4).map(link)}</nav>
        <div className="nav__side">
          {PAGES.slice(4, 7).map(link)}
          <Link className="nav__cta" href="/book-call">
            Book a Call
          </Link>
          <button
            className="nav__k"
            id="cmdBtn"
            aria-label="Open command menu"
            onClick={() => setOpen((v) => !v)}
          >
            ⌘K
          </button>
        </div>
      </header>

      <div
        className="cmd"
        id="cmd"
        hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="cmd__box" role="dialog" aria-modal="true" aria-label="Command menu">
          <div className="cmd__head">COMMAND MENU — GO TO</div>
          <div className="cmd__list">
            {PAGES.map((p) => (
              <Link key={p.h} href={p.h}>
                <span>{p.n}</span>
                <span>{p.k}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
