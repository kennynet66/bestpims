// load required elements
let loginBtn = document.querySelector(".login-btn") as HTMLButtonElement;
let loginAdminBtn=document.querySelector(".admin-btn") as HTMLButtonElement;
let createAccountRef = document.querySelector(".no-account-href") as HTMLAnchorElement;
let forgotPwdRef = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;

// Load form elements and inputs
let form = document.querySelector('#user-login-form') as HTMLFormElement
let email = document.querySelector('#email') as HTMLInputElement
let password = document.querySelector('#password') as HTMLInputElement

interface userInterface{
    email: string,
    password: string
}

let storedUser: newUser[] = []

window.onload = ()=> {
    let data:any = localStorage.getItem("pimsUser")
    data = JSON.parse(data);
    

    if(!data) {
        return false
    } else {
        data.forEach((user:any) => {
            storedUser.push(user)
        });
        localStorage.setItem("pimsUser", JSON.stringify(storedUser))
    }
}


loginAdminBtn.addEventListener("click",(e)=>{
    window.location.href="admin-login.html";
});

createAccountRef.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="register.html";
});

forgotPwdRef.addEventListener("click",(e)=>{
    e.preventDefault();
    
    window.location.href="forgot-password.html";
});

// Submit the form
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    let isvalid = email.value.trim() != "" &&
    password.value.trim() != "";

    if(!isvalid) {
        return alert("Please fill in all the details");
    } else {
        let isEmailValid = false;
        let isPasswordValid = false;
        
        storedUser.forEach((user) => {
            if (email.value.trim() === user.email) {
                isEmailValid = true;
        
                if (password.value.trim() === user.password) {
                    isPasswordValid = true;
                }
            }
        });
        
        if (isEmailValid) {
            if (isPasswordValid) {
                window.location.href = "user-dashboard.html";
                alert("Login success");
            } else {
                alert("Invalid password");
            }
        } else {
            alert("Invalid email");
        }
        
    }

});


    // loginBtn.addEventListener("click",(e)=>{
    //     e.preventDefault();
    
    //     window.location.href="user-dashboard.html";
    // });