"use strict";
let logoutAdminButton = document.querySelector(".logout-btn");
let overviewBtn = document.querySelector(".overview-btn");
logoutAdminButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
overviewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-dashboard.html";
});
