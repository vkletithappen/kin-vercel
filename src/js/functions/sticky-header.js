const headerElement = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 99) {
    headerElement.classList.add('header--scroll');
  } else {
    headerElement.classList.remove('header--scroll');
  }
})
