document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    if (el.classList.contains('open')) {
      el.querySelector('.accordion__content').style.maxHeight = el.querySelector('.accordion__content').scrollHeight + 'px';
      el.querySelector('.accordion__control').setAttribute('aria-expanded', true);
      el.querySelector('.accordion__content').setAttribute('aria-hidden', false);
    }

    el.querySelector('.accordion__control').addEventListener('click', (e) => {
      const acc = e.currentTarget.closest('.accordion');
      const control = acc.querySelector('.accordion__control');
      const content = acc.querySelector('.accordion__content');

      acc.classList.toggle('open');

      // если открыт аккордеон
      if (acc.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});

