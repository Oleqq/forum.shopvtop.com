setTimeout(function() {
    document.querySelector('.modal__wrapper').classList.add('modal__wrapper--active');
    document.querySelector('.modal__bg').classList.add('modal__bg--active');
  }, 5000);

  document.querySelector('.modal__bg').addEventListener('click', function() {
    document.querySelector('.modal__wrapper').classList.remove('modal__wrapper--active');
    document.querySelector('.modal__bg').classList.remove('modal__bg--active');
  });
  
  const modalWrapper = document.querySelector('.modal__wrapper');
  const closeButton = document.querySelector('.modal__close');
  const modalBg = document.querySelector('.modal__bg');

  closeButton.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
    modalBg.classList.remove('modal__bg--active');
  });