// Инициализация свайпера
var mySwiper = new Swiper('.swiper-container', {
    // Параметры свайпера
    slidesPerView: 3, // количество показываемых слайдов
    spaceBetween: 30, // расстояние между слайдами
    loop: true, // замкнутый цикл прокрутки
    // Навигация (стрелки)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Адаптивность
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      // если браузер >= 640px
      991: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        centeredSlides: true,
        spaceBetween: 30
      }
    }
  })