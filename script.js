"use strict";
const slides = document.querySelectorAll(".slide");

const sliderFunc = function (slides) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * i}%)`;
  });
};

sliderFunc(slides);
