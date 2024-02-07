"use strict";
let backLoginAdminRef = document.querySelector(".forgot-pwd-href");
let sendEmailAdminBtn = document.querySelector(".login-btn");
let popupDivAd = document.querySelector(".popup");
sendEmailAdminBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopUp();
});
function showPopUp() {
    popupDivAd.style.display = "block";
    setTimeout(() => {
        popupDivAd.style.display = "none";
    }, 3000);
}
backLoginAdminRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
