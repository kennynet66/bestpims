let logoutBtn=document.querySelector(".logout-btn") as HTMLButtonElement;

logoutBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="login.html"
})