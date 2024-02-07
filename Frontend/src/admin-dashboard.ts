let logoutAdminBtn = document.querySelector(".logout-btn") as HTMLButtonElement;
let createProjectBtn=document.querySelector(".create-btn")   as HTMLButtonElement;

logoutAdminBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html";
})
createProjectBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="create-project.html";
})