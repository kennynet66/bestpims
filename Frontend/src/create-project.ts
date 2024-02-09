let logoutAdminButton = document.querySelector(".logout-btn") as HTMLButtonElement;
let overviewBtn=document.querySelector(".overview-btn")   as HTMLButtonElement;
let popupDiv=document.querySelector(".popup") as HTMLDivElement;
let projectForm = document.querySelector('#project-create-form') as HTMLFormElement;
let projectName = document.querySelector(".name-input") as HTMLInputElement;
let projectDesc = document.querySelector(".desc-textarea") as HTMLTextAreaElement;
let projectAssignee = document.querySelector("#select") as HTMLSelectElement;
let projectEndDate = document.querySelector(".end-date") as HTMLInputElement;

// Interfaces
interface newUser {
    user_id: string
    full_name: string
    email: string
    password: string
}

interface newProject {
    project_name: string,
    project_description: string,
    assigned_to: string,
    end_date: string
}

// Arrays
let userArray: newUser[] = []

window.onload = async () => {
    await getUsers()

    userArray.forEach((user) =>{
        let opt = document.createElement('option');
        opt.setAttribute('id', user.user_id)
        opt.value = user.user_id
        opt.textContent = user.full_name
        projectAssignee.appendChild(opt);
    })

}

async function getUsers() {
    try {
        let res = await fetch('http://localhost:5000/users')

        let users = await res.json()

        users.users.forEach((user: newUser) =>{
            userArray.push(user)
        })
        console.log(userArray);
        return userArray
        
    } catch (error) {
        console.log(error);
    }
}

projectForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    let isValid =
     projectName.value.trim() != "" &&
     projectDesc.value.trim() != "" &&
     projectAssignee.value.trim() != "" &&
     projectEndDate.value.trim() != ""

     if(!isValid) {
        alert("All fields are required")
     } else {

        let project: newProject = {
            project_name: projectName.value.trim(),
            project_description: projectDesc.value.trim(),
            assigned_to: projectAssignee.value.trim(),
            end_date: projectEndDate.value.trim()
        }
        
        let res = await fetch('http://localhost:5000/project/newproject', {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            project_name: project.project_name,
            project_description: project.project_description,
            assigned_to: project.assigned_to,
            end_date: project.end_date
        })
        });

        let data = await res.json()
        success()
        projectForm.reset()
        
     }
})

overviewBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-dashboard.html";
    
})

function success(){
    popupDiv.style.display = "block";

    setTimeout(() => {
      popupDiv.style.display = "none";
    }, 3000);
}