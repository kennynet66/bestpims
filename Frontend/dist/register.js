"use strict";
let haveAccountRef = document.querySelector(".have-account-href");
let registerBtn = document.querySelector(".register-btn");
let user_register_form = document.querySelector('#user-register-form');
let first_name = document.querySelector("#first-name-id");
let last_name = document.querySelector("#last-name-id");
let reg_email = document.querySelector("#email");
let reg_pwd = document.querySelector('#password');
// registerBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     alert("Account has been created");
// })
let users = [];
window.onload = () => {
    let data = localStorage.getItem("pimsUser");
    data = JSON.parse(data);
    if (!data) {
        return false;
    }
    else {
        data.forEach((user) => {
            users.push(user);
        });
        saves.saveUser();
    }
};
haveAccountRef.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
user_register_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isvalid = first_name.value.trim() != "" &&
        last_name.value.trim() != "" &&
        email.value.trim() != "" &&
        password.value.trim() != "";
    if (!isvalid) {
        return alert("Please fill in all the fields");
    }
    else {
        let user = {
            id: users.length + 1,
            fullName: first_name.value.trim() + last_name.value.trim(),
            email: email.value.trim(),
            password: password.value.trim(),
            status: "user"
        };
        users.push(user);
        saves.saveUser();
        alert("Account has been created and logged in");
        window.location.href = "user-dashboard.html";
    }
});
// Classes to handle saving and retrieval of the local storage
class localSaves {
    saveUser() {
        return localStorage.setItem('pimsUser', JSON.stringify(users));
    }
}
let saves = new localSaves;
