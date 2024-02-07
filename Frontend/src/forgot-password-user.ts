let backLoginRef = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;
let sendEmailBtn = document.querySelector(".login-btn") as HTMLButtonElement;

sendEmailBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    alert("Email has been sent");
})

backLoginRef.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="login.html"
})