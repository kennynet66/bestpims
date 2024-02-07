let logoutAdminButton = document.querySelector(".logout-btn") as HTMLButtonElement;
let overviewBtn=document.querySelector(".overview-btn")   as HTMLButtonElement;
let addProjectBtn=document.querySelector(".create-project-btn") as HTMLButtonElement;
let popupDiv=document.querySelector(".popup") as HTMLDivElement;
let projectName = document.querySelector(".name-input") as HTMLInputElement;
let projectDesc = document.querySelector(".desc-textarea") as HTMLTextAreaElement;
let projectAssignee = document.querySelector(".name-select") as HTMLSelectElement;
let projectEndDate = document.querySelector(".end-date") as HTMLInputElement;

let projectArray: any[]=[];

logoutAdminButton.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html";
})

overviewBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-dashboard.html";
})

addProjectBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    createProject();

    showPopUp();
})

function showPopUp(){
    popupDiv.style.display = "block";

    setTimeout(() => {
      popupDiv.style.display = "none";
    }, 3000);
}

function createProject(){
  const projectInfo = {
    projectName: projectName.value,
    projectDesc: projectDesc.value,
    projectAssignee: projectAssignee.value,
    projectEndDate:projectEndDate.value
  };

  projectArray.push(projectInfo);
  const projectInfoArray =JSON.stringify(projectArray);

  localStorage.setItem("Project", projectInfoArray);
}