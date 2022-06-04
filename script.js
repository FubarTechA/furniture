"use strict";
const slides = document.querySelectorAll(".slide");
const overlay = document.querySelector(".overlay");
const navDiv = document.querySelector(".nav-div");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const shop = document.querySelector(".shop");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const arrowDiv = document.querySelector(".arrowsDiv");
const heroImageDiv = document.querySelector(".hero-imageDiv");
let slide = 0;

// functions
const showNav = function () {
  overlay.classList.add("show");
  navDiv.classList.add("show");
};

const hideNav = function () {
  overlay.classList.remove("show");
  navDiv.classList.remove("show");
};

const sliderFunc = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const changeimg = function () {
  let num = slide + 1;
  let src;
  if (screen.width < 600) {
    src = `/images/mobile-image-hero-${num}.jpg`;
  } else src = `/images/desktop-image-hero-${num}.jpg`;

  heroImageDiv.style.backgroundImage = `url(${src})`;
};

const nextSlide = function () {
  if (slide === slides.length - 1) {
    slide = 0;
  } else {
    slide++;
  }
  sliderFunc(slide);
  changeimg();
};

const prevSlide = function () {
  if (slide === 0) {
    slide = slides.length - 1;
  } else {
    slide--;
  }
  sliderFunc(slide);
  changeimg();
};

// hiding and displaying the navigation
hamburger.addEventListener("click", showNav);

close.addEventListener("click", hideNav);

overlay.addEventListener("click", hideNav);

// adding the hover effects on the shop div
shop.addEventListener("mouseover", function () {
  shop.classList.add("hover");
});

shop.addEventListener("mouseout", function () {
  shop.classList.remove("hover");
});

arrowDiv.addEventListener("mouseover", function (e) {
  const arrow = e.target.closest(".arrow");
  if (!arrow) return;

  arrow.classList.add("hover");
});

arrowDiv.addEventListener("mouseout", function (e) {
  const arrow = e.target.closest(".arrow");
  if (!arrow) return;

  arrow.classList.remove("hover");
});

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  const key = e.key;
  if (key === "ArrowRight") {
    nextSlide();
  }
  if (key === "ArrowLeft") {
    prevSlide();
  }
});

sliderFunc(0);
right.addEventListener("click", nextSlide);
left.addEventListener("click", prevSlide);
