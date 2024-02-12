let logoutBtn=document.querySelector(".logout-btn") as HTMLButtonElement;
let todoDiv = document.querySelector(".todo-content") as HTMLDivElement;
let todoCont= document.querySelector(".todo-container") as HTMLDivElement;
let completedCont = document.querySelector(".completed-container") as HTMLDivElement;
let todoBtn=document.querySelector(".todo-btn") as HTMLButtonElement;
let completeBtn = document.querySelector(".complete-btn") as HTMLButtonElement;
let projects: any[] = [];

logoutBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="login.html"
})

function resizeScreen() {
    if (window.screen.width < 426) {
        completedCont.style.display = "none";
        todoCont.style.display = "flex";
        completeBtn.style.backgroundColor = "whitesmoke";
        todoBtn.style.backgroundColor = "rgb(179, 175, 175)";
    } 
    else {
        completedCont.style.display = "flex";
        todoCont.style.display = "flex";
    }
}

completeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    completedCont.style.display = "flex";
    todoCont.style.display = "none";
    completeBtn.style.backgroundColor = "rgb(179, 175, 175)";
    todoBtn.style.backgroundColor = "whitesmoke";
});

todoBtn.addEventListener("click", (e) => {
    e.preventDefault();

    completedCont.style.display = "none";
    todoCont.style.display = "flex";
    completeBtn.style.backgroundColor = "whitesmoke";
    todoBtn.style.backgroundColor = "rgb(179, 175, 175)";
});

window.addEventListener("resize", () => {
    resizeScreen();
});

resizeScreen();

function retrieveDataUser() {
  let stProjects = localStorage.getItem("Project");
  let storedProjects = JSON.parse(stProjects);
  projects = storedProjects;

  displayProjectsUser();
}
function displayProjectsUser(){
    projects.forEach(project => {
            
        let projectNameUser=document.createElement("h3");
        projectNameUser.classList.add("project-title");
        projectNameUser.textContent=project.projectName;

        let projectDescUser = document.createElement("p");
        projectDescUser.classList.add("project-desc");
        projectDescUser.textContent=project.projectDesc;

        let projectEndDateUser = document.createElement("p");
        projectEndDateUser.classList.add("end-date");
        projectEndDateUser.textContent=`End date: ${project.projectEndDate}`

        let markComplete = document.createElement("input");
        markComplete.type="checkbox"
        markComplete.classList.add("mark")
        markComplete.textContent="Mark as completed"

        let labelText = document.createTextNode(" Mark as completed");

        let contentDiv = document.createElement("div");
        contentDiv.classList.add("content-text");

        let markDiv = document.createElement("div");
        markDiv.classList.add("mark-div")

        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-content");

        contentDiv.appendChild(projectNameUser);
        contentDiv.appendChild(projectDescUser);
        contentDiv.appendChild(projectEndDateUser);
        markDiv.appendChild(markComplete);
        markDiv.appendChild(labelText);
        todoDiv.appendChild(contentDiv);
        todoDiv.appendChild(markDiv);
        todoCont.appendChild(todoDiv)
    });
}

retrieveDataUser();