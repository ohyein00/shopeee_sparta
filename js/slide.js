const swiper = new Swiper('#topSlider', {
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
$(function(){
  swiper()
})
