// устанавливаем дату, до которой будет отсчет (в формате гггг-мм-дд чч:мм:сс)
const countdownDate = new Date("2023-06-23 23:59:59").getTime();

// выбираем элементы, в которых будут отображаться дни, часы, минуты и секунды
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// функция для обновления таймера каждую секунду
function updateTimer() {
  // получаем текущее время
  const now = new Date().getTime();
  
  // вычисляем расстояние между текущим временем и датой отсчета
  const distance = countdownDate - now;
  
  // вычисляем количество дней, часов, минут и секунд до даты отсчета
  const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
  
  // обновляем отображение времени на странице
  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  
  // если дата отсчета прошла, останавливаем таймер
  if (distance < 0) {
    clearInterval(timerInterval);
  }
}

// вызываем функцию обновления таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);






const countdownDate2 = new Date("2023-06-23 23:59:59").getTime();

const days2 = document.getElementById("days2");
const hours2 = document.getElementById("hours2");
const minutes2 = document.getElementById("minutes2");
const seconds2 = document.getElementById("seconds2");

function updateTimer2() {
  const now = new Date().getTime();
  
  const distance = countdownDate2 - now;
  
  const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
  
  days2.innerHTML = daysLeft;
  hours2.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes2.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds2.innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  
  if (distance < 0) {
    clearInterval(timerInterval2);
  }
}

const timerInterval2 = setInterval(updateTimer2, 1000);
Здравствуйте! Я front-end веб-разработчик с опытом работы в HTML, CSS, Bootstrap 5 framework, БЭМ структурой кода, TailsWIND CSS структурой кода и нативным JavaScript. Я также имею опыт написания скриптов для сайтов, работы с API и базами данных сайтов MySQL. Я профессионально знаю CMS системы, такие как WordPress, Bitrix, Tilda, OpenCart и конструкторы сайтов Wix, Tilda и т.д.

У меня есть продвинутый уровень в програмировании на PHP в CMS системах, а также опыт работы с плагинами в CMS. Я могу верстать макеты из Figma, Adobe Illustrator и Photoshop, а также создавать адаптивные версии сайтов для мобильных устройств.

Моя работа включает в себя создание эффективных и привлекательных сайтов с помощью инструментов, которые рассчитаны на создание веб-сайтов повышенной функциональности и современного внешнего вида. Я проактивный, общительный и могу легко работать в команде с другими разработчиками и дизайнерами.

Спасибо, что просмотрели мое портфолио, я готов сотрудничать над вашим следующим проектом!
