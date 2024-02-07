"use strict";
let logoutAdminUpdateBtn = document.querySelector(".logout-btn");
let overviewUpdateBtn = document.querySelector(".overview-btn");
let createProBtn = document.querySelector(".create-btn");
let updateProjectBtn = document.querySelector(".create-project-btn");
let popupDivUp = document.querySelector(".popup");
let projectNameUpt = document.querySelector(".name-input");
let projectDescUpt = document.querySelector(".desc-textarea");
let projectDateUpt = document.querySelector(".end-date");
let projectAssigneeUpt = document.querySelector(".name-select");
logoutAdminUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-login.html";
});
overviewUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "admin-dashboard.html";
});
createProBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "create-project.html";
});
updateProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showPopUpUPT();
});
function showPopUpUPT() {
    popupDivUp.style.display = "block";
    setTimeout(() => {
        popupDivUp.style.display = "none";
    }, 3000);
}
function retrieveDataUpt() {
    let stProjects = localStorage.getItem("Project");
    let storedProjects = JSON.parse(stProjects);
    projects = storedProjects;
    // projectNameUpt.value=projects.projectName;
    // projectDescUpt.value = projects.projectDescUpt;
    // projectAssigneeUpt.value = projects.projectAssignee;
    // projectDateUpt.value = projects.projectEndDate;
}
