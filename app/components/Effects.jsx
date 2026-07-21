'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/* ponytail: one DOM-level effect for the whole site instead of a wrapper
   component per reveal/clock/copy button — the markup keeps its data-* hooks. */
export default function Effects() {
  const here = usePathname();

  useEffect(() => {
    const ac = new AbortController();

    // scroll reveals
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

    // live IST clock
    const clock = document.querySelectorAll('[data-clock]');
    let timer;
    if (clock.length) {
      const tick = () => {
        const t = new Date()
          .toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Kolkata'
          })
          .toUpperCase();
        clock.forEach((el) => {
          el.textContent = t;
        });
      };
      tick();
      timer = setInterval(tick, 30000);
    }

    // copy-to-clipboard buttons
    document.querySelectorAll('[data-copy]').forEach((btn) => {
      const label = btn.querySelector('[data-copy-label]');
      const idle = label ? label.textContent : '';
      btn.addEventListener(
        'click',
        () => {
          navigator.clipboard.writeText(btn.getAttribute('data-copy')).catch(() => {});
          if (!label) return;
          label.textContent = 'COPIED ✓';
          setTimeout(() => {
            label.textContent = idle;
          }, 2000);
        },
        { signal: ac.signal }
      );
    });

    return () => {
      io.disconnect();
      clearInterval(timer);
      ac.abort();
    };
  }, [here]);

  return null;
}
