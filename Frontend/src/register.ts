let haveAccountRef = document.querySelector(".have-account-href") as HTMLAnchorElement;
let registerBtn = document.querySelector(".register-btn") as HTMLButtonElement;
let popupDivReg = document.querySelector(".popup") as HTMLDivElement;

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    showPopUp();
})

function showPopUp(){
    popupDivReg.style.display = "block";

    setTimeout(() => {
      popupDivReg.style.display = "none";
    }, 3000);
}

haveAccountRef.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="login.html"
})