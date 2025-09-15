(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuLinks = document?.querySelectorAll('[data-menu-link]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', () => {
    burger?.classList.toggle('burger--active');
    // menu?.classList.toggle('menu--active');
    overlay?.classList.toggle('overlay--active');
    document.body.classList.toggle('disable-scroll');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Close menu');
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('burger--active');
    // menu.classList.remove('menu--active');
    overlay.classList.remove('overlay--active');
    document.body.classList.remove('disable-scroll');
  });

  menuLinks?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      burger.classList.remove('burger--active');
      // menu.classList.remove('menu--active');
      overlay.classList.remove('overlay--active');
      document.body.classList.remove('disable-scroll');
    });
  });
})();
