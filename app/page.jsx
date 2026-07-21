import Link from 'next/link';

const PROJECTS = [
  {
    kicker: '01 — Systems Engineering',
    title: 'Deep Packet Inspection Engine',
    sub: 'A multi-threaded C++17 network inspection pipeline that classifies and blocks encrypted traffic in real time — parsing raw packets byte-by-byte from Ethernet frames up to TLS Client Hello.',
    points: [
      'Reader → LB → Fast Path → Writer pipeline with zero lock contention across 4 workers',
      'Extracts TLS SNI without decryption to identify encrypted HTTPS destinations',
      'O(1) per-packet blocking via per-thread flow tables, zero misclassification across 18 app types'
    ],
    chips: [
      ['https://cdn.simpleicons.org/cplusplus', 'C++17'],
      ['https://cdn.simpleicons.org/cmake', 'CMake'],
      ['https://cdn.simpleicons.org/linux/FFFFFF', 'Linux'],
      ['https://cdn.simpleicons.org/wireshark', 'Wireshark']
    ],
    cta: 'VIEW CODE ↗',
    shots: ['DPI · SCREEN 1', 'DPI · SCREEN 2']
  },
  {
    kicker: '02 — Full Stack Product',
    title: 'MedScan',
    sub: 'A medicine discovery and ordering platform: 3,000+ medicines scraped and fuzzy-searchable, handwritten prescriptions read by OCR, and a Stripe pipeline gated by a pharmacist approval queue.',
    points: [
      'Fuzzy search over 3,028 scraped medicines — 90% fewer failed lookups vs exact match',
      'TrOCR reads handwritten prescriptions, Tesseract.js as client-side fallback',
      '25+ REST endpoints with JWT auth, RBAC, rate limiting and Stripe signature verification'
    ],
    chips: [
      ['https://cdn.simpleicons.org/react', 'React'],
      ['https://cdn.simpleicons.org/nodedotjs', 'Node.js'],
      ['https://cdn.simpleicons.org/mongodb', 'MongoDB'],
      ['https://cdn.simpleicons.org/stripe', 'Stripe'],
      ['https://cdn.simpleicons.org/puppeteer/FFFFFF', 'Puppeteer']
    ],
    cta: 'VIEW CODE ↗',
    shots: ['MEDSCAN · SCREEN 1', 'MEDSCAN · SCREEN 2']
  },
  {
    kicker: '03 — Platform UI · Inkosei',
    title: 'NovelPedia',
    sub: 'A web-novel platform built across 14 Next.js app routes — home feed, explore, chapter reader, auth, and a full author dashboard — translated from Figma into 70+ production components.',
    points: [
      'End-to-end author workspace: Quill rich-text editor, markdown import/export, shortcuts',
      '70+ React/TSX components spanning editor, dashboard, analytics and messaging',
      'Django backend with JWT auth; frontend architecture docs standardized the codebase'
    ],
    chips: [
      ['https://cdn.simpleicons.org/nextdotjs/FFFFFF', 'Next.js'],
      ['https://cdn.simpleicons.org/typescript', 'TypeScript'],
      ['https://cdn.simpleicons.org/supabase', 'Supabase'],
      ['https://cdn.simpleicons.org/django/44B78B', 'Django'],
      ['https://cdn.simpleicons.org/figma', 'Figma']
    ],
    cta: 'VIEW PROJECT ↗',
    shots: ['NOVELPEDIA · SCREEN 1', 'NOVELPEDIA · SCREEN 2']
  },
  {
    kicker: '04 — Geospatial · IPE Global',
    title: 'Patna HeatMap',
    sub: 'A browser-based climate-risk portal for Patna: 30 interactive Leaflet maps across 4 heat-risk indices and 23 district blocks, with an 11-module Recharts dashboard — zero backend infrastructure.',
    points: [
      '30 Leaflet/Folium choropleth maps with GeoJSON overlays from OSM/GIS data',
      '11 Recharts modules — donut, bar, population columns — with hover tooltips',
      'OpenWeatherMap, Nominatim geocoding and EN/HI Google Translate integrated'
    ],
    chips: [
      ['https://cdn.simpleicons.org/react', 'React'],
      ['https://cdn.simpleicons.org/vite', 'Vite'],
      ['https://cdn.simpleicons.org/leaflet', 'Leaflet'],
      ['https://cdn.simpleicons.org/python', 'Python'],
      ['https://cdn.simpleicons.org/jupyter', 'Jupyter']
    ],
    cta: 'VIEW PROJECT ↗',
    shots: ['HEATMAP · SCREEN 1', 'HEATMAP · SCREEN 2']
  }
];

const SKILLS = [
  ['https://cdn.simpleicons.org/cplusplus', 'C/C++'],
  ['https://cdn.simpleicons.org/python', 'Python'],
  ['https://cdn.simpleicons.org/javascript', 'JavaScript'],
  ['https://cdn.simpleicons.org/typescript', 'TypeScript'],
  ['https://cdn.simpleicons.org/react', 'React'],
  ['https://cdn.simpleicons.org/nextdotjs/FFFFFF', 'Next.js'],
  ['https://cdn.simpleicons.org/nodedotjs', 'Node.js'],
  ['https://cdn.simpleicons.org/express/FFFFFF', 'Express'],
  ['https://cdn.simpleicons.org/react/61DAFB', 'React Native'],
  ['https://cdn.simpleicons.org/django/44B78B', 'Django'],
  ['https://cdn.simpleicons.org/mongodb', 'MongoDB'],
  ['https://cdn.simpleicons.org/mysql', 'MySQL'],
  ['https://cdn.simpleicons.org/postgresql', 'PostgreSQL'],
  ['https://cdn.simpleicons.org/redis', 'Redis'],
  ['https://cdn.simpleicons.org/docker', 'Docker'],
  ['https://cdn.simpleicons.org/git', 'Git'],
  ['https://cdn.simpleicons.org/github/FFFFFF', 'GitHub'],
  ['https://cdn.simpleicons.org/figma', 'Figma'],
  ['https://cdn.simpleicons.org/postman', 'Postman'],
  ['https://cdn.simpleicons.org/vercel/FFFFFF', 'Vercel'],
  ['https://cdn.simpleicons.org/leaflet', 'Leaflet']
];

const QUOTES = [
  [
    '“Utkarsh translated our Figma system into production components faster than we could review them — and the architecture docs he left behind still guide the team.”',
    'PRODUCT LEAD — INKOSEI'
  ],
  [
    '“The climate portal shipped with zero backend infrastructure and still handled every dataset we threw at it. Rare mix of geospatial and frontend skill.”',
    'PROJECT MANAGER — IPE GLOBAL'
  ],
  [
    '“Give him a vague problem and he returns a working system with the edge cases already handled. The DPI engine write-up alone was worth the interview.”',
    'MENTOR — IIIT JABALPUR'
  ]
];

const showcase = (
  <span>
    VENTURE <span className="out">SHOWCASE</span>&nbsp;<span className="acc">✦</span>&nbsp;VENTURE{' '}
    <span className="out">SHOWCASE</span>&nbsp;<span className="acc">✦</span>&nbsp;
  </span>
);

const words = (
  <span>
    User-Friendly <span className="acc">✦</span> Adaptive <span className="acc">✦</span> Fluid{' '}
    <span className="acc">✦</span> Future-Proof <span className="acc">✦</span> SEO-Ready{' '}
    <span className="acc">✦</span> Immersive <span className="acc">✦</span> Protected{' '}
    <span className="acc">✦</span> Dependable <span className="acc">✦</span> Captivating{' '}
    <span className="acc">✦</span>&nbsp;
  </span>
);

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero__top">
          <div className="clip">
            <h2 style={{ animationDelay: '.15s' }}>
              I design and build products
              <br />
              that deliver <em className="acc">real impact.</em>
            </h2>
          </div>
          <div className="hero__ava clip">
            <div className="avatar-ph" style={{ animationDelay: '.3s' }}>
              UB
            </div>
          </div>
        </div>
        <div className="hero__meta clip" style={{ animationDelay: '.45s' }}>
          <span>BASED IN JABALPUR, INDIA</span>
          <span>AI &amp; FULL STACK DEVELOPER</span>
          <span>CRAFTING MODERN EXPERIENCES</span>
        </div>
        <div className="clip">
          <h1 className="hero__name" style={{ animationDelay: '.55s' }}>
            Utkarsh Baranwal
          </h1>
        </div>
      </header>

      <section className="wrap">
        <div className="bento">
          <div className="panel" data-reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ font: '700 26px/1.1 var(--body)' }}>
                Utkarsh <em>Baranwal</em>
              </span>
              <span className="kicker">
                JABALPUR, IN · <span data-clock>—</span> IST
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '14px',
                paddingTop: '18px',
                borderTop: '1px solid var(--line)',
                font: '500 13px/1 var(--body)'
              }}
            >
              <a
                href="https://github.com/Baranwal-47"
                target="_blank"
                rel="noopener"
                style={{ color: 'var(--sub)' }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh-baranwal"
                target="_blank"
                rel="noopener"
                style={{ color: 'var(--sub)' }}
              >
                LinkedIn
              </a>
              <a href="mailto:utkarshbaranwal47@gmail.com" style={{ color: 'var(--sub)' }}>
                Email
              </a>
            </div>
          </div>

          <div className="panel" data-reveal>
            <span className="kicker">Detail-driven engineering</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3>
                Products <em style={{ color: 'var(--sub)' }}>you can feel.</em>
              </h3>
              <p className="sub" style={{ maxWidth: '44ch' }}>
                From byte-level packet parsers to pixel-level interfaces — I care about the layers
                users never see but always feel.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="chip chip--plain">Systems</span>
              <span className="chip chip--plain">Full Stack</span>
              <span className="chip chip--plain">AI</span>
              <span className="chip chip--plain">Craft</span>
            </div>
          </div>

          <div className="panel" data-reveal>
            <span className="kicker" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="dot"></span>Available for work
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h3 style={{ fontSize: '24px', lineHeight: 1.15, textTransform: 'uppercase' }}>
                Let&apos;s build <em style={{ textTransform: 'none' }}>something worth shipping.</em>
              </h3>
              <button className="copybtn" data-copy="utkarshbaranwal47@gmail.com">
                utkarshbaranwal47@gmail.com
                <br />
                <span data-copy-label>TAP TO COPY EMAIL</span>
              </button>
            </div>
            <Link className="btn btn--solid" href="/book-call">
              BOOK A CALL ↗
            </Link>
          </div>
        </div>
      </section>

      <div className="marq marq--big">
        <div className="marq__track">
          {showcase}
          {showcase}
        </div>
      </div>

      <section className="wrap" style={{ paddingTop: '110px', paddingBottom: '60px' }}>
        {PROJECTS.map((p) => (
          <article className="proj" key={p.title}>
            <div className="proj__body">
              <span className="kicker">{p.kicker}</span>
              <h3>{p.title}</h3>
              <p className="sub">{p.sub}</p>
              <ul>
                {p.points.map((t) => (
                  <li key={t}>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="proj__chips">
                {p.chips.map(([src, label]) => (
                  <span className="chip chip--sm" key={label}>
                    <img src={src} alt="" />
                    {label}
                  </span>
                ))}
              </div>
              <a
                className="underlink"
                href="https://github.com/Baranwal-47"
                target="_blank"
                rel="noopener"
              >
                {p.cta}
              </a>
            </div>
            <div className="proj__shots">
              {p.shots.map((s) => (
                <div className="shot" key={s}>
                  <div className="shot-ph">{s}</div>
                </div>
              ))}
            </div>
          </article>
        ))}

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
          <Link className="btn" href="/work">
            SEE MORE PROJECTS ↗
          </Link>
        </div>
      </section>

      <section className="wrap sec rule">
        <div className="sechead" data-reveal>
          <div>
            <span className="kicker">My skillset</span>
            <h2 className="display">
              The Magic
              <br />
              <em className="ghost">Behind</em>
            </h2>
          </div>
          <div className="orn spin">✦</div>
        </div>
        <div className="skills" data-reveal>
          {SKILLS.map(([src, label]) => (
            <span className="chip" key={label}>
              <img src={src} alt="" />
              {label}
            </span>
          ))}
        </div>
      </section>

      <div className="marq marq--words">
        <div className="marq__track marq__track--rev">
          {words}
          {words}
        </div>
      </div>

      <section className="wrap sec">
        <div data-reveal style={{ marginBottom: '52px' }}>
          <span className="kicker">What others say</span>
          <h2 className="display" style={{ marginTop: '12px' }}>
            The Voices <em className="ghost">Behind</em>
          </h2>
        </div>
        <div className="cards3" data-reveal>
          {QUOTES.map(([quote, who]) => (
            <figure className="panel quote" key={who}>
              <span className="acc" style={{ fontSize: '28px', lineHeight: 1 }}>
                ✦
              </span>
              <blockquote>{quote}</blockquote>
              <figcaption>
                <b>Placeholder Name</b>
                <span>{who}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
