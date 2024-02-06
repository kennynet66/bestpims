let backLoginAdminRef = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;
let sendEmailAdminBtn = document.querySelector(".login-btn") as HTMLButtonElement;

sendEmailAdminBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    alert("Email has been sent");
})

backLoginAdminRef.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html"
})