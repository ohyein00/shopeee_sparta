const topSlider = new Swiper('#topSlider', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 5000, //슬라이드 settimeout간격
  },
  // Navigation arrows
  navigation: {
    nextEl: '#topSlider .nav_next',
    prevEl: '#topSlider .nav_prev',
  },
});

const categorySlider = new Swiper('#categorySlider .category_slider', {
  slidesPerView: 10,
  slidesPerGroup :10,
  direction: 'horizontal',
  grid:{
    fill:'row',
    rows:2
  },
  navigation: {
    nextEl: '#categorySlider .nav_next',
    prevEl: '#categorySlider .nav_prev',
  },
});
const mallFullSlider = new Swiper('#mallFullSlider', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 5000, //슬라이드 settimeout간격
  },
  // Navigation arrows
  navigation: {
    nextEl: '#mallFullSlider .nav_next',
    prevEl: '#mallFullSlider .nav_prev',
  },
});

const mallCateSlider = new Swiper('#mallCateSlider .category_slider', {
  slidesPerView: 4,
  slidesPerGroup :4,
  direction: 'horizontal',
  grid:{
    fill:'row',
    rows:2
  },
  navigation: {
    nextEl: '#mallCateSlider .nav_next',
    prevEl: '#mallCateSlider .nav_prev',
  },
});
