const dropdownButtons = document.querySelectorAll('[data-nav-button]');
const dropdownMenus = document.querySelectorAll('[data-nav-dropdown]');

dropdownButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget;
    const dropdown = currentBtn.closest('.nav__item').querySelector('[data-nav-dropdown]');

    dropdownButtons.forEach(el => {
      if (el !== currentBtn) {
        el.classList.remove('nav__link--active');
        el.querySelector('.nav__icon').classList.remove('nav__icon--active');
      }
    });

    dropdownMenus.forEach(el => {
      if (el !== dropdown) {
        el.classList.remove('nav__dropdown--visible');
        el.style.maxHeight = null;
      }
    });

    dropdown.classList.toggle('nav__dropdown--visible');
    currentBtn.classList.toggle('nav__link--active');
    currentBtn.querySelector('.nav__icon').classList.toggle('nav__icon--active');

    if (dropdown.classList.contains('nav__dropdown--visible')) {
      dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
    } else {
      dropdown.style.maxHeight = null;
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav')) {
    dropdownButtons.forEach(el => {
      el.classList.remove('nav__link--active');
      el.querySelector('.nav__icon').classList.remove('nav__icon--active');
    });

    dropdownMenus.forEach(el => {
      el.classList.remove('nav__dropdown--visible');
      el.style.maxHeight = null;
    });
  }
});
