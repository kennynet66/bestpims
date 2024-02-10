"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// load required elements
// let loginBtn = document.querySelector(".login-btn") as HTMLButtonElement;
let loginAdminBtn = document.querySelector(".admin-btn");
let createAccountRef = document.querySelector(".no-account-href");
let forgotPwdRef = document.querySelector(".forgot-pwd-href");
// Load form elements and inputs
let form = document.querySelector('#user-login-form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
// Load error elements
let emailError = document.querySelector('#email-error');
let passError = document.querySelector('#pass-error');
// Load success elements
let loginSuccess = document.querySelector('.success-login');
// Submit login form
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    // Reset error divs
    emailError.textContent = "";
    passError.textContent = "";
    let isvalid = email.value.trim() != "" && password.value.trim() != "";
    if (!isvalid) {
        return alert("Please fill in all the fields");
    }
    else {
        try {
            let loginDetails = {
                email: email.value.trim(),
                password: password.value.trim()
            };
            let res = yield fetch('http://localhost:5000/auth/login', {
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
            let data = yield res.json();
            console.log(data);
            if (data.emailerror) {
                emailError.textContent = "Email not found";
            }
            else if (data.passerror) {
                passError.textContent = data.passerror;
            }
            else if (data.success) {
                localStorage.setItem('token', JSON.stringify(data.token));
                login_Success(data.success);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}));
function login_Success(msg) {
    loginSuccess.style.display = "block";
    loginSuccess.textContent = msg;
    setTimeout(() => {
        loginSuccess.style.display = "none";
        window.location.href = 'user-dashboard.html';
    }, 3000);
}
loginAdminBtn.addEventListener("click", (e) => {
    window.location.href = "admin-login.html";
});
createAccountRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "register.html";
});
forgotPwdRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "forgot-password.html";
});
// let storedUser: newUser[] = []
// window.onload = ()=> {
//     let data:any = localStorage.getItem("pimsUser")
//     data = JSON.parse(data);
//     if(!data) {
//         return false
//     } else {
//         data.forEach((user:any) => {
//             storedUser.push(user)
//         });
//         localStorage.setItem("pimsUser", JSON.stringify(storedUser))
//     }
// }
// Submit the form
// form.addEventListener('submit', (e)=> {
//     e.preventDefault()
//     let isvalid = email.value.trim() != "" &&
//     password.value.trim() != "";
//     if(!isvalid) {
//         return alert("Please fill in all the details");
//     } else {
//         let isEmailValid = false;
//         let isPasswordValid = false;
//         storedUser.forEach((user) => {
//             if (email.value.trim() === user.email) {
//                 isEmailValid = true;
//                 if (password.value.trim() === user.password) {
//                     isPasswordValid = true;
//                 }
//             }
//         });
//         if (isEmailValid) {
//             if (isPasswordValid) {
//                 window.location.href = "user-dashboard.html";
//                 alert("Login success");
//             } else {
//                 alert("Invalid password");
//             }
//         } else {
//             alert("Invalid email");
//         }
//     }
// });
// loginBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     window.location.href="user-dashboard.html";
// });
