const sliderInner = document.querySelector(".slider-inner");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;
const slideCount = sliderInner.children.length;

const updateSlider = () => {
  sliderInner.style.transform = `translateX(-${slideIndex * 100}%)`;
};

prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
});

updateSlider();
