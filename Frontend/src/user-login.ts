// load required elements
// let loginBtn = document.querySelector(".login-btn") as HTMLButtonElement;
let loginAdminBtn=document.querySelector(".admin-btn") as HTMLButtonElement;
let createAccountRef = document.querySelector(".no-account-href") as HTMLAnchorElement;
let forgotPwdRef = document.querySelector(".forgot-pwd-href") as HTMLAnchorElement;

// Load form elements and inputs
let form = document.querySelector('#user-login-form') as HTMLFormElement
let email = document.querySelector('#email') as HTMLInputElement
let password = document.querySelector('#password') as HTMLInputElement

// Load error elements
let emailError = document.querySelector('#email-error') as HTMLDivElement
let passError = document.querySelector('#pass-error') as HTMLDivElement

// Load success elements
let loginSuccess = document.querySelector('.success-login') as HTMLDivElement

// Interfaces
interface userInterface{
    email: string,
    password: string
}

// Submit login form
form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    // Reset error divs
    emailError.textContent = "";
    passError.textContent = "";

    let isvalid = email.value.trim() != "" && password.value.trim() != ""

    if(!isvalid) {
        return alert("Please fill in all the fields")
    } else {
        try {
            let loginDetails: userInterface = {
                email: email.value.trim(),
                password: password.value.trim()
            }

            let res = await fetch('http://localhost:5000/auth/login', {
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    email: loginDetails.email,
                    password: loginDetails.password
                })
            });

            let data = await res.json()
            console.log(data);
            
            if (data.emailerror){
                emailError.textContent = "Email not found"
            } else if(data.passerror) {
                passError.textContent = data.passerror
            } else if(data.admin) {
                localStorage.setItem('adminToken', JSON.stringify(data.token))
                admin_login_Success(data.admin)
            } else if(data.user){
                localStorage.setItem('userToken', JSON.stringify(data.token))
                login_Success(data.user)
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
    
});

function login_Success(msg: string) {
    loginSuccess.style.display = "block"
    loginSuccess.textContent = msg
    setTimeout(() => {
        loginSuccess.style.display = "none"
        window.location.href = 'user-dashboard.html'
    }, 3000);
}

function admin_login_Success(msg: string) {
    loginSuccess.style.display = "block"
    loginSuccess.textContent = msg
    setTimeout(() => {
        loginSuccess.style.display = "none"
        window.location.href = 'admin-dashboard.html'
    }, 3000);
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

