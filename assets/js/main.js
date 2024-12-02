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


// ----Blog Card Swiper-------------->
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.mySwiper1', {
    direction: 'horizontal',
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

// Get the hamburger button, off-canvas menu, and close button
const hamburgerBtn = document.getElementById('hamburger-btn');
const offCanvasMenu = document.getElementById('off-canvas-menu');
const closeMenuBtn = document.getElementById('close-menu');

// Open the off-canvas menu when hamburger button is clicked
hamburgerBtn.addEventListener('click', () => {
  offCanvasMenu.classList.remove('translate-x-full'); // remove class to slide in
  offCanvasMenu.classList.add('translate-x-0'); // add class to bring it in
});

// Close the off-canvas menu when close button is clicked
closeMenuBtn.addEventListener('click', () => {
  offCanvasMenu.classList.remove('translate-x-0'); // remove class to slide out
  offCanvasMenu.classList.add('translate-x-full'); // add class to bring it off-screen
});
