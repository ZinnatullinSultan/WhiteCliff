// Инициализация переменной для текущего вопроса
let currentQuestion = 0;

// Получаем все элементы с классом .test__content
const questions = document.querySelectorAll('.test__content');

// Функция для обновления отображаемого вопроса и кнопок
function updateQuestion() {
  // Скрываем все вопросы
  questions.forEach((question, index) => {
    question.hidden = index !== currentQuestion;
  });

  // Обновляем прогресс
  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
  document.querySelector('.test__progress-text span').textContent =
    progress + '%';

  // Управляем видимостью кнопок для текущего вопроса
  const currentContent = questions[currentQuestion];
  const prevButton = currentContent.querySelector('.test__prev button');
  const nextButton = currentContent.querySelector('.test__next-btn');
}

// Обработчик события для кнопки "Prev"
questions.forEach((question, index) => {
  const prevButton = question.querySelector('.test__prev button');
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestion();
      }
    });
  }

  // Обработчик события для кнопки "Next"
  const nextButton = question.querySelector('.test__next-btn');
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestion();
      }
    });
  }
});

// Обновляем вопрос в начале
updateQuestion();
//аккордеон
document.querySelectorAll('.faq__item').forEach(item => {
  item.addEventListener('click', function() {
    const text = item.querySelector('.faq__text');
    const btn = item.querySelector('.faq__btn');

    // Закрываем все остальные активные элементы
    document.querySelectorAll('.faq__text').forEach(otherText => {
      if (otherText !== text) {
        otherText.classList.remove('faq__text--active');
        otherText.previousElementSibling.querySelector('.faq__btn').classList.remove('faq__btn--active');
      }
    });

    // Переключаем текущее состояние
    text.classList.toggle('faq__text--active');
    btn.classList.toggle('faq__btn--active');
  });
});
//слайдер
const slider = document.querySelector('.partners__track');
const slides = document.querySelectorAll('.partners__slide');
const prevBtn = document.querySelector('.partners__btn--prev');
const nextBtn = document.querySelector('.partners__btn--next');

let currentSlide = 0;
const totalSlides = slides.length;
let visibleSlides = 3; 

function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextBtn.addEventListener('click', function() {
  if (currentSlide < totalSlides - visibleSlides) {
    currentSlide++;
  } else {
    currentSlide = 0; 
  }
  updateSliderPosition();
});

prevBtn.addEventListener('click', function() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - visibleSlides;
  }
  updateSliderPosition();
});
//аккордеон
document.querySelectorAll('.faq__item').forEach(item => {
  item.addEventListener('click', function() {
    const text = item.querySelector('.faq__text');
    const btn = item.querySelector('.faq__btn');

    document.querySelectorAll('.faq__text').forEach(otherText => {
      if (otherText !== text) {
        otherText.classList.remove('faq__text--active');
        otherText.previousElementSibling.querySelector('.faq__btn').classList.remove('faq__btn--active');
      }
    });

    // text.classList.toggle('faq__text--active');
    // btn.classList.toggle('faq__btn--active');
  });
});
//слайдер 2
const slider2 = document.querySelector('.reviews__track');
const slides2 = document.querySelectorAll('.reviews__slide');
const prevBtn2 = document.querySelector('.reviews__btn--prev');
const nextBtn2 = document.querySelector('.reviews__btn--next');

let currentSlide2 = 0;
const totalSlides2 = slides2.length;
const visibleSlides2 = 3; 

function updateSliderPosition2() {
  const slideWidth = slides2[0].clientWidth;
  slider2.style.transform = `translateX(-${currentSlide2 * slideWidth}px)`;
}

nextBtn2.addEventListener('click', function() {
  if (currentSlide2 < totalSlides2 - visibleSlides2) {
    currentSlide2++;
  } else {
    currentSlide2 = 0; 
  }
  updateSliderPosition2();
});

prevBtn2.addEventListener('click', function() {
  if (currentSlide2 > 0) {
    currentSlide2--;
  } else {
    currentSlide2 = totalSlides2 - visibleSlides2;
  }
  updateSliderPosition2();
});
//слайдер 3
const slider3 = document.querySelector('.other__track');
const slides3 = document.querySelectorAll('.services__item');
const prevBtn3 = document.querySelector('.other__btn--prev');
const nextBtn3 = document.querySelector('.other__btn--next');3
let currentSlide3 = 0;
const totalSlides3 = slides3.length;
const visibleSlides3 = 2; 

function updateSliderPosition3() {
  const slideWidth3 = slides3[0].clientWidth;
  slider3.style.transform = `translateX(-${currentSlide3 * slideWidth3}px)`;
}

nextBtn3.addEventListener('click', function() {
  if (currentSlide3 < totalSlides3 - visibleSlides3) {
    currentSlide3++;
  } else {
    currentSlide3 = 0; 
  }
  updateSliderPosition3();
});

prevBtn3.addEventListener('click', function() {
  if (currentSlide3 > 0) {
    currentSlide3--;
  } else {
    currentSlide3 = totalSlides3 - visibleSlides3;
  }
  updateSliderPosition3();
});

