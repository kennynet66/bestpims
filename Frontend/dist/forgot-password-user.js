"use strict";
let backLoginRef = document.querySelector(".forgot-pwd-href");
let sendEmailBtn = document.querySelector(".login-btn");
sendEmailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Email has been sent");
});
backLoginRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
