document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});


