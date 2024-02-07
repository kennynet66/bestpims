"use strict";
let logoutAdminBtn = document.querySelector(".logout-btn");
let createProjectBtn = document.querySelector(".create-btn");
let editBtn = document.querySelector(".edit-btn");
let table = document.querySelector(".table");
let projects = [];
logoutAdminBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
createProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "create-project.html";
});
editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "update-project.html";
});
function retrieveData() {
    let stProjects = localStorage.getItem("Project");
    ;
    let storedProjects = JSON.parse(stProjects);
    projects = storedProjects;
    displayProjects();
}
function displayProjects() {
    projects.forEach(project => {
        let dataRow = document.createElement("tr");
        dataRow.classList.add("data-row");
        let dataCell1 = document.createElement("td");
        dataCell1.classList.add("data-cell1");
        dataCell1.textContent = "ID";
        let dataCell2 = document.createElement("td");
        dataCell2.classList.add("data-cell2");
        dataCell2.textContent = project.projectName;
        let dataCell3 = document.createElement("td");
        dataCell3.classList.add("data-cell3");
        dataCell3.textContent = project.projectDesc;
        let dataCell4 = document.createElement("td");
        dataCell4.classList.add("data-cell");
        dataCell4.textContent = project.projectAssignee;
        let dataCell5 = document.createElement("td");
        dataCell5.classList.add("data-cell");
        dataCell5.textContent = project.projectEndDate;
        let dataCell6 = document.createElement("td");
        dataCell6.classList.add("data-cell");
        let dataCell7 = document.createElement("td");
        dataCell7.classList.add("data-cell");
        let editBtnCreate = document.createElement("button");
        editBtnCreate.classList.add("edit-btn");
        editBtnCreate.textContent = "Edit";
        editBtnCreate.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "update-project.html";
        });
        let deleteBtnCreate = document.createElement("button");
        deleteBtnCreate.classList.add("delete-btn");
        deleteBtnCreate.textContent = "Delete";
        deleteBtnCreate.addEventListener("click", (e) => {
            e.preventDefault();
            dataCell6.removeChild(editBtnCreate);
            dataCell7.removeChild(deleteBtnCreate);
            dataRow.removeChild(dataCell1);
            dataRow.removeChild(dataCell2);
            dataRow.removeChild(dataCell3);
            dataRow.removeChild(dataCell4);
            dataRow.removeChild(dataCell5);
            dataRow.removeChild(dataCell6);
            dataRow.removeChild(dataCell7);
            table.removeChild(dataRow);
        });
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
retrieveData();
