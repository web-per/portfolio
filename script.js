new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,

  // Autoplay
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.querySelectorAll('.wrapper img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popupImg').style.display = 'block';
    document.querySelector('.popupImg img').src = image.getAttribute('src');
  }
});

document.querySelector('.popupImg span').onclick = () =>{
  document.querySelector('.popupImg').style.display = 'none';
}