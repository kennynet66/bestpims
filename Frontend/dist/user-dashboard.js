"use strict";
let logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
