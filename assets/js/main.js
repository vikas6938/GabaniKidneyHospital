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
      type: 'true',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
  });
});


// ----Blog Card Swiper-------------->
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper1", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1, // Default for small screens
    spaceBetween: 12, // Space between slides
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // 2 slides per view for medium screens
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3, // 3 slides per view for larger screens
        spaceBetween: 30,
      },
    },
  });
});


// Close the off-canvas menu when close button is clicked
closeMenuBtn.addEventListener('click', () => {
  offCanvasMenu.classList.remove('translate-x-0'); // slide out
  offCanvasMenu.classList.add('translate-x-full'); // hide off-screen
});
