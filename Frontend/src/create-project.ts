let logoutAdminButton = document.querySelector(".logout-btn") as HTMLButtonElement;
let overviewBtn=document.querySelector(".overview-btn")   as HTMLButtonElement;

logoutAdminButton.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html";
})
overviewBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-dashboard.html";
})