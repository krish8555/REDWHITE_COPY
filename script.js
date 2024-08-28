const sliderInner = document.querySelector(".slider-inner");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;
const slideCount = sliderInner.children.length;
let autoSlideInterval;

const updateSlider = () => {
  sliderInner.style.transform = `translateX(-${slideIndex * 100}%)`;
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }, 3000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

prevButton.addEventListener("click", () => {
  stopAutoSlide();
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
  startAutoSlide();
});

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  startAutoSlide();
});

updateSlider();
startAutoSlide();
