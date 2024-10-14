// let currentQuestion = 0;
// const questions = document.querySelectorAll('.test__content');
// function updateQuestion() {
//   questions.forEach((question, index) => {
//     question.hidden = index !== currentQuestion;
//   });
//   const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
//   document.querySelector('.test__progress-text span').textContent = progress + '%';

//   const progressBar = document.querySelector('.test__progressbar::before');
//   progressBar.style.width = `${progress}%`;
//   checkValidity();
// }
// function checkValidity() {
//   const currentContent = questions[currentQuestion];
//   const inputs = currentContent.querySelectorAll('input[required]');
  
//   let allInputsValid = true;
//   inputs.forEach(input => {
//     if (!input.value && !input.checked) {
//       allInputsValid = false;
//     }
//   });

//   const nextButton = currentContent.querySelector('.test__next-btn');
//   if (nextButton) {
//     nextButton.disabled = !allInputsValid;
//   }
// }
// questions.forEach((question, index) => {
//   const inputs = question.querySelectorAll('input[required]');
//   inputs.forEach(input => {
//     input.addEventListener('input', checkValidity);
//   });
//   const prevButton = question.querySelector('.test__prev button');
//   if (prevButton) {
//     prevButton.addEventListener('click', () => {
//       if (currentQuestion > 0) {
//         currentQuestion--;
//         updateQuestion();
//       }
//     });
//   }
//   const nextButton = question.querySelector('.test__next-btn');
//   if (nextButton) {
//     nextButton.addEventListener('click', () => {
//       if (currentQuestion < questions.length - 1) {
//         currentQuestion++;
//         updateQuestion();
//       }
//     });
//   }
// });
const testContents = document.querySelectorAll('.test__content'); // Все вопросы
const nextBtns = document.querySelectorAll('.test__next-btn'); // Кнопки "Далее"
const prevBtns = document.querySelectorAll('.test__prev'); // Кнопки "Назад"

let currentIndex = 0; // Текущий индекс

function updateProgress() {
  const currentTest = testContents[currentIndex];
  const progressBar = currentTest.querySelector('.test__progressbar-inner'); // Прогрессбар для текущего вопроса
  const progressText = currentTest.querySelector('.test__progress-text span'); // Текст прогресса для текущего вопроса

  // Вычисляем процент выполнения
  const progressPercent = Math.floor(((currentIndex + 1) / testContents.length) * 100);
  
  // Обновляем текущие элементы прогресса
  progressBar.style.width = `${progressPercent}%`;
  progressText.textContent = `${progressPercent}%`;
}

function showCurrentTestContent() {
  // Скрываем все блоки
  testContents.forEach((content, index) => {
    content.hidden = index !== currentIndex;
  });
}

function isAnswerValid() {
  const currentTest = testContents[currentIndex];
  
  // Ищем радиокнопки
  const radioButtons = currentTest.querySelectorAll('input[type="radio"]');
  if (radioButtons.length > 0) {
    let checked = false;
    radioButtons.forEach((radio) => {
      if (radio.checked) {
        checked = true;
      }
    });
    if (!checked) {
      alert('Пожалуйста, выберите вариант ответа.');
      return false;
    }
  }

  // Ищем текстовые поля
  const textInputs = currentTest.querySelectorAll('input[type="text"], input[type="number"]');
  if (textInputs.length > 0) {
    let filled = true;
    textInputs.forEach((input) => {
      if (input.value.trim() === '') {
        filled = false;
      }
    });
    if (!filled) {
      alert('Пожалуйста, заполните поле.');
      return false;
    }
  }

  return true;
}

// Обработка нажатия кнопки "Далее"
nextBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    // Проверяем, выбран ли ответ или заполнено поле
    if (!isAnswerValid()) {
      return; // Останавливаем выполнение, если ответ не валиден
    }
    if (currentIndex < testContents.length - 1) {
      currentIndex++;
      showCurrentTestContent();
      updateProgress();
    }
  });
});

// Обработка нажатия кнопки "Назад"
prevBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      showCurrentTestContent();
      updateProgress();
    }
  });
});

// Инициализация — показываем первый вопрос
showCurrentTestContent();
updateProgress();



//аккордеон
document.querySelectorAll('.faq__item').forEach((item) => {
  item.addEventListener('click', function () {
    const text = item.querySelector('.faq__text');
    const btn = item.querySelector('.faq__btn');

    // Закрываем все остальные активные элементы
    document.querySelectorAll('.faq__text').forEach((otherText) => {
      if (otherText !== text) {
        otherText.classList.remove('faq__text--active');
        otherText.previousElementSibling
          .querySelector('.faq__btn')
          .classList.remove('faq__btn--active');
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
let visibleSlides = getVisibleSlides();

function getVisibleSlides() {
  if (window.innerWidth <= 530) {
    return 1;
  } else if (window.innerWidth <= 800) {
    return 2;
  } else {
    return 3;
  }
}

function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function updateVisibleSlides() {
  visibleSlides = getVisibleSlides(); // Обновляем количество видимых слайдов
  currentSlide = Math.min(currentSlide, totalSlides - visibleSlides); // Проверяем, чтобы слайдер не застрял на недоступных слайдах
  updateSliderPosition(); // Обновляем позицию слайдера
}

nextBtn.addEventListener('click', function () {
  if (currentSlide < totalSlides - visibleSlides) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSliderPosition();
});

prevBtn.addEventListener('click', function () {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - visibleSlides;
  }
  updateSliderPosition();
});

// Слушаем изменения размера окна и обновляем количество видимых слайдов
window.addEventListener('resize', updateVisibleSlides);
//аккордеон
document.querySelectorAll('.faq__item').forEach((item) => {
  item.addEventListener('click', function () {
    const text = item.querySelector('.faq__text');
    const btn = item.querySelector('.faq__btn');

    document.querySelectorAll('.faq__text').forEach((otherText) => {
      if (otherText !== text) {
        otherText.classList.remove('faq__text--active');
        otherText.previousElementSibling
          .querySelector('.faq__btn')
          .classList.remove('faq__btn--active');
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
let visibleSlides2 = getVisibleSlides2();

function getVisibleSlides2() {
  if (window.innerWidth <= 680) {
    return 1;
  } else if (window.innerWidth <= 1130) {
    return 2;
  } else {
    return 3;
  }
}

function updateSliderPosition2() {
  const slideWidth = slides2[0].clientWidth;
  slider2.style.transform = `translateX(-${currentSlide2 * slideWidth}px)`;
}
function updateVisibleSlides2() {
  visibleSlides2 = getVisibleSlides2(); // Обновляем количество видимых слайдов
  currentSlide2 = Math.min(currentSlide2, totalSlides2 - visibleSlides2); // Проверяем, чтобы слайдер не застрял на недоступных слайдах
  updateSliderPosition2(); // Обновляем позицию слайдера
}

nextBtn2.addEventListener('click', function () {
  if (currentSlide2 < totalSlides2 - visibleSlides2) {
    currentSlide2++;
  } else {
    currentSlide2 = 0;
  }
  updateSliderPosition2();
});

prevBtn2.addEventListener('click', function () {
  if (currentSlide2 > 0) {
    currentSlide2--;
  } else {
    currentSlide2 = totalSlides2 - visibleSlides2;
  }
  updateSliderPosition2();
});
// Слушаем изменения размера окна и обновляем количество видимых слайдов
window.addEventListener('resize', updateVisibleSlides2);
//слайдер 3
const slider3 = document.querySelector('.other__track');
const slides3 = document.querySelectorAll('.services__item');
const prevBtn3 = document.querySelector('.other__btn--prev');
const nextBtn3 = document.querySelector('.other__btn--next');
let currentSlide3 = 0;
const totalSlides3 = slides3.length;
let visibleSlides3 = getVisibleSlides3();

function getVisibleSlides3() {
  if (window.innerWidth <= 1130) {
    return 1;
  } else {
    return 2;
  }
}

function updateSliderPosition3() {
  const slideWidth3 = slides3[0].clientWidth;
  slider3.style.transform = `translateX(-${currentSlide3 * slideWidth3}px)`;
}
function updateVisibleSlides3() {
  visibleSlides3 = getVisibleSlides3();
  currentSlide3 = Math.min(currentSlide3, totalSlides3 - visibleSlides3);
  updateSliderPosition3();
}

nextBtn3.addEventListener('click', function () {
  if (currentSlide3 < totalSlides3 - visibleSlides3) {
    currentSlide3++;
  } else {
    currentSlide3 = 0;
  }
  updateSliderPosition3();
});

prevBtn3.addEventListener('click', function () {
  if (currentSlide3 > 0) {
    currentSlide3--;
  } else {
    currentSlide3 = totalSlides3 - visibleSlides3;
  }
  updateSliderPosition3();
});
window.addEventListener('resize', updateVisibleSlides3);
