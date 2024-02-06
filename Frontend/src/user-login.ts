let loginBtn = document.querySelector(".login-btn") as HTMLButtonElement;
let loginAdminBtn=document.querySelector(".admin-btn") as HTMLButtonElement;
let createAccountRef = document.querySelector(".no-account-href") as HTMLAnchorElement;
let forgotPwdRef = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;

loginBtn.addEventListener("click",(e)=>{
    window.location.href="user-dashboard.html";
});

loginAdminBtn.addEventListener("click",(e)=>{
    window.location.href="admin-login.html";
});

createAccountRef.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="register.html";
});

forgotPwdRef.addEventListener("click",(e)=>{
    e.preventDefault();
    
    window.location.href="forgot-password.html"
});