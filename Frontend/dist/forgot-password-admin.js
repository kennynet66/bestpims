"use strict";
let backLoginAdminRef = document.querySelector(".forgot-pwd-href");
let sendEmailAdminBtn = document.querySelector(".login-btn");
sendEmailAdminBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Email has been sent");
});
backLoginAdminRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
