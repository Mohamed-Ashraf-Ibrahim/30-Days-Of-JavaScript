"use strict";
const header = document.querySelector(".card-header");
const title = document.querySelector(".card-title");
const description = document.querySelector(".card-description");
const profileImg = document.querySelector(".profile-img");
const name = document.querySelector(".name");
const date = document.querySelector(".date");
const animatedBackground = document.querySelectorAll(".animated-bg");
const animatedText = document.querySelectorAll(".animated-bg-text");

const data = function () {
  header.innerHTML = `<img src="./images/christopher-burns-Kj2SaNHG-hg-unsplash.jpg"/>`;
  title.innerHTML = "Real Data Title";
  description.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profileImg.innerHTML = `<img src="./images/person.jpg"/>`;
  name.innerHTML = "Michael Johnson";
  date.innerHTML = "March 22, 2024";
  animatedBackground.forEach((bg) => bg.classList.remove("animated-bg"));
  animatedText.forEach((bg) => bg.classList.remove("animated-bg-text"));
};
setTimeout(data, 2000);
