const slider = document.querySelector('.ourWork__wrapper');
const slides = document.querySelectorAll('.ourWork__slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;
const slidesPerView = 3;

prev.addEventListener('click', () => {
  currentSlide = Math.max(currentSlide - 1, 0);
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

next.addEventListener('click', () => {
  currentSlide = Math.min(currentSlide + 1, Math.ceil(slides.length / slidesPerView) - 1);
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
