const createProjectBtn = document.getElementById('addProjectBtn')
const createProjectModal = document.getElementById('createProjectModal')
const createTaskModal = document.getElementById('createTaskModal')
const submitProjectButton = document.getElementById('submitProjectButton')

const projectsList = document.getElementById('project-list')
const currentProject = document.getElementById('currentProject')
const taskDueDate = document.getElementById('taskDueDate')

let projects = []








createProjectBtn.addEventListener('click', function(){
  createProjectModal.style.display = 'block'
  createTaskModal.style.display = 'none'
})





function createProject(){
  const projectName  = document.getElementById('projectName').value

  if(projectName === ''){
    alert('Insira um nome para o projeto')
  } else if (projects.includes(projectName)) {
    alert('O projeto já existe')
  } else {
    return projectName
  }
}





function pushNewProject(projectName) {
  projects.push(projectName)

  const option = document.createElement('option')
  option.value = projectName
  option.innerHTML = projectName
  taskDueDate.appendChild(option)
}






function createNewProjectButton (projectName) {
  const li  = document.createElement('li')
  const btn = document.createElement('button')

  const safeId = 'project-' + projectName.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')
  btn.id = safeId

  btn.classList.add('nav-btn')
  btn.innerHTML = projectName

  btn.addEventListener('click', function(){
    changeCurrentProject(projectName)
  })

  li.appendChild(btn)
  projectsList.appendChild(li)

  
}





function changeCurrentProject(projectName) {
  currentProject.innerHTML = projectName
}








submitProjectButton.addEventListener('click', function(){
  const projectName = createProject()
  
  if (projectName) {
    pushNewProject(projectName)  
    createNewProjectButton(projectName)
    createProjectModal.style.display = 'none'
    document.getElementById('projectName').value = ''
  }
})