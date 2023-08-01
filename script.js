// JavaScript code for the diaporama slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function forwardButtonHandler() {
  nextSlide();
}

const forwardButtons = document.getElementsByClassName('forward-arrow');
for (let i = 0; i < forwardButtons.length; i++) {
  forwardButtons[i].addEventListener('click', forwardButtonHandler);
}

function startSlideshow() {
  showSlide(slideIndex);
  setInterval(nextSlide, 5000); // Change slide every 7 seconds
}

// Start the slideshow when the DOM is loaded
document.addEventListener('DOMContentLoaded', startSlideshow);