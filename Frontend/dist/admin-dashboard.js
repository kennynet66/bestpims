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
let logoutAdminBtn = document.querySelector(".logout-btn");
let createProjectBtn = document.querySelector(".create-btn");
let editBtn = document.querySelector(".edit-btn");
let table = document.querySelector(".table");
let noProjects = document.querySelector('.no-projects');
// arrays
let projectsArr = [];
// When window loads
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    yield retrieveData();
});
logoutAdminBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
createProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "create-project.html";
});
function retrieveData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield fetch('http://localhost:5000/project', {
                headers: {
                    token: getAdmin_Token()
                },
                method: 'GET'
            });
            let projects = yield res.json();
            projects.projects.forEach((project) => {
                projectsArr.push(project);
            });
            displayProjects();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function displayProjects() {
    let allProjects = document.querySelectorAll('.data-rows');
    allProjects.forEach(el => {
        el.textContent = "";
        el.remove();
    });
    noProjects.textContent = "";
    if (projectsArr.length >= 1) {
        projectsArr.forEach((project, index) => {
            let dataRow = document.createElement("tr");
            dataRow.classList.add("data-rows");
            let dataCell1 = document.createElement("td");
            dataCell1.classList.add("data-cell1");
            dataCell1.textContent = `${index + 1}`;
            let dataCell2 = document.createElement("td");
            dataCell2.classList.add("data-cell2");
            dataCell2.textContent = project.project_name;
            let dataCell3 = document.createElement("td");
            dataCell3.classList.add("data-cell3");
            dataCell3.textContent = project.project_description;
            let dataCell4 = document.createElement("td");
            dataCell4.classList.add("data-cell");
            dataCell4.textContent = project.asignee_name;
            let dataCell5 = document.createElement("td");
            dataCell5.classList.add("data-cell");
            dataCell5.textContent = project.end_date;
            let dataCell6 = document.createElement("td");
            dataCell6.classList.add("data-cell");
            let dataCell7 = document.createElement("td");
            dataCell7.classList.add("data-cell");
            let editBtnCreate = document.createElement("button");
            editBtnCreate.classList.add("edit-btn");
            editBtnCreate.textContent = "Edit";
            editBtnCreate.addEventListener('click', () => {
                console.log("clicked");
            });
            let deleteBtnCreate = document.createElement("button");
            deleteBtnCreate.classList.add("delete-btn");
            deleteBtnCreate.textContent = "Delete";
            deleteBtnCreate.addEventListener("click", (e) => __awaiter(this, void 0, void 0, function* () {
                let res = yield fetch(` http://localhost:5000/project/delete/${project.project_id}`, {
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                        token: getAdmin_Token()
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        assigned_to: project.assigned_to
                    })
                });
                let data = yield res.json();
                console.log(data);
                if (data.message === "success") {
                    projectsArr = [];
                    yield retrieveData();
                }
                else {
                    console.log("Couldn't delete");
                }
            }));
            dataCell6.appendChild(editBtnCreate);
            dataCell7.appendChild(deleteBtnCreate);
            dataRow.appendChild(dataCell1);
            dataRow.appendChild(dataCell2);
            dataRow.appendChild(dataCell3);
            dataRow.appendChild(dataCell4);
            dataRow.appendChild(dataCell5);
            dataRow.appendChild(dataCell6);
            dataRow.appendChild(dataCell7);
            table.appendChild(dataRow);
        });
    }
    else {
        // let emptyArray = document.createElement('h1')
        noProjects.textContent = "No Projects Assigned to users";
        // table.appendChild(emptyArray)
    }
}
function getAdmin_Token() {
    let token = localStorage.getItem('adminToken');
    return token = JSON.parse(token);
}
