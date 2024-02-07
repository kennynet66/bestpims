"use strict";
let logoutAdminButton = document.querySelector(".logout-btn");
let overviewBtn = document.querySelector(".overview-btn");
let addProjectBtn = document.querySelector(".create-project-btn");
let popupDiv = document.querySelector(".popup");
let projectName = document.querySelector(".name-input");
let projectDesc = document.querySelector(".desc-textarea");
let projectAssignee = document.querySelector(".name-select");
let projectEndDate = document.querySelector(".end-date");
let projectArray = [];
logoutAdminButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
overviewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-dashboard.html";
});
addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProject();
    showPopUp();
});
function showPopUp() {
    popupDiv.style.display = "block";
    setTimeout(() => {
        popupDiv.style.display = "none";
    }, 3000);
}
function createProject() {
    const projectInfo = {
        projectName: projectName.value,
        projectDesc: projectDesc.value,
        projectAssignee: projectAssignee.value,
        projectEndDate: projectEndDate.value
    };
    projectArray.push(projectInfo);
    const projectInfoArray = JSON.stringify(projectArray);
    localStorage.setItem("Project", projectInfoArray);
}
