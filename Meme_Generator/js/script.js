"use strict";
const memeTitle = document.getElementById("meme-title");
const meme = document.getElementById("meme-img");
const author = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const API_URL = "https://meme-api.com/gimme";

const generateMeme = async function () {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log(data);
    memeDetails(data.title, data.author, data.url);
  } catch (err) {
    console.log(err.message);
  }
};

const memeDetails = function (title, authorName, memeUrl) {
  author.innerHTML = `meme by: ${authorName}`;
  memeTitle.innerHTML = title;
  meme.setAttribute("src", memeUrl);
};
generateBtn.addEventListener("click", generateMeme);
generateMeme();
