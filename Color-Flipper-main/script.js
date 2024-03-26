// Array of hex code characters (0-9, A-F)
const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Selecting DOM elements
const changeBtn = document.querySelector(".change-btn");
const restBtn = document.querySelector(".rest-btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container");

// Get the initial background color of the container
let initialBackgroundColor = window
  .getComputedStyle(container)
  .getPropertyValue("background-color");

// Function to get a random index from the hexCode array
function getRandomIndexColor() {
  return Math.floor(Math.random() * hexCode.length);
}

// Event listener for the "Change Color" button
changeBtn.addEventListener("click", function () {
  // Generate a random hex color
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexCode[getRandomIndexColor()];
    console.log(hexColor);
    // Update UI with the current color
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
  }
});

// Event listener for the "Reset" button
restBtn.addEventListener("click", function () {
  // Reset the background color to the initial color
  container.style.backgroundColor = initialBackgroundColor;
  // Reset the displayed color text
  color.textContent = "#ffffff"; // Assuming white color, you can adjust this value
  // Reset the body background color
  document.body.style.backgroundColor = initialBackgroundColor;
});
