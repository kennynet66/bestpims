"use strict";
let loginBtn = document.querySelector(".login-btn");
let loginAdminBtn = document.querySelector(".admin-btn");
let createAccountRef = document.querySelector(".no-account-href");
let forgotPwdRef = document.querySelector(".forgot-pwd-href");
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "user-dashboard.html";
});
loginAdminBtn.addEventListener("click", (e) => {
    window.location.href = "admin-login.html";
});
createAccountRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "register.html";
});
forgotPwdRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "forgot-password.html";
});
