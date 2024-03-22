"use strict";

// Selectors
const prevBtn = document.getElementById("prev"); // Selects the previous button
const nextBtn = document.getElementById("next"); // Selects the next button
const images = document.querySelector(".images-container"); // Selects the container holding the images
const img = document.querySelectorAll(".images-container img"); // Selects all the image elements within the container

let index = 0; // Keeps track of the currently displayed image's index
let interval = setInterval(run, 2000); // Sets an interval to automatically transition between images every 2 seconds

function run() {
  index++; // Increment index
  changeImage(); // Calls the changeImage function to display the updated image
}

// Function to change the displayed image
const changeImage = function () {
  // Ensures index stays within the valid range of image indices
  index = index > img.length - 1 ? 0 : index < 0 ? img.length - 1 : index;
  images.style.transform = `translateX(${-index * 450}px)`; // Adjusts the CSS transform property to display the corresponding image
};

// Function to reset the interval for the automatic slideshow
const resetInterval = function () {
  clearInterval(interval); // Clears the current interval
  interval = setInterval(run, 2000); // Sets a new interval for the automatic slideshow
};

// Event listener for the "Next" button
nextBtn.addEventListener("click", function () {
  index++; // Increment index
  changeImage(); // Calls the changeImage function to display the updated image
  resetInterval(); // Resets the interval for the automatic slideshow
});

// Event listener for the "Previous" button
prevBtn.addEventListener("click", () => {
  index--; // Decrement index
  changeImage(); // Calls the changeImage function to display the updated image
  resetInterval(); // Resets the interval for the automatic slideshow
});
