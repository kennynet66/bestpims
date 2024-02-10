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
let haveAccountRef = document.querySelector(".have-account-href");
let registerBtn = document.querySelector(".register-btn");
let user_register_form = document.querySelector('#user-register-form');
let first_name = document.querySelector("#first-name-id");
let last_name = document.querySelector("#last-name-id");
let reg_email = document.querySelector("#email");
let reg_pwd = document.querySelector('#password');
let users = [];
function showPopUp() {
    popupDivReg.style.display = "block";
    setTimeout(() => {
        popupDivReg.style.display = "none";
    }, 3000);
}
haveAccountRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
user_register_form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    let isvalid = first_name.value.trim() != "" &&
        last_name.value.trim() != "" &&
        email.value.trim() != "" &&
        password.value.trim() != "";
    if (!isvalid) {
        return alert("Please fill in all the fields");
    }
    else {
        let full_name = first_name.value.trim() + last_name.value.trim();
        let user_email = email.value.trim();
        let user_password = password.value.trim();
        try {
            const res = yield fetch('http://localhost:5000/auth/signup', {
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    full_name: full_name,
                    email: user_email,
                    password: user_password
                }),
            });
            const data = yield res.json();
            if (data.code === "EREQUEST") {
                console.log("Email exists");
            }
            else {
                window.location.href = "login.html";
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}));
