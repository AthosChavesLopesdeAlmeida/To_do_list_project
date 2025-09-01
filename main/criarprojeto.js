import { getElements } from './elementos.js'
let projetos = []

function openProjectModal() {
  els.createProjectModal.style.display = 'block'
  els.createTaskModal.style.display = 'none'

  els.projectNameInput.value = ''
}

els.createNewProject.addEventListener('click', function(){
  openProjectModal()
})
