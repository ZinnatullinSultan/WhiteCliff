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
