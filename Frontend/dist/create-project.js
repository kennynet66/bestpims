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
let logoutAdminButton = document.querySelector(".logout-btn");
let overviewBtn = document.querySelector(".overview-btn");
let popupDiv = document.querySelector(".popup");
let projectForm = document.querySelector('#project-create-form');
let projectName = document.querySelector(".name-input");
let projectDesc = document.querySelector(".desc-textarea");
let projectAssignee = document.querySelector("#select");
let projectEndDate = document.querySelector(".end-date");
// Arrays
let userArray = [];
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    yield getUsers();
    userArray.forEach((user) => {
        let opt = document.createElement('option');
        opt.setAttribute('id', user.user_id);
        opt.value = user.user_id;
        opt.textContent = user.full_name;
        projectAssignee.appendChild(opt);
    });
});
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield fetch('http://localhost:5000/users');
            let users = yield res.json();
            users.users.forEach((user) => {
                userArray.push(user);
            });
            console.log(userArray);
            return userArray;
        }
        catch (error) {
            console.log(error);
        }
    });
}
projectForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    let isValid = projectName.value.trim() != "" &&
        projectDesc.value.trim() != "" &&
        projectAssignee.value.trim() != "" &&
        projectEndDate.value.trim() != "";
    if (!isValid) {
        alert("All fields are required");
    }
    else {
        let project = {
            project_name: projectName.value.trim(),
            project_description: projectDesc.value.trim(),
            assigned_to: projectAssignee.value.trim(),
            end_date: projectEndDate.value.trim()
        };
        let res = yield fetch('http://localhost:5000/project/newproject', {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                project_name: project.project_name,
                project_description: project.project_description,
                assigned_to: project.assigned_to,
                end_date: project.end_date
            })
        });
        let data = yield res.json();
        success();
        projectForm.reset();
    }
}));
overviewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-dashboard.html";
});
function success() {
    popupDiv.style.display = "block";
    setTimeout(() => {
        popupDiv.style.display = "none";
    }, 3000);
}
