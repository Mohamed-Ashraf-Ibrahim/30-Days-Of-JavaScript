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
  // Await the response from the API and convert it to JSON format
  await fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      // Render the fetched advice onto the webpage
      renderAdvice(data);
    })
    .catch((err) => {
      // Log any errors that occur during the fetch operation
      console.error("Error fetching advice:", err);
    });
};

// Initial call to getAdvice function to fetch and display advice on page load
getAdvice();

// Add event listener to diceButton to fetch new advice when clicked
diceButton.addEventListener("click", getAdvice);
