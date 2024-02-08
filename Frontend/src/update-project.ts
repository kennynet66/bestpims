let logoutAdminUpdateBtn = document.querySelector(".logout-btn") as HTMLButtonElement;
let overviewUpdateBtn=document.querySelector(".overview-btn")   as HTMLButtonElement;
let createProBtn = document.querySelector(".create-btn") as HTMLButtonElement;
let updateProjectBtn=document.querySelector(".create-project-btn") as HTMLButtonElement;
let popupDivUp = document.querySelector(".popup") as HTMLDivElement;
let projectNameUpt=document.querySelector(".name-input")as HTMLInputElement;
let projectDescUpt = document.querySelector(".desc-textarea") as HTMLTextAreaElement;
let projectDateUpt = document.querySelector(".end-date") as HTMLInputElement;
let projectAssigneeUpt = document.querySelector(".name-select") as HTMLSelectElement;

logoutAdminUpdateBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html";
})

overviewUpdateBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-dashboard.html";
})

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
