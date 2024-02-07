"use strict";
let logoutAdminBtn = document.querySelector(".logout-btn");
let createProjectBtn = document.querySelector(".create-btn");
let editBtn = document.querySelector(".edit-btn");
logoutAdminBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
createProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "create-project.html";
});
editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "update-project.html";
});
