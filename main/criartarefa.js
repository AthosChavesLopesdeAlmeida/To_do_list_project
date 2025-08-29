const addTaskBtn = document.getElementById('addTaskBtn')
const createTaskModal = document.getElementById('createTaskModal')
const createProjectModal = document.getElementById('createProjectModal')

addTaskBtn.addEventListener('click', function(){
  createTaskModal.style.display = 'block'
  createProjectModal.style.display = 'none'
})
