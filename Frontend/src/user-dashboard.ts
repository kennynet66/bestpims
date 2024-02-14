let logoutBtn = document.querySelector(".logout-btn") as HTMLButtonElement;
let todoDiv = document.querySelector(".todo-content") as HTMLDivElement;
let todoCont = document.querySelector(".display-todos") as HTMLDivElement;
let completedCont = document.querySelector(".completed-container") as HTMLDivElement;
let todoBtn = document.querySelector(".todo-btn") as HTMLButtonElement;
let completeBtn = document.querySelector(".complete-btn") as HTMLButtonElement;

// load HTML ELEMENTS
const userName = document.querySelector('#user-name') as HTMLParagraphElement;
const userEmail = document.querySelector('#user-email') as HTMLParagraphElement;
const compCont = document.querySelector(".display-completed") as HTMLDivElement;
// Interfaces
interface projectInterface {
    asignee_name: string
    assigned_to: string
    end_date: string
    isCompleted: boolean
    project_description: string
    project_id: string
    project_name: string
}

// arrays
let projects: projectInterface[] = []; //Incomplete project
let completedArr: projectInterface[] = [] // Completed 

let currentUser!:any


logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "login.html"
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

window.onload = () => {
    retrieveDataUser()
}

async function retrieveDataUser() {
    const res = (await fetch('http://localhost:5000/project/userprojects', {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            token: getUserToken()
        },
        method: 'GET'
    }));
    let data = await res.json()
    data.projects.forEach((project: projectInterface) => {
        if (!project.isCompleted) {
            projects.push(project)
        } else {
            completedArr.push(project)
        }
        displayProjectsUser()
        completedProjects()
    })

    const user = await fetch(`http://localhost:5000/users/${data.id}`, {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            token: getUserToken()
        },
        method: 'GET'
    })

    currentUser = await user.json()

    userName.textContent = currentUser.result[0].full_name
    userEmail.textContent = currentUser.result[0].email

}

function displayProjectsUser() {

    todoCont.textContent = ""
    if (projects.length >= 1) {
        projects.forEach(project => {

            let projectNameUser = document.createElement("h3");
            projectNameUser.classList.add("project-title");
            projectNameUser.textContent = project.project_name;

            let projectDescUser = document.createElement("p");
            projectDescUser.classList.add("project-desc");
            projectDescUser.textContent = project.project_description;

            let projectEndDateUser = document.createElement("p");
            projectEndDateUser.classList.add("end-date");
            projectEndDateUser.textContent = `End date: ${project.end_date}`

            let markComplete = document.createElement("input");
            markComplete.type = "checkbox"
            markComplete.classList.add("mark")
            markComplete.textContent = "Mark as completed"
            markComplete.addEventListener('change', async () => {

                completeProject(project.project_id);

            })

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
    } else {
        let emptArr = document.createElement('h1')
        emptArr.textContent = "You are all caught up"

        todoCont.appendChild(emptArr)
    }

}

function completedProjects() {

    compCont.textContent = ""
    if (completedArr.length >= 1) {
        completedArr.forEach(project => {

            let projectNameUser = document.createElement("h3");
            projectNameUser.classList.add("project-title");
            projectNameUser.textContent = project.project_name;

            let projectDescUser = document.createElement("p");
            projectDescUser.classList.add("project-desc");
            projectDescUser.textContent = project.project_description;

            let projectEndDateUser = document.createElement("p");
            projectEndDateUser.className ="end-date-complete"
            projectEndDateUser.classList.add("end-date");
            projectEndDateUser.textContent = `End date: ${project.end_date}`

            let markComplete = document.createElement("input");
            markComplete.type = "checkbox"
            markComplete.classList.add("mark")
            markComplete.textContent = "Mark as completed"
            markComplete.checked = true
            markComplete.disabled = true

            let labelText = document.createTextNode(" Completed");

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
            compCont.appendChild(todoDiv)
        });
    } else {
        let emptArr = document.createElement('h1')
        // emptArr.className = "empthead"
        emptArr.textContent = "Complete projects to see them here"

        compCont.appendChild(emptArr)
    }

}

async function completeProject(project_id: string) {
    let res = await fetch(`http://localhost:5000/project/complete/${project_id}`, {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            token: getUserToken()
        },
        method: 'POST',
        body: JSON.stringify({
            assigned_to: currentUser.result[0].user_id
        })
    })

    console.log(res);
    
}

function getUserToken() {
    let token = localStorage.getItem('userToken') as string
    return JSON.parse(token)
}