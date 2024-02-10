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
// arrays
let projectsArr = [];
// When window loads
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    yield retrieveData();
    displayProjects();
});
logoutAdminBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
createProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "create-project.html";
});
function retrieveData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield fetch('http://localhost:5000/project');
            let projects = yield res.json();
            projects.projects.forEach((project) => {
                projectsArr.push(project);
            });
        }
        catch (error) {
            console.log(error);
        }
        //   let data:any = localStorage.getItem("Project");
        //   data = JSON.parse(data);
        //   if(!data){
        //       displayProjects()
        //   } else{
        //       data.forEach((el:any)=>{
        //           projectsArr.push(el)
        //       })
        //       console.log(projectsArr);
        // localStorage.setItem("Project", JSON.stringify(projectsArr));
        // displayProjects()
        //   }
        // displayProjects();
    });
}
function displayProjects() {
    let allProjects = document.querySelectorAll('.data-rows');
    allProjects.forEach(el => { el.remove(); });
    projectsArr.forEach((project, index) => {
        let dataRow = document.createElement("tr");
        dataRow.classList.add("data-rows");
        let dataCell1 = document.createElement("td");
        dataCell1.classList.add("data-cell1");
        dataCell1.textContent = project.project_id;
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
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            });
            let data = yield res.json();
            if (data.message === "success") {
                window.location.reload();
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
function deleteProject(index) {
    projectsArr.splice(index, 1);
    displayProjects();
    localStorage.setItem("Project", JSON.stringify(projectsArr));
}
