const btnTop = document.querySelector('.btn-top');

window.addEventListener('scroll', () => {
  (window.scrollY > 700 && window.screen.width > 1199) ? btnTop.classList.remove('btn-top--hidden') : btnTop.classList.add('btn-top--hidden');
})

btnTop.addEventListener('click', () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
})
