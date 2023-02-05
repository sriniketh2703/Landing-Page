"use strict";

const hamburger = document.querySelector(".hamburger");
const nav_link__container = document.querySelector(".nav-link__container");

hamburger.addEventListener("click", () => {
  nav_link__container.classList.toggle("come-down");
  hamburger.children[0].classList.toggle("line1-animation");
  hamburger.children[1].classList.toggle("line2-animation");
  hamburger.children[2].classList.toggle("line3-animation");
});
