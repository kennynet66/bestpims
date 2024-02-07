let logoutAdminBtn = document.querySelector(".logout-btn") as HTMLButtonElement;
let createProjectBtn=document.querySelector(".create-btn")   as HTMLButtonElement;
let editBtn = document.querySelector(".edit-btn") as HTMLButtonElement;

logoutAdminBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html";
})
createProjectBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="create-project.html";
})
editBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="update-project.html";
})