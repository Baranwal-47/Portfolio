/* Shared chrome + behaviour for every page.
   ponytail: nav/footer are injected from here so there's one copy to edit, not eight. */
(function () {
  var PAGES = [
    { n: 'Home',        h: 'index.html',     k: '01' },
    { n: 'About',       h: 'about.html',     k: '02' },
    { n: 'Work',        h: 'work.html',      k: '03' },
    { n: 'Blogs',       h: 'blogs.html',     k: '04' },
    { n: 'Links',       h: 'links.html',     k: '05' },
    { n: 'Uses',        h: 'uses.html',      k: '06' },
    { n: 'Guestbook',   h: 'guestbook.html', k: '07' },
    { n: 'Book a Call', h: 'book-call.html', k: '08' }
  ];
  var EMAIL = 'utkarshbaranwal47@gmail.com';
  var GITHUB = 'https://github.com/Baranwal-47';
  var LINKEDIN = 'https://www.linkedin.com/in/utkarsh-baranwal';
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  function link(p) {
    return '<a href="' + p.h + '"' + (p.h === here ? ' aria-current="page"' : '') + '>' + p.n + '</a>';
  }

  document.body.insertAdjacentHTML('afterbegin',
    '<header class="nav">' +
      '<a class="nav__brand" href="index.html">' +
        '<span class="nav__mark">UB</span><span class="nav__name">Utkarsh Baranwal</span></a>' +
      '<nav class="nav__pills">' + PAGES.slice(0, 4).map(link).join('') + '</nav>' +
      '<div class="nav__side">' +
        PAGES.slice(4, 7).map(link).join('') +
        '<a class="nav__cta" href="book-call.html">Book a Call</a>' +
        '<button class="nav__k" id="cmdBtn" aria-label="Open command menu">⌘K</button>' +
      '</div>' +
    '</header>' +
    '<div class="cmd" id="cmd" hidden>' +
      '<div class="cmd__box" role="dialog" aria-modal="true" aria-label="Command menu">' +
        '<div class="cmd__head">COMMAND MENU — GO TO</div>' +
        '<div class="cmd__list">' +
          PAGES.map(function (p) {
            return '<a href="' + p.h + '"><span>' + p.n + '</span><span>' + p.k + '</span></a>';
          }).join('') +
        '</div>' +
      '</div>' +
    '</div>');

  document.body.insertAdjacentHTML('beforeend',
    '<footer class="foot">' +
      '<div class="foot__top">' +
        '<div class="foot__cta" data-reveal>' +
          '<span class="kicker">Got an idea?</span>' +
          '<a href="book-call.html">Let\'s Build ↗</a>' +
        '</div>' +
        '<div class="foot__cols" data-reveal>' +
          '<div><span class="kicker">Pages</span>' + PAGES.slice(0, 4).map(link).join('') + '</div>' +
          '<div><span class="kicker">Say hi</span>' +
            '<a href="' + GITHUB + '" target="_blank" rel="noopener">GitHub ↗</a>' +
            '<a href="' + LINKEDIN + '" target="_blank" rel="noopener">LinkedIn ↗</a>' +
            '<a href="mailto:' + EMAIL + '">Email ↗</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="foot__mark">Utkarsh</div>' +
      '<div class="foot__bar"><span>© ' + new Date().getFullYear() + ' UTKARSH BARANWAL</span>' +
        '<span>AI &amp; FULL STACK DEVELOPER</span></div>' +
    '</footer>');

  // command menu
  var cmd = document.getElementById('cmd');
  var toggle = function (on) { cmd.hidden = on === undefined ? !cmd.hidden : !on; };
  document.getElementById('cmdBtn').addEventListener('click', function () { toggle(); });
  cmd.addEventListener('click', function (e) { if (e.target === cmd) toggle(false); });
  addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); toggle(); }
    else if (e.key === 'Escape') toggle(false);
  });

  // scroll reveals
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });

  // live IST clock
  var clock = document.querySelectorAll('[data-clock]');
  if (clock.length) {
    var tick = function () {
      var t = new Date().toLocaleTimeString('en-IN',
        { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).toUpperCase();
      clock.forEach(function (el) { el.textContent = t; });
    };
    tick();
    setInterval(tick, 30000);
  }

  // copy-to-clipboard buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var label = btn.querySelector('[data-copy-label]');
    var idle = label ? label.textContent : '';
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(btn.getAttribute('data-copy')).catch(function () {});
      if (!label) return;
      label.textContent = 'COPIED ✓';
      setTimeout(function () { label.textContent = idle; }, 2000);
    });
  });
})();
