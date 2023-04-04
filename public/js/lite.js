// Вибираємо всі елементи з класом "lightbox-img"
const images = document.querySelectorAll('.lightbox-img');

// Створюємо лайтбокс-контейнер
const lightboxContainer = document.createElement('div');
lightboxContainer.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-75', 'flex', 'justify-center', 'items-center', 'hidden');
document.body.appendChild(lightboxContainer);

// Створюємо зображення лайтбоксу
const lightboxImage = document.createElement('img');
lightboxImage.classList.add('max-w-90', 'max-h-90', 'object-contain');
lightboxContainer.appendChild(lightboxImage);

// Створюємо кнопку закриття лайтбоксу
const closeButton = document.createElement('span');
closeButton.classList.add('absolute', 'top-2', 'right-2', 'cursor-pointer', 'text-white', 'text-2xl');
closeButton.innerHTML = '&times;';
lightboxContainer.appendChild(closeButton);

// Перебираємо всі елементи "lightbox-img" і додаємо обробники подій
images.forEach(image => {
  image.addEventListener('click', () => {
    // Показуємо лайтбокс і зображення
    lightboxContainer.classList.remove('hidden');
    lightboxImage.src = image.src;
  });
});

// Обробник події для закриття лайтбоксу
closeButton.addEventListener('click', () => {
  lightboxContainer.classList.add('hidden');
});
