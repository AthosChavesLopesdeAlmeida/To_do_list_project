const createProjectBtn = document.getElementById('addProjectBtn')
const createProjectModal = document.getElementById('createProjectModal')
const createTaskModal = document.getElementById('createTaskModal')
const submitProjectButton = document.getElementById('submitProjectButton')
let projects = []

createProjectBtn.addEventListener('click', function(){
  createProjectModal.style.display = 'block'
  createTaskModal.style.display = 'none'
})

