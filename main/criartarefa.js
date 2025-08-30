const addTaskBtn = document.getElementById('addTaskBtn')
const createTaskModal = document.getElementById('createTaskModal')
const createProjectModal = document.getElementById('createProjectModal')

const taskNameInput = document.getElementById('taskNameInput')
const taskDueDate = document.getElementById('taskDueDate')
const taskProject = document.getElementById('taskProject')

const taskName = document.getElementsByClassName('taskTitle')
const taskDeadline = document.getElementById('taskDealine')
const taskdelete = document.getElementById('taskDelete')


addTaskBtn.addEventListener('click', function(){
  createTaskModal.style.display = 'block'
  createProjectModal.style.display = 'none'
})



function createTask(){
  const newTask = document.createElement('div')
  newTask.classList.add('task')
}