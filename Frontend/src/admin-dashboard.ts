let logoutAdminBtn = document.querySelector(".logout-btn") as HTMLButtonElement;
let createProjectBtn=document.querySelector(".create-btn")   as HTMLButtonElement;
let editBtn = document.querySelector(".edit-btn") as HTMLButtonElement;
let table=document.querySelector(".table") as HTMLTableElement;

// Interfaces
interface projectInterface {
  project_id: string;
  project_name: string;
  project_description: string;
  assigned_to: string;
  end_date: string
}

// arrays
let projectsArr: projectInterface[] = [];

// When window loads
window.onload = async() => {
  await retrieveData()
  displayProjects()
}

logoutAdminBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="admin-login.html";
})

createProjectBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    window.location.href="create-project.html";
})

async function retrieveData() {

  try {
    let res = await fetch('http://localhost:5000/project')

    let projects = await res.json()

    projects.projects.forEach((project:projectInterface)=>{
      projectsArr.push(project)
    })
  } catch (error) {
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
}
function displayProjects(){
    // table.textContent =""
    console.log(projectsArr);
    
    let allProjects = document.querySelectorAll('.data-rows') as NodeListOf<HTMLTableRowElement>
    allProjects.forEach(el => {el.remove()})
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
      dataCell4.textContent = project.assigned_to;

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
      editBtnCreate.addEventListener('click', ()=> {
        console.log("clicked");
        
      })

      let deleteBtnCreate = document.createElement("button");
      deleteBtnCreate.classList.add("delete-btn");
      deleteBtnCreate.textContent = "Delete";
      deleteBtnCreate.addEventListener("click", (e) => {
        e.preventDefault();
        deleteProject(index)
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

function deleteProject(index:number){
    projectsArr.splice(index,1);
    displayProjects();
  localStorage.setItem("Project", JSON.stringify(projectsArr));
}
