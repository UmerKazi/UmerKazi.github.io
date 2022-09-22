import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Navigation]);

export const portfolioSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  navigation: {
    prevEl: ".my_prev",
    nextEl: ".my_next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};

export const newsSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  navigation: {
    prevEl: ".my_prev",
    nextEl: ".my_next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};
