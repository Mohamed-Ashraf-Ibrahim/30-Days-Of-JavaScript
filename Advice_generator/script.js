"use strict";

// Selecting elements from the DOM
const adviceNum = document.querySelector(".advice-id"); // Element to display advice number
const adviceQuote = document.querySelector(".advice"); // Element to display advice text
const diceButton = document.querySelector(".dice-btn"); // Button to fetch new advice

// Function to render advice onto the webpage
const renderAdvice = function (advice) {
  // Set the inner HTML of adviceNum and adviceQuote elements with advice data
  adviceQuote.innerHTML = advice.slip.advice; // Display advice text
  adviceNum.innerHTML = advice.slip.id; // Display advice number
};

// Function to fetch advice from the API
const getAdvice = async function () {
  try {
  // Await the response from the API and convert it to JSON format
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    renderAdvice(data);
  } catch (err) {
    console.error(err);
  }
};
// Initial call to getAdvice function to fetch and display advice on page load
getAdvice();

// Add event listener to diceButton to fetch new advice when clicked
diceButton.addEventListener("click", getAdvice);
