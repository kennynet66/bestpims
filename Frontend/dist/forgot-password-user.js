"use strict";
let backLoginRef = document.querySelector(".forgot-pwd-href");
let sendEmailBtn = document.querySelector(".login-btn");
let popupDivUser = document.querySelector(".popup");
sendEmailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopUp();
});
function showPopUp() {
    popupDivUser.style.display = "block";
    setTimeout(() => {
        popupDivUser.style.display = "none";
    }, 3000);
}
backLoginRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
