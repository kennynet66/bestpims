"use strict";
let logoutBtn = document.querySelector(".logout-btn");
let todoDiv = document.querySelector(".todo-content");
let todoCont = document.querySelector(".todo-container");
let projects = [];
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html";
});
function retrieveDataUser() {
    let stProjects = localStorage.getItem("Project");
    let storedProjects = JSON.parse(stProjects);
    projects = storedProjects;
    displayProjectsUser();
}
function displayProjectsUser() {
    projects.forEach(project => {
        let projectNameUser = document.createElement("h3");
        projectNameUser.classList.add("project-title");
        projectNameUser.textContent = project.projectName;
        let projectDescUser = document.createElement("p");
        projectDescUser.classList.add("project-desc");
        projectDescUser.textContent = project.projectDesc;
        let projectEndDateUser = document.createElement("p");
        projectEndDateUser.classList.add("end-date");
        projectEndDateUser.textContent = `End date: ${project.projectEndDate}`;
        let markComplete = document.createElement("input");
        markComplete.type = "checkbox";
        markComplete.classList.add("mark");
        markComplete.textContent = "Mark as completed";
        let labelText = document.createTextNode(" Mark as completed");
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("content-text");
        let markDiv = document.createElement("div");
        markDiv.classList.add("mark-div");
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-content");
        contentDiv.appendChild(projectNameUser);
        contentDiv.appendChild(projectDescUser);
        contentDiv.appendChild(projectEndDateUser);
        markDiv.appendChild(markComplete);
        markDiv.appendChild(labelText);
        todoDiv.appendChild(contentDiv);
        todoDiv.appendChild(markDiv);
        todoCont.appendChild(todoDiv);
    });
}
retrieveDataUser();
