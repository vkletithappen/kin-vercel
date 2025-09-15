import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);


const heroSlider = new Swiper('.slider-hero', {
  // grabCursor: true,
  // speed: 1500,
  slidesPerView: 1,
  // spaceBetween: 100,
  // loop: true,

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // pagination: {
  //   el: ".pagination-hero",
  //   clickable: true,
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
});

// slidesOffsetBefore - Add (in px) additional slide offset in the beginning of the container (before all slides)

//счетчик слайдов 1dst
let counterActive = document.querySelector('.counter-hero__active')
let counterTotal = document.querySelector('.counter-hero__total')
let bullets = document.querySelectorAll('.swiper-pagination-bullet')

counterTotal.innerHTML = `/${bullets.length}`


heroSlider.on('transitionEnd', function () {
  counterActive.innerHTML = `0${heroSlider.realIndex + 1}`
});


