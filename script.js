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


// 
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = imgElement.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}