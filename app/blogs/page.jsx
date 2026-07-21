export const metadata = {
  title: 'Blogs — Utkarsh Baranwal',
  description:
    'Writing on systems engineering, networking, geospatial frontends and design systems by Utkarsh Baranwal.'
};

const POSTS = [
  {
    date: 'JUN 2026',
    title: 'Parsing TLS by hand: SNI without decryption',
    body: 'What I learned reading Client Hello bytes directly — and why a "t.co" substring bug taught me more than the happy path ever did.',
    tags: ['C++', 'Networking'],
    read: '9 MIN READ'
  },
  {
    date: 'APR 2026',
    title: 'Zero lock contention with 4 workers',
    body: 'Consistent hash-based flow routing beats mutexes: designing a multi-threaded packet pipeline around ownership instead of locks.',
    tags: ['Systems', 'Concurrency'],
    read: '7 MIN READ'
  },
  {
    date: 'FEB 2026',
    title: '30 maps, zero backend',
    body: 'Shipping a climate-risk portal as pure frontend: pre-baking Folium maps in Jupyter and letting the browser do the rest.',
    tags: ['Geospatial', 'React'],
    read: '6 MIN READ'
  },
  {
    date: 'NOV 2025',
    title: '70 components from one Figma file',
    body: 'Translating a design system into production TSX without drift — naming, tokens, and the architecture doc that kept a team honest.',
    tags: ['Design Systems', 'TypeScript'],
    read: '8 MIN READ'
  },
  {
    date: 'AUG 2025',
    title: "OCR for doctors' handwriting",
    body: 'TrOCR, Tesseract.js fallbacks, and fuzzy search: making 3,028 scraped medicines findable from a photo of a prescription.',
    tags: ['AI', 'Full Stack'],
    read: '5 MIN READ'
  }
];

export default function Blogs() {
  return (
    <>
      <header className="wrap phead">
        <div className="clip">
          <span className="kicker" style={{ display: 'block' }}>
            Notes from the trenches
          </span>
        </div>
        <div className="clip">
          <h1 style={{ animationDelay: '.12s' }}>Blogs</h1>
        </div>
        <div className="clip">
          <p
            style={{
              animationDelay: '.24s',
              fontSize: 'clamp(20px,2vw,28px)',
              lineHeight: 1.4
            }}
          >
            Things I learned <em style={{ color: 'var(--ink)' }}>the hard way.</em>
          </p>
        </div>
      </header>

      <section className="wrap" style={{ paddingBottom: '120px' }}>
        {POSTS.map((p) => (
          <a className="post" data-reveal href="#" key={p.title}>
            <span className="post__date">{p.date}</span>
            <span className="post__main">
              <b>{p.title}</b>
              <p>{p.body}</p>
              <span className="post__tags">
                {p.tags.map((t) => (
                  <span className="tag tag--xs" key={t}>
                    {t}
                  </span>
                ))}
              </span>
            </span>
            <span className="post__end">
              <span>{p.read}</span>
              <span>↗</span>
            </span>
          </a>
        ))}

        <div className="note" data-reveal>
          <span className="acc">✦</span>
          <span>
            Placeholder posts — swap the <code>href=&quot;#&quot;</code> values for your real writing
            (Dev.to, Hashnode, Medium).
          </span>
        </div>
      </section>
    </>
  );
}
