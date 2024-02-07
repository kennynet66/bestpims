"use strict";
let userBtn = document.querySelector(".user-btn");
let loginAdminButton = document.querySelector(".login-btn");
let forgotPwdRefAdmin = document.querySelector(".forgot-pwd-href");
let adminForm = document.querySelector("#admin-login-form");
let admin_email = document.querySelector('#');
userBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
loginAdminButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-dashboard.html";
});
forgotPwdRefAdmin.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "forgot-password-admin.html";
});
