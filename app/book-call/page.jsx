import Scheduler from './Scheduler';

export const metadata = {
  title: 'Book a Call — Utkarsh Baranwal',
  description:
    'Book a 30-minute call with Utkarsh Baranwal — freelance builds, AI integrations and systems questions.'
};

export default function BookCall() {
  return (
    <>
      <header className="wrap phead">
        <div className="clip">
          <span className="kicker" style={{ display: 'block' }}>
            Let&apos;s talk
          </span>
        </div>
        <div className="clip">
          <h1 style={{ animationDelay: '.12s' }}>
            Book a <em className="ghost">Call</em>
          </h1>
        </div>
      </header>

      <section className="wrap book" style={{ paddingBottom: '130px' }}>
        <div className="book__pitch" data-reveal>
          <p>
            30 minutes, no agenda slides. Bring an idea, a codebase, or a problem — leave with a
            plan.
          </p>
          <ul>
            <li>
              <span>Freelance builds — full-stack apps, dashboards, geospatial portals</span>
            </li>
            <li>
              <span>AI integrations — OCR pipelines, RAG, model deployment</span>
            </li>
            <li>
              <span>Systems questions — C++, networking, performance</span>
            </li>
          </ul>
          <div className="book__mail">
            <span className="kicker">Prefer email?</span>
            <a href="mailto:utkarshbaranwal47@gmail.com">utkarshbaranwal47@gmail.com ↗</a>
          </div>
        </div>

        <Scheduler />
      </section>
    </>
  );
}
