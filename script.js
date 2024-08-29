function toggleDropdown() {
  const dropdown = document.querySelector(".opt ul");
  dropdown.style.display =
    dropdown.style.display === "none" || dropdown.style.display === ""
      ? "block"
      : "none";
}

const sliderInner = document.querySelector(".slider-inner");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;
const slideCount = sliderInner.children.length;

function showSlide(index) {
  const transformValue = `translateX(-${index * 100}%)`;
  sliderInner.style.transform = transformValue;
}
function updateSlider() {
  sliderInner.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

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

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startAnimationOnScroll() {
  const statsContainer = document.querySelector(".stats-container");
  if (isElementInViewport(statsContainer)) {
    animateValue("studentsTrained", 0, 37500, 3000);
    animateValue("approvedCourses", 0, 50, 3000);
    animateValue("companyTieUps", 0, 1500, 3000);
    animateValue("branches", 0, 22, 3000);
    animateValue("certifications", 0, 8, 3000);
    window.removeEventListener("scroll", startAnimationOnScroll);
  }
}

window.addEventListener("scroll", startAnimationOnScroll);

// Ensure the dropdown is hidden when clicking outside of it
document.addEventListener("click", function (event) {
  const isClickInside = document.querySelector(".opt").contains(event.target);
  if (!isClickInside) {
    document.querySelector(".opt ul").style.display = "none";
  }
});
