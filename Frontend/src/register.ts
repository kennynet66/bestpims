let haveAccountRef = document.querySelector(".have-account-href") as HTMLAnchorElement;
let registerBtn = document.querySelector(".register-btn") as HTMLButtonElement;

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    alert("Account has been created");
})

haveAccountRef.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="login.html"
})