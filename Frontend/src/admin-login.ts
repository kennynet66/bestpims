let userBtn = document.querySelector(".user-btn") as HTMLButtonElement;
let loginAdminButton = document.querySelector(".login-btn") as HTMLButtonElement;
let forgotPwdRefAdmin = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;

userBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="login.html"
});

loginAdminButton.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-dashboard.html"
});

forgotPwdRefAdmin.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="forgot-password-admin.html";
});