'use client';

import { useEffect, useState } from 'react';

// ponytail: localStorage only — no backend to run, no spam to moderate.
// Swap `load`/`save` for fetch() calls when you want signatures shared across visitors.
const KEY = 'ub-guestbook';
const SEED = [
  {
    name: 'Placeholder Visitor',
    date: 'JUL 12, 2026',
    msg: 'Love the dark editorial vibe — that sticky project stack on the home page is slick.'
  },
  {
    name: 'Another Placeholder',
    date: 'JUL 05, 2026',
    msg: 'The DPI engine write-up convinced me to finally learn C++ threading. Thanks!'
  },
  { name: 'First Signature', date: 'JUN 28, 2026', msg: 'Signed before it was cool. ✦' }
];

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export default function Guestbook() {
  // starts empty so the server render and first client render agree
  const [mine, setMine] = useState([]);
  useEffect(() => setMine(load()), []);

  const all = mine.concat(SEED);

  function sign(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    // form.name would hit HTMLFormElement.name, not the input — go through elements
    const name = form.elements.namedItem('name').value.trim();
    const msg = form.elements.namedItem('message').value.trim();
    if (!name || !msg) return;
    const date = new Date()
      .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      .toUpperCase();
    const next = [{ name, msg, date }].concat(mine);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
    setMine(next);
    form.reset();
  }

  return (
    <>
      <section className="narrow" style={{ paddingBottom: '60px' }}>
        <form className="panel gform" id="gform" onSubmit={sign}>
          <input
            id="gname"
            name="name"
            placeholder="Your name"
            maxLength={60}
            required
            autoComplete="name"
          />
          <textarea
            id="gmsg"
            name="message"
            placeholder="Your message…"
            rows={3}
            maxLength={500}
            required
          />
          <div className="gform__foot">
            <small>STORED LOCALLY IN YOUR BROWSER — WIRE TO A DB ON DEPLOY</small>
            <button type="submit">Sign ✦</button>
          </div>
        </form>
      </section>

      <section className="narrow" style={{ paddingBottom: '130px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '24px' }}>
          <span className="kicker">Recent signatures</span>
          <span className="acc" style={{ font: '400 11px/1 var(--mono)' }} id="gcount">
            {String(all.length).padStart(2, '0')}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} id="gfeed">
          {all.map((e, i) => (
            <div className="sig" key={`${e.date}-${i}`}>
              <div className="sig__head">
                <b>{e.name}</b>
                <time>{e.date}</time>
              </div>
              <p>{e.msg}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
