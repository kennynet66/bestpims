let logoutAdminUpdateBtn = document.querySelector(".logout-btn") as HTMLButtonElement;
let overviewUpdateBtn=document.querySelector(".overview-btn")   as HTMLButtonElement;
let createProBtn = document.querySelector(".create-btn") as HTMLButtonElement;

logoutAdminUpdateBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html";
})

overviewUpdateBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-dashboard.html";
})

createProBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "create-project.html";
});