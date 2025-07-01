var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });