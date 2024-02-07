"use strict";
let haveAccountRef = document.querySelector(".have-account-href");
let registerBtn = document.querySelector(".register-btn");
registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Account has been created");
});
haveAccountRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
