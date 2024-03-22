"use strict";
const searchInput = document.querySelector(".search");
const userList = document.querySelector(".user-list");
const users = [];

const getData = async function () {
  try {
    userList.innerHTML = "<li>Loading.....</li>";

    const response = await fetch("https://randomuser.me/api/?results=20");
    const { results } = await response.json();

    userList.innerHTML = "";
    results.forEach((user) => {
      const li = createUserListItem(user);
      userList.appendChild(li);
      users.push(li);
    });
  } catch (err) {
    console.error(err);
  }
};

const createUserListItem = function (user) {
  const li = document.createElement("li");
  li.innerHTML = `
  <img src = "${user.picture.large}" alt = "${user.name.first}">
  <div class = "user-info">
  <h3>${user.name.first} ${user.name.last}</h3>
  <p>${user.location.city} ${user.location.country}</p>
  </div>
  `;
  return li;
};

const filterResults = function (searchUsers) {
  users.forEach((user) => {
    const text = user.innerHTML.toLowerCase();
    if (text.includes(searchUsers.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
};
searchInput.addEventListener("input", (e) => filterResults(e.target.value));
getData();
