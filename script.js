"use strict";

const btnshow = document.querySelectorAll(".show-modal");
const closebtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const hidden = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnshow.length; i++) {
  btnshow[i].addEventListener("click", hidden);
}
const closebottom = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closebtn.addEventListener("click", closebottom);
overlay.addEventListener("click", closebottom);
