export const metadata = {
  title: 'Links — Utkarsh Baranwal',
  description:
    'Every place to find Utkarsh Baranwal online — GitHub, LinkedIn, LeetCode, X and email.'
};

const ROWS = [
  ['01', 'GitHub', 'github.com/Baranwal-47', 'https://github.com/Baranwal-47', true],
  [
    '02',
    'LinkedIn',
    'linkedin.com/in/utkarsh-baranwal',
    'https://www.linkedin.com/in/utkarsh-baranwal',
    true
  ],
  ['03', 'LeetCode', 'ADD YOUR HANDLE', 'https://leetcode.com', true],
  ['04', 'X / Twitter', 'ADD YOUR HANDLE', 'https://x.com', true],
  [
    '05',
    'Email',
    'utkarshbaranwal47@gmail.com',
    'mailto:utkarshbaranwal47@gmail.com',
    false
  ]
];

export default function Links() {
  return (
    <>
      <header className="wrap lhead">
        <div>
          <div className="clip">
            <span className="kicker" style={{ display: 'block' }}>
              Connect / Follow / Chat
            </span>
          </div>
          <div className="clip">
            <h1 style={{ animationDelay: '.12s' }}>
              My Digital
              <br />
              <em className="ghost">Presence</em>
            </h1>
          </div>
        </div>
        <div className="lhead__ava clip">
          <div className="avatar-ph" style={{ animationDelay: '.24s', fontSize: '44px' }}>
            UB
          </div>
        </div>
      </header>

      <section className="wrap" style={{ paddingBottom: '130px' }}>
        {ROWS.map(([idx, name, handle, href, external]) => (
          <a
            className="lrow"
            data-reveal
            href={href}
            key={idx}
            {...(external ? { target: '_blank', rel: 'noopener' } : {})}
          >
            <span className="lrow__idx">{idx}</span>
            <span className="lrow__main">
              <b>{name}</b>
              <span>{handle}</span>
            </span>
            <span className="lrow__go">
              VISIT <i>↗</i>
            </span>
          </a>
        ))}
        <div className="rule"></div>
      </section>
    </>
  );
}
