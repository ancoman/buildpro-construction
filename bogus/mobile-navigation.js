/* One mobile navigation controller shared by the homepage and project pages. */
(() => {
  function initMobileNavigation() {
    const header = document.querySelector('.site-header');
    const bar = header?.querySelector('.header-bar');
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('menu-toggle');
    const logo = nav?.querySelector('.nav-logo-link');
    const logoSlot = logo?.parentElement;
    if (!header || !bar || !nav || !toggle || !logoSlot) return;
    const mobile = window.matchMedia('(max-width: 768px)');
    const actions = bar.querySelector('.header-actions');
    const actionsHome = document.createComment('Header actions desktop position');
    if (actions) actions.before(actionsHome);
    const home = document.createElement('li');
    home.className = 'nav-item mobile-home-link';
    home.innerHTML = '<a href="index.html#home">Home</a>';
    nav.querySelector('.nav-menu').prepend(home);
    toggle.setAttribute('aria-controls', 'nav');
    toggle.innerHTML = '<svg class="menu-icon-open" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg><svg class="menu-icon-close" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';

    function sync() {
      const open = mobile.matches && nav.classList.contains('active');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('mobile-menu-open', open);
      if (mobile.matches) nav.setAttribute('aria-hidden', String(!open));
      else nav.removeAttribute('aria-hidden');
    }
    function setOpen(open, restoreFocus = false) {
      nav.classList.toggle('active', open && mobile.matches);
      if (restoreFocus) toggle.focus({preventScroll: true});
      sync();
    }
    function measureHeader() {
      if (mobile.matches) document.documentElement.style.setProperty('--mobile-header-height', `${bar.getBoundingClientRect().height}px`);
    }
    function applyLayout() {
      setOpen(false);
      if (mobile.matches) {
        bar.prepend(logo);
        logo.classList.add('mobile-header-brand');
        if (actions) nav.append(actions);
      } else {
        logoSlot.append(logo);
        logo.classList.remove('mobile-header-brand');
        if (actions) actionsHome.after(actions);
      }
      measureHeader();
      sync();
    }
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('active')));
    nav.addEventListener('click', event => {
      if (mobile.matches && event.target.closest('a, .nav-menu-link, .header-actions button')) setOpen(false);
    }, true);
    document.addEventListener('click', event => {
      if (mobile.matches && nav.classList.contains('active') && !nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (!mobile.matches || !nav.classList.contains('active')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopImmediatePropagation();
        setOpen(false, true);
      } else if (event.key === 'Tab') {
        const focusable = [toggle, ...nav.querySelectorAll('a[href], button:not([disabled]), input:not([disabled])')].filter(el => el.getClientRects().length);
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }, true);
    new MutationObserver(sync).observe(nav, {attributes: true, attributeFilter: ['class']});
    new ResizeObserver(measureHeader).observe(bar);
    mobile.addEventListener('change', applyLayout);
    applyLayout();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMobileNavigation);
  else initMobileNavigation();
})();
