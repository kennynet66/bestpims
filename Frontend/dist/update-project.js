"use strict";
let logoutAdminUpdateBtn = document.querySelector(".logout-btn");
let overviewUpdateBtn = document.querySelector(".overview-btn");
let createProBtn = document.querySelector(".create-btn");
logoutAdminUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
overviewUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-dashboard.html";
});
createProBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "create-project.html";
});
