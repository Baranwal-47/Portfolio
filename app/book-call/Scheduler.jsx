'use client';

import { useEffect, useState } from 'react';

// ponytail: mailto instead of a booking backend. Replace this panel with a cal.com embed when you have one.
const EMAIL = 'utkarshbaranwal47@gmail.com';
const TIMES = ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM', '6:30 PM', '9:00 PM'];
const DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function Scheduler() {
  // built after mount: "the next 7 days" depends on the visitor's clock, not the server's
  const [days, setDays] = useState([]);
  const [day, setDay] = useState(null);
  const [slot, setSlot] = useState(null);

  useEffect(() => {
    setDays(
      Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + 1 + i);
        return {
          key: d.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          }),
          dow: DOW[d.getDay()],
          num: d.getDate()
        };
      })
    );
  }, []);

  const ready = day && slot;
  const href = ready
    ? 'mailto:' +
      EMAIL +
      '?subject=' +
      encodeURIComponent('Call request — ' + day + ' at ' + slot + ' IST') +
      '&body=' +
      encodeURIComponent(
        'Hi Utkarsh,\n\nI’d like to book a 30-min call on ' +
          day +
          ' at ' +
          slot +
          ' IST.\n\nTopic:\n'
      )
    : '#';

  return (
    <div className="panel sched" data-reveal>
      <div className="sched__row">
        <span className="kicker">Pick a day</span>
        <span>IST · 30 MIN</span>
      </div>
      <div className="days" id="days">
        {days.map((d) => (
          <button
            key={d.key}
            type="button"
            aria-pressed={String(d.key === day)}
            onClick={() => setDay(d.key)}
          >
            <i>{d.dow}</i>
            <b>{d.num}</b>
          </button>
        ))}
      </div>
      <div className="sched__row">
        <span className="kicker">Pick a time</span>
      </div>
      <div className="times" id="times">
        {TIMES.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={String(t === slot)}
            onClick={() => setSlot(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <a className="confirm" id="confirm" href={href} aria-disabled={String(!ready)}>
        {ready ? `Confirm — ${day} · ${slot} ✦` : 'Pick a day and time'}
      </a>
      <small>DEMO SCHEDULER — OPENS A PREFILLED EMAIL. SWAP FOR A CAL.COM EMBED ON DEPLOY.</small>
    </div>
  );
}
