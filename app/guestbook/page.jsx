import Guestbook from './Guestbook';

export const metadata = {
  title: 'Guestbook — Utkarsh Baranwal',
  description: 'Say hello, drop feedback, or just prove you were here.'
};

export default function GuestbookPage() {
  return (
    <>
      <header className="narrow phead">
        <div className="clip">
          <span className="kicker" style={{ display: 'block' }}>
            Leave your signature
          </span>
        </div>
        <div className="clip">
          <h1 style={{ animationDelay: '.12s' }}>Guestbook</h1>
        </div>
        <div className="clip">
          <p
            style={{
              animationDelay: '.24s',
              fontSize: 'clamp(18px,1.8vw,24px)',
              lineHeight: 1.4
            }}
          >
            Say hello, drop feedback, or just{' '}
            <em style={{ color: 'var(--ink)' }}>prove you were here.</em>
          </p>
        </div>
      </header>
      <Guestbook />
    </>
  );
}
