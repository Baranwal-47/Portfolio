'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PAGES, EMAIL, GITHUB, LINKEDIN } from './site';

export default function Footer() {
  const here = usePathname();

  return (
    <footer className="foot">
      <div className="foot__top">
        <div className="foot__cta" data-reveal>
          <span className="kicker">Got an idea?</span>
          <Link href="/book-call">Let&rsquo;s Build ↗</Link>
        </div>
        <div className="foot__cols" data-reveal>
          <div>
            <span className="kicker">Pages</span>
            {PAGES.slice(0, 4).map((p) => (
              <Link key={p.h} href={p.h} aria-current={p.h === here ? 'page' : undefined}>
                {p.n}
              </Link>
            ))}
          </div>
          <div>
            <span className="kicker">Say hi</span>
            <a href={GITHUB} target="_blank" rel="noopener">
              GitHub ↗
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener">
              LinkedIn ↗
            </a>
            <a href={`mailto:${EMAIL}`}>Email ↗</a>
          </div>
        </div>
      </div>
      <div className="foot__mark">Utkarsh</div>
      <div className="foot__bar">
        <span>© {new Date().getFullYear()} UTKARSH BARANWAL</span>
        <span>AI &amp; FULL STACK DEVELOPER</span>
      </div>
    </footer>
  );
}
