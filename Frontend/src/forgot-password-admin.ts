let backLoginAdminRef = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;
let sendEmailAdminBtn = document.querySelector(".login-btn") as HTMLButtonElement;
let popupDivAd = document.querySelector(".popup") as HTMLDivElement;

sendEmailAdminBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    showPopUp();
})

function showPopUp() {
  popupDivAd.style.display = "block";

  setTimeout(() => {
    popupDivAd.style.display = "none";
  }, 3000);
}

backLoginAdminRef.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html"
})