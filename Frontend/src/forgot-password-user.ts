let backLoginRef = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;
let sendEmailBtn = document.querySelector(".login-btn") as HTMLButtonElement;
let popupDivUser = document.querySelector(".popup") as HTMLDivElement;

sendEmailBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    showPopUp();
})

function showPopUp() {
  popupDivUser.style.display = "block";

  setTimeout(() => {
    popupDivUser.style.display = "none";
  }, 3000);
}


backLoginRef.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="login.html"
})