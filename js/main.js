// Находим все элементы с классом menu__item--list
const menuItems = document.querySelectorAll('.menu__item--list');

// Проходим по каждому из них
menuItems.forEach(function(item) {
  // Добавляем обработчик клика
  item.addEventListener('click', function(event) {
    // Проверяем, есть ли подменю внутри текущего пункта меню
    const submenu = item.querySelector('.submenu');

    // Если есть подменю, обрабатываем его
    if (submenu) {
      // Если клик был по ссылке внутри подменю, не отменяем переход
      if (event.target.closest('.submenu a')) {
        return; // Переход по ссылке будет происходить
      }

      // Отменяем стандартное поведение ссылки для самого пункта меню
      event.preventDefault();

      // Проверяем, активно ли подменю
      const isActive = item.classList.contains('active');

      // Закрываем все открытые подменю
      menuItems.forEach(function(menuItem) {
        menuItem.classList.remove('active');
      });

      // Если текущее подменю не было открыто, открываем его
      if (!isActive) {
        item.classList.add('active');
      }
    }
  });
});
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

// Слушаем изменения размера окна и обновляем количество видимых слайдов
window.addEventListener('resize', updateVisibleSlides);
//Стрелка селекта
const selectElement = document.querySelector('.consultation__select');
const arr = document.querySelector('.consultation__arr');
selectElement.addEventListener('click', function() {
  arr.classList.toggle('consultation__arr--open');
});
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
// Закрытие стрелки при потере фокуса
selectElement.addEventListener('blur', function() {
  arr.classList.remove('consultation__arr--open');
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
// Слушаем изменения размера окна и обновляем количество видимых слайдов
window.addEventListener('resize', updateVisibleSlides2);

const amountInput = document.getElementById('amount');
  const periodInput = document.getElementById('period');
  const percentInput = document.getElementById('percent');
  
  const resultsMainAmount = document.querySelector('.results__amount--main');
  const resultsOverpayment = document.querySelector('.results__item:nth-child(1) .results__amount');
  const resultsEffectiveRate = document.querySelector('.results__item:nth-child(2) .results__amount');
  
  function validateInputs(amount, period, annualRate) {
    if (amount <= 0 ||  amount > 200000000) {
      alert('Сумма кредита должна быть больше 0 и меньше 200 000 000 ₽');
      return false;
    }
    if (period <= 0 || period > 20) {
      alert('Срок кредита должен быть от 1 до 20 лет');
      return false;
    }
    if (annualRate <= 0 || annualRate > 17) {
      alert('Процентная ставка должна быть от 3% до 16%');
      return false;
    }
    return true;
  }

  function calculateLoan() {
    const amount = parseFloat(amountInput.value);
    const period = parseFloat(periodInput.value);
    const annualRate = parseFloat(percentInput.value);

    // Проверка на валидность данных
    if (!validateInputs(amount, period, annualRate)) {
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    const months = period * 12;
    
    // Формула для расчета ежемесячного платежа
    const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
    // Переплата за весь срок
    const totalPayment = monthlyPayment * months;
    const overpayment = totalPayment - amount;
    
    // Эффективная процентная ставка (условно равна введенной)
    const effectiveRate = annualRate;

    resultsMainAmount.textContent = monthlyPayment.toFixed(2) + ' ₽';
    resultsOverpayment.textContent = overpayment.toFixed(2) + ' ₽';
    resultsEffectiveRate.textContent = effectiveRate.toFixed(2) + '%';
  }

  amountInput.addEventListener('input', calculateLoan);
  periodInput.addEventListener('input', calculateLoan);
  percentInput.addEventListener('input', calculateLoan);
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
window.addEventListener('resize', updateVisibleSlides3);
