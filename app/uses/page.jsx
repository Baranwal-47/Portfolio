export const metadata = {
  title: 'Uses — Utkarsh Baranwal',
  description: 'The hardware, dev tools and AI platforms Utkarsh Baranwal uses every day.'
};

const HARDWARE = [
  ['YOUR LAPTOP', 'Laptop / Rig'],
  ['YOUR PHONE', 'Phone'],
  ['YOUR KEYBOARD', 'Keyboard & Mouse'],
  ['YOUR HEADPHONES', 'Audio']
];

const TOOLS = [
  ['https://cdn.simpleicons.org/vscodium/007ACC', 'VS Code', 'PRIMARY IDE'],
  ['https://cdn.simpleicons.org/github/FFFFFF', 'GitHub', 'CODE HOSTING'],
  ['https://cdn.simpleicons.org/vercel/FFFFFF', 'Vercel', 'DEPLOYMENT'],
  ['https://cdn.simpleicons.org/figma', 'Figma', 'INTERFACE DESIGN'],
  ['https://cdn.simpleicons.org/postman', 'Postman', 'API TESTING'],
  ['https://cdn.simpleicons.org/docker', 'Docker', 'CONTAINERS'],
  ['https://cdn.simpleicons.org/notion/FFFFFF', 'Notion', 'KNOWLEDGE BASE'],
  ['https://cdn.simpleicons.org/redis', 'Redis', 'CACHING']
];

const INTEGRATIONS = [
  ['https://cdn.simpleicons.org/claude', 'Claude', 'ADVANCED REASONING'],
  ['https://cdn.simpleicons.org/perplexity', 'Perplexity', 'AI SEARCH'],
  ['https://cdn.simpleicons.org/googlegemini', 'Gemini', 'MULTIMODAL AI'],
  ['https://cdn.simpleicons.org/huggingface', 'Hugging Face', 'AI MODELS'],
  ['https://cdn.simpleicons.org/leetcode', 'LeetCode', 'DSA PRACTICE'],
  ['https://cdn.simpleicons.org/spotify', 'Spotify', 'FOCUS AUDIO'],
  ['https://cdn.simpleicons.org/x/FFFFFF', 'X', 'TECH TWITTER'],
  ['https://cdn.simpleicons.org/kaggle', 'Kaggle', 'ML DATASETS']
];

function ToolGrid({ items }) {
  return (
    <div className="grid4" data-reveal>
      {items.map(([src, name, note]) => (
        <div className="tool" key={name}>
          <img src={src} alt="" />
          <div>
            <b>{name}</b>
            <span>{note}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Uses() {
  return (
    <>
      <header className="wrap phead">
        <div className="clip">
          <span className="kicker" style={{ display: 'block' }}>
            System inventory
          </span>
        </div>
        <div className="clip">
          <h1 style={{ animationDelay: '.12s', fontSize: 'clamp(80px,13vw,220px)' }}>Uses</h1>
        </div>
      </header>

      <section className="wrap" style={{ paddingBottom: '100px' }}>
        <div className="uhead" data-reveal>
          <span>01. Hardware</span>
          <div>
            <h2>My Workstation</h2>
            <p>
              The gear that sits between thought and code. Drop photos of your actual setup into the
              cards below — laptop, phone, keyboard, headphones — and rename the captions to match.
            </p>
          </div>
        </div>
        <div className="grid4" data-reveal>
          {HARDWARE.map(([ph, caption]) => (
            <figure className="hw" key={caption}>
              <div className="hw__img">
                <div className="cover-ph">{ph}</div>
              </div>
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: '100px' }}>
        <div className="uhead" data-reveal>
          <span>02. Software</span>
          <div>
            <h2>Dev Tools</h2>
            <p>
              A strictly curated stack. If a tool doesn&apos;t serve a critical function or spark joy
              with its UI, it doesn&apos;t stay.
            </p>
          </div>
        </div>
        <ToolGrid items={TOOLS} />
      </section>

      <section className="wrap" style={{ paddingBottom: '130px' }}>
        <div className="uhead" data-reveal>
          <span>03. Integrations</span>
          <div>
            <h2>AI &amp; Socials</h2>
            <p>
              The platforms powering daily workflows — LLMs for prototyping and reasoning, networks
              for staying connected.
            </p>
          </div>
        </div>
        <ToolGrid items={INTEGRATIONS} />
      </section>
    </>
  );
}
