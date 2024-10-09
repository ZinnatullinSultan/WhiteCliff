//вкладки на главной странице
const tabsBtn = document.querySelectorAll('.services__tab-btn');
const tabsItems = document.querySelectorAll('.services__tab');
const tabs = document.querySelectorAll('.services__items');

tabsBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    tabsItems.forEach(btn => btn.classList.remove('services__tab--active'));
    tabsItems[i].classList.add('services__tab--active');
    tabs.forEach(tab => tab.classList.remove('services__items--active'));
    tabs[i].classList.add('services__items--active');
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
//Стрелка селекта
const selectElement = document.querySelector('.consultation__select');
const arr = document.querySelector('.consultation__arr');
selectElement.addEventListener('click', function() {
  arr.classList.toggle('consultation__arr--open');
});

// Закрытие стрелки при потере фокуса
selectElement.addEventListener('blur', function() {
  arr.classList.remove('consultation__arr--open');
});
//слайдер 3
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
//Стрелка селекта
const selectElement2 = document.querySelector('.help__select');
const arr2 = document.querySelector('.help__arr');
selectElement2.addEventListener('click', function() {
  arr2.classList.toggle('help__arr--open');
});

// Закрытие стрелки при потере фокуса
selectElement2.addEventListener('blur', function() {
  arr2.classList.remove('help__arr--open');
});

//слайдер 3
const slider3 = document.querySelector('.other__track');
const slides3 = document.querySelectorAll('.other__slide');
const prevBtn3 = document.querySelector('.other__btn--prev');
const nextBtn3 = document.querySelector('.other__btn--next');

let currentSlide3 = 0;
const totalSlides3 = slides3.length;
const visibleSlides3 = 3; 

function updateSliderPosition3() {
  const slideWidth = slides3[0].clientWidth;
  slider3.style.transform = `translateX(-${currentSlide3 * slideWidth}px)`;
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