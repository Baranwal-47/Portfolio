export const metadata = {
  title: 'Work — Utkarsh Baranwal',
  description:
    'Selected projects by Utkarsh Baranwal — systems engineering, full stack platforms, geospatial interfaces and blockchain.'
};

const CARDS = [
  {
    cover: 'DPI ENGINE',
    kicker: '01 — Systems',
    year: '2025',
    title: 'Deep Packet Inspection Engine',
    body: 'Multi-threaded C++17 pipeline (Reader → LB → Fast Path → Writer) that parses raw packets byte-by-byte, extracts TLS SNI without decryption, and blocks flows in O(1) — zero misclassification across 18 app types.',
    tags: ['C++17', 'Multithreading', 'TCP/IP', 'TLS', 'PCAP', 'CMake'],
    cta: 'VIEW CODE ↗',
    href: 'https://github.com/Baranwal-47'
  },
  {
    cover: 'MEDSCAN',
    kicker: '02 — Full Stack',
    year: '2025',
    title: 'MedScan — PR201',
    body: '3,028 medicines scraped via Puppeteer with fuzzy search (90% fewer failed lookups), TrOCR for handwritten prescriptions, and a Stripe pipeline with pharmacist approval queue behind 25+ REST endpoints.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tesseract.js'],
    cta: 'VIEW CODE ↗',
    href: 'https://github.com/Baranwal-47'
  },
  {
    cover: 'NOVELPEDIA',
    kicker: '03 — Platform UI',
    year: '2025',
    title: 'NovelPedia',
    body: 'Web-novel platform across 14 Next.js routes with a full author workspace — Quill editor, markdown import/export, image embedding — built from Figma into 70+ production components at Inkosei.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Django'],
    cta: 'VIEW PROJECT ↗',
    href: 'https://github.com/Baranwal-47'
  },
  {
    cover: 'PATNA HEATMAP',
    kicker: '04 — Geospatial',
    year: '2025',
    title: 'Patna HeatMap',
    body: 'Climate-risk portal for IPE Global: 30 Leaflet choropleth maps across 4 heat indices and 23 blocks, an 11-module Recharts dashboard, weather + geocoding + EN/HI translation — no backend at all.',
    tags: ['React', 'Leaflet', 'Python', 'GeoJSON'],
    cta: 'VIEW PROJECT ↗',
    href: 'https://github.com/Baranwal-47'
  },
  {
    cover: 'ZKP IDENTITY',
    kicker: '05 — Blockchain · BTP',
    year: '2026',
    title: 'ZKP Identity',
    body: 'Privacy-preserving student identity verification using zero-knowledge proofs and Ethereum smart contracts. Led a team of 4; earned strong examiner feedback on technical depth.',
    tags: ['ZK Proofs', 'Ethereum', 'Solidity', 'Team Lead'],
    cta: 'VIEW CODE ↗',
    href: 'https://github.com/Baranwal-47'
  },
  {
    cover: 'PORTFOLIO',
    kicker: '06 — This Site',
    year: '2026',
    title: 'Portfolio',
    body: 'The site you are looking at — dark editorial design, marquees, sticky project stacks, scroll-driven reveals and a command menu. Designed as a system, built to be forked.',
    tags: ['Design System', 'Motion', 'Typography'],
    cta: 'VIEW SOURCE ↗',
    href: 'https://github.com/Baranwal-47/Portfolio'
  }
];

export default function Work() {
  return (
    <>
      <header className="wrap phead">
        <div className="clip">
          <span className="kicker" style={{ display: 'block' }}>
            Selected projects — 2024 / 2026
          </span>
        </div>
        <div className="clip">
          <h1 style={{ animationDelay: '.12s' }}>Work</h1>
        </div>
        <div className="clip">
          <p
            style={{
              animationDelay: '.24s',
              fontSize: 'clamp(20px,2vw,28px)',
              lineHeight: 1.4
            }}
          >
            Systems, platforms and interfaces — <em style={{ color: 'var(--ink)' }}>built to ship.</em>
          </p>
        </div>
      </header>

      <section className="wrap grid2" style={{ paddingBottom: '120px' }}>
        {CARDS.map((c) => (
          <article className="wcard" data-reveal key={c.title}>
            <div className="wcard__cover">
              <div className="cover-ph">{c.cover}</div>
            </div>
            <div className="wcard__in">
              <div className="wcard__meta">
                <span className="kicker">{c.kicker}</span>
                <span className="year">{c.year}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="wcard__chips">
                {c.tags.map((t) => (
                  <span className="tag tag--sm" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a className="underlink" href={c.href} target="_blank" rel="noopener">
                {c.cta}
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
