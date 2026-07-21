export const metadata = {
  title: 'About — Utkarsh Baranwal',
  description:
    'Experience, education and open-source work of Utkarsh Baranwal — IPE Global, KarmicSphere, IIIT Jabalpur.'
};

const JOBS = [
  {
    period: 'OCT 2025 — DEC 2025',
    place: 'New Delhi (Remote)',
    kind: 'Internship',
    org: 'IPE Global',
    role: 'Frontend Developer Intern — Geospatial & Python',
    points: [
      'Architected a browser-based climate-risk portal integrating 30 Leaflet/Folium maps across 4 heat-risk indices and 23 district blocks of Patna, sourcing and processing OSM/GIS datasets in Python and Jupyter.',
      'Delivered a React/Vite dashboard with 11 Recharts modules — donut, bar and population columns — with hover tooltips.',
      'Integrated OpenWeatherMap, Nominatim geocoding and EN/HI Google Translate with zero backend infrastructure.'
    ],
    tags: ['React', 'Vite', 'Leaflet', 'Python', 'Jupyter', 'GeoJSON', 'Recharts']
  },
  {
    period: 'MAY 2025 — OCT 2025',
    place: 'Jodhpur (Remote)',
    kind: 'Internship',
    org: 'KarmicSphere',
    role: 'Product & Frontend Engineering Intern — Inkosei / NovelPedia',
    points: [
      'Developed UI across 14 Next.js app routes for NovelPedia — home feed, explore, chapter reader, auth and author dashboard — using Next.js, React, TypeScript and Supabase.',
      'Engineered the author writing workspace end-to-end: Quill rich-text editor with custom formatting, markdown import/export, image embedding and keyboard shortcuts, wired to a Django backend with JWT auth.',
      'Translated Figma designs into 70+ production React/TSX components and authored the frontend architecture documentation that standardized practices across the codebase.'
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Django', 'Quill', 'Figma']
  },
  {
    period: '2022 — JUNE 2026',
    place: 'Jabalpur, MP',
    kind: 'Education',
    org: 'IIIT Jabalpur',
    role: 'B.Tech — Computer Science & Engineering',
    points: [
      'Coursework across DSA, OOP, Software Engineering, Operating Systems, DBMS, Computer Networks and AI/ML.',
      'Team Lead — ZKP Blockchain Identity (BTP): led a team of 4 building privacy-preserving student identity verification with zero-knowledge proofs and Ethereum smart contracts.',
      'Represented the institute football club in 10+ inter-college matches.'
    ],
    tags: ['DSA', 'OS', 'DBMS', 'AI & ML', 'Ethereum', 'ZK Proofs']
  },
  {
    period: '2024 — PRESENT',
    place: 'Global',
    kind: 'Competitions & OSS',
    org: 'Beyond Work',
    role: 'Builder, Competitor, Contributor',
    points: [
      "National Semi-Finalist — Flipkart GRiD 7.0, one of India's largest engineering competitions across software and systems design tracks.",
      'Top 5% of 16,439 candidates — NPTEL Privacy & Security in Online Social Media; certified in Advanced Computer Networks.',
      'Building systems-level side projects — a multi-threaded C++ deep packet inspection engine, OCR pipelines, full-stack platforms.'
    ],
    tags: ['C++17', 'Systems', 'Networking', 'Open Source']
  }
];

/* ponytail: seeded LCG so the grid is stable between loads (and matches on the
   server); swap for the GitHub API when you have a token. */
function ghCells() {
  const shades = ['#1c1c1c', '#1c1c1c', '#4d2113', '#93330f', '#FF4D00'];
  let seed = 47;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  return Array.from({ length: 52 * 7 }, () => {
    const r = rnd();
    return shades[r < 0.38 ? 0 : r < 0.6 ? 1 : r < 0.8 ? 2 : r < 0.93 ? 3 : 4];
  });
}

export default function About() {
  return (
    <>
      <header className="wrap phead">
        <div className="clip">
          <span className="kicker" style={{ display: 'block' }}>
            Who I am
          </span>
        </div>
        <div className="clip">
          <h1 style={{ animationDelay: '.12s' }}>About Me</h1>
        </div>
        <div className="clip">
          <p
            style={{
              animationDelay: '.24s',
              fontSize: 'clamp(20px,2vw,28px)',
              lineHeight: 1.4
            }}
          >
            Get to know more about <em style={{ color: 'var(--ink)' }}>who I am.</em>
          </p>
        </div>
      </header>

      <section className="wrap" style={{ paddingBottom: '60px' }}>
        <div
          className="sectag rule"
          data-reveal
          style={{ paddingTop: '28px', marginBottom: '56px' }}
        >
          <span className="kicker">The experience</span>
          <h2>
            Experience That Brings{' '}
            <em className="acc" style={{ textTransform: 'none' }}>
              Ideas
            </em>{' '}
            to Life
          </h2>
        </div>

        {JOBS.map((j) => (
          <article className="job" data-reveal key={j.org}>
            <div className="job__meta">
              <span className="period">{j.period}</span>
              <span>{j.place}</span>
              <span>{j.kind}</span>
            </div>
            <div className="job__body">
              <h3>{j.org}</h3>
              <span className="role">{j.role}</span>
              <ul>
                {j.points.map((t) => (
                  <li key={t}>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="job__chips">
                {j.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="wrap" style={{ padding: '50px 28px 120px' }}>
        <div className="sectag" data-reveal style={{ marginBottom: '36px' }}>
          <span className="kicker">My code journey</span>
          <h2>
            GitHub Activity{' '}
            <em className="acc" style={{ textTransform: 'none' }}>
              &amp;&amp;
            </em>{' '}
            Open Source
          </h2>
        </div>
        <div className="panel gh" data-reveal>
          <div className="gh__grid" id="ghGrid">
            {ghCells().map((bg, i) => (
              <span key={i} style={{ background: bg }} />
            ))}
          </div>
          <div className="gh__legend">
            <span>ILLUSTRATIVE — WIRE TO THE GITHUB API ON DEPLOY</span>
            <div>
              LESS <i style={{ background: '#1c1c1c' }} />
              <i style={{ background: '#4d2113' }} />
              <i style={{ background: '#93330f' }} />
              <i style={{ background: '#FF4D00' }} /> MORE
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
